# Code review: Feast Dental landing page

Reviewer: code-review. Report only: I edited nothing under `assets/`, `tools/`, `brand/`, `content/`, `research/` or `index.html`.
This is the second edition. It replaces the one written at 23:03, which someone began applying while I was still testing.

## 0. Status at 23:13

The page was edited at least eight times while this review ran (22:32 to 23:11). Most of what I found has since been fixed
upstream, some of it from the first edition of this file. I re-ran my tests against the live page after each round. Everything
below describes this state:

| File | sha1 (first 12) | last changed |
|---|---|---|
| `index.html` | `ffa9a082e865` | 23:09 |
| `assets/css/page.css` | `5cdfeea6489d` | 23:09 |
| `assets/js/page.js` | `e5ecf293c98d` | 23:09 |
| `tools/build-images.mjs` | `e01cb8843772` | 23:11, mid-edit, see 1.6 |

**Open now: 1 blocker, 1 should fix, 3 could fix, and 1 fix that needs a real iPhone to confirm.**
Found over the whole review: 3 blockers, 10 should fix, 17 could fix. The other 24 are fixed and re-tested (section 2).

| ID | Finding | Severity | Now |
|---|---|---|---|
| CR-01 | Header wider than the screen | blocker | **open on phones**; fixed from 640 up |
| CR-11 | `build-images.mjs` deletes the social card when it skips it | should fix | **open** |
| CR-10 | Landscape iPhone: text under the sensor housing | should fix | fix applied, **not confirmed on a device** |
| CR-20 | Wordmark plate outgrows the bite mask past about 4790px | could fix | **open** |
| CR-26 | Bite geometry kept twice | could fix | **open** |
| CR-27 | Scroll triggers a short screen cannot satisfy | could fix | **open**, read only |
| all others | see section 2 | 2 blockers, 8 should, 14 could | fixed and verified (one could-fix was made obsolete instead) |

The two open diffs (CR-01, CR-11) are also in a patch file that applies with `patch -p1` from the project root:
`<session scratchpad>/code-review/code-review-fixes.patch`

Tested in Chromium 157 (Edge) only, in my own tab in an isolated browser context. **Not tested: Safari, Firefox, any real
phone.** Screenshots: `.ops/qa/shots/code-review/` (both are from earlier states and are labelled below).

---

## 1. Open

### 1.1 CR-01 Blocker: on phones the header is wider than the screen every night

- `assets/css/page.css:211` `.status { font: 500 15px/1 var(--font-text); white-space: nowrap; … }`
- fed by `assets/js/page.js` `status()`: the short night line "Booking’s open all night", and the " CT" suffix for a
  visitor outside Central time

Nothing in the header can shrink, so the page scrolls sideways and the status runs off the screen. Measured on the live page
at 23:10 with a fake clock: 138 combinations of width, time of day, visitor time zone and chip picked or not. 13 fail, all
at 375px and narrower:

| Width | State | Result |
|---|---|---|
| 360 | night (7:30 pm to 6 am Central), nothing touched | page scrolls sideways 3px, status 4px off screen |
| 344 | same | 19px |
| 320 | same | 43px |
| 320 | open, visitor outside Central ("Open till 7:30 pm CT") | 20px |
| 320 | closed by day, visitor outside Central | 10px |
| 375 | night | no scroll; status 5px into the page margin |

360 is the commonest Android width and the night state needs no interaction. From 640 up the header is now clean in all
combinations: the 23:04 change (header button always "Book online", gaps 14 and 16px) fixed the 1024 cases, which had
reached 61px off screen. Screenshot of that earlier 1024 state: `shots/code-review/02-header-overflow-1024-chip-picked.png`.

```diff
--- a/assets/css/page.css
+++ b/assets/css/page.css
@@ :211
-.status { font: 500 15px/1 var(--font-text); white-space: nowrap; display: inline-flex; align-items: center; gap: 8px; }
+.status { font: 500 15px/1.15 var(--font-text); min-width: 0; text-wrap: balance; display: inline-flex; align-items: center; gap: 8px; }   /* may take two lines: it is the one header item whose length the clock decides */
```

Run on a copy of the 23:07 state with this line changed: 0 of 138 fail, the header keeps its height (56 and 72px), and the
status takes two lines in 17 of them (the rows above, plus night at 1024). A shorter night phrase would also work at 360, but
the header should not depend on the length of a sentence.

### 1.2 CR-11 Should fix: `tools/build-images.mjs` deletes the social card when it skips building it

- `tools/build-images.mjs:373` (skip when `tools/social-card-type.json` is missing) and `:488-489` (delete whatever the
  previous run listed and this run did not make)

The header comment says that without the lettering file the card and avatar "are skipped and everything else still builds".
They are also deleted, and the script exits 0. `index.html:16` points at the card. Run in a scratch copy:

```
! tools/social-card-type.json is missing: social-card.jpg and avatar-400.png were not built
removed stale assets/img/avatar-400.png
removed stale assets/img/social-card.jpg
```

```diff
--- a/tools/build-images.mjs
+++ b/tools/build-images.mjs
@@ :488
-const files = [...all.map((v) => web(v.file)), ...icons.map((i) => web(i.file))].sort();
+const notRebuilt = existsSync(TYPE_FILE) ? [] : ['social-card.jpg', 'avatar-400.png'].map(web).filter((f) => previous.includes(f));   // skipped this run: keep the last good copies
+const files = [...all.map((v) => web(v.file)), ...icons.map((i) => web(i.file)), ...notRebuilt].sort();
```

Run with the fix (on the 23:01 version of the script): the same run keeps both files and lists them in the manifest; a
normal run gives a card byte-identical to the committed one.

### 1.3 CR-10 Applied, needs a device: landscape iPhones

`index.html:5` has `viewport-fit=cover`; `assets/css/page.css:38` now adds the side safe-area insets to `--edge`. I could not
run this. In Chromium the insets are zero and nothing moved. Someone should hold an iPhone sideways and look at the left edge
of the hero text, the footer, and the notice bar (`.toast` now uses `--edge` too, so it should follow).

### 1.4 CR-20 Could fix: the wordmark plate outgrows the bite mask beyond about 4790px

- `tools/bite.mjs:40` `export const REACH = 40;`; `assets/css/page.css:197-203` and the footer plate

Answer to "does the 40x tile limit hold for the widest element": yes for buttons, chips and photo frames at every width I
measured (390 to 5120). No for the plate, whose width includes the page margin: 1805px at a 4800px viewport against a limit
of 1799. At 5120 the leftmost 166px of the header and footer plates are masked away (measured: the mask image is 1800px wide
and the plate is 1965). Fix: `REACH = 64`, then `npm run bite`. In a scratch copy that regenerates cleanly at the same file
size and moves the limit to 2835px. Not loaded in the page.

### 1.5 CR-26 and CR-27 Could fix

- **CR-26** `tools/bite.mjs:3` says the bite's geometry lives "HERE … and nowhere else". `tools/build-images.mjs:336-341`
  hard-codes the same notch again (`bitten()`, `FAVICON_PATH`). Change the bite and the favicon, touch icon and social card
  keep the old one. `bite.mjs` guards its command-line code, so `outline` and `shapes` can be imported.
- **CR-27** (read only) `assets/js/page.js:243` needs 60% of a first-visit step on screen and `:311` needs 40% of the closing
  section. An element taller than the viewport divided by that fraction never fires. A phone held sideways (about 320px
  tall) cannot show 40% of the closing section, so the last ticker line never appears; with large text a step can exceed it
  too and its disc stays whole. Both are decorative.

### 1.6 Not reviewed: the 23:11 change to `tools/build-images.mjs`

The hero is becoming art-directed (a `paloma-hero-band` crop for phones, two preload links with `media`). `index.html` did
not use it yet when I stopped, so I reviewed neither. One thing to check when it lands: the generator writes
`(max-width: 1023px)` and `(min-width: 1024px)` for the preloads, while the stylesheet now breaks at `1023.98px`. Between the
two, neither preload applies. Harmless (the picture still loads), but keep the numbers the same.

---

## 2. Fixed during the review, and what I measured before and after

"After" is the live page at 23:10 unless a row says otherwise. Each row was reproduced before it was fixed.

| ID | Sev. | Defect | Before | After |
|---|---|---|---|---|
| CR-00 | blocker | Ticker's Pause button did nothing: the observer called `play()` on the CSS animations at load, after which Chromium ignores `animation-play-state`, which was all the button changed | fresh load: 18.5px of travel in 400ms before the click, 18.8px after, button reading "Play" | `page.js:282` `sync()`. 28px per 350ms, Pause 0.7, Play 28.4, pause then leave then return 0, Play 28.1, off screen not advancing. Fixed by someone else at 22:51 |
| CR-02 | blocker | Headline line "care how long" cut by `.hero { overflow: hidden }` | "g" of "long" cut 5.2px at 360, 21.2 at 344, 45.2 at 320 (`shots/code-review/01-h1-clipped-360.png`) | `page.css:558`. 0px at 320, 360, 390 |
| CR-03 | should | Ticker two to three times too fast after "Start the motion" on a page that loaded still (duration measured from the wrapped list) | 199 px/s at 390 (65 intended), 151 at 1440 (80 intended) | `page.js:275-278`. 65 and 80 |
| CR-04 | should | No times to offer painted nothing: `shownKeys = ''` equalled the empty key string | 0 chips, no message, no error, with the slot source returning `[]` | `page.js:140`. The live script, run in Node with an empty list, appends "Call or text for today’s times."; the same change in the browser on a copy of the 23:07 state showed it |
| CR-05 | should | Stop control lied under the system's reduced-motion setting ("Stop the motion" with nothing moving, "Start" did nothing) | 0 animations in all three states | `page.js:327-329`. Both controls hidden when the setting is on |
| CR-06 | should | Footer wordmark's focus ring invisible: `.plate:focus-visible` (ground) beat `.on-ink :focus-visible` | `rgb(249,83,10)` on `rgb(249,83,10)` | `page.css:206`. `rgb(38,18,11)` on ground; header plate unchanged |
| CR-07 | should | Sample chips not checked against opening hours (only today's against closing) | Monday set to 10:00 to 15:00 in the JSON-LD: "Opens Mon 10 am" above a chip "Mon 8:00 am" | `page.js:132`. Monday's chips drop out. Identical output on the page's own hours for 20,160 minutes |
| CR-08 | should | Hours reader silently wrong for schema.org URL day names, a second entry for a day, a dated exception, a misspelt day | fallback table with no warning; Monday 1 to 5 only; every Thursday 8 to 12; Wednesday closed | `page.js:31-42`. URLs read; dated entries skipped; the other two warn in the console and use the table |
| CR-09 | should | One missing element stopped the whole script after `.js` was set | step without its disc: `TypeError`, one ticker copy, Pause and both stop buttons dead. Status without its dot: no chips | `page.js:93-96`, `:141`, `:179`, `:237`, `:246`, `:340`. Both removals: 0 errors, 3 chips, 2 copies, stop works. No `#slot-status`: pick still relabels the button |
| CR-12 | should | README described the deleted scaffold; `index.html:8`, `:15`, `:35` cite README sections that did not exist | | Rewritten 23:03: file map, placeholder list, "Before a real practice uses this". Left over: `assets/img/prompts/README.md:30` and `:193` still cite `assets/css/tokens.css` |
| CR-13 | could | Chip list redraw (15 times a week) dropped keyboard focus to `<body>` and replayed the bite on the picked chip | focus on body; `recoil-a` and crumbs restarted | `page.js:154-172`, `page.css:664`. Focus kept, 0 restarts; a real re-pick still bites; if the focused chip expires, focus moves to the first |
| CR-14 | could | Cookie: right button started an interval nothing cleared; a stuck flag swallowed the next key press | 4 bites in 900ms and counting; Enter did nothing after a right-click, a touch-scroll or a drag-off | `page.js:349-352`. Right button 0; Enter 1 in all three cases; mouse 1; key 1 |
| CR-15 | could | Bite on press shared a selector list with `:has()`: a browser without it drops the rule and no button shows its notch | shown with a made-up pseudo-class in the same place: rule not kept | `page.css:153-154`, two rules |
| CR-16 | could | A 1023.5px viewport got the widest desktop layout (`max-width: 1023px` and `min-width: 1024px` both fail) | desktop nav, 49px sideways scroll | all nine `max-width` queries end `.98px`. 0px at 359.5, 639.5, 767.5, 1023.5, 1279.5 |
| CR-17 | could | Below 360: a still ticker item and the third chip were cut | "Evenings Tuesday and Thursday" cut 37px at 320, 13px at 344; chip past the edge | `page.css:599`, `:701`. 0 cut; the moving track is still one line (2392px by 17px) |
| CR-18 | could | `--fig-h: clamp(…24svh…)` had no fallback for browsers without `svh` (read only) | | obsolete: `--fig-h: 190px` since 23:07 |
| CR-19 | could | Past about 2800px the ticker showed a blank stretch (two copies of a 2726px track) | 642px empty at 3440 | `page.js:269-271`. 3 copies at 3440 and 5120, no gap, one `id`, the rest `aria-hidden` |
| CR-21 | could | Forced colours: the insurance switch did not show which option was chosen | both labels white on canvas | `page.css:720`. Chosen label takes `Highlight` |
| CR-22 | could | `<figcaption>` neither first nor last in its figure (invalid) | 1 figure | `index.html:574`. 0 |
| CR-23 | could | Today's row header read "MonToday" | `textContent` `MonToday` | `page.js:115`. `Mon Today` |
| CR-24 | could | Observers read `es[0]` (the oldest entry); every scroll anywhere ran a frame loop on the paused ticker | read only | `page.js:289`, `:301`, `:308` |
| CR-25 | could | `favicon-96.png` was hand-made: not in the generator or the manifest, 1,758 pixels different from the generator's | | `build-images.mjs:365`; file and manifest regenerated 23:07 |
| CR-26b | could | Phone number hard-coded in the script as well as the markup | | `page.js:100-101` derives the `sms:` link from the element's own `href`. At 390, closed: `sms:+15125550142`, "Text us" |
| CR-28 | could | Food strip was a tab stop at widths where it does not scroll | `tabindex="0"`, `overflow-x: visible` at 1440 | `page.js:315-320`. No `tabindex` at 1440; `0` at 390, where it scrolls |

Leftover scaffold files (`tokens.css`, `base.css`, `components.css`, `motion.css`, `motion.js`, `assets/vendor/gsap/`, the
`gsap` dependency): deleted at about 22:47 and the prototypes repointed to `prototypes/proto-tokens.css`. Nothing that ships
references them.

---

## 3. Where the code and the spec disagree

| Spec | Code | Which is right |
|---|---|---|
| `content/copy.md:97`: header and bottom-bar buttons should carry "Book Thu 5:30 pm" too | header always "Book online" since 23:04 (`index.html:381`) | Code. The label cost 61px at 1024. The hero, section and bar buttons still change |
| `brand/03-interaction-spec.md:184`: ticker "`:focus-within` pauses it" | no such rule | Code. Nothing in the ticker takes focus except Pause itself |
| same line: duplicate track "`aria-hidden` and `inert`" | `aria-hidden` only (`page.js:269`) | Spec. Free to add: `twin.inert = true` |
| `:191`: Pause is "kept for the session" | forgotten on reload | Code, unless the privacy note is extended: it would be a second stored value |
| `:121`: stop control uses `aria-pressed` | label swap, no `aria-pressed` | Either, not both. The label swap alone is sound |

---

## 4. Questions in the brief that produced no finding

**Open-now logic.** Sound. Fake-clock sweep of the functions sliced from the real file, last run on the 23:09 script: 554,400
states (every minute of five weeks, including both US clock changes, the European one and year end, for visitors in 11 time
zones). Checked against an independent calculation: practice day and minute, the open flag, the "elsewhere" flag, no empty
or `undefined` text. No failures. Sunday and Saturday after 1 pm give "Opens Mon 8 am". Midnight, 19:29 to 19:30 and 05:59
to 06:00 change on the right minute. Both clock changes fall on a Sunday, when the practice is closed.

**Slot generator on the demo data.** Same sweep: always exactly three chips, never a duplicate key or label, never in the
past, never within 45 minutes, never ending after closing, always in date order.

**Bite timers.** One click runs both listeners once: the button is bitten, `preventDefault` holds, the hash does not change,
the notice shows. A second click flips `data-kick` a to b. After 2s it restocks with `pop`; scrolled away it restocks
without. Timers are in a `WeakMap` and cleared on every path. No leak found. (Run at 22:40; that code has not changed.)

**Portions.** 0/0/0 at load, 1/2/3 after the row is seen, one at a time. Drawn bitten with motion off.

**Storage and privacy.** One `localStorage` key, `motion`, read and written inside `try`. No cookies, no `sessionStorage`.
First load on a clean cache (22:45): 11 requests, 209 KB, none to another origin. No `innerHTML`, `eval`, `fetch` or XHR in
`page.js`.

**Head.** On a clean cache the hero is fetched once, by the preload, and no "preloaded but not used" warning appears after
6.5s. (It does appear once a larger candidate is cached from an earlier, wider visit: Chromium prefers the cached file. Not
a markup fault.) The font preload is used. The JSON-LD parses.

**Markup.** No duplicate ids. Every `aria-labelledby`, `aria-describedby` and footnote link resolves. Headings run h1, h2, h3
with no skipped level. `<h3>` inside `<a>` and `<noscript>` inside `<fieldset>` are valid. `<details name>` is valid and
degrades to independent panels. Links that go nowhere without the script: 14 to `#book`, one each to `#reviews`,
`#insurance`, `#privacy`, `#accessibility` (no such ids), and "Get directions" to `#find-us`, the section it is in. The
fallback at `index.html:399` is inside `<noscript>`, so it shows when scripting is off but not when the script is blocked or
fails to load; then the "Next openings" group is empty.

**Pictures.** At 22:30 every `<source>` and `<img>` equalled the generator's own markup (39 tags) and every file existed.
Chromium's "lazy-loaded images should have explicit dimensions" issue names `paloma-apple`: a false alarm, the image is
absolutely positioned and has `width` and `height`.

**CSS.** `-webkit-mask` and `mask` are paired everywhere. The nested motion block resolves as intended; every nested selector
starts with a symbol, so the older strict nesting parsers accept it; without nesting the whole block drops and the page is
still. `.on-ink` and hover variants of `.btn` resolve correctly in every combination that exists. `.paper .chip` is
consistent. `container-type` is used correctly; without container units the photo notch and the portrait cap fall away
cleanly. Without `subgrid` the "0" heading loses its column alignment and nothing else. What needs `:has()` with no fallback
(Firefox before 121, Safari before 15.4): the picked chip's fill and notch, focus rings on the chips and the insurance
switch, and the insurance panels. Acceptable in 2026 in my view.

**Tools.** `tools/bite.mjs` run in a copy writes a `bite.css` byte-identical to the committed one. `tools/build-images.mjs`
(the 21:59 version) run in a copy wrote 154 files byte-identical to the committed ones in 7.7s. No absolute project path
anywhere. Outside the repo: `magick`, `cwebp`, `avifenc` (looked for on `PATH`, then `/opt/homebrew/bin` and
`/usr/local/bin`); `tools/gen-image.sh` needs zsh, the `codex` CLI and macOS `sips`; `tools/social-card-type.swift` is macOS
only and needs Public Sans Medium 1.008, which is not in the repository, so the card's lettering cannot be regenerated from
a clean checkout.

---

## 5. Safe cleanups

- `assets/css/page.css:160`, `:161`, `:166`: three `.on-counter` rules. No element has that class.
- `assets/css/page.css:98`, `:100`: `h4`, `dl`, `dd`, `svg` in the reset match nothing.
- `assets/css/bite.css`: `--bite-tl`, `--bite-br`, `--bite-bl` and `--crescent` are generated and never read. The crescent is
  drawn instead by a `radial-gradient` on a box with `border-radius: 50%`, which the README's own rule warns against; it
  looked clean at 2x in my screenshot. Use `--crescent` or stop generating it (`tools/bite.mjs:213-222`, `:246`).
- `tools/bite.mjs:230` (and the generated header) names `--bite-photo` and `--bite-plate`; neither exists. `:238` still wraps
  the output in `@layer tokens`, left from the layered scaffold; harmless.
- `tools/bite.mjs:124` says the disc is left at 68, 44 and 21%; the script prints 68, 45, 21.
- `assets/js/page.js:145` calls `chew()` on every `[data-book-label]`. Only the hero's has the `.w__t` class the animation
  needs; the other five get a forced layout and no motion.
- `tools/build-images.mjs:168`: the error names `/opt/homebrew/bin` only; the code also tries `/usr/local/bin`.
- `assets/img/prompts/README.md:30`, `:193`: cite `assets/css/tokens.css`, deleted.

---

## 6. What was run and what was only read

**Run**

- `node --check` on `page.js`, `bite.mjs`, `build-images.mjs`; `zsh -n` on `gen-image.sh`.
- Node, functions sliced out of the real `page.js` by text anchors: the 554,400-state clock sweep; the hours reader against
  six edited JSON-LD blocks; original against patched for 20,160 minutes; the empty-list first paint.
- `tools/bite.mjs` and `tools/build-images.mjs` in a scratch copy, compared byte for byte; the build again without the
  lettering file; again with the fix; the bite generator with `REACH = 64`.
- Browser, live page, real and fake clocks, same-origin frames from 320 to 5120 wide including the half-pixel widths: the
  138-cell header matrix, headline widths, ticker pause and speed, chip redraw, the cookie with synthetic pointer events,
  bite and placeholder on one click, portions, focus rings, reduced motion, forced colours, removed elements, mask sizes,
  dead selectors, ids and references, resource list, console. The full suite ran on the live page at 22:55, 23:06 and 23:10.
- The same suite on a copy with my diffs applied, served locally, at 22:57 and 23:08.

**Read only**

- CR-10 (needs an iPhone), CR-27, the `:has()` and nesting fallbacks (Chromium cannot switch them off; only the dropped-rule
  behaviour was demonstrated), CR-24.
- CR-20's fix was generated but not loaded in the page.
- `tools/gen-image.sh` and `tools/social-card-type.swift` were read, not run. The 23:11 `build-images.mjs` was not reviewed.
- The cookie results use synthetic events. That a context menu swallows the real `pointerup` is from knowledge of the
  platform, not from a run.

**Not done**

- Safari, Firefox, real devices, screen readers. No HTML validator was run (none installed; `tidy` is too old for this
  markup): validity claims come from DOM checks and reading.
- Copy, colour, spacing and anything else that belongs to the design, brand, accessibility and compliance reviewers.
