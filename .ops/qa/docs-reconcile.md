# Docs reconcile: content and design documents against the built page

Reviewer: docs-reconcile (technical writer). Date: 2026-11-09 (work ran to about 00:25 on 10 November).

**Built page reconciled against:** `index.html` and `assets/css/page.css` saved 00:26:14, `assets/js/page.js` 00:17:32 (all 10 November). The page changed four times while I worked: 23:47; QA round 7 at 00:10 from `.ops/qa/cold-read.md` (the lead's freeze); round 8 at 00:17 to 00:22 from `.ops/qa/accessibility.md` (per `.ops/session.jsonl`); and at 00:26 the lead fixed most of the page errors in section 5. Each document was re-checked against the last saves. Anything saved after 00:26 is not covered.

**Edited:** `content/copy.md`, `brand/01-brand-core.md`, `brand/02-visual-system.md`, `assets/img/prompts/README.md`, and this report. Nothing else. No page file was touched. Copies of the four documents as they were before this pass are in my scratchpad (`<session scratchpad>/originals/`), outside the project.

**Method.** A script extracted every text node in the body of `index.html` (visible, screen-reader-only, `aria-hidden`, `<noscript>`) and every `alt`, `aria-label` and meta `content`; I read the strings in `page.js` from the source. A second script then checked every code-styled line in `copy.md` against the page text, the attributes and `page.js`. Every line it did not find is accounted for: a script template shown with sample values (status lines, chips, "Book Tue 5:45 pm"), or a line marked "Not used". Nothing was rendered in a browser.

---

## 1. `content/copy.md`

Rewritten line by line against the page; structure kept (sections 0 to 14, conflicts, checklist), one section added (4a, the food strip), and the requested "Changes from the first draft, and why" at the end. 509 lines before, 744 after.

- **Every copy line now matches the page**, in typographic apostrophes and quotes as `index.html` has them (the first draft used straight ones, which made lines unsearchable in the page). Covered: visible text, buttons, aria-labels and visually hidden text that carry words, alt text, meta description, og title and description, og:image alt, og:site_name, and everything `page.js` writes (status lines, chip format, sample-times caption, the three placeholder notices, chip statuses, motion labels, cookie statuses, ticker bonus line, the Call/Text us bar label). The JSON-LD descriptions are not copied (copy.md never covered them); section 0 now lists their placeholders and the `priceValidUntil` demo value.
- **Flags.** 29 **[confirm]** flags before, 53 after. As the lead asked, the checklist lists the demo values separately ("Good through June 30, 2027" in the hero footnote, uninsured panel, Services note and every `priceValidUntil`; "$60 more"; the cancellation policy; "call or text the same number"), each **[confirm]** in copy.md and not on the page, and gives an "Add at launch, only with real records" list (dental school and year, years in practice, previous practices, the Texas licence number, the legal entity, the named in-network plans). The same label marks each place in the sections. Added: one for every demo value the 00:10 save wrote in place of a bracket ("June 30, 2027" in four places, "$60", "call the same number", the cancellation policy), for every fact the demo now leaves out but a launch needs (school, years, licence number, legal entity, plan names), and for new claims (lane-one "today", lane-two conduct promise, "Will it hurt?" wording, which way the insurance switch starts, the Spanish line in Find us). Removed: the photo-caption-time flag (no times printed) and every printed-placeholder entry whose bracket is gone; the facts behind them stay flagged.
- **Printed placeholders.** The page now prints none (0, counted by script). The checklist has a table of what happened to each of the 21 the 23:47 save printed (12 became demo values or plain words, 9 were cut).
- **Not used:** 23 entries keep first-draft lines and dropped build lines where they may be needed again (the fallback headline, the live-site chips caption, the how-I-work list, the second credentials line, the compliance review's legal line for launch, the map alt, the first-draft alt models).
- **Conflicts:** items 1 to 8 kept; 4 and 8 updated; 9 to 12 added (title tag, header button label, insurance switch default, brackets on the page).
- **Checklist:** re-run by script on the built page: 3 bite references (unchanged), 0 banned words, 0 exclamation marks or dashes, numbers traced (new: the demo values and 911), word count re-done mechanically (1,544 static words, about 1,143 at load). The reading-level figure is marked "not re-run".
- **Changes table:** 92 rows. Each gives the reason and the report it is recorded in. Sources used beyond the brief's list, because the reasons are recorded only there: `.ops/qa/cold-read.md` (round 7), `.ops/qa/accessibility.md` (round 8), `.ops/qa/engines.md`, `research/04-inclusive-visuals-review.md`, `brand/04-image-placement.md`, `.ops/session.jsonl`. Three rows have no recorded reason at all: 21 (the ` CT` on the chips caption), 22 (dropping "Getting times.") and 79 (the line break in the closing heading). Eight more have one part with no recorded reason: 3 (og:title matching the title), 4 (og:description dropping the designation), 13 (the notices existing at all), 23 (click-to-clear on a chip), 26 ("for your first visit"), 28 (the ". What it covers." suffix), 34 (the row-action labels other than "Book a $0 scan") and 91 (`ol` to `ul`).
- Side effect: `research/04-inclusive-visuals-review.md` cites `content/copy.md` by line number (`:36`, `:121`, `:208`, `:221`, `:342`, `:348` to `:351`). Those now point at different lines. I did not edit that file.

## 2. `brand/01-brand-core.md`

10 lines changed in place; the file is still 307 lines, so the line references other files make into it (`assets/img/prompts/README.md` cites `:131`, `:136`, `:195`, `:257`; `research/04` cites `:129`, `:130`) still land on the same text. Every changed quote carries "(updated to match the build, 2026-11-09)". Strategy and reasoning untouched.

- Part 2e: the title tag quote, now `General Dentist in East Austin, TX | Feast Dental`.
- Part 3: the bio, now the built four sentences (heading "three sentences" → "four sentences"), and the note under it (the page already says "in October 2026"; sentences two and three are the invented biography).
- Part 4: the hero short form and the footnote as built, with the demo date marked as such.
- Part 5: the Fear sample line ("Raise a hand and I stop.", "Every time." dropped), the Time sample line (adds "I went four without."), and the still-life caption example ("Apple.").
- Part 6: subhead 1 ("a real look", "in East Austin", three sentences).
- Part 7: the no-reviews slot line ("October 2026").

Rule I used, so the lead can check it: I updated lines the page carries as copy, either verbatim at some point or as the brand core's draft for a named slot. I left voice examples that never appeared on the page. Not changed, for the lead or the brand owner to decide:
- Part 6 subhead 3 still says "a proper look", the British usage brand-voice E1 flagged; it is not page copy.
- Part 6 still introduces the subheads as "one sentence each"; the built subhead 1 is three.
- Part 4 facts that now differ from the page (they are facts, not quotes): first visit "a full set of X-rays" (the page says "the X-rays you need", compliance S5); "Getting there" brackets, "step-free access" (the page's caption says "the entrance"); the Part 3 detail list leans on the how-I-work habits, whose list left the page at 00:10 (the habits still show in step 3 and the promises).
- Part 5 Money sample "exam, X-rays and a cleaning" states the cleaning flat, which copy.md conflict 2 already resolved the other way.

## 3. `brand/02-visual-system.md`

Not rewritten: 84 lines added, none removed. One italic pointer line under each changed section heading (8: sections 0, 1.3, 2.4, 5.7, 6.1, 6.4, 6.7, 7) and a dated "Amendments to match the build (2026-11-09)" section at the end with A to E as asked. Every value was checked in `assets/css/page.css` at 00:22.

- **A, hero lock-up:** `--fs-lock` per width (40 to 48px below 640, 56 to 80px from 640, 58px from 1024, 85 to 96px from 1280), GENERAL DENTIST Anybody 800 width 50, numeral Anybody 900 width 100/125 on a paper plate, placement per width, and what it replaces in 6.1 and 1.3. Two places where the build differs from the design review's addendum are stated: the band below 1024 is at least `min(32vw, 290px)` (the addendum says `min(38vw, 340px)`), and GENERAL DENTIST goes below the designer's 48px floor at 320 to 389 (40px at 320).
- **B, Services on paper and Comfort ruled:** the built field order as a table, four saturated fields, and the paper run stated as an accepted deviation recorded in `.ops/qa/evidence.md` E5, with the designer's reasons from `.ops/qa/design-review.md` section 3.
- **C, the row's ink ends:** `border-inline` transparent at rest, ink on hover and focus.
- **D, promise headings:** Anybody 800 width 85, 22 to 28px, the size 6.6 gives the dentist band's point headings (that list itself left the page at 00:10, which the amendment notes). Also noted: the promises lost their numerals at 00:10.
- **E, below 390:** `--fs-d2: min(2.5rem, 10.1vw)`; `.desig`, `.svc__word` and `.svc__price` all use it.

Other places where `02` no longer describes the build. I did not amend them, because they were outside the five items; tell me if you want them added:
- 6.1 diagrams: the hours-fact line (now the insurance line), "Call or text (512) 555-0142" (now "Call…").
- 6.3: heading "Here’s your whole first visit." (now "Here’s how it goes."); the chip after the steps (removed at 00:10).
- 6.4: the designation drawn on one line with "·" (built with "•", two lines below 1024, not below 640); the `bite-toast` still life beside the heading (not built; `brand/04` call b); the old closing sentence.
- 6.5: "A stop signal: raise a hand and I stop"; no photograph planned (the build has `paloma-listening` in c1 to c6).
- 6.6: the numbered how-I-work list (removed at 00:10); caption "Paloma. Apple. 4:10 pm.".
- 6.7: "I opened in October."; "Write a Google review".
- 6.9: "We’re in Holly, on the east side."; the map (not built); "Call or text".
- 6.10: "Go on, ask."; chip and button after the list (removed at 00:10).
- 6.11: "Call or text".
- 5.2: bottom bar "Call or text" (built: "Call" open, "Text us" closed).
- 5.4: the price chip is "not focusable"; the closing chip is now a link (`.ops/qa/accessibility.md` B11 asks for the spec to change).
- 5.11: caption example "Apple. 4:10 pm.".
- Section 3 names `assets/css/tokens.css`, which is deleted.

## 4. `assets/img/prompts/README.md`

3 lines changed in place (so the line references in `research/04` still hold) and one section added at the end, "Reconciled with the build (2026-11-09)".

- Line 7, the status line: now also says all twelve images were generated, plus `paloma-listening`, which the shot list does not name. (`research/04` item 18 asked for this.)
- Lines 30 and 193: `assets/css/tokens.css` is deleted. The final colour values in `page.css` are given, and the built photo notch (a 25% tile, on two photographs).
- New section: every file and image name the README references was checked against `prompts/`, `src/` and `assets/img/`. All exist except `tokens.css`. A 15-row table gives each image's prompt, source, built widths and use on the page.
  - **Used:** `paloma-hero` (from 1024), `paloma-hero-band` (below 1024), `paloma-apple`, `paloma-drawing` (3:2 and the 4:5 crop), `paloma-listening`, the four strip foods, `bite-peach`, `the-drawing`, `storefront`.
  - **Unused:** `comfort-headphones`, `the-drawing-nowords`, the two tests, everything in `src/rejected/`, and since 00:10 `paloma-laughing` (built but no longer referenced). `avatar-400.png` is built and not referenced by `index.html`.
- The hero band crop: `paloma-hero-band-{640,800,1122}`, 1122 x 716, source rows 41 to 757, made by `tools/build-images.mjs`, with the reason for 41 (6% of the 686 removed rows) and the coupling to `object-position: 100% 6%`.
- Also noted: the alt table in the README is the pre-generation draft (the page uses `research/04` section 4, with two corrections); the character-block changes `research/04` proposes are not applied.

---

## 5. Suspected page errors, for the lead to fix

Line numbers are `index.html` as saved at 00:19:30 unless another file is named. I fixed none of them. **Status at 00:26:** the lead fixed items 1 to 7 and 10 and the `page.css` comment; `content/copy.md` now records the fixed wording. Items 8 and 9 and the `tools/` note are still open.

**Applied by the lead** (confirmed by message; `index.html` SHA-256 `2f0ed8a6974c…`, saved 00:26:14): 1 (FAQ insurance gains the deductible sentence), 2 ("After hours, call or text the same number."), 3 (og:description gains the turn sentence), 4 (og:image:alt carries the card's words), 5 (both JSON-LD editor's notes removed; their conditions are **[confirm]** flags in copy.md sections 0 and 5), 6 (the practice description gains the gum condition), 7 (the space between "Next openings" and "More times"), 10 ("afterward"), and the `page.css` lock-up comment. **Not applied:** 8 (the launch facts, which the lead says are already on the README list; copy.md lists them under "Add at launch") and 9 (the footer heading). `content/copy.md` and its changes table (rows 4, 5, 71, 73, 76 and 92) record the applied wording.

1. **Fixed at 00:26.** **Two places disagree on insurance.** `:597`, FAQ "Do you take my insurance?", stops after "…not a promise from your insurer." The insured panel at `:551` goes on: "You still pay your plan’s deductible and copay." Compliance section 1a asked for the FAQ to match the panel (a "must", with M7 and M11). Smallest fix: add the sentence to `:597`.
2. **Fixed at 00:26** (FAQ 9 now says "call or text the same number"; still a demo value). **After hours, call or text?** `:604`, FAQ 9, says "After hours, call the same number." But when the practice is closed, `assets/js/page.js:98-103` (flag `TEXTS_ANSWERED` at `:48`) turns the phone bar's Call into "Text us", so as not to dial a closed practice. Either after-hours calls reach someone, and the bar should keep offering Call, or they do not, and FAQ 9 sends a person in pain to a line nobody answers. The sentence is also a demo value (flagged in copy.md).
3. **Fixed at 00:26** in og:description (the social card image is unchanged). **The headline travels without its second sentence.** `:14`, og:description: "Demo page for a fictional practice. I don’t care how long it’s been. A 75-minute first visit…". Brand core Part 6, rank 1, Watch: "Must be followed at once by what she does care about." The persona walkthrough (section 7) raised the same for the social card, which still shows the headline alone. Lead's call: add "I care about what’s bothering you now." or accept it.
4. **Fixed at 00:26.** **og:image alt leaves out the words in the card.** `:20`: the card (`assets/img/social-card.jpg`, viewed) carries the demo line, the headline and the designation; the alt names only the person and "Feast Dental". The alt rule from `research/04` section 3.6 (now in copy.md section 14) is that words written in a picture go in its alt text. Could fix.
5. **Fixed at 00:26.** **Bracketed editor notes left in copy-like strings.** `:276`, the aligner-consult offer description: "…[Keep this offer only if nothing from the consult is folded into a later fee.]"; `:289`, the aligners offer: "[Aligner brand: to confirm.]". After round 7 these are the only bracketed notes inside description text (the other JSON-LD brackets are URLs and IDs). They do nothing under `noindex`, but any tool that reads the offers would print them. Could fix, or leave on purpose.
6. **Fixed at 00:26.** **Price and "cleaning" without the gum condition, in the JSON-LD.** `:70`, the practice description: "A first visit is 75 minutes and $195 without insurance: a full exam, the X-rays you need, a regular cleaning, and a written plan with prices." The first-visit offer at `:182` carries the condition; this description does not. copy.md section 2 rule: the price and "cleaning" never appear together without that sentence. The compliance review treats JSON-LD as price advertising (section 4, head). Low confidence that it matters under `noindex`.
7. **Fixed at 00:26.** **Words that touch in the source.** `:396`: `<span class="lab">Next openings</span><a …>More times</a>` with no space, so a text extraction reads "Next openingsMore times". This is the same kind of join that `.ops/qa/seo.md` A8 fixed elsewhere. Could fix: a space between the two elements.
8. **Launch disclosures now absent.** `:637`, the legal line, no longer says who owns the website or names the legal entity. `:535` (promise 4) and the footer column at `:635` no longer give a licence number. Compliance M5 and its §108.59 table (rows 1 and 4) recorded these as present since 23:01. This is fine for a labelled demo (the footer's demo note covers it, `.ops/qa/cold-read.md` tell 1), but whatever list a real practice works from must put them back. copy.md flags them; `README.md` is not mine to check.
9. **A heading that does not cover its column.** `:633`: the footer column headed "Call or text" also holds "Book online". Minor.
10. **Fixed at 00:26.** **Possible British usage.** `:600`, "Will it hurt?": "you can be sore afterwards". American usage leans to "afterward", and brand core Part 5 asks for American English (brand-voice cut "proper" and "Go on" for the same reason). Could fix.

Outside `index.html`, also for the lead (not page copy):

- **Fixed at 00:26** (the comment now gives the 40px floor below 390). `assets/css/page.css:633` said of GENERAL DENTIST "never set it under 48px", but `:635` sets `--fs-lock` to `clamp(2.5rem, 12.3vw, 3rem)`, which is 40px at 320 and under 48px up to 389. The design review's addendum specifies the same 40 to 48px below 640, so the comment and the value disagree, not the build and the spec.
- `tools/build-images.mjs:100`, the hero's CSS note, says the band below 1024 is `min(38vw,340px)`; `page.css:678` builds `min(32vw, 290px)`. I did not edit `tools/`.
- Resolved since the compliance review: the social card's strip now reads "This practice and its dentist are fictional", matching the page (compliance section 6 had flagged the old wording).

## 6. Not done

- No browser render. Line breaks, first-screen fit and the CSS claims were read from the stylesheet, not measured.
- `.ops/qa/accessibility.md` was still being written when I started; I used only its findings that round 8 applied.
- README.md and `tools/` were not read for agreement with the copy (another agent was editing them).
- The reasons in the changes table come from the reports as written. Where a report proposed wording and the page carries different wording, the row names both and does not guess at the difference.
