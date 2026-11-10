# 01b — Visual capture of live dental sites

Captured 2026-11-09 in a real browser (shared Chromium-based automation browser, own tab), viewport emulated at 1440x900 @1x for desktop and 390x844 @3x for mobile. 19 distinctive sites (US 9, Canada 3, UK 2, EU 4 incl. one pan-European chain, Australia 1; 7 of them aligner or cosmetic brands) plus 3 control sites. Every number below was read from the live page with `getComputedStyle` / DOM measurement at capture time; every description of what is on screen was written after opening the saved PNG. Colours are converted to hex. "vp" in palette notes = how many 1440x900 viewports of area that background colour paints across the whole page.

Where the sites came from: 1–2 are leads from the brief that held up; 3–12 came from my own search and gallery passes (the Awwwards dental nominee list, Land-book, direct checks); 13–19 are from the researcher's shortlist (`01-dental-inspiration.md`), which reached me after my first pass and was merged in a second one.

How to read the motion rows: "scroll reveals" were measured by recording every element below the fold that started at opacity < 0.2 or with a transform/clip, scrolling the page in 720px steps, and timing when each element finished changing. "Hover" was measured by really hovering the element and diffing computed styles before/after.

Screenshots: `research/shots/<slug>-NN-<what>.png`.

---

## Direct answers to the five things I was asked to confirm

1. **Swish.** Confirmed by measurement: #fff6e4 cream (9.7vp, effectively the whole page), #816ee7 violet, #e0d9ff and #d4caff lilac, #f1b742 marigold, plus #56499b deep violet and #626262 body grey. Fonts are Tobias 400 (h1 72 / 86.4px) and Maison Neue Extended 400/600/700. Buttons are 200px-radius pills.
2. **Impress.** #012ef4 cobalt and #f1272b red confirmed, with #262322 ink and #f5f5f5; type is Inter Display (self-hosted, 300–900). How the blocking is laid out: the page is white (10.5vp). Red is type and buttons, not ground, on desktop: a red 72px h1 on white, red pills, red icon strokes. Colour arrives as full-width blocks stacked down the page with 20px side margins: a 1400x596 photo strip shot on a red backdrop, a red rounded band (1288px wide, about 14px radius) holding one white pill, one cobalt block (1400x605, 0.9vp) with a red contour-line pattern and 92px white type, and a black 32px offer strip on top. There are no split screens and no pastel tints. On a phone the hero becomes a single red field with white type, the clearest case in the study of a screen built on a saturated ground.
3. **Dentologie.** Measured #f5f3f0 (page), #f9f8f6 (cards), #9ee5c8 mint band with a #b4ebdc panel, #f2c4b3 peach band, #2a2622 ink and buttons, #70665c body. The researcher's #F5F1EB appears only as a text colour on dark; #B4EBDC and #F2C4B3 are right. Fonts Playfair Display + Inter confirmed.
4. **Grand Street.** The lime is not on screen at rest. #CCFF33 is not among the page's measured background or text colours and is not visible in any of the four screenshots; a lime (#e1ff3b) is declared only for the primary button's hover state, with #762a8a purple text (read from the matching hover rule, not hovered by hand). The butter button #fcf29e is live (5 instances, square, no radius). The 60px uppercase condensed h1 is legacy CSS: the live h1 is "Dentistry Redesigned" in Superior Title 600, 70 / 77px, mixed case, black. The loud colour on screen is the hero image: salmon, orange and cobalt half-discs on bone.
5. **Motion at Aventura and LAVA.** Both are scroll films with a smooth-scroll layer (Lenis) and no GSAP.
   - *LAVA*: native CSS scroll-driven animation (`animation-timeline`, 50 named keyframes, 69 running animations, six sticky full-viewport stages). Hero halves slide in from left and right; gallery images drift against their frames; sections wipe over each other with a clip-path; titles blur as they pass under the header. Button hover is only `scale: 1.02`. Page is 36 screens.
   - *Aventura*: a loader holds the page for about 5 seconds (measured 5.3s at phone size). The loader shows the logo and three service lines on blue-black. Then the hero is a pinned stage 2,520px tall: the headline (Instrument Serif, 153px) sits across the light/video seam, dark where it is on grey and white italic where it is on video; as you scroll, that first line ("Premium Esthetic Dentistry") travels left (measured -320px to -640px) while a second 153px line, the real h1 "Your smile, effortlessly enhanced", travels in from the right (417px to 114px). Two layered lines are why the researcher's text extraction looked garbled. Lower down, images scale from 1.4 to about 1.12 as they cross the viewport, paragraphs rise 17px line by line about 110ms apart (finished 440–880ms after entering), a team title at 276px sits behind the partners' heads, lists dim every row but the active one, and the header slides away on scroll down and back on scroll up. Hover on "Book A Call" rolls the label up and replaces it with a duplicate (translateY(-105%)). Page is 20.5 screens.

**The hypothesis ("every young dental brand sells calm; nobody does upbeat, high-chroma colour blocking").** Mostly supported, with the "nobody" overstated. 14 of 19 are calm: cream-and-pastel self-care (Dentologie, Sage Space, Swish, Canary, Jacques + Cie, Zen, The Gleamery, Esteve, and Tend in a softer key) or dark luxury (Arbor, MINÉMAL, Rüh, LAVA, Aventura). Five are not: Impress does real two-colour blocking (red and cobalt); Smile White is navy and electric violet; Luca Aesthetic is hot pink (#fb0199) on white and black; Grand Street opens on colour-blocked paper shapes; Urban Dentist opens as a pink-and-black poster. What is actually unoccupied is narrower and more useful: no full-service neighbourhood practice keeps saturated colour going past the hero, and nobody but Impress uses more than one saturated hue. The upbeat sites are retailers or celebrity-cosmetic brands selling one product.

---

## Part 1 — Per-site capture

### 1. Tend — https://www.hellotend.com/ (US, multi-city studio chain)

Shots: `tend-01-hero.png`, `tend-02-difference.png`, `tend-03-testimonials.png`, `tend-04-team.png`

**On screen.** White ground. A full-width lime strip (40px) at the very top carries an auto-scrolling row of proof phrases ("Science-based care", "Outcomes, not quotas"). Under it the navigation is two floating pills: logo + 5 links in an off-white pill on the left, location search + blue BOOK NOW in a second pill on the right. Hero is a centred serif headline in sage green, two lines, flanked by two tall stadium-shaped portrait crops: a man in a cream hoodie winking with his tongue out on a flat periwinkle backdrop (left, bleeding up behind the nav), a woman laughing on a flat butter-yellow backdrop (right, set lower). The people are the colour; the page is white. Below the CTA pair a second serif line introduces a carousel of large mint-tint service chips. Further down: storefront video in a 25px-radius frame beside a checklist of pale pills with caramel check-dots; a row of very large sage testimonial cards (radius ~60px, white 30px text, lime stars); a team section where two circle-cropped clinician photos bleed off both edges behind four white feature cards. Footer is dark green. First thing the eye hits: the winking face, then the headline.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Nantes (serif) | 700 | 63 / 75px, centred, 2 lines, 667px wide | normal | none | #698680 |
| h2 | Nantes | 700 | 48 / 62px (also 38, 33, 26) | normal | none | #698680 |
| h3 | Founders Grotesk | 400 | 30 / 31.5px | normal | none | #698680 |
| hero lede | Founders Grotesk | 400 | 26 / 35px | 0.17px | none | #6c675c |
| body | Founders Grotesk | 400 | 22 / 31px (small copy 16–17px) | 0.17px | none | #6c675c |
| testimonial | Founders Grotesk | 400 | 30 / 43px | 0.17px | none | #ffffff on #698680 |
| nav link | Founders Grotesk | 500 | 16 / 29px | 0.17px | none | #6c675c |
| primary button | Founders Grotesk | 600 | 15 / 18.75px | 1.2px | uppercase | #ffffff on #0178d1 |

**Palette.** #ffffff page; #698680 sage (all headings, testimonial cards); #36514c deep green (footer, 2.7vp); #eaf4eb mint tint (service chips, soft section gradient); #f9f9f6 warm off-white (nav pill, checklist pills); #e7fb7e lime (top strip, stars); #0178d1 blue (only on CTAs; hover #0169b7); #bc8452 caramel (icons, text links, secondary button); #6c675c warm grey text. Text is never black.

**Radii / spacing.** Buttons 50px pill, 47px tall, padding 12px 30px, 2px transparent border. Service chips 30px. Portrait crops 206px on a 320x578 box (full stadium). Video 25px. Cards have no border and no shadow. Content width 1356px at x=42 (42px gutters); text columns 946 / 860px. Hero block 648px tall, so the next section's chips peek above the fold. Page is 7,231px (8 screens).

**Motion.** Almost none. No scroll reveals (0 elements start hidden). The only movement is two Splide carousels in auto-scroll mode (top strip and services, measured about 36px/s) and one testimonial slider. All CSS transitions are 0.2s ease-out. Hover on BOOK NOW: background #0178d1 -> #0169b7 and outline colour only, no movement. Hover on a service chip: #eaf4eb -> #bcd3bd. Nav pills stay fixed on scroll. Libraries: jQuery 3.6.3, Splide + auto-scroll extension; no GSAP, no Lenis. `document.getAnimations()` = 0. Site runs on a vendor CMS (meta generator "Tymbrel"), with an accessibility widget tab and HubSpot.

**Verbatim.** "Look forward to going to the dentist" / "Whether it's been 6 months or 6 years, we make it easy to get back to the dentist with no judgment, ever." / "Outcomes, not quotas" / CTA "BOOK NOW"

**Human tell.** The photography direction: a wink and a stuck-out tongue as the hero image of a dental chain, on flat candy backdrops, cropped into one repeated stadium shape. Nobody's stock library has that picture.

### 2. Dentologie — https://dentologie.com/ (US, Chicago + Seattle, 17 offices)

Shots: `dentologie-01-hero.png`, `dentologie-02-why.png`, `dentologie-03-services.png`, `dentologie-04-insurance.png`

**On screen.** Warm off-white ground. Sticky translucent header: heavy display-serif wordmark left, nav links inside a grey pill in the centre, a dark pill "Book Now" and an outlined "Sign in" right. Hero is a centred two-line Playfair headline with one italic word ("better"), grey Inter lede, dark pill + outlined phone pill, a row of yellow stars, then a 1232x693 interior photo with 32px corners (white-painted beams, black pendant lamps, a plywood drum and a terracotta arch). Next: a split with a tall photo (patient in sunglasses with tattoos, hygienist holding a clipboard titled "Dental Dad Jokes") and a headline whose second half is italic, with a 2x3 checklist of mint dots. Then three service cards, each a photo on a flat colour (mint glove, aligner held by a hennaed hand on mint, man in a yellow knit holding his jaw on coral) over a white text panel with a centred dark pill. A full-bleed mint band holds insurance logos in translucent tiles; a peach band comes later; footer charcoal. Eye lands on the italic "better", then the terracotta arch.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Playfair Display (Google) | 400, one word italic | 72 / 72px, centred, 896px wide | normal | none | #2a2622 |
| h2 | Playfair Display | 400, half italic | 48 / 48px (also 36) | normal | none | #2a2622 |
| h3 | Playfair Display | 400 | 24 / 32px | normal | none | #2a2622 |
| eyebrow | Inter | 600 | 16 / 24px | 3.2px | uppercase | #2a2622 |
| lede / body | Inter | 400 | 20px lede, 18px and 16 / 24px body | normal | none | #70665c |
| nav link | Inter | 500 | 14 / 20px | normal | none | #2a2622 |
| primary button | Inter | 500 | 14 / 20px (header), 16 / 24px (hero) | normal | none | #f5f3f0 on #2a2622 |

**Palette.** #f5f3f0 page; #f9f8f6 card; #e9e7e2 nav pill and hairlines; #2a2622 espresso (text and every button); #70665c warm grey body; #9ee5c8 mint band, #b4ebdc lighter mint panel; #f2c4b3 peach band; #2d2d2d footer. No brand colour on any button.

**Radii / spacing.** Buttons 9999px, 44–48px tall, padding 8px 24px / 0 32px. Secondary = transparent with 2px solid #2a2622. Cards 24px and 32px with a 1px-2px soft shadow that grows on hover. Hero image 32px. Container max 1400px; working column 1352px at x=44; headline column 896px. Header 81px, sticky, background at 80% opacity with blur(8px). Page 8,017px (8.9 screens). Sections padded 96px top and bottom.

**Motion.** On load the h1 runs a `fade-in-up` keyframe (0.6s ease-out, opacity 0->1, translateY 16px->0, measured mid-flight at 363ms) and the hero image goes from blur + scale 1.02 to sharp over 0.3s. Nothing is scroll-triggered: 0 elements start hidden below the fold. 15 infinite `shimmer` sweeps (1.5s) sit on image placeholders. Hover on Book Now: translateY(-2px), background to 90% alpha, shadow grows to 0 20px 25px -5px rgb(0 0 0 / .1), all 0.3s cubic-bezier(0.4, 0, 0.2, 1). Hover on a service card: shadow-sm -> shadow-xl over 0.5s. No motion libraries; keyframes are the stock Tailwind/shadcn set (accordion-up/down, sonner-*, shimmer). `getAnimations()` = 27. Images served from Sanity.

**Verbatim.** "A better dental experience, by design." / "Dentists on a mission: inspiring you to smile more" / "Book in under 60 seconds" / CTAs "Book Online", "Call to Book 312-846-6752"

**Human tell.** Only the photographs: sunglasses in the chair, a clipboard of dad jokes, a hennaed hand holding an aligner. The page shell around them (Playfair + Inter, rounded-3xl cards, shadow-xl on hover, default Tailwind easing) is the 2025–26 generated-site default and is the clearest warning in this set: good pictures inside a shell everyone has seen.

### 3. Sage Space — https://sagespace.au/ (Australia, Darlinghurst, Sydney; single studio)

Shots: `sagespace-01-hero.png`, `sagespace-02-statement.png`, `sagespace-03-rituals.png`, `sagespace-04-shop.png`, `sagespace-05-peach.png`

**On screen.** Pearl ground with a fixed 64px header ruled off by a 1.5px brown line: three outlined pill links left, a wide-set grotesk wordmark dead centre, a round phone button and outlined "Book a ritual" pill right. The hero is one photograph, 1400x765 with 26px corners and 20px page margins, not a face and not a chair: an ochre curtain, a reeded-glass arched door, rolled towels and amber glass on lit shelves. The h1 sits low-left on the photo in a light high-contrast serif, one line, with a peach pill and an outlined pill under it. Below, services are called "rituals": a three-up carousel divided by full-height 1px rules like a table, each cell a still-life photograph (soap balanced on a glass, a tortoiseshell toothbrush, stacked coloured glassware) with a condensed heavy headline (Anton) and a small outlined "Book Now". Then a peach panel with three centred statements; a "Shop Rituals" strip of cut-out homeware products; a brand-name marquee in Anton between two rules; a peach band of four outlined testimonial cards whose quotes are set in Anton at 30px; a dark brown newsletter panel with peach type. No tooth, no smile, no clinician anywhere on the home page. Eye lands on the curtain, then the serif line.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Albra (serif, licensed) | 300 | 50 / 45px, left, one line 1260px | -1px | none | #f3eee4 on photo |
| h2 | Anton (condensed display) | 400 | 60 / 62.4px | -1.2px | none | #463b29 |
| h3 / card titles / quotes | Anton | 400 | 40 / 41.6px (quotes 30px) | normal | none | #463b29 |
| statement | Allrounder Grotesk | 400 | 22 / 26.4px | -0.44px | uppercase | (see note) |
| body | Allrounder Grotesk | 400 | 18 / 21.6px | -0.36px | none | #463b29 |
| nav / buttons | Allrounder Grotesk | 500 | 18 / 18.18px | -0.54px | none | #463b29 |
| attribution | Allrounder Grotesk | 400 | 14px | normal | uppercase | #463b29 |

**Palette.** Three colours do everything: #f3eee4 pearl (page, cards), #463b29 smoked brown (all text, all rules, newsletter panel), #f7c59c "gum" peach (primary button, panels, 1.2vp). #4b1611 oxblood appears only on hover states. No white, no black, no blue, no green.

**Radii / spacing.** One radius, 26px, on buttons, images, cards and panels (18 of 34 large images; the rest are square inside ruled cells). Buttons are 37px tall with 7px 14px 10px padding and a 1.5px border; primary = peach fill with peach border, everything else = transparent with 1.5px #463b29. Cards 320x491, 1.5px brown border, no shadow, 42px/30px padding. Structure comes from 1px/1.5px rules rather than boxes. Page margin 20px (content 1400px at x=20). Text measure is short: 40 characters. Page 5,254px (5.8 screens).

**Motion.** Restrained and physical. A logo/brand marquee (CSS keyframes `slide`/`slide2`, 25s linear infinite, measured about 140px/s). The rituals row is a Flickity carousel that drifts on its own (about 195px/s). No scroll reveals, no parallax, header fixed and unchanged. Buttons have no transition at all: hover snaps. Primary hover: peach fill -> transparent with peach text. Nav pill hover: fills #463b29 with pearl text. The cursor is replaced site-wide by a 16px solid brown dot (inline SVG cursor). Libraries: jQuery 3.2.1, Flickity; custom WordPress theme ("sagespace"). `getAnimations()` = 2. One 22px uppercase statement paragraph was rendering pearl-on-pearl (invisible) at capture.

**Verbatim.** "The dental practice you didn't know you needed." / "Prevention, not intervention" / "This is self-care" / "Sign up for occasional interactions" / CTAs "Book a ritual", "Explore rituals"

**Human tell.** A naming system and an art direction that follow from each other: appointments are "rituals", so the pictures are still lifes of objects instead of mouths, and the testimonial is typeset as loud as a headline. Three colours, one radius, one rule weight, held without exception.

### 4. The Urban Dentist — https://theurbandentist.de/ (Germany, Berlin-Friedrichshain; three young founders)

Shots: `urbandentist-01-hero.png`, `urbandentist-02-praxis.png`, `urbandentist-03-team.png`, `urbandentist-04-meetus.png`

**On screen.** The hero is a full-bleed dusty pink field. The logo is three stacked white Futura-like caps top-left; address, hours and phone sit beside it as three icon rows; a square black-outlined "Termin buchen" button sits top-right. The whole left two-thirds is the navigation set as a poster: PRAXIS / BEHANDLUNGEN / NEWS / JOBS in 150px Raleway Bold caps stacked on a 100px line-height so the words nearly touch, each with a 23px pale hashtag above it (#madeinberlin, #thefirstdentistyouwilllove). The word under the pointer turns white; the rest are near-black, and BEHANDLUNGEN runs across the right-hand photo of pink curved sofas under ring lights, which is tinted with the same pink so type and photo sit on one plane. Lower sections alternate black bands, pale grey-green (#e6ebe6) and a sage block; each section title is a 177px word cropped by the section edge, repeated small as a rotated vertical label with a short rule. Team portraits are 184px circles on the brand pink, staggered up and down in a zigzag rather than a grid. The pink logo tile stays pinned top-left. Eye lands on BEHANDLUNGEN.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| hero nav words (h2) | Raleway Bold (self-hosted) | 700 | 150 / 100px | normal | uppercase (typed) | #1c1b1a, active #ffffff |
| section title | Raleway | 700 | 177px, cropped | normal | uppercase | #e6ebe6 on #040404 |
| h2 (content) | Raleway | 400–600 | 35px and 40px | normal | none | #000000 |
| h3 | Raleway | 600 | 24 / 24px | normal | none | #414141 |
| hashtag eyebrow | Raleway Bold | 700 | 23px | normal | lowercase | #f5ebe6 |
| body | Raleway | 400 | 16 / 26px (intro 22 / 32px) | normal | none | #7a7a7a |
| nav link | Raleway | 500–600 | 18–20 / 26px | normal | none | #1c1b1a |
| primary button | Raleway Medium | 500 | 18 / 26px | normal | none | #1c1b1a on transparent |

**Palette.** #ebc1bc dusty pink (hero, logo tile, portrait discs; 2.6vp); #000000 / #040404 black bands (3.9vp, the largest single colour); #e6ebe6 pale grey-green (2vp); #b4cdc3 sage block; #ffffff; text #1c1b1a and #7a7a7a. An off-brand link green (#61ce70, the page-builder default) leaks into body links.

**Radii / spacing.** Everything is square: buttons 0px radius with a 2px solid black border, 57px tall, padding 0 15px; photos 0px; the only curves are the 50% portrait discs. No shadows. Layout is a hard 50/50 split (720px columns) with text blocks 1064px at x=188. Page 11,994px (13.3 screens), much of it long SEO copy and accordions.

**Motion.** Effectively none: 0 scroll reveals, 0 running animations, no parallax. Hero words change colour to #ffffff on hover with a 0.5s transition. "Termin buchen" hover inverts to white via `filter: brightness(0) invert(1)` with a 0.15s ease-in-out colour transition. Owl Carousel and Swiper for galleries, jQuery 3.3.1. Built on WordPress + Elementor (331 Elementor nodes) with a custom theme; cookie dialog by Borlabs (accepted with its own "Ich akzeptiere alle" button).

**Verbatim.** "#thefirstdentistyouwilllove" / "#madeinberlin" / "#jointhefamily" / CTA "Termin buchen" / section labels "MEET US", "LET'S TALK"

**Human tell.** Using the menu as the hero: four enormous words instead of a headline, a photograph tinted to the brand colour so it becomes background, hashtags as eyebrows. A template never gives the navigation that much room. (The lower two-thirds, by contrast, is visibly page-builder: grey 16px paragraphs, accordions, a stray default-green link.)

### 5. Arbor: A Dental Concept — https://www.arbordentalnyc.com/ (US, Long Island City NYC; single practice; Awwwards nominee)

Shots: `arbor-01-hero.png`, `arbor-02-split.png`, `arbor-03-reviews.png`

**On screen.** The only dark site in the set: near-black ground (#080808) with a faint dark-leaf texture. A steel-blue address strip on top, a white hexagon-and-tree mark with a condensed-caps wordmark, and three CALL / MESSAGE / SCHEDULE buttons drawn as joined parallelograms with 2px grey outlines. The hero is an autoplaying, muted, looping video (1335x666) inside a 1px light frame: a clinician in black scrubs pointing at a wall screen while a patient in cowboy boots lies in the chair. The marketing headline is bottom-left over the video, four stacked lines; the real h1 is a 19px letterspaced caption top-right. Below, four 50/50 "split" panels (photo one side, charcoal text panel the other) stack over each other like cards as you scroll, each with a slanted blue tab button on its bottom edge. Photos are desaturated and warm-dark: a patient with headphones on, close crops of hands. Testimonials sit inside a ruled frame with a blue blob behind; pagination is three small squares. Eye lands on the moving video, then the white headline.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| hero headline (h2) | Proxima Nova (Adobe) | 700 | 67 / 67px, left, 4 lines | -1.34px | none | #ffffff |
| h1 (caption) | Proxima Nova | 400 | 19 / 19px | 3.8px | uppercase | #ffffff |
| h2 | Proxima Nova | 700 | 55 / 55px | -1.1px | none | #ffffff |
| h3 (quote lead) | Proxima Nova | 700 | 31 / 31px | normal | none | #ffffff |
| body | Proxima Nova | 400 | 25px (the most-used size) | normal | none | #cdcdcd |
| nav / buttons | Proxima Nova | 600 | 17 / 17px | 1.7px | uppercase | #cdcdcd / #ffffff |

**Palette.** #080808 and #000000 (20vp, i.e. essentially the whole page); #3c3c3c charcoal panels at 95%; #cdcdcd light grey for body text and 2px outlines; #ffffff headings; one accent, #3a8197 steel blue (button fills, address strip, blob). No warm colour except in photos.

**Radii / spacing.** 0px everywhere; shape language is the slant (parallelogram buttons via skew/clip) and 1px light frames around media. Buttons 57px tall, 2px solid #cdcdcd, transparent or #3a8197 fill. Content 1335px at x=52 (50px gutters); text panels 948px. Hero video frame 670px tall. Page 5,410px (6 screens).

**Motion.** The heaviest in the set. Libraries detected: GSAP 3.11.3, ScrollTrigger 3.12.5, SplitText and SplitType (1,258 split character/word/line nodes), Lenis smooth scroll (`lenis` class on html), Barba page transitions, one Lottie, Webflow interactions (12). On load the h1 fades 0 -> 1 while sliding in from 63px right, finishing around 1.5s with a long ease-out. On scroll: three pinned sections (`.pin-spacer`) so each split panel sticks while the next slides over it and the covered one scales down (measured 1 -> 0.77); images inside panels parallax about 60px; body paragraphs light up word by word from grey to white as they cross the viewport (scrubbed, visible mid-sentence in `arbor-02-split.png`). Header slides up 160px on scroll down and returns on scroll up. Button hover swaps fill to light grey and text to black. `getAnimations()` = 0 because everything is JS-driven.

**Verbatim.** "Biometrically Designed Dental Care" / "Their words, not ours." / "Never thought I'd be liking going to the dentist." / CTAs "CALL", "MESSAGE", "SCHEDULE"

**Human tell.** A committed shape idea (the slant) carried from nav to buttons to tabs, and footage of the actual room with an actual patient's boots in frame. It also shows the cost of this route: at 25px grey-on-black with scrubbed reveals, reading is slow and the tone is nightclub-serious, not high-energy.

### 6. LAVA dental studio — https://lavadental.lv/en (Latvia, Riga; single studio; Awwwards nominee)

Shots: `lava-01-hero.png`, `lava-02-process.png`, `lava-03-services.png`, `lava-04-team.png`, `lava-05-pricing.png`

**On screen.** A two-colour site: very dark forest green and a pale mint, nothing else. The hero is the dark green with a geometric-sans headline top-left (two lines, only 47px), a one-line promise low-left, and a mint pill button at the bottom. The right half is an aerial photograph of a mountainside with scree rivers and pine forest; a small 410x231 autoplaying clinic video with a mint play disc floats across the seam. There is no tooth in the first screen. The nav is a centred row of seven links sitting on one hairline, with the active link's hairline segment brighter. Scrolling turns into a film: full-viewport pinned scenes of the interior (a felt-wrapped sculpture on the reception desk, a business card with contour lines, a meeting room hung with the same mountain photograph). Later the ground flips to mint: services are numbered tiles (01 one wide, 02–04 portrait) whose photographs are tinted green so every image belongs to the palette, each with a 60px mint disc holding a diagonal arrow. Team portraits are plain rectangles on mint, hung in two columns at offset heights. The price list is typeset, not boxed: tab row on a hairline, then "Complex diagnostics — 'The Perfect Smile'" with "280€" at headline size on the same line and a dash-list of inclusions. The header blurs whatever scrolls under it. Eye lands on the mountain, then the mint button.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Josefin Sans (fallback Jost) | 500 | 47.4 / 49.7px, left, 2 lines, 398px wide | normal | none | #ddefde |
| h2 / big statements | Josefin Sans | 500 | 63.1 / 69.5px | normal | none | #031c14 or #ddefde |
| h3 / price rows | Josefin Sans | 500 | 35.5 / 49.8px, 47.4px for prices | normal | none | both |
| sub-heads, names | PP Neue Montreal | 500 | 26.7px | tight (rendered) | none | #031c14 |
| body | PP Neue Montreal | 400 | 20 / 28px, measure about 37 characters in columns | normal | none | #031c14 |
| eyebrow / role label | PP Neue Montreal | 500 | 12 / 18px | 0.6px | uppercase | #031c14 |
| nav link | PP Neue Montreal | 400 | 15 / 21px | normal | none | #ddefde |
| primary button | PP Neue Montreal | 500 | 15 / 21px | normal | none | #031c14 on #ddefde |

Type sizes are fluid (63.1 / 47.4 / 35.5 / 26.7 is a 1.333 scale).

**Palette.** #031c14 deep green (20.9vp) and #ddefde mint (16vp) split the page almost evenly; #ffffff appears for 1vp; a sand dot (about #d9c08f) marks the active price row; a muted #779e91 for tertiary text. No blue, no white ground, no black.

**Radii / spacing.** Buttons 40px radius, 63px tall, padding 20px 40px, 1px border in their own fill colour. Arrow discs are full circles (about 60px). Photos are square-cornered (47 of 48 large images at 0px); only the video card and one callout use 10px. No shadows, no card borders; separation is by hairlines and the two grounds. One content width: 1290px at x=75 (75px gutters); text column 740px. Hero exactly 900px (100vh). The page is 31,998px, 35.6 screens, because scroll distance drives the scenes.

**Motion.** Scroll-driven and built with native CSS rather than a tween library. Stylesheets contain `animation-timeline`, `scroll-timeline`, `view-transition` and `@starting-style`; 50 named keyframes (hero-bg-enter-left, foil-image-reveal, wheel-block-wheel-rotate, reveal-block-main-reveal, section-overlay, vertical-scroll-progress-bar-grow, team-member-move-image-move). `getAnimations()` = 69, all scroll-linked. Six sticky full-viewport stages. Lenis smooth scroll is the only JS motion library (Nuxt app, one canvas). On load: h1 stays at opacity 0 until about 1.4s, then fades in over about 0.4s with its inner line following about 0.25s later; hero background halves enter from left and right. On scroll: images in a gallery move at a different rate from their frames, sections wipe over each other with a clip-path polygon, section titles blur as they pass under the header (visible in `lava-03-services.png`). Easing set in the CSS: cubic-bezier(.33,0,.11,1), (.1,.75,.25,1), (1,0,.47,.93) and one overshoot (.2,2.5,.4,1); durations are long (1s, 2s, 3s). Button hover: `scale: 1.02` over 0.5s cubic-bezier(0.1, 0.75, 0.25, 1), nothing else.

**Verbatim.** "Dentistry that will make you smile" / "Safe, modern, painless and with a smile!" / "Price list — invest in your smile" / "There's a team behind every smile" / CTA "Make an appointment"

**Human tell.** A metaphor chosen and kept: the practice is called LAVA, so the hero is a mountain, the business card has contour lines, the reception desk is rough copper, and every photo is graded into the same green. The price is printed as large as a headline.

### 7. MINÉMAL Dental Aesthetics — https://minemal.dental/ (US, Miami; cosmetic practice; Awwwards nominee)

Shots: `minemal-01-hero.png`, `minemal-02-statement.png`, `minemal-03-services.png`

**On screen.** A fashion-label page. Charcoal ground with a visible film-grain texture over everything. Hero: a black-and-white studio double portrait of the two founders in black roll-necks, looking past each other, centred in a 684x552 frame, with the wordmark MINÉMAL set across the full 1400px width so the letters overlap the lower half of the photo and turn semi-transparent where they cross it. Nav is tiny 14px caps in a row at the top with "BOOK AN APPOINTMENT" far right, blended against whatever passes beneath. Screen two is a statement in 126px caps, four lines each indented differently so the block staggers down the page ("HIGH-END / DENTISTRY / ACCESSIBLE / TO ALL"), with three small black-and-white photos tucked around it: an instrument, a woman throwing a rock sign in an alley at night, a technician working under one lamp. Further down, words in ochre scale up beyond the viewport as you scroll until only parts of letters fit. No colour photography, no smile close-ups, no cards. Eye lands on the two faces, then the wordmark.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| display statement | PP Neue Montreal (served as "MinemalTypo") | 500 | 126 / 113px | -4px | uppercase | #f6f4ef |
| sub-display | PP Neue Montreal | 400–500 | 60px and 48px | tight | uppercase | #f6f4ef |
| h2 (section label) | PP Neue Montreal | 400 | 14 / 18px | normal | none | #f6f4ef |
| body | PP Neue Montreal | 400 | 14 / 18px (lede 24px) | normal | mixed | #f6f4ef |
| nav link | PP Neue Montreal | 400–500 | 14 / 18px | normal | uppercase | #f6f4ef |
| button | PP Neue Montreal | 500 | 35 / 45.5px | normal | uppercase | #f6f4ef on #242424 |

There is no h1 element; section h2s are 14px labels and the visual headlines are plain divs.

**Palette.** #242424 charcoal (12.1vp) and #2e2e2e; #f6f4ef bone for all text; #d9a42f ochre for the scaling words; a trace of #9a3e3e. Photography is fully desaturated.

**Radii / spacing.** Images 0px. Buttons are 1000px-radius outlines, 330x58px, a 0.83px bone border and 35px uppercase text inside, so the button reads as a headline with a line round it. Content runs nearly edge to edge: 1404px at x=13 and 1392px at x=24. Page 12,380px (13.8 screens).

**Motion.** Scroll-scrubbed, hand-placed. 18 elements change transform continuously with scroll: images scale from 1 down to 0.27, words scale up to 2.69x, three blocks slide 744px sideways, one drops 289px. Nine elements start at opacity 0 and fade in on entry (keyframes fadeInUp / fadeInLeft, easing cubic-bezier(0.19, 1, 0.22, 1) and (0.22, 0.65, 0.2, 1), durations 1s and 1.2s). Two elements use mix-blend-mode so the nav inverts over photos. Button hover: fill flips to #f6f4ef and text to #242424 over 0.2s ease-in-out. No motion library; this is the Tilda site builder's own step animation (jQuery 1.10.2). `getAnimations()` = 0.

**Verbatim.** "HIGH-END DENTISTRY ACCESSIBLE TO ALL" / "BOOK AN APPOINTMENT" / "OUR PROCESS"

**Human tell.** It is art-directed like a record sleeve: founders as a band portrait, a rock sign in an alley, grain, and type so large it is cropped. It proves a dental brand can drop every category cue. It also has almost no practical information above 3,000px, which a booking-led landing page cannot afford.

### 8. Clínica Dental Dr. M. Esteve — https://dentistapalamos.com/en/ (Spain, Palamós; single-dentist family practice; Awwwards nominee)

Shots: `esteve-01-hero.png`, `esteve-02-intro.png`, `esteve-03-treatments.png`

**On screen.** The hero is the town, not the clinic: a full-viewport dusk photograph over the rooftops of Palamós with an orange-to-violet sky, street lamps lit, the hills behind. Over it a two-line serif headline at 124px, the second line indented about 80px, with a small letterspaced eyebrow above and a cream pill "Book a visit · +34 620 897 373" beside a two-line promise. Header is transparent caps with a WhatsApp-icon outlined pill. Lights in the photograph twinkle. Screen two is cream: a portrait of the dentist in a double-framed card (20px radius, thin gold inner rule, name and registration number as a caption), a serif h2, two paragraphs, then three large numerals (1987 / 5.0 / 365) in a ruled row. A thin gold line with a glowing dot runs down the left margin for the whole page as a scroll marker. Treatments are a dark-green bento: one 767x692 card and smaller ones, each with a rendered object (an implant set into cracked black stone mended with gold, a tooth cross-section) instead of a photo. Eye lands on the sky, then "Palamós".

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Cormorant Garamond (self-hosted, variable 400–700) | 500 | 123.8 / 111.5px, left, 2 lines, 1300px wide | -5.57px | none | #ffffff |
| h2 | Cormorant Garamond | 500 | 56, 48 and 42px | tight | none | #17333a / #ffffff |
| h3 (card) | Cormorant Garamond | 500 | 40 / 44px and 26px | -0.4px | none | #ffffff |
| eyebrow | DM Sans | 500 | 12 / 19.8px | 1.68px | uppercase | #826339 |
| body | DM Sans | 400 | 16 / 26.4px (17px lede) | 0.08px | none | #536966, #304f48 |
| nav link | DM Sans | 400 | 13 / 21.45px | 0.78px | uppercase | #ffffff |
| primary button | DM Sans | 600 | 16 / 26.4px | 0.08px | none | #15332d on #fffaf0 |

**Palette.** #f6f2e8 cream page; #fffdf8 card; #eef1e4 pale green-grey; deep greens #173b44, #112c24, #102d2c for dark sections and footer; text #304f48 / #5b6f6c (never black); gold-brown #826339 eyebrows and a #c9a36b gold used as 1px inset rings. The sunset photo supplies the only orange.

**Radii / spacing.** Buttons 999px, 58px tall (hero) and 46px (header), padding 0 34px. Cards 20px with a 1px #e3dccb border and a soft 0 10px 30px shadow at 5% (light) or a 1px gold inset ring (dark). Portrait 28px. Content 1160px at x=140; hero text 1300px at x=70. Section padding about 130px top and bottom. Page 7,096px (7.9 screens).

**Motion.** Hand-written CSS, no libraries at all. 75 keyframes. The hero photo carries 73 infinite animations (ftLight, ftTwinkle, ftGlint) that make windows and street lamps flicker. Headings reveal line by line: each line is a span that rises 53–66px into place over 1s with cubic-bezier(0.2, 0.75, 0.2, 1), second line delayed 0.12s (33 of 36 pre-offset elements revealed on scroll). Illustrations go from opacity 0.62 and scale 1.04 to 1 over 1.3s. Stylesheet uses `animation-timeline` and `view-transition`. 76 elements use mix-blend-mode. Primary hover: background #fffaf0 -> #ffffff and translateY(-1px) over 0.25s. Header pill hover: translateY(-1px) plus a green glow shadow over 0.18s. Header does not follow the scroll.

**Verbatim.** "Your dentist in Palamós since 1987" / "A clinic with a name on the door" / "Keeping what is yours" / CTA "Book a visit · +34 620 897 373"

**Human tell.** It is about one specific street: the hero is the town at dusk, a section is about the brass plaque by the door, and the phone number is written into the button. The mending-with-gold idea ("keeping what is yours") runs from the copy into the cracked-stone renders and the gold line down the margin. Caution for us: Cormorant + DM Sans on a dark-green bento with rendered objects is also the current "premium" preset, and the renders read as generated.

### 9. Impress — https://smile2impress.com/uk (Spain-based aligner / orthodontic chain, 110+ clinics across Europe; UK page captured)

Shots: `impress-01-hero.png`, `impress-02-goal-statement.png`, `impress-03-team.png`

**On screen.** White ground, red type. A black 32px strip at the top scrolls offer chips ("BLACK FRIDAY: -£1000 TOTAL DISCOUNT" in red lozenges, "LIMITED SLOTS" in white caps). The logo is a thin, wide-tracked wordmark in blue with one red letter. Nav sits in a pale grey rounded bar on the right with the first item as a black pill. The h1 is two lines of tight, heavy grotesk in signal red, left-aligned, with a plain 26px sub-line beneath and the red pill CTA pushed to the far right of the same row, so the top third is type on white with nothing else. Then a 1400x596 image strip (8px corners): an extreme close-up of a red-haired woman with electric-blue eyeshadow on a saturated red backdrop, mouth wide, placing an aligner. Lower: "Tell us your goal" beside a 2x2 of red line icons with caps labels; a red rounded band with a white pill "Find my fit!"; a full-bleed cobalt block with a red contour-line pattern and "Pioneers in digital orthodontics" at 92px black-weight; ruled accordion rows with circled plus icons; full-width red pill buttons. Eye lands on the red headline, then the blue eyeshadow.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Inter Display (self-hosted) | 700 | 72 / 75.6px, left, 2 lines, 800px wide | -2.88px | none | #f1272b |
| statement h2 | Inter Display | 900 | 92 / 96.6px | -2.76px | none | #ffffff on #012ef4 |
| h2 | Inter Display | 700 (renders lighter in places) | 52 / 54.6px | -2.08px | none | #262322 |
| h3 / row labels | Inter Display | 500 | 26 / 28.6px | 0.52px | uppercase | #262322 |
| lede | Inter Display | 400 | 26px | tight | none | #262322 |
| body | Inter | 400 | 20px (most headlines' support), 14 / 16.8px small | normal | none | #262322 |
| primary button | Inter | 400 | 20 / 24px | normal (rendered wide) | none | #ffffff on #f1272b |
| nav pill | Inter Display | 700 | 14 / 15.4px | -0.42px | none | #ffffff on #262322 |

**Palette.** #ffffff (10.5vp); #f1272b signal red (h1, every CTA, icon strokes; 15 of 18 buttons); #012ef4 cobalt (one statement band, logo, links); #262322 warm near-black (text, top strip, active nav); #f5f5f5 (nav bar, panels). Photography is graded to the same red and blue.

**Radii / spacing.** Buttons 50px radius, 42px tall, padding 9px 20px, often stretched to full container width (1288px). Image strips 8px. Panels 14px. No shadows, no borders except 1px accordion rules. Two widths: 1400px at x=20 for images and colour bands, 1288px at x=76 for text. Hero block 865px. Page 9,000px (10 screens).

**Motion.** Very little. One infinite keyframe animation (the offer ticker). 0 scroll reveals, 0 scroll-linked transforms. Transitions 0.2s with cubic-bezier(0, 0, 0.2, 1). Primary hover: background shifts to a lighter "bitterSweet" red, nothing moves. Built with Next.js and Chakra UI (266 style sheets); Mapbox for the clinic finder; Trustpilot widgets; WhatsApp bubble. At 1440 the floating nav bar overlaps section headings as they scroll under it (visible in `impress-03-team.png`).

**Verbatim.** "Europe's N°1 Invisalign® provider*" / "Tell us your goal" / "ALIGN MY TEETH" / "BOOST MY CONFIDENCE" / "In just 30 seconds, you'll know if Invisalign® clear aligners are right for you" / CTAs "Fancy a free appointment", "Find my fit!", "Book a smile assessment"

**Human tell.** Colour discipline plus a casting decision: two primaries, no pastels, and a model styled to match them (blue eyeshadow against red). The copy talks like a person ("Fancy a free appointment") and the offers are stated as numbers.

### 10. Jacques + Cie — https://jacques-cie.com/ (Canada, Québec City; rebranded general + implant clinic)

Shots: `jacquescie-01-hero.png`, `jacquescie-02-approach.png`, `jacquescie-03-services.png`, `jacquescie-04-footer.png`, `jacquescie-05-hover.png`

**On screen.** The hero is one photograph filling the whole viewport: a young woman with a blonde bob, a nose ring and chunky silver hoops, in a white T-shirt on a pale lilac studio backdrop, looking straight at the lens and smiling; a second person's laughing mouth and stubble sit out of focus in the right foreground, cropped off the edge, so it reads as a candid between two people. Type is white and all one weight: a three-line wordmark top-centre ("Jacques + Cie / Centre dentaire / + Implantologie"), three small "+ de soins / + de précisions / + de sourires" tags spaced across the middle of the face, and a three-line h1 bottom-left at 104px on a 0.9 line-height. Navigation is reduced to two white rounded squares top-right ("Menu" and a calendar icon). There is no button in the hero at all. Next screen: cream ground, a 52px statement set in the same light grotesk beside a full-height photo of the reception desk with a motion-blurred figure walking past. Services are a ruled list, not cards: each row has a 211x343 tight-cropped laughing face at the left and the service name at 104px beside it, with a small white pill at the far right. Footer is a flat periwinkle field with a lifestyle photo (patient in jeans reading a magazine on a black sofa). The "+" from the name recurs as the bullet for every label. Eye lands on her eyes, then "Soins dentaires pour tous".

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Aeonik (one file: Regular) | 400 | 104 / 93.6px, left, 3 lines, 641px wide | normal | none | #ffffff on photo |
| service names (h2) | Aeonik | 400 | 104px | normal | none | #333347 |
| statement h2 / h3 | Aeonik | 400 | 52 / 52px | normal | none | #333347 |
| sub-head | Aeonik | 400 | 26px | normal | none | #333347 |
| body / nav | Aeonik | 400 | 18 / 21.6px, measure about 49 characters | normal | none | #333347 |
| button / small | Aeonik | 400 | 14 / 16.8px | normal | none | #333347 |

The whole site is one typeface in one weight at five sizes: 104 / 52 / 26 / 18 / 14 (each roughly half the last).

**Palette.** #f7f3eb warm cream page; #333347 ink with a violet cast (all text; also 1.4vp of dark panels); #84b0e8 periwinkle (footer field, filled buttons, 1.2vp); #526f9c slate-blue for secondary text on blue; #ffffff for pills and the hover row; hairlines #dbd8d3. The hero backdrop is lilac. No green, no teal, no black.

**Radii / spacing.** Photos are square-cornered (12 of 12 large images at 0px), mostly tall 0.6 portrait crops. Buttons are 20px-radius rounded rectangles, 50px tall, padding 14px 20px: white, periwinkle, or 1px-outlined on blue. Boxes are 720px squares divided by 1px #dbd8d3 lines; no shadows. One content width: 1360px at x=40 (40px gutters). Hero is the full 900px with the h1 anchored 58px above the bottom edge. Page 7,247px (8.1 screens).

**Motion.** Slow, uniform, one curve. The stylesheet uses a single easing, cubic-bezier(0.66, 0, 0.34, 1), 284 times, with 1.3s as the dominant duration (250 declarations) and 0.3s for buttons. On load a full-screen loader holds until about 0.9s and fades out by about 1.3s; the hero photo then fades from opacity 0 to 1 between 1.5s and 2.6s while the h1 is already in place. On scroll: images fade in over 0.6s on entry (11 measured), two images sit in parallax wrappers that travel about 110px against the scroll, Lenis smooths the wheel. No pinning, no marquee, no split-text choreography. Hover on a service row (measured and shot): the whole row's background goes from cream to white edge to edge and its pill inverts to #333347 with white text; nothing moves. 86 scoped keyframes (fadeIn-*, slide-up-*), `getAnimations()` = 17. Booking opens an external scheduler in a new tab.

**Verbatim.** "Soins dentaires pour tous" / "+ de soins" / "+ de précisions" / "+ de sourires" / "Une approche personnalisée où la précision technique rencontre le bien-être et la santé dentaire de chaque patient" / CTAs "Prendre rendez-vous", "En savoir plus"

**Human tell.** Restraint that only a designer with a point of view allows: one font file, no bold anywhere, no hero button, square photos, and a casting brief (piercings, real laugh lines, T-shirts) that tells a 25-year-old this place is for them without a single word about it. The "+" of the name is the whole graphic system.

### 11. Rüh Dental — https://ruhdental.com/ (UK, London incl. Harrods + Manchester; cosmetic group with a large social following)

Shots: `ruh-01-hero.png`, `ruh-02-realsmiles.png`, `ruh-03-services.png`

**On screen.** Beauty-campaign styling. The hero is a full-viewport warm-brown photograph: a woman with dark curls, eyes closed, laughing, lit by a rectangle of low window light on a plaster wall. The headline sits over her shoulders in a tight, high-contrast display serif, white, with the word "Begins" in gold italic script overlapping the first line (the headline lock-up is a 662x290 PNG image; the real h1 is a 1px visually-hidden element). Under it a white lede, a bone pill "Book a free consultation" and an outlined "WhatsApp us", then a rating line. A 42px bronze offer bar tops the page; the header is only a script logo, a phone disc and a menu disc. Bottom-right, a chat launcher with a staff avatar fans out five white quick-action chips over the content. Screen two is near-black: "Real smiles, real patients." at 72px, filter pills, and a 650px before/after of teeth close-up with thumbnails and a "+129 MORE" tile. Then a bone section, "Align. Enhance. Replace.", three square photos with numbered caps labels and, under each, ruled rows with the price at the right ("Invisalign … from £2,199"). Eye lands on the lit face, then the gold word.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| hero headline | Eksell Display (as image) | — | two lines in a 662x290 image, roughly 90px type | tight | title case | #ffffff + gold italic |
| h2 | Eksell (self-hosted) | 400 | 72 / 72px (closing h2 80.6px) | -1.44px | none | #f4ede4 or #0c0b09 |
| h3 | Eksell | 400 | 51.8 / 51.8px; minor h3 30px and 20px | -1.04px | none | #0c0b09 |
| eyebrow | system sans (SF / Public Sans) | 400 | 11 / 26px | 2.42px | uppercase | #5e574f or bronze |
| body | system sans stack (-apple-system, Public Sans fallback) | 400 | 16 / 24.8px; 17px and 13px also common | normal | none | #5e574f on bone, #a79f95 on dark |
| primary button | system sans | 500 | 16 / 19.2px | normal | none | #0c0b09 on #f4ede4 |

**Palette.** #16130f warm black (43.1vp, by far the largest area) and #0c0b09; #f4ede4 bone (sections, buttons, headings on dark); #ffffff (18.1vp); #543f31 brown (chat launcher); text greys #a79f95 / #5e574f; a bronze-to-gold gradient (#b06a2c -> #f5c892 -> #a35f27) on one accent. No cool colour at all.

**Radii / spacing.** Buttons and filter chips 999px, 52px tall, padding 0 28px; secondary = 1px outline. Photos square-cornered and square-cropped (135 of 139 large images are 1:1). Lists are 1px rules at 20% opacity, no cards, no shadows. Content 1300px at x=70 (70px gutters). Section padding 112px top and bottom. Page 8,133px (9 screens).

**Motion.** Light. A logo/press marquee (`ruh2mq`, 40s linear, about 50px/s) and a looping gradient on one button. 0 scroll reveals measured. Primary hover: opacity 1 -> 0.85 over 0.2s. Chat launcher hover: scale 1.02 over 0.35s cubic-bezier(0.68, 1, 0.27, 1). Built on WordPress with the Salient theme and WPBakery (1.36MB of CSS, 89 keyframes mostly unused theme stock), anime.js, jQuery 3.7.1; accessibility widget bottom-left.

**Verbatim.** "Confidence Begins With A Smile" / "Real smiles, real patients." / "Align. Enhance. Replace." / "Some smiles need one step, some need all three." / "Find your Rüh." / CTAs "Book a free consultation", "WhatsApp us"

**Human tell.** A three-word service architecture (Align / Enhance / Replace) with prices printed in the rows, and one lighting idea (low sun through a window) across the campaign imagery. The chat chips covering the lower-right of every screen are the opposite: bolt-on.

### 12. Smile White — https://www.smilewhite.co.uk/ (UK; aligner, ceramic-brace and whitening brand delivered through partner dentists)

Shots: `smilewhite-01-hero.png`, `smilewhite-02-steps.png`, `smilewhite-03-results.png`

**On screen.** A retail page, built like a product launch. White top band: bold navy wordmark, four plain nav links, a basket icon and a navy pill "Free E-Consultation". The headline is two lines of heavy, tightly tracked grotesk at 56px, first line navy, second line electric violet ("Smile care / that aligns with you"). Directly under it, still above the fold, four lavender-tint tiles (298x126, 20px corners) each naming a product with a rendered object (an aligner, a brace model, a whitening syringe, a map pin) and a price ("from £995", "from £2,795", "£795"). Below the tiles a near-black panel with 23px top corners rises: a Trustpilot line, a three-line offer headline, a pill button, and on the right a tight portrait of a smiling person with a wireless earbud, lit from behind with violet rim light. Inside the same dark panel, three translucent "Step 01/02/03" cards with cut-out people. Then press logos tinted lavender, and "Real smiles. Real-life stories.": 385x765 portrait video cards with an @handle chip in the corner, filmed on phones (in a car, at an X-ray machine). Eye lands on the violet line, then the prices.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| headline (an h2; page has no h1) | Aeonik (self-hosted) | 700 | 56 / 53.76px, left, 2 lines | -2% | none | #221e63 + #7759fe |
| section h2 | Aeonik | 700 | 46px and 37px | -2 to -3% | none | #221e63 / #ffffff |
| card title (h3) | Aeonik | 700 | 18 / 18.72px, 22px on step cards | -3% | none | #221e63 with second line in #198bf5 / #7759fe |
| body | Aeonik | 400–700 | 16 / 17.6px; 13px captions | -0.48px | none | #221e63 |
| nav link | Aeonik | 400 | 16 / 18.24px | -0.16px | none | #1a1a4b |
| primary button | Aeonik | 700 | 16 / 16.32px | -0.48px | none | #ffffff on #1a1a4b / #221e63 |

**Palette.** #ffffff (5.7vp); #221e63 and #1a1a4b deep navy-violet (all text and buttons); #7759fe electric violet (emphasis line, accents); #198bf5 blue (one product accent); #f3f2f9 lavender tint (tiles), #d9d9e3 (video card placeholders); a near-black panel for the hero (#000000 behind a violet-lit photograph). No green, no warm neutral.

**Radii / spacing.** Buttons 100px radius, 39px (header) and 46px tall, padding 10px 40px. Tiles, review cards, video cards and images 20px (27 of 31 large images); dark panel 23px. No shadows, no borders; depth comes from the tint steps. Content max 1300px at x=70; headline block at x=94. Page 6,004px (6.7 screens).

**Motion.** Carousels rather than reveals: a results marquee (CSS keyframes, 24s linear infinite), a review track drifting at about 103px/s, Swiper 11 for video cards; 13 scroll-snap containers. 0 fade-in reveals measured. Button hover: background #1a1a4b -> #43407a over 0.2s. Stylesheet includes `animation-timeline`, `view-transition` and `@starting-style` from the storefront theme. Built on Shopify (it has a basket); Trustpilot, TikTok and Meta pixels; Cookiebot dialog (accepted with "Allow all").

**Verbatim.** "Smile care that aligns with you" / "Clear Aligners from £995" / "Chat to our smile advisors" / "Real smiles. Real-life stories." / "Ready to make your move?" / CTAs "Free E-Consultation", "Book Free E-Consultation"

**Human tell.** It treats dentistry as a shop: price on the first screen, product renders instead of clinical photos, and proof delivered as customers' own vertical phone videos with their handles on. The two-tone headline device (navy line, violet line) is repeated on every section and every tile.

### 13. Swish Oral Care — https://www.swishoralcare.ca/ (Canada, Calgary; three neighbourhood studios)

Shots: `swish-01-hero.png`, `swish-02-why.png`, `swish-03-services.png`, `swish-m-hero.png`

**On screen.** A cream page where nearly everything else is violet. Sticky 97px header: a fat brush-script wordmark in violet, five violet nav links in a wide grotesk, a violet pill "BOOK NOW". Hero is a 50/50 split with a lot of air: on the left a two-line serif headline in violet (72px, set loose), two short grey paragraphs and a violet pill; on the right a 505x673 portrait video with 50px corners (a Vimeo embed; on one load it showed a woman climbing an outdoor black steel stair past the studio's sign, on another the building's timber-slatted exterior). No face, no chair, no interior in the first screen. Section two is three tall lilac cards with 50px corners, each with a cream disc holding a marigold squiggle icon, a centred wide-grotesk title and centred violet text. Services are a two-column ruled list: a 1px violet rule, the service name in the serif at 40px, one or two sentences, a small marigold pill "Learn More". Footer is a lilac field. Eye lands on the violet headline, then the stair.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Tobias (licensed serif) | 400 | 72 / 86.4px, left, 2 lines, 590px wide | 0.72px | none | #816ee7 |
| h2 | Maison Neue Extended | 600 | 40 / 48px (closing h2 in Tobias 72px) | -0.8px | none | #816ee7 |
| service names (h3) | Tobias | 400 | 40px | normal | none | #816ee7 |
| card titles (h3) | Maison Neue Extended | 600 | 32 / 38.4px | normal | none | #56499b |
| body | Maison Neue Extended | 400 | 18 / 28.8px, measure about 66 characters | normal | none | #626262 |
| nav link | Maison Neue Extended | 600 | 18 / 28.8px | normal | none | #816ee7 |
| primary button | Maison Neue Extended | 600 | 18 / 23.4px | normal | uppercase | #ffffff on #816ee7 |

**Palette (the researcher's hexes confirmed live).** #fff6e4 cream (9.7vp, effectively the whole page); #816ee7 violet (headlines, nav, primary button, rules); #e0d9ff and #d4caff lilac (cards, footer); #f1b742 marigold (11 of 15 buttons, icons); #56499b deep violet (text on lilac); #626262 grey body. No white ground, no blue, no green.

**Radii / spacing.** Buttons 200px radius: primary 49px tall with 12px 28px padding and a 1px border in its own colour; secondary marigold 37px tall with 8px 12px. Cards 50px; images 25px (hero frame 50px). No shadows. Services blocks are borderless with a 1px #816ee7 top rule. One content width: 1267px at x=86. Every section is padded 80px top and bottom. Page 6,263px (7 screens).

**Motion.** Almost none. 0 scroll reveals, 0 running animations. Five small Lottie icons, one Webflow interaction, Swiper 11 for a team slider. Transitions: `background-color 0.4s` on buttons with cubic-bezier(0.165, 0.84, 0.44, 1) used elsewhere. Primary hover: fill and border go to a darker purple, nothing moves. Header sticks, unchanged. Webflow; booking through an embedded scheduler iframe.

**Verbatim.** "Where oral care meets self-care." / "Why Switch to Swish?" / "Raising future dental enthusiasts, one visit at a time." / "Say ahhhh..." / CTA "BOOK NOW"

**Human tell.** A wordmark with real personality (a brush script nobody would pick from a menu) and a colour decision held all the way down: the text is violet, not black. The hero picture is the walk up to the door.

### 14. Grand Street Dental — https://www.grandstreetdental.com/ (US, Williamsburg, Brooklyn; single practice)

Shots: `grandstreet-01-hero.png`, `grandstreet-02-press.png`, `grandstreet-03-stories.png`, `grandstreet-m-hero.png`

**On screen.** The hero has no photograph and no person. It is a full-viewport field of large flat semicircles and quarter-turned half-discs (each about 310px across) in salmon pink, burnt orange, cobalt blue and white, scattered on a bone ground at different rotations, like paper cut-outs. The h1, "Dentistry / Redesigned", is two lines of a heavy text serif in pure black, placed right of centre over the shapes. The logo is three stacked lines of very condensed thin caps in a white square, top-left; nav is five small caps links and one square slate-blue "BOOK ONLINE" block. On scroll the header collapses to a white bar with the wordmark on one line. Next: a centred 34px light-weight statement and a 4x2 grid of press logos in their own colours (New York, Forbes, Wired, Esquire, Madewell) each with a short pull-quote ("Classy-as-Hell"), then a butter-yellow rectangular button. "Patient Stories" is a row of four phone screenshots of patients' own Instagram stories taken in the chair, captions and all. Full-bleed 1440x770 photo slideshows of the room separate sections. Eye lands on the cobalt half-disc, then the black headline.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Superior Title (licensed serif) | 600 | 70 / 77px, left, 2 lines | normal | none | #000000 |
| h2 | Gotham | 300 | 34 / 48px (also 33, 32, 24px) | normal | none | #030303 |
| section title (serif h2) | Superior Title | 600 | 32px | normal | none | #3b667c |
| body / quotes | Gotham | 300 | 14 / 24px, measure about 37 characters in the quote grid | normal | none | #2e2e2e |
| nav link | Gotham Medium | 500 | 14 / 20px | normal | uppercase | #000000 |
| primary button | Gotham Medium | 500 | 12 / 17px | 1px | uppercase | #ffffff on #266880 |
| secondary button | Gotham | 600 | 14 / 16px | 0.5px | uppercase | #2e2e2e on #fcf29e |

**Palette.** Page #ffffff with a bone hero; shape colours (sampled from the hero image, not CSS): salmon about #dfaea4, orange about #dd853a, cobalt about #2f5298, white. Interface colours: #266880 slate-teal (primary button), #fcf29e butter (secondary button, 5 instances), #3b667c slate (serif headings), #3b3b3b footer, text #2e2e2e. Answer to the researcher's question: the lime in the stylesheet is not on the page at rest; it survives only as the primary button's hover state (background #e1ff3b with #762a8a purple text). The 60px uppercase lime h1 is legacy CSS; the live h1 is 70px serif, black, mixed case.

**Radii / spacing.** 0px everywhere: square buttons (49px tall, padding 15px 35px; secondary 42px), square photos, square form fields. The only curves are the semicircles. Content 1140px at x=150 (Bootstrap container). Hero exactly 900px. Page 8,226px (9.1 screens).

**Motion.** None of note: 0 scroll reveals, 0 running animations; Slick and Swiper slideshows; transitions 0.3–0.6s. The one surprise is the hover: BOOK ONLINE flips from slate to lime with purple text. Custom WordPress theme on Bootstrap, jQuery 1.12.4, Zocdoc booking.

**Verbatim.** "Dentistry Redesigned" / "Classy-as-Hell" (Wired) / "We're All Smiles" / "Patient Stories" / CTAs "BOOK ONLINE", "VIEW PRESS & REVIEWS"

**Human tell.** An abstract hero that still says "teeth" (every shape is a half-moon) without drawing one, and proof that is unmistakably real: other brands' logos in their own colours and patients' own story screenshots, uncropped.

### 15. The Gleamery — https://thegleamery.com/ (US, Los Angeles; cleaning, whitening and aligner studios)

Shots: `gleamery-01-hero.png`, `gleamery-02-services.png`, `gleamery-03-pricing.png`, `gleamery-04-comparison.png`, `gleamery-m-hero.png`

**On screen.** Skincare-brand styling. A mint strip with four-point sparkle glyphs scrolls offers; the header has a chunky high-contrast serif wordmark with a tiny stacked "THE", the phone numbers written out in a sentence ("Call … or text …"), wide-tracked caps nav and a charcoal pill "BOOK NOW". The hero is a 1440x624 slider: warm taupe studio photograph of a freckled woman laughing with her eyes shut, holding an aligner; over it a mint caps offer line, a two-sentence headline in a very light grotesk at 70px, three lines of white body copy, a white pill with brick-red caps text, and a Google rating line bottom-right. Below: an olive-green row of service cards (275x401, 12px radius, 1px black border), each a caps title, a 233x159 photo, two centred lines and a white pill; these photos are art-directed (a man in sunglasses in the chair, a hand mirror). Pricing is a tab row of caps labels over one large card: a rounded portrait photo beside a white-over-olive panel with the product name, "$0" top-right, three ticked lines and a full-width white pill. A brick-red band follows. Further down a three-column comparison ("The Gleamery" in a mint-tinted column against "TRADITIONAL DENTISTRY", eight caps row labels such as PRICING TRANSPARENCY and COMFORT OPTIONS) does the persuading in a table. The hero is a two-slide carousel; the second slide reads "The most powerful cleaning & whitening". A newsletter modal covered the page after the first scroll and a "Thinking About Aligners?" chip stays bottom-left. Eye lands on the laughing face, then the mint offer line.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| hero headline (an h2; page has no h1) | Bagoss (licensed grotesk) | 200 | 70 / 67px, left | normal | none | #ffffff |
| h2 | Bagoss | 200 | 50 / 55px and 60px | normal | none | #000000 |
| labels, card titles, buttons | Styrene B | 500 | 14–20px | 1.2–1.5px | uppercase | varies |
| body | Inter | 300–400 | 14, 16, 18 and 20px all in heavy use | normal | none | #000000 |
| primary button | Styrene B | 500 | 14 / 18.2px | 1.2px | uppercase | #ffffff on #242424 |

**Palette.** #faf7f5 and #f3efe9 warm off-whites; #963f36 brick red (4.3vp: bands, footer, text accents); #6e8568 olive (cards, panels); #dbf6e9 mint (offer strip, tints); #242424 charcoal buttons; #000000 text.

**Radii / spacing.** Buttons 30–40px radius, 34–44px tall, padding 8px 24px / 14px 36px. Cards 12px with a 1px #000000 border and a faint 0 4px 4px shadow; other radii on the same page: 4, 10, 15, 25, 43px. Content 1152px at x=144 and 1392px at x=24. Hero 624px. Page 12,445px (13.8 screens), 40 headings.

**Motion.** Sliders: 10 Swiper instances and a Slick carousel, a CSS marquee for the offer strip, one autoplaying product clip. Lottie and ScrollMagic are loaded. Scroll reveal measurement was not run on this site. Button hover: opacity 1 -> 0.85 over 0.3s ease-in-out. Shopify storefront theme; Klaviyo modal, Calendly, TikTok and Meta pixels.

**Verbatim.** "Overnight Aligners. Extraordinary Results." / "Experience Dental Care Done Differently" / "97% of Guests See Instant Results" / "We Redesigned the Dental Studio Blueprint" / "Thinking About Aligners?" / CTAs "BOOK NOW", "BOOK YOUR FREE CONSULT", "NEW GUESTS SAVE $75"

**Human tell.** Patients are "guests", services are named products with prices, and the art direction borrows from beauty counters (sparkles, a compact mirror, sunglasses in the chair). The cost is visible too: six radii, four text sizes competing for "body", and a modal over the page before the second screen.

### 16. Canary Dental — https://canarydental.ca/ (Canada, Toronto; founder-led single practice)

Shots: `canary-01-hero.png`, `canary-02-services.png`, `canary-03-switch.png`

**On screen.** Cream ground, black type, two pastel buttons. Fixed 99px header: a line-drawn bird-and-tooth mark with a rounded lowercase wordmark, three links, the phone number as a link, and a pale blue-grey pill with a 1px black outline, "Book & Smile". Hero is a split: left, a looping clip of the reception desk cropped into a half-round arch with a pink halftone dot texture spilling out behind its right and bottom edges; right, a monospace caps eyebrow that is the real h1, a two-line soft serif headline, five black stars with an underlined review count, the outlined pill again and an underlined phone link. Lower sections are the same split: a full-height photo (a hygienist at a desk, motion-blurred) with a dotted pink vertical rule beside it, a serif service name ("The Daily Essentials"), a paragraph, a pink outlined pill and an underlined text link. Screen two is the founder's quote set as a 50px serif paragraph ("I started Canary Dental to make going to the dentist feel good. Not fine. Not tolerable. Actually good."). A dusty-pink ticker band repeats "Made You Smile • Made You Smile" between sections. An accessibility widget sits bottom-left. Eye lands on the arch, then the serif line.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| visual headline (h2) | Plush (licensed soft serif) | 500 | 60 / 60px, left, 2 lines | normal | none | #000000 |
| h1 (eyebrow) | JetBrains Mono | 300 | 20 / 20px | normal | uppercase | #000000 |
| h2 | Plush | 500 | 64 / 64px | normal | none | #000000 |
| h3 | Plush | 500 | 48 / 48px (FAQ 32px) | normal | none | #000000 |
| body | Arimo (Helvetica-metric) | 500 | 18 / 27.2px; 20px and 24px also heavy | normal | none | #000000 |
| nav link | Arimo | 600 | 16px | normal | none | #000000 |
| primary button | Arimo | 600 | 18px | normal | none | #000000 on #d5e1e6 |

**Palette.** #fffcf6 cream (31.7vp, almost the entire page) and #f6efe3 for the hero band; #000000 for all text and outlines; #d5e1e6 pale blue-grey (primary button, 6 instances); #eab2b3 dusty pink (secondary button, dot texture); #d8dfe6 one cool band.

**Radii / spacing.** Buttons 32px radius, 49–57px tall, padding 12px 40px, always with a 1px solid black border over a pastel fill. Photos square except a 15px radius on the inner corners of split images; the arch is a mask. No shadows. Content 1296px at x=72; text column about 612px. Sections padded about 58px, some 135px. The page is 15,349px (17.1 screens), the longest conventional page in the set.

**Motion.** Looping hero clip; Swiper for reviews; the page-builder's entrance keyframes are present (188 keyframes, mostly unused). Scroll reveal measurement was not run. Button hover: fill fades to 70% alpha or inverts to black with white text, 0.2–0.4s ease-in-out. WordPress with the Divi theme (545 Divi nodes), jQuery 3.7.1.

**Verbatim.** "TORONTO DENTIST WORTH SMILING ABOUT" / "Dentistry designed to rejuvenate." / "The Daily Essentials" / "Hey, should I be worried about this?" / "Catch Us Grinning" / "Made You Smile" / "Let's be friends!" / CTAs "Book & Smile", "Book a Cleaning"

**Researcher's two QA questions.** The service block does not render twice: a second copy of "The Smile Maker" is in the markup but hidden (a responsive duplicate). The repeated "Made You Smile" headings are not empty headings; they are the 18 items of the pink ticker in `canary-03-switch.png`. The pink measures #eab2b3 (buttons) and #e8abac (ticker). At phone size with a phone user agent the site answered with a "Verify you are human" check, so there is no phone capture.

**Human tell.** The writing: service tiers with names, a quoted patient thought inside body copy, a CTA that is a small joke. Visually, the black-outlined pastel pill and the mono eyebrow are choices; the 17-screen stacked-split layout underneath is the page builder showing.

### 17. Aventura Dental Arts — https://aventuradentalarts.com/ (US, Aventura / Bay Harbor / Coral Gables, Florida; esthetic and implant group; Awwwards Site of the Day, March 2026)

Shots: `aventura-01-hero.png`, `aventura-02-goal.png`, `aventura-03-solutions.png`, `aventura-04-team.png`, `aventura-m-loader.png`, `aventura-m-hero.png`

**On screen.** A magazine cover that moves. The first screen is split exactly in half: left a flat pale grey, right an autoplaying video of a dentist in loupes and a mask, shot close and shallow so most of the frame is blur. One enormous condensed serif headline runs across both halves: "Premium / Esthetic" in dark grey on the light side and "Dentistry" in white italic on the video side, the word "Premium" straddling the seam and changing colour where it crosses. Header is a smile-arc logo, "Menu", "Services", a phone number with an office label under it, and a grey pill "Book A Call" with a plus. Bottom-left lists the three locations; bottom-centre a serif tagline with an italic second half. Scroll: a cream screen with "Our goal is" in 83px serif at the left edge and the rest of the sentence as a column at the right, a black-and-white portrait of a partner adjusting his glasses between them; a numbered technology list ("02 / 06") where the active row is dark and the others ghosted, beside a product shot on black; then a near-black stage with "Team of Experts" at 276px running behind the heads of three partners photographed together in suits, each with a small caption. No pastel, no icons, no cards. Eye lands on the italic "Dentistry".

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 / hero line | Instrument Serif (self-hosted; a free Google face) | 400, italic for one word | 153 / 122.4px | -4.59px (-3%) | none | #424346 and #ffffff |
| stage title | Instrument Serif | 400 | 276 / 231.8px | -11.04px | none | #eae8e8 |
| h2 | Instrument Serif | 400 | 83 / 77.2px; list rows 55px | -1.66px | none | #424346 |
| body | Inter Tight | 600 | 20 / 21.8px, measure about 39 characters | -0.4px | none | #eae8e8 or #424346 |
| captions, nav | Inter Tight | 500 | 12–15px | -0.14px | none | #424346 |
| primary button | Inter Tight | 700 | 14 / 15.8px | -0.28px | none | #424346 on #eae8e8 |

**Palette.** Two grounds split the page almost evenly: #eae8e8 cool pale grey (9vp) and #14151d blue-black (8.3vp). Text #424346 on light, #eae8e8 on dark. No accent colour at all. Photography is black-and-white or low-saturation.

**Radii / spacing.** Buttons 64px radius, 48px tall, padding 16px 24px, with a plus glyph at the right. Photos square (18 of 18). Lists are 1px rules at 10–15% opacity; no shadows. One width: 1376px at x=32 (32px gutters). Hero exactly 900px inside a 2,520px pinned stage. Page 18,430px (20.5 screens).

**Motion.** See the direct answers above for the sequence. Detected: Nuxt app, Lenis (`lenis lenis-smooth` on html), a Lottie preloader, one Swiper; no GSAP global and no ScrollTrigger. 7 sticky stages, 13 scroll-linked transforms, 50 split-line spans, 90 elements with `will-change`. Reveals: 13 measured, lines rising 17px with opacity 0 -> 1, staggered about 110ms, finishing 440–880ms after entry. Easing in the CSS: cubic-bezier(0.24, 0.43, 0.15, 0.97) and (0.6, 0.14, 0, 1); durations 0.3s for hovers, 0.8–1s for moves. Header: fixed, slides up 76px on scroll down, returns on scroll up.

**Verbatim.** "Premium Esthetic Dentistry" / "Designing smiles that are as healthy as they are beautiful" / "We combine advanced science with an artist's touch." / "Our goal is to deliver world-class dental and aesthetic care…" / "Team of Experts" / CTA "Book A Call"

**Human tell.** A single typographic idea pushed hard: one serif, two colours, a headline that changes colour where it crosses a seam and a title that sits behind people's heads. It also shows that free fonts are not the problem; timid scale is. The trade-offs for us: a 5-second loader, a 20-screen scroll and a tone aimed at people buying veneers at 50, not a check-up at 26.

### 18. Luca Aesthetic — https://www.lucaaesthetic.com/ (US, Woods Cross, Utah; cosmetic practice built around a named smile-makeover product)

Shots: `luca-01-hero.png`, `luca-02-pinkband.png`, `luca-03-lucasmile.png`

**On screen.** The loudest general-cosmetic site in the set. The first screen has no headline: it is a full-viewport autoplaying video composed as a 3x3 wall of rounded clips on black (a consultation, a handshake across the front desk, gloved hands on a model, the whole staff posed), like a contact sheet. Over it a hot-pink handwritten "luca" logo top-left and, top-right, "SCHEDULE NOW" with a pink bar, pink Instagram and phone glyphs and a pink menu icon. Below the video a full-bleed hot-pink band carries the h1 as two lines of small wide-tracked white caps. Then an off-white split: black geometric caps "DISCOVER YOUR BEST WITH", the product name as a huge pink script-plus-thin-sans lock-up, a short paragraph, and a black-and-white photo of a laughing patient. Later: "GET A #LUCASMILE / YOU'RE GONNA BE POPULAR" in 84px pink caps with the dentist's handle and pink social glyphs over a black-and-white Instagram tile showing like counts. Every photograph is desaturated; pink is the only colour. Eye lands on the centre clip of the wall, then the pink band.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| display lines (h2) | Publica Play (licensed geometric display) | 400 | 64, 76, 84 and 96px, line-height 1.0 | normal | uppercase | #fb0199 or #000000 |
| h1 (in the pink band) | Publica Play | 400 | 19.2 / 28.8px | 2.4px | uppercase | #ffffff |
| sub-heads | Publica Play | 400 | 32 / 48px | normal | uppercase | #000000 |
| body | Proxima Nova | 300 | 14.4 / 21.6px, measure about 43 characters | 0.75px | none | #000000 |
| primary button | Publica Play | 400 | 15 / 17px | 1px | uppercase | #ffffff on #fb0199 |

**Palette.** #fffdfc off-white page; #000000 (2.7vp: video stage, one section, all text); #fb0199 hot pink (1.4vp: band, buttons, display type, icons, 2px outlines). Nothing else. Photos carry `saturate(0)` / `grayscale(1)` filters.

**Radii / spacing.** Buttons 30px radius, 41px tall, padding 12px 25px; tabs are 100px-radius outlines with a 3px white border; feature tiles are 300px-radius outlined lozenges with a 1–2px pink border. Photos square. Content 1160px at x=134; splits are 714px halves. Hero is the full viewport. Page 11,885px (13.2 screens).

**Motion.** Not probed. Detected the same stack as Arbor: GSAP 3.15.0, ScrollTrigger, SplitText and SplitType (911 split nodes), Lenis, Barba, Lottie, one pin spacer, 24 Webflow interactions. Three autoplaying looped videos (the hero file is named "Luca Hero with film burn"). Button hover: fill swaps to light grey with pink text over 0.2s.

**Verbatim.** "DENTISTRY THAT'S ALL ABOUT YOU" / "DISCOVER YOUR BEST WITH LUCAsmile" / "GET A #LUCASMILE" / "YOU'RE GONNA BE POPULAR" / "LESS IS MORE" / CTA "SCHEDULE NOW"

**Human tell.** One colour used without apology and a hero made of the practice's own footage rather than a model. It reads like a personal brand because it is one: the dentist's handle is typeset as large as a heading. Hot pink is therefore taken, at least at this end of the market.

### 19. Zen Dental Studio — https://www.zen.dentist/ (US, San Francisco + Mountain View; two studios)

Shots: `zen-01-hero.png`, `zen-02-howwecare.png`

**On screen.** The cream-and-serif calm route, done cleanly. A full-viewport interior photograph (oak-veneer partitions, slatted ceiling, a chair with the logo on its screen) fades to white on the left, where a letterspaced gold eyebrow with a short rule ("SAN FRANCISCO · MOUNTAIN VIEW") sits over a two-line Cormorant headline, a two-line grey lede, a brown pill "BOOK A VISIT" and a white outlined pill "CALL NOW". The logo is a chunky italic serif wordmark in brown; nav is wide-tracked white caps; a gold pill "BOOK NOW" top-right. Screen two, "How we care", is a numbered list in ruled rows: a gold numeral and caps label at the left (02 / CARE BUILT TO LAST), a 52px serif sentence in the middle, a short paragraph, and only the row nearest the centre of the screen at full strength while its neighbours fade back (seen in the screenshot; opacity not measured). Faint vertical gold hairlines run down the page behind everything like a visible column grid. Eye lands on the oak partition, then the headline.

| Role | Family | Weight | Size / line-height | Tracking | Case | Colour |
|---|---|---|---|---|---|---|
| h1 | Cormorant Garamond (Google, via the framework's font loader) | 400 | 60 / 63px, left, 2 lines | -1.08px | none | #33231f |
| h2 | Cormorant Garamond | 400 | 42 / 47.5px | -0.59px | none | #33231f |
| row statements (h3) | Cormorant Garamond | 400 | 52 / 58.2px | -1.04px | none | #33231f |
| eyebrow | Hanken Grotesk | 500 | 15 / 22.5px | 3px | uppercase | #836a2c |
| body | Hanken Grotesk | 400 | 19 / 30.4px, measure about 51 characters | -0.21px | none | #4a3a34 |
| nav link | Hanken Grotesk | 400 | 16 / 24px | 1.6px | uppercase | #fdfaf6 |
| primary button | Hanken Grotesk | 500 | 13–14px | 1.56–1.68px | uppercase | #fdfaf6 on #574139, or #3d2e2a on #c4a96a |

**Palette.** #fdfaf6 cream (6.3vp) and #f8f2eb sand (6.4vp) alternate; #574139 bark (buttons, footer); #33231f ink; #4a3a34 body; #c4a96a gold button and #836a2c gold text; #f2e8de. No cool colour.

**Radii / spacing.** Buttons 9999px, 49–52px tall, padding 14–16px 28–32px. Cards 16px and 10px with a hairline ring and a soft shadow; photos square inside 10px-padded frames. Content 992px at x=221 with a 768px text column; hero text at x=80. Sections padded 96–144px. Page 11,087px (12.3 screens).

**Motion.** Not probed. 13 hand-named keyframes (zen-river-left/right marquees, em-rise, zen-float); two infinite marquee animations running; the row-focus fade on scroll. Easing cubic-bezier(0.22, 0.61, 0.36, 1) (13 uses). Button hover: translateY(-2px), lighter fill, shadow 0 8px 30px rgba(0,0,0,.08) over 0.3s. Next.js + Tailwind; no motion libraries.

**Verbatim.** "Modern dental care, thoughtfully delivered." / "You're in good hands." / "We look after your smile for the long run." / "You'll always know what's going on and why." / "We fix what needs fixing." / CTAs "BOOK A VISIT", "CALL NOW"

**Human tell.** The sentences. Every heading is a plain promise a person would say out loud, and the numbered-row layout gives each one room. Visually it is the third site in this set built from the same recipe (Cormorant or Playfair, a neutral grotesk, cream, pills, lift-on-hover); it is the best-executed of the three and still the least memorable hero here.

### Also looked at (one shot each, not fully measured)

- **Dntl Bar — https://www.dntlbar.com/** (US, Chelsea NYC). `dntlbar-01-hero.png`. Blocked by a bot wall on my first pass, loaded on the second. White page, charcoal header (#252b2b), sand offer strip and pill (#e6d2af). The idea is the voice: everything lowercase, "dental for the people." as the h1 in a heavy geometric face (Liber Black, 75 / 75px), h2s at 62px lowercase, body Nunito Sans 16 / 30px in pure black. A clinic walkthrough video sits right. Built on the same commercial WordPress theme as Rüh; accessibility toggles hang off the left edge. Worth noting for the lowercase voice, not for the layout.
- **South Cliff Dental Group — https://southcliffdentalgroup.com/** (UK; NHS + private group; Awwwards Honorable Mention). `southcliff-01-hero.png`. The 3D experience does load: one full-viewport WebGL2 canvas (three.js r185, Next.js) rendering chalk cliffs at sunset with fog, a rainbow and a gull; assets include `cliff_compressed.glb`, `boat-transformed.glb`, `wave.glb`, `diamond_pin.glb` and `tooth.glb`, Draco and Basis decoders. An "EXPLORE THE CLIFF" pill and a sound toggle sit bottom-right. Type is Century Gothic caps at 38px. Impressive as a build, unrelated to a young-audience studio, and the only three.js in the study.

---

## Part 2 — The three control sites ("what to avoid")

### C1. Toothbar — https://toothbar.com/ (US, Austin; cosmetic practice; WordPress + Elementor, cookie control id `tnt-manage` indicates a dental-marketing vendor build)

Shots: `toothbar-01-hero.png`, `toothbar-02-cards-story.png`

**On screen.** A dimmed autoplay video fills the hero: a woman in a red jumper walking through a downtown plaza with a takeaway coffee. Thin white 68px headline left with one teal word ("It's time to *love* visiting your dentist."), a teal hairline, a letterspaced caps sub-line that is the actual h1, and a teal gradient button with an icon. The hero's bottom edge is cut on a diagonal into a mint section. Then three photo cards with a dark overlay, each a thin caps title and a centred white paragraph; then a founders photo with a teal triangle behind it beside two long centred-rag paragraphs that run off the right edge of the viewport.

### C2. Covedale Dental Studio — https://www.covedaledental.com/ (US, Cincinnati; family practice; Duda reseller site: `dmResellerSite` body class)

Shots: `control-covedale-01-hero.png`, `control-covedale-02-welcome.png`

**On screen.** A navy header 217px tall holding: address, a gold-gradient "Call" button, social icons, a logo (a tooth inside a city skyline, gold outline), a two-row nav, and two more stacked gold buttons. Under it a darkened video of the street outside the building with "Healthy Smiles for the Whole Family" in bold white. Then a centred h1 that is an SEO string, three centred paragraphs 1,200px wide, a gold button; a navy band with "New Patient Special" and "$79*" in glowing yellow at 90px. An accessibility widget sits bottom-left and a financing chip bottom-right on every screen.

### C3. Family Dentistry of Lakeland — https://www.familydentistryoflakeland.com/ (US, Lakeland FL; family practice; WordPress + Elementor on the Hello theme; shown in a dental web vendor's portfolio)

Shots: `control-lakeland-01-hero.png`

**On screen.** A beige sand-texture background fills the viewport. The hero is the logo itself, repeated: small top-left and again 400px tall in the centre (a tooth outline with a heart inside). Under it the h1, "Dentist in Lakeland, FL", in 32px italic serif, then an italic tagline with three words in capitals. Two taupe pill buttons top-right. A Google review toast overlaps the bottom-left of the hero and a reCAPTCHA badge the bottom-right. No photograph in the first screen.

### Template fingerprint (measured on C1–C3)

| Trait | C1 Toothbar | C2 Covedale | C3 Lakeland |
|---|---|---|---|
| Platform | WordPress, Elementor (825 nodes), Hello theme | Duda reseller | WordPress, Elementor (769 nodes), Hello theme |
| CSS shipped | 947 KB, 574 keyframes | 1,354 KB, 132 keyframes (animate.css set: bounce, tada, wobble, rubberBand) | 411 KB |
| Font families loaded | 4 in use (Montserrat, Lato, Poppins, Outfit) + Marcellus and Overpass declared | 3 (Open Sans, Montserrat, Roboto) | 7 (Crimson Pro, Red Hat Text, Red Hat Display, Figtree, Montserrat, Lora, Poppins) |
| h1 | 19px Outfit 300, uppercase, 1.4px tracking: "TOP COSMETIC DENTISTS SERVING THE AUSTIN COMMUNITY" | 50 / 60px Open Sans 700, centred: "Welcome to Covedale Dental Studio in Cincinnati, OH 45238" | 32 / 48px Crimson Pro 300 italic: "Dentist in Lakeland, FL" |
| Visual headline | 68px Lato 300 (thin), one coloured word | 50px Open Sans 700 | 40px Crimson Pro 300 italic with three CAPS words |
| h2 | 34px Lato 300 uppercase (also 33, 26, 19, 15px h2s) | 36px Open Sans 700; h3 30px | 60 and 55px Crimson Pro 300 |
| Body | Montserrat 400 15 / 24px, #000000, measure about 84 characters | Open Sans 400 16 / 24px, #414141, 1,200px wide = about 150 characters per line, centred | Red Hat Text 20 / 28px; the most-used size on the page is 13px |
| Button | 1.5px teal outline, 4px radius, 32px tall, Montserrat 300 15px uppercase 0.7px tracking; hover `scale(1.1)` | gold `radial-gradient(#e1d18e 60%, #ae9a65)`, 8px radius, 45px tall, Open Sans 700 18px; 16 gradient buttons on the page | taupe #90725d / #6c5646 pill, 70px radius, 35–52px tall, Red Hat Display 500–600 15px uppercase, 3px tracking on some |
| Colours | #24d7c3 teal, #d8fffb mint, #000000 text, a stray #e087ed pink | #204379 / #445b80 / #004274 navy, gold gradient, #f9e45b yellow, #414141 grey | #f3eeea / #f8fafc, #90725d, #6c5646, #a07a66 taupes, #000000 text, stray builder-default #cc3366 link pink |
| Card style | 11px, 12px and 16px radii on the same page; shadow `0 0 10px rgba(0,0,0,.5)` | 25px radius, shadow `0 3px 11px rgba(0,0,0,.25)` | none |
| Hero image | dimmed stock-style lifestyle video | dimmed drone/street video | the logo |
| Content width | 1140px at x=150 | 1200px at x=120 | 1240px at x=100 |
| Page length | 10,291px (11.4 screens), 32 headings | 9,171px (10.2 screens) | 5,145px |
| Motion | 6 infinite `button-ripple` pulses; smooth-scroll; Elementor entrance fades | none running; animate.css available | fadeIn / fadeInRight entrances |
| Overlays on first screen | cookie chip | accessibility widget, financing chip | Google review toast, reCAPTCHA badge |

What the three share, in numbers:

1. **The h1 is written for a search engine, not a person**: city (and in one case the ZIP code) in the h1, set small or centred, while a different line plays the visual headline.
2. **Three to seven font families** loaded, versus one or two on every good site. Thin weights (300) for headlines.
3. **Uppercase letterspaced labels and buttons** (0.7–3px tracking) as the default "premium" signal.
4. **Mixed radii on one page** (4 / 8 / 11 / 12 / 16 / 25 / 70px) and **blurred drop shadows** at 25–50% black. The good sites use one radius and either no shadow or a hairline.
5. **Body text in pure black or flat grey, 15–16px, on lines of 84–150 characters**, usually centred. The good sites set body at 18–22px on 37–66 characters, left-aligned, in a tinted near-black.
6. **A dimmed video or the logo as the hero**, with a gradient or outlined button carrying an icon.
7. **Category clip-art in the logo** (tooth + skyline, tooth + heart).
8. **Third-party chrome over the content**: accessibility widget, financing chip, review toast, reCAPTCHA badge, chat bubble.
9. **A page that is long because it is stuffed**: 10+ screens, 20–32 headings, "Welcome to …" paragraphs, with stray page-builder default colours leaking into links (#cc3366 on C3; the same leak shows on Urban Dentist as #61ce70).
10. **Colour by category convention**: teal/mint, navy/gold, beige/taupe.


---

## Part 3 — Phone-size heroes (390x844)

Shots: `jacquescie-m-hero.png`, `sagespace-m-hero.png`, `lava-m-hero.png`, `tend-m-hero.png`, `impress-m-hero.png`, `smilewhite-m-hero.png` (my six strongest), plus `swish-m-hero.png`, `grandstreet-m-hero.png`, `gleamery-m-hero.png`, `aventura-m-loader.png`, `aventura-m-hero.png` (the shortlist's phone set). Canary answered a phone user agent with a "Verify you are human" check, so it has no phone shot.

| Site | Biggest text | Booking control in first screen | Gutter | What changes from desktop |
|---|---|---|---|---|
| Jacques + Cie | 52 / 46.8px | calendar icon in a 50px white rounded square, top-right; "Menu" 77x50 | 20px | Photo crops in to the face; the three "+" tags sit across the smile; h1 lands on the white T-shirt (white on near-white, weak contrast) |
| Sage Space | 40 / 36px, -0.8px | two 37px pills on the photo plus a fixed 63px bottom bar with "Book Now" and a phone disc | 10px | Photo becomes a tall rounded card inside 10px margins; nav collapses to a half-moon glyph |
| LAVA | 31.7 / 33.3px | mint pill 187x52 at the bottom | 24px | Video card moves between headline and promise; the mountain is dimmed to a texture |
| Tend | 39.2 / 46.7px | a dark bar under the lime strip: location search + "BOOK NOW" 121x34; then 139x40 and 168x40 pills side by side | about 26px | Portraits drop below the service chips; accessibility and menu tabs hang off the left and right edges |
| Impress | 42 / 44.1px, -1.68px | red pill 216x36; "Take the quiz" 116x28 in the header | 20px | Stronger than desktop: the red photo fills the screen with white type on it, and the menu is a 56px cobalt disc in the bottom-right thumb zone |
| Smile White | 33 / 31.7px, -3% | navy pill 136x31 in the header | 16–20px | Four price tiles stack full-width (350x80, 20px radius) directly under the headline |
| Swish | 32 / 38.4px | violet pill "BOOK NOW" 164x49 in the header, next to the logo | 23px | Order flips: the video card (50px corners) comes first, headline and copy under it; body 16 / 25.6px |
| Grand Street | 50 / 55px | none; only a three-bar menu | 15px | The shape field is re-cropped so two half-discs frame the headline; the statement paragraph follows at once |
| The Gleamery | about 36px light grotesk | charcoal pill 105x32 in the header; white pill 342x42 in the hero | 24px | Photo on top, then a brick-red panel holds offer line, headline, copy and CTA; phone numbers get their own ruled bar |
| Aventura | 71.8 / 60.3px, -2.87px, centred | phone disc and menu disc (about 41px) top-right | about 17px | Loader for about 5.3s, then a type-only first screen: three centred serif lines (third italic), tagline, video below the fold |

Read across: phone h1 is 32–72px (median 40) on a line-height of 0.84–1.2; side gutters 10–26px. Nine of the ten keep a booking or call control on screen without scrolling (Grand Street does not), and three keep it there permanently (Sage's bottom bar, Tend's top bar, Impress's floating disc). Many controls are under a 44px touch target (Tend 34–40, Impress 28–36, Smile White 31, The Gleamery 32, Sage 37, Aventura 41).

---

## Part 4 — Cross-site patterns (the 19 distinctive sites)

**Grounds.** Warm cream is the default: 8 of 19 sit on an off-white between #f3eee4 and #fffcf6 (Dentologie #f5f3f0, Sage Space #f3eee4, Esteve #f6f2e8, Jacques + Cie #f7f3eb, Swish #fff6e4, Canary #fffcf6, The Gleamery #faf7f5, Zen #fdfaf6). 5 are white or near-white (Tend, Impress, Smile White, Grand Street, Luca). 5 are dark for most or half of the page (Arbor #080808, MINÉMAL #242424, Rüh #16130f, LAVA #031c14, Aventura #14151d against #eae8e8). 1 opens on a colour (Urban Dentist's #ebc1bc dusty pink). Nobody runs a saturated colour as the page ground on desktop.

**Text colour.** The better the site, the less likely the text is black: #2a2622, #463b29, #333347, #221e63, #262322, #6c675c, #304f48, #031c14, #56499b, #424346, #33231f. Pure #000000 appears on Grand Street, The Gleamery, Canary and Luca, and on all three controls.

**Hues.** Green in some form on 6 (sage #698680, mint #9ee5c8 / #ddefde / #dbf6e9, forest #031c14 / #173b44, olive #6e8568). Peach or dusty pink on 5 (#f7c59c, #f2c4b3, #ebc1bc, #eab2b3, salmon shapes). Violet, lilac or periwinkle on 3 (#816ee7, #7759fe, #84b0e8). Red on 2 (#f1272b, #963f36). Hot pink on 1 (#fb0199). Blue as an action colour on 2 (#0178d1, #012ef4). Yellow-to-gold accents on 6 (lime #e7fb7e, marigold #f1b742, butter #fcf29e, ochre #d9a42f, gold #c4a96a, Rüh's bronze gradient). Most colour is pastel or greyed. A fully saturated colour appears on only five sites (Impress red and cobalt, Smile White violet, Swish violet, Tend blue and lime, Luca pink), and those five are the ones that read as energetic. Typical count: one ground, one ink, one or two accents. Sage Space, Luca and LAVA run on three, three and two colours; Aventura on two greys and no accent.

**Type pairings.** Serif display + grotesk text on 10 of 19 (Nantes + Founders Grotesk, Playfair + Inter, Albra + Allrounder with Anton, Cormorant Garamond + DM Sans, Eksell + system sans, Tobias + Maison Neue Extended, Superior Title + Gotham, Plush + Arimo with JetBrains Mono eyebrows, Instrument Serif + Inter Tight, Cormorant Garamond + Hanken Grotesk). One grotesk family for everything on 6 (Aeonik twice, Inter Display, PP Neue Montreal, Proxima Nova, Raleway). Display sans + text grotesk on 3 (Josefin Sans + PP Neue Montreal, Bagoss + Styrene B + Inter, Publica Play + Proxima Nova). Most of the memorable ones use licensed faces (Nantes, Albra, Tobias, Aeonik, PP Neue Montreal, Superior Title, Eksell, Bagoss, Plush, Maison Neue, Styrene, Gotham, Publica Play). Four of the ten serif pairings are free Google pairs. Three of those (Playfair + Inter, Cormorant + DM Sans, Cormorant + Hanken) converge on one look at 60–72px; the fourth (Instrument Serif + Inter Tight at Aventura) escapes it by going to 153–276px and breaking the layout. Scale and placement separate them, not the licence. Condensed heavy display appears once (Anton on Sage Space). Mono appears once, as an eyebrow.

**Type scale at 1440.** Hero headline sizes on the 18 sites that have one (Luca's hero is video only): 47, 50, 56, 60, 60, 63, 67, 70, 70, 72, 72, 72, about 90, 104, 124, 126, 150, 153px. Median 71px; 9 of 18 sit between 60 and 72px. A second group goes poster-size at 104–153px (Jacques + Cie, Esteve, MINÉMAL, Urban Dentist, Aventura) and those are the heroes people remember. Serif headlines are light to medium weight (300–500; Tend's 700 is the exception), tracked 0 to -4.5% (the big ones tightest); grotesk headlines are 700–900 with -2% to -4% tracking (Jacques + Cie's 400 at normal tracking is the exception). Display line-height is 0.9–1.05 on 14 sites, tighter on 2 (Aventura 0.8, Urban Dentist's stacked words 0.67) and 1.1–1.2 on 3 (Grand Street, Tend, Swish). h2 is 40–83px, typically 48–52. Body is 18px at the median (range 14–25; the good ones 18–22) on a 1.1–1.6 line-height and 37–66 characters per line. Nav 14–18px. Scales step by about 1.33 or by halves (LAVA 63 / 47 / 35.5 / 26.7; Jacques 104 / 52 / 26 / 18 / 14).

**Buttons.** Pill-shaped on 15 of 19 (radius at least half the height), a 20px rounded rectangle on 1 (Jacques + Cie), square on 3 (Urban Dentist, Arbor, Grand Street). Height 34–63px, median about 48. Padding around 12–16px by 24–40px. Fill is either the brand colour (Tend blue, Impress red, Swish violet, Sage peach, LAVA mint, Luca pink, Zen gold) or the dark ink (Dentologie, Smile White, The Gleamery, Zen's second button); secondary is a 1–2px outline or a second pastel. Label 13–18px, weight 400–700; uppercase on 8, sentence case on 11. Icons inside buttons are rare (Impress arrow, Jacques calendar, Aventura plus). Hover is a colour change and nothing else on 14 of 19; where anything moves it is 1–2px, a 2% scale, or Aventura's label roll.

**CTA wording.** "Book Now" / "Book Online" on 6 (Tend, Dentologie, Swish, The Gleamery, Grand Street, Zen). A named or softened variant on 7: "Book a ritual", "Book & Smile", "Fancy a free appointment", "Book a free consultation", "Free E-Consultation", "Book A Call", "Book a visit · [number]". A plain appointment or schedule verb on 6 ("Make an appointment", "Termin buchen", "Prendre rendez-vous", "SCHEDULE", "SCHEDULE NOW", "BOOK AN APPOINTMENT"). A phone, text or WhatsApp route sits beside the main CTA on at least 9, and seven sites print the number itself as text in the header or a button (Tend, Dentologie, Esteve, Urban Dentist, Canary, The Gleamery, Aventura). The control sites say "Request Your First Visit", "Become a Patient", "Call Us Today".

**Image treatment.** Four kinds of hero, almost never mixed: (a) a person on a flat colour backdrop, shot like a fashion or beauty campaign, on 6 (Tend, Impress, Jacques + Cie, Smile White, The Gleamery, Rüh); (b) the room or the building, people absent or small, on 7 (Dentologie, Sage Space, Swish, Canary, Arbor, Urban Dentist, Zen); (c) something that is not dentistry, on 3 (LAVA's mountain, Esteve's town, Grand Street's paper shapes); (d) the dentists themselves, on 3 (MINÉMAL's double portrait, Aventura's masked close-up, Luca's video wall of the practice). Open-mouth clinical close-ups appear on one site only (Rüh's before/after). Patient casting skews 20s–30s with visible personality: piercings, tattoos, sunglasses, hoodies, a tongue out, an earbud in. Photos are graded to the palette (LAVA green duotone, Urban Dentist pink wash, Impress red and blue styling, Luca and MINÉMAL fully desaturated). Corners: square on 10, 20–32px on 5, 8px on 1, a signature mask on 2 (Tend's stadium, Canary's arch), mixed on 1 (The Gleamery). Grand Street's half-moons are the only other owned shape. Tall portrait crops (0.6–0.8) are more common than landscape.

**Shapes, borders, depth.** One radius per site on the disciplined ones (Sage 26px, Smile White 20px, square on Jacques / LAVA / Rüh / Aventura). Shadows are essentially absent: 14 of 19 use none on cards (the exceptions are Dentologie, Esteve, The Gleamery, Zen and one form panel at Grand Street). Separation is done with 1–1.5px rules in the ink colour (Sage Space, Swish, Rüh, LAVA, Jacques + Cie, Canary, The Gleamery, Aventura, Zen) or with a tint step. Service lists as ruled rows or table cells are more common than card grids (Sage, Swish, Jacques, Rüh, LAVA, Aventura, Zen, Impress accordions).

**Layout and rhythm.** Content runs wide: 1267–1400px at 1440 with 20–86px gutters on the newer builds (Sage 20, Aventura 32, Jacques 40, Tend 42, Dentologie 44, Arbor 52, Rüh and Smile White 70, LAVA 75, Swish 86); the older Bootstrap or builder ones sit at 1140–1160px, and Zen chooses 992px. Hero is a full viewport on 11 and 620–870px on the rest, usually letting the next section peek. Hero text is left-aligned on 14 of 19, centred on 4 (Tend, Dentologie, Rüh, Aventura) and absent on 1 (Luca). Home pages are 6–14 screens (median about 9), not counting LAVA's 36-screen and Aventura's 20-screen scroll films and Canary's 17. Section padding 80–144px. One to three full-bleed colour bands per page, and the footer is often a flat colour field (lilac, periwinkle, deep green, brick, brown).

**Motion habits.** Calm is the norm. Of the 15 sites I ran the scroll probe on, 9 have no scroll-triggered animation at all and 6 do; The Gleamery, Canary, Luca and Zen were not probed. The common moving thing is a ticker or marquee (8 sites; 36–140px/s where measured) and a carousel. Five sites are scroll showpieces (Arbor with GSAP + ScrollTrigger + SplitText + Lenis + Barba; LAVA with native CSS `animation-timeline` + Lenis; Aventura with Lenis and sticky stages; MINÉMAL with builder scrub; Esteve with CSS line reveals), Luca loads Arbor's stack, and one is slow and uniform (Jacques + Cie: one curve, cubic-bezier(0.66, 0, 0.34, 1), 1.3s). GSAP was detected on 2 of 19 (Arbor, Luca); Lenis on 5; Barba on 2; Lottie only for small icons and loaders; no Rive anywhere; three.js only on South Cliff, which is not one of the 19. The two newest award winners (LAVA, Aventura) get their motion from CSS scroll timelines, sticky positioning and a smooth-scroll shim rather than a tween library. Custom curves where anyone bothered: (0.66, 0, 0.34, 1), (0.33, 0, 0.11, 1), (0.1, 0.75, 0.25, 1), (0.2, 0.75, 0.2, 1), (0.19, 1, 0.22, 1), (0.165, 0.84, 0.44, 1), (0.24, 0.43, 0.15, 0.97), (0.22, 0.61, 0.36, 1). Reveal distance 16–66px, duration 0.6–1.3s, line stagger 0.11–0.12s. Hover transitions 0.2–0.4s. Headers are sticky or fixed on 15; two hide on scroll down (Arbor, Aventura). Autoplay muted video in the hero on 6 (Arbor, LAVA, Swish, Canary, Aventura, Luca). Loaders or held intros on 3 (Jacques + Cie about 1.3s, Aventura about 5s, LAVA about 1.4s before the headline shows). Custom cursor on 1 (Sage's dot). A page-transition library (Barba) is loaded on 2 (Arbor, Luca); I did not navigate between pages to watch it.

**Proof and price.** A rating line in the first screen on 5. Prices on the home page on 5 (LAVA "280€", Rüh "from £2,199", Smile White "from £995", The Gleamery "$0", plus Impress's discount figures); where they appear they are typeset large, not hidden in a table. Proof that reads as real is unedited: patients' own story screenshots (Grand Street), their own vertical phone videos with handles (Smile White), press logos in their own colours (Grand Street) or one tint (Smile White). The Gleamery's comparison table and Rüh's priced rows are the two cases where a table does the selling.

**What reads as generated, seen on live sites in this set.** Playfair or Cormorant + Inter, DM Sans or Hanken at 60–72px; a hero with two pills and a star row; rounded-2xl/3xl cards with a soft shadow that grows on hover; `fade-in-up` at 0.6s on everything; the stock easing cubic-bezier(0.4, 0, 0.2, 1); lift-on-hover of 2px; shimmer placeholders; tick-in-a-circle checklists; dark-green bento tiles with gold lines and rendered objects. Dentologie's shell, Zen's shell and parts of Esteve show it. Their photography, sentences and ideas are good, which makes it the clearer lesson: the shell is what gives it away.

---

## Part 5 — Whitespace: what none of the 19 do

1. **A high-energy general practice does not exist in this set.** 14 of 19 are calm, spa-like or luxe. The loud ones are aligner retailers running offers (Impress, Smile White), a celebrity-cosmetic personal brand (Luca) and two heroes that calm down after one screen (Grand Street, Urban Dentist). Nobody combines a full-service neighbourhood dentist with saturated colour, big type and speed from top to bottom.
2. **No saturated ground on desktop.** Cream, white, charcoal, one dusty pink. Luca and Impress use saturated bands; no page is built on a bright field. Impress does it only on phones, and it is their best screen.
3. **Colours nobody owns.** Orange and tangerine (only as one paper shape at Grand Street), true yellow as more than an accent, bright green, and any two-saturated-colour system other than Impress's red and cobalt. Taken: green in its quiet forms (6 sites), cream (8), lilac and violet (3), hot pink (Luca), red (Impress).
4. **Nobody lets the dentist speak in the first screen.** Three heroes show the dentists (MINÉMAL, Aventura, Luca) and none of them says anything in the first person; Canary puts a founder quote on screen two as text. For a new solo practice the founder's face and voice together, at the top, are the one thing chains cannot copy, and it is unused.
5. **No live utility in the hero.** Every booking path is a button that leaves for a scheduler. No next-available slots, no "today 4:30" chips, no first-visit price in the first screen of a general practice, no walking-time or open-now state. Only Smile White puts a price above the fold and it sells products.
6. **Type rarely plays, and never playfully.** Aventura and MINÉMAL move type on scroll, slowly and seriously. Nobody uses kinetic type for fun, variable-font movement, numerals as graphics, or type that reacts to the pointer. Condensed or heavy display faces are nearly unused (one Anton, in brown; one Liber, in black).
7. **No illustration, drawing or hand-made mark as the lead.** Everything is photography, video or flat shape. No character, no collage, no stickers, no hand lettering beyond two script logos (Swish, Luca), no drawn icons with a personality (Swish's squiggle is the nearest).
8. **Humour stays in the copy.** Canary, Dentologie, Grand Street and Dntl Bar are funny or informal in words or props; no layout or interaction is. Nothing is surprising to touch.
9. **Photography is studio-flat, architectural, or desaturated.** Nobody uses direct-flash, documentary or film-grain colour photography of real patients and real days; nobody shows the neighbourhood as part of the brand (Esteve shows a town, Swish a doorway). The black-and-white sites (MINÉMAL, Luca, Aventura) all read as luxury.
10. **Shape systems are binary.** Either pills and big radii (soft) or all-square (hard). Only three sites own a shape (stadium, arch, half-moon). No site carries one bespoke, tooth-free shape through photos, buttons and icons together.
11. **Editorial structure is rare.** Numbered rows (Zen, Aventura, LAVA) and ruled price lists (LAVA, Rüh) are the nearest things and they work. No captions, footnotes, margin notes or multi-column text anywhere.
12. **Motion has two settings: off, or scroll film.** Nobody uses small, fast, physical interaction (press, snap, wobble, count) as the brand's energy. The scroll films are slow, long (20–36 screens) and one of them makes you wait 5 seconds first.
13. **Nothing acknowledges time.** No site changes by hour, shows today's state, or runs a visible clock, queue or counter that is real.

The gap that follows: a general practice that looks as confident as the aligner retailers past the first screen, in a colour family nobody holds, with the dentist's face and first-person voice in the hero, type doing quick, light movement instead of a scroll film, and one real piece of booking information where everyone else has a button.

---

## Part 6 — Ten screenshots to open first

1. `jacquescie-01-hero.png` — casting as the brand: one full-bleed portrait, one weight of one typeface, no button in the hero, a "+" motif from the name.
2. `jacquescie-05-hover.png` — services as 104px words with face crops in ruled rows; hover lights the whole row and inverts the pill, nothing moves.
3. `sagespace-03-rituals.png` — three colours, one 26px radius, 1px rules as structure, a condensed display face against a quiet grotesk.
4. `lava-05-pricing.png` — the price printed as large as the heading, tabs on a hairline, no boxes.
5. `lava-03-services.png` — numbered tiles, photographs graded into the palette, round arrow discs, header that blurs what passes under it.
6. `tend-01-hero.png` — one repeated crop shape, flat candy backdrops, a wink; proof phrases as a ticker; nav in floating pills.
7. `impress-m-hero.png` — the most energetic screen captured: saturated ground, white type, menu in the thumb zone.
8. `grandstreet-01-hero.png` — a hero with no photograph at all that still belongs to a dentist.
9. `aventura-01-hero.png` — one serif headline crossing a hard seam and changing colour as it does; free fonts made unfamiliar by scale.
10. `urbandentist-01-hero.png` — the navigation as the poster; photo tinted to the brand colour; hashtags as eyebrows.

If there is time for five more: `sagespace-05-peach.png` (testimonials typeset as headlines), `smilewhite-m-hero.png` (prices as the first thing on a phone), `luca-03-lucasmile.png` (one loud colour, social handle as heading), `gleamery-04-comparison.png` (a table that sells), `aventura-04-team.png` (type behind people).

For contrast open `control-covedale-02-welcome.png` (150-character centred lines, gradient buttons, "$79*") and `dentologie-01-hero.png` (good pictures, generated-looking shell).

---

## Part 7 — Sites skipped, blocked or only glanced at

| Site | Outcome |
|---|---|
| Tooth Club (toothclub.co.uk) | Bot wall: host's "Robot Challenge Screen". Not bypassed. |
| Nova Dental Care (novadentalcare.co.uk) | Same bot wall. Not bypassed. |
| Canary Dental at phone size | Desktop captured; a phone user agent got a "Verify you are human" checkbox. Not attempted. |
| Dntl Bar (dntlbar.com) | Bot wall on the first pass, loaded on the second: one hero shot and basic measurements under "Also looked at". |
| South Cliff Dental Group | Loaded; 3D confirmed; one shot under "Also looked at". Not relevant to a young-audience studio. |
| Beam Street | beamstreet.com does not resolve. |
| Wally Health | wallyhealth.com redirects to a domain-sale page. |
| Kin Dental | kindental.com returned a certificate error; not bypassed. |
| Grin, moderndentist.co.uk, twofront.com, Mint'd | Dead, wrong or provider-facing per the researcher; not opened (Mint'd's domain did not resolve for me either). |
| ORAL Dental Studio | oral.nyc is a for-sale page; oraldentalstudio.com is live but a generic builder page (glass panel over a photo, bold black logo). Looked at, not captured. |
| Dentista Amsterdam (dentista.nl) | Live; strong interior photography, ordinary layout with text running to the left edge. Looked at, not captured. |
| Atelier Dental (atelierdental.com.au) | Live; sage gradient, display serif, overlapping photos, staff line-up: competent boutique-agency look, not distinctive. Looked at, not captured. |
| Dr. Molly Rosen, Herzel, Sakai Kids, Tetri's Smile, Nova Dental (staging) | On the researcher's or Awwwards lists; not opened. |
| Researcher's suggested controls (Advanced Dental Care, Cambie Village Dental, The Tooth Co., Downtown Dental Centre, Hue Dental) | Not opened. I had already measured three controls on three different builder stacks (Elementor twice, Duda once), which was the number asked for. Worth noting from the URL alone: Cambie Village's `/site/home` path is the same vendor platform Tend now runs on. |

---

## Part 8 — Method notes and limits

- **Viewport.** I emulated 1440x900 on my own tab instead of resizing the shared browser window, so other sessions' tabs were not disturbed. Desktop shots are 1x; phone shots are 390x844 at 3x with a phone user agent.
- **Cookie and consent banners** were dismissed with their own accept or close button on Tend, Dentologie, Urban Dentist, LAVA, Esteve, Impress, Jacques + Cie, Rüh, Smile White, Swish, Canary and Toothbar. The Gleamery's newsletter modal was closed with its own X. In two cases my measuring script hid a leftover consent element it found no button for (LAVA, after its banner had been accepted; Canary, before I clicked its own "Close & Accept"). `canary-01-hero.png` still shows Canary's cookie bar; `gleamery-02` to `-04` show its "Thinking About Aligners?" chip.
- **No page text addressed or tried to instruct an automated visitor.** Nothing to report there.
- **Scroll-reveal counts** come from stepping `window.scrollTo` in 720px jumps over the first 15 steps of a page; an effect that only listens for wheel events, or sits deeper than about 10,800px, could be under-counted. The probe was run on sites 1–14 and on Aventura. It was not run on The Gleamery, Canary, Luca, Zen, Dntl Bar, South Cliff or the three controls; their motion rows rest on detected libraries, keyframes and what the screenshots show.
- **Real hover** (pointer moved onto the element, computed styles diffed) was done on Tend (button and chip) and Jacques + Cie (service row). Hover behaviour for the other sites is read from the `:hover` rules that match the measured button, which is exact for CSS hovers and blind to JS-only ones.
- **"vp" areas** include off-screen carousel slides, so a colour used on a slider can be over-weighted (Tend's sage is the clear case).
- **Approximate values.** Grand Street's shape colours and LAVA's sand dot are read from screenshots because they live inside images; Rüh's hero type size is estimated from an image; The Gleamery's phone headline size is estimated from the screenshot.
- **Load timing** (loaders, first fades) comes from a sampler started at page load on one visit each; Aventura's 5.3s loader was timed once at phone size and will vary with network.
- **Seasonal state.** Impress, Smile White and The Gleamery were running Black Friday or first-visit offers on capture day; their tickers and offer headlines will differ at other times.
- **Housekeeping.** The browser tool can only read helper scripts from inside the workspace, so the measuring scripts lived in `research/.tmp-capture/` during each pass and were deleted afterwards. Nothing else was written outside this file and `research/shots/`. No git operations.
