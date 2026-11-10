# Cross-engine verification

Reviewer: motion-research. Page under test: `index.html` + `assets/css/page.css` + `assets/js/page.js`, as served at
`http://127.0.0.1:4173/` between 22:25 and 23:10 on 2026-11-09. The page was being edited while I tested, so each
result names the time or the frozen copy it was measured on.

Engines: Google Chrome 157.0.8103.50; Playwright builds of Firefox 159.0 and WebKit 27.2 (not Safari itself, and
not a phone). Viewports: 1440x900, 1024x768, 768x1024, 390x844, plus 320 to 412 wide for the narrow checks.
Screenshots: `.ops/qa/shots/engines/` (`w<width>-<section>-<engine>.png`, side-by-side sheets `cmp-w<width>-<section>.png`,
interaction shots `ix-*`, mode shots `nojs-*`, `reduced-*`, `fit-*`, `forced-*`).

## Findings, most serious first

| # | Severity | What | Where | Fix | Status |
|---|---|---|---|---|---|
| 1 | Blocker | **The ticker's Pause does not pause**, in all three engines. The button turns into "Play" and inverts, the track keeps travelling at 46px/s. The observer calls `a.play()` on the CSS animation, after which engines ignore `animation-play-state`. Fails WCAG 2.2.2 | `page.js`, ticker block | Drive pause and play through one `sync()` that calls `a.pause()` / `a.play()`. Patched copy tested in all three: 0px in 1s after Pause, resumes on Play, rests off screen, stays paused after scrolling away and back | **fixed**, verified 23:20 in all three engines |
| 2 | Should fix | **On short phone screens the designation overlaps the price label in the hero.** `--fig-h: clamp(150px, 24svh, 204px)` lets the photograph band shrink below the 188px its two text blocks need. Overlap: 32px at 320x568, 28px at 360x640, 22px at 375x667, 14px at 390x700; none from about 780px tall. A phone browser's small viewport is shorter than the screen, so this will show on current phones | `page.css` line 536 | `--fig-h: clamp(190px, 24svh, 204px)` | applied; holds at 375x667 and 390x700, **reopened at 320 and 360 by finding 15** |
| 3 | Should fix | **The headline is cut off below 365px wide.** "care how long" is 349px at the fixed 56px, so its ink ends at x 365: past the gutter at 375, touching the edge at 360, and at 320 the word reads "lo" (`fit-320px-first-screen-*.png`) | `.h1`, below 640 | `font-size: min(var(--fs-hero), 14.4vw)` (56px from 389 up, 46px at 320) | **fixed**, verified 23:20 (ink ends at the gutter at 320 and 360) |
| 4 | Should fix | **The third time chip is cut off below 340px wide** (right edge at x 328 in a 320 viewport) | `.slots` at line 486 | `@media (max-width: 359px) { .slots { flex-wrap: wrap; } }` | **fixed**, verified 23:20 |
| 5 | Should fix | **When a chip expires at the minute tick, keyboard focus is dropped to `body`, and the chip that is still chosen takes its bite again** (recoil and crumbs replay). Selection, button labels and the status line are handled correctly. Same in all three engines | `page.js` `paintSlots()` | Remember the focused chip's value before the rebuild and focus the chip with that value after it (or the first chip); mark a redrawn chosen chip (`is-kept`) so CSS skips its animation, and clear the mark on the next click | **fixed**, verified 23:28 in all three engines: focus stays on the same chip, or moves to the first chip when the focused one expires; no second bite |
| 6 | Could fix | Overshoot above the agreed 4 width units: "Come in." peaks at 131 against 125; a service word chewed while open peaks at 105 against 100. ("0" computes to 157.5 but the axis stops at 150, so nothing shows.) | `.once-wide .w__t` transition; `chew` keyframes | Use a 5% spring for those two (curve sent to lead) | sent to lead |
| 7 | Could fix | Ticker speed is 46px/s; interaction spec section 8 says 64 on phones and 80 on desktop. The scroll boost takes about 900ms to settle; the spec says 500ms | `page.js` `setDur()`, `settle()` | lead's call; `rate += (1 - rate) * 0.15` settles in about 470ms | sent to lead |
| 8 | Could fix | Forced colours: the `$195` numeral's line-height of 0.86 puts its text backplate over the "First visit · 75 min" label above it, in Chrome and Firefox (`forced-*-first-screen-*.png`) | `.num` | `@media (forced-colors: active) { .num { line-height: 1; } }` | this report |
| 9 | Could fix | Without script the caption "Sample times for this demo, not real openings." still shows, under a line that offers no times | `#op-cap` | Hide it until the script fills it | this report |
| 10 | Could fix | Footer links are 16 to 18px tall on lines 21px apart (WCAG 2.5.8 asks for 24px or spacing). The header status link is 15px tall but has room around it | `.foot a` | `padding-block: 4px` or a line-height of 2 on those lines | this report |
| 11 | Note | WebKit does not fetch the fourth food picture (`bite-taco`) until the rail is swiped near it; Chrome and Firefox fetch it on vertical approach. Expected lazy-loading behaviour; 10 kB | `.foods` | none needed | |
| 12 | Note | The crescents (closed dot, ticker separators) are radial-gradient masks. They are acceptable at 12px in all three engines; `--crescent` in `bite.css` is a path and would be crisper at the 20px status dot | `.dot.is-closed`, `.ticker__track li::after` | optional: `mask: var(--crescent) center / 100% 100% no-repeat` with no border-radius | |
| 13 | Note | With text-only zoom at 200% on a 390 viewport the display type overflows by 154px. Desktop text zoom at 200% and page zoom at 200% and 400% pass. Finding 3's `vw` cap fixes the headline part | rem-sized display type | low priority | |
| 14 | Note | The insurance switch starts on "No insurance"; `content/copy.md` section 9 marks "With insurance" as the default | `#ins-no` | copy owner's call | sent to lead |

### Re-check at 23:20: new findings from wording changed after the first pass

The hero caption became "without insurance · exam, X-rays, regular cleaning¹", the footnote grew to four lines, and
the price chip became "First visit $195 without insurance · 75 min". Measured in Chrome; all are layout, so the
other engines will match.

| # | Severity | What | Fix |
|---|---|---|---|
| 15 | Should fix | **375 to 412 wide: the caption runs across the photograph.** Its ink reaches x 347; the flat third of the picture ends near x 160, so "X-rays, regular cleaning" is dark text on her dark scrubs (`recheck-390x844-first-screen-chromium.png`). **320 and 360 wide:** it wraps to two or three lines and the designation overlaps "First visit · 75 min" by 10px | Wrap the added words in `.cap__more` and hide it below 640; the footnote directly below carries the detail |
| 16 | Should fix | **390x844: the last footnote line is under the bottom bar** (footnote ends at 789, bar starts at 780) | `.hero { --fig-h: 190px; }` below 640. With 15 fixed the footnote ends at 776 |
| 17 | Should fix | **320 wide: the page scrolls sideways by 25px.** The chip is 329px wide; at 360 it is 1px wider than its column | Wrap " without insurance ·" in `.chip__more` and hide it below 390 |
| 18 | Note | At 1440 the price cell is now 382px wide (355 in the proof), so the rule and the openings cell sit 27px to the right | designer's call |

Findings 15 to 17 were tried together on the live page by script (nothing saved): no sideways scroll at 320, no
overlap at 320, 360 or 375, caption ink ends at x 142, desktop unchanged.

## 1. Firefox and WebKit against Chrome

Measured on a frozen copy of the files taken at 22:53 (the live page changed between my first Chrome and WebKit
passes, which made the FAQ look 219px taller in WebKit when it was three questions longer).

- **Section heights.** At 1440 and 1024 every one of the 14 sections is within 1px across the three engines. At 768
  two differ by 2 to 3px (dentist band, promises). At 390 seven differ by 2 to 7px (text sections; WebKit and Firefox
  round line boxes up). No section reflows differently.
- **Hero against the designer's measurements** (`brand/04-image-placement.md` 3.2), identical in all three engines:

  | | proof, 1440x900 | built | proof, 390x844 | built |
  |---|---|---|---|---|
  | strip | 0 to 33 | 0 to 33 | 0 to 44 | 0 to 43 |
  | header | 33 to 105 | 33 to 105 | 44 to 100 | 43 to 99 |
  | headline | from 133 | 133 to 363 | 112 to 263 | 111 to 262 |
  | line 1 ends at x | 1059 | 1059 | | |
  | photograph | 593 x 710 at x 847 | 593 x 710 at x 847 | band 380 to 584 | 380 to 583 |
  | booking strip / openings | 540 to 744 | 546 to 746 | 584 to 709 | 582 to 708 |
  | footnote ends | 793 | 792 | 774 | 771 |
  | ticker / bottom bar | 815 to 871 | 814 to 870 | bar from 780 | 780 |

- **Features the page relies on**, checked by `CSS.supports` and by the computed result on the page:

  | Feature | Chrome | Firefox | WebKit | Applied result |
  |---|---|---|---|---|
  | SVG `mask` on `.btn__face`, `.plate`, `.frame`, `.portion` | yes | yes | yes | Same computed mask in all three; edges magnified and crisp at 1x and 2x (plate notch, portion disc) |
  | `subgrid` on `.zero__h` | yes | yes | yes | `grid / subgrid`, same layout |
  | `container-type: size` on `.meet__fig` | yes | yes | yes | Image 823 x 1028 in a 593 x 1028 figure at 1440; 636 x 795 at 1024: the zoom cap holds |
  | `:has()` | yes | yes | yes | chips, switch, focus ring on chips |
  | Nesting with `&.js` under `:root:not([data-motion="off"])` | yes | yes | yes | ticker, one-shots and pause control switch on |
  | `font-stretch` animation and transition | yes | yes | yes | same widths at every sampled frame |
  | `linear()` easing | yes | yes | yes | |
  | `interpolate-size` | yes | **no** | yes | FAQ opens over about 260ms in Chrome and WebKit, in one frame in Firefox (as the spec allows) |
  | `::details-content` | yes | yes | yes | |
  | `<details name>` | yes | yes | yes | one answer open at a time |
  | `animation-timeline: view()` | yes | yes | yes | applied only under `(hover: none)`; verified under touch emulation in Chrome and WebKit |
  | `text-wrap: balance`, `mask-composite: intersect` | yes | yes | yes | |

- **Console.** No errors and no failed requests in any engine at any width.
- **Horizontal overflow.** None in any engine at 1440, 1024, 768, 390 or 320.

## 2. Interaction pass

Chrome, Firefox and WebKit at 1440x900 and 390x844 by pointer and keyboard, clock fixed at Tue 5:20 pm Central;
touch emulation in Chrome and WebKit at 390; the minute tick with a controlled clock in all three. 91 results were
identical across the six pointer-and-keyboard runs.

| Mechanism | Result |
|---|---|
| Bite on click | Squash to 0.96 while pressed, box unchanged. On release the mask moves to the corner in one frame (two mask states seen, never a third), the body starts at 0.96 and 1.2deg, peaks at 1.004, settles in 207 to 221ms (496ms in one WebKit sample). Crumbs gone by 239 to 255ms. Rests bitten; a second click replays; restocks with the pop after 2s; a point inside the notch still hits the button. Enter bites. Focus ring `solid 3px, offset 3px`, whole |
| Chips | A `fieldset` named "Pick a time for your first visit". Click, arrow keys and Space choose; all book buttons read "Book Thu 5:30 pm"; choosing the chosen chip again clears it. WebKit, like Safari, does not focus a radio on click, so arrows work there after Tab |
| Minute tick | Nothing is rebuilt inside the same minute: focus and selection stay. When the list changes: see finding 5. Closing time while open flips the text and the dot at the minute. Other zones read "Open now till 7:30 pm CT." |
| Portions | Start whole, bite once when 60% of a step is in view, in order (`1:1 2:1 2:2 3:1 3:2 3:3` at 1440), 119 to 127ms apart, no replay on return |
| Headline chew | Each word to its tight width and back, in reading order, done 838 to 925ms after DOMContentLoaded. Heading height, word cells and the line below never move; layout shift 0 |
| Service rows | Hover: word 62.5 to 100 (peak 103.3 to 103.9), row turns lime, prices and row geometry unchanged to 0.2px. Press: chew to 50 and back. Touch: the scroll link runs (`view(32%)`), a tap chews on top of it, no hover colour sticks |
| One-shots | "Paloma." chews once; "0" goes 75 to 150 and stays; "Come in." 66 to 125 and stays |
| Ticker | Two copies, the second `aria-hidden`; keyframes `none` to `-100%`; the second copy starts 3292.6px after the first, which is 3293px wide: no seam. Rests off screen, resumes on return. Boost up to 2.84x. **Pause: finding 1** |
| FAQ | One open at a time; Enter and Space toggle; marker at 45deg when open |
| Stop the motion | Sets `data-motion="off"`, both labels read "Start the motion", "Motion is off." shows, stored. After reload the attribute is set on the first frame and no animation is running; portions drawn bitten, "0" and "Come in." wide. A press then shows the notch with no squash, recoil or crumbs. Turning it back on restores the ticker |
| Cookie | `One bite.` `Two bites.` `Three bites.` `All gone.` `Fresh cookie.`; holding for 950ms eats four and stops on release; Enter and Space eat one each |
| Touch | A tap bites and the fill stays lime; a swipe that starts on the button does not bite (Chrome); chips are 48px tall |

## 3. Numbers (Chrome 157, live page at 22:52)

| | 390x844 (touch, 3x) | 1440x900 |
|---|---|---|
| Layout shift on load, fonts on time | 0 | 0.0004 (header status text replacing "Hours" at 49ms) |
| Layout shift on load, both fonts 800ms late | 0.0011 | 0.0092 (was 0.0445 before the per-width fallback faces) |
| Layout shift over a full scroll | 0 | 0.0004 |
| Layout shift during the headline chew | 0 | 0 |
| LCP, unthrottled | 72ms | 68ms |
| LCP, 150ms RTT, 1.6 Mbps down, 4x CPU, three runs | 1396, 1400, 1420ms | 1240, 1244, 1284ms |
| LCP element | hero `img` (`paloma-hero-1122.avif`, 69 kB) | hero `img` (`paloma-hero-640.avif`, 23 kB) |
| First load | 10 requests, 267 kB as served | 14 requests, 256 kB |
| by type | document 46.0, CSS 52.4, script 17.4, fonts 81.9, image 69.0 kB | document 46.0, CSS 53.2, script 17.7, fonts 81.9, images 57.1 kB |
| After a full scroll | 21 requests, 704 kB | 21 requests, 387 kB |

- The preview server does not compress. With gzip the text is 29.6 kB (HTML 10.4, `page.css` 11.6, `bite.css` 1.1,
  `page.js` 6.5), so the 390 first load is about 180 kB over the wire.
- Both preloads are used: the hero image and Anybody are each requested once and Chrome logs no unused-preload
  warning. Public Sans is not preloaded and arrives about 180ms after first paint under throttling; nothing shifts.
- Services list scrolling by touch on the 390 viewport at 4x CPU: longest frame 16.8ms, none over 25ms in 374 frames,
  no long animation frames, 47 distinct width states sampled. Identical with motion off. A desktop GPU, not a phone.

## 4. Modes

- **No JavaScript** (three engines, 1440 and 390): no overflow; status is the "Hours" link; the chips slot reads
  "Call or text for today's times."; all nine ticker facts visible in a wrapped list with no Pause; portions drawn
  1, 2, 3; "0" and "Come in." wide; the headline still chews (pure CSS); the stop control and the cookie are hidden;
  no broken images. See finding 9.
- **Reduced motion** (three engines, 1440 and 390): no animation at load; ticker static with no Pause; portions
  drawn bitten; during a full scroll the only thing that ran was the 80ms background-colour transition on a hovered
  service row; a press shows the notch as a state with no squash, recoil or crumbs; colour swaps still work.
- **Page zoom 200% and 400%** (720, 640 and 320px wide): no overflow, nothing cut at 720 and 640. At 320: findings 3 and 4.
- **320px**: no horizontal scroll; findings 3 and 4. Short screens: finding 2.
- **Forced colours** (Chrome and Firefox; Playwright's WebKit cannot emulate it): text, borders, chips, focus ring and
  the ticker are all visible and system-coloured; the photograph keeps its orange backdrop as a rectangle. Finding 8.

## Not tested

Safari itself and any real phone or tablet. Screen readers (the role and name checks above are from the DOM only).
Android: neither of the fallback faces' local fonts (Impact, Arial) exists there, so the late-font shift numbers do
not transfer. Forced colours in WebKit. Printing. The page with a slow or failing image host.
