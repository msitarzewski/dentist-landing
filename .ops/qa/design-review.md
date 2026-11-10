# Design review of the built page

Reviewer: the visual designer (`visual-capture`). Report only; no page file was edited.

**Build reviewed.** http://127.0.0.1:4173/ on 2026-11-09, 22:25 to 22:57 local. The page was being edited while I reviewed it (it grew from 9,821px to 10,417px tall at 1440). Line numbers below are for `assets/css/page.css` saved 22:51:52 and `index.html` saved 22:50:19. Finding 1 was re-measured at 22:56; every other finding was observed earlier in the session and its rule is unchanged in the 22:51 CSS.

**How it was tested.** Chrome, my own tab, emulated 1440x900, 1280x800, 1024x768, 768x1024 and 390x844 (plus 1366x768, 1023x768 and 640x900 as spot checks). Every section looked at beside `brand/specimens/proof-*.png` and `images-*.png`; boxes and text lines measured in the page. Every correction below was injected into my tab as a style sheet and re-measured: with all of them on, there is no horizontal overflow at 1440, 1280, 1024, 768, 640 or 390.

**Not tested.** Safari, Firefox, a real phone, widths under 390 or over 1440, DPR 3, the "With insurance" panel, an open FAQ answer, the cookie, the secondary button's hover, the motion-off state, print, forced colours. Motion was judged from sampled computed values and frozen frames, not watched as video.

Screenshots: `.ops/qa/shots/design/`. Names starting with a width are the build as found; `fix-*` and `trial-*` are the same page with my proposed CSS applied; `rhythm-*` are whole-page strips.

---

## 1. Corrections, in priority order

### Blocker

**1. The header runs off the screen at 1024.**
At 1024 at night the short status reads "Booking's open all night" (`assets/js/page.js:80`) and the Book button's right edge is at x 1030: the page scrolls sideways by 6px. Pick a time and the header button becomes "Book Thu 5:30 pm", its right edge is at x 1081, the label is cut at the screen edge and the page scrolls 57px sideways. Evidence: `1024-00-header-overflow-chip-chosen.png`. The same label swap makes the phone number and status jump 51px left at 1440.
Fix, tested (`fix-1024-header-and-chip.png`, button back at x 859 to 994):
- `index.html`: take `data-book-label` off the header button's label so it always says "Book online". The hero button and the phone bar keep the chosen time.
- `page.css:480-481`: `.hd { gap: 14px; }` and `.hd nav { gap: 16px; margin-left: 4px; }` inside the 1024 to 1279 block.

### Should fix

**2. The hero designation sits on her arm at 1280 to 1366.**
At 1280 "KRENEK, DDS" ends at x 963 and her forearm starts at x 957: the S is printed on skin (`1280-01-hero.png`). At 1366 it touches (`1366-01-hero.png`). At 1440 there are about 10px. This is the "General Dentist" line, so it has to be clean. Build follows my spec; the spec left no room.
Fix, tested (`fix-1280-who-625.png` 13px clear, `fix-1366-who-625.png` 22px clear): `@media (min-width: 1280px) { .who { font-stretch: 62.5%; } }`. Same width as the plate and the Services designation; size unchanged at 21 to 22px.

**3. The portrait caption is behind her hip at 1024 and 1280.**
`.meet__cap` (`page.css:367`) is pinned to the right edge of column 5, but the portrait scales with the band's height, not the columns. At 1280 the P of "Paloma. Apple." is hidden by her scrubs (`1280-06-dentist-b.png`); at 1024 "Pa" is (`1024-06-dentist-b.png`); at 1440 it clears by 20px. My placement doc never rendered this corner.
Fix, tested (`fix-1280-meet-cap-top.png`, `fix-1024-meet-cap-top.png`): inside the block at `page.css:379`, `.meet__cap { align-self: start; }`. The caption moves to the top of the photograph's empty third, beside her hair.

**4. Between 640 and 1023 every section is the phone layout stretched wide.**
At 768 the page is 12,668px tall against 9,821 at 1440. Steps: 917px for three steps, each with a 140px hole between the numeral and its title (`768-02-first-visit-a.png`). Dentist band: 1,751px, with the drawing photograph at 719x479 in the middle (`768-06-dentist-b.png`). Cost, FAQ and Closing each end in a 322px photograph alone on the left with 400px of field beside it (`768-08-cost.png`). Find us: the hours table is 719px wide, day at one edge and time at the other. Chips are three 234px pills, wider than the Book button under them (`768-01-hero.png`); my 768 proof had them at natural width and my spec text (`02` 5.5) said equal width, so the spec is at fault there.
Fix, tested at 768 and 640 (`fix-768-*.png`; on the 22:40 build the page drops from 12,668px to 9,841px at 768). Add after the breakpoints block, so it wins over the rules at `page.css:491-530`:

```css
@media (min-width: 640px) and (max-width: 1023px) {
  .slot { flex: 0 1 auto; --btn-pad: 18px; }
  .step { display: grid; grid-template-columns: 4.5rem minmax(0, 1fr) 120px; column-gap: var(--gap); row-gap: 6px; align-items: start; padding: 20px 0 24px; }
  .step__top { display: contents; }
  .step__n { grid-column: 1; grid-row: 1 / span 3; }
  .step .portion { grid-column: 3; grid-row: 1 / span 3; }
  .step h3 { grid-column: 2; margin-top: 0; }
  .step p { grid-column: 2; }
  .ptsrow { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); column-gap: var(--gap); }
  .ptsrow figure { margin-top: 0; }
  .ptsrow .ph45 img { aspect-ratio: 4 / 5; object-position: 12.6% 50%; }
  #cost .g12, #faq .g12, #closing .g12 { display: grid; }
  .costtxt, .faqcol, .cltxt { grid-column: 1 / 9; }
  .costfig, .lfig, .clfig { grid-column: 9 / 13; max-width: none; margin-top: 0; }
  .stoprow { flex-direction: column; align-items: flex-start; }
}
@media (min-width: 768px) and (max-width: 1023px) {
  #comfort .g12, #find-us .g12 { display: grid; }
  .cphoto { grid-column: 1 / 7; margin: 0; }  .ctxt { grid-column: 7 / 13; }
  .ffig { grid-column: 1 / 8; margin: 0; }    .ftxt { grid-column: 8 / 13; }
}
@media (max-width: 767px) { .foot .fc { grid-column: span 6; } }
```
Find us stays stacked below 768 because the hours table wraps in a 240px column. At 640 the Closing buttons stack in three rows; acceptable.

**5. The "0" band: the headline breaks badly and the numeral is off the margin.**
"reviews. I opened in October. Here's what I promise instead." at `--fs-d1` runs four lines at 1440 ("reviews. I opened / in October. Here's / what I promise / instead.") and five at 1024 with "reviews. I" on the first (`1440-07-zero.png`, `1024-07-zero.png`). With the fourth promise added the band is 1,078px and the list starts below the fold. My proof only ever set "reviews. I opened in October."; "I opened in October." alone is 785px at 104px in a 783px column, so sentence-per-line cannot work at that size. Separately, the "0" has a 27px left bearing at 312px, so it starts at x 67, not at the x 40 margin everything else holds. That one is in my proof too.
Fix, tested (`fix-1440-zero-deck.png`, `fix-1024-zero-deck.png`, `fix-all-640-zero.png`; band 927px at 1440 with four promises, heading block 197px instead of 383px):
- `index.html:391`: `<span class="zero__rest">reviews. <span class="zero__deck">I opened in October. <br>Here’s what I promise instead.</span></span>` (keep the space before `<br>`).
- CSS: `.zero__n { margin-left: -.085em; }`
  `.zero__deck { display: block; margin-top: .3em; font-weight: 800; font-stretch: 85%; font-size: var(--fs-d3); line-height: 1.05; letter-spacing: -0.005em; text-wrap: balance; }`
  `@media (max-width: 1023px) { .zero__deck br { display: none; } }`
"0" and "reviews." become the statement; the deck uses the pull-line recipe already on the page (`.pull`, `.promise`).

**6. A chosen time chip's notch touches the label below 1280.**
Chips are equal-width with 4 to 6px padding there, so the 23px notch reaches the m of "pm": touching at 1024 (`1024-00-header-overflow-chip-chosen.png`), 2px clear at 390 (`motion-390-chip-chosen.png`). My own clearance rule (`02` section 4) says the tile may not exceed right padding divided by 0.78.
Fix, tested at 1024 and 390 (`fix-1024-header-and-chip.png`, `fix-390-chip-notch-18.png`): `@media (max-width: 1279px) { .slot { --notch: 18px; } }`.

**7. On phones the two bitten photographs stop 36px short of the column.**
`page.css:519` caps `.costfig, .clfig` at 322px in a 358px column (`390-08-cost-b.png`, `390-11-closing-a.png`). `02` 6.8 says full width.
Fix, tested: `@media (max-width: 639px) { .costfig, .clfig { max-width: none; } }`. The FAQ portrait stays 240px.

**8. A hairline of paper splits today's row.**
The lime row shows a 1px lighter seam where the two cells meet: x 1121 at 1440, x 997 at 1280, x 291 at 768; none at 1024 (pixel `rgb(225,248,133)` in a row of `rgb(216,250,102)`). Moving the fill to the `tr` does not remove it.
Fix, tested at 1280 (`fix-1280-today-row.png`): `.hours tr.is-today th { border-right: 2px solid var(--counter); }`.

**9. The footer address is italic.**
`index.html:499` now uses `<address>`, which the browser sets in italic. Fix: `address { font-style: normal; }`.

**10. "X-rays" breaks after the hyphen.**
"X- / rays" in step 2 at 1024 (`1024-02-first-visit.png`) and in the Cost paragraph in a narrow column (`fix-768-cost-two-col.png`). Fix: wrap each "X-rays" in running text (`index.html:267, 299, 414` and the service description) in `<span class="nb">` with `.nb { white-space: nowrap; }`.

### Could fix

**11. Closing.** `.cltxt` is columns 1 to 8 (`page.css:447`); `02` 6.11 says 1 to 9. At 1024 the chip drops to a row of its own (`1024-11-closing.png`). Fix, tested: `@media (min-width: 1024px) { .cltxt { grid-column: 1 / 10; } }`. The band also uses `--section-y`; the spec says `--band-y`, and it is the cheapest way to stop seven sections sharing one padding: `#closing { padding-block: var(--band-y); }`.

**12. Orphans.** One word alone on a last line: "pm." in the chips caption at 390 and 1024; "here." under the steps at 390; "not." in the Cost promise at 390 and 640; "night." in the Find us status at 1280; "come." in the hero fact line at 1024; "first." in the hero footnote at 390. Fix, tested: `.opcap, .hero__hrs, .visit-foot .lead, .promise, .pull, .bigstatus span { text-wrap: balance; }` and `.fn { text-wrap: pretty; }`. The first-screen height on phones does not change.

**13. Find us and footer text.** At 1024 the ZIP code is alone on a line ("…Austin, TX / 78702"): break after the street as the footer does. The footer hours break at "11 to / 7:30" (1024) and "Sun / closed" (390): set one group per line, `Mon, Wed 8 to 5<br>Tue, Thu 11 to 7:30<br>Fri 8 to 2 · Sat 9 to 1<br>Sun closed`. When the status wraps, the 20px dot floats between the two lines: `.bigstatus { align-items: flex-start; }` `.bigstatus .dot { margin-top: .3em; }` (not tested).

**14. Line length.** My own 66-character rule fails. Measured at 1440: footer legal 147, hero footnote 104, credentials 93, Services note 87, FAQ answers 82, Cost paragraph 78, bio 72, service descriptions 72; Comfort lead 82 at 768. `36em` of Public Sans is about 80 characters, and `78ch` is about 100: my numbers were wrong. Fix, tested (all at 65 to 68, legal 77): `.meet .bio, .costtxt p, .faq .a, .svc__desc, .svc-note, .cred, .ctxt .lead { max-width: 30em; }` `.legal p { max-width: 36em; }`. I would leave the footnote: three lines there costs 18px of first screen.

**15. The separator in the designation.** Anybody's interpunct is a wide bar and read as a hyphen in my proof ("DDS - GENERAL DENTIST"). You have swapped it to Public Sans 900 (`page.css:236`), which reads as a dot but puts Public Sans at 72px and makes that line 86px tall instead of 75. Anybody has a round bullet, tested (`fix-1024-interpunct.png`, line 903px at 1024): use `•` (U+2022) in `index.html:250` and `:328` and delete the `.ip` font rule.

**16. Phones, Checkups row.** The description is five lines in a 210px column beside the price (row 158px; the others 104 to 121). The layout is my proof's; the copy outgrew it. Cut the description to three lines on phones or drop its last sentence, which the hero footnote and Cost already say.

**17. FAQ at 1024 and up.** With eleven questions the portrait ends 600px above the list's end. `@media (min-width: 1024px) { .lfig { position: sticky; top: calc(var(--header-h) + 24px); } }` (not tested).

**18. Text links are 17 to 22px tall as tap targets** ("More times" 79x20, footer links 17, header status 135x15 at 390). The accessibility review owns this; visually, `padding-block` on the inline links grows the target without moving anything.

---

## 2. Your three fixes and your six additions

| Item | Verdict |
|---|---|
| Hours line against the designation at 1024 | Right. Separate rows, 16px apart, designation 10px above the strip (`1024-01-hero.png`). Better than my proof. |
| Designation stacked below 1024 | Right in the hero (four lines over the photograph's empty third) and in Services (two lines, no separator). |
| Footer plate underline | Gone at every width. |
| Hours fact line under the subhead from 1024 | Approve. It is in `02` 6.1 as specified but not proofed. Add `text-wrap: balance` (item 12). |
| Chip and Book row under the steps and under the FAQ | Approve from 640 up; both are in `02` 6.3 and 6.10. **Below 640 cut the button and keep the chip.** The fixed bar is already on screen, so the reader sees two identical lime "Book online" pills 110px apart (`390-02-first-visit-b.png`, `390-08-cost-a.png`, `390-10-faq-b.png`). Tested: `@media (max-width: 639px) { .visit-foot .btn, .faq-foot .btn, #cost .row .btn:not(.btn--sec) { display: none; } }`. Closing keeps its pair: it is the last ask. |
| `.toast` | **Restyle.** As an ink plate at bottom left it is a stock toast, and on the first screen at 1440x900 it lands on the ticker's Pause tab, ink on ink (`motion-1440-bitten-toast.png`). Make it the demo strip's twin, so every "Demo page." message on the page looks the same. Tested (`trial-1440-toast-as-strip.png`): `.toast { left: 0; right: 0; bottom: calc(var(--bar-h) + env(safe-area-inset-bottom, 0px)); max-width: none; padding: 7px var(--edge); background: var(--paper); color: var(--ink); border: 0; border-top: var(--rule) solid var(--ink); font: 500 var(--fs-foot)/1.35 var(--font-text); }` |
| `.promises` headings in Public Sans 600 | Approve. The lime band's list directly above is already in Anybody 800; two identical numbered lists in adjacent bands would read as one component used twice. |
| Insurance switch defaults to "No insurance" | Approve: it matches the hero's "$195 without insurance". Optional: put "No insurance" first so the default is the left segment. |
| The "0" at `--fs-zero`, width 150, columns 1 to 5 | Approve; it is my proof exactly. Restyle the text beside it and pull it to the margin (item 5). |

---

## 3. Rhythm and colour: five fields is one too many

**Verdict: Services goes back to paper.** Four saturated fields: hero, dentist, Cost, Closing. Strips: `rhythm-1440.png` and `rhythm-390.png` as built, `rhythm-1440-after.png` and `rhythm-390-after.png` with the change.

Reasons, from the real page:
1. The header is tangerine on every screen, so with Services on the ground the reader has a full tangerine screen for about 1,200px at 1440 and at 390, set in 15px descriptions at 5.34:1. On paper the same text is 16.44:1.
2. As built the page alternates tangerine, paper, tangerine, paper, lime, ink, tangerine, paper, paper, tangerine. Zebra bands are a template habit. With Services on paper it is one loud opening, a paper run broken by the food strip, a loud middle (lime, ink, tangerine), a paper run, a loud close.
3. The food strip's two tangerine tiles sit 43px above a tangerine field and lose their edge. Between two paper sections the strip is the picture it was meant to be (`trial-1440-services-paper-a.png`).
4. The lime row on tangerine only exists for a mouse. Most of this audience is on a phone, where the field is just dense text on orange.
5. A price list on paper reads as a menu, which suits the name.

It still meets your "at least three fields past the hero" (lime, tangerine, tangerine) and the paper rule, because the food strip breaks the run: first visit, strip, then Services and Comfort.

Changed values:
- `index.html:325`: `class="sec paper"` on `#services`. `index.html:348`: `class="sec paper ruled"` on `#comfort`, so the two paper sections meet at a 1.5px ink rule as Find us and FAQ do.
- Row hover and focus: no change. `background: var(--counter)` between the existing ink rules, word to width 100, 3px ink focus outline inset 3px. Tested (`trial-1440-services-paper-hover.png`); it now matches today's row in the hours table.
- Price chip on that field: ground fill, ink rule, which `.paper .chip` (`page.css:180`) already gives. There is no chip in Services today.

---

## 4. Motion

| Effect | Measured | Verdict |
|---|---|---|
| Headline chew, 1280 and up | Seven words, 45ms apart, each to width 50.75 and weight 840 at 90ms then back; all done at 930ms. Each word loses 23% of its width inside a fixed cell, so nothing reflows (`motion-1440-chew-t300.png`) | Reads as the brand. Right size. |
| Headline chew, 1024 to 1279 | 56 to 50: 11% | Too timid. **Raise the resting width to 60**: `page.css:81` `--wdth-hero: 60%`. Chew becomes 17%, the headline gains presence, and line 1 ends at x 752 with her hair at about x 800 at 1024 (`trial-1024-hero-w60.png`). |
| Service row, hover and keyboard focus | Lime in one frame, word 62.5 to 100 in 360ms, back in 200ms; focus adds a 3px ink outline (`motion-1440-services-focus.png`) | The signature. Keep. |
| Service words on touch | Scroll-linked: a word opens toward 100 as it crosses the middle third of the screen, at most two part-open | Good, and tied to the thumb. Keep. |
| Book press | Notch at 0ms; body from scale .96 and 1.2deg to rest in about 480ms; crumbs travel 9px in 240ms; restock at 2,000ms from 1.03 | The cut reads. The spring's overshoot is 0.4% of scale, so it is a settle, not a bounce: fine. The crumbs are the one timid part (5px dots, 9px travel): `.btn::after { inline-size: 7px; block-size: 7px; }` and `translate: 13px -11px` in `crumbs-a`/`crumbs-b` (not tested). |
| Time chip | Lime, notch and recoil in 420ms; all Book labels change and squeeze 6% | Good, apart from items 1 and 6. |
| Three portions | Six bites 120ms apart, done 750ms after the steps reach 60% in view | Reads as chewing. Keep. |
| The "0" | 75 to 150 in about 230ms, once | The biggest move on the page and the right place for it. Keep. |
| Ticker | 45px a second, up to three times that while scrolling; Pause tab | Slower than `03`'s 80/64. Keep the built speed: it sits under the booking strip and should not compete with it. |
| "Come in." | 66 to 125 in about 330ms, once | Keep. |

Nothing is too much. `03` section 10, checked in the CSS and the computed styles: no opacity in any transition or keyframe, no `transition: all`, no `cubic-bezier(.4`, no hover that moves or lifts anything, no shadow, spring overshoot 10.3%, the marquee has a control, and four sections act on entry, once each, after the headline on load.

---

## 5. Section 7 checklist: every "yes"

Checked in computed styles at 1440 on the 22:51 build: two families only (Public Sans, Anybody); no colour outside the four tokens; radii 999px and 50% only; no box, text or filter shadow at rest; no centred display type; no Anybody under weight 800; tabular figures on every price; `.svc__price` has no transition; the h1 carries no city.

Yes:
1. **An italic.** The footer address (item 9).
2. **Public Sans above 28px.** The separator in the Services designation, 72px (item 15).
3. **A bite through a letter.** Chosen chip at 1024, touching (item 6).
4. **Text lines longer than 66 characters.** Eight places (item 14).
5. **A toast over the first screen.** The demo notice, when a placeholder is pressed there (section 2).
6. **Sections of equal padding all the way down.** Seven sections at `--section-y` top and bottom; Closing should be `--band-y` (item 11).
7. **Lime without an ink rule on paper.** Half a yes: today's row and the hovered row have ink rules above and below and none at the sides. I accept it; it is how I drew them.

Not a yes, but close: at the foot of the page the header plate, the footer plate, the peach and the cookie are four notches in one 1440x900 window. No bitten photograph shares a window with another.

---

## 6. Section by section, where the build matches

- **Header, hero 1440/1280/768/390:** matches `images-01-hero-*` and `proof-hero-768` to within 6px (the strip sits 6px lower for the fact line). 390: strip to y 44, h1 108 to 267, band 380 to 584, footnote ends y 772, bar from 780.
- **First visit 1440/1024/390, food strip:** matches `proof-steps-faq-*` and `images-02-*`.
- **Services 1440/1024/390:** matches `proof-services-*` without the still life, as agreed. Designation 72px, the same as the service words and prices.
- **Comfort 1440/1280/1024/390:** photograph c1 to c6 at 668x445 / 472x315 / 358x239, text c8 to c12, nothing moving. As `04` specifies.
- **Dentist 1440/1024/390:** matches `images-04-dentist-*`, including the 217px of lime above her head at 1024 that my zoom cap causes.
- **Cost 1440/1024:** matches `images-06-cost-1440`.
- **Find us 1440/1024/390:** storefront 783x522 / 554x369 / 358x239, facts c9 to c12, no map. As `04`.
- **FAQ 1440/1024:** list c1 to c8, portrait c10 to c12 with the ink rule.
- **Closing 1440:** three lines, "Come in." at 125, peach bitten.
- **Footer 1440/390:** plate 32px down, four columns then two by two, last line clear of the phone bar.

---

## Addendum: the hero and the "General Dentist" rule (22 TAC 108.55(b))

Tested 23:04 to 23:18 on the build as it stood then (`page.css` and `index.html` saved 23:17:47 are the line numbers below). Same method: markup moved and CSS injected in my own tab, measured and screenshot at 1440x900, 1366x768, 1280x800, 1279x720, 1024x768, 768x1024, 640x900, 390x844, 390x664 and 360x640. No horizontal overflow comes from this CSS at any of them. Not tested: Safari, Firefox, a real phone, the no-script page, motion off.

### Verdict

The present hero should not stand, and neither A nor B is needed. **Set "$195" and GENERAL DENTIST at one font size, in one ruled block, and let width and a paper plate carry the difference.** Anybody's capitals and figures are the same height (0.68em, measured), so equal font size means equal letter height in a screenshot at every width.

- GENERAL DENTIST: Anybody 800, width 50, directly after her name, in the strip's left cell.
- "$195": Anybody 900, width 125 (100 on phones), same font size, directly under it on a paper plate that runs to the left edge of the page, the way the wordmark plate does. It is the only light field in the hero, so it is still the loudest thing after the headline.
- The small four-line label beside her arm goes. The strip takes column 9 from 1280 up.

| Width | Both set at | Was (numeral / designation) | Screenshot |
|---|---|---|---|
| 1440 and up | 96px | 150 / 22 | `hero2-L-1440.png` |
| 1280 to 1439 | 85 to 96px (6.667vw) | 138 / 21 | `hero2-L-1280.png`, `hero2-L-1366.png` |
| 1024 to 1279 | 58px | 119 / 20 | `hero2-L-1024.png` |
| 640 to 1023 | 56 to 80px (8.4vw) | 100 / 19 | `hero2-L-768.png`, `hero2-L-640.png` |
| below 640 | 40 to 48px (12.3vw), GENERAL DENTIST on two lines | 56 / 17 | `hero2-L-390x844.png`, `hero2-L-390x664.png`, `hero2-L-360x640.png`, `hero2-L-320x568.png` |

As built, for comparison: `hero2-00-asbuilt-1440.png`, `hero2-00-asbuilt-390x664.png`.

What it costs and what it buys:
- The numeral is shorter (figures 65px tall at 1440 against 102) but about as wide as before (329px) and heavier. At 1024 to 1279 it is 58px, the biggest loss: the strip has 636px there and the openings need 358.
- Hero height: 710 at 1440 (unchanged), 684 at 1366 (+5), 685 at 1280, 675 at 1024 (-1), 1,016 at 768 (+16, buttons end at y 1,013).
- **390x664: the chips sit at y 535 to 583, above the bar at 600.** As built they are at 608 to 656, behind it. The room comes from moving the subhead below the openings and the footnote on phones (CSS order only; the markup order does not change).
- **390x844: the footnote ends at y 749, above the bar at 780** (re-measured 23:22 with the order plate, openings, footnote, subhead). The subhead starts at y 763 and runs under the bar.
- On phones the plate has room for the full fee wording, so `.cap__more` shows again.

### Where each element sits, per width (re-measured 23:22)

Against the compliance options: this is (a) in principle, equal size, but at a lock-up size instead of `--fs-d2`, with the numeral wide and on paper so it keeps its weight. (b) leaves 150 against 40. (c) leaves the first screen as it is.

| Width | GENERAL DENTIST and "$195" | Her name | Designation sits | Price sits | Then |
|---|---|---|---|---|---|
| 1440 | 96px. GD width 50, weight 800, one line. Numeral width 125 | 22px, two lines, left of GD | Strip row 1, c1 to c9, x 40 to 560 | Strip row 2: paper plate x 0 to 587, numeral at x 40, label and caption to its right | Openings x 587 to 1,054; footnote 10px under the strip |
| 1280 | 85px (6.667vw) | 21px, two lines, left of GD | Strip row 1, x 36 to 507 | Plate x 0 to 545 | Openings x 545 to 914; second button reads "Call" |
| 1024 | 58px | 20px, one line, above GD | Strip row 1, x 30 to 281 | Plate x 0 to 305; label above the numeral, caption under it on two lines | Openings x 305 to 666 |
| 768 | 64.5px (8.4vw) | 19px, one line, above GD | Over the band's bottom-left, x 25 to 303; band 292px tall (`min(38vw, 340px)`) | Full-bleed plate under the band, 78px tall | Openings, footnote, fact line |
| 390 | 48px. GD on two lines (103px wide). Numeral width 100 | 17px, one line, ends x 156 | Over the band's bottom-left, x 16 to 120; band `clamp(150px, 24svh, 204px)`: 193 at 844 high, 149 at 664 | Full-bleed plate under the band, 76px tall: numeral x 16 to 151, label and full caption to its right | Openings, footnote, subhead, fact line |
| 320 | 40px (12.3vw). GD two lines, ends x 102 | 15px, ends x 139 | As 390; band 140px at 568 high | Plate 94px tall, caption on three lines | As 390; no overflow (`hero2-L-320x568.png`) |

On phones nothing with a price is laid over the photograph any more, so the "left of her sleeve" limit only applies to the designation: its two big lines end at x 120 (390) and x 102 (320); her name ends at x 156 and x 139, 90px higher up the band where her hair starts at about x 200.

**The two extra lines compliance wants under the numeral** ("More if your gums need more than a regular cleaning." and "through [Mon D, YYYY]"): from 1024 up the footnote already sits 10px under the plate in the same column, which I would treat as directly under the numeral. Inside the plate they cost one or two more lines: about 20px of hero at 1280 and up (not tested), and on phones more than the 17px the chips have to spare at 390x664. So: plate text as it is, footnote adjacent. If they must be inside the plate, put them in `.cap` from 640 up only and accept the footnote as their place on phones.

**Is it as strong as now?** From 1280 up and on phones, yes: the plate makes the price harder to miss than the 150px numeral was, and her name finally has weight. At 1024 to 1279 it is weaker (58px against 119). If that range decides it for you, keep the hero and record the question; I would ship the lock-up.

### Markup (one change)

`index.html:392`: move `p.who` inside `div.strip` as its first child and group its spans. The text is unchanged.

```html
<div class="strip">
  <p class="who"><span class="who__n"><span>Dr. Paloma </span><span>Krenek, DDS</span></span><i class="ip"> • </i><span class="who__gd"><span>General </span><span>Dentist</span></span></p>
  <p class="fv">…as now…</p>
  <div class="op" data-nosnippet>…as now…</div>
</div>
```

### CSS

Add this after the last breakpoint block and before the motion section; it was tested as an addition on top of the existing rules. Once it is in, these are dead and can go: the placement half of `.who` at `page.css:237` (keep its font properties), `:238`, `:501`, `:503-504`, the `margin-bottom: 46px` on `.hero__hrs` in the 1024 to 1279 block, `:519`, `:521`, `:558`, `:561-563`, and the `--fs-price` token at `:50`.

```css
/* ===== hero lock-up: the numeral and GENERAL DENTIST share one font size ===== */
:root { --fs-lock: clamp(2.5rem, 12.3vw, 3rem); --wdth-price: 100%; }   /* 40 at 320, 48 from 390 */
@media (min-width: 640px)  { :root { --fs-lock: clamp(3.5rem, 8.4vw, 5rem); --wdth-price: 125%; } }
@media (min-width: 1024px) { :root { --fs-lock: 3.625rem; } }
@media (min-width: 1280px) { :root { --fs-lock: min(6.667vw, 6rem); } }

.who { display: flex; margin: 0; font-stretch: 62.5%; }
.who .ip { display: none; }
.who__n, .who__gd { display: block; }
.who__gd { font-weight: 800; font-stretch: 50%; font-size: var(--fs-lock); line-height: .86; letter-spacing: 0; white-space: nowrap; }
.num { font-size: var(--fs-lock); font-stretch: var(--wdth-price); }
.fv { background: var(--paper); }

/* 1024 and up: one ruled strip. Left cell: designation, then the price plate. Right cell: openings. */
@media (min-width: 1024px) {
  .strip { grid-template-rows: auto auto; }
  .who { grid-column: 1; grid-row: 1; justify-self: start; align-self: end; flex-direction: column; gap: 4px; padding: 8px 24px 8px 0; }
  .who__n span, .who__gd span { display: inline; }
  .fv { grid-column: 1; grid-row: 2; margin: 0 0 calc(var(--rule) * -1) calc(var(--edge) * -1); padding: 8px 24px 8px var(--edge); border-top: var(--rule) solid var(--ink); border-bottom: var(--rule) solid var(--ink); }
  .fv .cap { max-width: 15em; }
  .op { grid-column: 2; grid-row: 1 / 3; }
  .hero__hrs { margin-bottom: 18px; }
  .slots { flex-wrap: nowrap; }
  .slot { flex: 1; font-size: 15px; --btn-pad: 6px; --notch: 18px; }
  .cta .tn { display: none; }
}
@media (min-width: 1280px) {
  .strip { grid-column: 1 / 10; margin-right: var(--gap); }
  .who { flex-direction: row; align-items: flex-end; gap: 14px; padding: 12px 24px 10px 0; }
  .who__n { padding-bottom: .2em; }
  .who .who__n span { display: block; }
  .fv { display: grid; grid-template: "num lab" auto "num cap" 1fr / auto minmax(0, 1fr); column-gap: 14px; row-gap: 2px; padding: 10px 24px 10px var(--edge); }
  .fv .lab { grid-area: lab; align-self: end; }
  .fv .num { grid-area: num; }
  .fv .cap { grid-area: cap; max-width: 12em; }
}
@media (min-width: 1440px) {
  .strip { margin-right: 0; }
  .slot { font-size: 16px; }
  .cta .tn { display: inline; }
}

/* below 1024: her name and GENERAL DENTIST stand on the photograph's empty third; the price plate runs full bleed under it */
@media (max-width: 1023px) {
  .hero { grid-template-rows: auto auto var(--fig-h) auto auto auto auto; --fig-h: min(38vw, 340px); }
  .who { grid-column: 1; grid-row: 3; align-self: end; justify-self: start; flex-direction: column; gap: 3px; margin: 0 0 12px; padding: 0; z-index: 1; }
  .who__n span, .who__gd span { display: inline; }
  .fv { grid-column: 1; grid-row: 4; align-self: auto; justify-self: stretch; z-index: 1; margin: 0 calc(var(--edge) * -1); padding: 10px var(--edge); border-top: var(--rule) solid var(--ink); border-bottom: var(--rule) solid var(--ink);
        display: grid; grid-template: "num lab" auto "num cap" 1fr / auto minmax(0, 1fr); column-gap: 14px; row-gap: 2px; }
  .fv .lab { grid-area: lab; align-self: end; }
  .fv .num { grid-area: num; }
  .fv .cap { grid-area: cap; }
  .fv .cap__more { display: inline; }
  .op { grid-row: 5; border-top: 0; }
  .fn { grid-row: 6; }
  .hero__hrs { grid-row: 7; }
}
@media (max-width: 639px) {
  .hero { grid-template-rows: auto var(--fig-h) auto auto auto auto auto; --fig-h: clamp(150px, 24svh, 204px); }
  .hero__fig, .who { grid-row: 2; }
  .hero__fig { margin-top: 10px; }
  .who { margin: 0 0 8px; font-size: 17px; }
  .who__gd { font-size: var(--fs-lock); }
  .who__gd span { display: block; }
  .fv { grid-row: 3; padding: 8px var(--edge); column-gap: 12px; }
  .num { font-size: var(--fs-lock); }
  .op { grid-row: 4; }
  .fn { grid-row: 5; margin: 10px 0 0; }          /* the footnote stays on the first screen at 390x844 */
  .hero__sub { grid-row: 6; margin: 14px 0 0; }
  .hero__hrs { grid-row: 7; }
}
@media (max-width: 359px) { .who { font-size: 15px; } }   /* her name ends at x 139 at 320 */
```

Measured with it on: at 1280 the strip ends at x 914 and her sleeve starts at about x 950; at 1366, 976 against 1,025; at 1440, 1,054 against 1,085. With a time chosen the two buttons still share a row at 1024 (186 + 71 in 338) and at 1279. At 1280 to 1439 the second button reads "Call" because the number is in the header, as it already does at 1024.

### Least sure

1. **1024 to 1279 at 58px.** It is the honest size for that width. The alternative is to let the numeral be larger than the designation there, which brings the screenshot argument back at laptop width.
2. **Other screens.** In the hero the largest thing that names or prices a service now equals GENERAL DENTIST. Services already has 72 / 72 / 72. The price chips are 20px numerals on screens whose only designation is the 15px line in Cost, or none (first visit, FAQ, Closing). If the conservative rule is meant page-wide, that is a decision for you and the compliance reviewer; the cheap answers are the chip numeral at the chip's text size, or the designation line at 20px above each chip row.
3. **Width 50 is the font's floor.** GENERAL DENTIST reads at 48px and up in every screenshot; I would not set it smaller than that anywhere.

### Services, the note and the chip, as asked

- **Services with the longer descriptions** (`hero2-services-1440-a.png`, `-b.png`, `hero2-services-390.png`): holds. Rows are 141 to 181px at 1440 and 167 to 186px at 390, where word, price, then full-width description is the right order. One thing: `.svc__go` (`page.css:356`) is inline, so three rows end with the action on its own line and two (Whitening, Aligners) run it into the sentence. `@media (min-width: 640px) { .svc__go { display: block; margin-top: 4px; } }` (not tested).
- **The three-sentence note:** four lines at 30em, 20px. Fine as set.
- **The chip at its new length** (351px at 1440, 335px at 390): fits beside the buttons in all four places at 1440 and inside the 358px column at 390; at 360 it is 203px. Not measured at 1024, where by the widths it drops to its own row in Cost and Closing.
- **Found on the way, as built:** at 360 wide the header is 3px wider than the screen when the status reads "Booking’s open all night" (`scrollWidth` 363), so the page sits slightly zoomed out.
