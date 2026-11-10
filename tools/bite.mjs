#!/usr/bin/env node
// tools/bite.mjs
// The bite's geometry lives HERE, in `shapes` below, and nowhere else.
// Run `node tools/bite.mjs` (or `npm run bite`) after changing it: the script checks each shape
// for stray specks and rewrites assets/css/bite.css. tools/build-images.mjs imports `shapes` and
// `outline` for the favicon, the touch icon, the avatar and the social card, so run
// `node tools/build-images.mjs` as well. Nothing else needs editing.
//
// A shape is a set of circles that are REMOVED from a 100 x 100 tile whose top-right corner (100, 0)
// is the element's bitten corner. The tile is what the size tokens measure (--bite-lg: 35px ...).
// jaw(cx, cy, coreRadius, [[angle, distance, radius], ...]) places round scallops around a centre.
// Angles are screen degrees: 180 points left, 90 points down. The first scallop must cross the top
// edge and the last must cross the right edge.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const rad = (d) => (d * Math.PI) / 180;
const jaw = (jx, jy, coreR, list) => ({
  core: { cx: jx, cy: jy, r: coreR },
  scallops: list.map(([t, rho, r]) => ({ cx: +(jx + rho * Math.cos(rad(t))).toFixed(2), cy: +(jy + rho * Math.sin(rad(t))).toFixed(2), r })),
});

// THE bite, from brand/02-visual-system.md section 4.1: three equal arcs of radius 34 whose centres
// sit 62 from the corner at 0, 45 and 90 degrees. The visible notch spans 96% of the tile.
export const shapes = {
  bite: { kind: 'corner', ...jaw(100, 0, 62, [[180, 62, 34], [135, 62, 34], [90, 62, 34]]) },
};

// Superseded provisional shapes (four uneven marks, a three-mark nibble, a shallow scoop for pills).
// Only prototypes/bite.html uses them, for its technique comparison. Delete this block with that page.
export const legacy = {
  'proto-bite': { kind: 'corner', ...jaw(108, -8, 80, [[173, 80, 19], [152, 78, 26], [128, 77, 24], [106, 81, 21]]) },
  'proto-nibble': { kind: 'corner', ...jaw(106, -6, 70, [[168, 74, 23], [139, 71, 29], [110, 75, 25]]) },
  'proto-chomp': { kind: 'corner', ...jaw(118, -22, 86, [[168, 84, 20], [143, 82, 26], [116, 85, 23]]) },
};

// Each mask image is the bite PLUS a solid field that extends REACH bite-sizes to the left and below,
// so one image masks the whole element. An element may be at most REACH - 1 times its bite size
// along either side; beyond that the far edge would go transparent. The widest is the wordmark plate
// (tile 45px; its width includes the page margin, so it keeps growing on wide screens): 1905px at a
// 5000px viewport. At 64 the rule allows 63 x 45 = 2835px and the image is 2880px
// wide; at 40 the image was 1800px and the plate's left end was masked away beyond about 4790px.
export const REACH = 64;

const circles = (g) => [g.core, ...g.scallops];
const inside = (g, x, y) => circles(g).some((c) => (x - c.cx) ** 2 + (y - c.cy) ** 2 <= c.r ** 2);

// What remains of the tile must be one piece, and the bite must not run past the tile's open sides.
export function validate(g, N = 300) {
  const open = g.kind === 'end' ? ['left'] : ['left', 'bottom'];
  const rem = new Uint8Array(N * N);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) rem[j * N + i] = inside(g, ((i + 0.5) * 100) / N, ((j + 0.5) * 100) / N) ? 0 : 1;
  const seen = new Uint8Array(N * N);
  const stack = [];
  const seed = (i, j) => { const k = j * N + i; if (rem[k] && !seen[k]) { seen[k] = 1; stack.push(k); } };
  for (let t = 0; t < N; t++) { if (open.includes('left')) seed(0, t); if (open.includes('bottom')) seed(t, N - 1); }
  while (stack.length) {
    const k = stack.pop(); const i = k % N; const j = (k - i) / N;
    if (i > 0) seed(i - 1, j); if (i < N - 1) seed(i + 1, j); if (j > 0) seed(i, j - 1); if (j < N - 1) seed(i, j + 1);
  }
  let specks = 0; let cut = 0;
  for (let k = 0; k < N * N; k++) if (rem[k] && !seen[k]) specks++;
  // measured ON the tile's open sides, so a bite that only touches them (exactly one tile wide) passes
  const deep = (x, y) => circles(g).some((c) => Math.hypot(x - c.cx, y - c.cy) < c.r - 0.05);
  for (let t = 0; t <= N; t++) { const v = (t * 100) / N; if (deep(0, v)) cut++; if (open.includes('bottom') && deep(v, 100)) cut++; }
  return { specks, cut };
}

// Outline of the bite as arcs over the tooth-mark circles.
const hitTop = (c) => c.cx - Math.sqrt(c.r ** 2 - c.cy ** 2);
const hitRight = (c) => c.cy + Math.sqrt(c.r ** 2 - (100 - c.cx) ** 2);
const hitBottom = (c) => c.cx - Math.sqrt(c.r ** 2 - (100 - c.cy) ** 2);
function cusp(a, b, far) {
  const dx = b.cx - a.cx; const dy = b.cy - a.cy; const d = Math.hypot(dx, dy);
  const k = (d * d + a.r * a.r - b.r * b.r) / (2 * d); const h = Math.sqrt(Math.max(0, a.r * a.r - k * k));
  const mx = a.cx + (k * dx) / d; const my = a.cy + (k * dy) / d;
  const p1 = [mx - (h * dy) / d, my + (h * dx) / d]; const p2 = [mx + (h * dy) / d, my - (h * dx) / d];
  return Math.hypot(p1[0] - far.cx, p1[1] - far.cy) > Math.hypot(p2[0] - far.cx, p2[1] - far.cy) ? p1 : p2;
}
export function outline(g) {
  const s = g.scallops; const pts = [[hitTop(s[0]), 0]];
  for (let i = 0; i < s.length - 1; i++) pts.push(cusp(s[i], s[i + 1], g.core));
  pts.push(g.kind === 'corner' ? [100, hitRight(s.at(-1))] : [hitBottom(s.at(-1)), 100]);
  if (pts.some((p) => Number.isNaN(p[0]) || Number.isNaN(p[1]))) throw new Error('first or last tooth mark does not reach its edge');
  return pts.map((p, i) => ({ x: p[0], y: p[1], r: i ? s[i - 1].r : 0 }));
}

// ---- emitters -------------------------------------------------------------------------------
const n2 = (v) => +v.toFixed(2);
// The mask image: everything that is KEPT, as one path. flipX / flipY mirror it for the other corners.
export function maskSvg(g, flipX = false, flipY = false) {
  const o = outline(g); const far = -(REACH - 1) * 100; const W = REACH * 100; const H = g.kind === 'corner' ? REACH * 100 : 100;
  let d = `M${far} 0H${n2(o[0].x)}`;
  for (let i = 1; i < o.length; i++) d += `A${o[i].r} ${o[i].r} 0 0 0 ${n2(o[i].x)} ${n2(o[i].y)}`;
  d += g.kind === 'corner' ? `V${H}H${far}Z` : `H${far}Z`;
  const t = [flipX ? 'translate(100 0) scale(-1 1)' : '', flipY ? `translate(0 ${H}) scale(1 -1)` : ''].filter(Boolean).join(' ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${flipX ? 0 : far} 0 ${W} ${H}"><path${t ? ` transform="${t}"` : ''} d="${d}"/></svg>`;
}
export const dataUri = (svg) => `url('data:image/svg+xml,${encodeURIComponent(svg).replace(/%20/g, ' ').replace(/%3D/g, '=').replace(/%3A/g, ':').replace(/%2F/g, '/')}')`;

// For the technique comparison in prototypes/bite.html only:
export function shapeTR(g, B = 'var(--bite-size)') { // clip-path: shape() for a top-right corner bite; B is a CSS length
  const o = outline(g); const f = (v) => (v / 100).toFixed(4);
  const X = (v) => `calc(100% - ${B} * ${f(100 - v)})`; const L = (v) => `calc(${B} * ${f(v)})`;
  let s = `shape(from 0 0, hline to ${X(o[0].x)}`;
  for (let i = 1; i < o.length; i++) s += `, arc to ${X(o[i].x)} ${L(o[i].y)} of ${L(o[i].r)} ccw small`;
  return `${s}, vline to 100%, hline to 0, close)`;
}
export function obbPath(g, frac, aspect) { // SVG path in objectBoundingBox units. frac = bite size as a percentage of the box width; aspect = box width / height
  const o = outline(g); const sx = frac / 10000; const sy = (frac / 10000) * aspect;
  const X = (v) => (1 - (100 - v) * sx).toFixed(5); const Y = (v) => (v * sy).toFixed(5);
  let d = `M0 0H${X(o[0].x)}`;
  for (let i = 1; i < o.length; i++) d += `A${(o[i].r * sx).toFixed(5)} ${(o[i].r * sy).toFixed(5)} 0 0 0 ${X(o[i].x)} ${Y(o[i].y)}`;
  return `${d}V1H0Z`;
}
export function gradientLayers(g, B = 'var(--bite-size)') { // radial-gradient layers for mask-composite: intersect
  const f = (v) => (v / 100).toFixed(4);
  return circles(g).map((c) => `radial-gradient(circle at calc(var(--bite-x) + var(--bite-sx) * ${B} * ${f(100 - c.cx)}) calc(var(--bite-y) + var(--bite-sy) * ${B} * ${f(c.cy)}), #0000 calc(${B} * ${f(c.r)} - .5px), #000 calc(${B} * ${f(c.r)} + .5px))`);
}

// ---- portions: the first-visit disc, whole and after one, two and three bites (cumulative) ------
// Each bite places a shape on a 100-unit disc:
//   [shape name, angle of the bite's corner from the disc's centre in screen degrees (0 = right, -90 = top),
//    scale, how far outside the rim that corner sits (shape units)]
// brand/02-visual-system.md section 4.3: the bite at 68.5% of the diameter with its corner on the corner
// of the disc's bounding box, then the same turned 85 degrees clockwise, then 85 degrees anticlockwise.
// Leaves 68%, 44% and 21% of the disc.
export const portionBites = [['bite', -45, 0.685, 30.234], ['bite', 40, 0.685, 30.234], ['bite', -130, 0.685, 30.234]];
// Tried as an alternative, eaten from one side so the last piece is a chunk (65% / 44% / 24% left):
//   [['bite', -50, 0.77, 34], ['bite', 18, 0.79, 32], ['bite', 86, 0.81, 30]]
function place([name, alpha, k, out]) {
  const g = shapes[name] ?? legacy[name]; const J = g.core;
  const pol = g.scallops.map((c) => ({ t: Math.atan2(c.cy - J.cy, c.cx - J.cx), rho: Math.hypot(c.cx - J.cx, c.cy - J.cy), r: c.r }));
  const mean = pol.reduce((sum, q) => sum + q.t, 0) / pol.length; const inward = rad(alpha + 180);
  const jx = 50 + (50 + out * k) * Math.cos(rad(alpha)); const jy = 50 + (50 + out * k) * Math.sin(rad(alpha));
  return [{ cx: jx, cy: jy, r: k * J.r }, ...pol.map((q) => ({ cx: jx + k * q.rho * Math.cos(inward + q.t - mean), cy: jy + k * q.rho * Math.sin(inward + q.t - mean), r: k * q.r }))];
}
const portionCircles = (n) => portionBites.slice(0, n).flatMap(place);
// Share of the disc left after n bites, and whether what is left is one piece.
export function portionLeft(n, N = 300) {
  const cs = portionCircles(n); const rem = new Uint8Array(N * N); let disc = 0; let left = 0; let first = -1;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = ((i + 0.5) * 100) / N; const y = ((j + 0.5) * 100) / N;
    if ((x - 50) ** 2 + (y - 50) ** 2 > 2500) continue;
    disc++;
    if (cs.some((c) => (x - c.cx) ** 2 + (y - c.cy) ** 2 <= c.r ** 2)) continue;
    rem[j * N + i] = 1; left++; if (first < 0) first = j * N + i;
  }
  let reached = 0; const stack = first < 0 ? [] : [first]; if (first >= 0) rem[first] = 2;
  while (stack.length) {
    const k = stack.pop(); reached++; const i = k % N;
    for (const m of [i > 0 ? k - 1 : -1, i < N - 1 ? k + 1 : -1, k - N, k + N]) if (m >= 0 && m < N * N && rem[m] === 1) { rem[m] = 2; stack.push(m); }
  }
  return { left: Math.round((left / disc) * 100), onePiece: reached === left };
}
// The outline of what is left after n bites, as one path of arcs (no SVG mask inside the image: WebKit
// draws those softly). Arcs of the disc that no bite covers, plus arcs of the bite circles that lie
// inside the disc and outside every other bite circle, chained end to end.
export function portionPath(n) {
  const TAU = 2 * Math.PI; const f = (v) => +v.toFixed(2);
  const cs = [{ cx: 50, cy: 50, r: 50, disc: true }, ...portionCircles(n)];
  const within = (c, x, y) => (x - c.cx) ** 2 + (y - c.cy) ** 2 < c.r ** 2 - 1e-9;
  const arcs = [];
  cs.forEach((c, i) => {
    const cuts = [];
    cs.forEach((o, j) => {
      if (i === j) return;
      const dx = o.cx - c.cx; const dy = o.cy - c.cy; const d = Math.hypot(dx, dy);
      if (d >= c.r + o.r || d <= Math.abs(c.r - o.r)) return; // apart, or one inside the other
      const a = Math.atan2(dy, dx); const h = Math.acos((d * d + c.r * c.r - o.r * o.r) / (2 * d * c.r));
      cuts.push((((a - h) % TAU) + TAU) % TAU, (((a + h) % TAU) + TAU) % TAU);
    });
    cuts.sort((p, q) => p - q);
    cuts.forEach((a0, k) => {
      let a1 = cuts[(k + 1) % cuts.length]; if (a1 <= a0) a1 += TAU;
      if (a1 - a0 < 1e-9) return;
      const am = (a0 + a1) / 2; const mx = c.cx + c.r * Math.cos(am); const my = c.cy + c.r * Math.sin(am);
      const bites = cs.filter((o, j) => j !== i && !o.disc);
      if (c.disc ? bites.some((o) => within(o, mx, my)) : !within(cs[0], mx, my) || bites.some((o) => within(o, mx, my))) return;
      const pt = (a) => [c.cx + c.r * Math.cos(a), c.cy + c.r * Math.sin(a)];
      const large = a1 - a0 > Math.PI ? 1 : 0;
      // the disc is walked with rising angle, a bite circle the other way round, so the kept area stays on one side
      arcs.push(c.disc ? { from: pt(a0), to: pt(a1), r: c.r, large, sweep: 1 } : { from: pt(a1), to: pt(a0), r: c.r, large, sweep: 0 });
    });
  });
  const near = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]) < 1e-6;
  const loops = [];
  while (arcs.length) {
    const loop = [arcs.shift()];
    while (!near(loop.at(-1).to, loop[0].from)) {
      const k = arcs.findIndex((a) => near(a.from, loop.at(-1).to));
      if (k < 0) throw new Error(`the outline after ${n} bites does not close`);
      loop.push(arcs.splice(k, 1)[0]);
    }
    loops.push(loop);
  }
  return { loops: loops.length, d: loops.map((loop) => `M${f(loop[0].from[0])} ${f(loop[0].from[1])}${loop.map((a) => `A${f(a.r)} ${f(a.r)} 0 ${a.large} ${a.sweep} ${f(a.to[0])} ${f(a.to[1])}`).join('')}Z`).join('') };
}
// One sprite, four cells (0, 1, 2, 3 bites), so a bite is a change of mask-position: no new image to decode, no flicker.
// Cells are 120 units wide with the disc centred, which keeps neighbours from bleeding in at fractional sizes.
// Each disc is drawn at 98% with a 1-unit margin: one that exactly filled its box would be shaved flat
// wherever rounding made it a hair too big.
export const PORTION_CELL = 120;
export function portionsSvg() {
  let body = '';
  for (let n = 0; n <= portionBites.length; n++) {
    const t = `translate(${n * PORTION_CELL + (PORTION_CELL - 100) / 2 + 1} ${(PORTION_CELL - 100) / 2 + 1}) scale(.98)`;
    body += n ? `<path transform="${t}" d="${portionPath(n).d}"/>` : `<circle transform="${t}" cx="50" cy="50" r="50"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${PORTION_CELL * (portionBites.length + 1)} ${PORTION_CELL}">${body}</svg>`;
}

// ---- write assets/css/bite.css ---------------------------------------------------------------
const corners = (name, g) => [`    --${name}-tr: ${dataUri(maskSvg(g))};`, `    --${name}-tl: ${dataUri(maskSvg(g, true))};`, `    --${name}-br: ${dataUri(maskSvg(g, false, true))};`, `    --${name}-bl: ${dataUri(maskSvg(g, true, true))};`];

// The crescent: the status dot when the practice is closed, and the ticker's separator.
// A 100-unit disc with one round cut (visual system 4.4: a 6.5px cut on a 12px dot, centred at 80% 20%).
export function crescentSvg() {
  const f = (v) => +v.toFixed(2); const R = 50; const r = (6.5 / 12) * 100; const cx = 80; const cy = 20;
  const dx = cx - 50; const dy = cy - 50; const d = Math.hypot(dx, dy);
  const a = Math.atan2(dy, dx); const h = Math.acos((d * d + R * R - r * r) / (2 * d * R));
  const p1 = [50 + R * Math.cos(a + h), 50 + R * Math.sin(a + h)]; const p2 = [50 + R * Math.cos(a - h), 50 + R * Math.sin(a - h)];
  // round the disc the long way from p1 to p2, then back along the cut
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102"><path d="M${f(p1[0])} ${f(p1[1])}A${R} ${R} 0 1 1 ${f(p2[0])} ${f(p2[1])}A${f(r)} ${f(r)} 0 0 0 ${f(p1[0])} ${f(p1[1])}Z"/></svg>`;
}

function css() {
  const v = Object.entries(shapes).flatMap(([name, g]) => corners(name, g));
  return `/* bite.css: GENERATED by tools/bite.mjs. Do not edit by hand; change the geometry in that file and re-run it.

   --bite-tr (and -tl, -br, -bl) is the bite from brand/02-visual-system.md: one small SVG, a solid field
   with the notch out of one corner. It is used as a single mask layer, ${REACH} times the tile size, pinned to
   the bitten corner (the tile size is one of --bite-photo, --bite-lg, --bite-md, --bite-chip, --bite-plate):

     mask: var(--bite-tr) calc(100% + 1px) -1px / calc(var(--bite-lg) * var(--bite-reach)) auto no-repeat;

   One layer, no mask-composite, so it cannot leave hairlines on rounded, rotated or half-pixel edges.
   The 1px overhang keeps the image's own soft outer edge outside the element.
   Limit: the element may be at most ${REACH - 1} times its tile size along either side. */

@layer tokens {
  :root {
    --bite-reach: ${REACH};
${v.join('\n')}
    /* the first-visit disc as a sprite: four cells (0, 1, 2, 3 bites), each ${PORTION_CELL} units wide around a 100-unit disc.
       mask: var(--portions) calc((.1 + 1.2 * var(--bites)) / 3.8 * 100%) 50% / 480% 120% no-repeat;   with --bites: 0 | 1 | 2 | 3 */
    --portions: ${dataUri(portionsSvg())};
    /* a disc with one round cut: the closed status dot and the ticker separator.  mask: var(--crescent) center / 100% 100% no-repeat; */
    --crescent: ${dataUri(crescentSvg())};
  }
}
`;
}
// The superseded shapes, for prototypes/bite.html only. The page never loads this file.
function legacyCss() {
  return `/* proto-bite.css: GENERATED by tools/bite.mjs for prototypes/bite.html. Superseded shapes; not part of the site. */
:root {
${Object.entries(legacy).flatMap(([name, g]) => corners(name, g)).join('\n')}
}
`;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  let ok = true;
  for (const [name, g] of Object.entries({ ...shapes, ...legacy })) {
    let r; let err = '';
    try { r = validate(g); outline(g); } catch (e) { r = { specks: -1, cut: -1 }; err = ` (${e.message})`; }
    const fine = r.specks === 0 && r.cut === 0;
    ok &&= fine;
    console.log(`${fine ? 'ok  ' : 'FAIL'} ${name}: ${g.scallops.length} scallops, stray specks ${r.specks}, runs off tile ${r.cut}${err}`);
  }
  for (let n = 1; n <= portionBites.length; n++) {
    const r = portionLeft(n); let loops = 0; let err = '';
    try { loops = portionPath(n).loops; } catch (e) { err = ` (${e.message})`; }
    const fine = r.onePiece && r.left > 0 && loops === 1; ok &&= fine;
    console.log(`${fine ? 'ok  ' : 'FAIL'} portion after ${n} bite${n > 1 ? 's' : ''}: ${r.left}% of the disc left${fine ? '' : `, pieces by outline: ${loops}`}${err}`);
  }
  if (!ok) { console.error('Geometry rejected: fix the shapes above. bite.css was not written.'); process.exit(1); }
  const root = join(dirname(fileURLToPath(import.meta.url)), '..');
  writeFileSync(join(root, 'assets', 'css', 'bite.css'), css());
  writeFileSync(join(root, 'prototypes', 'proto-bite.css'), legacyCss());
  console.log(`wrote ${join(root, 'assets', 'css', 'bite.css')} and ${join(root, 'prototypes', 'proto-bite.css')}`);
}
