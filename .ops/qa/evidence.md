# Evidence QA: built page against the design specs and proofs

Reviewer: EvidenceQA. Date: 2026-11-09, 22:22 to 23:25 CST. Report only; nothing under `index.html`, `assets/`, `brand/`, `content/`, `research/` or `tools/` was edited.

## 0. Read this first: the page changed under test

The build was edited continuously while this review ran. File times seen: `index.html` 22:17 at start, then 22:42, 22:50, 23:00, 23:04, 23:06, 23:09, 23:17; `assets/css/page.css` 22:32, 22:51, 23:02, 23:06, 23:09, 23:19, 23:20; `assets/js/page.js` 22:42, 22:51, 23:01, 23:04, 23:09, 23:17. Copy, the Services field colour, the zero band, the hero strip and several layouts changed between passes.

So there are three capture passes, and every defect below says when it was last confirmed:

| Pass | When | Build | Where |
|---|---|---|---|
| 1 | 22:25 to 22:33 | index 22:17 | `shots/evidence/first-pass-2225/` (147 files; every one was looked at, 72 views: 21 singles at 1440, sheets for the rest) |
| 2 | 23:01 to 23:04 | index 23:00 to 23:01 | `shots/evidence/second-pass-2302/` (not reviewed frame by frame; superseded within minutes) |
| 3 | 23:11 to 23:13 | index 23:09:18, css 23:09:07, js 23:09:18 | `shots/evidence/{width}-{nn}-{section}-{k}.png` (139 files). Looked at in full at 1440 and 390 (`sheets/final-1440-0*.png`, `sheets/final-390-0*.png`) and the hero at all six sizes plus 375x667 (`final-hero-*.png`) |

Last check of the open defects: 23:20 to 23:22 against index 23:17:47, css 23:20:21, js 23:17:47 (`final2-hero-1024x768.png`, `final2-hero-1280x800.png`, numbers in section 2). Anything edited after 23:22 is not covered; `index.html` and `page.css` were edited again at 23:25, while this report was being written, and that edit was not reviewed. CSS line numbers below are those of the 23:20:21 file.

Ten things that were real defects in pass 1 were fixed by the builder during the window; they are listed in section 3 with the pass-1 evidence so nobody re-reports them.

## 1. Scope, method, and what was not done

- Browser: my own tab in the shared automation browser (Edge 157, Blink), driven over the DevTools protocol with viewport emulation only; no window was resized and no other tab touched. Emulation, clock mock and forced states were removed at the end.
- Viewports captured section by section, after one scroll-through so lazy images and one-shot observers had fired: 1440x900, 1280x800, 1024x768 (desktop pointer), 768x1024, 390x844, 360x740 (touch emulation, 390 and 360 at 2x). Sticky header and phone bar are in every frame.
- Clock: the status and chips come from `assets/js/page.js` in America/Chicago time. The main sets were captured with `Date` shifted to Tuesday 10 Nov 2026, 2:00 pm CT, which reproduces the proofs ("Open now till 7:30.", chips Tue 5:45 pm, Wed 8:00 am, Thu 5:30 pm). Closed states were tested at Mon 10:30 pm, Sat 2:00 pm and Sun 10:00 am CT, each also with the visitor's zone set to America/New_York (adds " CT").
- Width sweep: 28 widths from 320 to 1920 (`sweep-320-1920.json`), plus fine steps at 1024 to 1064, 330 to 366 and 1280 to 1440.
- Measurements are `getBoundingClientRect` and Range rects in CSS px; colours and fonts are computed styles over every visible element and its `::before`/`::after`; rendered fonts are from `CSS.getPlatformFontsForNode`; seams are pixel means from 2x captures.
- `./qa-playwright-capture.sh` and `ai/agents/qa.md` named in my standing process do not exist in this project: NOT RUN. The captures above replace them.
- NOT TESTED: Safari and Firefox; a real phone; `prefers-reduced-motion` (only the page's own Stop control); print; forced colours; no-script; widths between sweep points; accessibility, copy accuracy and compliance (other reviewers). Hover and pressed end states were captured with DevTools forced pseudo-classes because taking a clipped screenshot ends a real hover in this browser; the timings were read from computed styles, not watched.
- One anomaly not reproduced: the very first scripted load showed the page scrolled about 97px. It did not recur in 60+ later loads (scrollY 0 each time). Not reported as a defect.

## 2. Defects still present at the last check, by severity

Screenshot paths are relative to `.ops/qa/shots/evidence/`. CSS lines are `assets/css/page.css` as of 23:20:21.

| ID | Sev | Viewport | Where | Screenshot | What is wrong (measured) | Expected, and where it says so | Smallest fix |
|---|---|---|---|---|---|---|---|
| E1 | blocker | 1024 to about 1190 wide | Hero, `#slots` chips | `final2-hero-1024x768.png`, `defect-chips-overflow-1024.png`, `1024-01-hero-0.png` | The third time chip leaves the booking strip and lies across the portrait's arm; "pm" is ink on dark sleeve. Overflow past `#slots`: 98px at 1024, 52 at 1100, 21 at 1150, 0 at 1200. Cause: the price cell `.fv` is now as wide as its caption "without insurance · exam, X-rays, regular cleaning" (373px at 1024, was 288 in pass 1), so the openings cell is 263px for 335px of chips. Last seen 23:21. Pass 1 already overflowed by 12.6px here, as does `proof-hero-1024.png` | `02` 6.1: "price cell as wide as its numeral plus 28px"; `02` 5.5: chips "equal widths (flex: 1)" below 1280, inside the strip | `page.css:243`: `.fv { inline-size: min-content }` with `.fv .lab, .fv .num { white-space: nowrap }` so the caption wraps under the numeral. That returns 85px to the openings cell at 1024, which is the pass-1 state and still 12.6px short from 1024 to 1051, so also let the chips shrink there (`.slot { min-width: 0 }` and 14px type) |
| E2 | should fix | 1280 to 1339 wide | Hero strip | `final2-hero-1280x800.png`, `defect-chip-shift-1280-a-before.png`, `-b-after.png` | Same cause as E1. Chips wrap two and one ("Thu 5:30 pm" alone on a second row), the hero is 723px instead of 667, the ticker leaves the first screen at 1280x800, and choosing a chip wraps the two buttons and grows the hero by another 66px (723 to 789), pushing the whole page down. +66 measured at 1280, 1300, 1320 and at 1024; +0 from 1340 up. Last seen 23:21 | `02` 6.1 layout at 1280 and up; `03` section 8 "Never animates... Anything that would move a neighbour"; `03` section 3 "the primary button's label becomes 'Book Thu 5:30 pm' in one frame" | E1's fix restores a 443px openings cell at 1280, enough for three chips (426) and for "Book Thu 5:30 pm" + "Call (512) 555-0142" (422). At 1024 to 1279 reserve the second button row or keep the hero label short |
| E3 | should fix | 768x1024, 1024x768, 1280x800 | Hero footnote `.fn` | `defect-footnote-below-fold-768x1024.png`, `final2-hero-1024x768.png`, `final2-hero-1280x800.png` | Footnote is not on the first screen: 1010 to 1046 against a 1024 fold (768); 743 to 779 against 768 (1024); 770 to 806 against 800 (1280). The price numeral is on screen in all three. At 1440x900 (757 to 793) and 390x844 (704 to 777, bar at 780, 3px clear) it holds. Last seen 23:21 | `02` 5.11: "The hero footnote stays on the same screen as the price at every width" | 1280 clears with E1. 1024: `page.css:502` `.hero__hrs { margin-bottom: 46px }` plus the two-line insured line cost about 30px; cut the margin. 768: band `min(46vw, 400px)` to about `min(42vw, 360px)` |
| E4 | should fix | 360 and 375 wide (two lines at 390; 376 to 389 not measured) | Services designation `.desig` | `defect-designation-360.png`, `final-360-services-head.png` | Wraps to three lines: "DR. PALOMA KRENEK," / "DDS" / "GENERAL DENTIST". Two lines from 390. Last seen 23:21 | `02` 6.4: "Below 640 the designation stacks on two lines with no interpunct (proofed)" | Scale `--fs-d2` below 390 the way the h1 now scales (keeps designation and service words the same size for the Texas rule) |
| E5 | should fix | all | Field order down the page | `sheets/final-1440-01.png`, `state-row-hover-on-paper-1440.png` | Services moved from the ground field to paper between 22:58 and 23:10. First visit, food strip, Services and Comfort are now one paper run of three sections plus the strip; four saturated fields remain, not five. The hovered or focused service row is now lime on paper (1.10:1) with ink rules above and below only, so its two ends have no edge | `02` 2.4 table (Services: ground) and "Saturated colour never leaves the screen for more than one section until Find us and FAQ"; `02` section 7 "A paper stretch longer than two sections"; `02` 2.3 "counter on paper... always with a 1.5px ink rule" | A decision, not a patch: either return Services to ground, or accept the designer's fallback (`02` section 8, least sure 2) and amend 2.4 and the checklist. If it stays on paper, rule the row's ends |
| E6 | should fix | 1024 and up | Running text | `inventory-computed-styles.json`, `1440-01-hero-0.png` | Lines over 66 characters at 1440: footnote 103 to 105 at 13px; hero insured line 90 at 15px; demo strip 89; body paragraphs at 20px 67 to 75; FAQ answers 70; footer legal 73 to 74. None at 390 or 360. `max-width: 78ch` (`page.css:253`) allows about 105 characters because `ch` is the width of "0" | `02` section 7 "Text lines longer than 66 characters"; `02` 1.3 "Body measure 37 to 66 characters"; `02` 5.11 footnote "max 78 characters" | Measures in em: about 28em gives 66 characters in Public Sans; footnote about 35em for 78. Add a max-width to `.hero__hrs` (`page.css:235`). The demo strip is specified as one line at 1440 (`04` 3.1), so the spec contradicts itself there; I would exempt the strip |
| E7 | should fix | all | Hours table, today's row | `final-hours-today-row-4x.png`, `final-390-find-us.png` | The ink rules above and below today's row have a 2px break between the day cell and the time cell. Cause: `page.css:439` `border-right: 2px solid var(--counter)` on the `th` in a collapsed table. Last seen 23:21 | `02` 5.12 "rule above every row"; brief item 4 "misaligned rules" | Drop line 439 and close the seam with `border-collapse: separate; border-spacing: 0` on `.hours`, or paint the lime on the `tr` |
| E19 | should fix | 640 to 1023 (seen at 768) | Hero price caption | `defect-footnote-below-fold-768x1024.png` | The caption under the price, "without insurance · exam, X-rays, regular cleaning" with its footnote mark, is 339px wide (x 25 to 364) and its last word and the mark run onto her dark scrub top, which begins near x 340. New with the longer caption (pass 1 read "without insurance" and cleared her). Seen 23:15 | `02` 6.1, 640 to 1023: the price block sits "at its bottom left, laid over the photograph's empty third"; brief item 4 (a label touching a subject) | Below 1024 keep the short caption (as phones do) or cap `.fv .cap` at the numeral's width so it wraps |
| E8 | could fix | below 1280 | Chosen time chip | `defect-chosen-chip-notch-360.png`, `defect-chosen-chip-1024.png` | The notch on a chosen chip sits over the label's last letters with a couple of px of air above the "m" (by eye from the 2x crop). Padding is 4px at 360, 6 to 11px at 390, 6px at 1024; the notch tile is 18px (`page.css:610`), reach 14px | `02` 4.2 "A notch may never reach a label. Rule: tile size <= right padding / 0.78" (4px padding allows a 5px tile). The same spec asks for 4 to 6px padding below 1280, so it cannot satisfy its own rule | Below 1280 show the chosen state without the notch (fill, ink rule and `:checked` remain; `03` section 3 calls the notch "a bonus") |
| E9 | could fix | 1440 (all with the row) | Footer | `defect-footer-rule-gap-1440.png` | The paper rule is two pieces, x 40 to 939 and x 963 to 1400, with a 24px gap (two grid items, each with its own `border-top`, `page.css:474` and `:480`). `proof-footer-1440.png` has the same split, at two heights | `02` 5.14 "A paper rule, then one line" | One full-width rule on the row |
| E10 | could fix | all | "0 reviews" promise headings | `1440-08-zero-1.png` | `.promises h3` is Public Sans 600 at 22px (`page.css:407`). The matching headings in the dentist band are Anybody 800 at 28px | `02` 1.3: `--fs-d3` covers "promise headings" in Anybody 800; "promise sentences" are the lead | Use the `.pts h3` setting (`page.css:383`); four 40px headings would crowd the band, so I side with the dentist-band size over the table |
| E11 | could fix | 640 to 1023 | First-visit discs | `768-03-first-visit-0.png` | Portion discs are 120px while the steps are stacked; 72px only below 640 (`page.css:572`) | `02` 5.9 "portion disc right (120px; 72px stacked)" | Move the 72px rule to the block that stacks the steps |
| E12 | could fix | all | Insurance switch | `state-switch-1-no-insurance.png`, `state-switch-2-with-insurance.png` | Switching panels changes the section's height (894 to 924 at 1440, 1305 to 1253 at 390 at 23:15), so everything below jumps; at 22:58 the price chip also disappeared in the insured state | `02` 5.13 "The block under it swaps in one frame"; `03` section 8 "Anything that would move a neighbour" | Stack both panels in one grid cell and toggle `visibility` |
| E13 | could fix | all | Phone numbers | `inventory-computed-styles.json` | `font-variant-numeric` is `tabular-nums` on the header number only; `normal` on the hero and closing buttons, three text links and both footer links | `02` 1.3 "Tabular figures on every price, time and phone number" | One rule on `a[href^="tel:"]` |
| E14 | could fix | all | Ticker "Play" tab focus | `state-ticker-3-paused-focus.png` | When paused the tab is paper-filled and its focus ring is the counter colour: lime on cream, 1.10:1. Captured 22:58; the rule (`page.css:275` and `:107`) was unchanged at 23:20 | `02` 5.3 focus: "3px solid ink outline... (counter-coloured outline on ink fields)"; the tab is no longer an ink field when paused | `.ticker.is-paused .ticker__pause:focus-visible { outline-color: var(--ink) }` |
| E15 | could fix | 390 and below | FAQ end | `final-390-faq-end.png` | Order is last question, price chip, portrait; the Book button is hidden on phones (`page.css:586`) | `04` 3.7 "the picture follows the last question... and the Book button follows the picture"; `images-08b-faq-portrait-390.png` | Move the chip after the picture, or record the bar-only decision in `04` |
| E16 | could fix | 1280 | Hero designation | `final2-hero-1280x800.png`, `sheets/final-crops-desktop.png` | "KRENEK, DDS" ends within about 8px of her forearm at 1280 (about 40px at 1366, clear at 1440). In pass 1 it touched | `02` 6.1 "on the flat part of the photograph beside her arm" | Clears further once E1 shortens the strip; otherwise start the label one column left at 1280 to 1366 |
| E17 | could fix | various | Orphans and breaks | `state-row-hover-on-paper-1440.png`, `sheets/final-390-0*.png` | Hero subhead at 390 ends "...and no / lecture." (`final-hero-390x844.png`); lane name "CHANGE HOW THEY / LOOK" (1440, 1280); "I price it in / writing." (1280, 1024); "...You set the / pace." (1024, 390); "Feast Dental on / Google" (1024); footer head "THE DENTIST AND / OWNER" (768 and below) | Brief item 4 (orphaned text, awkward breaks); `02` 1.3 "Headings wrap with text-wrap: balance" | `text-wrap: balance` on `.lane__name`, `.pts h3`, footer `h2`; `pretty` on the leads |
| E18 | could fix | desktop pointer | Colour swaps | `first-pass-2225/1280-05-services-0.png` | Fills tween from transparent: a chosen chip measured `rgba(207,251,67,0.776)` 40ms after the click, and a hovered row on the (then) ground field was caught mid-blend as mustard | `03` section 10 freeze-frame "Nothing is half-transparent"; against that, `03` section 8 allows colour swaps of 0 to 100ms | Start from the field colour instead of `transparent`, or cut the fill. The two spec lines disagree; I would keep the 80ms and fix the start colour |

Counts at the last check: 1 blocker, 7 should fix, 11 could fix.

Noted, not counted: the six paper and ground sections from First visit to FAQ all carry 120/120 padding at 1440 (56/56 at 390), which leans toward the "equal padding all the way down" tell; some hover rules sit outside the `(hover: hover) and (pointer: fine)` query (`page.css:117`, `:205`, `:212`, `:431`, `:454`); at 320 wide with a visitor outside Central time the header status ("Opens Mon 8 am CT") pushed the layout viewport to 334 to 340px (pass 1, not rechecked); at 375x667 the bar covers the chip row on the first screen, which `02` 6.1 allows ("the buttons never leave").

## 3. Fixed during the review window (do not re-report)

| Was | Pass-1 evidence | Measured then | State at 23:15 to 23:21 |
|---|---|---|---|
| h1 clipped by the viewport at 364px and below ("long" cut at 360) | `first-pass-2225/360-01-hero-0.png` | widest line ended at x 365 with a 360 viewport | h1 is 51.84px at 360, ends x 339 of 344 (`fixed-h1-360.png`) |
| Header Book button pushed off screen at 1024 once a time was chosen | `sheets/state-header-1024-chosen-overflow.png` | right edge 1028 to 1035 when closed, 1051 to 1058 with " CT" | header label stays "Book online", right edge 994 (`fixed-header-1024-closed-chosen.png`) |
| "Paloma. Apple." printed over her trousers | `sheets/overlap-labels.png` | subject behind 74 of 100px at 1024, 60 at 1280, 17 at 1440; ink on fabric 1.02:1 | caption moved beside her hair; flat lime behind it at 1024 to 1920 |
| Footer address in synthesised italic | `state-footer-link-hover.png` (22:58) | `address` computed `font-style: italic` | `normal` (`fixed-address-footer-1440.png`) |
| "X-/ray" and "In-/chair" split at hyphens on phones | `first-pass-2225/sheets/390-sheet-02.png` | | no line ends in a hyphen at any of six widths |
| "promise" and "instead." colliding in the zero heading | `first-pass-2225/1440-08-zero-1.png` | | heading restructured (`fixed-zero-heading-1440.png`) |
| Footer legal line of 146 characters | `first-pass-2225/1440-13-footer-0.png` | | 73 to 74 characters |
| Closing band padding 120 | pass-1 computed styles | 120/120 | 80/80, as `02` 6.11 |
| Footer hours breaking mid-range ("11 to / 7:30") | `first-pass-2225/sheets/1024-sheet-10.png` | | four authored lines |
| Chips overflowing below 354px, clipped at 320 | sweep, pass 1 | +31px at 320 | wrap below 360 |

## 4. Hero numbers against the measured values in the specs

Build of 23:09 to 23:17. Spec values are `04` 3.2 (with the disclosure strip).

| | Spec 1440x900 | Built | Spec 390x844 | Built |
|---|---|---|---|---|
| Strip | 0 to 33 | 0 to 33 | 0 to 44 | 0 to 44 |
| Header | 33 to 105 | 33 to 105 | 44 to 100 | 44 to 100 |
| Hero | 105 to 815 | 105 to 815 | from 100 | 100 to 847 |
| Headline | from 133; line 1 ends x 1059 (`02` 1.4) | from 133; ends x 1059 | 112 to 263; widest line 349 | 112 to 263; 349 (x 16 to 365) |
| Photograph | 593 x 710 at x 847 | 593 x 710 at x 847 | band 380 to 584 (204) | band 380 to 570 (190) |
| Booking strip / openings | 540 to 744 | 546 to 747 | 584 to 709 | 570 to 696 |
| Footnote ends | 793 | 793 | 774 | 777 |
| Ticker / bar | 815 to 871 | 815 to 871 | bar from 780 | bar from 780 |

First screen at 1440x900 holds the dentist, headline, price and length, three chips, both buttons (bottom 733), footnote and ticker: pass. First screen at 390x844 holds headline, four-line subhead at 17px, designation, price, chips and the footnote, 3px above the bar (spec had 6): pass, with no slack. Differences: the phone band is 14px shorter than `04` asks (190, was 204 in pass 1), spent on a longer footnote; the 1440 price cell is 382px, not the 355 of `02` 6.1 (root of E1 and E2). Other widths: h1 line 1 ends x 752 at 1024 (spec 705; her hair starts near 790) and x 968 at 1280.

## 5. `02` section 7, "This would make it look generated", item by item

Build of 23:17 to 23:20 unless stated. "0" means zero elements matched.

**Type**

| Item | Result | Proof |
|---|---|---|
| A third typeface | pass | Glyphs drawn at 1440: Public Sans 11,278, Anybody 1,840, both web fonts, no system font; at 390: 10,956 and 1,784 |
| Anybody below 800, or as body; Public Sans above 28px | pass | 0 Anybody elements under weight 800; smallest Anybody 17px (labels); largest Public Sans 22px. For about 15 minutes around 22:50 the designation's interpunct was Public Sans at 72px; it is Anybody again (`final-designation-interpunct-1440.png`) |
| Uppercase tracked labels in Public Sans | pass | 0 |
| Two-colour headline, gradient type, italic | pass, one note | Gradient type 0; italic 0 (was 1, section 3). The zero heading is lime "0" plus paper "reviews.", which `02` 6.7 itself specifies; the checklist line and 6.7 disagree and 6.7 should win |
| Display type centred | pass | 0 Anybody elements with `text-align` other than start |
| Slashed zeros, non-tabular prices, a price that animates | pass for prices | `font-feature-settings: normal`; `tabular-nums` on the hero numeral, row prices, chips, hours and slots; row prices `transition: none`. Phone numbers are not tabular: E13 |
| The h1 carrying the city | pass | "I don't care how long it's been." |

**Colour**

| Item | Result | Proof |
|---|---|---|
| A fifth colour | pass | Every computed text, background and border colour is one of `#26120b`, `#fff4e3`, `#f9530a`, `#cffb43`. Transient blends: E18 |
| Lime only where allowed; a second lime field; lime without an ink rule | fail in part | Lime backgrounds: primary buttons, chosen chip, crumbs, hovered row, today's row, the dentist band; the "0" as text. One lime field. Without a full rule on paper: today's row (rules above and below only, as in `proof-hours-1440.png`) and now the hovered service row (E5) |
| Bands blending, soft edges between fields | pass | No element has a background gradient; the only gradients are masks on the two bleeding portraits and the crescents |
| A paper stretch longer than two sections | fail | First visit, food strip, Services, Comfort are all paper since about 23:05 (E5) |
| Paper-coloured text on the ground | pass | 0 |
| `#000` or `#fff` | pass | None computed; in `page.css`, `#000` occurs only as mask alpha stops |
| Tangerine gradient, glow, vignette behind the portrait | pass | None; seam numbers in section 7 |

**Shape and structure**

| Item | Result | Proof |
|---|---|---|
| A second radius | pass | 999px on pills, chips and the switch; 50% only on dots, crumbs, radio inputs and discs |
| Any shadow | pass, one note | No `box-shadow` on header, bar or any box; the property is used only to draw zero-blur crumb dots on `::after` |
| Card grids; three cards with an icon on top | pass | Steps are ruled columns, services and promises ruled rows (`1440-03-first-visit-0.png`) |
| Icons | pass | 0 `svg`, 12 `img`, all photographs; the FAQ plus is two CSS strokes. Two photographs show a drawn tooth (`04` section 10 already flags it) |
| Star row, rating badge, "as seen in", patient counts | pass | None in any capture |
| A photograph in every service row; food next to Emergency | pass | No image inside `#services` |
| Giant cropped wordmark in the footer | pass | Plate only (`1440-13-footer-0.png`) |

**The bite**

| Item | Result | Proof |
|---|---|---|
| More than one bitten photograph in a viewport; a notch on every image | pass | 2 of 12 photographs are bitten (Cost, Closing), more than 3,000px apart at 1440 |
| Wrong corner, two shapes, a shadow or outline on the notch | pass | One mask (`--bite-tr`), top right on plate, buttons, chips and both frames |
| A bite through a letter, price, face, field or map | pass at 1280 and up; at risk below | E8 |
| A hairline of the old outline | pass | None at 2x on a bitten button or chip (`state-primary-6-bitten-rest.png`, `state-chip-5-chosen.png`) |
| A bite in Comfort | pass | No notched element in `#comfort`; its pill is the secondary |

**Layout**

| Item | Result | Proof |
|---|---|---|
| Centred hero with two pills | pass | Flush left; buttons inside the booking strip |
| Equal heights and padding; the same block alternating sides | pass, with the padding note under section 2 | Heights at 1440 run 617 to 1,398; picture sides run left, left, right, left, right, right |
| Portrait in a rounded frame, circle or soft cut-out | pass | Two bleeds, one ruled square |
| Text lines longer than 66 characters | fail | E6 |
| Cookie banner, chat bubble, widget or toast over the first screen | pass | Nothing at load; the "Demo page" notice appears only after pressing a placeholder link, for 4.5s (`state-toast-1440.png`) |

**Visual motion tells in section 7** (pulsing dot, chip shimmer, a hover that lifts): pass. `.dot` has no animation; chips are created in one frame; hover rules change colour, underline or `font-stretch` only.

## 6. `03` section 10, motion tells

| Tell | Result | Proof |
|---|---|---|
| Fade-in-up, opacity reveals, staggered cards | pass | `opacity` appears in `page.css` only as a static 0 on the visually hidden radio inputs |
| Stock ease, `ease`, one 300ms duration, `transition: all` | pass | Easings: `cubic-bezier(.25,.8,.3,1)` and one `linear()` spring; durations 80, 160, 200, 240, 260, 360, 420, 480, 540ms; no `transition: all` with a duration, no `cubic-bezier(.4`, no `ease-in-out` |
| Hover that lifts, grows a shadow or zooms a photo | pass | No transform, shadow or scale in any `:hover` rule |
| Count-up, shimmer, pulsing live dot | pass | None |
| Typewriter, blur-in, shimmer headlines | pass | Headline animates `font-stretch` and `font-weight` only (`chew`) |
| Progress bar, hiding header, back-to-top | pass | Header is 72px (56 on phones) at every scroll stop in every capture |
| Magnets, cursor followers, tilt, parallax | pass | No pointer-move listener in `page.js` |
| Underlines drawn from the left | pass | Underline thickness goes 1.5 to 3px, nothing else |
| Confetti | pass | Three lime dots on a button, two on a chip (`state-primary-5-bitten-45ms.png`, `state-chip-4-chosen-45ms.png`) |
| A marquee with no control | pass | Pause tab 72x56; paused drift 0.00px over 1s; running speed 83px/s at 1440 (spec 80) |
| Bounce everywhere | pass | Spring peaks at 1.103, one wobble |
| Every section moving on entry | pass | Four one-shots: portions, "Paloma." chew, the "0", "Come in." |
| Keyframes that change `translate` | pass | `crumbs-a`, `crumbs-b`, `ticker` only |
| Freeze-frame | fail in part | E18 |
| Five mechanisms | pass | Bite, chew, open wide, ticker, accordion |

## 7. Seams where the two portraits bleed (zoomed)

2x captures `seam-hero-*@2x.png` and `seam-meet-*@2x.png`; `seam-amp-*.png` are the same areas with differences multiplied by 8. Values are means in the screenshot's colour space, so compare field with photograph, not with the hex.

- Hero on tangerine: field (230, 95, 44); photograph backdrop (230.5 to 230.8, 95 to 96, 44). Under one level per channel at 1440, 1024, 768 and 390. The only difference is grain (standard deviation about 1 against 0). No visible edge at the 72px side feather or the 32px top feather.
- "I'm Paloma." on lime: field (216, 250, 102); photograph (215 to 216.2, 249.3 to 249.8, 98.3 to 100.7). Blue is up to 3.7 levels low at the top of the frame at 1440, about 1 elsewhere; `04` section 5 asks for 3. Not visible at 1x or at 8x amplification. Bottom edge of the phone and tablet bands: under 0.5.
- At 1024 the lime field carries on above her head with no edge, as `04` 3.5 promises.

## 8. States exercised

Captured 22:56 to 23:00 on the build of 22:50 (Services then on ground), 1440x900 at 2x unless noted. Sheets: `sheets/states-buttons.png`, `states-chips.png`, `states-rows.png`, `states-faq-switch-ticker-motion.png`, `states-hover-forced.png`, `states-390.png`.

| State | File | Measured | Against `02` 5 and `03` |
|---|---|---|---|
| Primary rest, hover, focus | `state-primary-1-rest.png`, `-2-hover.png`, `-3-focus.png` | lime fill, ink rule; hover ink fill with lime label; focus 3px solid ink, 3px offset | matches 5.3 |
| Primary pressed, bitten | `state-primary-4-pressed.png`, `-5-bitten-45ms.png`, `-6-bitten-rest.png`, `-7-bitten-keyboard-focus-ring.png` | held: scale 0.96 from the bottom left; on click the notch is in within one frame, three crumbs, recoil; rests bitten and restocks after about 2s; Enter does the same and the ring stays whole | matches 5.3 and `03` section 1 |
| Secondary rest, hover, focus, pressed | `state-secondary-*.png` | no fill, ink rule; hover ink fill with paper label; held scale 0.98, no notch | matches |
| Service row hover, focus | `state-row-3-hover.png`, `state-row-4-focus.png`, `state-row-hover-on-paper-1440.png` | lime ground, word from width 62.5 to 100, price and description do not move (same rects), focus ring 3px inside | matches 5.7 and `proof-services-1440.png`; on paper see E5 |
| Time chip rest, hover, focus, chosen | `state-chip-1` to `-5` | hover paper fill; focus ring; chosen lime fill, ink rule, notch, `:checked`; arrow keys move and choose; choosing the chosen chip clears it; label becomes "Book Thu 5:30 pm" | matches 5.5; clearance below 1280 is E8 |
| FAQ open | `state-faq-1-open.png`, `state-390-faq-open.png` | plus turns 45 degrees; answer 20px, padding 14/4/22; one row open at a time | matches 5.10 |
| Insurance switch | `state-switch-1`, `-2`, `-3` | chosen pill ink with paper label; panel swaps in one frame | matches 5.13 except E12. `images-06-cost-390.png` drew a square divider between the halves; the build nests two pills, which is what 5.13's words describe |
| Ticker paused | `state-ticker-2-paused.png` | tab reads "Play", paper fill, ink label | matches 5.6; focus ring is E14 |
| Motion stopped | `state-motion-2-off.png`, `state-motion-off-first-screen-1440.png` | `data-motion="off"`, kept in `localStorage`; ticker becomes a static wrapped list, Pause tab hidden, wide words shown wide, discs drawn bitten; label "Start the motion" | matches `03` section 8; restored to on afterwards |
| Header open and closed | `final-hero-1440x900.png`, `fixed-header-1024-closed-chosen.png` | open: whole dot; closed: crescent, "Booking's open all night" at night, "Opens Mon 8 am" on Saturday afternoon and Sunday; today's row follows the clock, including "Sun Today Closed" | matches `03` section 3 |
| Phone: chosen chip, bitten bar button, notice | `state-390-chip-chosen.png`, `state-390-bar-bitten-toast.png` | bar label fits on one line; the notice sits 16px above the bar and covers the footnote for 4.5s | acceptable |

## 9. What matched the proofs well

- Hero at 1440 and 390: every measured position in `04` 3.2 within 6px, the footnote exactly (section 4). The first screen reads as `images-01-hero-1440.png` and `images-01-hero-390.png`.
- Both bleeds: no seam at any tested width.
- First-visit steps: disc geometry and position are those of `proof-steps-faq-1440.png`.
- Food strip: order, square crops, 320px height, caption row, phone rail showing the apple and part of the toast, as `images-02-food-strip-*.png`.
- Service row hover: lime ground and the word opening to width 100 with the price standing still, as the Emergency row in `proof-services-1440.png`.
- Dentist band at 1440: portrait, text column, three points beside the 4:5 photograph, as `images-04-dentist-1440.png`.
- Cost, Find us, FAQ and Closing at 1440: frames in c10 to c12 with the bite top right, the ruled FAQ portrait, the storefront in c1 to c7, as `images-06`, `-07`, `-08`, `-10`.
- Footer: plate 32px below the top edge (`04` section 9, item 8), four columns, cookie.
- System discipline: two typefaces, four colours, one radius, no shadows, no gradients, no icons, all confirmed from computed styles.

## 10. Verdict

Design level: good to excellent at 1440x900 and 390x844, the two sizes the designer proofed. At those sizes the build matches the proofs, with measurements to show it.

It does not yet match across the range the brief asks for. Between 1024 and about 1340 wide the hero strip is broken or cramped (E1, E2, E3), at tablet width the price caption runs onto the portrait (E19), 360 to 375 has the designation orphan (E4), and the move of Services to paper (E5) changes the page's colour plan away from `02` 2.4 and fails a checklist line the client was told to care about.

Status: FAILED on E1 until fixed; NOT DETERMINED for anything edited after 23:22. Re-test required: yes, on a frozen build. E1, E2, E19 and part of E3 share one cause (the price cell grew with its caption), so one change should clear most of them.

Evidence: `.ops/qa/shots/evidence/`
