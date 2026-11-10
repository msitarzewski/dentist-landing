# Cold read: does the page look generated?

Reviewer: qa-coldread (second cold read). Page: http://127.0.0.1:4173/ as served 2026-11-09 23:46 to 2026-11-10 00:02 CST. File times when the top finding was re-measured at 00:01: `index.html` 23:47:33, `assets/css/page.css` 23:42:12, `assets/css/bite.css` 23:56:32 (changed during the review), `assets/js/page.js` 23:17:47. Screenshots and crops: `.ops/qa/shots/coldread2/` (zoom crops in `zoom/`, contact sheets `sheet-*.png`). Step 1 was done before opening any project document; Step 2 after. My own tab only, closed at the end; the shared `motion` localStorage key was put back to `on` after I tested "Stop the motion".

## 1. Verdict

The design itself passes: the tangerine-and-lime poster type, the menu-board price list, the bitten-food still lifes, the "0 reviews." turn and the first-person voice read as one person's idea carried all the way down, and nothing in the layout matches generator or template defaults. What gives it away is the finish, not the concept: 17 visible square-bracket placeholders (the first in the hero footnote at every width, three of them editor's notes such as "[What moves the price: to confirm.]"), the same portrait re-run on three coloured walls, and the same numbered list and Book-plus-price-chip unit stamped three and five times, which together say "a filled-in template" to anyone who reads past the first screen. My confidence that a design-literate viewer calls it human-made is about even today; with the brackets gone I would put it near 80%, and with the portrait and repetition fixed the remaining tells only show at 100% zoom (these numbers are my judgement, not a measurement).

## 2. Step 1 notes, as written (unedited)

Written in order while scrolling, before opening any project document. Filenames are in `.ops/qa/shots/coldread2/`. Corrections made after Step 2 are in section 6.4, not here.

### 1440x900

**y=0 (d1440-00.png).** First thing I see: the orange. Then the headline, "I don't care how long it's been." set enormous in a heavy condensed grotesque, tight, black-brown on orange. It's first person and it has an attitude; that reads authored, not generated. Second thing: the woman on the right, cut out and dropped onto the orange, cropped by the right edge. Third: the boxed strip under the headline, "DR. PALOMA KRENEK, DDS / GENERAL DENTIST" in a squashed poster face, "$195" huge in a cream box, three time pills. It looks like a shop sign or a price board, which is an idea. Logo is a dark tab with a bite taken out of its corner. Lime pill buttons on orange: the pill shape is the generic part, the lime/orange pairing is not.
Stock-feeling: the time-slot pills (every booking widget), the marquee ticker with a "Pause" button (very 2023-25 agency template), the rounded-pill everything in buttons.
Gives itself away: the footnote ends "Good through [Month D, YYYY]." A literal unfilled placeholder in the hero. Anyone who reads small print will think "template". Also "As of 11:46 pm" next to "Sample times for this demo" is honest but busy.
Photo at this size: plausible. Even, symmetrical smile, glasses render clean, curly hair edge against orange is the thing to check up close. Her scrubs are near-black on orange, so the silhouette carries. Who made it: a small studio with a poster/sign-painting idea, or someone imitating one well.

**y=900 (d1440-01.png).** Cream paper. "Here's how it goes." in the same heavy face. Then the most template-shaped block so far: three numbered columns, 1 Book / 2 Look / 3 You decide, ruled like a table. What rescues it: an orange disc in each column that has been bitten, a little more each time, until column 3 is a sliver. That's a real idea and it ties to the bite in the logo. The copy rescues it too: "Tell me what you've stopped eating. That's where I look first." and "You keep the drawing." Nobody's generator writes "you keep the drawing". "Haven't been in years? I went four without. You're welcome here." is a person talking.
Stock-feeling: the 1/2/3 structure itself and the pill price chip + pill button pair at the bottom right (that pair repeats from the hero, so the page is starting to repeat its CTA unit).
Bottom edge: a band of coloured tiles starts (orange / lime / cream / orange) with food peeking in.

**y=1625, food band (d1440-01b-foods.png).** Four flat-colour tiles, edge to edge, no gutters: a bitten green apple on orange, bitten toast with a few crumbs on lime, grilled corn with a row eaten off on cream, a breakfast taco in foil on orange. Hard on-camera flash, short hard shadows all falling the same way (down-right). Captions "Apple." "Toast." "Corn." "Taco." with full stops, small, left-aligned under each tile. This is the strongest authored moment so far: it's a picture of "what you've stopped eating", and it reads like a food-magazine still-life spread, not stock dental imagery. The tile backgrounds match the UI orange and lime exactly, which is either very good art direction or compositing; a picky viewer might notice the match is too perfect. At this size nothing reads as generated. The toast crumbs sit a little like they're floating; check up close. The corn tile is wider than the others (480 vs 320), which breaks the rhythm in a good way.
The band has no headline and no explanation; the captions do the work. I like that.

**y=1800 and y=2600, services (d1440-02.png, d1440-03.png).** "What I do, and what it costs." then the sign line again, "DR. PALOMA KRENEK, DDS • GENERAL DENTIST", then a price list ruled like a diner menu board: service name huge on the left, "from $145" huge on the right, two category labels in the left margin ("KEEP YOUR TEETH WORKING", "CHANGE HOW THEY LOOK" with "Only if you want to. If I'd leave it alone, I'll say so."). This is the page's best structural idea after the food: a menu with prices on it, which no dental template does. The row nearest the middle of the screen turns lime and its title widens (Checkups was lime and wide at y=1625, Fillings at y=1800); I think that's a variable-font width change tied to scroll. Nice when you notice it.
Gives itself away, badly: three visible bracket placeholders in this one section. "X-rays, when they're due, are $[amount] more." "[What moves the price: to confirm.]" (that's an editor's note to self, published). "good through [Month D, YYYY]" again, this time at 20px body size in the closing paragraph of the section. With the hero one that's four. To a design-literate viewer, bracketed placeholders say "template someone filled in" or "a generator's draft", which is exactly what the client said they don't want.
Also: the sign line "DR. PALOMA KRENEK, DDS • GENERAL DENTIST" repeated in full right after the hero is the first sign of the page re-using a unit instead of saying something new.
At 1440 there's a big empty middle between description (max ~440px) and price. Fine for a menu; reads intentional.

**y=3450, comfort (d1440-04.png).** "Nervous is normal here." Then the dentist again, seated on a stool in an operatory, hands clasped on her knee, direct flash with a soft shadow on the wall behind her. Same glasses, same face as the hero, hair partly up this time. The flash look matches the food tiles, so the photography feels like one shoot by one photographer. That consistency is a point for "a person made this".
At this size the photo is believable, but it's the most generic frame so far: beige wall, beige cabinets, chrome tap, black chair arm. It could be any practice. It's also the second "dentist smiling at camera" in four screens.
Right column: one line of voice ("Say so at the door and I slow down. I tell you what's next before I do it. You set the pace."), then a ruled list of five comfort items. Plain, fine, no icons, which I'm glad of.
Authored oddity: a "Stop the motion" button with "Like the stop signal in the chair. Press it and the ticker, the corners and the stretching words hold still." Tying the reduced-motion control to "raise a hand and I stop" is a real idea. But the dentist naming "the corners and the stretching words" is the page describing its own design features to a patient. It's the one line in her voice that sounds like the designer talking.

**y=4350, meet the dentist (d1440-05.png).** Whole section goes lime. Big cut-out portrait on the left: Paloma holding a bitten green apple, flash shadow thrown on the lime wall behind her. Caption floating at the top, "Paloma. Apple." That caption made me smile; it's the same deadpan as "Apple. Toast. Corn. Taco." and it makes the apple a callback, not a prop. This is the best frame on the page.
"I'm Paloma." then a paragraph that's a real backstory: opened in October 2026, four years without a cleaning in college, no insurance, scared of the bill, "So you won't get a lecture from me about how long it's been." That pays off the hero headline. "Teeth are for biting. I keep them at it." is a line someone wrote on purpose.
Then a second numbered 1/2/3 list ("I ask first. / I draw it. / I price it in writing."). That's the second three-step list on the page, and it overlaps the first one (Look / You decide). Here the page starts to feel built from a kit: section, headline, numbered three. The rule of three is a known generator habit and the page uses it twice in four screens.
Small photo on the right: Paloma drawing a tooth on a clipboard (orange clipboard, black marker). At this size the drawing is a thick double outline of a molar. The drawing faces the camera, so she'd be drawing it upside down from where she sits. A viewer who looks will notice. Her hand and pen need a zoom.
Lighting check across the four portraits so far: hard flash, soft wall shadow, same glasses, same watch on her left wrist. Consistent. Hair: down in hero and apple; pulled up in comfort and drawing. Reads as two shoot set-ups, which is believable.

**y=4950, bottom of meet (d1440-05b.png).** Caption under the drawing photo: "The pad. The marker." Same deadpan; I like it, though three of these captions now ("Apple." / "Paloma. Apple." / "The pad. The marker.") is the limit before it becomes a tic.
Credentials line: "DDS, [dental school, year] · [university, year] · [number] years as an associate dentist at [two Austin-area practices]". Four bracket placeholders in the one place where a real person's page would be most specific. This is worse than the price placeholders: it's the "who is she" proof and it's blank.

**y=5250, zero reviews (d1440-06.png).** Dark brown section. A huge lime "0" on the left, "reviews." on the right in cream, then "I opened in October 2026. Here's what I promise instead." This is the bravest move on the page and the clearest sign of a point of view: a generator or template would have put three five-star testimonial cards here. Turning "no reviews yet" into the headline is something a person decides.
Then a numbered list again, 1 to 4, orange numerals: No lecture / The price in writing / I stop when you say / Look me up. That's the third numbered list. The content repeats the ticker and the first-visit steps nearly word for word ("No lecture", "price in writing", "raise a hand"). By here I've read "no lecture" four times and "in writing" five times. Repetition is on purpose (it's a promise), but it's where the energy drops.
Item 4 "Look me up." is followed by more placeholders: "DDS, [dental school, year], [number] years as an associate dentist in..." So the promise to be checkable ends in blanks.
The left half of this section below the "0" is empty brown for ~500px. At 1440 it's a lot of nothing.

**y=6100, end of reviews + cost (d1440-07.png).** End of the promises: "Texas license [number to confirm], on the state dental board's site." Placeholder again, in 20px body type. Then "Come in, then tell people how it really went. Feast Dental on Google". Good line.
Cost section is orange again. "You'll know the cost first." A segmented pill toggle "With insurance / No insurance" (the most standard UI component on the page; fine, it's functional). The paragraph under it ends "Good through [Month D, YYYY]. [What a deeper cleaning costs, and what the $195 covers that day: to confirm.]" Two more placeholders, one an editor's note.
Image on the right: a hand-drawn tooth on a spiral pad, cavity circled, arrow, handwritten "filling $190", black marker lying across the bottom. The image's top-right corner has a bite taken out of it (the scalloped mask from the logo). Caption "Fillings from $190." The handwriting is the most convincing "hand" on the page. But it's a different object from the one in the drawing photo two screens up: there she draws on a white sheet on an orange clipboard, a thick double outline; here it's a spiral pad with a detailed tooth. The caption up there said "The pad. The marker." and showed a clipboard. A viewer who connects them will see two props that don't match.

**y=6950, cost CTA + find us (d1440-08.png).** Cost section closes with the CTA unit for the third time: lime "Book online" pill, outline "Check my insurance" pill, the "First visit $195 without insurance · 75 min" chip. Same three objects as the hero and first-visit. By now it's a component being re-stamped.
"We're in Holly, East Austin." Storefront photo: cream-painted brick, an orange door frame, "2217" in metal numerals, a dusky purple strip of sky, a lamp glowing inside, a flash star bouncing off the door glass. Shot at dusk with flash. It looks like a real street photo, and the flash star is the kind of accident people leave in on purpose. The "2217" numerals are clean (text in frame often breaks in generated images; these hold at this size).
Hours table with today's row (Mon, "Today") in lime. Useful, plain.

**y=7800, find us bottom + FAQ (d1440-09.png).** Under the storefront: "The front door, 2217 Tejocote Street. Placeholder picture. [Parking, nearest bus stop and level entrance: to confirm]". The page calls its own photo a placeholder. Honest, but it tells the viewer the picture is fake right where it was doing its best work.
"Hablo español. Llama o manda un mensaje al (512) 555-0142." Specific to the neighbourhood; good.
"Go ahead, ask." FAQ as a plus-icon accordion. This is the most stock component on the page; every template has it. The questions are in her voice ("I haven't been in years. Is that a problem?"), which helps.
Photo on the right: Paloma laughing, looking off-frame, in a thin dark border. Fourth portrait of her. A laughing candid with teeth showing is exactly where generated faces go wrong; zoom it.

**y=8650, FAQ (d1440-10.png).** Eleven accordion rows. The laughing photo is sticky and rides along on the right; it fills the empty column, but it's the fourth portrait of her and it's doing no new work. The CTA unit appears a fourth time under the FAQ. This is where the energy is lowest: a long list of plus signs and a repeated button.

**y=9500, closing (d1440-11.png).** Back to orange. "No lecture. / Price in writing. / come in." with the last line set extra-wide, so the type literally stretches on "come in". That's the payoff of the condensed-face system and it lands. "Then go bite something." is the best sign-off line I've read on a healthcare page. Image: a bitten peach with one drop of juice on its skin, on lime, the bite-shaped notch cut from the frame's top-right corner, caption "Peach." Ending on the food closes the loop from the food band. Story has a shape: hurt/avoidance at top, the foods you've stopped eating, the person, the promise, the price, the door, then "go bite something".
The three-line tricolon headline is a rule-of-three, but here it's earned because each line is a callback.
CTA unit appears a fifth time.

**Footer (d1440-12-end.png).** Orange logo tab with bite on dark brown. Four columns: FIND US / CALL OR TEXT / HOURS / THE DENTIST AND OWNER, orange heads. "Texas dental license no. [number]". "© 2026 [Legal entity, PLLC], doing business as Feast Dental… run by [Legal entity, PLLC]." Then the honest note: "Demo page. The practice, the dentist and her story are invented. The photographs are AI-generated. The prices, hours, phone number and address are placeholders." Bottom right: an orange disc with "The only cookie on this site." Cute. It's the kind of easter egg a person adds; it's also a joke I've seen on a few indie sites, so it's charming rather than original.
Count of visible bracket placeholders on the page at 1440, by eye: hero footnote, services x3, credentials x4, promises x2+, cost x2, find-us caption x1 + "Placeholder picture.", footer x3. Fifteen or more. This is the single biggest thing between this page and "a person made it".

### Photographs up close (crops in coldread2/zoom/)

- **The three standing portraits (zoom/three-standing.png: hero orange, apple lime, laughing cream).** Same scrubs, same pen in the same pocket, same watch, same framing slightly right of centre, same flash, same wall shadow; only the wall colour and the expression change. Individually each is believable. Side by side they look like one seed run three times with "background: orange / lime / cream". On the page two of them (hero, apple) are four screens apart and both large; a design-literate viewer is likely to feel "that's the same picture re-coloured", which is a generator signature more than a photographer's (a real shoot drifts: the pen moves, the sleeves change, she shifts weight).
- **Skin (zoom/hero-face.png, apple-face.png, laugh-face.png).** At 2-3x the skin is a sharpened freckle-noise texture with faint swirls, the over-detailed "AI skin" look; nose and cheeks have the waxy specular. At 1x on a non-retina screen it's hidden. On a 2x screen the apple portrait is shown at about 1 source px per device px, so the texture is close to visible.
- **Earrings.** In every portrait her left-ear hoop (image left) is bigger and hangs lower than the right. Consistent, so it reads as a model quirk rather than a styling choice.
- **Watches (zoom/hero-hand-r.png, apple-watch.png, listen-hands.png, draw-hand2.png).** Every watch is a blank white dial with no hands and no markers, one dot, crown in the wrong place. Small on the page (about 15-25 CSS px) but it's in four frames. A photographer or a watch person would catch it.
- **Hands.** Knuckle creases render as neat concentric rings (listen-hands.png, apple-hand.png); fingers a little long and rubbery. Not broken, but the listening photo's clasped hands sit at the visual centre of that frame at about 1:1.
- **Listening photo tap (zoom/listen-sink.png).** A lever on a chrome body with no spout. Impossible object, visible at the left edge of the comfort photo on desktop. The counter/sink also differs from the drawing photo's (speckled cream counter, square sink, lever tap vs grey counter, round sink, gooseneck tap): two different "same" operatories.
- **Drawing photo (paloma-drawing-1536.jpg).** Spiral pad on an orange clipboard with the clip at the far end, so the drawing faces the viewer and she's drawing upside down. That's actually what a dentist does across a chair, so I'll let it go. The marker line has a rope-like wobbly edge. The tooth she draws (thick double outline, no cavity) is not the tooth in "the drawing" flat-lay (detailed molar with circled cavity and "filling $190"), so the "you keep the drawing" story doesn't hold across the two frames.
- **The drawing flat-lay (src/the-drawing.png).** Nicest object on the page, but "filling $190" is too even; it reads as a handwriting font. Spiral rings are regular and correct.
- **Laughing photo teeth (zoom/laugh-face.png).** Even, small, many teeth, slightly blurred into each other. On a dentist's page, teeth are the one thing visitors will judge; at the page size (about 320px wide) it holds, but zoomed it's soft.
- **Food (zoom/four-foods.png, src/bite-corn.png).** Strongest set. Bite marks, char on the corn, foil, the peach juice drop all hold up at 100%. Light direction is consistent across all five. The toast crumbs are fine (it's a top-down shot). I would not flag these to a viewer.
- **Storefront (src/storefront.png).** Holds up at 100%: brick coursing, flaking paint, hinges, the flash star in the glass, "2217" in clean metal numerals. The caption calling it a "Placeholder picture." hurts it more than any pixel does.
- **Hero on the page (zoom/hero-seam-1440.png).** The photo's orange is graded to the page orange; no seam at 1x. Good work.

### Interaction and motion at 1440 (what I saw vs inferred)

- **Hero headline "chew" (d1440-motion-chew-frozen.png).** On load each word of the headline squeezes narrow and springs back, one after another, 45ms apart. I froze it at its tightest frame: gaps open between the words like jaws closing. Observed only as frozen frames and animation data, not watched in real time. It's on-idea (chewing) and it's not a stock fade-up. Good.
- **Ticker.** Runs continuously (41s loop) with a Pause button on its left. Contents include "YOU READ THE WHOLE PAGE. I LIKE YOU ALREADY." That line sits in the very first band of the page, before anyone has read anything, so the joke lands wrong where it is.
- **Service rows.** On hover a row goes lime and its title stretches wide (confirmed in CSS, `.svc__row:hover`); the lime rows in my screenshots were wherever the pointer sat. Feels like a menu board lighting up. Good.
- **Buttons.** Lime pill inverts to dark brown with lime text on hover (d1440-hover-btn.png). Competent, standard.
- **Nav hover.** CSS says underline; my hover screenshot didn't catch it (d1440-hover-nav.png). Unremarkable either way.
- **Cookie.** Each click takes a bite out of the orange disc in the footer (zoom/cookie-1-vs-3.png). Charming; an Easter egg a person adds.
- **Insurance toggle.** Swaps the paragraph; with insurance it reads "We're in-network with [each plan by name]." Another placeholder, behind an interaction.
- **Stop the motion.** Works: everything stops, label flips to "Start the motion", status "Motion is off." Stored in localStorage (I restored it to "on" afterwards since other tabs share the origin).
- Not observed in real time: the bite icons' "munch"/"recoil", the crumbs, the "restock", "open-wide" on "Come in.". I only saw their keyframe names and end states.

### 1024x768 (t1024-00 … t1024-13-end.png; contact sheets sheet-t1024-b/c/d.png)

- **y=0 (t1024-00).** Holds together. Headline still two lines, the photo still bleeds off the right, the sign block stacks name over "GENERAL DENTIST", "Call" button shortens to "Call". Status shortens to "Booking's open all night". Same read as desktop: authored poster, placeholder in the footnote.
- **y=696 (t1024-01).** The ticker passes "YOU READ THE WHOLE PAGE. I LIKE YOU ALREADY." right under the hero. Same mistimed joke. Three-column steps keep their bitten discs.
- **y=1392 (t1024-02).** Food band shrinks to 228px tall tiles; still the best moment. CTA pair again above it.
- **y=2088 (t1024-03).** Menu rows hold; the price column stays big. Placeholders "$[amount]" and "[What moves the price: to confirm.]" read the same.
- **y=2784-4872 (sheet-t1024-b).** Comfort photo crops tighter (she's now a small figure at left of a beige frame); it's weaker here, mostly wall and cabinet. Meet: the 1/2/3 list and the drawing photo squeeze into a narrow middle; "I price it / in writing." breaks. Zero-reviews block holds.
- **y=5568-7656 (sheet-t1024-c).** Cost, find us, FAQ all hold. Storefront at 330px wide still reads as a real photo. Under it, "Placeholder picture. [Parking, …: to confirm]".
- **y=8352-end (sheet-t1024-d).** FAQ, closing, footer hold. Nothing new: the tablet-landscape layout is a faithful shrink of the desktop, no breakage, same tells.

### 768x1024 (p768-00 … p768-10-end.png; sheets sheet-p768-a/b/c.png)

- **y=0 (p768-00, zoom/p768-hero-band.png).** Headline goes to three lines and gets taller and better. The portrait switches to a head-and-shoulders crop sitting on top of the cream "$195" bar, cut at the chin line. Reads like she's leaning over a shop counter, which suits the sign idea; it could also read as a head on a shelf. A big empty orange field sits left of her face, between the intro and "DR. PALOMA KRENEK, DDS". The placeholder footnote is the last thing on the first screen.
- **y=952-2856 (sheet-p768-a).** Steps become stacked rows with the bitten discs on the right: better than the three columns, less template. Food band is 100px tall tiles: the food gets small; the corn and taco start to read as thumbnails. Menu holds.
- **y=3808-5712 (sheet-p768-b).** Comfort photo shrinks to a 210px thumbnail beside the list; it's doing nothing at this size. The apple portrait becomes a near-full-viewport image before "I'm Paloma."; good. Credentials placeholders sit right under the drawing photo.
- **y=6664-8568 (sheet-p768-c).** Cost, find us, FAQ fine. The laughing photo sits top-right of the FAQ.
- **End (p768-10-end).** Closing reads well at this width: three-line headline beside the peach, "Then go bite something." Footer fine.
- No layout breakage at 768. The tablet portrait version is, if anything, the best-proportioned of the four.

### 390x844, DPR 2, mobile + touch (m390-00 … m390-17-end.png; sheets sheet-m390-a…e.png). scrollWidth 390, no zoom-out.

- **y=0 (m390-00).** Demo strip takes two lines. Headline three lines, big and good. Portrait band with her head sitting on the "$195" bar, "GENERAL / DENTIST" stacked beside her. Time pills, then the footnote, and the footnote ends "Good through [Month D, YYYY]." at readable size on the first screen. The lede ("I care about what's bothering you now…") comes after the footnote, at the very bottom of the screen, half hidden by the sticky "Book online / Text us" bar. On a phone the order is headline → sign → price → pills → small print → the actual sentence. A designer would put the lede before the small print.
- **y=724 (m390-01).** Lede and insurance line, ticker, "Here's how it goes." Steps stack with a big empty gap between each numeral and its title; the bitten discs float right. Still on-idea.
- **y=1448-2896 (sheet-m390-a).** Food band is a 2x2 grid; tiles are big enough to enjoy. Menu stacks: name, "from $145", description. Works as a menu. "$[amount]" and "[What moves the price: to confirm.]" readable.
- **y=3620-5068 (sheet-m390-b).** Comfort photo full width; fine at this size. Apple portrait at full width on lime with the caption under it, then "I'm Paloma." Strong.
- **y=5792-7964 (sheet-m390-c).** Drawing photo, then credentials line with four brackets. "0 reviews." block: the "0" sits alone above the word. Cost section: the "No insurance" paragraph shows "[Month D, YYYY]" and "[What a deeper cleaning costs, … to confirm.]" at 15-16px, unmissable. Drawing flat-lay full width with the bite corner.
- **y=8688-10860 (sheet-m390-d).** Storefront, caption with "Placeholder picture." and brackets, hours, FAQ, laughing photo, closing. On the phone the closing stacks: headline, "Book online", "Call", the chip, "Then go bite something." With the sticky bar that's two identical "Book online" buttons on screen at once.
- **End (sheet-m390-e).** Peach full width with bite corner, footer two-column, the cookie. Fine.
- Phone verdict: the layout is solid and the idea survives. The placeholders are more prominent on the phone than anywhere else because body text is large and there's nothing beside them.

## 3. The tells, ranked by how likely a viewer is to catch them

Severity uses the QA scale (blocker / should fix / could fix), judged against the client's requirement only.

### 1. Square-bracket placeholders in the copy. Blocker.

- **Where.** 17 visible at 1440 with nothing pressed, 21 including FAQ answers and the "With insurance" tab (counted from `document.body.innerText` / `textContent`, re-counted at 00:01). In `index.html`: :410 hero footnote `#fn1` (in the first screen at every width; on the phone it is the last full line above the sticky bar); :477 Checkups row "$[amount]"; :485 Whitening row "[What moves the price: to confirm.]"; :489 services closing paragraph at 20px; :530 `#dentist` credentials line, four brackets; :541 promise 4 "Look me up.", three; :557 and :603 "[each plan by name]"; :558 cost panel "[Month D, YYYY]. [What a deeper cleaning costs, and what the $195 covers that day: to confirm.]"; :575 storefront caption "Placeholder picture.<br>[Parking, … : to confirm]"; :610 FAQ "call [number]"; :612 "[Cancellation policy to confirm.]"; :646 footer "license no. [number]"; :648 "[Legal entity, PLLC]" twice. Screenshots: d1440-00, -03, -05b, -07, -09, -12-end; m390-00, sheet-m390-c.
- **What gives it away.** Bracket slots are what an unfilled template or a model's first draft looks like. Three of them are notes to an editor, which reads as process leaking onto the page. The page already invents the phone, address, hours and every price smoothly, so the brackets are not read as caution; they are read as unfinished. On the phone they are bigger than anywhere else because body text is 15 to 17px with nothing beside it.
- **Fix.** Treat them in three groups.
  - Facts of the same kind the page already invents (dates, an add-on fee, a policy): write a value or cut the clause. :410, :489, :558 "Good through [Month D, YYYY]" becomes "Good through June 30, 2027." (or delete the clause in the demo). :477 becomes "X-rays, when they're due, are $60 more." :485 delete the bracketed sentence; the row already gives both prices. :558 delete the second bracket; the paragraph already says the fee is higher and priced in writing first. :612 becomes "Cancel by 5 pm the day before and there's no fee." :610 becomes "After hours, call the same number." :557 and :603 start the paragraph at "Tell us your plan when you book and we'll say whether we're in-network, and what out-of-network would cost, before you come."
  - Facts that name real-world records, which the brand core (Part 4) says must not even be guessed: do not fill them, take them out of the demo and let the footer note cover it. :530 keep only "Dr. Paloma Krenek, DDS · General Dentist". :541 becomes "Look me up. My Texas license is public on the state dental board's site." :646 drop "Texas dental license no. [number]". :648 becomes "© 2026 Feast Dental. Owned and run by Dr. Paloma Krenek, DDS, General Dentist."
  - The access line under the storefront, which the inclusive review (§3.4) wants kept so the picture does not claim a level entrance: keep the meaning, lose the bracket and the CMS tone. :575 becomes "The front door, 2217 Tejocote Street. Stand-in photo; parking, the nearest bus stop and the entrance are still to be confirmed." (No "level", "step-free" or "accessible", per §3.4.)

### 2. The same portrait three times on three walls. Should fix.

- **Where.** `paloma-hero-1122` (hero, 1440 y 105–815), `paloma-apple-1122` (`#dentist`, y 4402), `paloma-laughing-720` (`#faq` `.lfig`, `index.html`:619, sticky beside the questions). Side by side: `zoom/three-standing.png`.
- **What gives it away.** Same scrubs and creases, pen in the same pocket, same watch, same framing a little right of centre, same flash and wall shadow; only the wall colour and the expression change. Hero and apple share the head angle, expression and hair wave for wave. That is how a generator's variations look; a real shoot drifts. At 1440 the hero and the apple portrait are both large and about ten seconds of scrolling apart. The laughing frame is a fourth portrait of her and does nothing the FAQ needs.
- **Fix.** (a) Drop `.lfig` from `#faq` and set the section as `02` §6.10 specifies: h2 in c1–c4, the list in c5–c12, max 880px. (b) Regenerate `paloma-apple` as a different moment (the inclusive review already lists it as a "Could", §5 item 15): waist-up rather than knee-length, three-quarter turn to camera-left, apple just lowered from a bite with her eyes on it rather than on the lens, hair in the low knot from the listening and drawing frames, sleeves down. Keep the lime sweep, the flash and the "Paloma. Apple." caption.

### 3. The page re-stamps its own units. Should fix.

- **Where.** Three numbered lists: `#first-visit` steps 1–3, `#dentist` "I ask first. / I draw it. / I price it in writing." (`index.html`:523–527), `#promises` 1–4. The Book online pill with the $195 price beside it five times: the hero booking strip, :455, :565, :616, :630 (plus the header button and, on phones, the bottom bar). Phrases across the page (text content): "in writing" 10, "Book online" 10, "$195" 8, "before I start" 7, "price it" 7, "lecture" 6.
- **What gives it away.** A person editing their own page cuts duplicates; a component kit restates them. The dentist-band list repeats steps 2 and 3 nearly word for word, and the promises repeat the ticker. From `#promises` to the end of `#faq` (about 4,100px at 1440) the viewer meets no claim they have not already read.
- **Fix.** Delete `ol.pts` in `#dentist` (:523–527) and keep the drawing photo beside the bio; the pull line "Teeth are for biting. I keep them at it." can end the bio on its own. Set `#promises` as a ruled list without numerals so numbering belongs to the first-visit steps only. Remove `.faq-foot` after the FAQ (:614–617) and the chip after the first-visit steps (:455; keep "Haven't been in years? I went four without. You're welcome here." and the button). In the Fillings and Emergency rows keep "price it before I start" once, not twice.

### 4. On phones the small print comes before the lede. Should fix.

- **Where.** `#top` below 640px (m390-00.png, m390-01.png): h1, designation, portrait band, $195 bar, time chips, sample note, footnote `#fn1` ending "[Month D, YYYY]", and only then `.hero__sub` "I care about what's bothering you now…", half under the bottom bar. In the DOM `.hero__sub` (:391) comes before `#fn1` (:410), so the phone rules reorder it. `02` §6.1 (390 diagram) puts the subhead at y 229, directly under the h1.
- **What gives it away.** It looks like a grid fell back to an order nobody chose; a designer would not put a footnote above the sentence that sells the page.
- **Fix.** In the `max-width: 639.98px` hero rules (`assets/css/page.css` from :548) place `.hero__sub` and `.hero__hrs` directly after `.h1` and before the portrait band, and `#fn1` last. Recheck the 14px of spare height the spec mentions above the bar.

### 5. Template-shaped blocks at desktop width. Could fix.

- **Where.** `#first-visit` at 1024 and up (d1440-01.png, t1024-01.png): three equal ruled columns, each a numeral, a glyph top-right, a title and a paragraph. This is the "three features with icons" shape even without card boxes. The 768 version (sheet-p768-a.png) stacks them as rows with the disc on the right and reads like a ledger, not a template.
- **What gives it away.** The shape, not the content; the bitten discs and the copy rescue it for anyone who reads.
- **Fix.** Use the stacked-row layout at every width (numeral | title and text | disc), content max about 900px, left-aligned.

### 6. The designer's voice leaking into the dentist's. Could fix.

- `index.html`:509 "Press it and the ticker, the corners and the stretching words hold still." A dentist would not name the page's design features to a patient. Becomes: "Like raising a hand in the chair. Press it and the page holds still."
- :602 FAQ 1 opens "$195 at Feast Dental in East Austin, and it takes 75 minutes." That is written for a search snippet. Becomes "$195, and it takes 75 minutes."
- :391 the lede is a three-part list ("a real look, the price in writing, and no lecture") that the ticker and the closing headline repeat. Becomes "I care about what's bothering you now. I'm Paloma, a general dentist in East Austin, and you'll know the price before I touch anything."
- Captions: eight in the same deadpan ("Apple." "Toast." "Corn." "Taco." "Paloma. Apple." "The pad. The marker." "Fillings from $190." "Peach."). That is the limit; add no more.

### 7. Photograph details visible at 1:1 on a 2x screen. Could fix.

- **Blank watch dials** in four frames (zoom/hero-hand-r.png, apple-watch.png, listen-hands.png, draw-hand2.png): white face, no hands, no markers, crown in the wrong place. About 15–25 CSS px on the page. Fix: retouch the dial in each `assets/img/src/paloma-*.png` (two hands at about 10:10, four hour marks; a 40px patch, no regeneration) and rebuild with `tools/build-images.mjs`.
- **A tap with no spout** in `paloma-listening` (zoom/listen-sink.png), at the left edge of the comfort photo at 1440 and 1024. Fix: crop the source to x 280 and right before the build, or inpaint a spout.
- **Skin** in the apple and laughing frames is a sharpened freckle-noise texture with faint swirls at 2–3x (zoom/apple-face.png, laugh-face.png); on a 2x screen the apple portrait is shown at about 1 source pixel per device pixel. Fixed by the regeneration in tell 2 if the prompt asks for film grain and no sharpening; I did not check whether the build step sharpens.
- Not worth fixing for a viewer: the larger left hoop in every frame, knuckle creases drawn as rings, the even "handwriting" on `the-drawing`, the syrupy peach drop.

### 8. Measure. Could fix.

- `#fn1` runs 106 characters a line at 1440 and `.hero__hrs` 90 (measured per line with ranges); `02` §7 calls anything over 66 a defect. Fix: `max-width: 60ch` on both. Several 20px body blocks run 67–75 (comfort note 75, promise 2 73, promise 4 71, FAQ "Will it hurt?" 70), which is what the spec's own `max-width: 36em` produces in Public Sans at 20px; that is a finding against `02` §1.3 as well: 33em holds 66.

## 4. What is working and must not be sanded off

- The headline, its size, sentence case and first person, and the "chew" on load (d1440-motion-chew-frozen.png). It is the page's signature.
- The food band: four bitten foods, direct flash, flat sweeps in the page's own colours, one-word captions, the wider corn tile. The strongest frames on the page; they hold at 100%.
- Services as a menu board: huge prices, ruled rows, the lane labels in the margin, the hovered row going lime and its word stretching wide.
- "0 reviews. I opened in October 2026. Here's what I promise instead." The clearest sign of a person deciding something.
- The ground colour sampled from the portrait's wall, so the hero has no cut-out edge (zoom/hero-seam-1440.png). Four colours, one radius, no shadows: the discipline is visible.
- The bite as one device: the logo plate, the discs eaten across the steps, the notch on two frames only, the cookie in the footer.
- Lines to keep word for word: "Tell me what you've stopped eating. That's where I look first." "You keep the drawing." "Haven't been in years? I went four without." "Teeth are for biting. I keep them at it." "Sometimes, a little. The numbing is a pinch." "Hablo español. Llama o manda un mensaje al (512) 555-0142." "Then go bite something."
- No em dashes, no "not just X but Y", no superlatives anywhere (checked in the text).
- "Stop the motion" framed as the chair's stop signal: keep the idea, change the caption (tell 6).
- The storefront photograph itself, and the deadpan captions as they are.

## 5. The story arc

| # | Section | What the image does | What the headline does | Energy |
|---|---|---|---|---|
| 1 | Hero | Puts a person in the first screen; her wall is the page colour | Setup: permission, "I don't care how long it's been." | High |
| 2 | Ticker | none | Facts in motion; restates the hero | Mid |
| 3 | First visit | Bitten discs, one bite more each step | "Here's how it goes." The process | Mid |
| 4 | Food band | The turn: what you've stopped eating | No headline; captions carry it | Highest |
| 5 | Services | none; the prices are the picture | "What I do, and what it costs." A menu | High |
| 6 | Comfort | Seated portrait in a beige room; the most generic frame | "Nervous is normal here." | Mid-low |
| 7 | Meet the dentist | Apple portrait as a callback to the food; the drawing photo | "I'm Paloma." Backstory pays off the headline | High |
| 8 | Zero reviews | The "0" as a graphic | Second turn: no reviews, promises instead | High, then the list sags |
| 9 | Cost | The drawing with "$190" | "You'll know the cost first." Third telling of the price story | Mid |
| 10 | Find us | Storefront at dusk | "We're in Holly, East Austin." Place | Mid; "Placeholder picture." undercuts it |
| 11 | FAQ | Fourth portrait; no work | "Go ahead, ask." | Lowest |
| 12 | Closing | Bitten peach, callback to the food band | "No lecture. Price in writing. Come in." then "Then go bite something." | High; a real ending |
| 13 | Footer | The cookie | none | Grace note |

It has a beginning (permission), a turn (the food, then "0 reviews") and an end (go bite something). It sags from the promises list through the FAQ (rows 8–11): the same three claims for a fourth and fifth time, and a portrait that adds nothing. The fix is subtraction (tells 2 and 3), not new material. Two smaller gaps: the food band's meaning hangs on one sentence about 600px above it; on phones the band is a sideways swipe (1080px wide, 390 visible: apple and half the toast), so corn and taco are only seen by people who swipe. And at 768 the comfort photo shrinks to a 210px thumbnail beside the list (sheet-p768-b.png), where it does no work; stack it full width above the list in the 640–1023 range or drop it there.

## 6. Step 2: against the team's own documents

### 6.1 Did the intended idea come through?

Yes. Without reading anything I named the bite as the brand device (logo plate, discs, notch), read the food as "what you've stopped eating", read services as a menu board with prices at headline size, read "0 reviews" as a deliberate turn, and heard one person's voice from the headline down. That is `brand/00-creative-direction.md` "The idea" and "Positioning and voice" nearly line for line. Two parts I did not perceive: "press is the bite" on buttons (CSS shows it on `:active`; I never caught a pressed frame) and "a shape is eaten as you scroll" (I read the three discs as a static sequence). "Never a spa" and "funny" came through (the cookie, the captions, the send-off).

### 6.2 `brand/02-visual-system.md` §7, checked against the build

Measured at 1440 in my tab: computed font families, text and background colours, radii, shadows, Anybody weights, Public Sans sizes and transforms, and characters per line.

| §7 item | Result | Evidence |
|---|---|---|
| Text lines longer than 66 characters | **Fail** | `#fn1` 106, `.hero__hrs` 90, demo strip 89; body blocks 67–75 (tell 8) |
| Same two-column image-and-text block alternating | **Partial** | From Comfort to Closing, five of seven sections are heading + text column + one photo column (photo left, left, right, left, right, right). Not strict alternation; dropping the FAQ photo breaks the run |
| A card grid for steps; three equal cards with an icon on top | **Partial** | No cards, no boxes, but at 1024+ the steps are three equal ruled columns with a glyph top-right (tell 5) |
| Lime without an ink rule on paper or ground | **Unclear** | The lime-sweep photographs (toast tile, peach frame) sit on orange with no rule. Pass if photographs are exempt, which I assume was the intent |
| A paper stretch longer than two sections | Pass, just | Services and Comfort are two paper sections back to back; First visit is separated from them by the food strip |
| Third typeface; Anybody under 800; Public Sans over 28px; tracked caps in Public Sans | Pass | Two families only; no Anybody below 800; no Public Sans above 28px; no uppercase Public Sans |
| Fifth colour; `#000` or `#fff` | Pass | Text colours: ink, paper, ground, counter. Backgrounds: the same four |
| Second radius; any shadow | Pass | 999px pills and 50% discs only; no box or text shadow anywhere |
| Icons, star rows, counts, giant footer wordmark | Pass | Crescent status mark and FAQ plus marks only |
| Bite rules (corner, count per viewport, through a face or price, Comfort) | Pass | Two notched frames, top-right, far apart; none in Comfort. Hairline not checked at zoom |
| Centred hero; portrait in a rounded frame or soft-edged cut-out | Pass | |
| Overlay over the first screen | Pass | |
| Motion tells (pulsing dot, shimmer, hover lift) | Pass | Only the ticker runs at rest; buttons colour-swap on hover |

Also from the spec, not in §7: the phone hero order departs from §6.1 (tell 4); at 640–1023 the §6.1 text has the price block laid over the photograph's empty third, while the build sets a full-width cream bar under the band, which cuts her at the chin (zoom/p768-hero-band.png). It reads as leaning over a shop counter, so I would keep it, but it is a departure.

### 6.3 My Step 1 concerns that were already known

| Concern | Where it was known | Accepted? | Do I agree? |
|---|---|---|---|
| Bracket placeholders | `content/copy.md` line 10 ("print on the demo page as written"); brand core Part 4; `.ops/qa/README.md` rule 5 | Yes | **No.** Accepted as a content rule, never judged against the "not identifiable as generated" requirement, and the page has 17 visible against the 11 the copy file lists. Keep the rule for the four real-world identifiers and write the rest (tell 1) |
| Hero and apple are the same head | Inclusive review §3.5 rank 3; "Could" regenerate, §5 item 15 | Mitigated by keeping them out of one viewport | **No.** Separation is not enough at 1440, and the laughing frame makes it three. Upgrade to should (tell 2) |
| Watch dials with no hands | Inclusive review §3.5 rank 9, "only at 100% or on a 2x screen" | Yes | Partly. Most of this audience is on 2x screens; it is cheap to retouch |
| Larger left hoop | Inclusive review §3.1 | Yes | Yes |
| Peach juice | Inclusive review §3.5 rank 5 | Yes | Yes |
| "Placeholder picture." under the storefront | Requested by the inclusive review §3.7 item 3 | Yes | Yes to the disclosure, no to the wording (tell 1, third group) |
| Disclosure strip and footer note | Inclusive review §3.7 | Required | Yes. It primes viewers to look for AI, which is one more reason the brackets and the repeated portrait matter |
| Drawing photo vs the flat-lay | Inclusive review asked for a regenerated frame with the spiral pad on a tangerine clipboard | Done | Mostly resolved: the props now match and the sketch reads as unfinished. I withdraw the Step 1 point except that the sketch lacks the pulp line the finished drawing has |
| Taco read as a burrito | Inclusive review §1 | Regenerated | Resolved: it is a folded taco now |
| Tap with no spout (`paloma-listening`) | Not listed anywhere I read; the review proposed this frame before it existed | n/a | New finding (tell 7) |
| Footnote before lede on phones | Not listed | n/a | New finding (tell 4) |
| "the corners and the stretching words" caption | Specified in `02` §6.5 | Yes | No (tell 6) |
| Long lines | `02` §7 forbids them | Not accepted | Failing (tell 8) |

### 6.4 Corrections to my Step 1 notes

- The hero is not a cut-out: it is a photograph on an orange sweep whose colour was taken as the page's ground (`02` §0), with the left edge feathered. Better than I first credited.
- The ticker line "You read the whole page. I like you already." is added by `assets/js/page.js`:305–309 only after the closing section has been 40% in view, so it is true when it appears. My Step 1 complaint about it is withdrawn; only people who scroll back up will see it, which is fine for an Easter egg.
- The lime service rows in my first screenshots were pointer hover, not a scroll effect (`.svc__row:hover`).
- "Teeth are for biting" was never put in front of the viewer as a slogan except as the pull line in the dentist band; it still came through, which is the best evidence the idea works.

## 7. What I could not judge

- Motion in real time. I saw frozen frames (the chew) and keyframe names (recoil, munch, crumbs, restock, open-wide, the scroll-nudged ticker), and I clicked the cookie, the insurance switch and "Stop the motion". I did not watch the timing, the bite on button press, the discs being eaten on scroll, or "Come in." opening wide.
- Real devices, Safari and Firefox, and touch behaviour beyond emulation. Retina rendering of the photographs was simulated by viewing the sources at 1:1.
- Absolute colour: this browser's screenshots dull saturated orange; I judged colour by computed values and the source files.
- Whether someone who is not design-literate notices the brackets, and whether a dentist would read anything in the laughing frame's teeth at page size.
- Whether `tools/build-images.mjs` sharpens portraits (not read).
- Documents outside the four I was given, apart from a search of `content/copy.md` and `brand/01-brand-core.md` for the bracket rule. I did not open the image prompts, `brand/03-interaction-spec.md` (its §10 motion tells) or the designer's proofs.
- Keyboard focus styling and screen-reader output (other reviewers' scope).
- `bite.css` changed at 23:56 while I was reviewing. I re-counted the brackets at 00:01 and the top finding stands; I did not re-shoot every viewport after that change.
