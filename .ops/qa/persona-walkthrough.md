# Persona walkthrough: Feast Dental landing page

Reviewer: persona walkthrough. Date: 2026-11-09. Page: http://127.0.0.1:4173/ (report only, nothing edited).

**Read this first.** This is a qualitative simulation by one reviewer playing two invented people. It is not user research and proves nothing statistically. Every finding is a hypothesis to test with the five moderated sessions proposed in `research/02-audience-and-conversion.md` section 7. I have been deliberately opinionated, because a neutral read hides the friction.

## 0. Short answer

| | Books? | Why |
|---|---|---|
| **Persona A**, overdue, phone, 9:40 pm | **Yes, more likely than not.** Picks the Tue 5:45 pm chip on the first screen, reads as far as the three steps, books. | The headline plus its next sentence, her face, and "$195" beside real times answer the lecture and the bill in one screen. Two things nearly stop A: "if your gums need more" never gets a number, and the insured path has no answer. |
| **Persona B**, insured, cosmetic, laptop, 2:15 pm | **Maybe. Not today.** Leaves to compare; would come back for the $0 aligner scan if the page showed how to book it. | B trusts the tone ("Only if you want to", "I add nothing without your yes") and likes prices at headline size. The first screen talks to someone else, and a $3,400 decision gets two price rows, zero reviews, bracketed credentials and no work to look at. |

Top five changes (full list of twelve in section 9): (1) on a phone at night say that booking is open, in the header; (2) answer the insured visitor on the first screen and make the cost pill follow the insurance switch; (3) put a number on "if your gums need more than a regular cleaning"; (4) say which visit to book and label what a service row does; (5) put checkable facts (training, years, licence) where the "0 reviews" is.

Protect (full list in section 10): the headline together with the sentence under it and her face; the "$195" plus "Next openings" strip that relabels the Book button; the honest "0 reviews" heading and the drawing that reads "filling $190".

## 1. What was tested, and what was not

**Tested, in the browser.** My own tab in an isolated browser context (so my "Stop the motion" press never reached another reviewer's `localStorage`). The practice clock was pinned by overriding `Date` before the page's script ran.

- Persona A: 390 x 844, touch, mobile user agent, Monday 9:40 pm practice time. Also one first-screen check at 390 x 664, which approximates iPhone Safari with its toolbars showing.
- Persona B: 1440 x 900, fine pointer, Tuesday 2:15 pm practice time.
- Used as a visitor would: tapped a time chip, pressed Book, scrolled the food strip sideways, pressed "Stop the motion" and started it again, used the insurance switch, opened three FAQ items, hovered and clicked a service row, read the ticker moving and stopped.
- Also read: `brand/00`, `brand/01`, `content/copy.md`, and the relevant lines of `brand/03` and `brand/04`, to check each recommendation against the specs.

**The page changed twice while I worked.** I walked the build as it stood at about 22:20. `index.html` was saved again at 22:32:20 with a copy pass (for example "a proper look" became "a real look", "Go on, ask." became "Go ahead, ask.", and a designation line was added to the cost section), and again at 22:42:47 (structured data in the head, "on the east side" became "in East Austin" in the subhead, and three questions were added to the FAQ, making ten). After each save I re-ran my measurements in the browser: the header status strings, the cost pill after the switch, every `tel:` and `sms:` link, the ticker's width and speed, and the position of each element cited. **Every structural finding in this report holds on the 22:42:47 build.** Re-shot on that build: `a-00`, `a-01`, `a-19`, `b-01`. Re-shot on the 22:32:20 build: `a-16`, `b-12`. The other screenshots are from the walk and show the earlier wording; their layout is the same, except that everything below the cost text sits lower (67 px on the phone) and the FAQ is three rows longer. Quotes, line numbers and page heights in this report are from the 22:42:47 `index.html` and the 22:42:57 `page.js`; `page.css` is the 22:32:20 file. If the page has been saved again since, trust the selectors and quoted strings over the line numbers.

**Not tested.** A real phone (so `tel:` and `sms:` sheets, Safari's moving toolbars and real touch are unverified). Tablet widths, landscape, a 1366 x 768 laptop. Slow network. The operating system's reduced-motion setting (only the page's own control). Keyboard and screen reader use (the accessibility reviewer's job). No-script. Other clock states: closed by day, Sunday, a visitor in another time zone. Anything behind the placeholder links. No real people.

## 2. The two personas

Built on `research/02` section 3. Names and life details are invented.

**Persona A, "It's been a while": Dani, 28.**
Rents in 78702. Three months into a new job with a dental plan they have never used and do not understand. Last dentist visit: four years ago. A lower-left molar has twinged on cold drinks for two weeks, so they chew on the right.
Search: "dentist east austin cost no insurance", then the map listing (which shows no reviews). Seen first: a chain site with 4.8 stars, no prices and a "Request appointment" form; an independent that says "call for pricing".
Device and moment: iPhone, in bed, Monday 9:40 pm.
Familiarity low. Urgency: this week or next. Fears: a lecture, pain, a bill they did not expect. Reassured by: a plain price, a kind sentence, a face. Decides fast once reassured. Attachment: anxious, needs reassurance at each step.
Books when: a number they can afford, a sign nobody will tell them off, and an after-work time they can take without phoning.
**Relevance contract:** within three seconds the page must say dentist, near you, no telling-off, here is the price, you can sort it now.

**Persona B, "Ready to upgrade": Morgan, 33.**
Moved to East Austin five months ago. Employer PPO. Last cleaning eight months ago, elsewhere. Wants whiter teeth before a wedding in spring and has wondered about aligners for crowded lower teeth.
Saw the page on a phone last week. Now back on a laptop between meetings, Tuesday 2:15 pm, with two other tabs: a cosmetic-led practice with a before-and-after gallery and a monthly aligner price, and a chain with 4.9 stars.
Familiarity medium. Urgency: weeks. Fears: being upsold, results that look fake, not knowing the total. Reassured by: who the dentist is, real cases, a from-price, a written plan, a way to pay over time. Researches before deciding. Attachment: secure, leaning avoidant; wants facts and skims feeling.
Books when: a no-pressure first step is obvious, there is evidence she is good at the cosmetic work, and the total is knowable.
**Relevance contract:** a dentist who will not oversell me, does whitening and aligners, takes my plan, and shows prices.

## 3. Five-second test

From the first screen alone.

| Question | Persona A (phone, `shots/persona/a-01-first-screen.png`) | Persona B (laptop, `shots/persona/b-01-first-screen.png`) |
|---|---|---|
| What is this? | **Pass.** "A dentist. Feast Dental. Paloma, general dentist, East Austin." | **Pass.** Same. |
| Who is it for? | **Pass.** "People who've been putting it off. Me." | **Partial.** "People who've been avoiding it. That's not me. Nothing here says whitening or aligners." |
| What does it cost? | **Pass without insurance** ("$195, 75 minutes"). **Unclear with insurance:** "And with my plan?" | **Unclear.** "$195 without insurance. I have insurance." |
| What do I do next? | **Pass.** "Book online. Or tap one of those times." | **Pass.** "Book online, top right and under the times." |

**The three beliefs (`research/02` section 4a).**

| Belief | First screen, A | First scroll, A | First screen, B |
|---|---|---|---|
| 1. For people like me, nobody will make me feel bad | **Held.** Headline, then "no lecture". | Reinforced: "Haven't been in years? You're welcome here." | Held, but it is A's version. B's version ("nobody will upsell me") is only implied by "the price in writing". |
| 2. I can sort this now, on my phone, and be seen soon | **Mostly held.** Real-looking times and Book. Working against it: the header says "Opens Tue 11 am" and nothing says booking works tonight. At Safari height (390 x 664, `a-00`) the times are under the bottom bar. | "Open till 7:30 pm Tuesdays and Thursdays" appears; the ticker shows one fact. | **Held.** "Open now till 7:30." and three times. |
| 3. I'll know the cost before anything happens | **Held if uninsured.** "$195", footnote, "the price in writing". **Not held if insured:** nothing on the screen mentions a plan. | Lands only if A reads the body text of step 1 ("Got insurance? Send a photo of your card and we'll check it before you come."). | **Half held.** "Price in writing" yes. On a laptop "WITH INSURANCE OR WITHOUT" has slid fully into view in the ticker by about ten seconds after load, which helps, just. |
| Supporting proof on this screen or the next: a rating, and the dentist's face | Face: yes. Rating: none exists, and the page's substitute (the promises) is seven phone screens down. | | Same. |

## 4. Persona A walkthrough (phone, Monday 9:40 pm)

Two voices. "Thinks" is Dani. "Analyst" is me. A booking control is reachable at every position (the fixed bottom bar), so that is noted once here and not in each row. Screenshot paths are relative to `.ops/qa/`. Scroll positions are from the walk.

**Before the page loads (Dani):** "I've had four tabs of dentists open and I've closed three. Nobody says what it costs. I'm half expecting a stock photo of a family and a form that wants my birthday. If the first thing I see is 'It's time to prioritize your oral health' I'm putting the phone down."

| # | Scroll (px) | Screenshot | Sees first | Feels | Thinks | Continues? | Analyst |
|---|---|---|---|---|---|---|---|
| A1 | 0 | `shots/persona/a-01-first-screen.png` (and `a-00` at 390 x 664) | Three huge lines of type, then orange, then her face beside "$195" | A jolt, then relief | "'I don't'... 'care how long it's been.' Oh. Ha. Okay. 'I care about what's bothering you now.' 'No lecture.' $195, is that all of it? I think I have insurance now. Tue 5:45, that's after work. Wait, 'Opens Tue 11 am', so can I do this now or not?" | Yes. A low-effort tap is right there, and two questions are open: my plan, and whether $195 is the total. | Trust up (face, price, plain words). LIFT: value proposition and relevance strong; anxiety left open for the insured; the header gives a closed cue with no "booking's open". Cialdini: liking, reciprocity (a price handed over), commitment (chips). Missing: social proof, authority beyond "DDS". Fogg: motivation medium-high, ability high, prompt visible. The headline breaks before "care", as `copy.md` section 2 requires. The hours fact sits at y 785 to 823, behind the bar (top 780). |
| A2 | 0 | `shots/persona/a-02-chip-picked.png`, `shots/persona/a-03-book-pressed.png` | The chip goes lime with a bite out of its corner; the bar now says "Book Tue 5:45 pm" | Small delight | "It took a bite out of it. And the button changed. So I haven't booked yet, I've just picked." | Yes, wants to know more before pressing. | The best interaction on the page: a micro-commitment that costs nothing and ties cause to effect. "Tue 5:45 pm picked. Nothing is booked yet." is announced to screen readers only; sighted visitors infer it from the label, and Dani did. |
| A3 | 700 | `shots/persona/a-04-y700-ticker-first-visit.png` | A black strip with words sliding, then "Here's your whole first visit." | Curious | "Something's scrolling, 'EVENINGS TUESDAY AND THURSD...', can't be bothered to wait. 'Whole first visit', good, tell me. 'Send a photo of your card.' Send it where?" | Yes, the heading promises the whole thing. | Trust level. On a phone the ticker is a 2,392 px track behind a 326 px window at about 46 px a second: a 52 second loop, one fact at a time. "With insurance or without" is fact 5 and enters the window about 20 seconds after load. LIFT clarity: no channel named for the card photo. |
| A4 | 1,400 | `shots/persona/a-05-y1400-steps-2-3.png` | Step 3's numeral, then "Haven't been in years? You're welcome here." | Seen, then a small worry | "'Tell me what you've stopped eating.' Ice. Anything on the left. Huh, she'd start there. 'A regular cleaning if your gums are ready for one.' And if they're not? It's been four years. 'Nothing gets added today without your yes.' Okay. 'You keep the drawing.' What drawing?" | Yes, to find out what "more" costs. | Trust up overall. The strongest sentence on the page is here. Anxiety up on the gum condition, which has no number. Two Book buttons in view with different labels ("Book online" in the page, "Book Tue 5:45 pm" in the bar). The step discs with two and three bites stop reading as bitten shapes and become orange scraps; harmless, slightly cryptic. |
| A5 | 2,100 | `shots/persona/a-06-y2100-foods.png`, `shots/persona/a-07-y2100-foods-swiped.png` | A green apple with a bite out of it | Amused | "Apple. Toast. Oh, things I could eat again. (swipes) Corn. Taco. Fine. Why is her name that big again?" | Yes. "What it costs" is the next heading. | No restaurant reading: the header keeps "DENTAL" and prices follow at once. The strip works because step 2 primed it; a skimmer who missed that line sees decoration. The display-size name is the consequence of the Texas rule noted in brand core Part 0; loud on a phone, leave it. |
| A6 | 2,800 | `shots/persona/a-08-y2800-services.png` | "$190", "$95", "$250", "$3,400" | Informed, then stuck | "Fillings from $190. Emergency, $95: 'something hurts or broke'. Mine sort of hurts. Is that me? Do I book the $95 or the $195? 'Every price here is without insurance.' So what's mine with?" | Yes, but this is the first real stall. | LIFT clarity down: nothing says which visit to book. Rows are links with no visible sign of it on touch. Anxiety: "$190 times how many?" with no word on doing work in stages. Fogg: prompt present, target ambiguous. This is where a bill-anxious visitor is most likely to leave. |
| A7 | 3,500 | `shots/persona/a-09-y3500-nervous.png` | Her, sitting at eye level, hands folded | Shoulders drop | "She's just sitting there. 'Say so at the door and I slow down.' I could say that." | Yes. | Trust up sharply. Liking. Control handed over (stop, breaks). The cream ground is a rest after 1,150 px of orange. |
| A8 | 4,130 | `shots/persona/a-10-y4130-stop-the-motion.png`, `shots/persona/a-11-y4130-motion-stopped.png` | The list, then a pill: "Stop the motion" | Puzzled for a second | "Headphones, something to watch. 'Text us a question', I might. 'Stop the motion'? What motion? (taps) Nothing happened. Oh, the words changed." | Yes. | Nothing in view is moving when the control is pressed (nothing in this section animates; the ticker is about 3,300 px above and paused off screen). The promise it mirrors is good; the demonstration has nothing to demonstrate. "Text us a question" is the only `sms:` link on the page and the right door for this person at night, set as a small text link. |
| A9 | 4,800 | `shots/persona/a-12-y4800-im-paloma.png` | "I'm Paloma." on bright lime | The most trust so far | "'In college I went four years without a cleaning. I had no insurance and I was scared of the bill.' That's me. That is literally me. Now the headline makes sense." | Yes. Emotionally this is the "enough" moment. | Unity and liking peak. It sits at y 5,007 of 12,211, about six phone screens down. The longest paragraph on the page is set on the brightest ground; at night that is the most glaring thing to read. The "How I work" list repeats steps 2 and 3. |
| A10 | 5,480 | `shots/persona/a-13-y5480-credentials-placeholder.png` | Her drawing a tooth; then small bracketed text; then a huge "0" | Warm, then wary | "She really draws it. '[dental school, year]', demo, fine. Then a giant zero?" | Yes. | The credentials line is the smallest text in its section (14 px). For a practice with no reviews it is the authority line. |
| A11 | 6,060 | `shots/persona/a-14-y6060-zero-reviews.png` | "reviews. I opened in October." | Respect, some unease left | "Zero. I knew that from the map. At least she says it. The promises, I've read these. 'Write a Google review'? I haven't been yet." | Yes, wants the cost section. | Honesty turns a gap into liking. But the section answers "no reviews" with a third list of three promises and no facts. Its only link is for after a visit. |
| A12 | 6,740 | `shots/persona/a-15-y6740-cost-no-insurance.png`, `shots/persona/a-16-y6740-cost-with-insurance.png` | "You'll know the cost first." and a two-way switch | Confused | "Finally. 'With insurance.' (taps) Brackets, okay, demo. 'Send us a photo of your card', how? And why does it still say 'First visit $195' right under 'Check my insurance'? Do I pay that anyway?" | Yes, just. **The moment Dani almost left.** | LIFT clarity down, anxiety up. The price pill does not react to the switch. The insured answer is a process with no channel and no typical outcome. Filling in the plan names fixes neither. |
| A13 | 7,440 | `shots/persona/a-17-y7440-drawing-find-us.png` | A marker sketch: a tooth, a circled spot, "filling $190" | Reassured, concretely | "Oh, that's the drawing. That's what I'd walk out with. That's actually great." | Yes. | The best single piece of proof on the page, at y 7,556, nine screens down, long after "You keep the drawing" was said with nothing to look at. |
| A14 | 8,130 | `shots/persona/a-18-y8130-find-us-hours.png` | A dark doorway, then a moon and "Closed now. Booking's open all night." | Relief, late | "Bit bleak, that door. Oh. Booking's open all night. So I can do it now." | Yes. | The sentence that lands belief 2 at night first appears at y 8,560 of 12,211. The hours table is clear. |
| A15 | 8,830 | `shots/persona/a-19-y8830-address-faq.png`, `shots/persona/a-20-faq-havent-been-in-years.png`, `shots/persona/a-21-faq-insurance.png` | A list of questions (seven when I walked it, ten now) | Understood | "'I haven't been in years. Is that a problem?' 'No. ... I went four years without one myself.' Good. Insurance: same brackets." | Yes. | The third answer is the best-placed repeat on the page. Questions Dani has that are not here, on either build: will it hurt, what does "more than a regular cleaning" cost, can I pay over time. The 22:42 build added filling cost, emergency cost and evening hours, which repeat the price list and the hours table. |
| A16 | 9,560 | `shots/persona/a-22-y9560-faq-foot-laughing.png` | Her, laughing | Likes her more | "She laughs. I like her better here than at the top." | Yes. | The only frame in which she shows her teeth. |
| A17 | 10,270 | `shots/persona/a-23-y10270-closing.png` | "No lecture. Price in writing. Come in." | Decided | "Yeah. Okay. Four buttons, I get it. 'Then go bite something.' Ha." Taps "Book Tue 5:45 pm". | Books. | Two Book and two Call controls in one screen. The send-off is playful, not aggressive. |
| A18 | 10,900 to end | `shots/persona/a-24-y10900-peach-footer.png`, `shots/persona/a-25-y11159-footer-end.png` | A peach, then the footer | A smile | "'The only cookie on this site.' Cute." | Done. | Fine. |

**A realistic stopping point.** Dani read the whole page because I made them. A real visitor in this state decides between A1 and A6. Everything from A9 down, which includes the story that warms the headline, the drawing and the night-booking line, is read by a minority. I have not measured how small.

**Dani, afterwards:** "I'd book. She told me the price before I asked and she didn't make me feel like a problem. I still don't know what happens if my gums are bad, and I never found out whether she takes my plan. I picked the Tuesday slot anyway because $195 is a number I can live with if the insurance thing goes wrong."

```
VERDICT, PERSONA A
Confidence 7/10   Clarity 8/10 uninsured, 6/10 insured   Relevance 9/10
Would I contact them: Yes. Books Tue 5:45 pm online.
Strengths:  1. Headline, turn sentence and face (LIFT relevance; Cialdini liking)
            2. $195 beside real times and a button that takes the time's name (LIFT value proposition; Fogg ability; commitment)
            3. "Tell me what you've stopped eating" and "I went four years without one myself" (unity)
Weaknesses: 1. "If your gums need more" has no number (LIFT anxiety)
            2. Insured path: no answer on screen one, price pill ignores the switch (LIFT clarity)
            3. At night the phone says "Opens Tue 11 am", not that booking works (Fogg prompt)
Almost left: A12, the insurance switch. Before that, A6, the price list.
Most engaged: A4, step two; and A9, the four-years sentence.
```

## 5. Persona B walkthrough (laptop, Tuesday 2:15 pm)

A booking control is reachable at every position (the sticky header button).

**Before the page loads (Morgan):** "I liked this one on my phone. Orange, funny. Now I want to know if she's any good. Show me who she is, show me teeth she's done, tell me what aligners really cost. If it's all vibes I'm going with the place that has the gallery."

| # | Scroll (px) | Screenshot | Sees first | Feels | Thinks | Continues? | Analyst |
|---|---|---|---|---|---|---|---|
| B1 | 0 | `shots/persona/b-01-first-screen.png` | The headline at 128 px, her face level with it | Intrigued; a flicker of "is this for me?" | "Bold. 'I don't care how long it's been.' It's been eight months, so that isn't about me. She looks sure of herself. $195 without insurance; I have insurance. Where's whitening? Services, in the menu." | Yes. The tone earns a scroll. | Trust up a little. LIFT: clarity high, relevance partial (headline and price both address Persona A). Cialdini: liking. The ticker shows four facts at once here and "WITH INSURANCE OR WITHOUT" is fully in view by about ten seconds after load. Fogg: motivation medium, ability high, prompt visible twice. |
| B2 | 770 | `shots/persona/b-02-y770-first-visit.png` | Three tidy columns | Approval | "Tidy. 'I draw what I found and write down what each fix costs. Nothing gets added today without your yes.' That's the line I was looking for." | Yes. | Trust up. This is the anti-upsell promise, in the place B looks for it. LIFT anxiety down. |
| B3 | 1,540 | `shots/persona/b-03-y1540-foods-services-head.png` | Four food photographs across the full width | Neutral, mildly impatient | "Apple, toast, corn, taco. It's a vibe. Moving on." | Yes. | A small distraction for B, the signature for A. No restaurant reading (nav and "DENTAL" are on screen). The dot between "DDS" and "GENERAL DENTIST" draws like a hyphen at this size. |
| B4 | 2,330 | `shots/persona/b-04-y2330-services.png`, `shots/persona/b-05-services-aligners-hover.png`, `shots/persona/b-06-services-aligners-clicked.png` | "$250" and "$3,400" | Pleased, then under-informed | "Here we go. Whitening from $250, in the chair from $450. Aligners from $3,400, consult $0. 'Only if you want to.' Good. From $3,400 up to what? Which brand? How long? (hovers) It lights up, so I click it? (clicks) It goes to booking. Booking what?" | Yes, looking for proof. | The strongest hook for B: prices at headline size and "Only if you want to." Missing: the top of the range, brand, typical length, what is included, a way to pay monthly. The row gives no label for what a click does. Cialdini: authority missing for the cosmetic work. **Most engaged here.** |
| B5 | 3,200 | `shots/persona/b-07-y3200-nervous.png` | "Nervous is normal here." | Indifferent | "Not me. Nice for someone. 'Stop the motion'? Nothing's moving." | Yes, skimming. | Costs B one screen. Right for A; leave it. |
| B6 | 4,010 | `shots/persona/b-08-y4010-im-paloma.png` | Her with a bitten apple on a wall of lime | Interested | "Okay, who is she. Opened in October. The four-years thing is sweet but it isn't what I'm checking. Where did she train? How many of these has she done?" | Yes. | The bio serves A. Nothing about how she approaches cosmetic work. Mouth closed again. |
| B7 | 4,560 | `shots/persona/b-09-y4560-credentials-zero.png` | Small bracketed text, then a giant "0" | Respect and risk | "'[dental school, year], [number] years as an associate.' That's the thing I wanted and it's the smallest type on the screen. And then zero reviews. Okay. Points for saying it." | Yes, just. **The moment Morgan almost left.** | Authority is the weakest element in the hierarchy at the moment a comparing visitor needs it. |
| B8 | 5,160 | `shots/persona/b-10-y5160-zero-promises.png` | Three promises on black | Unmoved | "Everyone promises. 'I add nothing without your yes', good. For $3,400 I want to see work." | Yes. | Promises are claims; B wants facts. At 1440 the left half of the section under the "0" is empty. |
| B9 | 5,990 | `shots/persona/b-11-y5990-cost-default.png`, `shots/persona/b-12-cost-with-insurance.png` | The switch, set to "No insurance" | Confused | "With insurance, that's me. Brackets. And the pill still says $195. Is a cleaning covered or not? Nothing about paying monthly." | Yes. | As A12. For B this is the second most important answer on the page. No financing line (left off on purpose until known, `copy.md` section 9). |
| B10 | 6,780 | `shots/persona/b-13-y6780-find-us.png` | A dark doorway at dusk beside "Open now till 7:30." | A small doubt | "Is that open? It looks shut. The hours are good, Tuesday and Thursday evenings work." | Yes. | The picture argues with the status line. |
| B11 | 7,700 | `shots/persona/b-14-y7700-faq.png`, `shots/persona/b-15-faq-whitening.png` | Her laughing, beside the questions | Warmer | "There she is. Normal teeth, not veneers. Good. 'Does whitening hurt?' Honest. Nothing about aligners. Do I need the $195 visit before whitening?" | Yes. | The brand core calls her unretouched teeth "the page's quiet promise to Persona B". It is made once, in the last tenth of the page. |
| B12 | 8,790 | `shots/persona/b-16-y8790-closing.png` | "Come in." stretched wide | Half persuaded | "I'd come in for the free scan. Let me look at the other tab first." | Leaves to compare. | Without a labelled consult action, intent leaks to the competitor with the gallery. |
| B13 | back to 0 | `shots/persona/b-17-chip-thu-book-pressed.png` | Picks "Thu 5:30 pm"; both Book buttons take the name | Amused, then unsure | "Nice. But that's the $195 first visit, isn't it? Not the scan. Ha, the ticker says 'You read the whole page. I like you already.'" | Does not press. | The chips are for a first visit only (the group's name says so, to screen readers). No way to choose a visit type before the scheduler. |

`shots/persona/b-18-motion-off-first-screen.png` shows the first screen after "Stop the motion": the ticker becomes a still list and all nine facts can be read at once.

**Morgan, afterwards:** "I believe her about not overselling. I don't yet believe she's the person to move my teeth, because the page hasn't tried to show me. I'd take the free scan. I couldn't tell which button gets me that."

```
VERDICT, PERSONA B
Confidence 6/10   Clarity 7/10   Relevance 5/10
Would I contact them: Maybe. Not for aligners today. The $0 scan, if its route were obvious.
Strengths:  1. Prices at headline size, "Consult $0" (reciprocity; LIFT value proposition)
            2. "Only if you want to." and "I add nothing without your yes." (LIFT anxiety, for upsell)
            3. First-person voice and a real-looking person (liking)
Weaknesses: 1. No proof for the cosmetic lane: no cases, no range, no brand, teeth shown once (authority, social proof)
            2. Credentials are the smallest text; "0" is the largest (authority)
            3. Hero and price address someone else; insured cost unanswered (LIFT relevance, clarity)
Almost left: B7, bracketed credentials followed by the zero.
Most engaged: B4, the price rows.
```

## 6. Where the two disagree

| Element | Persona A | Persona B | Call |
|---|---|---|---|
| Headline | The reason to stay | "Not about me" | Keep. A is the primary audience (`research/02` section 3). Give B one line elsewhere. |
| Food strip | A small payoff | Would cut it | Keep. It is the idea, and it is one screen. |
| "Nervous is normal here." | Shoulders drop | Skims | Keep. |
| Four-years story | Peak trust | "Sweet, not what I'm checking" | Keep, and move a clause of it up for A. |
| Prices at headline size | Useful, then frightening ("times how many?") | The hook | Keep. Add a sentence on doing work in stages for A, and a range for B. |
| "0 reviews" | Respects it | Respects it and still wants facts | Keep the honesty, add the facts. |

The page is built for Persona A and it shows. That is the right bias. B needs about four sentences and one photograph, not a redesign.

## 7. The questions in the brief

**Does "I don't care how long it's been." read warm or cold beside her face?** Warm, by a margin that the next sentence supplies. On the laptop the whole sentence is one glance and her face is level with it: it reads as a blunt friend. On the phone the order is headline, then "I care about what's bothering you now.", then her face, and the break before "care" spares the reader a first line that says "I don't care". Her expression is level and sure, mouth closed. It says "I mean it" more than "I'm kind"; the kindness is in the words. Three places where it can read cold: the first half-second on a laptop, where "I don't care how long" is 128 px of black on orange; an anxious reader who stops at three words; and the social card (`assets/img/social-card.jpg`), which carries the headline without the turn sentence that brand core Part 6 says must follow at once. Keep it, run the test against the fallback as the brand core asks, and never let the headline travel without the sentence under it.

**Does "Feast Dental" with food pictures read as a restaurant at any point?** No, on a visit read from the top. The first screen has no food and has "Dental", "DDS", "General Dentist" and a first-visit price. The food strip arrives after the three steps and is followed at once by a price list, with "FEAST DENTAL" fixed in the header. The one exposed place is off the page: anywhere the name appears without "Dental" or the dentist. The lock-up rule in brand core Part 2e already covers that.

**Does the bite ever read as aggressive or painful?** No. Bites are taken from food and from flat shapes, with round scallops, and never from a face. Nothing cold or hard is in the first screen. Two edges, neither worth a change: the step discs with two and three bites read as scraps, not bites; and at phone size the juice on the peach picks up red from the skin. For a visitor with a sore tooth the apple and the corn could sting, but they follow "Tell me what you've stopped eating", which turns them into the point.

**Do the disclosure strip or the "[to confirm]" placeholders break trust in a way that still matters once the facts are in?** The strip and the brackets go. Five things stay:
1. The insured panel has no shape for an answer. Plan names will fill the first bracket, but the pill beside the buttons will still say "$195" when "With insurance" is chosen, and "send us a photo of your card" still names no channel.
2. The credentials line will be true and will still be the smallest text in its section.
3. The licence number will be real and will still be only in the footer.
4. The front-door picture is labelled a placeholder, but the brief for the real one will inherit its look: dusk, a dark interior, peeling paint, beside a line that says "Open now".
5. Financing is left off the page until known, which is right, but the build has no place for it when it is.
One thing gets better: removing the strip returns 44 px to the phone's first screen.

**Do the motion and the saturated colour help or tire?** Motion helps and is, if anything, under-noticed on a phone. After the headline's one-second chew nothing on the phone's first screen moves; on a laptop the ticker runs along its bottom edge. Dani noticed the bite on the chip (tied to their own tap, so it reads as a response, not decoration) and the service words widening under the thumb. The ticker is the only thing that moves unasked, and on a phone it costs more than it gives. Colour helps on arrival: no other dentist's tab looks like this, and the price is the loudest thing after the headline. It tires in one place: the lime section, 1,429 px tall on a phone, carries the longest paragraph on the page, and at 9:40 pm in a dark room that is a lot of light to read by. The cream sections land as rest, and "Nervous is normal here." being on cream is exactly right.

**Hesitate, misread, talked down to, sold to, bounce.**
- Hesitates: A at the price list (which visit, and how many fillings) and at the insurance switch; B at the aligner row (what does clicking do) and at the credentials.
- Misreads: "Opens Tue 11 am" as "nothing I can do till Tuesday"; "First visit $195" under "With insurance" as "I pay this anyway"; Emergency $95 against First visit $195.
- Talked down to: nowhere. The nearest thing is the gum condition, said six times (`index.html` lines 267, 299, 333, 413, 457, 461; four on screen at load). By the third it begins to sound like an expectation about the reader's mouth. A number would make it sound like information.
- Sold to: nowhere. No countdown, no "2 left", no pop-up. B's antenna twitches only at "from" with no ceiling.
- Bounces: A before arrival (a map listing with no reviews, which the page cannot fix), and at the price list. B on the first screen if in a hurry, and at the zero.

## 8. Conversion mechanics

**LIFT.**
- Value proposition: clear and unlike the competition. A price, a length, what is in it, in the first screen.
- Relevance: high for A. Medium for B.
- Clarity: high for what and how much. Lower for which visit to book, what an insured visitor pays, and what "more than a regular cleaning" costs.
- Urgency: none manufactured, correctly. Real times supply the honest kind.
- Anxiety: the lecture and the surprise bill are well handled. Left over: the deeper-cleaning cost, no reviews and thin credentials, no picture of the room, "times how many?" at the price list.
- Distraction: low. The phone ticker is the only candidate.

**Cialdini.** Reciprocity: strong (prices given freely, the drawing you keep, a $0 scan). Commitment: strong (the chip, the switch). Liking: strong (first person, a face, a joke at her own expense). Unity: strong and buried ("I went four years without one myself", "Hablo español" as the last ticker fact). Authority: weak (DDS and a designation; training, years and licence are small or in the footer). Social proof: none, honestly declared. Scarcity: none, correctly.

**Fogg.** A on the first screen: motivation medium-high, ability high, prompt present. The behaviour happens unless anxiety intervenes, so the work left is reassurance. B: motivation medium, ability high, prompt present but aimed at a first visit. B needs a spark (proof) and a prompt that names the consult.

**Is the ask clear?** Yes: "Book online", the same verb everywhere, and it takes the chosen time's name. What happens after the press is unknowable in the demo. The ask is not clear about which visit it books.

**Is the price next to the ask?** In the hero, yes. Beside each in-page Book button, yes, as a pill. In the phone's bottom bar, which is the ask for most of the scroll, no. For an insured visitor the price beside the ask is the wrong one.

**Is there enough proof for a practice with no reviews?** Enough for a $195 first visit by someone the price has already persuaded. Not enough in the first three screens, where the only proof is a face and "DDS": the story is at 41% of the phone page, the credentials at 48%, the drawing at 62%. Not enough for B's $3,400.

**Too many or too few booking prompts?** In reach, right: one tap away at every position on both devices. In count, the phone doubles up. The fixed bar and an in-page Book button share a screen in four places, and the closing band shows two Book and two Call controls at once (`a-23`). The in-page buttons do not take the chosen time (only the header, hero and bar carry `data-book-label`, `index.html` lines 240, 261, 515), so after picking a time Dani saw "Book online" above "Book Tue 5:45 pm".

**Is the phone path as good as the booking path?** No. Every "Call or text" control is a `tel:` link (`index.html` lines 262, 483, 516, plus Find us and the footer). At 9:40 pm it dials a closed practice. The only `sms:` link is "Text us a question" in the comfort section (line 362). Texting is the right second route for an anxious visitor at night, and it is one small link, five screens from the top. All of this depends on the line taking texts, which `copy.md` flags to confirm.

## 9. Ranked changes

Effort: XS under an hour, S a few hours, M about a day or needs a fact or a photograph, L needs planning. "Spec" notes say where a change disagrees with a spec and which side I take.

| # | Observation | Change, in one line | Expected effect | Effort | Severity, framework, spec |
|---|---|---|---|---|---|
| 1 | At 9:40 pm the phone header reads "Opens Tue 11 am" (`page.js:77`; the long form is hidden at phone widths, `page.css:474` and `:488`). "Closed now. Booking's open all night." is first seen at y 8,560 of 12,211 (`index.html:432`). Shots `a-01`, `a-18`. | When closed at night, make the phone's short form say booking is open, for example "Book online any time", not the opening time. | Belief 2 lands on screen one for the after-hours bookers (48% of dental bookings fall between 5 pm and 9 am, F14). Removes the "nothing I can do till Tuesday" reading. | XS | Should fix. Fogg prompt; LIFT anxiety. `copy.md` section 1 sets the phone form to "Opens Tue 11 am"; `brand/03` section 6 ("Night shift") says "Cut the dot if you must, never the text". I side with `brand/03`. |
| 2 | Nothing still on screen one says insurance is welcome; on a phone "With insurance or without" is the fifth ticker fact. In the cost section, choosing "With insurance" leaves the pill "First visit $195 75 min" beside the buttons (`index.html:420`; checked on both viewports; `a-16`, `b-12`). The build defaults to "No insurance" (`index.html:409`); `copy.md` section 9 says "With insurance" is the default. | Add one plain line under "$195 without insurance" ("Insured? Send a photo of your card and I'll tell you your cost before you come."); make the pill follow the switch; default to "With insurance" once that panel has real content. | Belief 3 for the insured majority, on screen one. Ends the "do I pay $195 anyway?" misreading. | S | Should fix. LIFT relevance, clarity. `copy.md` conflict note 8 dropped "Most PPO plans accepted" because no plan is confirmed; the line proposed makes no plan claim. On the default, the copy is right for launch and the build is right for a demo whose insured panel is brackets. |
| 3 | The gum condition appears six times (`index.html` lines 267, 299, 333, 413, 457, 461), never with a number, and never says what $195 buys on a day when a regular cleaning cannot be done. The reader it describes is Persona A. | Add a from-price or range for the deeper cleaning, and one sentence on what is charged that day, in the cost panel and the first FAQ answer. | Turns the page's one hedge into a known number. Lowers the anxiety that peaks at the price list. | S, plus a fact to confirm | Should fix. LIFT anxiety; F19. Brand core Part 4 says of the caveat "Saying it first is the brand". Agreed; this finishes the sentence. Keep every instance the copy rule requires. |
| 4 | A's trigger is a tooth that hurts: Emergency $95 or First visit $195? B's is whitening or aligners: the $0 scan or the first visit? The page does not say, and the hero chips book a first visit only. Service rows are whole-row links (`index.html` lines 333 to 335, 341 to 342) with no visible label; hover is the only cue (`page.css:346`) and touch has none (`a-08`, `b-05`). | One guiding line per lane ("Something hurts today? Book Emergency. If not, start with the first visit."), and a visible text action in each row ("Book a $0 scan"). | Removes the "which one?" stall for both personas and gives B a prompt that matches intent. | S to M | Should fix. LIFT clarity; Fogg prompt. `research/02` section 4b row 4 asks for a "text link per card to book that visit type". |
| 5 | The section that answers "0 reviews" offers three promises already made twice above, and no facts. The credentials line is the smallest text in its section (14 px phone, 15 px desktop; `index.html:386`, `page.css:374`). The licence number is only in the footer (`index.html:500`). At 1440 the left half of the section is empty under the "0" (`b-10`). | Add a fourth item to "what I promise instead" with training, years, where she worked, and the Texas licence number with a link to look her up, at body size. | Gives a comparing visitor something checkable where a rating would be. | S, layout exists | Should fix. Cialdini authority; `research/02` section 4g. |
| 6 | The sentence that makes the headline warm ("In college I went four years without a cleaning...", `index.html:376`) is six phone screens down. The drawing that proves "price in writing" (`index.html:423`) is nine screens down, while "You keep the drawing." is said at screen two with nothing to look at. | Put a clause of the story into the line under the three steps ("Haven't been in years? I went four without. You're welcome here."), and show the drawing beside step three. | Both proofs arrive inside the first three screens, where the decision is made. | S to M | Should fix. Cialdini unity; LIFT anxiety. `brand/04` places the drawing in the cost section. I would put it at step three, or in both. The story sentence is invented and must be the real dentist's own. |
| 7 | "Call or text" is `tel:` everywhere (`index.html` lines 262, 483, 516). At night the bar's second button dials a closed practice. The only `sms:` link is a small one in the comfort section (line 362). | When closed, make the bar's second button "Text us" with `sms:`, and say when texts are answered. | Makes the second route usable in the hours when half the bookings happen, and catches the visitor with one question. | S | Should fix, if the line takes texts. Fogg ability; F16, F17. |
| 8 | At 390 x 664 (roughly iPhone Safari with toolbars) the "Next openings" chips sit at y 622 to 670, under the bar (top 600), and the footnote (718 to 773) is off screen (`a-00`). `copy.md` section 2 says the footnote must share a screen with the price at every breakpoint. At 390 x 844 both fit, by 7 px. | On phones, move the chips to directly under the subhead, or tighten the headline block by about 70 px. Check on a real phone. | The page's best evidence for "seen soon", and its best interaction, start on screen one. | M | Should fix. Emulated, not tested on a device. Fogg ability. |
| 9 | On a phone the ticker is a 2,392 px track in a 326 px window at about 46 px a second (`page.js:243`): a 52 second loop, one fact in view. `brand/03` section 8 specifies 64 px a second on phones and 80 on desktop. With motion off, the band shows all nine facts at once (`b-18`). | Below about 480 px, show the facts as the still, wrapped list. Keep the marquee from tablet width up, at the specified speed. | Nine facts delivered where one was. Nothing lost on a laptop, where four are in view. | S | Could fix. LIFT clarity, distraction. Against `brand/03` section 4, which gives the ticker to every width. For information the still list wins on a phone; for the client's brief on motion, the marquee earns its place on larger screens. |
| 10 | The cosmetic lane is two rows (`index.html:341` to `:342`): no top of the range, brand, length, inclusions or way to pay monthly. No work to look at. Her own teeth, which brand core Part 3 calls "the page's quiet promise to Persona B", appear once, in the laughing frame at the FAQ (`index.html:473`). | Say what the scan gives you ("the exact total, the months, and what's included, in writing"); add one line for B ("If I'd leave it alone, I'll say so."); place a smiling frame by lane two; add a stages or financing line and three consented cases when they exist. | Moves B from "comparing" to booking the $0 scan. | M | Should fix for B. Cialdini authority, social proof; `research/02` section 3 and section 4b row 9. Each new line is a promise the real dentist must confirm. |
| 11 | When "Stop the motion" is pressed, nothing in view is moving (`index.html:364`; the ticker is 3,000 px or more above on both devices). The label changes and "Motion is off." appears (`a-10`, `a-11`). Both personas: "nothing happened." | Have the helper line name what stopped ("Press it and the ticker, the bites and the stretching words hold still."), or let the button take one bite as it stops. | The stop-signal metaphor pays off, and stops puzzling. | XS to S | Could fix. LIFT clarity. `brand/03` section 5 makes this section still on purpose and says the control "moves nothing"; I agree with the stillness, and the finding is only that the press needs a visible answer. A new moving thing beside the button would break the rule of five mechanisms in `brand/03` section 0, so I am not proposing one. |
| 12 | The front-door picture shows a dark doorway at dusk and peeling paint, beside "Open now till 7:30." at 2:15 pm (`index.html:430`, `b-13`). The page has no picture of the room a patient sits in. | Brief the real photographs as: door open and lit, the sign in frame, daytime; add one picture of the room and chair. | Answers "is this place real and open?" for a practice with no reviews (office photographs doubled and tripled bookings on a marketplace, F12). | M | Could fix now; needed at launch. LIFT anxiety. The placeholder label is accepted; this is about the look the real picture will inherit. |

**Seen in passing, not ranked.** The in-page Book buttons do not take the chosen time, and they double the bottom bar on a phone. "Write a Google review" (`index.html:398`) is the only link in the proof section and sends a visitor who has not been in to write a review; a link to see the profile would suit a prospect, and review requests belong after the visit. The social card carries the headline without its turn sentence. The FAQ has no plain "Will it hurt?", which is the most common fear in F4; an answer about what she does, not how it feels, would stay inside the compliance rules. With motion off on a laptop, the still ticker list starts at the very edge of the window with no gutter. The 22:42 build's title tag reads "General Dentist in East Austin, TX | Feast Dental", where `copy.md` section 0 and brand core Part 2e set "Feast Dental | General dentist in East Austin | Dr. Paloma Krenek, DDS"; that is for whoever owns the head to settle.

## 10. Do not touch

These are doing the work. Change around them.

1. **The headline, the sentence directly under it ("I care about what's bothering you now."), and her face and name in the first screen.** Each of the three needs the other two. The break before "care" on phones is right.
2. **The hero strip: "$195 without insurance", its footnote, the "Next openings" chips, and a Book button that takes the chosen time's name.** Price beside the ask, a real time, and a commitment that costs one tap. The bite on the chosen chip is the one piece of motion both personas noticed and liked. "Sample times" must stay labelled until the scheduler is real.
3. **"0 reviews. I opened in October. Here's what I promise instead."** Add facts to it. Do not soften it, shrink it, or swap it for a borrowed quote.
4. **The drawing with "filling $190", and "You keep the drawing."** The most persuasive object on the page for anyone afraid of the bill.
5. **Step two: "Tell me what you've stopped eating. That's where I look first."** It is the brand idea in her mouth, and it is what makes the food pictures mean something.
6. **"Nothing gets added today without your yes." and "Only if you want to."** These two lines carry Persona B.
7. **"Nervous is normal here.", the eye-level photograph, and the cream ground under them.**
8. **The four-years story and the FAQ answer that repeats it.** Move a clause up; do not rewrite it into a claim.
9. **Prices at headline size, including "Consult $0 · 30 min".**
10. **The phone's fixed bar and the laptop's sticky header button.** One tap from booking at every position.
11. **The absence of pressure.** No countdowns, no "2 left", no pop-ups, no star row. Both personas noticed, in the sense that neither had anything to resent.
