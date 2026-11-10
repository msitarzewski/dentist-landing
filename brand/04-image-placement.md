# 04 — Image placement: every photograph, its frame, crop and field

Status: 2026-11-09. Builds on `brand/02-visual-system.md` (the system, as adopted) and `research/04-inclusive-visuals-review.md` (verdicts, crops, alt text, disclosure). Where this file and `02` differ, this file is later and wins; the differences are listed in section 9.

**Tested.** Every placement below is rendered with the real files in `brand/specimens/images.html` and was looked at in Chrome at 1440x900 and 390x844 (the dentist band also at 1024x768). Screenshots are `brand/specimens/images-*.png`. Sizes in the tables are measured from that page. Not tested: Safari and Firefox, a real phone, the avatar inside a circular crop, and the 640–1023 range for anything but the hero.

**Coordinates.** Source rectangles are in pixels of the source file (`x0–x1, y0–y1`). `c1–c12` are the 12 grid columns of `02` section 3. "Subject box" is the measured bounding box of everything that is not backdrop, in percent of the frame.

---

## 0. The calls

| Lead's proposal | Call | Why |
|---|---|---|
| a) `paloma-listening` in Comfort; drop `comfort-headphones` | **Agreed** | A still photograph does not break the stillness: nothing in the section moves, and a person sitting level with you, hands folded, is the section's sentence as a picture. The headphones frame promises a blanket the list does not |
| b) Food strip after the first-visit steps; no still life at the Services heading; peach stays in Closing | **Agreed**, with one change | The three 4:5 frames are cropped **square from the bottom**, so the food fills its frame and the strip is 320px tall, not 369. Only the square version was rendered |
| c) `paloma-laughing` cropped chest-up under the FAQ heading in c1–c4 | **Overruled on position, agreed on crop** | She looks to her right (the picture's left). In c1–c4 she looks off the page; in **c10–c12** she looks at the questions. Unbitten, in a 1.5px ink rule |
| d) `paloma-drawing` after the three points in Meet the dentist | **Agreed, moved beside the points** | Under the points at full width the band grows to about 1,340px and the bleeding portrait must zoom until her right arm is cut. Beside the points (c10–c12, a 4:5 crop) the band is 1,007px and she is whole |
| e) No map | **Agreed** | Find us is redrawn in section 3.6 |
| f) Disclosure strip above the header | **Agreed**; form in section 3.1 | The hero still holds the first screen at both sizes after two small changes |
| g) Caption rules | **Agreed** | "Paloma. Apple."; storefront caption ends "Placeholder picture."; the access line sits directly under it |
| h) Regenerate the hero? | **Keep `paloma-hero.png`** | It works at 1440, 1024, 768 and 390 in the proofs. Composition for any future re-shoot is in section 8 |

Reviewer's call 5 (the notch must sit top-left on `paloma-hero` and `paloma-laughing`) does not arise: neither frame is bitten.

---

## 1. Placement table

### 1a. Where each file goes, and how big

| File (source px) | Used | Section, field | Position | Frame aspect | Size at 1440 | at 1024 | at 390 |
|---|---|---|---|---|---|---|---|
| `paloma-hero.png` (1122 x 1402) | **Yes** | Hero, ground | c8 to the right page edge, full hero height, behind the text | stretches | 593 x 710 | 421 x 698 | 390 x 204, full-bleed band |
| `paloma-apple.png` (1122 x 1402) | **Yes** | Meet the dentist, counter | c1–c5 out to the left page edge, anchored bottom-left, behind the text | stretches | figure 593 x 1007; image 806 x 1007 | figure 421 x 991; image 636 x 795 | 390 x 273 (`min(70vw, 460px)`), full-bleed band, first in the section |
| `paloma-drawing.png` (1536 x 1024) | **Yes** | Meet the dentist, counter | c10–c12, beside the three points | 4:5 from 1024 up; 3:2 below | 322 x 403 | 226 x 283 | 358 x 239, under the points |
| `paloma-listening.png` (1536 x 1024) | **Yes** | Comfort, paper | c1–c6, under the heading; text in c8–c12 | 3:2 | 668 x 445 | 472 x 315 | 358 x 239, between heading and text |
| `paloma-laughing.png` (1122 x 1402) | **Yes** | FAQ, paper | c10–c12, top-aligned with the heading; list in c1–c8 | 4:5 | 322 x 403 | 226 x 283 | 240 x 300, after the last question, left-aligned |
| `bite-apple.png` (1122 x 1402) | **Yes** | Food strip, 1 of 4 | full-bleed strip between First visit and Services | 1:1 | 320 x 320 | 228 x 228 | 240 x 240, in a scroll rail |
| `bite-toast.png` (1122 x 1402) | **Yes** | Food strip, 2 of 4 | | 1:1 | 320 x 320 | 228 x 228 | 240 x 240 |
| `bite-corn.png` (1536 x 1024) | **Yes** | Food strip, 3 of 4 | | 3:2 | 480 x 320 | 341 x 228 | 360 x 240 |
| `bite-taco.png` (1122 x 1402) | **Yes** | Food strip, 4 of 4 | | 1:1 | 320 x 320 | 228 x 228 | 240 x 240 |
| `the-drawing.png` (1122 x 1402) | **Yes** | Cost, ground | c10–c12, top-aligned with the heading | 4:5 | 322 x 403 | 226 x 283 | 322 x 403 max, after the buttons |
| `bite-peach.png` (1122 x 1402) | **Yes** | Closing, ground | c10–c12, top-aligned with the heading | 4:5 | 322 x 403 | 226 x 283 | 322 x 403 max, after the hours line |
| `storefront.png` (1536 x 1024) | **Yes** | Find us, paper | c1–c7, under the heading; facts in c9–c12 | 3:2 | 783 x 522 | 554 x 369 | 358 x 239, between heading and status |
| `comfort-headphones.png` | **No** | | | | | | |
| `the-drawing-nowords.png` | **No** (fallback) | Swap it in for `the-drawing.png` only if the filling price changes. Never both | | | | | |
| `test-*.png`, `rejected/*` | **No** | | | | | | |

### 1b. Crop, bite, backdrop, caption, loading

| File | Crop | Bitten | Backdrop measured (flat area) | Grade the file? | Frame edge | Caption | Loading |
|---|---|---|---|---|---|---|---|
| `paloma-hero` | `object-fit: cover`. From 1024: `object-position: 100% 0%`. Below 1024: `100% 6%` | No: it bleeds | `#f8520a` (edge strip `#f8530b`) | No. It is `--ground` to within 1 level. Tolerance for any replacement: ±3 per channel at the feathered edge | None. Left edge feathered 72px from 1024; top edge feathered 32px below | None; the designation label stands in | `loading="eager" fetchpriority="high"`, preloaded |
| `paloma-apple` | From 1024: image `height: min(100% of the band, 1.89 x the figure's width)`, `width: auto`, anchored `left: 0; bottom: 0` (rule in 3.5). Below 1024: `cover`, `object-position: 0% 4%` | No: it bleeds | `#cffb43` (edge strip `#d0fb46`) | No. It is `--counter`. Tolerance ±3 | None. Right edge feathered 72px and top edge 32px from 1024; top edge 32px below | `Paloma. Apple.` | lazy |
| `paloma-drawing` | From 1024: source rect **90–910, 0–1024** (`cover`, `object-position: 12.6% 50%`). Below 1024: full frame | No | wall `#eedbcd` | No | Square, no rule: the cabinets and chair make it plainly a photograph | `The pad. The marker.` | lazy |
| `paloma-listening` | Full frame | No | wall `#e8d6c4` (1.30:1 against paper) | No | Square, no rule | None | lazy |
| `paloma-laughing` | Source rect **380–1100, 20–920** (the reviewer's). Export the crop as its own file, or in CSS: a 4:5 box with `overflow: hidden` and the image at `width: 155.83%; left: -52.78%; top: -2.22%` | No. Her hair reaches about x 86%, y 6% of the crop, inside the corner a notch would take | `#fbead6` (1.08:1 against paper) | **No.** Tested and rejected (section 4) | **1.5px ink rule**, square | None | lazy |
| `bite-apple` | Source rect **0–1122, 280–1402** (`aspect-ratio: 1; cover; object-position: 0% 100%`) | No | `#fb5405` | No | Square, edge to edge with its neighbours | `Apple.` | lazy |
| `bite-toast` | same rect | No | `#c5fb2d` | No | | `Toast.` | lazy |
| `bite-corn` | Full frame | No | `#fbeddd` | No | | `Corn.` | lazy |
| `bite-taco` | same rect as apple | No | `#fa4c02` | No | | `Taco.` | lazy |
| `the-drawing` | Full frame | **Yes**, top right, tile 25% of the width | `#fcead5` (2.85:1 against ground) | No | Square | `Fillings from $190.` (new line; copywriter to confirm) | lazy |
| `bite-peach` | Full frame | **Yes**, top right, tile 25% | `#c8fb26` (2.76:1 against ground) | No | Square | `Peach.` | lazy |
| `storefront` | Full frame | No | wall `#dfc0a3` (1.58:1 against paper) | No | Square, no rule | `The front door, 2217 Tejocote Street. Placeholder picture.` then, as its own line directly under it: `[Parking, nearest bus stop and level entrance: to confirm]` | lazy |

Every `img` carries `width` and `height` attributes and `decoding="async"`. Alt text is the table in the review's section 4, with one correction: `paloma-listening` shows her hands folded in her lap, not resting on her knees, so `Dr. Paloma Krenek sits on a stool at eye level with her hands folded, looking at the camera.` The four strip frames keep their alt text; their captions are one word and do not replace it.

### 1c. The two bitten frames clear the corner

`02` asks that the subject stay out of a square 30% of the frame's width at the top right (x 70–100%, y 0–24% of a 4:5 frame).

| Frame | Subject box | Result |
|---|---|---|
| `bite-peach` | x 2–70, y 44–96 | Clear. Nothing in the square |
| `the-drawing` | x 3–77, y 20–99 | The pad's top-right corner enters the square by 7% x 4%. The notch itself reaches only 24% and its nearest arc is about 34px from the pad at 322px wide (rendered: `images-06-cost-1440.png`). **Accepted as is**; do not enlarge the notch on this frame |

---

## 2. The page in order, with its pictures

1. Disclosure strip: none.
2. Header: none (the plate).
3. **Hero**: `paloma-hero`, bleeding.
4. Ticker: none.
5. First visit: none; the three portion discs.
6. **Food strip**: `bite-apple`, `bite-toast`, `bite-corn`, `bite-taco`.
7. Services: none.
8. **Comfort**: `paloma-listening`.
9. **Meet the dentist**: `paloma-apple`, bleeding; `paloma-drawing` beside the points.
10. No reviews yet: none; the "0".
11. **Cost**: `the-drawing`, bitten.
12. **Find us**: `storefront`.
13. **FAQ**: `paloma-laughing`, ruled.
14. **Closing**: `bite-peach`, bitten.
15. Footer: none.

Twelve photographs. Two are bitten, two bleed, the other eight are square and whole. No viewport holds more than one notched photograph. The hero and the apple portrait are the same head on two colours (review 3.5, rank 3) and are five sections apart.

---

## 3. What each section needs

### 3.1 Disclosure strip

```html
<p class="demo-strip">Demo page. This practice and its dentist are fictional. The photographs are AI-generated.</p>
```

- First element in `body` after the skip link. One element; delete it and nothing else changes.
- Paper field, ink text, 1.5px ink rule underneath. Public Sans 500, 13px / 1.35, padding 7px `--gutter`. Below 640: 12px, padding 5px `--gutter`.
- Height, measured: 33px on one line at 1440 and 1024; 44px on two lines at 390.
- **Not sticky.** It scrolls away; the header stays `top: 0`. No `scroll-padding`, hero height or bar position refers to it.
- No close button, no icon, no colour of its own.

### 3.2 Hero, re-checked with the strip (`images-01-hero-1440.png`, `images-01-hero-390.png`)

Two changes to `02` section 6.1 so the first screen still holds:

- `min-height: clamp(620px, 49.3vw, 710px)` (was `clamp(640px, 51.5vw, 760px)`).
- Below 640 the photograph band is **204px** tall (was 240).

Measured with the strip present:

| | 1440x900 | 390x844 |
|---|---|---|
| Strip | 0–33 | 0–44 |
| Header | 33–105 | 44–100 |
| Hero | 105–815 | from 100 |
| Headline | from 133 | 112–263 |
| Photograph | 593 x 710 at x 847 | band 380–584 |
| Booking strip / openings | 540–744 | 584–709 |
| Footnote ends | 793 | 774 |
| Ticker / bottom bar | 815–871 | bar from 780 |

Everything the brief lists is in the first screen at both sizes. At 390 there are 6px between the footnote and the bar; the subhead must stay at four lines.

Crop detail. At 1440 the image is 593 wide and 741 tall in a 710 frame, so the bottom 31px (her fingertips, already cut by the source) are outside it. At 390 the band shows source rows 49–636: hair to mid-chest, with the designation at the top left and the price block at the bottom left of the empty third (the numeral is 114px wide; her sleeve begins near x 160).

### 3.3 Food strip (`images-02-food-strip-1440.png`, `-390.png`)

Directly under First visit, directly above Services. No heading, no padding, no gaps, no notches.

```css
.foods { display: flex; background: var(--paper); }
.food { flex: var(--ar) 1 0; min-width: 0; margin: 0; }           /* --ar: 1, 1, 1.5, 1 */
.food img { display: block; width: 100%; aspect-ratio: var(--ar); object-fit: cover; object-position: 0% 100%; }
.food figcaption { padding: 8px 12px 14px; font: 400 var(--fs-small)/1.4 var(--font-text); }
.food:first-child figcaption { padding-left: var(--gutter); }
@media (max-width: 639px) {
  .foods { overflow-x: auto; scroll-snap-type: x mandatory; }
  .food { flex: none; width: calc(240px * var(--ar)); scroll-snap-align: start; }
  .food figcaption { padding: 8px 16px 14px; }
}
```

- Order: apple (tangerine), toast (lime), corn (cream), taco (tangerine). Widths follow the aspect ratios, so all four are the same height: 320px at 1440, 228px at 1024.
- Captions sit under each frame on paper, in the caption style. The caption row (43px) is what separates the tangerine taco from the tangerine Services field.
- Phones: a native scroll-snap rail, 240px tall, 1,080px long. The first screen of it shows the apple and 150px of the toast, which is the cue to swipe. No arrows, no dots, no script.
- 640–1023: the flex row, not the rail (frames 142–227px tall). Not rendered.

### 3.4 Comfort (`images-03-comfort-1440.png`, `-390.png`)

`02` section 6.5 drew this as text only in c3–c10. With the photograph:

- Heading across c1–c12. Then one row: `paloma-listening` in c1–c6 (668 x 445), text in c8–c12: lead, "What helps", the ruled list, the text link, then the Stop pill (48px secondary pill) with its one-line explanation beside it.
- Below 1024: heading, photograph, text.
- Still no bite, no lime, nothing that moves.

### 3.5 Meet the dentist (`images-04-dentist-1440.png`, `-1024.png`, `-390.png`)

- The three points and `paloma-drawing` share a two-column row inside the text column: points in c7–c9, photograph in c10–c12 with its caption. Credentials under the row.
- Band height, measured: 1,007px at 1440; 991px at 1024.
- **Zoom cap for the bleeding portrait.** Her right elbow is at 64% of the source width. With a little margin, the image may never be taller than 1.89 x the figure's width, or the elbow leaves the figure. From 1024 up (add the `-webkit-mask` pair for Safari):

```css
.dentist-fig { container-type: size; }
.dentist-fig img { position: absolute; left: 0; bottom: 0; height: min(100cqh, 189cqw); width: auto; max-width: none;
  mask-image: linear-gradient(to left, #0000 0, #000 72px), linear-gradient(#0000 0, #000 32px); mask-composite: intersect; }
```

  At 1440 that is the whole band height (806 x 1007, she fills it). At 1024 it is 636 x 795: she stands at the bottom of the band and the lime field carries on above her head with no visible edge, because the photograph and the field are the same colour.
- Caption `Paloma. Apple.` in c4–c5, bottom-aligned with the text block, on the flat part of the picture.
- Below 1024: photograph band first, caption, heading, bio, pull line, points, `paloma-drawing` full frame at 3:2, its caption, credentials.

### 3.6 Find us, without a map (`images-07-find-us-1440.png`, `-390.png`)

```
1440
│ We’re in Holly, on the east side.                                 (h2, c1–c12)
│ ┌──────── storefront, c1–c7, 783 x 522 ────────┐   ● Open now till 7:30.     (c9–c12)
│ │                                               │   ───────────────────────
│ │                                               │   Mon      8 am to 5 pm
│ └───────────────────────────────────────────────┘   Tue  Today   11 am to 7:30 pm
│ The front door, 2217 Tejocote Street. Placeholder picture.   …
│ [Parking, nearest bus stop and level entrance: to confirm]   2217 Tejocote Street, Austin, TX 78702
│                                                              Get directions   Call or text (512) 555-0142
```

390: heading, photograph, caption, access line, status, hours table, address, links.

Never "level", "step-free" or "accessible" in the caption or alt text (review 3.4).

### 3.7 FAQ (`images-08-faq-ruled-1440.png`, `-390.png`, `images-08b-faq-portrait-390.png`)

Heading and list in c1–c8; `paloma-laughing` in c10–c12, its top level with the heading's. Below 1024 the picture follows the last question at 240 x 300 and the Book button follows the picture.

### 3.8 Cost and Closing (`images-06-cost-*.png`, `images-10-closing-*.png`)

As `02` sections 6.8 and 6.11, with the frames in c10–c12 and the text in c1–c8. One change in Closing: the headline is three authored lines, `No lecture.` / `Price in writing.` / `Come in.` At 104px "No lecture. Price in writing." is about 1,140px and runs under the photograph; on two lines it fits c1–c8. Copywriter to confirm the extra break.

### 3.9 Services

No photograph (`02` section 6.4 had `bite-toast` beside the heading; the strip above now carries the toast). The heading block is a single column.

---

## 4. Backdrops: what was measured, and the paper question

Each backdrop was sampled over its flat area on a 320px downscale; spread is the range inside that area.

| File | Flat area | Hex | Spread (R, G, B) | Sits on | Against that field |
|---|---|---|---|---|---|
| `paloma-hero` | left third | `#f8520a` | 9, 14, 10 | ground `#f9530a` | 1.01:1, bleeds |
| `paloma-apple` | right third | `#cffb43` | 7, 3, 15 | counter `#cffb43` | 1.00:1, bleeds |
| `bite-apple` | top third | `#fb5405` | 5, 8, 7 | the strip | |
| `bite-taco` | top third | `#fa4c02` | 8, 15, 4 | the strip | |
| `bite-toast` | top third | `#c5fb2d` | 12, 3, 22 | the strip | |
| `bite-peach` | top third | `#c8fb26` | 7, 3, 14 | ground | 2.76:1 |
| `bite-corn` | top right | `#fbeddd` | 3, 4, 5 | the strip | 1.06:1 against the paper above and below it |
| `the-drawing` | top strip | `#fcead5` | 3, 4, 4 | ground | 2.85:1 |
| `paloma-laughing` | left 30% | `#fbead6` | 3, 6, 11 | paper | 1.08:1 |
| `paloma-listening` | wall, right | `#e8d6c4` | 20, 21, 23 | paper | 1.30:1 |
| `paloma-drawing` | wall, right | `#eedbcd` | 8, 8, 10 | counter | 1.12:1 in lightness, but cream against lime |
| `storefront` | wall, right | `#dfc0a3` | textured | paper | 1.58:1 |
| `comfort-headphones` | top right | `#f8e6d3` | 4, 5, 7 | not used | |

**No file needs grading.**

**Paper-backdrop frames on the paper page.** Three choices were on the table; this is how each frame was settled.

- `paloma-laughing` (FAQ): **1.5px ink rule.** I rendered both the rule and a graded bleed (a per-channel gain that maps `#fbead6` to `--paper`, with feathered edges; `images-09-faq-graded-1440.png`). The bleed leaves a bust cut off at the waist floating on the page, which is the soft cut-out look `02` section 7 lists as a tell, and the gain lightens her teeth, which the review forbids. The rule makes it a print pinned beside the questions.
- `the-drawing`: **moved to a different field** (Cost is ground), where it can also be bitten.
- `bite-corn`: **neither**; in the strip it is flanked by lime and tangerine and reads as the cream panel of four.
- `paloma-listening`, `storefront`: neither; their walls are a full step darker than the page and their furniture reaches the frame edge.

---

## 5. Export

- Keep the PNG sources untouched (they carry the generator's C2PA manifest; review 3.7 item 6). Export copies.
- AVIF with a JPEG fallback, quality about 80, sRGB. No sharpening, no colour change, no retouching of skin or teeth.
- Widths: twice the largest displayed width, capped at the source.

| File | Export widths |
|---|---|
| `paloma-hero`, `paloma-apple` | 1122, 800, 560 |
| `paloma-listening` | 1336, 716 |
| `storefront` | 1536, 784 |
| `bite-corn` | 960, 480 |
| `bite-apple`, `bite-toast`, `bite-taco` (square crop exported) | 640, 320 |
| `paloma-drawing` (both crops: the 4:5 rect and the full frame) | 644 and 716 |
| `paloma-laughing` (crop exported), `the-drawing`, `bite-peach` | 644, 322 |

The two bleeding portraits must not be re-compressed so hard that their backdrop bands: check the flat area after export stays within ±3 levels of the token.

---

## 6. Favicon, avatar, social card (`images-11-…`, `images-12-…`)

**Favicon.** The bitten square in the ground colour, no letter. One SVG, plus 32 and 16px PNGs from it:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path fill="#f9530a" d="M0 0H56.8A15.3 15.3 0 0 0 66.06 14.06A15.3 15.3 0 0 0 85.94 33.94A15.3 15.3 0 0 0 100 43.2V100H0Z"/>
</svg>
```

That is the `02` notch at a 45-unit tile. Rendered at 64, 32 and 16px on paper and on ink; at 16px it is still a square with a corner gone. `theme-color` is `#f9530a`.

**Touch icon, 180 x 180.** No transparency: ground field edge to edge, and centred on it an ink square of 116px with the same notch (tile 52px). Not rendered.

**Avatar, 400 x 400.** Platforms crop avatars to a circle, which would cut a corner bite, so the bitten square sits inside: ground field; centred ink square of 224px with the notch at its top right (tile 101px); inside it FEAST / DENTAL stacked, Anybody 900 at width 62.5, capitals, 51px / 0.9, ground colour, 20px from the square's left and bottom. Rendered only as the bare square at 200px (`images-12-…`), not inside a circle.

**Social card, 1200 x 630.** The first screen in miniature, and it says Demo:

| Element | Spec |
|---|---|
| Field | `#f9530a` |
| Strip | Top, full width, paper, 1.5px ink rule below. The disclosure sentence in Public Sans 500, 23px / 1.3, padding 11px 48px. About 54px tall |
| Plate | Ink, at x 0, y 54, 96px tall, padding 0 58px 0 48px, notch tile 60px. FEAST DENTAL in ground, 34px |
| Headline | `I don’t care how long` / `it’s been.` Anybody 900, width 66, 86px / 0.9, tracking -0.01em, ink, at x 48, y 206. Line 1 is 685px wide |
| Designation | `DR. PALOMA KRENEK, DDS` / `GENERAL DENTIST`, Anybody 800, width 75, 28px / 1.05, ink, at x 48, 44px from the bottom |
| Photograph | `paloma-hero.png`, 576px tall (461 wide), anchored to the right and bottom edges, left edge feathered 60px |
| Alt | `Dr. Paloma Krenek in dark brown scrubs on an orange background, with the name Feast Dental.` |

Export as JPEG or PNG at 1200 x 630. Keep `noindex`.

---

## 7. Captions, all in one place

| Where | Caption |
|---|---|
| Hero | none |
| Food strip | `Apple.` `Toast.` `Corn.` `Taco.` |
| Comfort | none |
| Dentist, portrait | `Paloma. Apple.` (no clock time in the demo) |
| Dentist, at the chair | `The pad. The marker.` |
| Cost | `Fillings from $190.` (new; to confirm) |
| Find us | `The front door, 2217 Tejocote Street. Placeholder picture.` and the bracketed access line under it |
| FAQ | none |
| Closing | `Peach.` |

Caption style: `--fs-small`, ink, 8px under the frame (`02` section 5.11).

---

## 8. The hero frame: keep, and what to ask for if it is ever re-shot

Keep `paloma-hero.png`. The fingertips cut by the bottom edge sit outside the frame at 1440 and far below the phone band; the left third is enough for the phone's designation and price.

If it is regenerated for another reason, with the current frame as reference, ask for:

- 4:5, three-quarter length, cropped at mid-thigh, **both hands wholly inside the frame with 4% of the height below the fingertips**.
- **Head centre at x 68%, y 16%**; top of the hair no higher than y 5%.
- **Flat backdrop on the left 42% of the width**, top to bottom, nothing in it; at least 3% of backdrop to the right of her shoulder.
- Backdrop prompt value unchanged (`#FF6A14`), then re-sample the left edge and compare with `#f9530a` (±3).
- Same closed-mouth expression, same glasses, hair down.

---

## 9. Changes to `02-visual-system.md` that follow from this file

1. Disclosure strip added above the header (3.1). Hero `min-height` and the phone photograph band are smaller (3.2).
2. A food strip sits between First visit and Services (3.3). The Services heading has no still life.
3. Comfort has a photograph and a two-column row (3.4).
4. Meet the dentist: second photograph beside the points; zoom cap on the portrait (3.5); portrait caption loses its clock time.
5. Find us has no map (3.6).
6. FAQ has a ruled portrait in c10–c12 (3.7). New rule for `02` section 2.5: a paper-backdrop frame on paper takes a 1.5px ink rule.
7. Closing headline is three lines (3.8).
8. Footer plate sits 32px below the footer's top edge, not flush: flush, it merges with the tangerine Closing band above it (`images-10-closing-1440.png`).
9. Favicon is the bitten square in the ground colour with no letter; the avatar puts the bitten square inside a ground field (6).
10. Footer note becomes the review's wording (review 3.7 item 2).

---

## 10. Open

- Copy: the `Fillings from $190.` caption; the three-line Closing headline; the hours table format (the copy file writes "8 am to 5 pm"; my proofs show "8:00 am – 5:00 pm").
- `paloma-drawing` still shows a tidy tooth outline. It is smaller here (322px) than the 600px the review judged, and it sits beside "I draw it."; the reviewer should see it at this size.
- Three pictures of her arrive within about a screen and a half (Comfort, then the two in Meet the dentist). Different poses and hair; I think it holds, and it is worth one more pair of eyes.
- Not rendered: 640–1023 for everything but the hero; the touch icon; the avatar in a circle.
