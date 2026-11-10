# Final verification: tools, README, cross-engine pass

Developer role, 2026-11-09 23:46 to 2026-11-10 01:37. Report only for the page: I edited no line of `index.html`,
`page.css` or `page.js`. I changed `tools/`, `README.md` and the generated files (section 2).

**State tested.** The page changed while I worked (index 23:47:33; page.css and page.js 00:17:32, index 00:19:30;
page.css 00:22:21; index 00:26:14; page.css and page.js 00:28:40; index and page.css 01:10:16, applying F2; index
and page.css 01:28:20, applying F9 and F10), so every run records the page hashes at its start and end, and only
runs that started and ended on one state are quoted. The full pass ran on the 00:28 state. On the final state
(01:30:13 to 01:35:18, hashes unchanged at both ends) I re-ran the 108-load layout matrix, the cold-load layout
shift, the picture choices and the F10 test:

| File | 00:28 state (full pass) | final state (01:28:20) |
|---|---|---|
| `index.html` | `2f0ed8a6974c` | `aba48494552e` |
| `assets/css/page.css` | `aec351b8ccd2` | `15554eda94d1` |
| `assets/js/page.js` | `2dde8cf0fbe5` | `2dde8cf0fbe5` |
| `assets/css/bite.css` | `421d316e60c7` (mine, REACH 64) | same |

The differences between the two states are F2, F9 and F10 only: the final `index.html` equals the 01:10 file with
my tested F9 attributes applied, character for character, and `page.css` differs from the 01:10 file by the two
F10 lines. Earlier runs on intermediate states are kept but not quoted (`shots/final/data/run-straddled.log`).

**F2 on cold loads, final state** (Chrome 157, 390x844 at 3x and 1440x900, three loads each, no input): CLS 0 at
both sizes unthrottled; on Slow 4G with 4x CPU 0.0005 at 390 (Public Sans swapping in) in all three loads, and the
40px drop and its 0.040 shift seen before F2 did not occur. One of the three throttled loads at 1440 measured 0.011
(F11).

**Engines.** Google Chrome 157.0.8103.50 (headless, Playwright); Microsoft Edge 157 (the shared browser: its user
agent is `Edg/157`, so the "Chrome" tab the brief names is Edge on the same Chromium engine); Playwright's Firefox 159.0
and WebKit 27.2. **Sizes:** 1440x900, 1280x800, 1024x768, 768x1024, 390x844, 390x664, 375x667, 360x740, 320x568.
**Clock:** fixed at Tue 2:00 pm CT and Mon 10:30 pm CT, seen from America/Chicago and from America/New_York.

Evidence: `.ops/qa/shots/final/` (sheets `cmp-<size>-<day|night>.jpg`, per-engine frames in `matrix/`, focus rings
in `focus/` and `focus-sheet-*.png`, forced colours in `forced/` and `forced-*.jpg`, tool proofs `cr20-*` and
`tools-social-card-*`, raw numbers in `data/`, the scripts in `scripts/`; they need `playwright-core` 1.65 and
`PLAYWRIGHT_BROWSERS_PATH` set to a folder holding Firefox 1572 and WebKit 2388).

---

## 1. Findings, ranked

| # | Severity | Finding | Engines, sizes | Measured | Page change |
|---|---|---|---|---|---|
| F1 | should fix, **applied by the lead at 00:22:21 and verified** | Firefox synthesised bold on the late-font stand-ins (`local("Impact")` faces with no weight range, asked for at 800 and 900), so they ran 4.7% wide and a late Anybody moved the lock-up and the openings sideways | Firefox, all sizes | Before: GENERAL DENTIST's box 27.2px, the openings column 23.3px at 1440; 12 to 15px at 1024 and 768; 9.6px at 390. Chrome and WebKit: 2.1px. After: 2.1px or less in all three engines, 0px vertically everywhere | Done: `font-weight: 100 900;` on the nine `"Anybody fb*"` faces (`page.css` line 22 and the LATE-FONT STAND-INS block) |
| F2 | could fix, **applied by the lead at 01:10:16 and verified** (live page, `page.js` held back 600ms: 0px from 360 to 1440 in all three engines, 54px at 320; caption hidden before script and visible after, `aria-describedby` still set; with script off the caption is invisible and keeps its space; the 108-load matrix unchanged) | **When `page.js` runs after the first paint, the hero below the openings caption drops.** `#op-cap` ("Sample times for this demo…") is `hidden` until the script shows it, and the script appends "As of 2:00 pm.", so everything under it moves: the footnote, the subhead, the insurance line | All three, every width below 1024 and 1280 | With `page.js` held back 600ms (so the first paint always comes first): 40px at 360 to 400 wide, 94px at 320, 23px at 412 to 639, 25px at 768, 24px at 1280, 0 at 1024 and 1440. It happened by itself in 2 of 6 cold loads at 390 in Chrome (one unthrottled, one on Slow 4G with 4x CPU): layout-shift value 0.040. Chrome marks that entry `hadRecentInput` (no input was given) and leaves it out of CLS, so the reported CLS is 0 to 0.0005; a browser or field tool that counts it gets 0.04, still under 0.1 | `index.html:401`: `<p class="opcap" id="op-cap" data-needs-js>Sample times for this demo, not real openings. As of 2:00 pm.</p>` (drop `hidden`; the time is a stand-in the script overwrites before anyone sees it). `page.css`: `:root:not(.js) #op-cap { visibility: hidden; }`. Tested by injection in all three engines: 0px from 360 to 1440; the final layout identical to the page as built at all 12 sizes tried; without script the caption is invisible, keeps its space, no sideways scroll. Left: 54px at 320 (the third chip wraps to a second row) and one line where the live time is longer than "2:00 pm" at a width where that tips the wrap. The visibility rule alone (no stand-in time) gives 40 to 18px on phones, 0 from 412 to 1023 and at 1440, 24 to 18px at 1280 |
| F9 | could fix, **applied by the lead at 01:28:20 and verified** (the live markup is exactly the tested change; final state: the five pictures at 768x1024 2x now load 170.2 kB, same files in all three engines; 1024 2x 148.6 kB, 1440 2x 275.9 kB, 390 3x 185.8 kB, as predicted; matrix unchanged) | **Four pictures carry `sizes` from the old tablet layout.** From 640 to 1023 the comfort photo and the storefront sit in two columns (from 768), the 4:5 photographs beside Cost and Closing are about 31% wide, and the drawing's frame is 4:5 while its 4:5 files only apply from 1024, so a 3:2 file 2.8 times too wide is cropped into it. Below 640 the two 4:5 photographs fill the column, not 322px | All three engines pick the same files | AVIF bytes for these five pictures, as built and proposed: 768x1024 at 2x 291 to 170 kB; 900 and 1023 wide at 2x 291 to 197 kB; 768 at 1x 84 to 56 kB; 640 and 700 at 2x 291 to 228 and 250 kB. Unchanged at 320 to 600 and from 1024 up. No frame moves at any of 17 sizes; every changed choice still covers its frame (lowest 0.99). `shots/final/data/sizes-proposal.json` | In `index.html` (every `<source>` and the `<img>` of each picture). `paloma-listening`: `sizes="(min-width: 1600px) 748px, (min-width: 1024px) 46.6vw, (min-width: 768px) 47.2vw, calc(95.4vw - 14px)"`. `storefront`: `sizes="(min-width: 1600px) 877px, (min-width: 1024px) 54.6vw, (min-width: 768px) 55.2vw, calc(95.4vw - 14px)"`. `the-drawing` and `bite-peach`: `sizes="(min-width: 1600px) 362px, (min-width: 1024px) 22.5vw, (min-width: 640px) 31.1vw, calc(95.4vw - 14px)"`. The three `paloma-drawing-4x5` sources: `media="(min-width: 640px)"` and `sizes="(min-width: 1600px) 362px, (min-width: 1024px) 22.5vw, 36.3vw"`. The generator already emits these: `shots/final/pictures-markup.html` (copy the attributes, not the `ALT:` markers) |
| F10 | could fix, **applied by the lead at 01:28:20 and verified** (final state, no injection: no sideways scroll at 320, 344, 360 and 390 in any engine with Public Sans loaded or blocked; switch ends at 293 to 294px at 320 loaded, 305.4px in WebKit blocked) | **Before Public Sans arrives (or if it fails), the insurance switch is wider than a 320 screen.** Its labels are 600 weight and `nowrap`, and the "Public Sans fb" stand-in (`local("Arial")`, no weight range) runs wide: Firefox synthesises bold (as in F1), WebKit appears to take the real Arial Bold | Firefox and WebKit, below 330px wide. Chrome fits | Public Sans blocked: page scrolls sideways 9px at 320 in WebKit (switch to x 329.4) and 5px in Firefox (325.1). Also seen once with script off, measured right at `load` before the font arrived. Fine from 344 up, and fine once the font is in (318.3) | `page.css` line 24, the `"Public Sans fb"` face: add `font-weight: 100 900;` (fixes Firefox: 312.1). And `@media (max-width: 339.98px) { .switch label { padding-inline: 16px; } }` (fixes WebKit: 305.4). Tested together by injection with Public Sans blocked: no sideways scroll at 320, 330, 339 in all three engines; from 340 nothing changes |
| F3 | done (tools; approved by the lead) | `paloma-laughing` was built but unused since the FAQ lost its portrait at 00:19 | n/a | | I removed its `IMAGES` entry (a comment says how to restore it) and rebuilt at 01:14:41. Confirmed again at 01:29 against my first build's hash list: the only differences are the 9 `paloma-laughing-*` files (gone, 288 kB) and `manifest.json`; the other 147 pictures, the icons, card and avatar are byte-identical; `assets/img/src/paloma-laughing.png` and the other 19 sources are untouched. `brand/04-image-placement.md`, `brand/02-visual-system.md`, `content/copy.md` and `research/04` still describe the placement |
| F4 | note | On short phones the footnote is below the phone bar, and at 320 so are the chips. Not one of the sizes the brief requires, but `README.md` said "The footnote must stay on the same screen as the price"; I restated it to what is built | All three | Footnote ends 104px below the bar top at 390x664, 96px at 375x667, 35px at 360x740, 236px at 320x568. Chips 113px below at 320x568 (they are 19px clear at 390x664) | None proposed: at 390x664 the footnote cannot move up without pushing the chips under the bar |
| F5 | note | Little room left at two required sizes: one more line in the hero there puts the footnote below the fold | All three, Edge | Footnote bottom to fold: 9.9 to 10px at 768x1024 and 12.6 to 12.8px at 1024x768 (Edge: 8.5 and 10.2) | Keep in mind when editing the footnote, caption or subhead |
| F6 | note | Firefox logs one warning on every load: "Preload of … was ignored due to unknown 'as' or 'type' values, or non-matching 'media'". It is the media-gated hero preload that does not apply at that width | Firefox, all sizes | In all three engines at 11 size and density pairs exactly one hero file is fetched and it is the one shown. Edge logs "preloaded but not used" only after the emulated viewport changes in an open tab (the artefact you described) | None |
| F7 | spec drift, **fixed in brand/04 by the lead** | `brand/04-image-placement.md:107` and `research/04-inclusive-visuals-review.md:181` gave the strip as "This practice and Dr. Paloma Krenek are fictional"; the page and now the card say "its dentist" | n/a | | `brand/04` updated by the lead; `research/04` left as a dated review record |
| F8 | note (compliance) | At 00:19 the footer lost the legal entity and the "Texas dental license no." line that `compliance.md` section 1a lists as applied (M5), and "Look me up" no longer gives a number. Invented values (`$60`, `June 30, 2027`, the cancellation rule) now stand where brackets were | n/a | | Your call for a demo; `README.md` now lists the invented values and tells a real practice to add the entity and the number |
| F11 | note | On a slow cold load at 1440, the ticker's Pause button (72px) and the header status replacing "Hours" appear when `page.js` runs; if that is after the first paint, the ticker line and the status move sideways | Chrome, 1440x900, Slow 4G and 4x CPU | 1 of 3 throttled loads, both before and after F2: layout shift 0.0108 at 2.27s (counted by Chrome), CLS 0.011, far under 0.1. 0 in every unthrottled load | None proposed: reserving the Pause button's space before script would leave an empty box on the no-script page |

With both fonts loaded, no horizontal scroll, overlap, unequal lock-up, console error or broken interaction was found
on the final state in any engine. The one sideways scroll found needs Public Sans late or missing and a screen under
330px (F10).

## 2. Tool changes

All in files I own. Before the build I hashed the 164 files in `assets/img/` and the 20 in `assets/img/src/`
(`shots/final/data/hash-before-img.txt`).

| Item | Change | Proof |
|---|---|---|
| **CR-11** | `tools/build-images.mjs:501-502`: the reviewer's two lines. A run without `tools/social-card-type.json` keeps the last `social-card.jpg` and `avatar-400.png` and lists them in the manifest | In a scratch copy without the lettering file: exit 0, the warning, both files byte-identical afterwards and in `manifest.files`. The same copy with only those two lines reverted printed `removed stale assets/img/avatar-400.png` and `…social-card.jpg` and deleted both |
| **CR-25** | None needed. The generator has drawn `favicon-96.png` from the same path as the 16 and 32 since 23:26 (`build-images.mjs:378`, `for (const px of [96, 32, 16])`) and lists it in `manifest.icons` and `manifest.files` | My build wrote a `favicon-96.png` byte-identical to the one in the folder, so that file is the generator's output, not a hand-made copy |
| **CR-26** | `build-images.mjs:42` imports `outline` and `shapes` from `tools/bite.mjs`; `bitten()` (:343) and `FAVICON_PATH` (:351) are now computed from `outline(shapes.bite)`. Comments in both files say that a bite change needs both scripts run | The computed favicon path equals brand/04's literal `M0 0H56.8A15.3 … V100H0Z` character for character; the touch-icon path is identical. The avatar and card notches move by 0.001px (the old constants were the geometry rounded to 4 places: 0.7542 for 0.754191). Results: `favicon.svg`, `favicon-16/32/96.png`, `apple-touch-icon.png` byte-identical; `avatar-400.png` 16 pixels differ by 1/255 |
| **CR-20** | `tools/bite.mjs:45` `REACH = 64` (comment explains the plate's numbers); `node tools/bite.mjs` rewrote `assets/css/bite.css` and `prototypes/proto-bite.css`. Only `--bite-reach` and the four corner masks' `viewBox` changed; `--portions` and `--crescent` are byte-identical | Screenshots with motion off and the clock fixed, old `bite.css` served by interception against the new one, header plate, bitten button, chosen chip, the three portion discs, bitten photograph, footer plate, full page, at 1440 and 390 in all three engines: pixel-identical except the bitten photograph at 1440: in Chrome 21 anti-aliased pixels along the notch curve differ (up to 102/255 in one channel; deterministic run to run; the edge equally sharp at 8x, `cr20-chromium-photo-notch-8x-before-after.png`), in Firefox 15 edge pixels by 4/255 or less (identical in a second A/B run). Sheets: `cr20-<engine>-<width>.png`. At 5000 and 5120 wide the plate's left end was masked away by 106 and 166px in all three engines; now 0 (`cr20-<engine>-5120-plate.png`). Frame times while biting and scrolling, three runs per engine at 1440 and 390 (Chrome at 4x CPU): median 16ms and 95th percentile 18 to 20ms before and after, no frame over 50ms either way |
| **Card wording** | `tools/social-card-type.json`: the strip run's text is now the page strip's ("…This practice and its dentist are fictional…"); outlines regenerated with `tools/social-card-type.swift` (Anybody from `prototypes/fonts/`, Public Sans Medium 1.008) | With unchanged text the Swift tool reproduced the old JSON byte for byte first; after the edit only the strip run changed (width 1037.71 to 947.77). `tools-social-card-strip-before-after.png` |
| **Build** | `node tools/build-images.mjs` once, 00:00:53 to 00:01:02, exit 0, seam check passed | 3 of 164 files changed, all expected: `social-card.jpg` (wording; 111,573 to 110,225 bytes), `avatar-400.png` (the 0.001px notch), `manifest.json` (only the card's byte count: putting 111573 back reproduces the old file's hash). Nothing removed. The 20 source PNGs are untouched |
| **`IMAGES` data, after your later messages** | `paloma-laughing` removed (F3). The band's note now says `min(32vw, 290px)` from 640 and its slots are 246px at 768 and 193px at 390; the hero's 1024 slot is 421x673 (drawn 539). Measured frames and matching `sizes` for the comfort photo, the drawing (4:5 files from 640), the Cost drawing, the storefront and the peach (F9; new `SIDE_4X5` constant). Stale notes fixed: the storefront caption, the drawing "beside the three points" | Second build, 01:14:41, exit 0, with `--markup`: hashed against the first build, the only changes are the 9 laughing files removed and `manifest.json` (that entry, the slots, sizes and media). The other 147 pictures, the icons, the card and the avatar are byte-identical; the sources are untouched |
| **README** | Demo marks (og prefixes, the storefront caption), placeholder counts (recounted on the 00:26 page), First visit row (chips, footnote by size), fee dates, invented values, an "Add at launch" row (school, years, licence, entity, insurers), the lock-up rule, a Texas list from compliance M1 to M12, the hero's art direction and the band crop, the rule that `slots` and `sizes` follow `page.css`, the fallback faces and the weight-range rule, the cookie's new press and hold, regeneration (CR-11, CR-26, lettering), "Checked, and not", and the seam-check sentence corrected (it fails on encoding drift, not on a source that is off) | |

## 3. What passed (final state)

| Check | Chrome | Edge (shared) | Firefox | WebKit | Numbers |
|---|---|---|---|---|---|
| No horizontal scroll, 9 sizes, day and night, from Central and from New York | pass | pass (Central) | pass | pass | 108 Playwright loads and 18 Edge states: `scrollWidth - clientWidth` = 0; the header status inside the page at every size |
| "$195" and GENERAL DENTIST at one computed size | pass | pass | pass | pass | 96 / 85.34 / 58 / 64.51 / 47.97 / 46.13 / 44.28 / 40px at 1440 / 1280 / 1024 / 768 / 390 / 375 / 360 / 320 |
| No overlap in the hero (headline, subhead, insurance line, name, GENERAL DENTIST, label, numeral, caption, openings, chips, caption, buttons, footnote) | pass | pass | pass | pass | 0 overlapping pairs in any state |
| Footnote above the fold at 1440x900, 1280x800, 1024x768, 768x1024, 390x844 (above the bar on the phone) | pass | pass | pass | pass | Bottom at 792.5 / 766 / 755.3 / 1014.1 / 747 against 900 / 800 / 768 / 1024 / 780 (bar top) |
| Chips above the bar at 390x664 | pass | pass | pass | pass | Bottom 581 to 582.6 against 600 |
| Hero picture: which file, one request per load (no viewport emulation, device set when the context opens, 6s wait) | pass | | pass | pass | Same file in all three engines: 1440@1x `paloma-hero-640`, 1440@2x `-1122`, 1280 and 1024@1x `-640`; 1023@1x `paloma-hero-band-1122`, 768@2x `band-1122`, 390x844 and 390x664 @3x `band-1122`, 375@2x `band-800`, 360@3x `band-1122`, 320@2x `band-640`. Exactly one hero file requested per load, the one shown; Chrome logs no unused preload |
| Hero photo behind the text (the figure now follows `#fn1` in the markup) | pass | | pass | pass | Hit test at the centre of every text block that overlaps the photo: the headline and openings at 1440 and 1024, her name and GENERAL DENTIST over the band at 768, 390 and 320, all above the photo; `stack-1440.jpg`, `stack-390.jpg` |
| `.oph` ("Next openings" / "More times", space added at 00:26) | pass | | pass | pass | One row 19.5 to 20px tall, the two items at the same x in every engine at 5 sizes |
| Chips after the 00:28 CSS | pass | | pass | pass | Time chips 48px, one row from 390, two rows at 320. Price chips (Cost `span`, Closing link) 40px tall, one line, inside the column at 320 (202px wide) and 390 (334px) |
| Late-font stand-ins, Anybody blocked | pass | | pass | pass | Largest move of any hero block 2.1px, 0px vertically, at 7 sizes. Control with plain Impact: up to 232px vertically (1280), 254px sideways. All five stand-ins measure exactly their `size-adjust` against Impact in every engine, so `local("Impact")` resolves in all three. Public Sans blocked: nothing moves vertically |
| Bite and restock | pass | | pass | pass | Mask moves to the corner on click; restock after 1,908 to 1,978ms; tap on the phone bar 1,921 to 1,941ms |
| Choosing a time chip | pass | | pass | pass | Every Book label reads "Book Tue 5:45 pm", status "Tue 5:45 pm picked. Nothing is booked yet."; choosing it again restores "Book online"; touch target 48px |
| Ticker Pause | pass | | pass | pass | 80.2 to 80.9px/s moving, 0 paused ("Play"), resumes at the same speed |
| Stop the motion, kept on reload | pass | | pass | pass | `data-motion="off"`, stored; after reload nothing running, discs drawn 1-2-3, ticker wrapped, no Pause; a press still shows the notch (only colour transitions run); turning it back on restores the ticker |
| Reduced motion | pass | | pass | pass | Nothing running at load or during a full scroll; Stop control hidden; discs drawn; a press shows the notch with colour transitions only |
| Insurance switch | pass | | pass | pass | 0 of 21 elements below it move; the panel box stays 150px |
| FAQ | pass | | pass | pass | One open at a time; Enter opens, Space closes; 73px closed, 259px open |
| Cookie | pass | | pass | pass | Hold 950ms: 3 bites (the 00:17 code waits 280ms before the first held bite), stops on release; Enter and Space one bite each; a tap one bite |
| Keyboard focus | pass | | pass | pass | First Tab lands on "Skip to content", visible; 41 distinct stops; every ring solid 3px; ring against field: ink on tangerine 5.34, tangerine on ink 5.34, ink on paper 16.44, lime on ink 14.94. Crops in `focus-sheet-*.png` |
| Forced colours | pass | | pass | not emulable | Text, rules, chips, the chosen chip (`Highlight`), the focus ring and both buttons drawn in system colours; `forced-1440.jpg`, `forced-390.jpg` |
| CLS, cold load | 0 (3 runs each at 1440 and 390); 0.0005 on Slow 4G with 4x CPU (Public Sans swapping in), once 0.011 at 1440 (F11). Re-run on the final state: the same | 0.00 at 1440 and 390 (traced reload, cache bypassed); LCP 96 and 84ms | | | Before F2, a 0.040 shift on phones that Chrome left out; gone on the final state (F2) |
| Console | no messages | Edge info and the emulation artefact only | the preload warning only (F6) | no messages | No errors, no failed requests |

## 4. Not checked

- Safari itself (macOS or iOS) and any real phone or tablet. WebKit 27.2 under Playwright is not Safari, and
  `svh` on a phone is shorter than the screen, which is why 390x664 stands in for a 390x844 iPhone.
- A screen reader. Names and roles are from the DOM only.
- Forced colours in WebKit (Playwright cannot emulate it).
- Android's fonts: neither Impact nor Arial exists there, so the late-font numbers do not transfer.
- In this pass: no script, page zoom, printing, landscape phones (CR-10 still needs a device). `engines.md` has the
  earlier no-script and zoom results, on an older state.
- Real-user layout shift. F2's entry is excluded by Chrome's own rule here; a field measurement may differ.

---

**Closing (2026-11-10 01:37).** On the final hashes (index `aba48494552e`, page.css `15554eda94d1`, page.js `2dde8cf0fbe5`,
unchanged from 01:30:13 to 01:37:09): the 108-load matrix in Chrome, Firefox and WebKit is clean (no sideways scroll,
"$195" equal to GENERAL DENTIST, no overlap, footnote above the fold at the five required sizes, chips above the bar
at 390x664), and with Public Sans blocked the insurance switch fits at 320, 330 and 339 in all three engines (ends at
x 288.1 in Chrome and Firefox, 305.4 in WebKit). No new findings. Data: `shots/final/data/matrix-final-state.json`,
`f10-320-339-final-state.txt`, `cls-cold-final-state.json`, `pictures-chosen-final-state.json`.
