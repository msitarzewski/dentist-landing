#!/usr/bin/env node
// tools/build-images.mjs
// Builds every photograph the page uses, plus the favicon set and the social card.
//
//   node tools/build-images.mjs                      regenerate everything (same input, same bytes out)
//   node tools/build-images.mjs --markup <file>      also write one paste-ready <picture> per placement
//
// Reads   assets/img/src/*.png (never modified; they carry the generator's C2PA manifest)
// Writes  assets/img/<key>-<width>.{avif,webp,jpg}, the icons, social-card.jpg and manifest.json.
//         Files a previous run listed in manifest.json and this run no longer makes are deleted.
//         Intermediates go to a folder under the system temp directory (TMPDIR) and are removed.
// Needs   magick, cwebp, avifenc (PATH, then /opt/homebrew/bin). Node built-ins only, plus the bite's geometry
//         from tools/bite.mjs (the icons and the card draw the notch from it).
//
// TO ADD AN IMAGE
//   1. Put the PNG in assets/img/src/. Files in rejected/ or named test-* are refused.
//   2. Add an entry to IMAGES below:
//        key     output basename; files become <key>-<width>.<ext>
//        src     file name in assets/img/src/
//        crop    [x, y, width, height] in source pixels to bake in, or null for the full frame
//                (leave null for a photograph that bleeds into a colour field: CSS crops those)
//        ratio   [w, h] of the exported frame
//        widths  export widths. Take each slot's drawn width at 1x and 2x, round up a little, merge
//                near-duplicates. Nothing wider than the crop is ever written (no upscaling).
//        slots   the frame at 1440 / 1024 / 768 / 390 as [w, h] or [w, h, drawnWidth]; null where the
//                picture is not shown. drawnWidth is the width the image itself is painted at when
//                object-fit: cover or a height rule makes it differ from the frame.
//        sizes   the sizes attribute (lengths only: var() does not work there)
//        seam    only for a bleeding portrait: the field colour, the edges that meet it, the flat part of
//                the backdrop, and `inner`: lines inside the frame where CSS puts a feathered edge
//                ([label, side, distance from that side as a fraction])
//   3. Run the script. It fails if a file comes out the wrong size or if encoding moved a seam colour.
//
// The card's and avatar's lettering is drawn from outlines in tools/social-card-type.json (see the
// note in that file); without that file those two are skipped and everything else still builds.

import { spawn, execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { availableParallelism, tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { outline, shapes } from './bite.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'assets/img/src');
const OUT = join(ROOT, 'assets/img');
const WEB = 'assets/img'; // OUT as the page refers to it
const TYPE_FILE = join(ROOT, 'tools/social-card-type.json');

// ---------------------------------------------------------------- encoders
// One setting per format, chosen by eye on the hero at 600 and 1122 wide: the lowest step at which
// skin still shows its freckles at 1:1 (so nothing reads as retouched) and the picture is clean at 2x.
// AVIF quality moves in steps (60 = 61, 64 = 65); 63 is the step below the one where bytes jump.
const ENC = {
  avif: { quality: 63, speed: 4, yuv: '444', cicp: '1/13/6', range: 'full', jobs: 4 }, // jobs is fixed: output is identical for 2 or more
  webp: { quality: 82, method: 6, sharpYuv: true }, // lossy WebP is always 4:2:0; sharp YUV keeps hair on flat colour clean
  jpeg: { quality: 80, sampling: '4:2:0', progressive: true },
};
const RESIZE_FILTER = 'Lanczos'; // in sRGB values, as a browser scales; no sharpening, no colour change
const EXT = { avif: 'avif', webp: 'webp', jpeg: 'jpg' };
const MIME = { avif: 'image/avif', webp: 'image/webp', jpeg: 'image/jpeg' };

// ---------------------------------------------------------------- colours and geometry
const GROUND = '#f9530a';
const PAPER = '#fff4e3';
const INK = '#26120b';
const COUNTER = '#cffb43';
const SEAM_TOLERANCE = 3; // levels per channel against the field (brand/04 section 1b)
const SEAM_DRIFT_MAX = 2; // levels encoding may move a seam away from the source before the build fails
const BREAKPOINTS = [1440, 1024, 768, 390]; // the viewport widths `slots` are given for, in this order

// Slot arithmetic used below (brand/02 section 3): gutter = clamp(16px, 7.086px + 2.2857vw, 40px),
// gap = clamp(12px, 7.543px + 1.1429vw, 24px), 12 columns from 1024, content capped at 1520px.
// One column below 1024 is 100vw - 2 gutters = 95.43vw - 14px between 390 and 1023.
const ONE_COLUMN = 'calc(95.4vw - 14px)';
const C10_C12 = '(min-width: 1600px) 362px, (min-width: 1024px) 22.5vw'; // 322 at 1440, 226 at 1024
// The 4:5 photographs beside the Cost and Closing text: c10-c12 from 1024, about 31% of the width from 640 (189 at 640,
// 229 at 768, 308 at 1023), one full column below 640 (358 at 390). Measured on the page 2026-11-10.
const FRAME_4X5 = [[322, 403], [226, 283], [229, 286], [358, 448]];
const SIDE_4X5 = `${C10_C12}, (min-width: 640px) 31.1vw, ${ONE_COLUMN}`;
// The strip is full-bleed, so its frames keep growing past 1440: hence the 800 and 960 steps (1200 and 1440 for the corn).
const FOOD_SQUARE = { crop: [0, 280, 1122, 1122], ratio: [1, 1], widths: [320, 480, 640, 800, 960], slots: [[320, 320], [228, 228], [171, 171], [240, 240]], sizes: '(min-width: 640px) 22.22vw, 240px' };
const FOOD_CSS = '.foods{display:flex} .food{flex:var(--ar) 1 0;min-width:0} --ar:1 here. img{display:block;width:100%;aspect-ratio:var(--ar)}\n     The square is baked in (source rows 280-1402), so object-fit/object-position:0% 100% are no longer needed.\n     Below 640: scroll-snap rail, .food{flex:none;width:calc(240px * var(--ar))}. No gaps, no notch.';

// Page order. `slots` are [1440, 1024, 768, 390]; the 768 figures are computed from the CSS, the
// others are the designer's measurements (brand/04 section 1a).
const IMAGES = [
  {
    key: 'paloma-hero', section: '3 Hero, ground field', eager: true,
    // Art-directed. From 1024 the whole 4:5 frame fills the figure. Below 1024 the figure is a band 100vw wide that
    // shows well under half of the frame's height, so phones and tablets get that part only: source rows 41 to 757.
    // The crop's top is the page's object-position y (6%) times the height it removes: 0.06 x (1402 - 716) = 41.
    // Cut there, the band lands on the same pixels as the full frame did with the SAME object-position: 100% 6%, at
    // every figure size no taller than 0.638 x its width. Change that 6% in page.css and this 41 must follow it.
    // At 1122 wide the AVIF drops from 70 kB to 41 kB.
    art: [
      { key: 'paloma-hero', media: '(min-width: 1024px)', preloadMedia: '(min-width: 1024px)', src: 'paloma-hero.png', crop: null, ratio: [1122, 1402], widths: [640, 800, 1122],
        slots: [[593, 710, 593], [421, 673, 539], null, null], sizes: 'max(41.2vw, 560px)', // as wide as the figure or 0.8 x the hero's height, whichever is more
        seam: { token: '--ground', field: GROUND, edges: ['left', 'top'], flat: [0, 0, 0.33, 1], inner: [['band top below 1024', 'top', 0.04], ['left at 1024', 'left', 0.247]] } },
      { key: 'paloma-hero-band', preloadMedia: '(max-width: 1023.98px)', src: 'paloma-hero.png', crop: [0, 41, 1122, 716], ratio: [1122, 716], widths: [640, 800, 1122],
        slots: [null, null, [768, 246, 768], [390, 193, 390]], sizes: '100vw' },
    ],
    css: 'figure: c8 to the right page edge, full hero height, behind the text (z-index:-1 in an isolated hero).\n     img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:100% 0%;\n       mask-image:linear-gradient(to right,#0000 0,#000 72px)}   (+ -webkit-mask-image)\n     Below 1024: full-bleed band, height min(32vw,290px) from 640, clamp(150px,24svh,204px) below 640 (rows grow with the text: minmax(var(--fig-h), auto)),\n       filled by the -band crop; object-position:100% 6% (unchanged); mask-image:linear-gradient(#0000 0,#000 32px). Not bitten, no caption.',
  },
  { key: 'bite-apple', src: 'bite-apple.png', ...FOOD_SQUARE, section: '6 Food strip, 1 of 4', css: FOOD_CSS + '\n     Caption: Apple.' },
  { key: 'bite-toast', src: 'bite-toast.png', ...FOOD_SQUARE, section: '6 Food strip, 2 of 4', css: FOOD_CSS + '\n     Caption: Toast.' },
  {
    key: 'bite-corn', src: 'bite-corn.png', crop: null, ratio: [3, 2], widths: [480, 720, 960, 1200, 1440],
    section: '6 Food strip, 3 of 4',
    slots: [[480, 320], [341, 228], [256, 171], [360, 240]],
    sizes: '(min-width: 640px) 33.33vw, 360px',
    css: 'As the squares, with --ar:1.5 (full frame). Caption: Corn.',
  },
  { key: 'bite-taco', src: 'bite-taco.png', ...FOOD_SQUARE, section: '6 Food strip, 4 of 4', css: FOOD_CSS + '\n     Caption: Taco.' },
  {
    key: 'paloma-listening', src: 'paloma-listening.png', crop: null, ratio: [3, 2], widths: [480, 720, 1080, 1536],
    section: '8 Comfort, paper',
    slots: [[668, 445], [472, 315], [351, 234], [358, 239]],   // measured 2026-11-10: 351px at 768 (two columns from 768)
    sizes: `(min-width: 1600px) 748px, (min-width: 1024px) 46.6vw, (min-width: 768px) 47.2vw, ${ONE_COLUMN}`,
    css: 'figure in c1-c6 under the heading; 768 to 1023 about 47% of the width; below 768 one column, between heading and text.\n     img{display:block;width:100%;aspect-ratio:3/2;object-fit:cover;object-position:50% 50%}. Full frame, square, no rule, no bite, no caption.',
  },
  {
    key: 'paloma-apple', src: 'paloma-apple.png', crop: null, ratio: [1122, 1402], widths: [640, 820, 1122],
    section: '9 Meet the dentist, counter field (bleeding portrait)',
    slots: [[593, 1007, 806], [421, 991, 636], [768, 460, 768], [390, 273, 390]],
    sizes: '(min-width: 1024px) min(62vw, 810px), 100vw',
    seam: { token: '--counter', field: COUNTER, edges: ['right', 'top'], flat: [0.67, 0, 1, 1], inner: [['band top below 1024', 'top', 0.02]] },
    css: 'figure: c1-c5 out to the left page edge, behind the text; from 1024 .dentist-fig{container-type:size}\n     img{position:absolute;left:0;bottom:0;height:min(100cqh,189cqw);width:auto;max-width:none;\n       mask-image:linear-gradient(to left,#0000 0,#000 72px),linear-gradient(#0000 0,#000 32px);mask-composite:intersect}\n       (+ -webkit-mask-image, -webkit-mask-composite:source-in)\n     Below 1024: full-bleed band first in the section, height min(70vw,460px); object-fit:cover;object-position:0% 4%;\n       mask-image:linear-gradient(#0000 0,#000 32px). Caption: Paloma. Apple.',
  },
  {
    key: 'paloma-drawing', section: '9 Meet the dentist, beside the pull line',
    css: 'From 640: in .ptsrow beside the pull line, aspect-ratio:4/5 (c10-c12 from 1024; 36% of the width from 640 to 1023). The crop\n     (source 90-910 x 0-1024, the designer\'s object-fit:cover;object-position:12.6% 50%) is baked into the -4x5 files.\n     Below 640: under the pull line, full frame, aspect-ratio:3/2.\n     img{display:block;width:100%}. Square, no rule, no bite. Caption: The pad. The marker.',
    art: [
      // the 4:5 frame starts at 640 (page.css .ptsrow), so the 4:5 files do too: below 1024 the 3:2 file used to be cropped to 4:5 by object-fit
      { key: 'paloma-drawing-4x5', media: '(min-width: 640px)', src: 'paloma-drawing.png', crop: [90, 0, 820, 1024], ratio: [4, 5], widths: [360, 480, 720], slots: [[322, 403], [226, 283], [270, 338], null], sizes: '(min-width: 1600px) 362px, (min-width: 1024px) 22.5vw, 36.3vw' },
      { key: 'paloma-drawing', src: 'paloma-drawing.png', crop: null, ratio: [3, 2], widths: [720, 1080, 1536], slots: [null, null, null, [358, 239]], sizes: ONE_COLUMN },
    ],
  },
  {
    key: 'the-drawing', src: 'the-drawing.png', crop: null, ratio: [4, 5], widths: [360, 480, 720],
    section: '11 Cost, ground field',
    slots: FRAME_4X5, sizes: SIDE_4X5,
    css: 'figure in c10-c12, top-aligned with the heading; 640 to 1023 about 31% of the width; below 640 one column, after the buttons.\n     img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover}. Bitten top right, tile 25% of the width\n     (do not enlarge the notch on this frame). Square. Caption: Fillings from $190.',
  },
  {
    key: 'storefront', src: 'storefront.png', crop: null, ratio: [3, 2], widths: [570, 810, 1140, 1536],
    section: '12 Find us, paper',
    slots: [[783, 522], [554, 369], [412, 275], [358, 239]],   // measured 2026-11-10: 412px at 768 (two columns from 768)
    sizes: `(min-width: 1600px) 877px, (min-width: 1024px) 54.6vw, (min-width: 768px) 55.2vw, ${ONE_COLUMN}`,
    css: 'figure in c1-c7 under the heading; 768 to 1023 about 55% of the width; below 768 one column, between heading and status.\n     img{display:block;width:100%;aspect-ratio:3/2;object-fit:cover}. Full frame, square, no rule, no bite.\n     Caption: The front door, 2217 Tejocote Street. Stand-in photo; parking, the nearest bus stop and the entrance are still to be confirmed.',
  },
  // 13 FAQ: the page dropped its portrait on 2026-11-10 (paloma-laughing.png stays in src/). To bring it back, restore
  // { key: 'paloma-laughing', src: 'paloma-laughing.png', crop: [380, 20, 720, 900], ratio: [4, 5], widths: [360, 480, 720], ... }
  // with slots and sizes measured on the page, and run this script.
  {
    key: 'bite-peach', src: 'bite-peach.png', crop: null, ratio: [4, 5], widths: [360, 480, 720],
    section: '14 Closing, ground field',
    slots: FRAME_4X5, sizes: SIDE_4X5,
    css: 'figure in c10-c12, top-aligned with the heading; 640 to 1023 about 31% of the width; below 640 one column, after the hours line.\n     img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover}. Bitten top right, tile 25%. Square. Caption: Peach.',
  },
];

// Sources the placement document rules out. the-drawing-nowords.png may replace the-drawing.png
// (if the filling price changes) but the two are never both used.
const NEVER = [/^rejected\//, /^test-/, /^comfort-headphones\.png$/];

// ---------------------------------------------------------------- small helpers
const bin = (name) => {
  for (const dir of [...(process.env.PATH || '').split(':'), '/opt/homebrew/bin', '/usr/local/bin']) {
    if (dir && existsSync(join(dir, name))) return join(dir, name);
  }
  throw new Error(`${name} not found (looked on PATH and in /opt/homebrew/bin)`);
};
const MAGICK = bin('magick'); const CWEBP = bin('cwebp'); const AVIFENC = bin('avifenc');

const run = (cmd, args) => new Promise((done, fail) => {
  const child = spawn(cmd, args, { stdio: ['ignore', 'ignore', 'pipe'] });
  let err = '';
  child.stderr.on('data', (d) => { err += d; });
  child.on('error', fail);
  child.on('close', (code) => (code === 0 ? done() : fail(new Error(`${cmd} ${args.join(' ')}\n${err}`))));
});
const pool = async (jobs, width) => {
  let next = 0;
  await Promise.all(Array.from({ length: width }, async () => { while (next < jobs.length) await jobs[next++](); }));
};
const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const signed = (n) => (n > 0 ? `+${n}` : `${n}`);
const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
const web = (file) => `${WEB}/${file}`;
const dimsOf = (file) => execFileSync(MAGICK, ['identify', '-ping', '-format', '%w %h', file]).toString().trim().split(' ').map(Number);
const pixelsOf = (file) => {
  const [w, h] = dimsOf(file);
  const buf = execFileSync(MAGICK, [file, '-alpha', 'off', '-depth', '8', 'rgb:-'], { maxBuffer: w * h * 3 + 1024 });
  return { w, h, buf };
};

// ---------------------------------------------------------------- plan
// Flatten IMAGES (an entry with `art` holds one file set per media query) into file sets.
const sets = IMAGES.flatMap((img) => (img.art ? img.art.map((a) => ({ ...a, placement: img })) : [{ ...img, placement: img }]));

function plan() {
  const seenSrc = new Set();
  for (const set of sets) {
    if (NEVER.some((re) => re.test(set.src))) throw new Error(`${set.key}: ${set.src} is not a used image (brand/04 section 1a)`);
    if (!existsSync(join(SRC, set.src))) throw new Error(`${set.key}: missing ${join(SRC, set.src)}`);
    if (set.slots.length !== BREAKPOINTS.length) throw new Error(`${set.key}: slots needs one entry (or null) for each of ${BREAKPOINTS.join(', ')}`);
    seenSrc.add(set.src);
    const [sw, sh] = dimsOf(join(SRC, set.src));
    set.sourceSize = [sw, sh];
    const [cx, cy, cw, ch] = set.crop || [0, 0, sw, sh];
    if (cx + cw > sw || cy + ch > sh) throw new Error(`${set.key}: crop runs outside the ${sw}x${sh} source`);
    const want = set.ratio[0] / set.ratio[1];
    if (Math.abs(cw / ch / want - 1) > 0.002) throw new Error(`${set.key}: crop ${cw}x${ch} is not ${set.ratio.join(':')}`);
    set.box = [cx, cy, cw, ch];
    set.variants = [];
    for (const width of [...set.widths].sort((a, b) => a - b)) {
      if (width > cw) throw new Error(`${set.key}: ${width} is wider than its ${cw}px source (no upscaling)`);
      const height = Math.round(width / want);
      for (const format of ['avif', 'webp', 'jpeg']) set.variants.push({ format, width, height, file: `${set.key}-${width}.${EXT[format]}` });
    }
  }
  if (seenSrc.has('the-drawing.png') && seenSrc.has('the-drawing-nowords.png')) throw new Error('the-drawing and the-drawing-nowords are never both used');
}

// ---------------------------------------------------------------- encode
async function encodeAll(tmp) {
  const jobs = [];
  for (const set of sets) {
    const [cx, cy, cw, ch] = set.box;
    const widths = [...new Set(set.variants.map((v) => v.width))];
    for (const width of widths) {
      const group = set.variants.filter((v) => v.width === width);
      const { height } = group[0];
      jobs.push(async () => {
        // One lossless intermediate per size: crop, then scale, nothing else. No ancillary PNG chunks,
        // so no encoder can read a gamma or profile into it; the sources are untagged sRGB.
        const ref = join(tmp, `${set.key}-${width}.png`);
        const ops = [join(SRC, set.src), '-alpha', 'off'];
        if (set.crop) ops.push('-crop', `${cw}x${ch}+${cx}+${cy}`, '+repage');
        if (width !== cw || height !== ch) ops.push('-filter', RESIZE_FILTER, '-resize', `${width}x${height}!`);
        ops.push('-strip', '-define', 'png:exclude-chunks=all', '-define', 'png:compression-level=1', ref);
        await run(MAGICK, ops);
        const out = (format) => join(OUT, group.find((v) => v.format === format).file);
        await Promise.all([
          run(AVIFENC, ['-q', `${ENC.avif.quality}`, '-s', `${ENC.avif.speed}`, '-j', `${ENC.avif.jobs}`, '-y', ENC.avif.yuv, '--cicp', ENC.avif.cicp, '-r', ENC.avif.range, '--ignore-icc', '--ignore-exif', '--ignore-xmp', ref, out('avif')]),
          run(CWEBP, ['-quiet', '-q', `${ENC.webp.quality}`, '-m', `${ENC.webp.method}`, ...(ENC.webp.sharpYuv ? ['-sharp_yuv'] : []), '-metadata', 'none', ref, '-o', out('webp')]),
          run(MAGICK, [ref, '-strip', '-sampling-factor', ENC.jpeg.sampling, '-quality', `${ENC.jpeg.quality}`, ...(ENC.jpeg.progressive ? ['-interlace', 'JPEG'] : []), '-define', 'jpeg:optimize-coding=true', out('jpeg')]),
        ]);
      });
    }
  }
  await pool(jobs, Math.max(2, Math.floor(availableParallelism() / 3)));
  for (const set of sets) {
    for (const v of set.variants) {
      const file = join(OUT, v.file);
      const [w, h] = dimsOf(file);
      if (w !== v.width || h !== v.height) throw new Error(`${v.file} is ${w}x${h}, expected ${v.width}x${v.height}`);
      v.bytes = statSync(file).size;
    }
  }
}

// ---------------------------------------------------------------- colour seams
// A bleeding portrait's backdrop has to equal the field it bleeds into. Each probe is a per-channel
// median over decoded pixels:
//   "<side> edge"  a strip a few pixels wide along the whole edge that meets the field, leaving out any
//                  stretch where the subject (or its shadow) reaches it
//   inner lines    the same strip where CSS puts a feathered edge inside the frame (object-position)
//   "flat third"   the document's own export check (brand/04 section 5)
// The build fails if encoding moved a probe more than SEAM_DRIFT_MAX from the source PNG, or pushed one
// outside the tolerance that the source is inside. A source that is itself outside is only reported.
const median = (values) => { const s = Uint8Array.from(values).sort(); const n = s.length; return n % 2 ? s[(n - 1) / 2] : Math.round((s[n / 2 - 1] + s[n / 2]) / 2); };
function sampleEdge(img, side, field, strip, offset) {
  const { w, h, buf } = img;
  const along = side === 'top' || side === 'bottom' ? w : h;
  const channels = [[], [], []];
  let kept = 0;
  for (let p = 0; p < along; p++) {
    const px = [];
    for (let d = offset; d < offset + strip; d++) {
      const x = side === 'left' ? d : side === 'right' ? w - 1 - d : p;
      const y = side === 'top' ? d : side === 'bottom' ? h - 1 - d : p;
      px.push((y * w + x) * 3);
    }
    const mean = [0, 1, 2].map((c) => px.reduce((sum, i) => sum + buf[i + c], 0) / strip);
    if (mean.some((m, c) => Math.abs(m - field[c]) > 30)) continue; // the subject or its shadow, not backdrop
    kept++;
    for (const i of px) for (let c = 0; c < 3; c++) channels[c].push(buf[i + c]);
  }
  return { rgb: channels.map(median), covered: +(kept / along).toFixed(3) };
}
function sampleRect(img, [fx0, fy0, fx1, fy1]) {
  const { w, h, buf } = img; const channels = [[], [], []];
  for (let y = Math.round(fy0 * h); y < Math.round(fy1 * h); y++) for (let x = Math.round(fx0 * w); x < Math.round(fx1 * w); x++) for (let c = 0; c < 3; c++) channels[c].push(buf[(y * w + x) * 3 + c]);
  return { rgb: channels.map(median) };
}
function measure(file, seam, sourceWidth) {
  const img = pixelsOf(file);
  const field = hexToRgb(seam.field);
  const strip = Math.max(3, Math.round((8 * img.w) / sourceWidth)); // the same sliver of the picture at every size
  const probes = {};
  for (const side of seam.edges) probes[`${side} edge`] = sampleEdge(img, side, field, strip, 0);
  for (const [label, side, at] of seam.inner || []) probes[label] = sampleEdge(img, side, field, strip, Math.round(at * (side === 'top' || side === 'bottom' ? img.h : img.w)));
  probes['flat third'] = sampleRect(img, seam.flat);
  for (const m of Object.values(probes)) {
    m.delta = m.rgb.map((v, c) => v - field[c]);
    m.withinTolerance = m.delta.every((d) => Math.abs(d) <= SEAM_TOLERANCE);
  }
  return { stripPx: strip, probes };
}
function checkSeams() {
  const failures = [];
  for (const set of sets.filter((s) => s.seam)) {
    const { seam } = set;
    const source = measure(join(SRC, set.src), seam, set.sourceSize[0]);
    set.seamReport = {
      token: seam.token, field: seam.field, fieldRgb: hexToRgb(seam.field), tolerance: SEAM_TOLERANCE,
      method: 'Per-channel median of decoded pixels. "<side> edge": a strip along the whole edge (8px at source scale), skipping any stretch more than 30 levels off the field (subject or shadow). Other named lines: the same strip inside the frame, where CSS puts a feathered edge. "flat third": the flat third of the backdrop. delta = value - field; fromSource = value - the source PNG\'s value.',
      innerLines: Object.fromEntries((seam.inner || []).map(([label, side, at]) => [label, { side, at }])),
      source, variants: {},
    };
    for (const v of set.variants) {
      const m = measure(join(OUT, v.file), seam, set.sourceSize[0]);
      for (const [name, got] of Object.entries(m.probes)) {
        const src = source.probes[name];
        got.fromSource = got.rgb.map((val, c) => val - src.rgb[c]);
        if (got.fromSource.some((d) => Math.abs(d) > SEAM_DRIFT_MAX)) failures.push(`${v.file}, ${name}: encoding moved the backdrop by ${got.fromSource.map(signed).join(',')} (limit ${SEAM_DRIFT_MAX})`);
        if (!got.withinTolerance && src.withinTolerance) failures.push(`${v.file}, ${name}: ${got.rgb} is outside +/-${SEAM_TOLERANCE} of ${seam.field} though the source is inside`);
      }
      set.seamReport.variants[v.file] = m;
    }
  }
  return failures;
}

// ---------------------------------------------------------------- icons and social card
// The notch is shapes.bite from tools/bite.mjs (brand/02 section 4.1), its only definition. outline() gives it as
// arcs on a 100-unit tile whose bitten corner is (100, 0): a point on the top edge, then one { x, y, r } per arc,
// ending on the right edge. Change the bite there and these icons follow on the next run.
const NOTCH = outline(shapes.bite);
// The notch at tile size B on the top-right corner of a w x h box at (x, y), coordinates to 3 decimals.
const bitten = (x, y, w, h, B) => {
  const f = (v) => +v.toFixed(3); const X = x + w; const k = B / 100; const [start, ...arcs] = NOTCH;
  const steps = arcs.map((p) => `A ${f(p.r * k)} ${f(p.r * k)} 0 0 0 ${f(X - (100 - p.x) * k)} ${f(y + p.y * k)}`);
  return `M ${x} ${y} H ${f(X - (100 - start.x) * k)} ${steps.join(' ')} V ${y + h} H ${x} Z`;
};
// The favicon: the notch at a 45-unit tile on a 100 box, in brand/04 section 6's compact form (2 decimals), which
// for the current bite is M0 0H56.8A15.3 15.3 0 0 0 66.06 14.06A15.3 15.3 0 0 0 85.94 33.94A15.3 15.3 0 0 0 100 43.2V100H0Z
const FAVICON_TILE = 45;
const FAVICON_PATH = (() => {
  const f = (v) => +v.toFixed(2); const k = FAVICON_TILE / 100; const [start, ...arcs] = NOTCH;
  return `M0 0H${f(100 - (100 - start.x) * k)}${arcs.map((p) => `A${f(p.r * k)} ${f(p.r * k)} 0 0 0 ${f(100 - (100 - p.x) * k)} ${f(p.y * k)}`).join('')}V100H0Z`;
})();
const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <path fill="${GROUND}" d="${FAVICON_PATH}"/>\n</svg>\n`;
const SS = 4; // vector art is drawn at 4x and averaged down, so edges are true area coverage
// shapes: [fill, path] or [fill, path, x, y] to move the path's origin
const draw = (size, background, shapes, file, extra = []) => run(MAGICK, [
  '-size', `${size[0] * SS}x${size[1] * SS}`, `xc:${background}`,
  ...shapes.flatMap(([fill, d, x = 0, y = 0]) => ['-fill', fill, '-draw', `fill-rule nonzero scale ${SS},${SS} translate ${x},${y} path '${d}'`]),
  '-filter', 'Box', '-resize', `${size[0]}x${size[1]}!`, '-strip', ...extra, file,
]);

// Lettering comes as outlines (tools/social-card-type.json): px, origin at the left end of the baseline.
// The baselines are where Chrome put the same CSS in brand/specimens/images.html, measured from the
// designer's screenshots: line top + ceil(ascent) + the half-leading rounded toward zero. [x, baseline]
const CARD_TYPE = { strip: [48, 34], wordmark: [48, 112], headline1: [48, 269], headline2: [48, 346], who1: [48, 550], who2: [48, 579] };
const CARD_INK = { strip: INK, wordmark: GROUND, headline1: INK, headline2: INK, who1: INK, who2: INK };
const AVATAR_TYPE = { avatar1: [108, 238], avatar2: [108, 284] }; // 51px/0.9, its box 20px inside the square's left and bottom
const PNG_OPAQUE = ['-alpha', 'off', '-depth', '8', '-define', 'png:exclude-chunks=all', '-define', 'png:color-type=2'];

async function buildIcons(tmp) {
  const icons = [];
  const add = (file, purpose, width, height, format) => icons.push({ file, purpose, width, height, format });

  writeFileSync(join(OUT, 'favicon.svg'), FAVICON_SVG);
  add('favicon.svg', 'favicon: the bitten square in the ground colour, no letter', 100, 100, 'svg');
  for (const px of [96, 32, 16]) {   // 96: search engines want a raster icon larger than 48px
    await run(MAGICK, ['-size', `${px * 8}x${px * 8}`, 'xc:none', '-fill', GROUND, '-draw', `scale ${(px * 8) / 100},${(px * 8) / 100} path '${FAVICON_PATH.replace(/([A-Za-z])/g, ' $1 ')}'`, '-filter', 'Box', '-resize', `${px}x${px}!`, '-strip', '-depth', '8', '-define', 'png:exclude-chunks=all', `PNG32:${join(OUT, `favicon-${px}.png`)}`]);
    add(`favicon-${px}.png`, `favicon ${px}px, drawn from favicon.svg's path, transparent corner`, px, px, 'png');
  }
  // Touch icon: no transparency. Ground edge to edge, a centred 116px ink square with the notch at tile 52.
  await draw([180, 180], GROUND, [[INK, bitten(32, 32, 116, 116, 52)]], join(OUT, 'apple-touch-icon.png'), PNG_OPAQUE);
  add('apple-touch-icon.png', 'touch icon 180px: ground field, centred 116px ink square, notch tile 52px', 180, 180, 'png');

  if (!existsSync(TYPE_FILE)) {
    console.warn('! tools/social-card-type.json is missing: social-card.jpg and avatar-400.png were not built');
    return icons;
  }
  const runs = Object.fromEntries(JSON.parse(readFileSync(TYPE_FILE, 'utf8')).runs.map((r) => [r.name, r]));
  const letters = (layout, fill) => Object.entries(layout).map(([name, [x, baseline]]) => {
    if (!runs[name]?.d) throw new Error(`tools/social-card-type.json has no outline for "${name}": run tools/social-card-type.swift`);
    return [typeof fill === 'string' ? fill : fill[name], runs[name].d, x, baseline];
  });

  // Avatar 400: ground field, centred 224px ink square with the notch (tile 101) at its top right,
  // FEAST / DENTAL in the ground colour inside it.
  await draw([400, 400], GROUND, [[INK, bitten(88, 88, 224, 224, 101)], ...letters(AVATAR_TYPE, GROUND)], join(OUT, 'avatar-400.png'), PNG_OPAQUE);
  add('avatar-400.png', 'profile picture 400px: the bitten ink square inside a ground field, so a circular crop cannot cut the bite', 400, 400, 'png');

  // Social card 1200 x 630 (brand/04 section 6): the first screen in miniature, and it says Demo.
  // Strip: paper with a 1.5px ink rule that ends at y 54, where the 96px plate (notch tile 60) begins.
  const plateW = Math.round(48 + runs.wordmark.width + 58);
  const vector = join(tmp, 'card-vector.png');
  await draw([1200, 630], 'none', [
    [PAPER, 'M 0 0 H 1200 V 52.5 H 0 Z'], [INK, 'M 0 52.5 H 1200 V 54 H 0 Z'],
    [INK, bitten(0, 54, plateW, 96, 60)],
    ...letters(CARD_TYPE, CARD_INK),
  ], `PNG32:${vector}`);
  // The hero photograph, 576px tall, anchored right and bottom, its left 60px feathered into the field.
  await run(MAGICK, [
    '-size', '1200x630', `xc:${GROUND}`,
    '(', join(SRC, 'paloma-hero.png'), '-alpha', 'off', '-filter', RESIZE_FILTER, '-resize', '461x576!',
    '(', '-size', '576x60', 'gradient:black-white', '-rotate', '-90', '-background', 'white', '-gravity', 'west', '-extent', '461x576', ')',
    '-alpha', 'off', '-compose', 'CopyOpacity', '-composite', ')',
    '-gravity', 'southeast', '-compose', 'Over', '-composite',
    vector, '-gravity', 'northwest', '-composite',
    '-strip', '-sampling-factor', '4:4:4', '-quality', '88', '-interlace', 'JPEG', '-define', 'jpeg:optimize-coding=true', join(OUT, 'social-card.jpg'),
  ]);
  add('social-card.jpg', 'og:image 1200 x 630: disclosure strip, plate, headline, designation, hero portrait feathered 60px on its left', 1200, 630, 'jpeg');
  return icons;
}

// ---------------------------------------------------------------- manifest and markup
function manifestEntry(set) {
  const [, , cw] = set.box;
  const slots = {};
  BREAKPOINTS.forEach((bp, i) => {
    const s = set.slots[i];
    if (!s) { slots[bp] = null; return; }
    const drawn = s[2] ?? s[0];
    slots[bp] = { width: s[0], height: s[1], drawnWidth: drawn, widthFor2x: drawn * 2, sourceCoversDensity: +(cw / drawn).toFixed(2), ...(bp === 768 ? { computed: true } : {}) };
  });
  return {
    source: `${WEB}/src/${set.src}`,
    sourceSize: { width: set.sourceSize[0], height: set.sourceSize[1] },
    section: set.placement.section,
    ...(set.media ? { media: set.media } : {}),
    crop: { box: set.crop ? { x: set.box[0], y: set.box[1], width: set.box[2], height: set.box[3] } : null, ratio: set.ratio.join(':'), baked: Boolean(set.crop) },
    loading: set.placement.eager ? 'eager' : 'lazy',
    slots,
    sizes: set.sizes,
    variants: set.variants.map((v) => ({ format: v.format, type: MIME[v.format], width: v.width, height: v.height, path: web(v.file), bytes: v.bytes })),
    ...(set.seamReport ? { seam: set.seamReport } : {}),
  };
}
const srcset = (set, format) => set.variants.filter((v) => v.format === format).map((v) => `${web(v.file)} ${v.width}w`).join(', ');
const largest = (set) => set.variants.filter((v) => v.format === 'jpeg').at(-1);
function markup(icons) {
  const out = ['<!-- Generated by tools/build-images.mjs. One <picture> per placement, in page order.',
    '     alt="ALT:<key>" is a marker to replace. Paths are relative to the site root. -->', ''];
  out.push('<!-- <head>: preload for the hero portrait (brand/04 section 1b; one link per art-directed file set), icons, social card -->');
  for (const hero of sets.filter((s) => s.placement.eager)) out.push(`<link rel="preload" as="image" type="image/avif"${hero.preloadMedia ? ` media="${hero.preloadMedia}"` : ''} imagesrcset="${srcset(hero, 'avif')}" imagesizes="${hero.sizes}" fetchpriority="high">`);
  if (icons.some((i) => i.file === 'favicon.svg')) {
    out.push(`<link rel="icon" href="${web('favicon.svg')}" type="image/svg+xml">`, `<link rel="icon" href="${web('favicon-96.png')}" sizes="96x96" type="image/png">`, `<link rel="icon" href="${web('favicon-32.png')}" sizes="32x32" type="image/png">`,
      `<link rel="icon" href="${web('favicon-16.png')}" sizes="16x16" type="image/png">`, `<link rel="apple-touch-icon" href="${web('apple-touch-icon.png')}">`, `<meta name="theme-color" content="${GROUND}">`);
  }
  if (icons.some((i) => i.file === 'social-card.jpg')) {
    out.push(`<!-- og:image needs an absolute URL once the site has an origin -->`, `<meta property="og:image" content="${web('social-card.jpg')}">`,
      '<meta property="og:image:width" content="1200">', '<meta property="og:image:height" content="630">', '<meta property="og:image:alt" content="ALT:social-card">', '<meta name="twitter:card" content="summary_large_image">');
  }
  out.push('');
  for (const img of IMAGES) {
    const own = sets.filter((s) => s.placement === img);
    const last = own.at(-1); const big = largest(last);
    out.push(`<!-- ${img.section}  [${img.key}]`, `     ${img.css}`, '-->', '<picture>');
    for (const set of own) {
      const formats = set === last ? ['avif', 'webp'] : ['avif', 'webp', 'jpeg'];
      const frame = largest(set);
      for (const f of formats) out.push(`  <source${set.media ? ` media="${set.media}"` : ''} type="${MIME[f]}" srcset="${srcset(set, f)}" sizes="${set.sizes}"${own.length > 1 ? ` width="${frame.width}" height="${frame.height}"` : ''}>`);
    }
    const fallback = last.variants.filter((v) => v.format === 'jpeg')[Math.min(1, last.widths.length - 1)];
    out.push(`  <img src="${web(fallback.file)}" srcset="${srcset(last, 'jpeg')}" sizes="${last.sizes}" width="${big.width}" height="${big.height}" alt="ALT:${img.key}" decoding="async" ${img.eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'}>`, '</picture>', '');
  }
  return out.join('\n');
}

// ---------------------------------------------------------------- main
const args = process.argv.slice(2);
const markupAt = args.includes('--markup') ? resolve(args[args.indexOf('--markup') + 1] || '') : null;
if (args.includes('--markup') && !args[args.indexOf('--markup') + 1]) throw new Error('--markup needs a file path');

const started = Date.now();
plan();
mkdirSync(OUT, { recursive: true });
const manifestPath = join(OUT, 'manifest.json');
const previous = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')).files || [] : [];
const tmp = mkdtempSync(join(tmpdir(), 'build-images-'));
let icons; let seamFailures;
try {
  await encodeAll(tmp);
  seamFailures = checkSeams();
  icons = await buildIcons(tmp);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
for (const icon of icons) icon.bytes = statSync(join(OUT, icon.file)).size;

const all = sets.flatMap((s) => s.variants);
const totals = Object.fromEntries(['avif', 'webp', 'jpeg'].map((f) => [f, { files: all.filter((v) => v.format === f).length, bytes: all.filter((v) => v.format === f).reduce((n, v) => n + v.bytes, 0) }]));
const notRebuilt = existsSync(TYPE_FILE) ? [] : ['social-card.jpg', 'avatar-400.png'].map(web).filter((f) => previous.includes(f));   // skipped this run: keep the last good copies
const files = [...all.map((v) => web(v.file)), ...icons.map((i) => web(i.file)), ...notRebuilt].sort();
for (const stale of previous.filter((f) => !files.includes(f) && f.startsWith(`${WEB}/`) && !f.startsWith(`${WEB}/src/`))) {
  if (existsSync(join(ROOT, stale))) { unlinkSync(join(ROOT, stale)); console.log(`removed stale ${stale}`); }
}
const manifest = {
  generator: 'tools/build-images.mjs',
  note: 'Generated. Do not edit; change IMAGES in the generator and run it again.',
  encoders: { ...ENC, resize: `${RESIZE_FILTER}, in sRGB values, no sharpening`, colour: 'sources are untagged sRGB; outputs carry no ICC profile (AVIF is tagged CICP 1/13/6, full range)' },
  breakpoints: BREAKPOINTS,
  totals: { files: all.length, bytes: all.reduce((n, v) => n + v.bytes, 0), byFormat: totals },
  images: Object.fromEntries(sets.map((s) => [s.key, manifestEntry(s)])),
  icons: icons.map((i) => ({ path: web(i.file), format: i.format, width: i.width, height: i.height, bytes: i.bytes, purpose: i.purpose })),
  files,
};
// arrays of numbers on one line, everything else indented
const compact = (json) => json.replace(/\[\n\s+(-?[\d.]+(?:,\n\s+-?[\d.]+)*)\n\s+\]/g, (_, list) => `[${list.replace(/\s+/g, ' ')}]`);
writeFileSync(manifestPath, `${compact(JSON.stringify(manifest, null, 2))}\n`);
if (markupAt) { mkdirSync(dirname(markupAt), { recursive: true }); writeFileSync(markupAt, markup(icons)); }

// ---------------------------------------------------------------- report
console.log(`${all.length} image files from ${sets.length} file sets (${IMAGES.length} placements), ${icons.length} icon/card files, ${((Date.now() - started) / 1000).toFixed(1)}s`);
for (const f of ['avif', 'webp', 'jpeg']) console.log(`  ${f.padEnd(5)} ${String(totals[f].files).padStart(3)} files  ${kb(totals[f].bytes).padStart(10)}`);
console.log('  largest: ' + [...all].sort((a, b) => b.bytes - a.bytes).slice(0, 5).map((v) => `${v.file} ${kb(v.bytes)}`).join(', '));
for (const set of sets.filter((s) => s.seamReport)) {
  const r = set.seamReport; const names = Object.keys(r.source.probes);
  const cell = (m, name) => `${m.probes[name].rgb.join(',')} (${m.probes[name].delta.map(signed).join(',')})`.padEnd(25);
  console.log(`\nseam  ${set.key}  field ${r.token} ${r.field} = ${r.fieldRgb.join(',')}  tolerance +/-${r.tolerance}   value (difference from field)`);
  console.log(`  ${'file'.padEnd(24)}${names.map((name) => name.padEnd(25)).join('')}`);
  console.log(`  ${'source png'.padEnd(24)}${names.map((name) => cell(r.source, name)).join('')}`);
  for (const v of set.variants) console.log(`  ${v.file.padEnd(24)}${names.map((name) => cell(r.variants[v.file], name)).join('')}`);
  const sourceOff = names.filter((name) => !r.source.probes[name].withinTolerance);
  if (sourceOff.length) console.log(`  note: the SOURCE is outside +/-${r.tolerance} at: ${sourceOff.join('; ')}. That is the photograph, not the encoding.`);
}
if (seamFailures.length) {
  console.error(`\nSEAM CHECK FAILED\n  ${seamFailures.join('\n  ')}`);
  process.exit(1);
}
const sourceOff = sets.filter((x) => x.seamReport).flatMap((x) => Object.entries(x.seamReport.source.probes).filter(([, m]) => !m.withinTolerance).map(([name]) => `${x.key} ${name}`));
console.log(`\nencoding check passed: no format moved a backdrop more than ${SEAM_DRIFT_MAX} levels from its source PNG`);
if (sourceOff.length) console.log(`but ${sourceOff.length} probe(s) are outside +/-${SEAM_TOLERANCE} of the field in the source PNG itself: ${sourceOff.join('; ')}`);
console.log(`manifest: ${manifestPath}${markupAt ? `\nmarkup:   ${markupAt}` : ''}`);
