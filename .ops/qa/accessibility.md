# Accessibility review: Feast Dental landing page (WCAG 2.2 AA)

Auditor: AccessibilityAuditor (qa-a11y), 2026-11-09 23:45 to 2026-11-10 00:28 CT. Report only; no site file was edited.

**Build audited.** Every measurement was taken on `index.html` of 23:47:33 (after the 23:43 freeze: that write added
the `paloma-hero-band-*` crop below 1024 and its preload), `page.css` of 23:42:12 and `page.js` of 23:17:47 (MD5
`29f5aeb8…`, `d8db0962…`, `c8f6378…`). Nothing from `.ops/qa/shots/a11y/` was reused without re-checking it.
`index.html` and `page.css` were rewritten at 00:10:20 (FAQ layout, the "How I work" list, the promise numerals, two
price chips and the FAQ's Book button removed, placeholder copy filled in). **The line numbers below are for the 00:10
files** (MD5 `bec4d949…`, `3469e458…`, `c8f6378…`), the code every finding cites is unchanged in them, and I re-ran
the browser checks on the changed areas and on A1 at 00:16 to 00:20: see "Re-check of the 00:10 build" below.

**How.** My own tab (isolated context) in the shared Chrome 157 automation browser, DevTools viewport emulation only:
1440x900, 390x844 (DPR 2, mobile, touch), 320x568, 320x256 (400% of 1280x1024), 720x450 (200% of 1440x900), 1024x768,
1280x800; forced colours and reduced motion emulated; keyboard by real Tab, Shift+Tab, arrows, Space and Enter;
Chrome accessibility-tree dumps; Lighthouse 13.5 (axe-core 4.13) desktop and mobile. Contrast of text over the
photograph was computed from the decoded hero image's own pixels (object-fit, object-position and the CSS mask fade
reproduced, composited on `--ground`), not from screenshots, which this machine colour-manages
(`#f9530a` captures as `#e65f2c`). Scripts are in `shots/a11y2/scripts/`. No screen reader was driven.

## Verdict

**Status after the fixes applied at 00:30:** no WCAG 2.2 A or AA failure remains in what I tested; formal conformance
is not determined (no screen reader, Chrome only). 0 blockers, 0 should fix, 4 could fix (B6, B10, B11, and the A1
leftovers at 1024 and 320). Details in "Re-check of the 00:30 build" below. The rest of this section describes the build as first audited.

No blockers. At rest the page is in good shape: every text and background pair in use passes 1.4.3 (flat pairs lowest
5.34:1, ink on tangerine; ink over the photo backdrop at 320, 390, 720, 1024, 1280 and 1440 lowest single pixel 4.98:1);
every control is a native element with a name; the tab order follows the visual order at every width; focus is
visible on all four field colours; the ticker, the stop control and reduced motion all work. What fails is how the
page holds up when a visitor changes it: with the WCAG text-spacing overrides the hero's booking times, caption and
phone number slide onto the photograph (1.0 to 1.2:1) and the headline is cut off; in forced colours the chosen
time is invisible; at 400% zoom the sticky header and phone bar cover 47% of the screen and the food strip's focus
ring disappears; and the demo notice that answers every Book press is a live region that is unhidden at the moment
it is filled. **As built the page does not conform to WCAG 2.2 AA** (1.4.12 fails; 2.4.7 fails at 400% zoom).
Screen-reader behaviour is **not determined**: the accessibility tree is sound, but no screen reader was run.

| Severity | Count | Meaning here |
|---|---|---|
| Blocker | 0 | A group of visitors cannot find the price or hours, book, or call |
| Should fix | 5 | An AA failure, or a strong barrier under a setting people really use |
| Could fix | 12 | Minor failures with low impact, best practice, robustness |

## Findings, most severe first

### A1. Should fix. Text spacing breaks the hero at every width (1.4.12 Text Spacing)

**Where.** `.h1` `page.css:229-233` (`white-space: nowrap` on 232), `.hero { overflow: hidden }` `page.css:222`,
`.hero__fig img` `page.css:228` (`object-fit: cover`), `.op` `page.css:248`, `.slots { flex-wrap: nowrap }` `page.css:656`,
the fixed photo rows `page.css:678` and `:692`, `.status` `page.css:212`/`:557`, `.hd { height }` `page.css:197`.
Markup `index.html:390-410`.

**How.** Injected the four overrides of 1.4.12 (line-height 1.5, letter-spacing 0.12em, word-spacing 0.16em, paragraph
spacing 2em) into my tab, then ran `scripts/text-spacing.js` (clipped or off-screen text) and `scripts/text-over-photo.js`.

**Observed.**
- **1440x900.** The hero grows to about 1,200px; the photograph, `object-fit: cover`, scales up with it and her scrubs
  and hair move under the right-hand column. "Wed 8:00 am", "Thu 5:30 pm" and "More times" are ink on dark brown at
  1.0 to 1.2:1 over 100% of their area; "(512) 555-0142" in the Call button 91% of its area below 4.5:1; the "Sample
  times" caption 28 to 57% per line; headline "how" and "long" 21% and 24% of their area below 3:1, and "long" runs to
  x 1489 and is cut by the hero's `overflow: hidden`. The header's Book online is pushed 8px off the right edge
  (document 1448 wide). Shots: `text-spacing-1440-hero.png`, `text-spacing-1440-openings-over-photo.png`.
- **320x568.** "care how long" is cut at "lo"; her name and GENERAL DENTIST overflow the fixed-height photo row
  upward and sit 26px over "it's been."; the header status takes three lines in a 56px header and crosses its rule.
  Shot: `text-spacing-320-hero.png`.
- **390x844 and 320.** The nowrap price chip (`page.css:180`) becomes 414px in a 358px column, so a phone lays the page
  out 429px wide and shrinks it; at 320 the nowrap insurance switch makes the document 373px wide. Content is not lost,
  so this part is optional.

**Fix (checked).** I injected the CSS below into my tab only (`shots/a11y2/scripts/proposed-fixes.css`). At rest: no
measured hero box moved at 1440 or 320 (25 and 24 boxes compared), and a pixel diff of the 1440 first screen differs by
1.5 levels on average where the openings cell overlaps the photo, with 571 pixels over 6 levels, all on the half-pixel
edges of the 1.5px rules around that cell (`rest-1440-diff-x20.png`). With the overrides: nothing over the photograph, nothing clipped, document 1440 wide, and at
320 the name ends exactly where the headline does. Shots: `text-spacing-1440-with-proposed-fix.png`,
`text-spacing-320-with-proposed-fix.png`, `rest-1440-current.png` vs `rest-1440-with-proposed-fix.png`.

```css
.h1 { white-space: normal; }                 /* each word is already a nowrap .w cell, so lines break only between words */
.status { white-space: normal; min-width: 0; }   /* what page.css:557 already allows below 640, at every width */
@media (min-width: 1024px) {
  .op, .h1 .w { background: var(--ground); }   /* never depend on the photo's backdrop being under the text */
  .slots { flex-wrap: wrap; }                  /* still one row whenever the three chips fit */
  .op .btn { max-width: 100%; }
  .op .btn__body { white-space: normal; text-align: center; }
}
@media (max-width: 1023.98px) { .hero { grid-template-rows: auto auto minmax(var(--fig-h), auto) auto auto auto auto; } }
@media (max-width: 639.98px)  { .hero { grid-template-rows: auto minmax(var(--fig-h), auto) auto auto auto auto auto; } }
```
Not covered by that CSS: the phone header's fixed `height: var(--header-h)` (`page.css:197`); `min-height` instead
would let a three-line status fit, at the cost of a taller sticky header. Optional for the chip:
`.chip { height: auto; min-height: 40px; line-height: 37px; white-space: normal; }` (41px tall at rest instead of 40).

### A2. Should fix. The chosen time cannot be seen in forced colours, and only just in normal colours (1.4.11 Non-text Contrast)

**Where.** `.slot:has(:checked)` `page.css:268` and `:154`; the forced-colours block `page.css:795-801`; chips built by
`page.js:147-169` into `index.html:398`.

**Observed.** Forced colours (emulated, 1440): the chosen chip loses its lime fill and keeps only the 18px notch at its
top-right corner; unfocused it is the same white outline on black as the other two (`forced-1440-chips-wed-chosen.png`).
The only other cue is the Book label now reading "Book Wed 8:00 am". In normal colours the chosen state is lime on
tangerine, 2.80:1 (below 3:1), plus the same small notch (`focus-1440-chip-chosen.png`). The insurance switch already
got this treatment in forced colours (`page.css:800`); the chips did not.

**Fix (checked, `forced-1440-chips-wed-chosen-with-proposed-fix.png`).**
```css
@media (forced-colors: active) {
  .slot:has(:checked) { forced-color-adjust: none; color: HighlightText; }
  .slot:has(:checked) .btn__face::before { background: Highlight; border-color: Highlight; }
}
```
For normal colours, a second cue that does not rely on lime against tangerine, for example a 3px rule on the chosen
chip: `.slot:has(:checked) .btn__face::before { border-width: 3px; }`. That is a design call; the spec's own rule
(`02-visual-system.md` 2.3, "selection is never colour alone") counts the invisible native radio and the notch as the
other cues, and the notch alone is small.

### A3. Should fix. The demo notice is a live region that is shown and filled in the same moment, then vanishes after 4.5 s (4.1.3 Status Messages; 2.2.1 Timing Adjustable)

**Where.** `<p class="toast" role="status" id="toast" hidden>` `index.html:654`; `page.js:208-219`; `page.css:504`.

**Observed.** It is the only response to every `data-placeholder` link (18 in the 00:10 files, 13 of them Book links).
Before a press it is
`display: none` and absent from the accessibility tree; on Enter, `page.js:216-217` sets its text and removes `hidden`
in one task (tree after the press: `axtree-1440-after-placeholder-click.txt`). Live regions are dependable only when the
region is already in the tree before its content changes; a region revealed with its text already in it is announced
by some browser and screen-reader pairs and not by others. Not verified with a screen reader. It hides after 4,500 ms
(`page.js:218`), and covers the bottom 33px at 1440 (above the 64px bar on phones).

**Fix.** Keep the region rendered and empty instead of hidden; leave it up longer.
```html
<p class="toast" role="status" id="toast"></p>
```
```css
.toast:empty { padding: 0; border: 0; }   /* an empty block paints nothing */
```
```js
toast.textContent = (NOTES[a.dataset.placeholder] || NOTES.link)();
clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.textContent = ''; }, 10000);
```

### A4. Should fix. At 400% zoom the sticky header and the phone bar cover 47% of the screen (1.4.10 Reflow; relates to 2.4.11)

**Where.** `.hd { position: sticky }` `page.css:197`; `.bbar { position: fixed }` `page.css:597`; `--bar-h` `page.css:83`.

**Observed.** 320x256 (1280x1024 at 400%): header 56px plus bar 64px leave 136px of the 256px for content
(`zoom400-320x256-scrolled.png`, about three lines of body text), less while the toast shows. No focused
control is ever entirely hidden, because `scroll-padding` is honoured (checked by real Tab and by
`scripts/focus-walk.js`), but the five service rows (151 to 189px tall) and the food strip (282px) can never be seen
whole while focused.

**Fix (checked at 320x256: header and bar scroll away, all 256px are content).**
```css
@media (max-height: 480px) {
  :root { --bar-h: 0px; }
  .hd, .bbar { position: static; }
  html { scroll-padding-top: 12px; }
}
```
This also releases them on phones held sideways, where the 72px header is 18% of a 390px-tall screen.

### A5. Should fix. The food strip's focus ring is invisible when the strip is taller than the screen (2.4.7 Focus Visible)

**Where.** `#foods` `index.html:460`, made focusable when it scrolls by `page.js:317`; ring from `page.css:106`.

**Observed.** 320x256, real Tab: focus lands on the strip (`:focus-visible` true), Chrome scrolls it to y -17 to 265,
and the 3px ring drawn 3px outside it is off-screen on all four sides (`zoom400-foods-focused-no-ring.png`). At 390x844
only its top and bottom lines show, because the strip is full-bleed.

**Fix (checked, `zoom400-foods-focused-with-proposed-fix.png`).** `.foods:focus-visible { outline-offset: -3px; }`

### B1. Could fix. A keyboard user cannot clear a chosen time (2.1.1 Keyboard)

`page.js:170-176` clears the choice when the chosen chip is clicked again. A pointer can do that; Space on the checked
radio fires no click in Chrome, so the choice stays (tested: status still "Wed 8:00 am picked"). Fix (checked: Space
now unchecks, status "No time picked.", every Book label back to "Book online", focus kept):
```js
slotsBox?.addEventListener('keydown', (e) => { if (e.key === ' ' && e.target.matches('input:checked')) { e.preventDefault(); e.target.click(); } });
```

### B2. Could fix. The group is named differently from what is shown (1.3.1 Info and Relationships)

Visible label "Next openings" (`index.html:397`); the fieldset's name comes from the hidden legend "Pick a time for your
first visit" (`index.html:399`). Fix: legend text `Next openings: pick a time for your first visit`.

### B3. Could fix. The header phone link's name does not contain its visible text (2.5.3 Label in Name)

`<a class="tel" aria-label="Call Feast Dental at 512 555 0142">(512) 555-0142</a>` `index.html:381`. Flagged by axe
(`label-content-name-mismatch`, Lighthouse desktop). Fix: `aria-label="Call (512) 555-0142"`.

### B4. Could fix. Footer link stack: targets overlap (2.5.8 Target Size, passes by its "equivalent" exception)

`.foot .fc` "Call (512) 555-0142" / "Text us" / "Book online", `index.html:633`. The 4px `padding-block`
(`page.css:490`) is on inline links, so the boxes (26px) overlap on a 22 to 23px line pitch; axe fails "Text us"
(safe space 22.4px desktop, 21px mobile). Each has a larger equivalent on the page (hero and closing buttons, phone bar,
"Text us a question"), so it passes 2.5.8. Fix: `.foot .fc a { display: inline-block; }` (lines move apart about 4px).

### B5. Could fix. The header status link does not say where it goes (2.4.4 Link Purpose)

`index.html:380`. On phones its whole name is "Booking's open all night", which reads like a booking link; it goes to
Find us. Fix: add `<span class="visually-hidden">. Hours and address</span>` inside the link, after the two text spans.

### B6. Could fix. Each service row is one link named by its whole row, 150 to 200 characters

`a.svc__row` `index.html:476-478, 484-485`. Tree: link "Checkups Every visit after your first. … Book a checkup from
$145". A links list reads five paragraphs. Fix: give the word, the price and "Book a checkup" ids and set
`aria-labelledby="<word> <price> <go>"` and `aria-describedby="<desc>"`; the name still starts with the visible word,
so 2.5.3 holds.

### B7. Could fix. The hero alt describes what the phone crop does not show (1.1.1 Non-text Content)

`index.html:389`: "…with the sleeves pushed up…". Below 1024 the page now serves `paloma-hero-band-*`, head and
shoulders only (`hero-390.png`). One `<picture>` has one alt, so write it for both crops: "Dr. Paloma Krenek in dark
brown scrubs looks straight at the camera with a closed-mouth smile. She has shoulder-length dark wavy hair and
tortoiseshell glasses."

### B8. Could fix. The cookie takes a bite on pointer down (2.5.2 Pointer Cancellation)

`page.js:349`: `eat()` runs on `pointerdown`; sliding off does not undo it. Nothing is at stake, but it is a down-event
action. Fix: a short press bites on `click` (the up event); only a held press eats on the way down.
```js
let held = false;
cookie.addEventListener('pointerdown', (e) => { if (e.button) return; held = false; clearTimeout(hold);
  hold = setTimeout(function chomp() { held = true; eat(); hold = setTimeout(chomp, 280); }, 280); });
for (const ev of ['pointerup', 'pointerleave', 'pointercancel', 'blur']) cookie.addEventListener(ev, () => clearTimeout(hold));
cookie.addEventListener('click', () => { if (!held) eat(); held = false; });   // keyboard and short presses
```

### B9. Could fix. A screen reader meets the 30-word hero alt before the headline

`<figure class="hero__fig">` is the hero's first child (`index.html:389`), so the region reads image, then h1, at every
width. Every hero item is placed by explicit `grid-row`/`grid-column` at every width (`page.css:227, 523, 693`), so the
figure can move after `p.fn` with no visual change; `.who` keeps its `z-index: 1` over it.

### B10. Could fix. A paused ticker hides most of its facts

With Pause, the band freezes mid-line; at 390 one or two of the nine facts are readable and the rest cannot be reached
(`overflow: hidden`). Every fact is repeated elsewhere on the page, so nothing is lost. Option: while `.is-paused`, use
the wrapped static layout the page already has for motion off. The interaction spec's "kept for the session"
(`03-interaction-spec.md` §8, pause control) is not built: a reload plays again.

### B11. Could fix. A linked price chip looks exactly like the unlinked one

Audited build: three `a.chip` (First visit, FAQ, Closing) and one `span.chip` in Cost. 00:10 files: one link left,
Closing `index.html:619`, and the span at `index.html:559`. The name is good ("First visit $195 without insurance
· 75 min. What it covers."), and keyboard users see the ring, but a sighted pointer user has no cue before hover. This
also contradicts `02-visual-system.md` 5.4 ("not a control… not focusable"); update the spec to the link and give the
linked chip a cue, for example an underlined "75 min".

### B12. Could fix. Without script, the empty time group is described as "Sample times for this demo"

`aria-describedby="op-cap"` is in the markup (`index.html:398`), and a description is computed from a referenced
element even when it is hidden. Fix: set the attribute in `paintSlots()` (`page.js:147`) instead.

## The hero's order below 640 (brief item 1)

Measured at 390x844. DOM and reading order: photo (alt), h1 (y 112), subhead (y 763), insured line (y 870, below the
fold), name and GENERAL DENTIST (y 354), price (466), openings (541), footnote (676). Visual order: h1, photo with
the name, price, openings, footnote, subhead, insured line.

- **Keyboard (2.4.3): passes.** The subhead and insured line hold no focusable element, so the tab order (footnote
  "1", More times, the chip group, then the ticker's Pause) is the visual order. Same at 640 to 1023 and at 1440.
- **Screen reader (1.3.2): passes.** The DOM order is a meaningful sequence, arguably a better one than the visual:
  "I don't care how long it's been. I care about what's bothering you now…" then name, price, times, footnote.
- **Low vision.** Magnifier-only users follow the visual order and are unaffected. Sighted screen-reader users
  (VoiceOver on iOS) and read-aloud tools that scroll to follow the text will be taken from the headline down past the
  price and times to the subhead and insured line, then back up to her name: a jump of about 650px each way. Not a
  failure. Changing the DOM to the phone order would move the mismatch to desktop, so I would leave it; B9 is the one
  order change that costs nothing.

## The nine items in the brief

1. Hero lock-up and order: see the section above; at rest the name and designation over the photo measure 5.13:1
   lowest pixel at 390, 5.15:1 at 320, 5.00:1 at 720 (need 4.5 and 3). Under text spacing: A1.
2. Openings chips: native radios in a fieldset; Tab enters once, arrows move and choose, Space chooses; each choice
   announces through the always-present `#slot-status` ("Tue 5:45 pm picked. Nothing is booked yet.") and all six Book
   labels change ("Book Tue 5:45 pm"). Gaps: B1, B2, A2.
3. Price chips: names correct, the label is a prefix of the name, 40px tall. B11.
4. Header status: wraps to two lines at 320 inside the 56px header at rest (fine); name issue B5. Phone bar Call/Text us:
   label and `href` change together (`page.js:98-103`), "Text us" with `sms:` while closed, checked at 00:05 CT.
5. Insurance switch: native radios, legend "Do you have dental insurance?", arrows work, the inactive panel is
   `visibility: hidden` and so absent from the tree, the chosen pill is ink on tangerine (5.34:1 against the other) and
   `Highlight` in forced colours. Pass.
6. Ticker: Pause is a 72x56 (64x48) button first in the band, label swaps to Play, both animations report `paused`;
   the twin is `aria-hidden` and `inert`; Stop the motion sets `data-motion="off"`, writes `localStorage.motion`,
   relabels both controls to "Start the motion", shows "Motion is off.", leaves no animation running; both controls
   are hidden under reduced motion, where nothing moves. Pass (2.2.2). B10.
7. Bite: the mask sits on `.btn__face`; rings stay whole. Cookie: works by Enter and Space ("Two bites."). B8.
8. Toast: A3.
9. FAQ `<details name="faq">`: summaries are focusable, Enter and Space toggle, the tree exposes expanded state,
   opening one closes the other, and scroll anchoring keeps the focused question in place (66 to 67px). Pass.

## Passes worth recording

- **Contrast (1.4.3, 1.4.11).** Pairs in use, computed: ink on paper 16.44, ink on counter 14.94, ink on ground 5.34,
  paper on ink 16.44, counter on ink 14.94, ground on ink 5.34 (footer heads at 17px/800 and the plate). No failing
  text anywhere at 1440 or 390. Rules, button outlines and focus rings are ink or paper or lime against fields they
  contrast with at 5.34:1 or more.
- **Focus (2.4.7, 2.4.11).** 53 stops at 1440 and 46 at 390 on the 00:10 build (56 and 48 before). Captured:
  footnote "1", chips at rest and chosen, the paused Pause tab (ink on paper), the switch, the cookie and the phone bar
  (lime on ink), plus the food strip (A5). The other stops get their rings from `page.css:106-108, 206-207, 269,
  275-277, 351, 425`; the earlier reviewer's sheet `shots/a11y/focus-stops-1440.png` (23:21) shows all 56 visible, and I did not
  re-capture each one. `scroll-padding` keeps focus clear of the header and bar on Tab and Shift+Tab (real key
  presses agree with `focus-walk.js`).
- **Keyboard (2.1.1, 2.1.2).** Every control reachable and operable; no trap; skip link to `#main` works.
- **Names and roles (4.1.2).** All native: links, buttons, radios in fieldsets, `details`/`summary`, a table with
  `caption` and row headers ("Mon Today"). Lighthouse a11y 97, desktop and mobile; only B3 and B4 flagged.
- **Structure (1.3.1, 2.4.6).** One h1; h2 per section; h3 inside; no skipped level. Landmarks: banner, nav
  "Sections", main with labelled regions, contentinfo, region "Book or call". Images all have alt; disc and step
  numerals are `aria-hidden` and the lists carry the numbering.
- **Language (3.1.2).** `lang="en"` on `html`; `lang="es"` on "Hablo español" in the ticker and in Find us.
- **Reflow and zoom (1.4.4, 1.4.10).** No horizontal scroll at 320 (only the food strip scrolls, by design); 720x450
  (200%) clean. Viewport meta allows zoom.
- **Motion (2.2.2, 2.3.3).** Under reduced motion `document.getAnimations()` is empty after scrolling the page and
  pressing a chip and a row; only colour transitions run. The minute-tick updates (status, "As of" time) are quiet text
  changes, not live regions; I agree with the interaction spec's reading of them as real-time information.
- **Target size (2.5.8).** Buttons, chips, switch and FAQ rows are 48 to 72px; text links pass by spacing or, in the
  footer stack, by the equivalent exception (B4); the footnote "1" (10x11px) is inline.
- **No script.** Checked with an evidence copy (`shots/a11y2/nojs.html`, page.js and the inline script removed):
  stop controls, cookie, caption and Pause stay hidden, the ticker is a wrapped list, the switch works by CSS, portions
  show bitten. The `noscript` text could not render in that copy because scripting stayed enabled; B12 is reasoned
  from the markup.

## Re-check of the 00:10 build

Same tab method, 1440x900 and 390x844 (DPR 2, mobile, touch), files fingerprinted above; tree
`axtree-1440-0010.txt`, shots `faq-1440-0010-focus.png`, `dentist-1440-0010.png`.

1. **FAQ.** From 1024 the h2 sits at x 40 to 477 and the list at x 501 to 1381; the DOM order (h2, then the eleven
   summaries) is the reading and tab order, and the column wrapper's `display: contents` (`page.css:453`) costs nothing
   in the tree, as the div has no role. Summary focus ring visible. No figure or Book/chip pair left, so the FAQ's tab
   stops are the eleven summaries only. Pass.
2. **Dentist band.** Heading outline now: h1; h2 per section; h3 only under "Here's how it goes." (3), Services (5)
   and the promises (4); no level skipped. "Teeth are for biting. I keep them at it." is ink on lime (14.94:1) at
   x 732 to 1054, clear of the drawing photo at x 1078. Pass.
3. **Promises.** Still an `ol` with `list-style: none` and `::before { content: none }`, four h3s inside. Nothing is
   lost: no numeral is drawn, and the h3s carry the structure. A `ul` would say the same thing more truly, as the four
   promises have no order; not worth a finding.
4. **First-visit footer.** Book stays from 640 up (tab stop 16 at 1440). Below 640 it is hidden (`page.css:586`),
   which leaves an empty `.row` (0x0, nothing in the tree) and the phone bar's Book. Pass.
5. **Copy.** No square bracket left in any visible text (tree walk at 1440). The stop caption reads as briefed.
6. **Whole page again.** Contrast scan: no failing pair. Focus walks: no stop hidden behind the header or bar at
   1440 or 390. No horizontal overflow at 390. Text spacing at 1440: the FAQ and dentist band are clean; A1 reproduces
   with identical numbers (chips 1.0 to 1.2:1, "long" clipped, document 1448 wide). A2 to A5 and B1 to B12 were not
   re-run in the browser; the code each one cites is unchanged, so they stand.

## Re-check of the 00:30 build

Checked 00:20 to 00:26 on `index.html` 00:19:30, `page.css` and `page.js` 00:17:32 (MD5 `34943897…`, `f50a0540…`,
`d7106527…`), same tab method. A further write at 00:26:14 (`index.html` `f94d62c4…`, `page.css` `036146c4…`) changed
copy and metadata, put a space between "Next openings" and "More times", and lengthened the hero lock-up comment in
`page.css` by one line; I have no copy of the 00:17 CSS to diff, and no rule I verified moved. Lighthouse
accessibility 100 desktop and mobile (`lighthouse-*-0030/`); tree `axtree-1440-0030.txt`.

| Item | Result | Measured |
|---|---|---|
| A1 | **Pass** (residuals below) | 1440 with the overrides: no hero text over the photo below its ratio, nothing clipped, document 1440 wide, status on 2 lines (45px) inside the 72px header; at rest chips on one row (y 584), hero 710px. 1279: same, document 1279. 1024: hero clean, but the header needs 1203px, so the page scrolls 179px sideways and the number and Book sit off the right edge until scrolled (`text-spacing-1024-0030-header.png`). 390: hero clean except the third chip's outline, cut 6px at the hero's edge with its text reaching the edge; the nowrap price chips make the page lay out 429px wide (`text-spacing-390-0030-chips.png`). 320: hero clean; the switch and "Come in." make it 373px wide. None of these hides content, so 1.4.12 passes by its letter. |
| A2 | **Pass** | Forced colours: the chosen chip fills with `Highlight` (rgba(0,230,255,.8)) with black text; the others stay outlines (`forced-1440-chips-0030.png`). Normal colours: not a 1.4.11 failure after all. The lime fill sits inside the ink rule (14.94:1), and the state also shows as the notch and as the Book label text, so leaving out the 3px rule is fine. |
| A3 | **Pass** (not run with a screen reader) | Before any press the empty `status` region is in the tree, 0px tall at y 900. Enter on More times: text in, 33px tall; still there at 5 s; cleared at 10.5 s, 0px again. |
| A4 | **Pass** | 320x256: header and bar `position: static`; scrolled 1200px, the header's top is at -1156; `scroll-padding` 12/12. |
| A5 | **Pass** | Ring at -3px, visible along both edges of the strip at 320x256 (`zoom400-0030-foods-focused.png`). |
| B1 | **Pass** | Space chose Tue; ArrowRight chose Wed; Space on Wed cleared it: status "No time picked.", every Book label "Book online", focus kept. |
| B2 | **Pass** | Group "Next openings: pick a time for your first visit". |
| B3 | **Pass** | Name "Call (512) 555-0142"; axe `label-content-name-mismatch` now passes. |
| B4 | **Pass** | Footer links 30.5px tall at 1440 (29px at 390), no overlap; axe `target-size` passes desktop and mobile. |
| B5 | **Pass** | Name "Hours and address: Closed now. Booking's open all night."; the visible text is contained, so 2.5.3 passes (visible-first would be better for speech input, but not at the price of the double full stop). Without script: "Hours and address: Hours". |
| B7 | **Pass** | Alt now true of both crops. |
| B8 | **Pass, one regression** | Short press: nothing on down, +1 on click. 700 ms hold: +2 while held, +0 on release. Keyboard: +1. Regression: after a hold that ends with the pointer leaving the cookie (no click), `held` stays true and the next keyboard press does nothing; the one after works. Fix at `page.js:354`: `cookie.addEventListener('click', (e) => { if (!held \|\| e.detail === 0) eat(); held = false; });` (keyboard clicks have `detail` 0). |
| B9 | **Pass** | Hero reading order: h1, subhead, insured line, name, price, openings, footnote, then the figure. At 390 the name still paints over the photo (`.who` z 1 over the figure's z 0); the band differs from my 23:52 shot only along the photo's edges. |
| B12 | **Pass** | With script: description "Sample times for this demo, not real openings. As of 12:24 am." No-script copy (`nojs-0030.html`): no `aria-describedby`. |
| `.promises` as `ul` | **Pass** | A list of four items, an h3 in each. |
| Regressions | None besides B8 | Focus walks: 53 stops at 1440 and 46 at 390, same order, none hidden behind the header or bar; contrast scan clean; hero name over the photo still above 5.1:1. |

**A1 residuals (could fix).** Phones, checked in my tab: drop `.slots { flex-wrap: nowrap; }` at `page.css:529` and
`:657` (the A1 block already sets `wrap` from 1024), and add
`.chip { height: auto; min-height: 40px; line-height: 36.5px; white-space: normal; }`. At rest nothing moved at 390
(17 boxes) or 360 (chips and price chips) except the price numeral's own line box (38 to 36.5px, chip still 40px);
with the overrides at 390 the document is 390 wide and the chips wrap inside the hero. Header at 1024 to 1279:
letting it wrap (`flex-wrap: wrap; height: auto; min-height: var(--header-h)`) puts Book on a second row at rest at
1024, because that row is already within about 4px of full, so I would not ship it; leave the sideways scroll, or free
about 10px at rest. The 320 switch and "Come in." can wait.

**Follow-up, files of 00:28:40** (SHA-256 `index.html` `2f0ed8a6974c…`, `page.css` `aec351b8ccd2…`, `page.js`
`2dde8cf0fbe5…`). The phone residual fix and the B8 fix above are in, plus `font-weight: 100 900` on the fallback
faces. Checked: at rest at 390 and 360 the three chips stay on one row and both price chips are 40px; with the
overrides at 390 the document is 390 wide, the chips wrap inside the hero, nothing is clipped, and no hero text is over
the photo below its ratio. Cookie: keyboard +1, short press 0 on down and +1 on release, 700 ms hold +2, and a keyboard
press after a hold that slid off now bites (+1). Both **pass**; B8's regression is closed. Still open from A1: the
header's 179px sideways scroll at 1024 and the 373px switch and "Come in." at 320 under text spacing.

**Not applied (B6, B10, B11).** None needs to block. B6 is the only one a screen-reader user would feel (five
150 to 200 character link names); B10 and B11 can wait.

**Conformance as it now stands.** No A or AA failure found in the tested scope: Chrome 157 under emulation at 320
to 1440 (plus 360, 1024, 1279), keyboard, forced colours, reduced motion, text spacing, 200% and 400% zoom, no script.
WCAG 2.2 AA conformance is **not determined**, not confirmed: no screen reader was run, and Safari, Firefox and real
devices were not tested.

## Not tested

- **Screen readers.** None was run (VoiceOver, NVDA, JAWS, TalkBack). Everything about announcements, including A3,
  the `#slot-status` and `#cookie-status` messages, and how VoiceOver on iOS splits the word-by-word headline and the
  uppercase name, is inferred from Chrome's accessibility tree.
- **Browsers and devices.** Chrome only, under emulation. No Safari, Firefox, real phone, real Windows contrast theme,
  Android text scaling.
- **Speech control** (Voice Control, Dragon) and switch access: reasoned from names only.
- **Text-only zoom** (Firefox "zoom text only", Chrome's font-size setting): a quick probe with the root font at 150%
  and 200% at 390 kept the name inside the photo row but widened the document to 465 and 579px; not followed up, as
  WCAG 1.4.4 is met by page zoom.
- **Times of day** other than closed at night (23:46 to 00:08 CT): the open state, an empty chip list, and a chip
  expiring under focus were not reproduced.
- Print; the With-insurance panel in forced colours; 1920 and wider.

## Evidence (`.ops/qa/shots/a11y2/`)

`axtree-1440.txt`, `axtree-390.txt`, `axtree-1440-after-placeholder-click.txt`; `hero-1440.png`, `hero-390.png`,
`hero-320x568.png`; `text-spacing-*.png`; `forced-*.png`; `focus-*.png`; `zoom200-720x450-top.png`,
`zoom400-*.png`; `rest-1440-*.png` and `rest-1440-diff-x20.png`; `lighthouse-desktop/`, `lighthouse-mobile/`;
`nojs.html`; `scripts/` (`contrast.js`, `text-over-photo.js`, `text-spacing.js`, `focus-walk.js`, `focus-at.js`,
`proposed-fixes.css`).
