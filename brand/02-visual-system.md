# 02 — Visual system: type, colour, the bite, components, layouts

Status: 2026-11-09, designer's spec for the build. Builds on `brand/00-creative-direction.md`, `brand/01-brand-core.md`, `brand/03-interaction-spec.md`, `content/copy.md` and `research/01b-visual-capture.md` (cited as `01b`, with its site numbers and its Part 5 whitespace items as W1–W13).

**What was tested and what was not.** Sections 1, 2 and 4, the components in section 5 (except the insurance switch in 5.13, the form field in 5.15, and hover states other than the button's and the service row's) and the hero in section 6 were rendered in Chrome 157 and looked at, at 1440x900 and 390x844; the hero also at 1024x768 and 768x1024. The renders are in `brand/specimens/` (`type.html`, `colour.html`, 53 screenshots). Not tested: Safari and Firefox, a real phone, any motion, and four section layouts in section 6 (Comfort, Cost, Find us apart from its hours table, Closing). Where a number below was measured it says "measured"; anything else is a specification that has not been rendered.

Screenshots in `brand/specimens/` look duller than the hex values (the capture pipeline shifts saturated orange). Judge colour from `colour.html` in a browser, and trust the hex values and the printed ratios.

---

## 0. Decisions at a glance

*Amended to match the build, 2026-11-09: Services is on paper, so the page has four saturated fields, not five. See "Amendments to match the build (2026-11-09)", B, at the end of this file.*

| Decision | Value | Where it comes from |
|---|---|---|
| Display face | **Anybody**, variable, wdth 50–150, wght 100–900. SIL OFL 1.1 | Chosen by looking (section 1). Answers W6: no site uses a heavy condensed face that can move |
| Text face | **Public Sans**, variable, wght 100–900. SIL OFL 1.1 | Chosen by looking, then by a test: it has tabular figures and its near-twin Libre Franklin does not |
| Ground | `#f9530a` | W2, W3: nobody holds orange. The exact value is the measured backdrop of `assets/img/src/paloma-hero.png`, so the portrait bleeds into the field |
| Counter | `#cffb43` | Lime seen only as an accent (Tend ticker `#e7fb7e`, Grand Street hover `#e1ff3b`); beat lemon and leaf green on screen. The exact value is the measured backdrop of `paloma-apple.png`, for the same reason |
| Colour down the page | Five saturated fields: hero, services, cost and closing in tangerine, the dentist band in lime. Four of them are past the hero; all meet their neighbours at hard edges | W1: the loud heroes in the set calm down after one screen. The lead's direction after the capture |
| Headline case | Sentence case, never capitals | It is a sentence a person says; in capitals it shouts "I DON'T CARE" (rendered both ways in `type.html`) |
| Paper | `#fff4e3` | Cream is the reading ground on 8 of 19 sites (`01b` Part 4); used here for reading only |
| Ink | `#26120b` | Tinted near-black, never `#000` (`01b` Part 4 Text colour) |
| The bite | One notch of three equal arcs, always the top-right corner | W10. Geometry in section 4, in the format `tools/bite.mjs` already uses |
| Wordmark | FEAST DENTAL in the ground colour on an ink plate; the **plate** is bitten, not the T | My call after the T test failed (section 4.5) |
| Radius | One: the pill (999px). Everything else is square | Disciplined sites run one radius (Sage Space 26px, Smile White 20px); photos square as at LAVA |
| Rules | 1.5px ink | Sage Space, Jacques + Cie, LAVA, Swish |
| Shadows, gradients, cards | None | 14 of 19 sites use no shadow; ruled rows beat card grids (`01b` Part 4) |

**Where this spec departs from what teammates wrote, and why.** Each is flagged again where it applies.

1. **Hero headline size and break.** `content/copy.md` breaks the desktop headline as "I don't care how long / it's been." That is kept. It runs at 128px at width 66, not 75, so the first line stops 100px short of her hair (measured).
2. **Service words are 72px at 1440, not the 96px tried in the type specimen.** The Texas rule in brand core Part 0 wants "General Dentist" at least as large as the service words. At 72px the full designation fits on one line (1,095px of 1,360, measured); at 96px it does not.
3. **No photograph in the service rows.** The creative direction asks for "a small crop" per row. Dropped: `assets/img/prompts/README.md` warns that a food beside a service reads as cause and effect, five crops would be five things competing with five prices, and the interaction spec allows one photo notch per viewport.
4. **Paper type on the ground is not used**, though it now passes for large type (3.08:1). Ink only. Two-tone headlines are a template habit (`01b` control C1).
5. **The wordmark is not bitten through the T.** Tested at 26, 64 and 150px: the notch can be no larger than the bar of the T, and at every size it turns the word into FEAS1 (`proof-bite-1440-b.png`).
6. **`mask-composite: exclude` is not used for the notch.** It leaves a hairline of the old outline at 1x (rendered and magnified; `proof-bite-1440-a.png`, fourth pill). The single oversized mask tile in `tools/bite.mjs` avoids this, and so does `clip-path: shape()`. Either is fine; the interaction spec's build note 1 should be read with that correction.
7. **The ticker band is ink, not lime.** Tend's ticker is lime; copying it would be the one borrowed look on the page.

---

## 1. Type

### 1.1 The two faces

**Anybody** (display). Heavy, squarish, round-cornered letters: the counters are small rounded rectangles, which is as close to a tooth as this brand gets without drawing one. At width 50 it is a tight poster gothic; at 100 it is a wide slab of a word; at 150 it is almost a logo. One family covers the condensed headline, the wide service word on hover, the ticker and the giant "0", so the page never needs a third face. Numerals are the strongest of the six candidates: flat-topped, even, with a plain zero. It has `tnum` (on for every price), `zero` (slashed zero: leave off), `case` and `ss01` (not tested; leave off).

**Public Sans** (text). The Franklin skeleton, neutralised: even colour at 18–20px, open apertures, plain numerals, a clean tabular set that keeps the colon and comma narrow (Schibsted Grotesk's tabular figures push them apart: "8 : 00", "$1 , 110"). It pairs with Anybody the way a news gothic pairs with a poster gothic.

**Sentence case, not capitals.** Every display candidate was set with the real headline both ways (`type-d*-1440.png`). In capitals the seven words become one slab and the first three read as a rebuke; in sentence case it is somebody talking, the apostrophes and the full stop do their work, and Anybody's lowercase (the round-cornered counters in d, o, a, e, g) is where the face has its character. Capitals are kept for labels of two to seven words: the wordmark, the designation, lane names, the ticker.

**What the real sentence changed.** A seven-word line is harder on a dense face than the three short test lines were. Archivo reads the sentence most easily of the six, with more open counters. Anybody still wins: it is the only one that holds the whole first line at 128px, looks like nobody else's headline, and has the range the motion needs. If the five-second test in the brand core finds the headline hard to read, Archivo at width 62 is the drop-in (same axes, a 1.85x range).

The type specimen first used the lead's test words; it now carries FEAST DENTAL, the real headline, prices and designation in every candidate.

### 1.2 Candidates

Licences were read at the URL given, in this session. "Seen" refers to the 19 captured sites and 3 controls.

**Display (six rendered on the ground at 1440 and 390: the real headline at 128px in sentence case and again in capitals, the price at 150px, the wordmark, the designation, a service row at 96px)**

| # | Face | Foundry | Licence, and where I read it | Axes | Self-hosting source | Seen in the set | Verdict |
|---|---|---|---|---|---|---|---|
| D1 | **Anybody** | Etcetera Type Co (Tyler Finck) | SIL OFL 1.1. `fonts.google.com/metadata/fonts/Anybody` (`"license": "ofl"`); `github.com/google/fonts/blob/main/ofl/anybody/OFL.txt` | wdth 50–150, wght 100–900 | `github.com/Etcetera-Type-Co/Anybody`, `fonts/variable/Anybody[wdth,wght].woff2` (69.6 KB) | Not seen. Nearest relatives: Anton on Sage Space (h2 60/62, brown), Liber Black on Dntl Bar (75px) | **Chosen.** Widest motion range measured: 2.9x from width 50 to 150 on the same words |
| D2 | Archivo | Omnibus-Type | SIL OFL 1.1. `fonts.google.com/metadata/fonts/Archivo` | wdth 62–125, wght 100–900 | Google Fonts download | Not seen; same genre as Sage Space's Anton | Runner-up and the fallback. The easiest read of the real sentence, but it is the compressed grotesque every poster already uses, and its range is 1.85x |
| D3 | Science Gothic | Thomas Phinney, Vassil Kateliev, Brandon Buerkle | SIL OFL 1.1. `fonts.google.com/metadata/fonts/Science Gothic` | wdth 50–200, wght 100–900, CTRS 0–85, slnt -10–0 | Google Fonts download | Not seen | Out: cold and technical; the black weight is so wide it had to be set at 800 |
| D4 | Georama | Production Type | SIL OFL 1.1. `fonts.google.com/metadata/fonts/Georama` | wdth 62.5–150, wght 100–900 | Google Fonts download | Not seen | Out, narrowly: warm and rare, range 2.2x, but softer numerals and less presence at 128px |
| D5 | Truculenta | Omnibus-Type | SIL OFL 1.1. `fonts.google.com/metadata/fonts/Truculenta` | opsz 12–72, wdth 75–125, wght 100–900 | Google Fonts download | Not seen | Out: reads as a cartoon title; range 1.64x |
| D6 | Bevellier | Indian Type Foundry (Arya Purohit, Barbara Bigosinska), on Fontshare | **ITF Free Font License 2.0** (17 Aug 2026), read at `fontshare.com/licenses/itf-ffl`: closed-source freeware. Self-hosting allowed; subsetting, format conversion and handing the files to a contractor are not | wght 100–900 | Fontshare download | Not seen | Out: weight axis only (width changes 11% across it), and the licence is not open |

**Text (four rendered as nav, 20px body, 15px caption, hours and price table, buttons, on paper)**

| # | Face | Foundry | Licence, and where I read it | Axes | Self-hosting source | Seen in the set | Verdict |
|---|---|---|---|---|---|---|---|
| T1 | **Public Sans** | USWDS (Dan Williams), after Libre Franklin by Pablo Impallari and Rodrigo Fuenzalida | SIL OFL 1.1. `fonts.google.com/metadata/fonts/Public Sans`; `github.com/google/fonts/blob/main/ofl/publicsans/OFL.txt` | wght 100–900 | `github.com/uswds/public-sans`, `fonts/variable/PublicSans[wght].ttf` (103 KB; compress to woff2) | Named only as a fallback in Rüh's system stack. Cousin: Founders Grotesk, Dentologie's 22/31 body | **Chosen** |
| T2 | Uncut Sans | Kasper Nordkvist, Uncut.wtf | SIL OFL 1.1, on its Uncut.wtf page | wght 300–700 | `github.com/kaspernordkvist/uncut_sans`, `Webfonts/UncutSans-Variable.woff2` | Cousin of Aeonik, used on two captured sites | Runner-up. Lighter and more "product" than this voice wants |
| T3 | Schibsted Grotesk | Bakken & Bæck, Henrik Kongsvoll | SIL OFL 1.1. `fonts.google.com/metadata/fonts/Schibsted Grotesk` | wght 400–900 | Google Fonts download | Not seen | Out: tabular figures widen colon and comma; Google popularity rank 32 |
| T4 | Archivo, text cut | Omnibus-Type | as D2 | as D2 | as D2 | Not seen | Out: narrow and tight at 20px; pinched at 15px |

Libre Franklin was on the shortlist and picked on looks, then dropped on a test: its GSUB table lists no `tnum` (read from the font file), and "1111" measures 37px against 55px for "0000" at 20px with tabular figures switched on. Hours and fee columns could not align.

**Ruled out and why.**

- From the brief, not reconsidered: Playfair, Cormorant, Inter as display, DM Sans, Poppins, Montserrat, Raleway, Josefin. Add Hanken Grotesk (Zen's Cormorant pairing).
- Rendered, then ruled out as indie defaults or for cause (reasons printed under each strip in `type.html`): **Bricolage Grotesque** (sets well; the indie default since 2023, Google rank 54), **Instrument Sans** (rank 8), **Mona Sans** (GitHub's house face; 1.5x range), **League Gothic** (one weight, too light for a saturated field), **Big Shoulders** (no width axis, civic and sports flavour), **Sofia Sans Extra Condensed** (anonymous), **Mozilla Headline** (tops out at 700, slashed zero in every price), **Sprat** (flared, fashion-editorial), **Atkinson Hyperlegible Next** and **Host Grotesk** (slashed or dotted zero), **Overused Grotesk** and **Switzer** (corporate neo-grotesks; Switzer is ITF FFL).
- Not rendered, ruled out on reputation, which is judgement and not measurement: Space Grotesk, Syne, and Fontshare's Clash Display, Satoshi, General Sans and Cabinet Grotesk.
- Could not be assessed: **Tanker** (Fontshare; one weight, capitals only). **Queering** (Uncut.wtf, OFL 1.1) looked right in its catalogue image but I found no hosted source, so it was never set. **Velvetyne**'s site redirected every address to a strike notice all session; its catalogue was not browsed.

### 1.3 Roles and settings

*Amended to match the build, 2026-11-09: the hero numeral and GENERAL DENTIST share `--fs-lock` (no `--fs-price`); promise headings are not `--fs-d3`; `--fs-d2` scales below 390. See "Amendments to match the build (2026-11-09)", A, D and E, at the end of this file.*

Sizes are fluid from 390 to 1440 and fixed outside that range. Widths are `font-stretch`; weights `font-weight`. Tracking in em.

| Token | Used for | Face | 390 → 1440 | Width | Weight | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|---|
| `--fs-hero` | h1 | Anybody | 56 → 128 | see 1.4 | 900 | 0.9 | -0.01 | sentence |
| `--fs-price` | hero price numeral | Anybody | 56 → 150 | 75 | 900 | 0.86 | -0.01 | tabular figures |
| `--fs-zero` | the "0" in "0 reviews" | Anybody | 144 → 312 | 75 rest, 150 open | 900 | 0.74 | -0.02 | |
| `--fs-d1` | section h2, step numerals | Anybody | 44 → 104 | 66 (numerals 75) | 900 | 0.92 (numerals 0.8) | -0.01 | sentence |
| `--fs-d2` | service words, the designation line above them, row prices | Anybody | 40 → 72 | 62.5 words and designation, 75 prices | 900 | 1.0 | -0.01 (designation 0) | words sentence, designation capitals |
| `--fs-d3` | step titles, promise headings, pull line, list numerals | Anybody | 28 → 40 | 85 | 800 | 1.05 | -0.005 | sentence |
| `--fs-d4` | small display labels: hero designation, lane names, footer column heads | Anybody | 17 → 22 | 75–85 | 800 | 1.05–1.1 | +0.005 | capitals |
| `--fs-ticker` | ticker facts | Anybody | 17 → 20 | 100 | 800 | 1 | +0.01 | capitals |
| wordmark | FEAST DENTAL on the plate | Anybody | 22 (below 640), 26 | 62.5 | 900 | 1 | 0 | capitals |
| `--fs-lead` | hero subhead, promise sentences | Public Sans | 18 → 22 (17 in the phone hero) | | 400 | 1.4 | 0 | |
| `--fs-body` | body, hours table | Public Sans | 18 → 20 | | 400 | 1.5 | 0 | |
| `--fs-faq` | FAQ questions | Public Sans | 18 → 22 | | 600 | 1.25 | 0 | |
| `--fs-ui` | buttons, nav 16, chips 16 (15 below 1280) | Public Sans | 16 → 17 | | 600 (nav 500, chip time 400, chip day 700) | 1 | 0 | sentence |
| `--fs-small` | captions, labels, row descriptions, footer text | Public Sans | 14 → 15 | | 400 (labels 600) | 1.35–1.45 | 0 | sentence |
| `--fs-foot` | footnotes, chip caption, legal | Public Sans | 13 | | 400 | 1.4 | 0 | |

Rules that go with the table:

- **Body measure** 37–66 characters: `max-width: 30em` on the lead, `36em` on body (`01b` Part 4; the controls ran 84–150).
- **No uppercase tracked labels in the text face.** Labels are sentence case, 600. Capitals exist only in Anybody (template fingerprint 3, `01b` Part 2).
- **Tabular figures** on every price, time and phone number: `font-variant-numeric: tabular-nums`. Both faces have the feature (read from the font files).
- **Headings wrap** with `text-wrap: balance`, except the h1 and every word that animates, which are `white-space: nowrap` with authored breaks (interaction spec §2).
- **Anybody's interpunct** is a square block and reads as a dash at display size. Where the designation is set large, stack it on two lines without the dot below 640px (proofed).

### 1.4 The headline, and the widths type moves between

Measured advance widths, Anybody 900, tracking -0.01em, in px per 100px of font size:

| Words | w50 | w56 | w60 | w62.5 | w66 | w70 | w72 | w75 | w80 | w100 | w150 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I don't care how long | 607 | 678 | 725 | 755 | 796 | 843 | 867 | 902 | 961 | | |
| care how long | 424 | 472 | 504 | 524 | 552 | 584 | 600 | 624 | 663 | | |
| I don't care how | 473 | | | 586 | 617 | 654 | 672 | 699 | 744 | 925 | 1379 |
| Emergency | | | | 416 | | | | | 528 | 655 | |
| Whitening | | | | 374 | | | | | 472 | 585 | |

Other measured strings at 100px: "$195" at width 75 = 203; "$3,400" at width 75 = 287; "FEAST DENTAL" capitals at 62.5 = 455; the full designation in capitals at 62.5 = 1,481 (1,521 at tracking 0, which is how it is set).

**Headline setting by width of screen** (breaks from `content/copy.md`; never a break straight after "care"):

| Screen | Lines | Size | Width (rest) | Fit (measured, except the 768 row, which is computed and then checked by eye) |
|---|---|---|---|---|
| 1280 and up | I don't care how long / it's been. | 117–128 | 66 | Line 1 is 1,019px at 1440 and ends at x 1,059; her hair starts near x 1,160 |
| 1024–1279 | same two lines | 100–117 | 56 | Line 1 ends at x 705 at 1024; her hair starts near x 760 |
| 640–1023 | I don't / care how long / it's been. | 73–100 | 72 | Widest line 492px of 719 at 768 |
| below 640 | same three lines | 56 | 75 | Widest line 349px of 358 at 390 |

**Motion widths** for `--wdth-tight` and `--wdth-wide` in the interaction spec (tight is about 78% of the resting advance):

| Word | Rest | Tight (chew) | Wide (open wide) | Sizer reserves |
|---|---|---|---|---|
| Hero words, 1280 and up | 66 | 51 | not used | rest |
| Hero words, below 640 | 75 | 58 | not used | rest |
| Hero words, 1024–1279 | 56 | 50, the axis floor (89%); add a 60-unit weight dip | not used | rest |
| Service word | 62.5 | 50, the axis floor (about 81%) | **100** (1.57x): approved. "Emergency" needs 472px at 72px and 262px at 40px, and both rows have the room (proofed) | wide |
| "Paloma." | 66 | 51 | not used | rest |
| The "0" | 75 | | 150, stays | wide |
| "Come in." | 66 | | 125, stays (not rendered) | wide |

The interaction spec suggests 125–130% for wide. I am approving 157% for service words because on screen the jump from a tight word to a wide one is the best single moment in the system (`colour-final-1440.png`, the Whitening row), and the row was laid out to hold it.

### 1.5 Loading

```css
@font-face { font-family: "Anybody"; src: url("/assets/fonts/anybody-wdth-wght.woff2") format("woff2");
  font-weight: 100 900; font-stretch: 50% 150%; font-style: normal; font-display: swap; }
@font-face { font-family: "Public Sans"; src: url("/assets/fonts/public-sans-wght.woff2") format("woff2");
  font-weight: 100 900; font-style: normal; font-display: swap; }
```

Preload Anybody (the interaction spec's risk 4: a late display font skips the hero chew). No italics are used anywhere, so neither italic file ships. The copyright line of both OFL files names no Reserved Font Name, so a Latin subset may keep the family name. `prototypes/fonts/anybody-latin-wdth-wght.woff2` (56.9 KB) is already that subset.

---

## 2. Colour

### 2.1 What was tested

Four palettes with identical components (`colour.html`, sections V1–V4; screenshots `colour-v*.png`):

| Variant | Ground | Counter | What I saw | Verdict |
|---|---|---|---|---|
| V1 blood orange + lime | `#ff4d17` | `#c8f73a` | Hot. Reads tomato before it reads orange; closest of the four to Impress's red (`#f1272b`) | Out as tested |
| V2 tangerine + lime | `#ff6a14` | `#dcff3d` | Friendly, plainly orange, lime at its loudest | **Picked, then tuned** |
| V3 true orange + lemon | `#ff8a00` | `#fff04d` | Amber and mustard: a hazard sign. Lemon sits 2.0:1 on the ground and the pills dissolve | Out |
| V4 tangerine + leaf green | `#ff6a14` | `#19c964` | Green and orange at the same lightness (1.3:1) vibrate; the pills read as "success" states and the rows as a flag | Out |

Counter candidates were also set as chips on every ground. Lime wins on each: it is the only one of the three that is clearly lighter than the ground and clearly not paper in hue.

**Then the photographs arrived.** Asked for V2's `#FF6A14` and `#DCFF3D`, the generator rendered tangerine between `#f84902` and `#fb5703` and lime between `#c3fb2b` and `#d0fb46` (my samples of seven frames; the lead's corner samples agree). `paloma-hero.png` has a backdrop of `#f9530a` on its empty left third (`#f9540a` top, `#f7510a` bottom). That is the hue I had tuned V2 towards by eye (18° against 20°), a step deeper. `paloma-apple.png` has `#cffb43` on its empty right third.

**The decision, as a rule.** The CSS follows the two portraits, and nothing else has to match:

1. **Each portrait bleeds into a field of its own colour.** `--ground` is sampled from the hero frame and `--counter` from the apple frame, at the edge where photograph meets field, and that edge is feathered. Proofed at four widths for the hero and two for the dentist band: no visible seam.
2. **Every other photograph sits on a field of a different colour**, framed and bitten, so a few levels of difference read as two materials.
3. **Do not regenerate for colour.** Keep the prompt values exactly as they are, because the CSS now equals what they render:

| Backdrop | Hex to put in the prompt | What it renders (measured) | CSS token |
|---|---|---|---|
| Tangerine | `#FF6A14` | `#f84902`–`#fb5703`; the hero frame `#f9530a` | `--ground: #f9530a` |
| Counter | `#DCFF3D` | `#c3fb2b`–`#d0fb46`; the apple portrait `#cffb43` | `--counter: #cffb43` |
| Paper | `#FFF4E3` | `#f8e5d2`–`#fcead5`, and `#fbeddd` | `--paper: #fff4e3`; never matched, see 2.5 |

If a portrait is re-shot, re-sample its edge and expect the token to move by two or three levels. This costs 0.7 of ink contrast on the ground against my by-eye pick (6.04 to 5.34) and is worth it: the two bleeds are the strongest pictures in the system.

### 2.2 Final values

| Role | Token | Hex | Used for |
|---|---|---|---|
| Ground | `--ground` | `#f9530a` | Header, hero, cost band, closing band. Price chip fill on paper. Ticker separators, footer heads and plate text on ink |
| Paper | `--paper` | `#fff4e3` | Reading sections. Text and rules on ink. Price chip fill on ground. Chip hover |
| Ink | `--ink` | `#26120b` | All text on ground, paper and counter. All rules. Ticker, "0 reviews" band, footer, phone bottom bar, the wordmark plate |
| Counter | `--counter` | `#cffb43` | Yes, and now: primary button fill, chosen time chip, hover or focus ground of a service row, today's row in the hours table, the "0". And one field: the dentist band. Nothing else |

Four colours. No tints, no opacity steps, no fifth colour for errors (an error is ink text with an ink rule and the word "Check").

### 2.3 Contrast (WCAG 2, computed from the hex values)

| Text on ground | Ratio | Class | Use |
|---|---|---|---|
| ink on ground | 5.34:1 | body-safe | Any size |
| ink on paper | 16.44:1 | body-safe | Any size |
| ink on counter | 14.94:1 | body-safe | Any size; all type on the dentist band |
| paper on ink | 16.44:1 | body-safe | Any size |
| counter on ink | 14.94:1 | body-safe | Any size |
| ground on ink | 5.34:1 | body-safe | Any size; used for display labels, plate, numerals |
| paper on ground | 3.08:1 | large-only | Passes for display type 24px and up. **Not used in this build** (departure 4) |
| counter on ground | 2.80:1 | banned as text | Fills only, always with a 1.5px ink rule |
| ground on paper | 3.08:1 | large-only | Not used as text. As a fill (price chip, portion disc) it carries an ink rule or is decoration |
| counter on paper | 1.10:1 | banned | Fills only, always with a 1.5px ink rule: lime and cream are the same lightness |
| ground or paper on counter | 2.80:1, 1.10:1 | banned | No tangerine or cream type on the dentist band; a primary button there would be ink with a lime label |

Two consequences for the build:

- **Every counter-coloured control carries the 1.5px ink rule**, on ground and on paper. On ink it needs none.
- **Selection is never colour alone**: the chosen chip also has the native checked state and the notch; today's row also has the word "Today".

### 2.4 Which field each section sits on

*Amended to match the build, 2026-11-09: Services sits on paper and Comfort is ruled; the table and the paragraph under it describe the first plan. See "Amendments to match the build (2026-11-09)", B, at the end of this file.*

| Header | Hero | Ticker | First visit | Services | Comfort | Dentist | No reviews | Cost | Find us | FAQ | Closing | Footer |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ground | ground | ink | paper | **ground** | paper | **counter** | ink | **ground** | paper | paper | **ground** | ink |

Read down the page: tangerine, ink stripe, paper, tangerine, paper, lime, ink, tangerine, paper, paper, tangerine, ink. Saturated colour never leaves the screen for more than one section until Find us and FAQ, and the sticky header keeps a tangerine bar over those. This is more than the creative direction's "hero and one or two bands"; it follows the lead's later direction that colour must carry past the hero.

Why these sections: Services and Cost are where the money is said out loud, and they get the hero's field and the hero's kind of numeral. The dentist band is lime because her second portrait is. Comfort stays paper between two loud fields, which is the interaction spec's drop to stillness, in colour. Bands meet at a hard edge with no rule between two different colours and no blend; two paper sections in a row are separated by a full-width ink rule.

### 2.5 Photographs and fields

- **Two bleeds.** The hero portrait (tangerine backdrop on the ground field) and the dentist portrait (lime backdrop on the lime field). No frame, no notch; the edge that meets the flat field is feathered with a `mask-image` gradient, 72px on a side edge and 32px on a top edge. Proofed: `proof-hero-*.png`, `proof-dentist-*.png`.
- **Everything else is framed and bitten on a different colour.** Lime backdrop on ground or paper (`bite-toast` beside the Services heading, proofed; `bite-peach` in Closing). Tangerine backdrop on paper. Paper backdrop on ground or ink (`the-drawing` in Cost, `paloma-laughing` if it is used on the "0 reviews" band).
- **Paper backdrops are never placed on paper.** They render at `#f8e5d2` to `#fcead5`, darker and pinker than `--paper` (1.06:1 to 1.10:1 against it): a faint rectangle whose bite cannot be seen. Comfort and Find us therefore use their images square and unbitten or not at all. This is the open item for the image review.
- **Documentary frames** (storefront, the room, the map) are square, unbitten, and may sit on any field.
- **Which hero frame.** `paloma-hero.png`, the closed-mouth take. `rejected/paloma-hero-b.png` has the wide open smile, which is the stock dentist picture the creative direction rules out and plays against a headline that is dry and level. The layout fits either: the two frames share a composition and their backdrops differ by one to four levels.

---

## 3. Tokens

Names follow `assets/css/tokens.css`; values replace its provisional ones. New names are marked `new`.

```css
:root {
  /* colour */
  --ground: #f9530a;
  --paper: #fff4e3;
  --ink: #26120b;
  --counter: #cffb43;

  /* type */
  --font-display: "Anybody", "Arial Narrow", Impact, sans-serif;
  --font-text: "Public Sans", ui-sans-serif, system-ui, sans-serif;
  --display-wght: 900;
  --display-wdth: 66%;                 /* resting width of headlines; overridden per role below */
  --wdth-hero: 66%;                    /* new. 56% at 1024–1279, 72% at 640–1023, 75% below 640 */
  --wdth-word: 62.5%;                  /* new. service words, designation, wordmark */
  --wdth-word-wide: 100%;              /* new. the open-wide state of a service word */
  --wdth-numeral: 75%;                 /* new. every price and step numeral */

  --fs-hero:   clamp(3.5rem, 1.8286rem + 6.8571vw, 8rem);        /* 56 → 128 */
  --fs-price:  clamp(3.5rem, 1.3179rem + 8.9524vw, 9.375rem);    /* 56 → 150 */
  --fs-zero:   clamp(9rem, 5.1rem + 16vw, 19.5rem);              /* 144 → 312 */
  --fs-d1:     clamp(2.75rem, 1.3571rem + 5.7143vw, 6.5rem);     /* 44 → 104 */
  --fs-d2:     clamp(2.5rem, 1.7571rem + 3.0476vw, 4.5rem);      /* 40 → 72 */
  --fs-d3:     clamp(1.75rem, 1.4714rem + 1.1429vw, 2.5rem);     /* 28 → 40 */
  --fs-d4:     clamp(1.0625rem, 0.9464rem + 0.4762vw, 1.375rem); /* 17 → 22 */
  --fs-ticker: clamp(1.0625rem, 0.9929rem + 0.2857vw, 1.25rem);  /* 17 → 20 */
  --fs-lead:   clamp(1.125rem, 1.0321rem + 0.3810vw, 1.375rem);  /* 18 → 22 */
  --fs-body:   clamp(1.125rem, 1.0786rem + 0.1905vw, 1.25rem);   /* 18 → 20 */
  --fs-faq:    clamp(1.125rem, 1.0321rem + 0.3810vw, 1.375rem);  /* 18 → 22 */
  --fs-ui:     clamp(1rem, 0.9768rem + 0.0952vw, 1.0625rem);     /* 16 → 17 */
  --fs-small:  clamp(0.875rem, 0.8518rem + 0.0952vw, 0.9375rem); /* 14 → 15 */
  --fs-foot:   0.8125rem;                                         /* 13 */

  /* structure */
  --rule: 1.5px;                       /* Chrome draws it as 1 device pixel at 1x and 3 at 2x; both are crisp */
  --radius: 999px;                     /* the only radius: pills and chips. Photos, bands, tables, fields: 0 */
  --gutter: clamp(16px, 7.086px + 2.2857vw, 40px);       /* 16 → 40. Jacques + Cie runs 40 at 1440 */
  --gap: clamp(12px, 7.543px + 1.1429vw, 24px);          /* new. column gap, 12 → 24 */
  --section-y: clamp(56px, 32.229px + 6.0952vw, 120px);  /* new. paper sections, top and bottom */
  --band-y: clamp(40px, 25.143px + 3.8095vw, 80px);      /* new. ink and ground bands */
  --content-max: 1520px;               /* new. content column; bands stay full-bleed */
  --header-h: 4.5rem;                  /* 72. Below 640: 3.5rem (56) */
  --bar-h: 4rem;                       /* new. phone bottom bar, 64, plus the safe-area inset */
  --tap: 3rem;                         /* 48, minimum control height */
  --h-lg: 3.5rem;                      /* new. 56, primary and secondary buttons in sections */
  --h-chip: 2.5rem;                    /* new. 40, the static price chip */

  /* the bite: tile sizes for tools/bite.mjs (the visible notch is 96% of the tile) */
  --bite-photo: 25%;                   /* new. of the photo's width */
  --bite-lg: 35px;                     /* new. 56px pill */
  --bite-md: 27px;                     /* new. 48px pill */
  --bite-chip: 23px;                   /* new. 48px time chip */
  --bite-plate: 45px;                  /* new. 72px wordmark plate; 35px on the 56px plate */

  /* spacing scale, new: 4 8 12 16 24 32 48 64 96 120 */
  --s1: 4px; --s2: 8px; --s3: 12px; --s4: 16px; --s5: 24px; --s6: 32px; --s7: 48px; --s8: 64px; --s9: 96px; --s10: 120px;
}
```

**Breakpoints** (min-width): 640, 1024, 1280. Design sizes are 390 and 1440; fluid values stop growing at 1440.

**Grid.** 12 columns from 1024 up, gap `--gap`, margins `--gutter`; at 1440 that is 1,360px of content, columns of 91.33px. Below 1024 one column, with the two-part rows described per component. Content stops at `--content-max`, centred.

**Motion tokens** stay as `tokens.css` and the interaction spec define them. `--bite-size` in `tokens.css` is replaced by the five sizes above.

---

## 4. The bite

### 4.1 Geometry

One line: **three equal arcs of radius 0.34 whose centres sit 0.62 from the corner at 0°, 45° and 90°, on a unit tile with the bitten corner at its top right.**

In the format `tools/bite.mjs` uses (a 100 x 100 tile, corner at (100, 0); validated with that file's own `validate()`: 0 specks, 0 cut):

```js
// replaces the three provisional shapes; one geometry for every use
const feast = jaw(100, 0, 62, [[180, 62, 34], [135, 62, 34], [90, 62, 34]]);
export const shapes = {
  bite:   { kind: 'corner', ...feast },
  nibble: { kind: 'corner', ...feast },
  chomp:  { kind: 'corner', ...feast },
};
```

That gives tooth circles at (38, 0), (56.16, 43.84) and (100, 62), all r 34, and this outline: (4, 0) → (24.58, 31.24) → (68.76, 75.42) → (100, 96). The notch reaches 96% of the tile along each edge; the two cusps sit 82% of the way out, so each scallop is 14% deep.

The same shape as an SVG path (black is what is removed) and as `clip-path`:

```
M4 0 A34 34 0 0 0 24.58 31.24 A34 34 0 0 0 68.76 75.42 A34 34 0 0 0 100 96 V0 Z
```

```css
/* B is the tile size as a length */
clip-path: shape(from 0 0, hline to calc(100% - B * .96),
  arc to calc(100% - B * .7542) calc(B * .3124) of calc(B * .34) ccw,
  arc to calc(100% - B * .3124) calc(B * .7542) of calc(B * .34) ccw,
  arc to 100% calc(B * .96) of calc(B * .34) ccw,
  vline to 100%, hline to 0, close);
```

(The proof in `colour.html` draws the same proportions on a tile where the notch reaches 100%; the two differ by a 4% scale.)

**Why three equal arcs and not the provisional four uneven ones.** I looked at both (`prototypes/shots/a-chromium-1280.png` against `proof-bite-1440-a.png`). The four-mark scoop is the more natural bite on a large photograph. The three-arc notch is the one that still reads at 23px on a time chip and at 45px on the wordmark plate, and the brand gets one shape, not a large one and a small one. The interaction spec also bars tooth marks; three round scallops read as a biscuit, four small uneven ones start to read as teeth. This is my call and I rank it among the less certain (section 8).

### 4.2 Size, corner, what gets it

Always the **top-right** corner, for every first bite. One corner is what makes it a mark and not a texture.

| Element | Tile size | Notes |
|---|---|---|
| Photograph (framed) | 25% of the photo's width (`--bite-photo`) | Subject kept out of a square 30% of the width at that corner. Never across a face, hair or hands (brand core Part 3) |
| Primary or secondary button, 56px | 35px | Appears on press (interaction spec §1). Cut from the fill layer; the focus ring stays whole |
| Button, 48px (header, bottom bar) | 27px | |
| Time chip, 48px | 23px | Appears when chosen, with the counter fill |
| Wordmark plate | 0.625 of its height: 45px at 72, 35px at 56 | Static. The first bitten thing on the page |
| Avatar, favicon | 45% of the side | Ink square, initial F in the ground colour set bottom-left |
| Portion disc | see 4.3 | One, two, three bites |
| Status dot, 12px | one round cut, see 4.4 | |
| Cookie (footer), 56px | as portion disc | |

**Label clearance.** A notch may never reach a label. Rule: tile size ≤ right padding ÷ 0.78. The sizes above satisfy it (56px pill: padding 28, reach 27; 48px pill: padding 22, reach 21; chip: padding 18, reach 18). An 80% notch on a 56px pill clips the last letter (rendered).

**Never bitten:** text blocks; form fields and the insurance switch; the price chip and every price; the hours table; the ticker; the hero portrait and any other bleeding photograph; documentary photographs (storefront, room) and the map; the header band; rules. And nothing in the Comfort section.

**How many.** As the interaction spec has it: one static photo notch in a viewport, one bite event at a time. The plate does not count against the photo notch; it is the logo.

### 4.3 Portion discs: one, two, three bites

A flat disc in the ground colour (on paper) with the same notch at 69% of the diameter (tile; 66% visible), placed three times: at the top right, then rotated 85° clockwise about the disc's centre, then 85° anticlockwise. Area left, computed: 68%, 44%, 21%.

Draw them as inline SVG with a mask, not as stacked CSS masks (rendered clean at 72 and 120px):

```html
<svg viewBox="0 0 100 100" aria-hidden="true">
  <mask id="b3" maskUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120">
    <rect x="-10" y="-10" width="120" height="120" fill="#fff"/><path fill="#000" d="…"/>
  </mask>
  <circle cx="50" cy="50" r="50" fill="currentColor" mask="url(#b3)"/>
</svg>
```

Cumulative paths (each closes well outside the disc so no sliver of rim survives):

```
one:   M34 0A23.29 23.29 0 0 0 48.21 21.45A23.29 23.29 0 0 0 78.55 51.79A23.29 23.29 0 0 0 100 66L112 66L112 -12L34 -12Z
two:   (one) + M98.42 29.7A23.29 23.29 0 0 0 78.28 45.73A23.29 23.29 0 0 0 50.71 78.6A23.29 23.29 0 0 0 38.42 101.2L39.46 113.16L117.17 106.36L110.37 28.66Z
three: (two) + M-1.2 61.58A23.29 23.29 0 0 0 21.4 49.29A23.29 23.29 0 0 0 54.27 21.72A23.29 23.29 0 0 0 70.3 1.58L71.34 -10.37L-6.36 -17.17L-13.16 60.54Z
```

`data-bites="1|2|3"` swaps the mask, so each bite is a cut, as the interaction spec requires.

### 4.4 Status dot and crumbs

- **Dot:** 12px circle, ink. Closed: one round cut, `mask: radial-gradient(circle 6.5px at 80% 20%, #0000 97%, #000)`, which leaves a crescent. The same crescent in the ground colour is the ticker separator.
- **Crumbs** (interaction spec §1, rule 4): three dots of 5, 4 and 3px in the colour of the thing bitten, starting inside the notch, travelling at most 14px up and right. Never paper, never on a photograph.

### 4.5 The wordmark plate

FEAST DENTAL, Anybody 900 at width 62.5, capitals, tracking 0, in the ground colour, on a square-cornered ink plate that is bitten at the top right.

- In the header the plate is flush with the top and left of the page and as tall as the header: 72px (type 26px, left padding `--gutter`, right padding 44px, plate about 205px wide at 1440); 56px below 640 (type 22px, right padding 34px, about 152px wide).
- Free-standing: height 2.77 × the type size, padding 0.9em left and 1.7em right.
- On the ink footer the plate is the ground colour with ink type.
- The letters are never bitten, stretched or animated, and both words always appear (brand core Part 2e).

This is my invention; the brand core asked me to test the T, and the T fails.

---

## 5. Components

Every measurement is CSS px. "Rule" means `--rule` in ink unless a colour is named. Hover styles sit behind `(hover: hover) and (pointer: fine)`. States change in one frame or over 80ms with the Down ease; nothing fades.

### 5.1 Header

Sticky at the top, `z-index: 10`, ground colour on every section, rule along its bottom edge. It never hides or shrinks. Source: Sage Space's fixed 64px header ruled off by a 1.5px line; Urban Dentist's facts as plain text; seven sites print the phone number in the header.

| Width | Height | Contents, left to right |
|---|---|---|
| 1280 and up | 72 | Plate · nav (First visit, Services, Cost, Find us; 16px/500, 28px apart, starting 40px after the plate) · space · status (12px dot, 8px gap, "Open now till 7:30." 15px/500) · phone number (16px/600, tabular) · Book online (48px pill). 28px between the right-hand items; right margin `--gutter` |
| 1024–1279 | 72 | Same, with the short status ("Open till 7:30") and nav 18px apart |
| 640–1023 | 72 | Plate · space · short status · Book online |
| below 640 | 56 | Plate · space · short status. Booking and calling move to the bottom bar |

Nav links: ink, no underline at rest; hover and `:focus-visible` underline 1.5px, offset 4px; current section the same underline. No hamburger: below 1024 the four anchors are not shown, and the page is short enough to scroll (my call).

`scroll-padding-top` equals the header height.

### 5.2 Phone bottom bar (below 640)

Fixed to the bottom, `z-index: 10`, ink field, height 64px plus `env(safe-area-inset-bottom)`, padding 8px 12px, 8px gap. Two 48px pills: **Book online** (counter fill, ink label, `flex: 1.35`) and **Call or text** (transparent, 1.5px paper rule, paper label, `flex: 1`). Bite tile 27px on both. `scroll-padding-bottom: 64px`. Source: Sage Space's fixed 63px bottom bar; nine of ten captured phone heroes keep a booking control on screen (`01b` Part 3).

### 5.3 Pill button

| | Large | Medium |
|---|---|---|
| Height | 56 | 48 |
| Padding | 0 28px | 0 22px |
| Label | Public Sans 600, `--fs-ui`, sentence case, no icon | same |
| Radius, border | 999px, 1.5px ink rule | same |
| Bite tile | 35 | 27 |

| State | Primary | Secondary |
|---|---|---|
| Rest | counter fill, ink label, ink rule | no fill, ink label, ink rule |
| Hover | ink fill, counter label | ink fill, paper label |
| Focus-visible | rest, plus a 3px solid ink outline at 3px offset (counter-coloured outline on ink fields) | same |
| Pressed | `scale: .96`, origin bottom-left, 80ms; on release the bitten state (interaction spec §1) | 2% squash, no notch |
| On an ink field | counter fill, ink label, no rule needed | no fill, paper rule, paper label; hover paper fill, ink label |
| On the counter field | ink fill, counter label; hover paper fill, ink label | as on paper |

Source: pills on 15 of 19 sites, median 48px tall, hover a colour change and nothing else on 14 (`01b` Part 4). The lime-on-ink hover is my choice from four fills tried in `colour.html`.

Text links (More times, Get directions, footer links): ink, underlined 1.5px at 3px offset, 500. Hover: the underline thickens to 3px.

### 5.4 Price chip

A static label, not a control: "First visit **$195** 75 min". 40px tall, padding 0 16px, radius 999, ink rule. Label Public Sans 500 `--fs-small`; the numeral Anybody 800 at width 85, 20px, tabular. Fill is the other field's colour: **paper on ground or ink, ground on paper**. Never lime (it would read as a button), never bitten, never animated, not focusable. It sits beside every Book button outside the hero, so the number is next to the ask. Source: W5 (no price in any first screen) and the brand's third belief; the chip itself is my invention.

### 5.5 Next-openings chips

A native radio group. Label row: "Next openings" (600, `--fs-small`) left, "More times" link right. Then the chips, 8px apart; then the caption in `--fs-foot`.

| | 1280 and up | below 1280 |
|---|---|---|
| Chip | 48px tall, padding 0 18px, natural width (about 138px) | 48px tall, equal widths (`flex: 1`), padding 0 4–6px, centred, 6px apart |
| Label | day 700, time 400, 16px, tabular | 15px |

States: rest no fill, ink rule; hover paper fill; **chosen** counter fill, ink rule, notch (tile 23px), native `:checked`; focus-visible as buttons. A passed time is removed, not struck through (interaction spec §3). Source: W5 and W13.

### 5.6 Ticker

Ink band, 56px tall (48 below 640), full bleed. A **Pause** tab fixed at the start: 72px wide (64), full height, Public Sans 600 15px, paper label, 1.5px paper rule on its trailing edge; paused, it inverts to paper fill and ink label and reads "Play". Track: Anybody 800, width 100, capitals, `--fs-ticker`, tracking +0.01em, paper. Between facts a 12px crescent in the ground colour with 22px either side. Speeds and the pause rules are the interaction spec's. Source: tickers on 8 of 19 sites; ink and not lime because Tend's is lime.

### 5.7 Service row

*Amended to match the build, 2026-11-09: the row rests on paper, and the hovered or focused row has ink rules on its ends. See "Amendments to match the build (2026-11-09)", B and C, at the end of this file.*

A ruled row: rule on top of the first, rule under each.

| | 1024 and up | below 1024 |
|---|---|---|
| Grid | `minmax(0,1fr) auto`, 24px apart: word and description left, price right, centred vertically | word on its own line; under it description left and price right, aligned to the bottom |
| Padding | 12px | 10px 4px |
| Height, measured | 122–142 | 106–122 |
| Word | Anybody 900, `--fs-d2`, width 62.5, one unbroken word | same; it has the whole line, so it can open to width 100 |
| Description | Public Sans 400 `--fs-small`, line-height 1.35, max 34em, 4px under the word. The qualifier and any second price live here | same |
| Price | Anybody 900 `--fs-d2`, width 75, tabular; "from" before it in Public Sans 500 `--fs-small`, 10px gap. Never animates | same, in the second line |

States: at rest the row has no fill (the Services field is the ground). Hover and `:focus-visible` (the row is one link to the booking flow): **ground swaps to the counter and the word opens to width 100**; price and description do not move. Touch behaviour is the interaction spec's. No photograph, no icon, no arrow.

Which number is large: the row's first-cost-to-the-patient figure, except Aligners, which shows "from $3,400" large with "Consult $0 · 30 min" in the description. A large "$0" would read as the offer this voice refuses to make. Copy owner to confirm.

Source: Jacques + Cie's full-width hover rows (`jacquescie-05-hover.png`), LAVA's and Rüh's priced rows ("typeset large, not hidden in a table"). The width change on hover is from W6.

### 5.8 Lane

Each lane is a 12-column grid with a rule on top: lane name in columns 1–2 (Anybody 800, `--fs-d4`, capitals, 14px below the rule; its caption under it in `--fs-small`), rows in columns 3–12. Below 1024 the name sits above its rows, full width. Source: margin notes, W11.

### 5.9 Numbered step

Three ruled columns from 1024 up (rule on top, vertical rule between columns), stacked rows with a rule under each below that.

- Padding 16px 24px 20px (first column no left padding); stacked: 14px 0.
- Top line: numeral left (Anybody 900, `--fs-d1`, width 75, line-height 0.8), portion disc right (120px; 72px stacked), `aria-hidden`.
- Title 14px below: Anybody 800 `--fs-d3`, width 85.
- Body `--fs-body`, max 32em; caption `--fs-small` under it.

Source: numbered rows at Zen, Aventura and LAVA (W11). The disc is this brand's.

### 5.10 FAQ row

`<details name="faq">`, max width 880px. Summary: min-height 72px (64 below 640), padding 14px 4px, question in `--fs-faq`, a 20px plus on the right drawn with two 2px ink strokes, rule underneath. Open: the plus turns 45° into a cross (the one rotation on the page); answer padding 14px 4px 22px, `--fs-body`, max 36em, rule underneath. Hover: the question underlines. Focus-visible: the ink outline on the summary.

### 5.11 Captions, footnotes, margin notes

- **Caption** under a photograph: `--fs-small`, ink, 8px below, literal ("Apple. 4:10 pm.").
- **Footnote**: `--fs-foot`, line-height 1.4, max 78 characters; the marker is a superscript numeral in the text and at the start of the note. The hero footnote stays on the same screen as the price at every width (proofed at four).
- **Margin note**: `--fs-small` in the label column beside what it annotates.

Source: W11 (no captions, footnotes or margin notes anywhere in the set).

### 5.12 Hours table

Two columns, rule above every row and under the last, cell padding 9px 14px 9px 10px, `--fs-body`, tabular figures, times right-aligned. Today's row: counter fill, weight 600, and the word "Today" (12px/600) after the day. Proofed; the columns align.

### 5.13 Insurance switch (Cost)

Two radio pills, 48px, side by side, one shared ink rule: chosen is ink fill with paper label, the other no fill with ink label. It is a selection, not a booking action, so it is never lime and never bitten. The block under it swaps in one frame.

### 5.14 Footer field

Ink, full bleed, padding 0 `--gutter` 28px.

- The plate in the ground colour, flush top-left, 72px tall.
- Four fact columns of three grid columns each (two by two below 640): heads in Anybody 800 `--fs-d4` capitals in the ground colour; text `--fs-small` paper; links underlined.
- A paper rule, then one line: legal and disclosure in `--fs-foot`, Privacy, Accessibility, and the "Stop the motion" text button; at the far end the cookie (56px disc in the ground colour, a real button) with its caption.
- No giant wordmark.

Source: "the footer is often a flat colour field" (`01b` Part 4).

### 5.15 Form fields

There are none in this layout. If the scheduler or a card-photo upload brings one: 56px tall, square corners, paper fill, ink rule, label above in `--fs-small` 600, focus the 3px ink outline, error in ink text beneath. Never bitten, never animated.

---

## 6. Layouts

Coordinates are for 1440 (content from x 40 to 1400, columns c1–c12) and 390 (content from x 16 to 374). `y` values marked "measured" come from the proof.

### 6.1 Hero (proofed: `proof-hero-1440.png`, `-1024`, `-768`, `-390`)

*Amended to match the build, 2026-11-09: the price and designation sizes and the designation beside her arm are replaced by the lock-up. See "Amendments to match the build (2026-11-09)", A, at the end of this file.*

**1440x900.** First screen holds the dentist, headline, price and length, next openings and both buttons, the footnote and the ticker; the next section shows below it.

```
y 0   ┌───────────────────────────────────────────────────────────────────────────────────────────┐
      │▛FEAST DENTAL▙▖ First visit  Services  Cost  Find us     ● Open now till 7:30.  (512) 555-0142  (Book online)│
y 72  ├───────────────────────────────────────────────────────────────────────────────────────────┤
y 100 │ I don’t care how long                                        ·:░░░░░░░░ photograph ░░░░░░░│  line 1 ends x 1059
y 215 │ it’s been.                                                   ·:░  c8 to the page edge   ░│
      │                                                              ·:░  x 847–1440, bleeds    ░│
y 353 │ I care about what’s bothering you now. I’m Paloma, …  c1–c7  ·:░  top, right, bottom;   ░│
      │ (lead, 3 lines, 660px)                                       ·:░  left 72px feathered   ░│
y 457 │ Open till 7:30 pm Tuesdays and Thursdays, …  (small, 600)    ·:░                        ░│
      │                                                              ·:░                        ░│
y 539 │ ───────────────────────────────────────────────── c1–c8      ·:░ DR. PALOMA             ░│  label x 963, y 636
      │ First visit · 75 min │ Next openings          More times     ·:░ KRENEK, DDS            ░│
      │ $195                 │ (Tue 5:45 pm)(Wed 8:00 am)(Thu 5:30 pm)·:░ GENERAL                ░│
      │ without insurance¹   │ Sample times for this demo, …          ·:░ DENTIST                ░│
      │                      │ (Book online) (Call or text (512) 555-0142)                       ░│
y 743 │ ─────────────────────────────────────────────────            ·:░                        ░│
y 753 │ ¹ Exam, X-rays and a regular cleaning. …  c1–c7               ·:░                        ░│
y 814 ├───────────────────────────────────────────────────────────────────────────────────────────┤
      │ Pause │ BOOK ONLINE ANY TIME ◗ EVENINGS TUESDAY AND THURSDAY ◗ SATURDAY MORNINGS TOO ◗ …   │  ticker 56
y 870 └───────────────────────────────────────────────────────────────────────────────────────────┘
```

- Hero block: 12-column grid, padding 28px `--gutter` 22px, `min-height: clamp(640px, 51.5vw, 760px)` (742 at 1440, measured).
- **Photograph:** `paloma-hero.png` (the closed-mouth take; see 2.5). A `figure` in c8 to the end of the grid, stretched to the hero's full height, pulled to the page's right edge and to the hero's top and bottom with negative margins, behind the text (`z-index: -1` inside an isolated hero). Image `object-fit: cover; object-position: right top`; left edge `mask-image: linear-gradient(to right, #0000, #000 72px)`. Not bitten (2.5).
- **h1:** c1–c12, two lines, `--fs-hero`, width 66, line-height 0.9.
- **Subhead:** c1–c7, 22px below the h1, max 30em. **Hours fact** 12px below it, `--fs-small` 600 (specified, not in the proof).
- **Booking strip:** c1–c8, aligned to the bottom of its row; rule above and below. Two cells: price cell as wide as its numeral plus 28px (355px measured), then a vertical rule and the openings cell with 24px left padding (544px). Price cell: label (`--fs-small` 600), numeral (`--fs-price`), "without insurance¹". Openings cell: label row, chips, caption, then the two 56px buttons 10px apart. 204px tall, measured.
- **Designation:** Anybody 800 `--fs-d4` capitals on four lines at c9, bottom 14px above the strip's bottom rule, on the flat part of the photograph beside her arm.
- **Footnote:** c1–c7, 10px under the strip.
- Header plus hero is 814px. In a 1440x800 window everything through the buttons (which end at y 729) is in view and the footnote starts at y 753.

Source: the dentist's face and first-person voice in the first screen (W4); a real price and real times where others have a button (W5, W13); poster-tier headline (Jacques + Cie, Esteve, MINÉMAL at 104–153px); a person on a flat colour backdrop (Tend, Impress, Jacques + Cie). The bleed, with the page's ground taken from the photograph, is my construction.

**1024–1279.** Same grid. h1 width 56. Chips equal-width. The designation moves to one line with its interpunct, right-aligned to c8, 10px above the strip. The secondary button drops the number (it is in the header). Hero 698px at 1024 (measured).

**640–1023.** One column. h1 on three lines at width 72; subhead; then the photograph as a full-bleed band `min(46vw, 400px)` tall (image `object-position: right 6%`, top edge feathered 32px) with the designation at its top left and the price block at its bottom left, laid over the photograph's empty third; then the openings block with a rule on top and both buttons; then the footnote. 971px at 768 (measured).

**390x844** (measured):

```
y 0   ┌──────────────────────────────────────┐
      │▛FEAST DENTAL▙▖        ● Open till 7:30│  header 56
y 68  │ I don’t                               │  h1 56px, width 75, 3 lines (151)
      │ care how long                         │
      │ it’s been.                            │
y 229 │ I care about what’s bothering you now.│  subhead 17/24, 4 lines (95)
      │ I’m Paloma, a general dentist …       │
y 336 │ DR. PALOMA          ░░░░░░░░░░░░░░░░░│  photograph band, full bleed, 240 tall
      │ KRENEK, DDS        ░░ head and    ░░░│  designation 17px at y 348
      │ GENERAL            ░░ shoulders,  ░░░│
      │ DENTIST            ░░ right       ░░░│
      │ First visit · 75 min ░░           ░░░│  price block bottom-aligned, numeral 56px
      │ $195               ░░░░░░░░░░░░░░░░░│
      │ without insurance¹ ░░░░░░░░░░░░░░░░░│
y 576 │ ─────────────────────────────────────│
      │ Next openings              More times │
      │ (Tue 5:45 pm)(Wed 8:00 am)(Thu 5:30 pm)│  3 equal chips, 48 tall
      │ Sample times for this demo, …         │
y 709 │ ¹ Exam, X-rays and a regular cleaning.│  footnote ends y 766
y 780 ├──────────────────────────────────────┤
      │ ( Book online )      ( Call or text ) │  bottom bar 64, ink
y 844 └──────────────────────────────────────┘
```

Padding 12px 16px. Gaps: h1 to subhead 10, subhead to photograph 12, strip to footnote 8. There are 14px to spare above the bar: the subhead must stay at four lines of 17px (about 150 characters). On shorter windows the footnote slides under the bar first; the buttons never leave. The hours fact goes after the footnote on phones, below the first screen.

### 6.2 Facts ticker

Directly under the hero at every width (5.6). At 1440x900 it is in the first screen, so it starts after the headline settles (interaction spec §8).

### 6.3 First visit in three steps (paper; steps proofed in `proof-steps-faq-*.png`)

```
1440                                                    390
│ Here’s your whole first visit.        (h2, c1–c12) │   │ Here’s your whole    │
│ ──────────────────┬──────────────────┬─────────────│   │ first visit.         │
│ 1            ◔    │ 2           ◑    │ 3        ◕  │   │ ─────────────────────│
│ Book              │ Look             │ You decide  │   │ 1                 ◔  │
│ Pick a time …     │ Tell me what …   │ I draw …    │   │ Book                 │
│ From your phone.  │ 75 minutes.      │ You keep …  │   │ Pick a time online … │
│ ──────────────────┴──────────────────┴─────────────│   │ From your phone.     │
│ Haven’t been in years? You’re welcome here.  (Book online) [chip] │ ─────────────────────│
```

Padding `--section-y`. h2 to steps 32px (20 on phones). Steps as 5.9: three columns of four grid columns. Under them, 32px down: the line in `--fs-lead` left, and right-aligned the price chip (ground fill) then the 56px primary button; stacked and left-aligned on phones. No photograph: the three discs are the picture.

### 6.4 Services in two lanes (ground; proofed in `proof-services-*.png`)

*Amended to match the build, 2026-11-09: the section is on paper, and below 390 the designation, words and prices scale together. See "Amendments to match the build (2026-11-09)", B and E, at the end of this file.*

```
1440
│ What I do, and what it costs.                                   (h2)          ┌── 160px ──┐
│ DR. PALOMA KRENEK, DDS · GENERAL DENTIST   (--fs-d2, 1,095px, one line)       │ still life│
│ ──────────────────────────────────────────────────────────────────────────── │ 4:5, lime │
│ KEEP YOUR TEETH   │ Checkups                                      from $145   │ sweep,    │
│ WORKING           │ After your first visit: exam and …                        │ bitten    │
│  (c1–c2)          │ ──────────────────────────────────────────────────────── └───────────┘
│                   │ Fillings                                      from $190   │
│                   │ Emergency  ← hover: counter ground, word at width 100  $95│
│ ────────────────────────────────────────────────────────────────────────────  │
│ CHANGE HOW        │ Whitening                                     from $250   │
│ THEY LOOK         │ Aligners                                    from $3,400   │
│ Only if you want. │                                                           │
│ ────────────────────────────────────────────────────────────────────────────  │
│ Every price here is without insurance. You get a written estimate before any treatment. │
```

- h2, then 16px, then the **designation line** at exactly the service-word size and width (62.5, capitals, tracking 0), then 18px, then the lanes. Below 640 the designation stacks on two lines with no interpunct (proofed).
- **Texas rule.** This is how the page meets "no smaller than the largest type used for the advertised services" as the brand core reports it: the designation sits directly under the heading at the service-word size. In the hero, the service label ("First visit · 75 min") is 15px and the designation beside the portrait is 22px. Whether a 150px price numeral counts as "type used for the advertised service" is a legal reading I cannot make; if it does, set the hero numeral and the hero designation to the same size. Neither I nor the brand writer has read the rule text.
- The whole section sits on the ground: ink type, ink rules, and the hovered row turns lime. Padding `--section-y`.
- One still life, `bite-toast` (lime backdrop, 4:5, bitten): 160px wide and 200px tall, right-aligned, bottom-aligned with the designation line, from 1024 up. The heading block is a two-column grid, `minmax(0,1fr) 160px`. Measured at 1440: heading and designation together 200px tall, the still life at x 1240. Not shown below 1024. It is beside the heading, not beside a service.
- Rows and lanes as 5.7 and 5.8. The closing sentence 24px under the last rule, `--fs-body`.

390: heading, stacked designation, then each lane as name, caption, rows.

### 6.5 Comfort (paper; not rendered)

The stillest section: text and one plain control. c3–c10 at 1440 (8 columns, about 900px), one column on phones.

```
│        Nervous is normal here.                 (h2)            │
│        Say so at the door and I slow down. …   (lead, 30em)    │
│        ─────────────────────────────────────                   │
│        What helps                              (label, small 600)
│        A stop signal: raise a hand and I stop  (ruled list, body size, one rule under each)
│        Breaks whenever you ask                                 │
│        …                                                       │
│        Text us a question   (text link)                        │
│        (Stop the motion)  Like the stop signal in the chair. … │   secondary pill 48 + small text
```

No bite, no lime, no photograph that is bitten. If `comfort-headphones` is used it sits in c9–c12 square and unbitten, and only once its paper backdrop matches the page (2.5). Source: interaction spec §5; the page goes quiet where it says "your pace".

### 6.6 Meet the dentist (counter; proofed in `proof-dentist-1440.png`, `proof-dentist-390.png`)

The hero's construction again, mirrored and in lime: the portrait bleeds from the left, the words stand on the right.

```
1440 (band 848px tall, measured)                                          390
│░░░░ paloma-apple ░░░░:·                                             │   │░░ photograph, full bleed ░░░│
│░ c1–c5 and out to   ░:·    I’m Paloma.              (h2, c7–c12)    │   │░░ 70vw tall, top feathered ░│
│░ the page’s left    ░:·    I’m a general dentist, and I opened …    │   │        Paloma. Apple. 4:10 pm.
│░ edge, x 0–593;     ░:·    (body, 36em)                             │   │ I’m Paloma.                 │
│░ full band height;  ░:·                                             │   │ bio                         │
│░ right 72px         ░:·    Teeth are for biting.                    │   │ Teeth are for biting.       │
│░ feathered          ░:·    I keep them at it.      (pull line, d3)  │   │ I keep them at it.          │
│░                    ░:·    ─────────────────────────────────────    │   │ ────────────────────────────│
│░                    ░:·    1  I ask first.                          │   │ 1  I ask first. …           │
│░                    ░:·       One question, and your answer …       │   │ 2  I draw it. …             │
│░                    ░:·    2  I draw it. …                          │   │ 3  I price it in writing. … │
│░                    ░:·    3  I price it in writing. …              │   │ credentials                 │
│░        Paloma. Apple. 4:10 pm.   Dr. Paloma Krenek, DDS · General Dentist  (small 600)
│░                    ░:·    DDS, [school, year] · …                  (small)
```

- Band: lime field, 12-column grid, padding `--band-y` `--gutter`, `min-height: clamp(640px, 51.5vw, 760px)`.
- **Photograph:** a `figure` in c1–c5, stretched to the band's full height and pulled to the page's left edge with a negative margin, behind the text. `object-fit: cover; object-position: left top`; right edge feathered 72px. Not bitten. The bite in this section is the one in her apple.
- **Text:** c7–c12, centred vertically, 18px between blocks. h2 in `--fs-d1`; bio in `--fs-body`; the pull line in Anybody 800 `--fs-d3`; then a ruled list: numeral (Anybody 900 `--fs-d3`, width 75) in a 2.4em column, heading in Anybody 800 at 22 → 28px, sentence in `--fs-body`, 10px above and below, ink rule under each; then two credential lines in `--fs-small`.
- **Caption:** `--fs-small`, in c4–c5 at the right edge of the photograph's empty third, bottom-aligned with the text block.
- All type and rules are ink (14.94:1). No button in this section; if one is ever added it is ink with a lime label.
- Below 1024: the photograph first, as a full-bleed band `min(70vw, 460px)` tall with a 32px feathered top, caption under it at the right, then heading, bio, pull line, list, credentials.

Source: W4 (nobody lets the dentist speak); a person on a flat colour backdrop (Tend, Impress, Jacques + Cie). The lime field under a lime-backdrop portrait is my construction, and it is the page's one lime field.

### 6.7 No reviews yet (ink; proofed in `proof-dentist-zero-1440.png`, `proof-zero-390.png`)

*Amended to match the build, 2026-11-09: the promise headings are Anybody 800 at the dentist band's heading size. See "Amendments to match the build (2026-11-09)", D, at the end of this file.*

```
1440                                                                390
│  ▄▄▄▄▄                reviews. I opened in October.          │   │  ▄▄▄                    │
│ █     █  (the “0”,    Here’s what I promise instead. (h2)   │   │ █   █  (144px)          │
│ █     █   312px,      ─────────────────────────────────     │   │  ▀▀▀                    │
│  ▀▀▀▀▀    counter,    1  No lecture.                        │   │ reviews. I opened …     │
│           c1–c5)         I’ll ask when you last came in, … │   │ ────────────────────────│
│                       ─────────────────────────────────     │   │ 1  No lecture. …        │
│                       2  The price in writing. …            │
│                       3  I stop when you say. …             │
│                       Come in, then tell people how it really went.   Write a Google review
```

Padding `--band-y`. The "0" in the counter colour, c1–c5; text c6–c12 in paper; rules in paper; list numerals in the ground colour. No star, no rating widget, no photograph needed. Source: the brand core's "0 reviews"; the numeral as a graphic is W6.

### 6.8 Cost and insurance (ground; not rendered)

```
1440
│ You’ll know the cost first.                      (h2, c1–c8)        ┌── c10–c12 ──▚┐
│ ( With insurance | No insurance )   switch, 5.13                    │ the-drawing   │
│ ────────────────────────────────────────────── c1–c8                │ paper sweep,  │
│ The first visit is $195. That’s a full exam, …   (body, 36em)       │ 4:5, bitten   │
│ ──────────────────────────────────────────────                      └───────────────┘
│ You get a written estimate before any treatment.  (Anybody d3)      The pad. The marker.
│ Insured or not.
│ (Book online)  (Check my insurance)   [chip: paper fill]
```

All type ink on ground. Nothing moves. The figure "$195" in running text stays in the text face; the chip carries the display numeral. 390: heading, switch, block, promise, buttons, then the photograph full width. Source: The Gleamery's table and Rüh's priced rows, where the table does the selling; "the bill stands still" (interaction spec §0).

### 6.9 Find us and hours (paper; hours table proofed)

```
1440
│ We’re in Holly, on the east side.                               (h2, c1–c12)
│ ┌──────────── c1–c6 ────────────┐   Hours                       (label)   c8–c12
│ │ storefront, 3:2, square        │   ● Open now till 7:30.      (dot 20px, lead size)
│ └────────────────────────────────┘   ─────────────────────────
│ The front door, 2217 Tejocote Street.  Mon   8 am to 5 pm
│ 2217 Tejocote Street, Austin, TX 78702 Tue   11 am to 7:30 pm   ← today: counter fill, “Today”
│ [Parking … to confirm]                 …
│ Get directions   Call or text (512) 555-0142
│ ┌──────────── c1–c6: map image, 16:9, square, links out ─────────┐
```

Storefront and map are documentary: square corners, no bite. 390: heading, status, hours table, address and links, storefront, map. Source: the Urban Dentist's plain facts; W13.

### 6.10 FAQ (paper; rows proofed)

1440: h2 "Go on, ask." in c1–c4, the list in c5–c12 (max 880px). 390: heading, then the list. After the last answer, 32px down: chip and primary button. Rows as 5.10.

### 6.11 Closing band (ground; not rendered)

```
1440
│ No lecture. Price in writing.                     (h2, c1–c9)        ┌── c10–c12 ──▚┐
│ Come in.            ← alone on its line, opens to width 125, stays   │ bite-peach    │
│ (Book online)  (Call or text (512) 555-0142)   [chip: paper fill]    │ lime sweep,   │
│ Then go bite something.                           (lead)             │ 4:5, bitten   │
│ Open Monday to Saturday. Till 7:30 pm Tuesdays and Thursdays. (small)└───────────────┘
```

Padding `--band-y`. 390: lines, buttons stacked full width, send-off, hours line, then the photograph.

### 6.12 Footer

As 5.14 (proofed: `proof-footer-1440.png`, `proof-footer-390.png`). On phones add `--bar-h` of bottom padding so the bar never covers the last line.

---

## 7. "This would make it look generated": the check for this design

*Amended to match the build, 2026-11-09: the paper-stretch line is an accepted deviation, and the hovered service row is now ruled on all sides. See "Amendments to match the build (2026-11-09)", B and C, at the end of this file.*

Run it against the built page. Any yes is a defect.

**Type**
- A third typeface anywhere, including a monospace for labels or a system font left in a widget.
- Anybody at a weight below 800, or as body copy. Public Sans above 28px.
- Uppercase tracked labels in Public Sans.
- A headline in two colours, a gradient in type, an italic.
- Display type centred. Every heading here is flush left.
- Slashed zeros in prices. Prices that are not tabular. A price that animates.
- The h1 carrying the city name.

**Colour**
- A fifth colour: a grey, a tint of ink at 60%, a red for errors, a green for "open".
- Lime on anything that is not a yes, a selection, today, a hovered row, the "0" or the dentist band. A second lime field. Lime without an ink rule on paper or ground.
- Two bands blending into each other, or a soft edge between fields. Every field here meets the next at a hard line.
- A paper stretch longer than two sections.
- Paper-coloured text on the ground.
- `#000` or `#fff`.
- A tangerine gradient, a glow, a vignette behind the portrait.

**Shape and structure**
- A second radius: 8px on a photo, 12px on a table, a rounded "card".
- Any shadow, including on the sticky header and the bottom bar.
- A card grid for services, steps or promises. Three equal cards with an icon on top.
- Icons: a tooth, a tick in a circle, a phone handset, a calendar, arrows in buttons.
- A star row, a rating badge, an "as seen in" strip, a count of happy patients.
- A photograph in every service row. A food next to "Emergency".
- A giant cropped wordmark in the footer.

**The bite**
- More than one bitten photograph in a viewport, or a notch on every image.
- A notch in any corner but the top right; two different notch shapes; a notch with a drop shadow or an outline of its own.
- A bite through a letter, a price, a face, a form field, the map.
- A hairline of the old outline around a notch (see departure 6).
- A bite in the Comfort section.

**Layout**
- A centred hero with two pills under it.
- Sections of equal height and equal padding all the way down; the same two-column image-and-text block alternating left and right.
- The portrait in a rounded frame, a circle, or cut out with a soft edge on a flat panel.
- Text lines longer than 66 characters.
- A cookie banner, chat bubble, accessibility widget or review toast over the first screen.

**Motion** is covered by the interaction spec §10; the visual tells that go with it are a pulsing status dot, a shimmer on the chips while they load, and a hover that lifts anything.

---

## 8. What is mine, what is uncertain, what is open

**My inventions** (no captured site or whitespace item behind them; judge them on the proofs): the wordmark plate; the price chip; ground and counter taken from the two portraits so that each bleeds into its field; the lime dentist band; Services on the ground field; lime text on ink as the primary hover; the designation line as the services section's headline; the crescent as ticker separator; today's row in lime; dropping the hamburger; the three-equal-arcs geometry in place of the provisional four.

**Least sure, in order.**

1. **The notch geometry.** Three equal arcs is the more ownable mark and survives small sizes; the provisional four uneven marks look more like a real bite on a large photograph. I chose one shape for everything. If the lead prefers the four-mark scoop, use it everywhere, plate and discs included; do not mix.
2. **Both saturated colours come from two generated frames.** `#f9530a` is a step deeper and hotter than the `#ff6418` I picked by eye before the photographs existed, and `#cffb43` a step greener than my `#d6ff3f`. If a portrait is re-shot, either grade its backdrop to the token (within about 3 levels per channel at the feathered edge) or re-sample and accept a new value. Ink on ground must stay at or above 4.5:1; it is 5.34 now. Related: five saturated fields is a lot of orange. If it tires the eye in the full build, Services is the one to return to paper; the dentist band, Cost and Closing still give three past the hero.
3. **Public Sans.** It is the US government's web typeface, and some Austin visitors will have met it on a .gov form. I think that association (plain, official, no tricks) helps a page about prices in writing; it could also read as dry. Uncut Sans is the swap if it does.

**Open, for others.**

- Image review (my Part 2): paper-backdrop frames against `--paper` (2.5); whether the hero frame should be re-generated with more empty backdrop on the left for the phone crop (the price numeral has 122px and uses all of it).
- Copy: the Aligners row's large figure; the phone subhead must stay within about 150 characters.
- Legal: the Texas designation rule against a 150px price numeral.
- Build: `tools/bite.mjs` shapes and `tokens.css` values per sections 3 and 4; the interaction spec's build note 1 (departure 6).
- Not done by me: Safari and Firefox renders; any check of `font-stretch` animation cost; the sections marked "not rendered".

**One thing I did outside my brief.** While reading `tools/bite.mjs` I ran it once. It rewrote `assets/css/bite.css` from the unchanged provisional geometry; the file is the same 4,284 bytes as before, but its modified time is now 20:16.

---

## Files

- `brand/specimens/type.html`: six display and four text candidates set with the real headline, name, prices and designation; the ruled-out strips with reasons; Anybody's axes at their extremes.
- `brand/specimens/colour.html`: V1–V4, the by-eye tuning, the final palette with every ratio, then the proof: hero, the bite sheet, services, first-visit steps, FAQ, hours, the dentist band, "0 reviews", footer. It loads three pictures from `assets/img/src/` (`paloma-hero.png`, `paloma-apple.png`, `bite-toast.png`); if those move, the proof loses them.
- Screenshots to open first: `proof-hero-1440.png`, `proof-hero-390.png`, `proof-dentist-1440.png`, `proof-services-1440.png`, `proof-dentist-zero-1440.png`, `proof-bite-1440-a.png`, `proof-bite-1440-b.png`, `colour-final-1440-contrast.png`, `type-d1-anybody-1440.png`, `type-d2-archivo-1440.png`.
- Both specimen pages load fonts from Google Fonts for the specimen only.

---

## Amendments to match the build (2026-11-09)

The build departed from this spec in five places during review. The sections above are left as written; each changed one carries a pointer to this section, and where the two disagree, this section describes the page. Every value below was checked against `assets/css/page.css` as saved at 00:26 on 10 November (selectors are given, not line numbers, because the file was still being edited).

### A. Hero lock-up: the price numeral and GENERAL DENTIST at one size

Replaces, in 6.1: the price numeral at `--fs-price`, the designation in `--fs-d4` capitals on four lines at c9 "on the flat part of the photograph beside her arm", the one-line designation right-aligned to c8 at 1024–1279, and the designation and price block over the band from 640 to 1023 and in the 390 diagram. In 1.3 it replaces the `--fs-price` row (the token no longer exists) and "hero designation" in the `--fs-d4` row.

- **One size, `--fs-lock`, for "$195" and GENERAL DENTIST,** in one ruled block (block "HERO LOCK-UP" in `page.css`). Anybody's capitals and figures are the same height (0.68em), so equal font size is equal letter height.

  | Width | `--fs-lock` |
  |---|---|
  | below 640 | `clamp(2.5rem, 12.3vw, 3rem)`: 40px at 320, 48px from 390 |
  | 640–1023 | `clamp(3.5rem, 8.4vw, 5rem)`: 56 to 80px (about 64px at 768) |
  | 1024–1279 | `3.625rem` (58px) |
  | 1280 and up | `min(6.667vw, 6rem)`: 85 to 96px |

- **GENERAL DENTIST** (`.who__gd`): Anybody 800, width 50 (the axis floor), line-height 0.86, tracking 0, no wrap. Below 640 it stands on two lines, GENERAL / DENTIST. The designer advised never setting it under 48px; below 390 `--fs-lock` takes it down to 40px at 320.
- **Her name** (`.who__n`): Anybody 800, width 62.5, capitals, `--fs-d4` (17px below 640, 15px below 360). The bullet between name and designation is in the markup and hidden in the hero.
- **The numeral** (`.num`): Anybody 900, width 100 below 640 and 125 from 640 (`--wdth-price`), line-height 0.86, tabular lining figures, on a paper plate (`.fv`) ruled in ink above and below.
- **From 1024:** the booking strip's left cell holds the designation (row 1) and, under it, the price plate, which runs out to the page's left edge; the openings fill the right cell across both rows. The strip spans c1–c8 at 1024–1279 and c1–c9 from 1280. At 1024–1279 the name sits above GENERAL DENTIST and the plate stacks label, numeral and caption; from 1280 the name (two lines) sits beside GENERAL DENTIST and the numeral has its label and caption to its right.
- **Below 1024:** the name and GENERAL DENTIST stand at the bottom left of the photograph band, and the price plate runs full bleed directly under the band, then the openings, the footnote and the insurance line. The band is at least `min(32vw, 290px)` tall (246px at 768), and grows only if enlarged text spacing needs the room: not 6.1's `min(46vw, 400px)`, and not the `min(38vw, 340px)` in the design review's addendum.
- **Below 640:** the band is at least `clamp(150px, 24svh, 204px)`, and the order is headline, band (with the name and designation), price plate, openings, footnote, subhead, insurance line. The subhead moves below the footnote by CSS order only.
- **Measured positions** at each width are in the addendum at the end of `.ops/qa/design-review.md` ("Where each element sits, per width", re-measured 23:22). They were taken before the band height below 1024 changed, so the positions at 768 differ.
- Why: the 150px numeral beside a 22px designation was the page's one open question under 22 TAC 108.55(b) (`.ops/qa/compliance.md` 3.3 and M4), and at 1280 to 1366 the designation sat on her arm (`.ops/qa/design-review.md` item 2). The designer's addendum chose the lock-up over both compliance options. It also settles the question 6.4's Texas bullet leaves open: the hero numeral and the hero designation now share a size.

### B. Services on paper, and Comfort ruled

Replaces: the Services column of the table in 2.4 and the paragraph under it; "Five saturated fields" in section 0; "(ground…)" in the 6.4 heading and "The whole section sits on the ground" in 6.4; "the Services field is the ground" in 5.7. Section 7's line "A paper stretch longer than two sections" no longer passes: see below.

- `#services` is `class="sec paper"`. `#comfort` is `class="sec paper ruled"`: a 1.5px ink rule along its top edge (`.sec.ruled`), as 2.4 asks wherever two paper sections meet.

  | Header | Hero | Ticker | First visit | Food strip | Services | Comfort | Dentist | No reviews | Cost | Find us | FAQ | Closing | Footer |
  |---|---|---|---|---|---|---|---|---|---|---|---|---|---|
  | ground | ground | ink | paper | paper | paper | paper, ruled | **counter** | ink | **ground** | paper | paper, ruled | **ground** | ink |

- Four saturated fields (hero, dentist band, Cost, Closing), three of them past the hero. The sticky header keeps a tangerine bar on every screen.
- **Accepted deviation.** First visit, the food strip, Services and Comfort are one paper run, so 2.4's "Saturated colour never leaves the screen for more than one section until Find us and FAQ" and section 7's "A paper stretch longer than two sections" no longer describe the build. The designer counts the food strip as the break in the run (`.ops/qa/design-review.md` section 3); the evidence review counts four paper sections and calls it a decision, not a patch (`.ops/qa/evidence.md` E5). The page keeps it.
- Why: the designer recommended it (`.ops/qa/design-review.md` section 3): about 1,200px of full tangerine screen set in 15px descriptions at 5.34:1, against 16.44:1 on paper; the field order read as zebra bands; the food strip's two tangerine tiles lost their edge 43px above a tangerine field; and the lime hover only exists for a mouse. It is the fallback this spec names in section 8, least sure 2.
- A price chip on paper takes the ground fill (`.paper .chip`). Services has no chip.
- To undo: the comment above `#services` in `index.html` says to swap `paper` for `gr`.

### C. The hovered or focused service row is ruled on its ends

Replaces the States paragraph of 5.7 in one respect, and answers section 7's "Lime without an ink rule on paper or ground" for this row.

- `.svc__row` carries a transparent 1.5px rule at each end (`border-inline`). On hover (fine pointers only) and on `:focus-visible` the row fills with the counter and both end rules turn ink, so the lime row is ruled on all four sides: the list's rules above and below, its own at the ends. The word still opens to width 100, and the price and description still do not move. The focus outline is 3px ink, inset 3px.
- Why: lime on paper is 1.10:1, and 2.3 allows it only with a 1.5px ink rule. With Services on paper the hovered row's two ends had no edge (`.ops/qa/evidence.md` E5: "If it stays on paper, rule the row's ends").
- Today's row in the hours table still has rules above and below only, which the designer accepted (`.ops/qa/design-review.md` section 5, item 7).

### D. Promise headings in the "0 reviews" band

Replaces "promise headings" in the `--fs-d3` row of 1.3, and the heading setting implied in 6.7.

- `.promises h3`: Anybody 800, width 85, `clamp(1.375rem, calc(1.236rem + 0.571vw), 1.75rem)` (22 to 28px), line-height 1.1, balanced. That is the size 6.6 gives the point headings in the dentist band ("Anybody 800 at 22 → 28px"), not `--fs-d3` (28 to 40px).
- Why: Public Sans 600 at 22px did not match the dentist band's headings, and four 40px headings would crowd the band (`.ops/qa/evidence.md` E10, which sides with the dentist-band size). This supersedes the design review's earlier approval of Public Sans 600 (`.ops/qa/design-review.md` section 2).
- Noted while checking, as of the 00:26 save: the promises no longer carry numerals (`.promises li::before { content: none }`; the stylesheet's comment says "numbering belongs to the first-visit steps"), so 6.7's "list numerals in the ground colour" no longer applies either.

### E. Below 390px, `--fs-d2` scales with the screen

Adds to the `--fs-d2` row of 1.3 (40 → 72) and to 6.4.

- `@media (max-width: 389.98px) { :root { --fs-d2: min(2.5rem, 10.1vw); } }`: about 39px at 389, 36px at 360, 32px at 320. From 390 the token is unchanged (40px at 390).
- `.desig`, `.svc__word` and `.svc__price` all take `--fs-d2`, so the designation, the service words and the row prices shrink together and stay one size, which is how 6.4 meets the Texas rule.
- Why: at 360 and 375 the Services designation wrapped to three lines ("DR. PALOMA KRENEK," / "DDS" / "GENERAL DENTIST") where 6.4 asks for two (`.ops/qa/evidence.md` E4, which proposed scaling `--fs-d2` below 390).
