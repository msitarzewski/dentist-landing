# Brand and voice check of the built page

Reviewer: brand strategist. Date: 2026-11-09. Report only; no page file was edited.

**Under test:** `index.html` as it stood at about 22:30, plus the strings `assets/js/page.js` writes into the page. **Acceptance criteria:** `brand/01-brand-core.md` Parts 2e, 5, 6 and 7; `content/copy.md`; `research/02-audience-and-conversion.md` §6.

**Verdict.** The page passes the mechanical rules: three bite references, no banned word in view, the name never alone and never a verb. It is Paloma speaking throughout. It needs two British phrases removed, one missing designation added, and fifteen line edits that take out repetition and a few constructions a careful reader would spot as machine habits. No blockers.

## What was and was not tested

- **Tested by script:** every text node and every `alt`, `aria-label` and `content` attribute in `index.html` was extracted and classed as visible, screen-reader-only or head. The bite pattern and both banned lists from the brand core were run over each class, with the regexes at the end of `content/copy.md` plus a wider net (pain and fear words, British spellings, dashes, exclamation marks, emoji). The 24 strings in `page.js` were checked by the same patterns.
- **Tested by reading:** the whole page top to bottom as one piece, once in the source and once as extracted text.
- **Tested in a browser (own tab, closed afterwards):** the food strip, the services head and the closing band at 390x844, and the services head at 1440x900. Shots are in `.ops/qa/shots/brand-voice/`. I also read three existing shots in `.ops/qa/shots/evidence/`.
- **Not tested:** 768 and 1024 widths; the closed-by-day header states; the page with scripts off; print; any screen reader. The Texas rule text was not read (another reviewer has it open).

---

## 1. Mechanical pass

### 1a. Bite references: 3 visible, in the three slots, worded exactly

| Slot | Brand core line | On the page | Where |
|---|---|---|---|
| 1. Statement | "Teeth are for biting. I keep them at it." | Same, with a line break between the sentences | `index.html:204`, meet the dentist |
| 2. Question | "Tell me what you've stopped eating." | Same | `index.html:126`, first visit step two, first sentence |
| 3. Send-off | "Then go bite something." | Same | `index.html:308`, closing band, after the buttons and chip |

No fourth visible reference. The captions ("Apple." "Toast." "Corn." "Taco." "Peach." "Paloma. Apple.") and "The only cookie on this site." name a food and say nothing about eating, so they do not count.

**Not visible, listed as asked** (not counted under Part 5):

| Where | Text |
|---|---|
| `index.html:145` `aria-label` | "Four things to eat" |
| `index.html:146` `alt` | "A green apple with one bite out of it." |
| `index.html:147` `alt` | "A thick slice of buttered toast with one bite out of the corner." |
| `index.html:148` `alt` | "A grilled ear of corn with a row of kernels eaten off the top." |
| `index.html:149` `alt` | "A breakfast taco of egg, potato and cheese on a flour tortilla, half unwrapped from foil, with one bite out of it." |
| `index.html:199` `alt` | "Dr. Paloma Krenek holds up a green apple with one bite out of it and looks at the camera with a small closed-mouth smile." |
| `index.html:311` `alt` | "A peach with one bite out of it and a drop of juice running down the skin." |
| `index.html:330` `aria-label` | "Cookie. Take a bite." |
| `page.js` status strings | "One bite." "Two bites." "Three bites." |

The six alt texts are honest descriptions and should stay. The group label is different: it is an authored line about eating that only screen-reader users hear, which gives them a fourth. See finding F3.

### 1b. Banned words and phrases

| List | Visible text | Not visible |
|---|---|---|
| Compliance (Part 5, `02` §6) | **0 hits** | 1: "top" in the corn alt text, used literally ("eaten off the top"). Not a claim. No change. |
| Brand (Part 5) | **0 hits** | 0. ("smile" appears in two alt texts as a description of her face.) |
| Exclamation marks, em and en dashes, ellipses, emoji | **0** | 0 |
| "patients", "folks", "our practice", "the doctor" | **0** | 0 |

For information, not on any banned list: five pain or fear words are in view. Three are in the visitor's own voice or her story and should stay ("scared of the bill" `:203`, "What if I'm scared of the dentist?" `:285`, "Does whitening hurt?" `:287`). "Something hurts or broke." (`:162`) and "Nervous is normal here." (`:176`) are plain and correct.

**British usage, 2 hits.** These are not on the banned list but break the brand core's own rule that page copy is American English:

- `:75` "You get a **proper** look" (my line in brand core Part 6; the spec carries the same fault).
- `:280` "**Go on**, ask."

### 1c. The name

- "Feast" appears 4 times in view and 5 times out of view (title, og:title, og:image:alt, one `aria-label`, JSON-LD). **Every one is "Feast Dental".** Never alone, never a verb.
- The header is `position: sticky` at every width (`page.css:193`) and nothing in `page.js` hides it, so the FEAST DENTAL plate is on every screen. Confirmed at 390 and 1440.
- Title tag matches Part 2e exactly.

### 1d. "Dr. Paloma Krenek, DDS · General Dentist"

| Place | Present? | Note |
|---|---|---|
| Meta description, og:description, JSON-LD | Yes | |
| Hero, `:77` | Yes | 22px at 1440, beside "$195" at 150px |
| First visit, `:114–143` (chip "$195") | **No** | |
| Services, `:155` | Yes | 72px at 1440, equal to the service words (72px, measured) |
| Dentist band, `:213` | Yes | Exact |
| Cost, `:229–251` ("$195", "Fillings from $190.") | **No** | See F1 |
| FAQ, closing band (chip "$195") | **No** | |
| Footer, `:322` | Yes | Two lines, no dot: "Dr. Paloma Krenek, DDS / General Dentist" |
| Demo strip, `:54` | Name only | "Dr. Paloma Krenek", no degree or designation. See E13 |

---

## 2. Findings

**F1. Should fix. The Cost section promotes prices with no designation.** `index.html:229–251`. The brief for this check names five places; four have it. Brand core Part 5 says "wherever services are promoted". Smallest fix: one line directly under the promise at `:242`, in the `.cred b` style: `Dr. Paloma Krenek, DDS · General Dentist`. The first-visit foot, FAQ foot and closing band have the same gap; whether each needs it depends on how the rule is read, which is the compliance reviewer's call.

**F2. Should fix (design, not copy). The separator in the designation renders as a dash at desktop width.** `index.html:155`, `.desig .ip`. In the display face at weight 900 the middle dot draws as a short bar, wider than it is tall, so the line reads "DR. PALOMA KRENEK, DDS - GENERAL DENTIST". Evidence: `.ops/qa/shots/brand-voice/1440-desig.png`. `content/copy.md` voice rule 3 says no dashes as punctuation. Smallest fix: use the existing `.br` line break at all widths, as the phone layout already does, or set `.ip` in the text face. Not checked: `.who` at 1024–1279, where the same glyph is shown.

**F3. Should fix. Screen-reader users get a fourth authored line about eating.** `index.html:145`, `aria-label="Four things to eat"`. Part 5 says labels stay literal. Proposed: `Four food photographs`.

**F4. Should fix. The page repeats itself in parallel lists.** This is the main thing a careful reader would notice. Counts in visible text: "no lecture" 4 (plus "a lecture" once); "in writing" 5; "written estimate" 3; "raise a hand" 4; "I draw" 4; "show you why" 4. Three numbered lists of three (steps, how I work, promises) cover the same three ideas, and one sentence, "You get a written estimate before any treatment", is on the page word for word three times (`:172`, `:222`, `:242`). The caveat sentence about gums is also there three times, but that one is required wherever the price and "cleaning" meet. Edits E6, E7, E12 and E15 remove the avoidable repeats without losing a fact.

**F5. Could fix. Text is fused where two elements meet with no space in the source.** `:302` "Price in writing.Come in.", `:166` "Change how they lookOnly if you want to.", `:160–169` "…price it first.from$145". The accessibility tree already reads these with spaces (`.ops/qa/shots/a11y/axtree-full-1440.txt:162, 184, 400`), so this only affects copy and paste, reader mode and anything that reads raw text. Smallest fix: a literal space at each join.

### Machine-writing tells, with the sentence

1. **Threes everywhere.** 12 of the 31 paragraphs with more than one sentence are exactly three sentences long, on top of the three lists of three and the three-beat closing headline. One or two should break the pattern (E3 and E8 do).
2. **A colon doing a dash's job.** "In college I went four years without a cleaning: no insurance, and scared of the bill." (`:203`); "75 minutes: the exam, X-rays…" (`:286`); "A stop signal: raise a hand and I stop" (`:183`); "After your first visit: exam and a regular cleaning." (`:160`). Nobody says these aloud. The dashes were banned and the colons moved in.
3. **One sentence skeleton, seven times:** command, "and", result. "Say so at the door and I slow down." "Tell me at the door and I slow down." "Raise a hand and I stop." (three times) "Press it and the page holds still." "Send us a photo of your card and we'll confirm your plan before you come." It is her voice, but at this density it is a tic.
4. **"You get" as the standard promise opener,** five times (`:75`, `:172`, `:209`, `:222`, `:242`).
5. **Passive promises on a page that otherwise says "I":** "Treatment is priced before it starts." (`:162`); "nothing's added without your yes" (`:222`); "Numbing explained before I start" (`:187`).
6. **British idiom from a Texan:** "a proper look", "Go on, ask."

### "We" for something she does

None. All ten lines that use "we" or "us" mean the place: checking a card, confirming a plan, rebooking, the address. One judgment call, left alone: "Text us a question" (`:189`) is right only if the front desk answers texts.

---

## 3. Line edits

Every proposal keeps the facts and the compliance conditions of the current line. Apostrophes are typed straight here.

| # | Severity | Where | Current | Proposed | Why |
|---|---|---|---|---|---|
| E1 | Should | `:75` hero subhead | You get a proper look, the price in writing, and no lecture. | You get a real look, the price in writing, and no lecture. | British usage in the first screen. Also fix brand core Part 6. |
| E2 | Should | `:280` FAQ heading | Go on, ask. | Go ahead, ask. | British idiom. |
| E3 | Should | `:203` bio, sentence two | In college I went four years without a cleaning: no insurance, and scared of the bill. | In college I went four years without a cleaning. I had no insurance and I was scared of the bill. | Colon plus fragment reads as written, not spoken. Same facts. Also breaks a three-sentence paragraph. |
| E4 | Should | `:76` hero hours | Open till 7:30 pm Tuesdays and Thursdays, and Saturday mornings. | Open till 7:30 pm Tuesdays and Thursdays. Saturday mornings too. | As written, "till 7:30 pm" also governs Saturday mornings. Matches the ticker. |
| E5 | Should | `:162` Emergency | Something hurts or broke. I look and X-ray that tooth. Treatment is priced before it starts. | Something hurts or broke. I look, I X-ray that tooth, and I price the fix before I start. | The one passive promise in the services list. Price still comes before treatment. |
| E6 | Should | `:222` promise two | You get a written estimate before any treatment, and nothing's added without your yes. | Every fix and its price, on paper, before I start. I add nothing without your yes. | Third word-for-word use of the same sentence; the heading above already says "The price in writing." Still written, still before treatment. |
| E7 | Should | `:285` FAQ four | Tell me at the door and I slow down. I say what I'm doing before I do it. Raise a hand and I stop. | Cut the question. If it must stay: Say so when you walk in. You set the pace from there, and you can text us a question before you book. | The answer is the comfort paragraph (`:180`, `:183`) with two words changed. `02` §4b does not list this question. The alternative depends on the text line being monitored. |
| E8 | Could | `:120` step one | If you have insurance, send a photo of your card and we'll check it before you come. | Got insurance? Send a photo of your card and we'll check it before you come. | 17 words in the first step. |
| E9 | Could | `:286` FAQ five | 75 minutes: the exam, X-rays, a regular cleaning if your gums are ready for one, and time to go over the plan. | 75 minutes. That's the exam and X-rays, a regular cleaning if your gums are ready for one, and time to go over the plan. | Colon. Condition on the cleaning kept. |
| E10 | Could | `:183`, `:187` comfort list | A stop signal: raise a hand and I stop / Numbing explained before I start | Raise a hand and I stop / I explain the numbing before I start | Label-colon-gloss, and a passive in a list of things she does. |
| E11 | Could | `:160` Checkups | After your first visit: exam and a regular cleaning. X-rays when they're due. 50 min. If your gums need more, I show you why and price it first. | Every visit after your first. An exam and a regular cleaning, with X-rays when they're due. 50 min. If your gums need more, I show you why and price it first. | Colon; four fragments read like a spec sheet. Caveat untouched. |
| E12 | Could | `:209` point three | You get the number before I do anything. | The number comes first, then the work. | Fifth "You get". Same promise. |
| E13 | Could | `:54` demo strip | Demo page. This practice and Dr. Paloma Krenek are fictional. The photographs are AI-generated. | Demo page. This practice and its dentist are fictional. The photographs are AI-generated. | The only place her name is in view without the designation. Matches the footer note. |
| E14 | Could | `:240` no-insurance panel | That's a full exam, a full set of X-rays, a regular cleaning, and a written plan with a price for anything else. | That's a full exam, a full set of X-rays and a regular cleaning. You leave with a written plan and a price for anything else. | 22 words. Same four items. |
| E15 | Could | `:223` promise three | Raise a hand and I stop, every time. | A raised hand is enough. Every time. | Fourth "raise a hand and I stop". Same promise. |

Lines read and left alone on purpose: the headline; "Nervous is normal here."; "Haven't been in years? You're welcome here."; "Come in, then tell people how it really went."; FAQ three and six; "Like the stop signal in the chair. Press it and the page holds still."

---

## 4. Lines added during the build

| Line | Call | Note |
|---|---|---|
| "Four things to eat" (group label, screen readers) | **Reword:** "Four food photographs" | F3 |
| "Do you have dental insurance?" (legend, screen readers) | Approve | |
| "Demo page. Online booking isn't connected." | Approve | |
| "Demo page. Nothing was booked for Thu 5:30 pm: online booking isn't connected." | **Reword:** "Demo page. Nothing was booked for Thu 5:30 pm. Online booking isn't connected." | Colon |
| "Demo page. This link isn't connected yet." | Approve; drop "yet" if you want the three notices to match | |
| "No time picked." (status) | Approve | Pairs with "…picked. Nothing is booked yet." |
| "Hours and directions" (footer link) | Approve | |
| "Mon, Wed 8 to 5 · Tue, Thu 11 to 7:30 / Fri 8 to 2 · Sat 9 to 1 · Sun closed" | Approve | The table at `:259` carries am and pm |
| "Apple." "Toast." "Corn." "Taco." "Peach." | Approve | Part 5: a caption names the object and nothing else |
| "Paloma. Apple." | Approve | Dropping the clock time from `copy.md` was right: the photo is generated, so a time would be an invented fact |
| "The pad. The marker." | Approve | |
| "Fillings from $190." | Approve the wording | It is a price in the Cost section, so F1 applies |
| "Hours" (table caption) | Approve | |

---

## 5. Could any screen be taken for a restaurant?

**No, on the five screens I looked at** (1440: food strip, closing band; 390: food strip at two scroll positions, closing band). The sticky plate keeps FEAST DENTAL, both words at equal weight, on every screen, and next to the food there is always a first-visit price, a checkup row or the designation at display size.

The closest call is on a phone, in the band where the food strip sits between the "First visit $195" chip and the services heading (roughly 100px of scroll above `.ops/qa/shots/brand-voice/390-foods-a.png`). There the plate and the words "First visit" are the only signals, beside "Book online" twice and two photographs of food. I would ship it as it is. If the lead wants a margin, the smallest fix is the designation line under the first-visit chip at `:139`, which also closes that section's gap in 1d.

Not looked at: 768 and 1024 widths, and the social card.

---

## 6. Findings against the specs

- **`brand/01-brand-core.md` Part 6:** "a proper look" is mine and is wrong for an Austin dentist. Change to "a real look" there as well.
- **`content/copy.md` voice rule 3** bans dashes mechanically, and the copy answered with colons. The rule is fine; the sentences need to be written as speech (E3, E9, E10, E11).
- **`brand/01-brand-core.md` Part 5** says the designation goes "wherever services are promoted" without saying whether that means per page or per section. The build reads it as five places and misses one of its own five. I think per section is right on a long phone page; the compliance reviewer should settle it against the rule text.
