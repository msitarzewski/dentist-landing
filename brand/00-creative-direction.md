# Creative direction (lead's brief to the team)

Status: working direction, 2026-11-09. Every decision below points at something observed in `research/`. Where it is a new idea rather than a borrowed one, it says so and names the gap it answers.

## The situation

A young dentist is opening a general + cosmetic practice. Patients are mostly in their 20s and 30s. The brand is high-energy. This is a single landing page whose job is to get a new patient to book a first visit. The practice in this build is a placeholder (name, dentist, address, prices and hours are invented and must be replaced), so the page may not lean on reviews, ratings or patient counts: a new practice has none, and inventing them is off the table.

## What the research says (short version)

- Every young dental brand on the live web sells calm: cream + pastel "self-care" (7 of 16 sites on cream), or dark luxury (4), or the blue/teal template. Nobody runs a general practice with speed and saturated colour. (`01b` Part 4, Part 5 #1–3; `01` §4.)
- "Dentistry redesigned / reimagined / different" is on at least six sites. It is the cliché now. (`01` §4.3.)
- The audience is overdue, not routine (63% of 18–29s went last year), afraid of being lectured and of a surprise bill, booking on a phone after 5pm. A cleaning is the door; cosmetic is the aspiration. (`02` §1, §4a.)
- Three beliefs in ten seconds: you're welcome however long it has been; you can book now and be seen this week; you'll know the cost first. (`02` §4a.)
- What reads as a template: 3–7 font families, thin uppercase tracked labels, mixed radii with blurred shadows, centred 84–150 character lines, SEO h1. What reads as generated: Playfair/Cormorant + Inter/DM Sans, centred hero with two pills and a star row, rounded cards with a soft shadow that grows on hover, fade-in-up at 0.6s on everything, the stock ease (0.4, 0, 0.2, 1), tick-in-a-circle checklists, bento tiles. (`01b` Part 2, Part 4 last paragraph.) None of that ships here.

## The idea: teeth are for biting

Dental sites show smiles, rooms, or nothing dental at all. None shows what teeth are for. This practice is about getting people back to biting into things without thinking about it: the apple, the ice lolly, the corn, the crust.

That gives the brand one owned, tooth-free device, **the bite**: a scalloped notch taken out of a corner.

- It crops photographs (answers `01b` Part 5 #10: no site carries one bespoke shape through photos, buttons and icons; the only owned shapes seen were Tend's stadium, Canary's arch, Grand Street's half-moon).
- It is the still-life subject: everyday food with one clean bite out of it, shot with direct flash on a flat colour sweep (answers #9: nobody uses direct flash; borrows the "not dentistry at all" still-life habit of Sage Space and the flat candy backdrops of Tend).
- It is the interaction: things get bitten when pressed, a shape is eaten as you scroll (answers #12: nobody uses small, fast, physical interaction as the brand's energy; and #8: humour never reaches the layout).

## Positioning and voice

- The neighbourhood general dentist with energy, for people who have been putting it off. Upfront, quick, funny, kind. Never a spa. Never "reimagined".
- Written in the dentist's first person from the headline down (gap: `01` §4.5, `01b` Part 5 #4). The dentist is in the first screen.
- Proof is what a new practice can truthfully offer: the dentist's face, training and words; the first-visit price, length and contents; hours; a written estimate before any treatment. No star rows, no counts.
- Copy guardrails in `02` §6 are binding: no "painless/pain-free", no "best/top/#1", no guarantees, no "specialist"; "General Dentist" beside the dentist's name; "free" only if free; offers state the regular fee and terms.

## Visual system (starting point for the designer to test and refine)

| Decision | Direction | Source |
|---|---|---|
| Ground | One saturated warm field in a hue nobody holds, used at full strength for the hero and one or two bands; cream paper for reading sections | `01b` Part 5 #2–3: no saturated ground anywhere; orange/tangerine, yellow, hot pink unowned. Impress's saturated phone hero was the most energetic screen captured |
| Hue | Tangerine. Warm fields make teeth read whiter in photographs; blue and teal are the template convention; green is held by 6 sites, cream by 7, violet by 3 | `01b` Part 4 Hues; `01` §2 trait 5 |
| Counter-colour | One only. Candidate: a sharp lime (seen as Tend's ticker #e7fb7e and Grand Street's #ccff33). Tangerine + lime reads citrus: fresh without mint | `01b` Part 4; designer to test alternatives |
| Ink | A tinted near-black, never #000 | `01b` Part 4 Text colour |
| Colour count | Ground, paper, ink, one counter. Four. | Sage Space runs on 3, LAVA on 2 |
| Display type | Heavy and/or condensed, poster tier (104–150px at 1440), line-height 0.9–1.0, tight tracking. Must be able to move: a variable face with a width or weight axis | `01b` Part 4 Type scale (the 104–150 tier are "the heroes people remember"); Part 5 #6 (type never plays; condensed/heavy display nearly unused) |
| Text type | One quiet grotesk, 18–22px body, 37–66 characters, left-aligned | `01b` Part 4 |
| Families | Two at most. Open-licensed, self-hosted. Not the free pairings that read as presets | `01b` Part 4 Type pairings |
| Structure | 1–1.5px ink rules, ruled rows instead of card grids, no shadows, one radius, wide content (20–40px gutters at 1440) | Sage Space, Jacques + Cie, LAVA, Swish, Rüh |
| Services | Big words in ruled rows with a small crop; price set at headline size | `jacquescie-05-hover.png`, `lava-05-pricing.png` |
| Buttons | Pills, at least 48px tall, ink or counter-colour fill; hover is a colour swap; press is the bite | `01b` Part 4 Buttons |
| Header | Practical facts as plain text (open-now state, phone), booking pill; on phones a persistent bottom bar with Book + call | Urban Dentist header; Sage Space mobile bar; `02` §4b row 0 |
| Hero utility | Real booking information where everyone else has a button: first-visit price and length, and next openings | `01b` Part 5 #5, #13; `02` §4c "speed to care" |
| Photography | Direct flash, saturated flat backdrops, 20s–30s casting with visible personality, tall crops; still lifes of bitten food; no stock smiles, no open-mouth clinical shots | `01b` Part 4 Image treatment; Part 5 #9 |
| Editorial texture | Captions, footnotes, numbered steps, margin notes | `01b` Part 5 #11 |

## Page outline

Follows `02` §4b, compressed to one page: header → hero (dentist, headline, price/length, next openings, Book online + Call or text) → facts ticker → first visit in three steps → services in two lanes (ruled rows with prices) → comfort ("nervous is normal here") → meet the dentist → "no reviews yet" (what we promise instead) → cost and insurance → find us and hours → FAQ → closing band and footer.

## Motion principles

- Type and the bite do the moving. Photography stays still.
- Small, fast, physical: press, snap, crunch, count. Not a slow scroll film.
- One custom ease family; never the stock (0.4, 0, 0.2, 1); never fade-in-up on everything.
- Everything degrades to a complete, static page; `prefers-reduced-motion` removes travel and keeps colour changes.
- Specific techniques come from `research/03-motion-techniques.md`.

## Never

Stock smiles. Tooth icons or tooth logos. Blue or teal. Gradients as decoration. Glass panels. Drop shadows. Star rows. Emoji. Centred hero with two pills. "Reimagined". Invented numbers.
