# Feast Dental: landing page copy

Status: reconciled with the built page on 2026-11-09, against the frozen saves of 10 November: `index.html` and `assets/css/page.css` 00:26, `assets/js/page.js` 00:17. These are the 00:10 freeze, which applied the cold read (`.ops/qa/cold-read.md`, tells 1, 2a, 3 and the stop caption from 6), plus the accessibility fixes after it (`.ops/qa/accessibility.md`) and the lead's fixes at 00:26 to page errors this reconciliation found (`.ops/qa/docs-reconcile.md` section 5). The page is the source of truth. Every line of copy below was copied from it; where this file and the page ever disagree, the page wins and this file is the one to fix. The first draft of this file (same date) is recorded change by change in "Changes from the first draft, and why" at the end.

Sources of the first draft: `brand/01-brand-core.md` (facts, voice, headline, slot lines), `research/02-audience-and-conversion.md` §4 to §7, `brand/03-interaction-spec.md` §3 to §6, `brand/00-creative-direction.md`. Sources of the changes: the review reports in `.ops/qa/`, `research/04-inclusive-visuals-review.md` and `brand/04-image-placement.md`.

The practice is a placeholder. Every name, price, hour, date, policy, address and phone number here is invented (brand core Part 4) and must be replaced with the real dentist's confirmed facts before anything goes live. Since 00:10 the page prints no square-bracket placeholders: each one became an invented demo value or was taken out (`.ops/qa/cold-read.md`, tell 1). The demo values are flagged **[confirm]** below like every other fact.

## How to read this file

- Text in `code style` is copy, exactly as the page prints it. Everything outside code style is a note for the builder.
- Square brackets inside copy are placeholders. The visible page has none at present; the JSON-LD in the head still has its own (section 0).
- **[confirm]** after a line is a flag for the practice. It never prints.
- **Demo value** marks a fact the page states in plain words that is invented for the demo (a date, a fee, a policy). It reads as real, so it must be replaced, or the sentence cut, before launch. Every demo value also carries **[confirm]** here; the page itself shows no flag.
- **Add at launch** marks a fact the demo took off the page because it names a real-world record (a school, a licence, a legal entity, an insurance contract). It goes back only with the real record. The footer's demo note covers its absence meanwhile.
- **SR** marks text for screen readers only (aria-label, visually hidden text, status messages). It is not visible.
- **JS** marks text that `assets/js/page.js` writes into the page. Without the script it does not appear.
- **Not used** marks a line from the first draft, a line the page has since dropped, or an alternative. It is kept only where it may be needed again (a fallback, a live-site variant, a fact for launch).
- Apostrophes and quotation marks are typographic (’ “ ”), as in `index.html`, so a line can be found in the page by searching for it. The first draft typed them straight.
- The middle dot (·) separates the parts of a label. The Services designation uses the display face's round bullet (•) instead, because the face's middle dot draws as a short bar and reads as a dash. The page puts non-breaking spaces in `75 min`, `7:30 pm`, `$0 · 30 min` and before the number in the hero's Call button; this file shows them as plain spaces.
- "X-rays" and "X-ray" in running text sit in a no-wrap span, so they never break at the hyphen.
- Section ids in the build: `top` (hero), `ticker`, `first-visit`, `foods`, `services`, `comfort`, `dentist`, `promises`, `cost`, `find-us`, `faq`, `closing`.
- Sections have no eyebrow labels. The creative direction lists thin tracked labels as a template tell, so each heading carries its own subject.

## Voice in practice (six lines for whoever edits next)

1. Paloma is speaking, to one person. "I" for what she does or promises. "We" only for the place (we're open till 7:30). Never "our practice", "patients" or "the doctor".
2. Number first: the price, the length, what happens next. Then what is in it. Then what happens if it turns out to be more.
3. Short sentences, verb first, contractions. The energy is in the verbs. No exclamation marks, no emoji, no dashes as punctuation.
4. Kind, and the joke is on dentistry or on her. Never on the reader's teeth, and never a tooth pun.
5. Every promise is literally true and is something she does herself. She will ask about your last visit and about flossing, so the page says "no wrong answer" and "no lecture", never "I won't ask". Say what she does, not how it will feel.
6. The picture bites, the words welcome. Three bite references on the whole page, in three fixed slots (first visit step two, meet the dentist, closing band). Never add a fourth, and never use Feast as a verb.

---

## 0. Head

- **Title tag (49 characters):** `General Dentist in East Austin, TX | Feast Dental`
  - The search phrase first, then the name, with "Feast" locked to "Dental". The JSON-LD `WebPage` name is the same string.
  - Not used: `Feast Dental | General dentist in East Austin | Dr. Paloma Krenek, DDS` (the first draft, 70 characters).
- **Meta description (145 characters):** `Dr. Paloma Krenek, DDS, General Dentist, East Austin. 75-minute first visit with the price in writing first. Evenings and Saturdays. Book online.`
  - No price: a search snippet cannot carry the footnote, the dates or the gum condition.
- **og:site_name:** `Feast Dental`
- **og:title:** `Demo: General Dentist in East Austin, TX | Feast Dental`
- **og:description (157 characters):** `Demo page for a fictional practice. I don’t care how long it’s been. I care about what’s bothering you now. A 75-minute first visit, priced in writing first.`
  - Both start with "Demo", so a text-only preview of a shared link says what the page is. Take "Demo" out of both when the facts are real.
  - The headline never travels without the sentence that turns it (brand core Part 6).
- **og:image alt:** `Demo page. This practice and its dentist are fictional. The photographs are AI-generated. Feast Dental. I don’t care how long it’s been. Dr. Paloma Krenek, DDS, General Dentist, in dark brown scrubs on an orange background.`
  - It repeats the words printed on the card (section 14's rule). Rewrite it with the card.
- **JSON-LD.** The practice, person and offer descriptions in the head repeat the visible lines as plain sentences (first visit, the five services, hours, credentials). They are not copied into this file. Edit them together with the visible lines.
  - Their own placeholders, still in square brackets: the domain, legal name, photo and logo URLs, map and coordinates, profile links, booking URL, dental school, university, licence number, NPI, `[Payment types: to confirm]`, `[es: keep only if confirmed]` and `dateModified` `[YYYY-MM-DD: the day the prices and hours were last checked]`.
  - **Demo value:** every offer's `priceValidUntil` is `2027-06-30`, matching "Good through June 30, 2027." on the page. **[confirm]**
  - Since 00:26 the practice description ends with the gum condition, "If your gums need more than a regular cleaning, the fee is higher.", so the price and "cleaning" never appear there without it (section 2's rule).
  - Since 00:26 no offer description carries an editor's note. Their two conditions are flags here: the aligner consult's "$0" holds only if nothing from the consult is folded into a later fee **[confirm]**, and the aligner brand is unknown **[confirm]** (both also in section 5).
- **h1 decision:** the hero headline is the page's only h1. The full search phrase ("General Dentist in East Austin") lives in the title tag and the meta description, never in a heading. The place name is in the visible text twice: the hero subhead ("a general dentist in East Austin") and the Find us heading ("We’re in Holly, East Austin."). Section headings are h2. Step titles, service names and the promise headings are h3.

---

## 1. Header

- **Skip link (SR until focused):** `Skip to content`
- **Demo strip, above the header:** `Demo page. This practice and its dentist are fictional. The photographs are AI-generated.`
  - One element (`p.demo-strip`); delete it to remove the line. It goes with the footer's demo note (section 13) and the "Demo" in the og text (section 0).
- **Lock-up:** `Feast Dental`
  - Set in capitals by CSS so it reads FEAST DENTAL. Both words always together, same face and weight. Never "Feast" alone.
- **Nav aria-label (SR):** `Sections`
- **Nav anchors (four):** `First visit` · `Services` · `Cost` · `Find us`
- **Status with no script:** `Hours` (a plain link to the Find us section)
  - SR, read before the status at every width and with or without script: `Hours and address: `
- **Status, open, long form (JS):** `Open now till 7:30.`
  - Pattern: Open now till {today's closing time}. Mon and Wed `5`, Tue and Thu `7:30`, Fri `2`, Sat `1`. Clock times only, never a duration. The script reads the hours from the JSON-LD `openingHoursSpecification`.
- **Status, open, short form (JS; below 1280):** `Open till 7:30`
- **Status, closed by day, long form (JS):** `Closed now. Opens 11 am.`
  - When the next opening is on another day: `Closed now. Opens Tue 11 am.`
- **Status, closed by day, short form (JS):** `Opens 11 am` or `Opens Tue 11 am`
- **Status, closed at night, long and short form (JS):** `Closed now. Booking’s open all night.` / `Booking’s open all night` **[confirm]**
  - "Night" runs from the latest closing time of the week (7:30 pm) to 6 am practice time, on every day. The line shows only while `BOOKING_OPEN_ALL_NIGHT` is `true` in `page.js`, and that may stay true only if online booking really works out of hours. With the flag `false` the daytime closed lines show at all hours.
- **Status when the visitor's clock is not the practice's (JS):** the times gain "am" or "pm" and the zone: `Open now till 7:30 pm CT.`, `Open till 7:30 pm CT`, `Closed now. Opens 11 am CT.` The night line carries no clock time and does not change.
- **Phone link:** `(512) 555-0142`
  - SR: `Call (512) 555-0142` (the name contains the visible text)
- **Booking button:** `Book online`
  - Always this label. A chosen time would make it wider and push the header off screen at 1024, so the header button is the one Book button on the page that does not take the chosen time.
- **Phone bottom bar aria-label (SR):** `Book or call`
- **Phone bottom bar, button one:** `Book online`; after a time is chosen, `Book Tue 5:45 pm` (section 2).
- **Phone bottom bar, button two, while open (JS):** `Call` (dials)
- **Phone bottom bar, button two, while closed (JS):** `Text us` (opens a text) **[confirm]**
  - Only while `TEXTS_ANSWERED` is `true` in `page.js`, which needs a text line that is read in opening hours and auto-replies outside them. Without the script, or with the flag `false`, it reads `Call` at all hours.
- **Placeholder notice (JS; one line along the foot of the screen, in a polite status region that is always present and empty between notices; the text shows for 10 seconds after a press on any link that is not connected in the demo):**
  - Booking links, no time chosen: `Demo page. Online booking isn’t connected.`
  - Booking links, a time chosen: `Demo page. Nothing was booked for Tue 5:45 pm. Online booking isn’t connected.`
  - Every other placeholder link: `Demo page. This link isn’t connected.`

---

## 2. Hero

- **Headline (h1):** `I don’t care how long it’s been.`
  - Authored breaks. From 1024: `I don’t care how long` / `it’s been.` Below 1024: `I don’t` / `care how long` / `it’s been.` Never break the line straight after "care". Each word is its own no-wrap unit for the chew.
- **Fallback headline and subhead (brand core Part 6, rank 2). Not used. Ship it if rank 1 reads cold in the five-second test.** If it ships, say "in East Austin" where it says "on the east side", as the built subhead does.

```html
<!-- Fallback hero, rank 2:
h1: Been a while? Come in. No lecture.
subhead: I'm Paloma, a general dentist on the east side, and your first visit is 75 minutes with the price in writing before I do anything.
-->
```

- **Subhead (27 words):** `I care about what’s bothering you now. I’m Paloma, a general dentist in East Austin. You get a real look, the price in writing, and no lecture.`
  - Below 640 it follows the footnote (CSS order only; the markup order is unchanged), so the price, the openings and the footnote stay on the first screen.
  - Not used: the cold read's alternative, `I care about what’s bothering you now. I’m Paloma, a general dentist in East Austin, and you’ll know the price before I touch anything.` (`.ops/qa/cold-read.md`, tell 6; not applied "for brand-voice and SEO reasons", `.ops/session.jsonl`, QA round 7).
- **Insurance line, under the subhead (18 words):** `Insured? Add a photo of your card when you book and we’ll check your plan before you come.` **[confirm]** (that the booking tool takes a card photo; if texting is the only route, use the alternative in `.ops/qa/compliance.md` M7, which warns that texts are not encrypted)
- **Lock-up with the portrait:** `Dr. Paloma Krenek, DDS` and `General Dentist`
  - In the markup the two parts are joined by ` • `, which the hero hides. GENERAL DENTIST is set at the same font size as the price numeral, directly above it in one ruled block (the Texas designation rule; `brand/02-visual-system.md`, "Amendments to match the build").
- **First-visit plate:** label `First visit · 75 min`, numeral `$195`, caption `without insurance · exam, X-rays, regular cleaning`, then a superscript `1` linked to the footnote.
  - SR name of the superscript link: `Footnote 1`
  - Below 360 the caption breaks onto a new line where the middle dot was. Figures do not animate.
- **Footnote (35 words):** `¹ Exam, X-rays and a regular cleaning. If your gums need more than a regular cleaning, the fee is higher, and I show you why and price it in writing first. Good through June 30, 2027.`
  - Must sit on the same screen as the first-visit plate at every breakpoint. The price and the word "cleaning" never appear together without this sentence in view.
  - **Demo value:** June 30, 2027. **[confirm]** the date the fees are really good through, and whether $195 is the standing fee or an introductory one (if introductory, the plate must also state the regular fee, who qualifies and the end date). The same date is in the Services note, the Cost panel and the JSON-LD.
- **Opening chips label:** `Next openings`
- **More link:** `More times` (a placeholder booking link in the demo)
- **Opening chips group name (SR):** `Next openings: pick a time for your first visit`
- **Opening chips, format and three samples (JS):** `Tue 5:45 pm` · `Wed 8:00 am` · `Thu 5:30 pm`
  - Three-letter day in bold, then the time with minutes, lowercase am and pm. In the demo they are worked out from the hours (read from the JSON-LD) and the clock: one chip per open day, today first, up to three; each ends by closing time (start plus 75 minutes), and today's starts more than 45 minutes from now. The three above are what a visitor sees on a Monday evening.
- **Chips caption, demo (JS):** `Sample times for this demo, not real openings. As of 6:42 pm.`
  - The clock time is the moment the chips were last worked out. ` CT` follows it when the visitor's clock is not the practice's: `As of 6:42 pm CT.` Hidden without the script.
- **Chips caption, live site. Not used in the demo:** `Times as of 6:42 pm.` The compliance review proposes `Real openings as of [time]. A time is yours once booking confirms it.` (`.ops/qa/compliance.md` M3).
- **No times to offer (JS), and the line shown without script:** `Call or text for today’s times.` **[confirm]** ("or text" only if texts are answered)
- **Primary button:** `Book online`
- **Primary button after a chip is chosen (JS):** `Book Tue 5:45 pm`
  - Pattern: Book {day} {time}. Every in-page Book button takes the same label: the hero, first visit, Cost and closing buttons, and the phone bar. The header button and the footer's "Book online" link keep their label.
- **Secondary button:** `Call (512) 555-0142`
  - From 1024 to 1439 it reads `Call`, because the number is in the header. Below 640 both buttons give way to the phone bar.
- **Status after a chip is chosen (SR, polite, JS):** `Tue 5:45 pm picked. Nothing is booked yet.`
- **Status when the chosen chip is pressed again, or Space is pressed on it, which clears it (SR, JS):** `No time picked.`
- **Status when a chosen time passes (SR, JS):** `That time has passed. Pick another.`
- **Not used:** the hours fact `Open till 7:30 pm Tuesdays and Thursdays, and Saturday mornings.` (its place under the subhead went to the insurance line; the ticker, the FAQ and the closing band carry the hours), and the loading line `Getting times.` (`page.js` draws the chips at once and has no loading state).
- **Portrait alt:** see section 14.
- Note: the header lock-up puts FEAST DENTAL on the first screen. If the hero is ever shown without the header (an ad, a social crop), add the lock-up above the label.

---

## 3. Facts ticker

- **Region name (SR):** `Quick facts`
- **Pause control (JS):** `Pause` / `Play`
- **Fact 1:** `Book online any time` **[confirm]** (only if the scheduler works out of hours)
- **Fact 2:** `Evenings Tuesday and Thursday`
- **Fact 3:** `Saturday mornings too`
- **Fact 4:** `Price in writing first`
- **Fact 5:** `With insurance or without`
- **Fact 6:** `No lecture`
- **Fact 7:** `I draw what I see`
- **Fact 8:** `Raise a hand, I stop`
- **Fact 9:** `Hablo español` (`lang="es"`) **[confirm]** (delete if it is not true of the real dentist)
- **Bonus line (JS), added to the end of the list once the closing heading is 40% in view:** `You read the whole page. I like you already.`
- Note: no price, phone number or clock time is in the ticker. The interaction spec says those never move, and the ticker is the one thing on the page that travels. With motion off it is a still, wrapped list of all nine facts.

---

## 4. First visit in three steps

- **Heading (h2):** `Here’s how it goes.`
- **Step 1 title (h3):** `Book`
- **Step 1 body (26 words):** `Pick a time online for your first visit. Got insurance? Add a photo of your card when you book and we’ll check it before you come.` **[confirm]** (that the booking tool takes a card photo)
- **Step 1 caption:** `From your phone.`
- **Step 2 title (h3):** `Look`
- **Step 2 body (27 words):** `Tell me what you’ve stopped eating. That’s where I look first. Then a full exam, X-rays, and a regular cleaning if your gums are ready for one.`
  - The first sentence is bite slot 2, exactly as written in the brand core. Do not edit it.
- **Step 2 caption:** `75 minutes.`
- **Step 3 title (h3):** `You decide`
- **Step 3 body (19 words):** `I draw what I found and write down what each fix costs. Nothing gets added today without your yes.`
- **Step 3 caption:** `You keep the drawing.`
- **Line for anyone who has been away (11 words):** `Haven’t been in years? I went four without. You’re welcome here.` **[confirm]**
  - "I went four without." is the invented biography, its third appearance (section 7). It goes unless the real dentist's own story says the same; the line is then `Haven’t been in years? You’re welcome here.`
- **Button:** `Book online` (takes the chosen time). Hidden below 640, where the phone bar is already on screen.
- Not used: the price chip beside the button, `First visit $195 without insurance · 75 min` (taken out at 00:10 with the other repeated chip-and-button pairs, `.ops/qa/cold-read.md` tell 3; the hero and the Cost section carry the price).
- Note: the step numerals are `1`, `2`, `3`, and they are the only numbered list on the page. The three portion discs are decoration, hidden from screen readers.

---

## 4a. Food strip (between First visit and Services)

- **Group name (SR):** `Four food photographs`
- **Captions:** `Apple.` `Toast.` `Corn.` `Taco.`
  - A caption names the food and nothing else. No clock time: the pictures are generated, so a time would be an invented fact.
- **Alt text:** section 14.

---

## 5. Services in two lanes

- **Heading (h2):** `What I do, and what it costs.`
- **Designation, directly under the heading:** `Dr. Paloma Krenek, DDS • General Dentist`
  - Below 1024 the bullet is hidden and the line breaks after "DDS", so the designation stands on two lines.
  - Size rule: Texas 22 TAC §108.55(b) wants "General Dentist" directly after the name, in type no smaller than the largest used for the advertised services. The compliance review read the rule at the primary source and confirmed the sentence (`.ops/qa/compliance.md` section 0); how the Board applies it is unverified. The designation, the service words and the row prices share one size (`--fs-d2`, 72px at 1440; below 390 all three scale with the screen, so the designation keeps to two lines). **[confirm]** with dental counsel before launch.

**Lane one**

- **Lane name:** `Keep your teeth working`
- **Lane caption:** `Something hurts today? Book Emergency. If not, start with the first visit.` **[confirm]** ("today" only if emergency slots are held on every open day; otherwise `Something hurts? Book Emergency.`)

Each row is one link to booking (a placeholder in the demo). The action at the end of each description is part of that link and says what it books.

| Service word (h3) | Description | Action, at the end of the description | Price |
|---|---|---|---|
| `Checkups` | `Every visit after your first. An exam and a regular cleaning, 50 min. X-rays, when they’re due, are $60 more. If your gums need more, I show you why and price it first.` | `Book a checkup` | `from $145` |
| `Fillings` | `Tooth-colored. From $190 for a small filling. Bigger fillings and back teeth cost more. I draw the spot and price it before I start.` | `Book a look` | `from $190` |
| `Emergency` | `Something hurts or broke. $95 covers the look and an X-ray of that tooth. The fix is extra, and you get its price first.` | `Book Emergency` | `$95` |

**Lane two**

- **Lane name:** `Change how they look`
- **Lane caption:** `Only if you want to. If I’d leave it alone, I’ll say so.` **[confirm]** (the second sentence is a promise about her conduct)

| Service word (h3) | Description | Action, at the end of the description | Price |
|---|---|---|---|
| `Whitening` | `Trays to take home from $250, or done here in the chair from $450.` | `Book whitening` | `from $250` |
| `Aligners` | `Start with a 3D scan and a plain answer on cost and time. The consult and the scan are $0 · 30 min. Treatment from $3,400, depending on how far the teeth have to move.` | `Book a $0 scan` | `from $3,400` |

- In the price column, "from" is set small in the text face, before the figure.
- **Sentence under both lanes (38 words):** `Every price here is without insurance and good through June 30, 2027. “From” is the lowest fee for that service. Yours can be higher, depending on the treatment you need. You get a written estimate before any treatment.` (**Demo value:** the date. **[confirm]**)
- Flags for the practice:
  - **Demo value:** `$60` for X-rays when they are due. **[confirm]** the real fee.
  - **[confirm]** What moves each whitening price. Texas wants the basis of each "from" price (`.ops/qa/compliance.md` M2c); the demo dropped the bracket that asked for it.
  - **[confirm]** `$0` for the aligner consult and scan, and "Book a $0 scan" (and the $0 consult offer in the JSON-LD, whose bracketed note said the same until 00:26), print only if nothing from the consult or the scan is billed to a plan or folded into a later fee. If anything is, print the real price. Never the word "free". Whether a free scan counts as a gift under §108.58(a) is a question for counsel (`.ops/qa/compliance.md` section 4, Aligners row).
  - **[confirm]** Aligner brand (printed nowhere; the JSON-LD bracket that asked for it was removed at 00:26), and that treatment does start from $3,400.
  - **[confirm]** A "seen the same day" line may be added to Emergency only if it is true. It is not written here.
  - Each service word is a single unbroken word, so it can open wide. "Emergency" is singular to keep the longest word at nine letters.
  - Five rows, not six. The brand core prices five services and does not confirm bonding or veneers, so no sixth row is invented.
  - Aligners show "from $3,400" large and keep the $0 consult in the description: a large "$0" would read as the offer this voice refuses to make (`brand/02-visual-system.md` 5.7).

---

## 6. Comfort

- **Heading (h2):** `Nervous is normal here.`
- **Photograph:** Dr. Paloma Krenek seated at eye level (alt text in section 14). No caption.
- **Body (three sentences, 22 words):** `Say so at the door and I slow down. I tell you what’s next before I do it. You set the pace.`
- **Comfort menu label:** `What helps`
- **Menu item 1:** `Raise a hand and I stop` **[confirm]**
- **Menu item 2:** `Breaks whenever you ask` **[confirm]**
- **Menu item 3:** `Headphones` **[confirm]**
- **Menu item 4:** `Something to watch` **[confirm]**
- **Menu item 5:** `I explain the numbing before I start` **[confirm]**
  - Print only the items the practice really offers. If fewer than four survive, drop the label and fold what is left into the body.
- **Secondary link:** `Text us a question` **[confirm]** (opens a text; `Call with a question` and a phone link if texts are not answered)
- **Line under the link:** `Texts aren’t private and aren’t for emergencies. For anything urgent, call.`
- **Motion control, default (JS):** `Stop the motion`
- **Motion control, after it is pressed (JS):** `Start the motion`
- **Motion state line, shown only while motion is off:** `Motion is off.`
- **Explanation beside the control (14 words):** `Like raising a hand in the chair. Press it and the page holds still.`
- Note: the control and its explanation appear only with the script, and are hidden when the visitor's system already asks for reduced motion (a "Stop the motion" button would then have nothing to stop). The label swaps, so `aria-pressed` is not set. The choice is kept in `localStorage` under `motion`, which the privacy page must mention.

---

## 7. Meet the dentist

- **Heading (h2):** `I’m Paloma.`
  - "Paloma." is the single word that chews once.
- **Bio (four sentences, 49 words):** `I’m a general dentist, and I opened Feast Dental on the east side in October 2026. In college I went four years without a cleaning. I had no insurance and I was scared of the bill. So you won’t get a lecture from me about how long it’s been.`
  - **[confirm]** The second and third sentences are invented biography. Replace them with the real dentist's own story (research §7, question 20). The line under the steps (section 4) and FAQ answer 3 lean on the same fact.
- **Pull line (bite slot 1, exactly as written, once), set beside the drawing photograph:** `Teeth are for biting. I keep them at it.` (a line break between the two sentences)
- **Photo caption, drawing at the chair:** `The pad. The marker.`
- **Designation, under the pull line and photograph (bold):** `Dr. Paloma Krenek, DDS · General Dentist`
- **Photo caption, portrait holding the apple:** `Paloma. Apple.`
- **[confirm]** The pad and marker, the first question ("Tell me what you’ve stopped eating", section 4) and the written price are the dentist's own habits in the brand core. Each must be true of the real dentist.
- Still-life captions elsewhere on the page follow the same literal pattern: the food and a full stop. `Apple.` `Toast.` `Corn.` `Taco.` `Peach.`
- Not used:
  - The how-I-work list (SR name `How I work`): `I ask first.` / `One question, and your answer tells me where to look.`; `I draw it.` / `You see the tooth and the fix on paper.`; `I price it in writing.` / `The number comes first, then the work.` It repeated steps two and three and the promises (`.ops/qa/cold-read.md`, tell 3).
  - **Add at launch:** the second credentials line, `DDS, [dental school, year] · [university, year] · [number] years as an associate dentist at [two Austin-area practices]`. These name real-world records, which the brand core says must not be guessed, so the demo leaves them out and the footer's demo note covers it. **[confirm]** At launch the real school, university, years and practices go back here, at body size.
  - `Paloma. Apple. 4:10 pm.` Add a clock time only with a real photograph, and only the time it was taken.

---

## 8. No reviews yet

- **Heading (h2), display part:** `0` `reviews.`
  - The "0" is its own span and opens wide once.
- **Heading, continued (a smaller deck inside the same h2):** `I opened in October 2026. Here’s what I promise instead.`
  - From 1024 the deck breaks before "Here’s".
  - The day there is a real rating, replace the heading with the true rating and count, however small. The compliance review's form: `[N] Google reviews so far. I opened in October 2026. Here’s what I promise.` (`.ops/qa/compliance.md` M10).
- The promises are a ruled, unordered list without numerals.
- **Promise 1 heading (h3):** `No lecture.`
- **Promise 1 sentence:** `I’ll ask when you last came in, and there’s no wrong answer.`
- **Promise 2 heading (h3):** `The price in writing.`
- **Promise 2 sentence:** `Every fix and its price, on paper, before I start. I add nothing without your yes.`
- **Promise 3 heading (h3):** `I stop when you say.`
- **Promise 3 sentence:** `A raised hand is enough.`
- **Promise 4 heading (h3):** `Look me up.`
- **Promise 4 sentence (11 words):** `My Texas license is public on the state dental board’s site.` **[confirm]** (a real licence in good standing). **Add at launch:** the Texas licence number, with the words linked to the Board's public lookup.
- **Invitation:** `Come in, then tell people how it really went.`
- **Invitation link:** `Feast Dental on Google` **[confirm]** (the practice's real Google profile; a placeholder link in the demo)
  - Not used: `Write a Google review` (it asks someone who has not been in yet to write a review).
- Note: no incentive is offered and none may be added. The invitation asks for what happened, not for praise.

---

## 9. Cost and insurance

- **Heading (h2):** `You’ll know the cost first.`
- **Switch name (SR):** `Do you have dental insurance?`
- **Switch label one:** `With insurance`
- **Switch label two (the default in the demo):** `No insurance`
  - **[confirm]** which one a live page starts on. The first draft made "With insurance" the default; the demo starts on "No insurance", which matches the hero's "$195 without insurance".
- **With insurance block (51 words):** `Add a photo of your card when you book. We’ll check your plan and tell you whether we’re in-network, and what out-of-network would cost, before you come. What we tell you is an estimate from your plan, not a promise from your insurer. You still pay your plan’s deductible and copay.`
  - Name no carrier until the practice's contracts are confirmed. Never "all insurance", never "accepted as full payment", never that a copay is waived. Do not print "covered" or "$0" for an insured first visit until confirmed.
  - **Add at launch:** the in-network plans by name (the compliance review's opening, `We’re in-network with [each plan by name].`, can return with the real names, here and in FAQ 2).
  - **[confirm]** The out-of-network policy the second sentence promises, and that the booking tool takes a card photo.
- **No insurance block (58 words):** `The first visit is $195. That’s a full exam, the X-rays you need and a regular cleaning. You leave with a written plan and a price for anything else. If your gums need more than a regular cleaning, the fee is higher, and I show you why and price it in writing first. Good through June 30, 2027.`
  - **Demo value:** the date. **[confirm]** the real date; what a deeper cleaning costs and what the $195 covers on a day the gums need one (the persona walkthrough's open question, #3); and if $195 is an introductory price, the regular fee, who qualifies and the end date.
- **Written-estimate promise, set large:** `You get a written estimate before any treatment. Insured or not.`
- **Designation, under the promise:** `Dr. Paloma Krenek, DDS · General Dentist`
- **Primary button:** `Book online` (takes the chosen time; hidden below 640)
- **Secondary button:** `Check my insurance` **[confirm]** (a placeholder link in the demo; whatever it opens collects plan details, so a secure form or a vendor under a business associate agreement, with the privacy notice linked)
- **Price chip (a label here, not a link):** `First visit $195 without insurance · 75 min`
  - Hidden, keeping its place, while "With insurance" is chosen: it is the uninsured price. Below 390 it drops ` without insurance ·` to fit: `First visit $195 75 min`.
- **Caption under the drawing:** `Fillings from $190.`
- **Financing line. Not used:** `[Financing: partner and terms to confirm.]` It stays off the page until both are known. The same goes for any membership plan.
- Note: nothing in this section moves. The switch is a one-frame swap, and both panels share one space, so the page below never jumps.

---

## 10. Find us

- **Heading (h2):** `We’re in Holly, East Austin.`
- **Storefront photo caption (21 words):** `The front door, 2217 Tejocote Street. Stand-in photo; parking, the nearest bus stop and the entrance are still to be confirmed.` **[confirm]** (parking, the nearest bus stop, and whether the entrance is level; say "level" or "step-free" only once it is checked)
- **Status beside the large dot (JS):** the same line as the header's long form, for example `Open now till 7:30.`
- **Hours table caption:** `Hours`
- **Hours table:**

```text
Mon   8 am to 5 pm
Tue   11 am to 7:30 pm
Wed   8 am to 5 pm
Thu   11 am to 7:30 pm
Fri   8 am to 2 pm
Sat   9 am to 1 pm
Sun   Closed
```

- **Marker on today's row (JS):** `Today`
- **Address:** `2217 Tejocote Street` / `Austin, TX 78702`
- **Spanish line (`lang="es"`):** `Hablo español. Llama o manda un mensaje al (512) 555-0142.` **[confirm]**
  - Keep "Hablo español" only if the treating dentist speaks Spanish with patients, and the second sentence only if the phone and text line are answered in Spanish. If staff speak it and the dentist does not: `Hablamos español.`
- **Links:** `Get directions` (a placeholder link in the demo) · `Call (512) 555-0142` · `Text us` **[confirm]** (texts answered)
- Not used: the map image and its alt text, `Map with a pin on Feast Dental at 2217 Tejocote Street, in the Holly neighborhood of East Austin.` There is no map, because the street is fictional.

---

## 11. FAQ

- **Heading (h2):** `Go ahead, ask.`
  - From 1024 the heading takes columns 1 to 4 and the list columns 5 to 12. No photograph, no button and no price chip follow the list.

1. **Question:** `What does a first visit cost without insurance?`
   **Answer (53 words):** `$195 at Feast Dental in East Austin, and it takes 75 minutes. That covers a full exam, X-rays, a regular cleaning, and a written plan with prices. If your gums need more than a regular cleaning, the fee is higher, and I show you why and give you the price in writing first.`
   - Not used: the cold read's shorter opening, `$195, and it takes 75 minutes.` (`.ops/qa/cold-read.md`, tell 6; not applied "for brand-voice and SEO reasons", `.ops/session.jsonl`, QA round 7; the SEO review's A4 asks for an answer that stands on its own).
2. **Question:** `Do you take my insurance?`
   **Answer (51 words):** `Add a photo of your card when you book. We’ll check your plan and tell you whether we’re in-network, and what out-of-network would cost, before you come. What we tell you is an estimate from your plan, not a promise from your insurer. You still pay your plan’s deductible and copay.` **[confirm]** (as the insured block, section 9, which it matches word for word)
3. **Question:** `I haven’t been in years. Is that a problem?`
   **Answer (20 words):** `No. I’ll ask when your last visit was, and there’s no wrong answer. I went four years without one myself.` **[confirm]** (the last sentence is the invented biography; without it the answer ends at "no wrong answer.")
4. **Question:** `What if I’m scared of the dentist?`
   **Answer (22 words):** `Say so when you walk in. You set the pace from there, and you can text us a question before you book.` **[confirm]** (the text line is read)
5. **Question:** `Will it hurt?`
   **Answer (41 words):** `Sometimes, a little. The numbing is a pinch, and you can be sore afterward. I numb the area first and check it’s working before I start. I tell you what’s next before I do it. Raise a hand and I stop.` **[confirm]** (clinical wording, for the dentist to approve)
6. **Question:** `How long is the first visit?`
   **Answer (24 words):** `75 minutes. That’s the exam and X-rays, a regular cleaning if your gums are ready for one, and time to go over the plan.`
7. **Question:** `Does whitening hurt?`
   **Answer (25 words):** `It can make teeth sensitive, usually for a few days. I check yours first and tell you what to expect. You can stop any time.` **[confirm]** (clinical wording, for the dentist to approve)
8. **Question:** `What does a filling cost without insurance?`
   **Answer (28 words):** `From $190 for a small tooth-colored filling. Bigger fillings and back teeth cost more. I draw the spot and give you the price in writing before I start.`
9. **Question:** `What does an emergency visit cost?`
   **Answer (43 words):** `$95 covers the look and an X-ray of that tooth. The fix is extra, and I price it before I start. After hours, call or text the same number. If your face is swelling or it’s hard to breathe or swallow, call 911.`
   - **Demo value:** "call or text the same number". **[confirm]** what a caller or texter reaches after hours on the practice line (an answering service, an on-call dentist, a recorded message or auto-reply with an emergency route). It must agree with the phone bar, which offers "Text us" while the practice is closed (`TEXTS_ANSWERED` in `page.js`).
10. **Question:** `Are you open evenings or Saturdays?`
    **Answer (15 words):** `Yes. Tuesdays and Thursdays till 7:30 pm, and Saturdays from 9 am to 1 pm.`
11. **Question:** `What if I need to cancel?`
    **Answer (25 words):** `Call or text as soon as you know and we’ll find you another time. Cancel by 5 pm the day before and there’s no fee.`
    - **Demo value:** the whole cancellation policy. **[confirm]** the real one. If a late-cancel or no-show fee exists, the amount goes here and at booking (`.ops/qa/compliance.md` S10).

- One answer is open at a time.
- Not used: the Book button and price chip after the last answer, and the laughing portrait beside the list (`paloma-laughing`, alt `Dr. Paloma Krenek laughs, looking off to one side.`). Both were taken out at 00:10 (`.ops/qa/cold-read.md`, tells 2 and 3).

---

## 12. Closing band

- **Restatement (h2), three lines:** `No lecture.` / `Price in writing.` / `Come in.`
  - "Come in." is the no-wrap phrase that opens wide once and stays wide.
- **Primary button:** `Book online` (takes the chosen time)
- **Secondary button:** `Call (512) 555-0142`
- **Price chip, a link to Cost:** `First visit $195 without insurance · 75 min`
  - SR, read after the visible text: `. What it covers.` Below 390: `First visit $195 75 min`.
- **Send-off, after the buttons (bite slot 3, exactly as written):** `Then go bite something.`
  - It does not animate. The welcome gets the type move, the send-off stays small.
- **Hours line:** `Open Monday to Saturday. Till 7:30 pm Tuesdays and Thursdays.`
- **Photo caption:** `Peach.`

---

## 13. Footer

- **Lock-up:** `Feast Dental`
- **Column 1, heading:** `Find us`
  - `2217 Tejocote Street` / `Austin, TX 78702`
  - Link: `Hours and directions`
- **Column 2, heading:** `Call or text`
  - Links: `Call (512) 555-0142` · `Text us` **[confirm]** · `Book online` (a placeholder booking link; it keeps this label after a time is chosen)
- **Column 3, heading:** `Hours`
  - `Mon, Wed 8 to 5` / `Tue, Thu 11 to 7:30` / `Fri 8 to 2 · Sat 9 to 1` / `Sun closed`
  - The hours are written in four places: the JSON-LD (which the script reads), the table in Find us, this column, and the prose lines (ticker, FAQ 10, closing band). Edit them together.
- **Column 4, heading:** `The dentist and owner`
  - `Dr. Paloma Krenek, DDS` / `General Dentist`
  - **[confirm]** She is the sole owner (otherwise name every owner). **Add at launch:** the Texas licence line, `Texas dental license no. [number]` (not used in the demo).
- **Legal line (14 words):** `© 2026 Feast Dental. Owned and run by Dr. Paloma Krenek, DDS, General Dentist.` **[confirm]**
  - **Add at launch:** the legal entity (PLLC), and a line saying who owns the website (22 TAC §108.59; `.ops/qa/compliance.md` M5). The compliance review's wording, not used in the demo: `© 2026 [Legal entity, PLLC], doing business as Feast Dental. Owned by Dr. Paloma Krenek, DDS, General Dentist. This website is owned and run by [Legal entity, PLLC].` Also confirm that the trade name is on file with the Board and renewed with the licence.
- **Demo note (24 words):** `Demo page. The practice, the dentist and her story are invented. The photographs are AI-generated. The prices, hours, phone number and address are placeholders.`
  - Delete it, with the demo strip, once the page describes a real practice with real photographs. It now also covers the credentials, licence and legal entity the demo leaves out.
- **Links:** `Privacy` · `Accessibility` (placeholders in the demo; real pages before launch)
- **Motion control, text button (JS):** `Stop the motion` / `Start the motion`
- **Cookie button, visible label:** none. The disc is the control.
- **Cookie button name (SR):** `Cookie. Take a bite.`
  - Not visible, so it does not spend a bite slot (brand core Part 5: only a visible label would). If the build ever shows this text, cut the send-off in section 12 or change this to `Cookie`.
- **Cookie status after each press (SR, polite, JS):** `One bite.` `Two bites.` `Three bites.` `All gone.` `Fresh cookie.`
- **Cookie caption (JS shows it):** `The only cookie on this site.` **[confirm]**
  - True only if the page sets no cookies. Today it sets none; the "Stop the motion" choice is a `localStorage` value, not a cookie. An embedded scheduler, map or analytics tag may set them. If one does, cut the caption.
- Not used: the first draft's demo note, `Demo page. The names, prices, hours, phone number and address are invented.`, and its disclosure line, `Dr. Paloma Krenek, DDS · General Dentist. Texas license [number to confirm].`

---

## 14. Image alt text

Say what is in the frame, in one plain sentence, as you would to someone on the phone. Name the person where there is one. No "image of" or "photo of". No guess at age or ethnicity. Name colors a listener would recognize (dark brown, orange), not the brand's token names (ink, tangerine). No prices, slogans or keywords, with one exception: words written in the picture itself are repeated in its alt text (the drawing's "filling, $190"). A still life that repeats as decoration, with no caption, gets an empty alt; every food picture on this page has a caption, so each has alt text.

Alt text is not visible, so the words "bite" and "eaten" here do not count against the limit of three. They are the honest description of the pictures.

| Image (section) | Alt text as built |
|---|---|
| `paloma-hero`, and its `paloma-hero-band` crop below 1024 (hero) | `Dr. Paloma Krenek in dark brown scrubs looks straight at the camera with a closed-mouth smile. She has shoulder-length dark wavy hair and tortoiseshell glasses.` |
| `bite-apple` (food strip) | `A green apple with one bite out of it.` |
| `bite-toast` (food strip) | `A thick slice of buttered toast with one bite out of the corner.` |
| `bite-corn` (food strip) | `A grilled ear of corn with a row of kernels eaten off the top.` |
| `bite-taco` (food strip) | `A breakfast taco of egg, potato and cheese on a flour tortilla, half unwrapped from foil, with one bite out of it.` |
| `paloma-listening` (comfort) | `Dr. Paloma Krenek sits on a stool at eye level with her hands folded, looking at the camera.` |
| `paloma-apple` (meet the dentist) | `Dr. Paloma Krenek holds up a green apple with one bite out of it and looks at the camera with a small closed-mouth smile.` |
| `paloma-drawing` (meet the dentist) | `Dr. Paloma Krenek sits on a stool beside the dental chair, sketching a tooth on a pad on her knee with a black marker.` |
| `the-drawing` (cost) | `A marker sketch of a tooth in cross-section on a spiral pad. One spot is circled, with an arrow to a handwritten note that reads: filling, $190.` |
| `storefront` (find us) | `A cream painted-brick wall with one orange-framed glass door and the number 2217 beside it.` |
| `bite-peach` (closing band) | `A peach with one bite out of it and a drop of juice running down the skin.` |
| social card (head) | section 0 |

One `<picture>` has one alt, so the hero's alt describes only what both crops show (the band below 1024 is head and shoulders). Rewrite every one against the real photographs, and have the person described approve hers.

Not used:

- `paloma-laughing` (taken out of the FAQ at 00:10; section 11 keeps its alt text).
- The hero's first built alt, `Dr. Paloma Krenek stands in dark brown scrubs with the sleeves pushed up, looking straight at the camera with a closed-mouth smile. She has shoulder-length dark wavy hair and tortoiseshell glasses.` (the sleeves are not in the band crop).
- The first draft's models: `Dr. Paloma Krenek, a woman in her early thirties with dark wavy hair to her collarbone and large dark glasses, in ink-colored scrubs with the sleeves pushed up, looking straight at the camera and starting to grin, against a flat tangerine backdrop.` and `A red apple with one clean bite out of its upper right side, lit by direct flash on a flat lime backdrop.`

---

## Conflicts between sources, and the call made

1. **Price in the hero.** Research §4d puts the price in the cost section and FAQ for a practice that takes insurance. The brand core and the creative direction put it in the hero. Followed the brand core (the later decision), with the footnote on the same screen.
2. **"A cleaning" stated flat.** The brand core's subhead and its sample money line promise "a cleaning". Its own caveat (Part 4) and the compliance rule that every claim be provable (research §6) say a regular cleaning happens only when the gums allow. Followed the compliance side: the subhead does not promise a cleaning, and everywhere else the page says "a regular cleaning" with its condition.
3. **Header status wording.** The interaction spec drafts "Open now · until 7:00 pm". The brand core fills the slot with "Open now till 7:30." Used the brand core line and kept the spec's rule of clock times and a next-opening time when closed.
4. **Night line by day.** "Booking’s open all night" would be untrue to the eye at 9 am on a Tuesday, when the practice is closed until 11. It is limited to night hours, and a daytime closed line was added. At night the phones' short form says it too (the first draft gave phones only the opening time): `brand/03-interaction-spec.md` §6 says "Cut the dot if you must, never the text", and the persona walkthrough (#1) sided with it.
5. **Motion control labels.** The spec's pressed label is "Motion is off. Turn it back on" with `aria-pressed`. The brand core gives "Stop the motion" / "Start the motion". Used the brand core pair and kept "Motion is off." as a separate state line.
6. **Cookie label.** The spec names the button "Cookie. Take a bite." The brand core says a visible label of that kind spends bite slot 3. Kept it as a screen-reader name only.
7. **Ticker content.** The brief asks for true facts, and the spec says prices, phone number and hours never animate. The ticker therefore carries no price, no phone number and no clock time.
8. **Trust strip.** Research §4b suggests "Most PPO plans accepted" and "New patients welcome" under the hero buttons. Not used: no plan is confirmed, and the voice guide bars "patients". The first-visit plate and the chips do that job, and the insurance line under the subhead now speaks to the insured visitor without naming a plan.
9. **Title tag.** Brand core Part 2e and the first draft set the 70-character `Feast Dental | General dentist in East Austin | Dr. Paloma Krenek, DDS`. The SEO review (A2) showed titles that long are nearly always rewritten, often to the h1. Followed the SEO review; brand core Part 2e now quotes the built title.
10. **Header button label.** The first draft asked for the header and bottom-bar buttons to carry the chosen time. The header button stays "Book online" because the longer label pushed the header off screen at 1024 (`.ops/qa/design-review.md` 1; `.ops/qa/code-review.md` section 3). The bottom bar and every in-page button do carry it.
11. **Insurance switch default.** The first draft defaults to "With insurance". The build starts on "No insurance" (approved in `.ops/qa/design-review.md` section 2; the persona walkthrough, #2, calls the copy right for launch and the build right for a demo whose insured panel is placeholders). Left for the practice to settle (section 9).
12. **Placeholders on the page.** The brand core (Part 4) brackets facts "that must not even be guessed", and the first draft printed them. The cold read ranked visible brackets as the page's most generated-looking feature (`.ops/qa/cold-read.md`, tell 1). The 00:10 build follows the cold read: facts of a kind the page already invents became demo values, facts that name real-world records (school, licence, legal entity) were taken out and left to the footer's demo note. Every one is still flagged here.

---

## Checklist (re-run on the built page, 2026-11-09)

Method, stated plainly: a script read `index.html` (the 00:10 save, then the 00:19 and 00:26 saves) and listed every text node in the body, classed as visible, screen-reader-only (inside `.visually-hidden`), hidden from screen readers (`aria-hidden`) or `<noscript>`, plus every `alt`, `aria-label` and meta `content`. The strings in `assets/js/page.js` were read from the source by hand. The two patterns below were run over the visible text with word boundaries, so that "stop" does not match "top" and "treatment" does not match "eat". Nothing was rendered in a browser for this check.

```text
\b(bit(e|es|ing|ten)|chew\w*|crunch\w*|chomp\w*|munch\w*|gnaw\w*|eat\w*|ate)\b
\b(painless|pain-free|best|top|leading|guarantee\w*|perfect|flawless|specialist|free|reimagined|redesigned|different|spa|ritual|self-care|pamper|experience|journey|transformation|relax|affordable|investment|neglect|finally|overdue|patients?)\b
```

### Bite references: exactly three

| # | Line | Location |
|---|---|---|
| 1 | "Teeth are for biting. I keep them at it." | Section 7, meet the dentist, pull line |
| 2 | "Tell me what you’ve stopped eating." | Section 4, first visit, step two, first sentence |
| 3 | "Then go bite something." | Section 12, closing band, after the buttons |

The pattern found these three and nothing else in visible text. Looked at and not counted, with the reason:

- The cookie button name, the cookie status text and the alt text: not visible (brand core Part 5 counts visible sentences and excludes screen-reader status text). The food strip's group name, "Four food photographs", says nothing about eating.
- "The only cookie on this site." and the photo captions ("Apple." "Paloma. Apple." "Peach."): they name a food and say nothing about eating. Both forms are supplied by the brand core itself (Part 7, and the caption rule in Part 5).
- The name Feast Dental: excluded by the brand core, and never used as a verb here.
- The words "bite", "chew" and "open wide" in this file's notes are instructions to the builder, not page copy.

### Banned words

None in the visible text. No exclamation mark, em dash, en dash or emoji in any visible line, and no straight apostrophe. Removed while drafting, and still absent:

- "step-free" in the getting-there placeholder (contains "free"): the caption now says "the entrance".
- "a straight answer" beside Aligners (a tooth pun): now "a plain answer".
- "a different time" in the cancel answer: now "another time".
- "like most people" in the scared answer (a statistic the public cannot check): cut.
- "a few shades" beside Whitening (an expectation about results): cut.
- "in two minutes" for booking (a number not in the brand core): cut.
- "New patients" as a label: the page says "First visit".

Also checked: the first draft had one question-style opener in body copy; the build has four ("Insured?", "Got insurance?", "Haven’t been in years?", "Something hurts today?"), each added for a reason in the changes table, besides the FAQ's own questions. No carrier, school or real person is named. No review, rating, count of people or award is invented ("0 reviews" is the brand core's slot line and is true of a practice with none).

### Every number, traced

| Number in the copy | Where | Source |
|---|---|---|
| $195 | Hero plate, Cost (no-insurance block), the two price chips (Cost, closing), FAQ 1, JSON-LD | Brand core Part 4, first visit |
| 75 min, 75 minutes, 75-minute | Meta, og, hero plate, step 2 caption, price chips, FAQ 1, FAQ 6 | Part 4, first visit |
| from $145 · 50 min | Checkups | Part 4, from-prices |
| $190 | Fillings row, Cost caption, the drawing, FAQ 8 | Part 4, from-prices |
| $95 | Emergency row, FAQ 9 | Part 4, from-prices |
| from $250, from $450 | Whitening | Part 4, from-prices |
| $0 · 30 min, from $3,400, 3D | Aligners | Part 4, from-prices |
| 8 am, 5 pm, 11 am, 7:30 pm, 2 pm, 9 am, 1 pm | Header states, hours table, FAQ 10, closing line, footer column | Part 4, hours |
| Monday to Saturday | Closing line | Part 4, hours (Sunday closed) |
| (512) 555-0142 | Header, hero button, Find us (Spanish line and links), closing button, footer | Part 4, phone |
| 2217 Tejocote Street, Austin, TX 78702 | Find us caption and address, footer | Part 4, address |
| October 2026, 2026 | Bio, section 8 heading, footer © | Part 4, opened October 2026 |
| four years, four | Bio, FAQ 3, line under the steps | Part 3, bio |
| 0 reviews | Section 8 | Part 7, slot line |

Numbers that do not come from the brand core, and why they are there:

- `June 30, 2027` (hero footnote, Services note, Cost panel; `2027-06-30` in the JSON-LD), `$60` (X-rays at a checkup) and `5 pm the day before` (FAQ 11): demo values written in place of bracketed placeholders (`.ops/qa/cold-read.md`, tell 1). All flagged **[confirm]**.
- `911` in FAQ 9: the emergency line for swelling or trouble breathing or swallowing (`.ops/qa/compliance.md` S8).
- `6:42 pm` in the chips caption: the sample time in the interaction spec §3. The build writes the real clock time.
- `Tue 5:45 pm`, `Wed 8:00 am`, `Thu 5:30 pm`: sample chips, each inside the Part 4 hours. The build generates the real set.
- `Opens 11 am`, `Opens Tue 11 am`, `till 5`, `till 2`, `till 1`: examples of the status pattern, each from the Part 4 hours.
- The night window (7:30 pm to 6 am) and the 45-minute lead on today's chips are rules in the script, not copy.
- The footnote number and the step numerals.

### Every bracketed placeholder

Printed on the demo page: none, counted by script on the 00:10, 00:19 and 00:26 saves. The JSON-LD in the head holds its own (section 0).

What happened to the 21 that the 23:47 save printed (`.ops/qa/cold-read.md`, tell 1):

| Was | Where | Now |
|---|---|---|
| `[Month D, YYYY]` (three) | Hero footnote, Services note, no-insurance panel | Demo value `June 30, 2027` |
| `$[amount]` | Checkups | Demo value `$60` |
| `[What moves the price: to confirm.]` | Whitening | Cut |
| `[What a deeper cleaning costs, and what the $195 covers that day: to confirm.]` | No-insurance panel | Cut |
| `[dental school, year]`, `[university, year]`, `[number]`, `[two Austin-area practices]` | Credentials, section 7 | The whole second line cut |
| `[dental school, year]`, `[number]`, `[number to confirm]` | Promise 4 | Sentence rewritten without them |
| `[each plan by name]` (two) | Insured panel, FAQ 2 | Both answers rewritten without a plan list |
| `[Parking, nearest bus stop and level entrance: to confirm]` | Storefront caption | Folded into the caption in plain words |
| `[number]` (after hours) | FAQ 9 | Demo value "call the same number", "call or text the same number" since 00:26 |
| `[Cancellation policy to confirm.]` | FAQ 11 | Demo value "Cancel by 5 pm the day before and there’s no fee." |
| `[number]` (licence) | Footer column 4 | Cut |
| `[Legal entity, PLLC]` (two) | Footer legal line | Line rewritten without the entity |

Flags that do not print (each marked **[confirm]** above).

**Demo values, still to be confirmed by a real practice** (written in place of brackets at 00:10; flagged here, not on the page):

- "Good through June 30, 2027": hero footnote, uninsured panel, Services note, and `priceValidUntil` `2027-06-30` on every offer in the JSON-LD.
- X-rays at a checkup, "$60 more".
- "Cancel by 5 pm the day before and there’s no fee." (FAQ 11).
- "After hours, call or text the same number." (FAQ 9).

**Add at launch, only with real records** (removed from the page at 00:10):

- Dental school and year (and the university and year).
- Years in practice as an associate dentist.
- Previous practices.
- The Texas licence number (footer column 4 and promise 4, linked to the Board's lookup).
- The legal entity (PLLC) and who owns the website (footer legal line).
- The named in-network plans (insured panel and FAQ 2).

**Everything else to confirm:**

- "Text us", "Text us a question", the closed-hours "Text us" bar button, and every "Call or text" left in plain text (the no-times line, the FAQ cancel answer, the footer column heading): only if the line is monitored for texts (`TEXTS_ANSWERED` in `page.js`).
- "Book online" target: the scheduler is not chosen. "Book online any time" and "Booking’s open all night" need it to work out of hours (`BOOKING_OPEN_ALL_NIGHT` in `page.js`).
- That the booking tool takes a card photo (hero insurance line, step 1, insured panel, FAQ 2), and what "Check my insurance" opens.
- "Hablo español" in the ticker, and the Spanish line in Find us.
- All five comfort menu items.
- The `$0` aligner consult and "Book a $0 scan", the aligner brand, the from-price for treatment, what moves each whitening price, any same-day line for emergencies, and "today" in the lane one caption.
- Whether $195 is the standing fee or an introductory one; what a deeper cleaning costs.
- The out-of-network policy the insured panel promises; any membership plan; financing.
- Which insurance option the switch starts on.
- The invented biography (bio sentences two and three, "I went four without.", the last sentence of FAQ 3), and the dentist's habits (asks first, draws, prices in writing).
- Lane two's "If I’d leave it alone, I’ll say so." (a conduct promise).
- The clinical wording of the "Will it hurt?" and whitening answers.
- Parking, the bus stop and the entrance under the storefront.
- The Google profile link, and the swap to a real rating when one exists.
- Sole ownership, and the trade name on file with the Board.
- The cookie caption (true only with no cookies set).
- The Texas size rule for "General Dentist" in the hero lock-up and in Services.
- Every Part 4 fact: name, address, phone, hours, prices.

### Reading level

Not re-run on the built copy. The first draft's figure, for what it is worth: about grade 4, worked by hand on a 121-word sample (the hero subhead, the comfort body, step two and the bio). The built copy has more disclosure sentences ("depending on the treatment you need", "an estimate from your plan, not a promise from your insurer"), so it will score higher. Run it through a tool before launch.

### Word count of visible copy

Counting rule (mechanical, not the first draft's hand rule): every visible text node in the body of `index.html`, counted once, split on spaces. Included: both insurance panels, every FAQ answer, the demo strip, both header status spans ("Hours" twice), the phone bar, and lines the script only reveals (the chips caption, the stop control). Not included: the head, alt text, screen-reader text, `<noscript>`, and text the script writes (status lines, chips, labels after a choice, the bonus ticker line). A price, a clock time or the phone number may count as more than one word.

| Section | Words |
|---|---|
| Skip link and demo strip | 16 |
| 1. Header | 14 |
| 2. Hero | 125 |
| 3. Ticker (Pause tab included) | 34 |
| 4. First visit | 102 |
| 4a. Food strip | 4 |
| 5. Services | 238 |
| 6. Comfort | 84 |
| 7. Meet the dentist | 73 |
| 8. No reviews yet | 79 |
| 9. Cost and insurance (both panels) | 152 |
| 10. Find us | 81 |
| 11. FAQ (every answer) | 405 |
| 12. Closing band | 35 |
| 13. Footer | 99 |
| Phone bar | 3 |
| **Total** | **1,544** |

With the FAQ closed (347 words of answers), the insured panel hidden (51) and the motion-off line hidden (3), about 1,143 words are on the page at load. The first draft aimed at 650 to 900 and already ran over (915 on load by its own rule). The reviews added most of the rest: four FAQ questions, the fee disclosures in every priced row and panel, the insurance line and the footer columns; the 00:10 save took about 140 words back out. Each change is in the changes table with its reason. The first draft's cut list was not used. Its first cut was the old FAQ 1, 4 and 5: the SEO review asks to keep 1 and 5, because they are the literal search queries (`.ops/qa/seo.md` A4), and brand-voice E7 proposed cutting 4, which the build kept with new wording.

### Not checked

- Nothing was looked at in a browser for this reconciliation. Line breaks, orphans and the first-screen fit are the design and evidence reviews' measurements (`.ops/qa/design-review.md`, `.ops/qa/evidence.md`), taken on earlier saves of the page.
- The strings in `page.js` were read from the source, not watched in the page.
- The Texas rule text and the other rules were taken from `.ops/qa/compliance.md`, not read again.
- `.ops/qa/accessibility.md` was still being written while this file was reconciled and was not used as a source.
- The name and the dentist's name rest on the web searches described in the brand core, not on a trademark or licence check.

---

## Changes from the first draft, and why

One row per change from the first draft of this file (2026-11-09) to the page as saved at 00:26 on 10 November. Where a line changed twice, the row gives the final wording and both reasons. "Source" names the report the reason is recorded in; report paths are under `.ops/qa/` unless they start with another folder. "Reason not recorded" means no report or spec gives one.

| # | Where | Change | Why | Source |
|---|---|---|---|---|
| 1 | Title tag | `Feast Dental \| General dentist in East Austin \| Dr. Paloma Krenek, DDS` → `General Dentist in East Austin, TX \| Feast Dental` | 70 characters with two pipes sits in the band search engines rewrite most, and a rewrite falls back to the brand h1. The build kept a pipe where the review gave a dash; the review re-checked it and asked for no change | `seo.md` A2 and section 0 |
| 2 | Meta description | 148-character line with "$195 without insurance" → the 145-character line with no price | A price in a snippet carries no inclusions, gum condition or dates (compliance S4). Its replacement ran to 185 characters and lost "Book online" in the cut, so it was shortened | `compliance.md` section 4 (head) and S4; `seo.md` section 0, R1 |
| 3 | og:title | `Feast Dental \| General dentist in East Austin` → `Demo: General Dentist in East Austin, TX \| Feast Dental` | "Demo": text-only previews had no demo word. Matching the new title: reason not recorded (the SEO review said og:title could stay) | `compliance.md` section 6 and S13 |
| 4 | og:description | Headline, price and designation → `Demo page for a fictional practice. I don’t care how long it’s been. I care about what’s bothering you now. A 75-minute first visit, priced in writing first.` | Price out, as in the meta description; "Demo" added. Then the turn sentence added, because the headline must never travel without it. Dropping the name and designation: reason not recorded | `compliance.md` S4, section 6 and S13; `docs-reconcile.md` section 5, item 3 (brand core Part 6) |
| 5 | og:image alt | `…in dark scrubs on a tangerine backdrop…` → the card's own words (demo line, name, headline, designation), then `…in dark brown scrubs on an orange background.` | "Ink" and "tangerine" are brand tokens; said aloud they mislead. Words printed in a picture go in its alt | `research/04-inclusive-visuals-review.md` sections 3.6 and 4; `docs-reconcile.md` section 5, item 4 |
| 6 | og:site_name | Added: `Feast Dental` | Missing from the head | `seo.md` A5 |
| 7 | h1 note | Place name now in visible text (subhead, Find us heading) | "East Austin" appeared only in the head; geographic relevance is a top organic factor | `seo.md` A1 |
| 8 | Demo strip | Added above the header; "Dr. Paloma Krenek" → "its dentist" | The footer note alone was the last thing on the page and did not say the dentist or photos were not real. Wording: the only place her name stood without the designation | `research/04-inclusive-visuals-review.md` section 3.7, item 1; `brand-voice.md` E13 |
| 9 | Header status, phones, at night | `Opens Tue 11 am` → `Booking’s open all night` | At night a phone said nothing about booking being open; the line that does first appeared at y 8,560 of 12,211 | `persona-walkthrough.md` section 9, #1 |
| 10 | Phone bar, button two | `Call or text` → `Call` while open, `Text us` (a text link) while closed | "Call or text" links only opened the dialler, and at night dialled a closed practice | `persona-walkthrough.md` #7; `compliance.md` S7 |
| 11 | Header Book button | Takes the chosen time → always `Book online` | The longer label pushed the header off screen at 1024 | `design-review.md` 1; `code-review.md` section 3 |
| 12 | In-page Book buttons | Now all take the chosen time (first visit, Cost, closing) | After picking a time, "Book online" sat above "Book Tue 5:45 pm" | `persona-walkthrough.md` section 9, "Seen in passing" |
| 13 | Placeholder notices | Added (three lines); colon → full stop; "yet" dropped; shown for 10 seconds in a region that is always present | The notices themselves: reason not recorded in the reports. Wording. A region revealed and filled at once is not announced dependably, and 4.5 seconds was short | `brand-voice.md` section 4; `accessibility.md` A3 |
| 14 | Hero subhead | "a proper look" → "a real look" | British usage | `brand-voice.md` E1 |
| 15 | Hero subhead | "on the east side" → "in East Austin" | Place name in the first paragraph | `seo.md` A1 |
| 16 | Hero, under the subhead | Hours fact removed; `Insured? Add a photo of your card when you book and we’ll check your plan before you come.` in its place | The insured visitor had no answer on the first screen. Wording: the card goes in with the booking, if the booking tool takes an upload | `persona-walkthrough.md` #2; `compliance.md` M7 |
| 17 | Hero lock-up | Designation moved from beside her arm into the booking strip; GENERAL DENTIST and "$195" at one size | The 150px numeral against a 22px designation was the page's one open font-size question under §108.55(b); earlier, the label sat on her arm at 1280 to 1366 | `compliance.md` section 3.3 and M4; `design-review.md` 2 and addendum |
| 18 | Designation separator | `·` → `•` in the hero and Services | The display face's middle dot reads as a dash at that size | `design-review.md` 15; `brand-voice.md` F2 |
| 19 | Hero first-visit line | `First visit · 75 min · $195 without insurance` → label, numeral, `without insurance · exam, X-rays, regular cleaning` | What the price buys must sit with the price | `compliance.md` M2a |
| 20 | Hero footnote | Added "the fee is higher", "in writing" and a date, first `Good through [Month D, YYYY].`, then `Good through June 30, 2027.` | Texas price advertising wants the dates and that the fee can rise. The bracket then became a demo value: visible brackets read as an unfinished template | `compliance.md` section 1 item 1, M2a; `cold-read.md` tell 1 |
| 21 | Chips caption | ` CT` after the time for visitors in another zone | Reason not recorded | (none) |
| 22 | Chips loading line | `Getting times.` not used | Reason not recorded | (none) |
| 23 | Chip status | Added `No time picked.` | Pressing the chosen chip again clears it, and the line says so. The click behaviour: reason not recorded. Space now does the same, because a keyboard user could not clear a choice. Wording approved | `brand-voice.md` section 4; `accessibility.md` B1 |
| 24 | Hero secondary button | `Call or text (512) 555-0142` → `Call (512) 555-0142`; `Call` alone from 1024 to 1439 | The link only dialled. The short form because the number is in the header | `compliance.md` S7; `design-review.md` addendum; `brand/02-visual-system.md` 6.1 |
| 25 | First visit heading | `Here's your whole first visit.` → `Here’s how it goes.` | At 104px it named the service in type larger than the 72px designation. The SEO review's `Here’s how your first visit goes.` was not used | `compliance.md` section 1 item 2 and 3.3; `seo.md` section 0, R2 |
| 26 | Step 1 body | "If you have insurance, send a photo…" → "Got insurance? Add a photo of your card when you book…" | "17 words in the first step"; the card-photo channel was unnamed. "for your first visit" added: reason not recorded | `brand-voice.md` E8; `compliance.md` M7 |
| 27 | Line under the steps | Added "I went four without." | The story that warms the headline was six phone screens down | `persona-walkthrough.md` #6 |
| 28 | Price chips | Two remain, in Cost and the closing band, each reading "First visit $195 without insurance · 75 min"; the closing one links to Cost. The first-visit and FAQ chips were added, then taken out | "without insurance": the chip referred to a fee without its condition, and the link leads to the terms. The SR suffix ". What it covers.": reason not recorded. Taken out: a chip-and-button pair after every section read as a component kit restating itself | `compliance.md` M2d (option 2); `brand/02-visual-system.md` 6.11; `cold-read.md` tell 3 |
| 29 | Price chips below 390 | " without insurance ·" hidden | At 320 the chip made the page scroll sideways | `engines.md` 17 |
| 30 | Book buttons in First visit and Cost | Hidden below 640 | Two identical lime pills 110px apart with the phone bar | `design-review.md` section 2 |
| 31 | Food strip | Listed for the first time; captions `Apple.` `Toast.` `Corn.` `Taco.` with no clock time | A caption names the object and nothing else; a clock time claims the photograph was taken at a moment | `brand-voice.md` section 4; `research/04-inclusive-visuals-review.md` section 3.7, item 4; `brand/04-image-placement.md` 1b |
| 32 | Food strip group name | `Four things to eat` → `Four food photographs` | A fourth authored line about eating, for screen-reader users only | `brand-voice.md` F3 |
| 33 | Services, lane one | Caption added: `Something hurts today? Book Emergency. If not, start with the first visit.` | A visitor with a sore tooth could not tell which visit to book | `persona-walkthrough.md` #4 |
| 34 | Services rows | Visible action added to each (`Book a checkup`, `Book a look`, `Book Emergency`, `Book whitening`, `Book a $0 scan`) | Rows were links with no sign of it on touch, and no label for what a press books. Exact labels other than "Book a $0 scan": reason not recorded | `persona-walkthrough.md` #4 |
| 35 | Checkups | Description rewritten; X-rays now "$60 more" (first `$[amount] more`); "50 min" moved into the description | Colon and four fragments; Texas wants the basis of each "from"; then the bracket became a demo value | `brand-voice.md` E11; `compliance.md` M2c; `cold-read.md` tell 1 |
| 36 | Fillings | Added "From $190 for a small filling. Bigger fillings and back teeth cost more." | The basis of the "from" | `compliance.md` M2c |
| 37 | Emergency | "I look and X-ray that tooth. Treatment is priced before it starts." → "$95 covers the look and an X-ray of that tooth. The fix is extra, and you get its price first." | A passive promise; the fee must say what it includes and that treatment is extra; then "price it before I start" was said once, in Fillings, not twice | `brand-voice.md` E5; `compliance.md` section 4 (Emergency row) and M2; `cold-read.md` tell 3 |
| 38 | Lane two caption | "Only if you want to." → added "If I’d leave it alone, I’ll say so." | One line for the visitor who fears being upsold on cosmetic work | `persona-walkthrough.md` #10 |
| 39 | Whitening | "…or done here in the chair. You pick." → "Trays to take home from $250, or done here in the chair from $450."; price column `from $250` only | The basis of each "from"; one large figure per row, the first cost to the patient. A `[What moves the price: to confirm.]` bracket was added, then cut because the row already gives both prices | `compliance.md` M2c; `brand/02-visual-system.md` 5.7; `cold-read.md` tell 1 |
| 40 | Aligners | "Consult $0 · 30 min" → "The consult and the scan are $0 · 30 min. Treatment from $3,400, depending on how far the teeth have to move." | The basis of "from $3,400" | `compliance.md` M2c |
| 41 | Sentence under the lanes | Added "good through June 30, 2027" (first `[Month D, YYYY]`) and "“From” is the lowest fee for that service. Yours can be higher, depending on the treatment you need." | Texas wants the period and the minimum-fee statement; then the date bracket became a demo value | `compliance.md` M2b; `cold-read.md` tell 1 |
| 42 | Comfort items 1 and 5 | "A stop signal: raise a hand and I stop" → "Raise a hand and I stop"; "Numbing explained before I start" → "I explain the numbing before I start" | Label-colon-gloss, and a passive in a list of things she does | `brand-voice.md` E10 |
| 43 | Comfort, under "Text us a question" | Added `Texts aren’t private and aren’t for emergencies. For anything urgent, call.` | The link invites health details over an unencrypted channel | `compliance.md` M7 |
| 44 | Comfort, explanation | "Like the stop signal in the chair. Press it and the page holds still." → "Like raising a hand in the chair. Press it and the page holds still." (in between it named "the ticker, the corners and the stretching words") | The middle version answered "nothing happened" when pressed with nothing moving in view; the cold read found a dentist would not name the page's design features to a patient | `persona-walkthrough.md` #11; `cold-read.md` tell 6 |
| 45 | Comfort photograph | Added `paloma-listening`, alt "…with her hands folded…" | The section's sentence as a picture; the alt was corrected to what the frame shows | `brand/04-image-placement.md` section 0 (a) and 1b |
| 46 | Motion controls | Hidden under the system's reduced-motion setting | "Stop the motion" with nothing to stop | `code-review.md` CR-05 |
| 47 | Bio | Colon sentence split in two; "this October" → "in October 2026" | Read as written, not spoken; "this October" dates badly | `brand-voice.md` E3; `compliance.md` S9 |
| 48 | How I work list | Removed (its third sentence had been reworded to "The number comes first, then the work.") | It repeated steps two and three; the rewording took out the fifth "You get" | `cold-read.md` tell 3; `brand-voice.md` E12 |
| 49 | Pull line | Now set beside the drawing photograph, ending the bio | The list it sat above was removed | `cold-read.md` tell 3 |
| 50 | Credentials, line two | Removed | School, years and practices name real-world records the brand core says not to guess; the footer's demo note covers them | `cold-read.md` tell 1 |
| 51 | Apple portrait caption | `Paloma. Apple. 4:10 pm.` → `Paloma. Apple.` | The photo is generated, so a time would be an invented fact | `research/04-inclusive-visuals-review.md` section 3.7, item 4; `brand-voice.md` section 4 |
| 52 | No reviews heading | "I opened in October." → "I opened in October 2026."; set as a smaller deck under "0 reviews." | Dated so it cannot go stale; at display size the sentence ran four or five lines | `compliance.md` S9, M10; `design-review.md` 5 |
| 53 | Promises | No numerals | Three numbered lists restated one another; numbering belongs to the first-visit steps | `cold-read.md` tell 3 |
| 54 | Promise 2 | "You get a written estimate before any treatment, and nothing's added without your yes." → "Every fix and its price, on paper, before I start. I add nothing without your yes." | The same sentence was on the page word for word three times | `brand-voice.md` E6 |
| 55 | Promise 3 | "Raise a hand and I stop, every time." → "A raised hand is enough." | The fourth "raise a hand and I stop"; "every time" is an absolute about moments when stopping at once is not safe | `brand-voice.md` E15; `compliance.md` S2 |
| 56 | Promise 4 | Added "Look me up." with, first, training, years and the licence number in brackets, then `My Texas license is public on the state dental board’s site.` | Facts a comparing visitor can check, where a rating would be; then the brackets came out because they name real-world records | `persona-walkthrough.md` #5; `cold-read.md` tell 1 |
| 57 | No reviews link | `Write a Google review` → `Feast Dental on Google` | It asked a visitor who had not been in to write a review; a prospect needs to see the profile | `persona-walkthrough.md` section 9, "Seen in passing" |
| 58 | Insured panel | `We're in-network with [PPO plans to confirm]. Send us a photo…` → `Add a photo of your card when you book. We’ll check your plan and tell you whether we’re in-network, and what out-of-network would cost, before you come. What we tell you is an estimate from your plan, not a promise from your insurer. You still pay your plan’s deductible and copay.` | Out-of-network answered; the check is an estimate, not the insurer's promise; deductibles and copays still apply. The plan list in brackets then came out, and the in-network question became part of the check | `compliance.md` M11, M7; `cold-read.md` tell 1 |
| 59 | No-insurance panel | Split in two; "a full set of X-rays" → "the X-rays you need"; added "the fee is higher" and "Good through June 30, 2027." | 22 words in one sentence; one X-ray wording; the dates. A deeper-cleaning placeholder was added, then cut, because the paragraph already says the fee is higher and priced first | `brand-voice.md` E14; `compliance.md` S5 and section 1a; `persona-walkthrough.md` #3; `cold-read.md` tell 1 |
| 60 | Cost, under the promise | Added `Dr. Paloma Krenek, DDS · General Dentist` | The section promotes prices with no designation | `brand-voice.md` F1 |
| 61 | Insurance switch default | "With insurance" → "No insurance" | Matches the hero's "$195 without insurance" while the insured panel has no plan names | `design-review.md` section 2; `persona-walkthrough.md` #2; `engines.md` 14 |
| 62 | Cost price chip | Hidden while "With insurance" is chosen | "First visit $195" under "Check my insurance" read as "I pay this anyway" | `persona-walkthrough.md` #2; `evidence.md` E12 |
| 63 | Cost caption | Listed for the first time: `Fillings from $190.` | Approved as written | `brand-voice.md` section 4; `brand/04-image-placement.md` 1b |
| 64 | Find us heading | "We're in Holly, on the east side." → "We’re in Holly, East Austin." | Place name in one heading | `seo.md` A1 |
| 65 | Storefront caption | "The front door, 2217 Tejocote Street." plus a bracketed access line → "The front door, 2217 Tejocote Street. Stand-in photo; parking, the nearest bus stop and the entrance are still to be confirmed." | A picture of a building that does not exist must say so; the access line keeps its meaning without a bracket, and says nothing about a level entrance | `research/04-inclusive-visuals-review.md` sections 3.4 and 3.7, item 3; `cold-read.md` tell 1 |
| 66 | Find us, Spanish line | Added `Hablo español. Llama o manda un mensaje al (512) 555-0142.` | The only Spanish was in the moving ticker | `seo.md` B4 and section 0, A4 |
| 67 | Find us links | `Call or text (512) 555-0142` → `Call (512) 555-0142` and `Text us` | The link only dialled | `compliance.md` S7 |
| 68 | Map image | Not used | No map: the street is fictional | `.ops/qa/README.md` rule 5; `brand/04-image-placement.md` section 0 (e) |
| 69 | FAQ heading | "Go on, ask." → "Go ahead, ask." | British idiom | `brand-voice.md` E2 |
| 70 | FAQ 1 | Added "at Feast Dental in East Austin, and it takes 75 minutes" and "the fee is higher… give you the price in writing first" | A quotable, self-contained answer; the fee condition. The cold read's shorter opening was not taken (`.ops/session.jsonl`, QA round 7) | `seo.md` A4; `compliance.md` M2c |
| 71 | FAQ 2 | Old insurance text → the insured panel's wording, word for word | It still carried the old text after the panel changed; the plan bracket came out with the panel's; the deductible sentence was added at 00:26 so the two match | `compliance.md` section 1a; `cold-read.md` tell 1; `docs-reconcile.md` section 5, item 1 |
| 72 | FAQ 4 (scared) | "Tell me at the door and I slow down…" → "Say so when you walk in. You set the pace from there, and you can text us a question before you book." | It repeated the comfort section with two words changed | `brand-voice.md` E7 |
| 73 | FAQ 5 | Added "Will it hurt?" ("afterwards" became "afterward" at 00:26) | The most common fear had no plain answer; the first wording read as "it won't". American usage | `persona-walkthrough.md` section 9, "Seen in passing"; `compliance.md` S1; `docs-reconcile.md` section 5, item 10 |
| 74 | FAQ 6 (how long) | Colon → "75 minutes. That’s the exam and X-rays…" | A colon doing a dash's job | `brand-voice.md` E9 |
| 75 | FAQ 7 (whitening) | Added "usually" | "for a few days" predicted a duration | `compliance.md` S6 |
| 76 | FAQ 8, 9, 10 | Added the filling cost, emergency cost and evenings questions; FAQ 9 ends "After hours, call or text the same number. If your face is swelling or it’s hard to breathe or swallow, call 911." | Answers a search engine can quote on their own; the after-hours and 911 line; then the after-hours bracket became a demo value, and "or text" was added at 00:26 to agree with the phone bar, which offers "Text us" while closed | `seo.md` A4; `compliance.md` M2c, S8; `cold-read.md` tell 1; `docs-reconcile.md` section 5, item 2 |
| 77 | FAQ 11 (cancel) | `[Cancellation policy to confirm.]` → "Cancel by 5 pm the day before and there’s no fee." | A bracket became a demo value | `cold-read.md` tell 1 |
| 78 | FAQ layout | The laughing portrait, the Book button and the price chip after the list removed; heading in columns 1 to 4, list in 5 to 12 | The same portrait three times on three walls; chip-and-button pairs repeated; the layout is the one `02` 6.10 specifies | `cold-read.md` tells 2 and 3; `brand/02-visual-system.md` 6.10 |
| 79 | Closing heading | "No lecture. Price in writing." on one line → a break after "No lecture." | Reason not recorded | (none) |
| 80 | Closing secondary button | `Call or text (512) 555-0142` → `Call (512) 555-0142` | The link only dialled | `compliance.md` S7 |
| 81 | Closing caption | Listed for the first time: `Peach.` | As 31 | `brand-voice.md` section 4 |
| 82 | Footer columns | Added Find us, Call or text, Hours, The dentist and owner | Four fact columns are in the footer spec; hours set one group per line; the owner named prominently | `brand/02-visual-system.md` 5.14; `design-review.md` 13; `compliance.md` M5 |
| 83 | Footer licence | `Dr. Paloma Krenek, DDS · General Dentist. Texas license [number to confirm].` → column 4 without a licence line (it read `Texas dental license no. [number]` until 00:10) | Folded into the owner column; then the bracket came out because it names a real-world record | `compliance.md` M5; `cold-read.md` tell 1 |
| 84 | Footer legal line | `© 2026 [Legal entity name, PLLC, to confirm], doing business as Feast Dental.` → `© 2026 Feast Dental. Owned and run by Dr. Paloma Krenek, DDS, General Dentist.` | The owner must be named (compliance M5, which also wanted the entity and the website's owner); then the entity brackets came out | `compliance.md` M5, section 4 (§108.59), section 1a; `cold-read.md` tell 1 |
| 85 | Footer demo note | "The names, prices… are invented." → "The practice, the dentist and her story are invented. The photographs are AI-generated…" | It did not say the dentist or the photographs were not real | `research/04-inclusive-visuals-review.md` section 3.7, item 2 |
| 86 | Alt text | Every model replaced by the as-built texts; guidance gains the rule for words in a picture | Age guess, brand-token colours, a red apple that is green; text in a picture belongs in its alt | `research/04-inclusive-visuals-review.md` sections 3.6 and 4 |
| 87 | Header phone link, SR name | `Call Feast Dental at 512 555 0142` → `Call (512) 555-0142` | The name must contain the visible text (WCAG 2.5.3) | `accessibility.md` B3 |
| 88 | Header status link, SR | Added `Hours and address: ` before the status | At night on a phone the link read "Booking’s open all night", which sounds like a booking link; it goes to Find us | `accessibility.md` B5 |
| 89 | Opening chips group name, SR | `Pick a time for your first visit` → `Next openings: pick a time for your first visit` | The group's name differed from its visible label | `accessibility.md` B2 |
| 90 | Hero alt | `…stands in dark brown scrubs with the sleeves pushed up, looking straight at the camera…` → `…in dark brown scrubs looks straight at the camera…` | The phone and tablet band crop shows head and shoulders only, and one picture has one alt | `accessibility.md` B7 |
| 91 | Promises markup | Ordered list → unordered list | With the numerals gone, an ordered list was announced as numbered. Reason not recorded beyond the round-8 log | `.ops/session.jsonl`, QA round 8 |
| 92 | JSON-LD descriptions (not copied into this file) | The practice description gains "If your gums need more than a regular cleaning, the fee is higher."; the aligner-consult and aligners offers lose their bracketed editor's notes ("[Keep this offer only if…]", "[Aligner brand: to confirm.]"), whose conditions are now **[confirm]** flags in sections 0 and 5 | The price and "cleaning" appeared without the gum condition; bracketed notes were left in copy-like strings after the cold read cleared them from the page | `docs-reconcile.md` section 5, items 5 and 6 (applied at 00:26) |
