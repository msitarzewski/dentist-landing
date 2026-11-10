# 04 — Inclusive visuals review: the generated photographs

Status: review of the fourteen generated frames in `assets/img/src/`, 2026-11-09. No image was generated or edited for this review.

New file because nothing in `research/` covers the pictures themselves: `01` and `01b` are inspiration and capture, `02` is audience and rules, `03` is motion.

**How it was done.** Every PNG was opened at full size, then cropped and enlarged 2.5x to 7x on faces, hands, teeth, pockets, the pad, the door and the bites. Each frame was also scaled to the size it will run (hero 700 px wide, dentist frames 600 px, still lifes 400 px). Skin patches were sampled as CIELAB medians of 28 px squares. Read against: `brand/01-brand-core.md:106-136` and `:257`, `brand/00-creative-direction.md:51` and `:68`, `assets/img/prompts/README.md`, the thirteen prompt files, `content/copy.md` sections 2, 7, 10, 13 and 14, `research/02-audience-and-conversion.md` section 6. What was not done is listed in section 6.

---

## 0. The calls

1. **Hero: `paloma-hero.png`.** `paloma-hero-b.png` does not ship.
2. **Regenerate two frames before they are built in:** `bite-taco` (it is a burrito) and `paloma-drawing` (she is drawing a tooth icon, and the frame drifts from the hero).
3. **Crop one:** `paloma-laughing`, to chest-up.
4. **Do not add patients or staff.** Add one frame, `paloma-listening`, shot from the patient's seat with nobody in it.
5. **The page's notch must sit top-left on `paloma-hero` and `paloma-laughing`.** At the specified 30% it would otherwise cover her right eye.
6. **The demo needs a line at the top of the page** saying the dentist is fictional and the photographs are generated. The footer note says neither.

---

## 1. Verdict per image

| Image | Verdict | Exact reason |
|---|---|---|
| `paloma-hero.png` | **Ship. This is the hero.** | Closed-mouth smile, eyes on the lens, empty hands: passes `prompts/README.md:109`. Skin has pores, freckles, flash shine and fine lines. Conditions: notch top-left only (her right pupil is at x 75%, y 17%; a top-right notch covers x 70 to 100, y 0 to 24). Her face centre is at x 71% and her hair top at y 5%, outside the targets at `prompts/README.md:197` (58 to 64, below 7). Both hands are cut through the fingertips by the bottom edge; what shows is correct. |
| `paloma-hero-b.png` | **Do not ship.** | Full toothy smile: fails the brief's own check (`prompts/README.md:109`) and "no stock smiles" (`brand/00-creative-direction.md:51`, `:68`). It puts generated teeth in the hero of a dental page. Head tilt about 7 degrees against about 5 in the first take. She reads older, and the forehead texture loops in whorls at 100%. |
| `paloma-apple.png` | **Ship.** | Four fingers and a hidden thumb around the apple, short bare nails, mouth closed, bite facing the lens. From the neck up it is almost the hero again: same angle, same expression, the same hair wave for wave. Keep it out of any viewport that also shows the hero. Notch top-right is clear here. |
| `paloma-drawing.png` | **Regenerate.** | (1) She is drawing a closed, symmetrical, even-weight molar outline: a tooth icon, which the direction bans (`brand/00-creative-direction.md:68`) and which turns the dentist's one distinctive habit into stock. At 600 px it is the first thing that reads. (2) Two markers: one in her hand, one in the pocket. (3) Her glasses have become a heavier near-black frame with rivets; the other frames show thin tortoiseshell. (4) Freckles are visibly denser than in the hero, with blemish marks the hero does not have. (5) The pad is loose sheets on a clipboard; `the-drawing` shows a spiral pad. (6) Her head touches the top edge (hair at y 1%), and on the phone square crop the notch zone (x 47 to 67, y 0 to 30) lands on her face. Exact prompt change in section 2. |
| `paloma-laughing.png` | **Ship with crop.** | Crop to x 380 to 1100, y 20 to 920 of the 1122 x 1402 source (4:5), or square at x 312 to 1122, y 20 to 830. Notch top-left. Full length, the taken-in waist, the cocked hip, hands in pockets and the off-camera laugh add up to a scrubs advert, which `brand/01-brand-core.md:136` rules out. The laugh is the content and survives the crop. Teeth pass: upper row only, about ten showing, warm ivory (about `#EDD9C9`), regular but not veneer-white. Do not brighten them. |
| `bite-apple.png` | **Ship.** | Reads as a real apple with a real bite at 400 px. |
| `bite-toast.png` | **Ship.** | Three brown crumbs, no pale fragments. |
| `bite-corn.png` | **Ship.** | Plain grilled corn. The eaten strip of pale kernel stubs is the nearest thing in the set to a row of teeth; at 400 px it reads as corn. |
| `bite-peach.png` | **Ship.** | Two cautions, neither blocking. The juice run is thick and glossy like syrup, and where it wets the red skin it darkens to red beside the bite (`prompts/README.md:121`). The crease faces the camera. If it is regenerated, wording is in section 2. |
| `bite-taco.png` | **Regenerate.** | The filling is right for Austin (egg, diced potato, yellow cheese, green salsa, flour tortilla, foil). The form is wrong: a large tortilla rolled into a closed tube with overlapping flaps, which is a breakfast burrito. On a page set in East Austin, captioned "Taco.", a local sees the difference at 400 px. Exact prompt change in section 2. |
| `comfort-headphones.png` | **Ship.** Could regenerate. | Nothing wrong for representation. It reads as a product render (no seam, hinge detail, button or wear), which `prompts/README.md:136` lists as a reason to regenerate. The blanket shows an amenity that is not in the comfort list (`content/copy.md:187-191`). |
| `the-drawing.png` | **Ship.** | Lettering reads exactly `filling` and `$190`, once each, nothing else. The page prices fillings "from $190" (`content/copy.md`, section 5); keep that row's wording in view wherever this picture runs. |
| `the-drawing-nowords.png` | **Hold as the fallback.** | Use only if the filling price changes. Never both on one page. |
| `storefront.png` | **Ship, labelled as a placeholder.** | `2217` is exact and nothing else is lettered. It shows a flush threshold at sidewalk level while the copy still brackets level entry as unconfirmed (`content/copy.md:268`): see section 3.4. |

---

## 2. Regeneration wording

Change one file at a time, as `prompts/README.md:161` says.

**All four `paloma-*.txt`, character block** (`prompts/README.md:65`). The block now disagrees with the approved hero, and the one frame where the reference had least pull followed the text. Make the text describe the reference:

- `Slightly oversized black acetate glasses` becomes `Slightly oversized dark tortoiseshell acetate glasses, the same pair as in the reference`
- `a few freckles` becomes `a few light freckles across the nose, no more than in the reference`
- `Latina woman, 32` becomes `Latina woman` (the approved face reads 38 to 42; let the reference set her age instead of a number that pulls against it)

**`paloma-drawing.txt`.** Pass three references: the hero, a tight face crop of the hero, and `the-drawing.png`.

- Reference line becomes: `Attached reference photos: the first two are this same woman; match her face, glasses and clothes exactly. The third shows the pad and the drawing style only; do not copy its words.`
- Replace the pose line with: `Pose: sitting on a low stool, hair in a low knot, leaning over a white spiral-bound sketch pad that rests on a tangerine ({{TANGERINE}}) clipboard on her knee, eyes on it. One hand steadies it. The other is halfway through a rough sketch of one molar in cross-section in thick black marker: a wobbly outer line, an inner line, the roots not yet closed, the marker tip on the end of the unfinished line. A working sketch, not an icon, not a logo, not a symmetrical cartoon tooth. Her chest pocket is empty. Seen from slightly above.`
- Replace the composition line with: `Composition: she sits in the left half of the frame, her head left of the centre line with clear wall above her hair; the right third is plain wall, clear for the page layout.`
- Add to "Must not appear": `a second marker or pen, a finished tooth icon, a wall-mounted dispenser`
- To stay near 220 words, cut `the room darker beyond`.

**`bite-taco.txt`.** Replace the subject line's first two sentences with: `Subject: one Austin breakfast taco: a single small six-inch soft flour tortilla with light griddle marks, folded once in half around scrambled egg, diced fried potato and melted yellow cheese, a little green salsa. It is folded like a taco and open along its whole top edge, so the filling shows along its length. It is not rolled, not tucked at the end, not a burrito, not a wrap. A square of plain crumpled aluminium foil is peeled back under its lower end.` Add to "Must not appear": `a rolled or closed tortilla, a burrito, a large tortilla`.

**`bite-peach.txt`**, only if it is redone. Replace the juice sentence with: `One small bead of clear juice sits on the bitten flesh; nothing runs down the skin.` Add: `The stem end faces away from the camera and the crease of the peach is not visible.`

**`comfort-headphones.txt`**, only if it is redone. Replace the headphone sentence with: `the headphones are an ordinary, used pair in matte near-black ink ({{INK}}), with visible seams, a hinge, one small button and a little shine where hands have worn the headband; no logo, no cable.`

**`paloma-hero.txt`**, only if the hero is ever redone. Swap `Fitted long-sleeved scrub top` for `Ordinary-fit long-sleeved scrub top that hangs straight from the shoulder`; swap `cropped just above the knee` for `cropped at mid-thigh, both hands fully inside the frame with space below the fingertips`; add `Head upright, shoulders square`.

---

## 3. The seven questions

### 3.1 The dentist as a person

She reads as a specific person at work, not a model and not a type. The evidence is in the skin and the hands: visible pores, uneven freckles, shine on the forehead, lines under the eyes, short unpainted nails, a watch, no rings.

| Check | Finding |
|---|---|
| Smoothed or lightened skin | Not smoothed. Cheek medians: hero `#D37F62` and `#CA8061` (L\* 61 to 62); apple L\* 64 to 68; drawing L\* 65; laughing L\* 66 to 70. Forearms L\* 67 to 70 everywhere except the drawing frame, where flash fall-off takes them to 52 to 60. On the face the tone holds within about 10 L\*. The laughing frame, on cream, is the lightest. If the frames are graded to match, bring that one down to the hero; never the hero up. |
| Eurocentric drift | None between frames: eyes stay dark brown, brows stay heavy, the hair stays dark and wavy. Whether she "looks Latina" is the wrong test, since Latinas look every way. The tests that matter are that she matches the written character and that the page never states her ethnicity, and both hold. |
| Sexualised fit or pose | No. The neckline is a plain V and no pose is offered to the viewer. The top is cut closer than working scrubs (a mock wrap with shaped seams), most of all in the laughing frame. The word that caused it is "Fitted" in the character block. |
| Stock-model look | Avoided in the hero. The risk is repetition: hero and apple frame share one expression and one head. |
| Features changing between frames | Glasses, freckle density and the cut of the top change in `paloma-drawing` (section 1). Hair texture and face shape hold. |
| Age | She reads 38 to 42 in every frame against a brief of 32, a little older in `hero-b` and the drawing. That does her authority no harm. It only matters where words claim an age (section 3.6). |
| Glasses and jewellery | Gold hoops in all five frames; in the four that show both ears, the one on her right ear is the larger. Watch on her left wrist in all five. Glasses are tortoiseshell, not the black the brief asks for (`brand/01-brand-core.md:131`). |
| Hands | Correct count and proportions in every frame. Hero hands are cropped at the fingertips. The marker grip in the drawing frame is believable. |
| Teeth | Shown only in `paloma-laughing` and `hero-b`, upper row only. The turned lower tooth (`brand/01-brand-core.md:130`) appears nowhere, because lower teeth never show. For a generated stand-in that is the honest outcome: generated teeth prove nothing about this practice, so the closed-mouth hero is right. |
| Dress and authority | The pocket holds a pen, not the marker: chrome in the hero, black in the apple and laughing frames. The scrubs are dark brown, not near-black. Nothing undercuts her. One thing to protect: with no coat, badge or embroidery, her title lives only in the label. A US survey of 487 adults found women in clinical dress were more often taken for other staff than men dressed the same (Xun et al., JAMA Network Open, 2021; physicians, not dentists; read as a search summary). Keep "Dr. Paloma Krenek, DDS · General Dentist" within one screen of every picture of her, above all the seated drawing frame. |

**Which hero.** `paloma-hero.png`. The headline is "I don't care how long it's been." A closed smile and a level look mean it; a full grin sells it. The first take also keeps generated teeth out of the first screen and tilts her head less. Its head tilt of about 5 degrees is short of the "head-tilt smile" the brief bans (`brand/01-brand-core.md:134`) and reads as weight on one foot.

### 3.2 Cultural specifics

**Nothing in the pictures is a costume.** No flag colours, no pattern, no styling that signals "Latina". The hoops are the one item image models attach to that word by default; here they are small and in the brief.

**One clause in the brief should go.** `brand/01-brand-core.md:129` asks for someone "who could believably be a Krenek from Central Texas". That asks a face to explain a surname, and the only way a face can do that is by reading as more European. Central Texas has had Czech-Texan families for generations; a Paloma Krenek needs no visual excuse. Delete the clause and keep the physical description.

**The label in the prompt.** "Latina woman" as the first words hands the casting to the generator's default for that word. It landed well this time. The character block's physical detail is what did the work; keep that and never shorten it.

**The taco.** Respectful in treatment: same flash, same paper, same scale as the apple and the toast, so it is one of five things people eat and not a prop. Accurate in filling. Inaccurate in form (section 1), and in Austin fold against roll is the line people draw between a breakfast taco and a breakfast burrito. One placement note: `prompts/README.md:48` also offers it for "Find us". Used there, a taco becomes the stamp for a historically Mexican American neighbourhood. Keep it in the services rows with the other four and let the storefront carry "Find us".

**The corn** is plain grilled corn. Do not dress it as elote to localise it.

**Spanish.** "Hablo español" is one ticker item gated on being true (`content/copy.md:121`), which is the right gate. If it is true, a badge is thin: one useful sentence in Spanish in "Find us" (for the copy owner: `Hablo español. Llama o manda un mensaje al (512) 555-0142.`) does more than the ticker.

**What would make the place real.** The storefront could be in any Sunbelt city. What is missing: daylight, a tree shadow or overhead lines, a lit room behind the glass, any sign that the building is in use. Two cautions. Peeling paint and a rusted roof edge on a practice that opened last month read as derelict, and "distressed wall, designer door" is the look of the new arrival in an old neighbourhood, which is a sore subject in Holly. A new practice would have painted. And do not generate a mural for local colour: East Austin's murals are particular works by particular artists. The real fix is the real building.

### 3.3 Who is absent

One person, no patients, no staff. **For this demo that is the right call, not a gap.** Any generated patient is a fabricated patient. `research/02-audience-and-conversion.md:289` limits patient portrayals to patients of record with written permission, and a diverse row of generated faces would be both a breach of that and the stock trope the direction bans. The food stands in for the patient, and nobody is cast as "who comes here", so nobody is cast out.

What is missing is not more faces but the patient's side of the visit. Every frame looks at her from outside. The lightest fix is one frame that puts the viewer in the chair.

**Add `paloma-listening` (3:2), for "Comfort" or first visit step 2.** The camera is where the eyes of a person sitting upright in the dental chair would be. Nobody is in the chair; only its dark armrest crosses the bottom-left corner. She sits on the stool an arm's length away, turned to the lens, her eyes level with it and not above it, hair in a low knot, forearms on her knees, hands empty, mouth closed, eyebrows a little raised, listening. No mask, no gloves, nothing held. Cream room, lamp off and out of frame, right third plain wall.

Prompt lines, in the house format, after the character block and the reference line:

```
Viewpoint: the camera is where a person's eyes would be if they sat upright in the dental chair. Nobody is in the chair and no part of any other person is in the frame; only the chair's dark armrest crosses the bottom-left corner.
Pose: she sits on a low stool an arm's length away, turned to face the lens, her eyes level with it, not above it. Hair in a low knot. Forearms resting on her knees, hands empty, one over the other. Mouth closed, eyebrows slightly raised, head upright, listening.
Backdrop: a dental treatment room, cream ({{PAPER}}) walls and cabinets; the overhead lamp is off and out of frame.
Lighting: hard on-camera flash, crisp shadow behind her to the right.
Composition: she sits left of centre with clear wall above her hair; the right third is plain wall, clear for the page layout.
Feel: 35mm film, fine grain; a real photograph, not an illustration, not a 3D render.
Must not appear: text, logos, name badge, stethoscope, mask, gloves, instruments, a patient, anyone else's hands or knees, tooth models.
```

Reject it if she looks down at the lens, if anything is in her hands, or if any part of a second person appears.

It shows what the copy promises (level with you, upright, nothing in her hands) and shows no patient, no treatment and no result. Every viewer is the patient, whatever their age, body or skin.

**Do not add:** a waiting room, a second staff member, a patient's raised hand, or more foods chosen to signal who lives nearby. Each one invents a fact or turns people into tokens.

### 3.4 Disability and access cues

- **The storefront shows level entry.** The door's bottom rail and a flat metal threshold sit at sidewalk height with no step. The copy says "[Parking, nearest bus stop and level entrance: to confirm]" (`content/copy.md:268`). A picture cannot say "unknown", so this one answers a question the practice has not. Three rules: print the bracketed line directly beside the photo; never write "level", "step-free" or "accessible" in its caption or alt text; label it as a placeholder (section 3.7).
- **What the door also shows:** one manual pull door, hinged to open outward, no opener plate, no bell, dark glass with nothing visible inside and no name on the building. For a first-time visitor who is anxious or has low vision, "is this the place, and is it open" goes unanswered. Dusk with a dark interior also reads as closed beside an "Open now" status.
- **`comfort-headphones`** presents headphones and a blanket as things you will be handed. Headphones are in the list to confirm; the blanket is not. Add it to the list or accept that the picture promises it.
- **`paloma-drawing`** makes no access claim. She sits at the patient's level, which is the right cue.
- **Excluded by omission:** the only access fact anywhere on the page is that one bracketed line. For the real practice, confirm and print three: the entrance (step-free, or how many steps and what the alternative is), parking and the route to the door, and inside (restroom, and whether someone can be treated in their own wheelchair). These belong in question 9 of `research/02-audience-and-conversion.md` section 7.
- **Text inside pictures** (`filling`, `$190`, `2217`) is repeated in the alt text in section 4.

### 3.5 AI tells, ranked by visibility at the size used

| Rank | Image | Tell | Visible at page size |
|---|---|---|---|
| 1 | `paloma-drawing` | A finished, perfectly even tooth outline with the marker tip resting on it. Hand drawing does not close that cleanly. | Yes, at once |
| 2 | `comfort-headphones` | Flawless matte surfaces with no seam, port, button, dust or wear. Reads as a render. | Yes |
| 3 | `paloma-hero` + `paloma-apple` | The same head twice: identical angle, expression and hair on two backdrops. | Yes, if both are on screen or seen in quick succession |
| 4 | `paloma-drawing` against the portraits | Glasses change frame; a second marker appears; the pocket pen changes from chrome to black between hero and apple. | On comparison |
| 5 | `bite-peach` | Syrup-thick juice run ending in a perfect bead. | Faintly at 400 px |
| 6 | `paloma-hero`, `paloma-hero-b` | Fingertips of both hands cut by the bottom edge. | Yes, but reads as a tight crop |
| 7 | `paloma-drawing` | A cream wall-mounted object, top-left, that is no identifiable appliance. | Small; gone if the top 8% is cropped |
| 8 | `storefront` | Dark glass reflects only one flash glint, about 13% of the frame width left of where a centred, straight-on camera would put it, and no street. No signage of any kind. | Hardly |
| 9 | all `paloma-*` | Forehead lines that loop in whorls; a faint swirl in the scrub fabric; in the standing frames, a watch dial with no readable hands. | Only at 100% or on a 2x screen |
| 10 | `the-drawing` | Every outline is traced twice in parallel; no cap for the marker anywhere. | No |

No stray lettering in any frame. Every frame with a hard shadow throws it down and to the right, so the set agrees on one flash position. Hands are anatomically right throughout. Door hardware is plausible: three hinges, one pull, one lock cylinder.

### 3.6 Alt text

What is right in the two model texts and the README table: they name her, describe what she is doing, and never state or guess ethnicity. Keep that. If the real dentist wants her identity described, the words come from her.

What needs changing:

- **`content/copy.md:350`** and **`prompts/README.md:220`** say "a woman in her early thirties". That is an age guess, the picture does not support it, and it tells a listener nothing they need.
- **`content/copy.md:350`**: "ink-colored scrubs" is a brand token; said aloud it suggests blue or black. They are dark brown. "Large dark glasses" can be heard as sunglasses; they are tortoiseshell. Her hair reaches her shoulders, not her collarbone.
- **`content/copy.md:351`**: "A red apple ... on a flat lime backdrop" is wrong on both counts (green apple, orange backdrop). "Lit by direct flash" and "upper right side" describe technique and position, not content.
- **`content/copy.md:348`** bans prices in alt text; **`prompts/README.md:146`** requires the words in `the-drawing` to be repeated. The README is right: text that is in a picture goes in its alt text. Add that exception to the copy file.
- **`prompts/README.md:234`** gives decorative still lifes an empty alt. Correct, with one addition: a still life that has a visible caption ("Toast. 8:05 am.") is not decorative. Give it its alt text, or hide the caption from screen readers too.
- **`prompts/README.md:228`** calls the current taco frame a taco. True only after regeneration.

Final texts are in section 4.

### 3.7 Disclosure

**What the demo says now.** Only the footer: "Demo page. The names, prices, hours, phone number and address are invented." (`content/copy.md:342`). It does not say the dentist does not exist or that the photographs are generated, and it is the last thing on the page. The first screen is a photoreal face beside a doctor's title, a price and a booking button.

**What the demo should say, and where:**

1. **A strip above the header, first in the document after the skip link, at every breakpoint:** `Demo page. This practice and Dr. Paloma Krenek are fictional. The photographs are AI-generated.` It appears in any screenshot of the first screen and is the first thing a screen reader meets.
2. **Footer note, replacing the current one:** `Demo page. The practice, the dentist and her story are invented. The photographs are AI-generated. The prices, hours, phone number and address are placeholders.`
3. **Storefront caption in the demo:** `The front door, 2217 Tejocote Street. Placeholder picture.` (`prompts/README.md:157` already asks for the label.)
4. **Captions with clock times** ("Paloma. Apple. 4:10 pm.", `content/copy.md:221`) claim a photograph was taken at a moment. Under her portrait, drop the time in the demo.
5. **Social card.** A shared link carries the og image without the page's notes. Put the word "Demo" in the image, or do not use her portrait there. Keep `noindex` (`index.html:7`).
6. **Provenance data.** The source PNGs carry a C2PA manifest from the generator (a `caBX` chunk naming OpenAI and `trainedAlgorithmicMedia`; checked in three files). Resizing or converting to WebP or AVIF will normally strip it, so the visible lines above are the disclosure and the metadata is a bonus. Keep the source files.

**Before a real practice uses the page:**

- All dentist frames become real photographs of the real dentist, with her written release and no generated, composited or retouched substitute. A generated face beside a real name and licence number is a misrepresentation of fact. Not legal advice; the governing rule is the dentist's own board's (`research/02-audience-and-conversion.md` section 6).
- The storefront, the treatment room, the pad drawing and the comfort items become real photographs, because each states a fact about the premises or the service: the entrance, the equipment, the price, what you are handed.
- The food still lifes state no fact about the practice and may stay generated, with the footer saying so, or be reshot.
- The invented second sentence of the bio goes (`content/copy.md:208` already flags it).
- Patients appear only as real patients of record with written permission. No generated patients, ever.
- Alt text is rewritten against the real photographs and approved by the person described.
- One or two readers from the neighbourhood look at the taco, the building and the Spanish before launch. This review is not a substitute for that.

---

## 4. Final alt text

Written against the frames as they are, except the two marked, which must be checked against the regenerated result.

| Image | Alt text |
|---|---|
| `paloma-hero` | `Dr. Paloma Krenek stands in dark brown scrubs with the sleeves pushed up, looking straight at the camera with a closed-mouth smile. She has shoulder-length dark wavy hair and tortoiseshell glasses.` |
| `paloma-apple` | `Dr. Paloma Krenek holds up a green apple with one bite out of it and looks at the camera with a small closed-mouth smile.` |
| `paloma-drawing` (after regeneration) | `Dr. Paloma Krenek sits on a stool beside the dental chair, sketching a tooth on a pad on her knee with a black marker.` |
| `paloma-laughing`, cropped | `Dr. Paloma Krenek laughs, looking off to one side.` |
| `paloma-laughing`, full frame | `Dr. Paloma Krenek laughs at something off camera, hands in her pockets.` |
| `paloma-listening`, if made | `Dr. Paloma Krenek sits on a stool at eye level, hands resting on her knees, looking at the camera and listening.` |
| `bite-apple` | `A green apple with one bite out of it.` |
| `bite-toast` | `A thick slice of buttered toast with one bite out of the corner.` |
| `bite-corn` | `A grilled ear of corn with a row of kernels eaten off the top.` |
| `bite-peach` | `A peach with one bite out of it and a drop of juice running down the skin.` |
| `bite-taco` (after regeneration) | `A breakfast taco of egg, potato and cheese on a flour tortilla, half unwrapped from foil, with one bite out of it.` |
| `comfort-headphones` | `Over-ear headphones resting on a folded blanket.` |
| `the-drawing` | `A marker sketch of a tooth in cross-section on a spiral pad. One spot is circled, with an arrow to a handwritten note that reads: filling, $190.` |
| `the-drawing-nowords` | `A marker sketch of a tooth in cross-section on a spiral pad, with one spot circled and an arrow pointing at it.` |
| `storefront` | `A cream painted-brick wall with one orange-framed glass door and the number 2217 beside it.` |
| og image (`content/copy.md:36`) | `Dr. Paloma Krenek in dark brown scrubs on an orange background, with the name Feast Dental.` |

- The storefront caption already gives the name and address. If the caption is dropped, start the alt with `The entrance to Feast Dental:`.
- A still life repeated as decoration with no caption keeps `alt=""`.
- Backdrop colours are left out on purpose, except on the og image, which stands alone.
- The model texts at `content/copy.md:350-351` become the `paloma-hero` and `bite-apple` rows above.

---

## 5. Ranked fixes

**Must**

1. Build with `paloma-hero.png`. Retire `paloma-hero-b.png`.
2. Regenerate `bite-taco` as a folded taco, or leave it out until it is right.
3. Regenerate `paloma-drawing`: working sketch instead of an icon, one marker, the hero's glasses, the spiral pad, head clear of the top edge.
4. Put the notch top-left on `paloma-hero` and `paloma-laughing` at every breakpoint, and on the phone square crop of any drawing frame. Top-right covers her face, which `brand/01-brand-core.md:136` forbids.
5. Add the demo strip at the top and replace the footer note (section 3.7).
6. Replace the alt texts with section 4, and add the "text in the picture" exception to `content/copy.md:348`.
7. Keep the bracketed access line beside the storefront, and keep "level" and "step-free" out of its caption and alt text.

**Should**

8. Crop `paloma-laughing` to chest-up.
9. Add `paloma-listening` (section 3.3). Add no patients and no staff.
10. Bring the character block into line with the approved hero (section 2), and delete "who could believably be a Krenek from Central Texas" from `brand/01-brand-core.md:129`.
11. Keep the taco out of "Find us".
12. Keep her name and degree within one screen of every picture of her.
13. Add the blanket to the comfort list to confirm, or regenerate without it.
14. Before the demo is linked in public, run a reverse image search on the hero face. The name was checked against real people (`brand/01-brand-core.md:138-145`); the face was not. It sends the image to an outside service, so it is the owner's decision.

**Could**

15. Regenerate `comfort-headphones`, `bite-peach` and `paloma-apple` (a different moment from the hero) with the wording in section 2.
16. Regenerate `storefront` in daylight with fresh paint and a lit room behind the glass.
17. If "Hablo español" is true, give it a full sentence in "Find us".
18. Update `prompts/README.md:7`, which still says none of the twelve has been generated.

---

## 6. Not checked

- No reverse image search of the generated face.
- Nobody from East Austin or its Mexican American community has seen these; the cultural reading here is one reviewer's. The notes on Holly and on Czech-Texan surnames are general knowledge, not looked up this session.
- The pictures were not seen in the built page (it is still a scaffold), so every size is a simulation and no notch was tested on a real crop.
- Skin values come from generated pixels under simulated flash. They are good for comparing frames with each other and say nothing absolute.
- Tooth brightness against the whites of her eyes (`prompts/README.md:104`) could not be measured: her eyes are nearly shut in the laugh.
- Backdrop colour against the tokens and backdrop flatness (`prompts/README.md:78-93`) are outside this review.
- No legal reading beyond the summary in `research/02-audience-and-conversion.md` section 6.
- The two test images were not reviewed, as instructed.

## Sources

- Xun H. et al., "Public Perceptions of Physician Attire and Professionalism in the US", JAMA Network Open 2021;4(7):e2117779, as reported at https://www.healio.com/news/primary-care/20210806/casual-attire-is-becoming-more-popular-among-physicians-but-patients-prefer-white-coats (search summary only; the paper was not opened).
- Fold against roll for breakfast tacos: https://int.cbsaustin.com/news/local/the-fine-art-and-history-of-the-breakfast-taco and https://www.texasmonthly.com/food/i-say-burrito-you-say-taco/ (search summaries only). Texas Monthly notes there is no fixed rule; the call that this frame reads as a burrito is mine.
