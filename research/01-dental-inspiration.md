# 01 - Dental site inspiration (text and source pass, 2026-11-09)

Author: Trend Researcher agent (`dental-inspo`). Saved to disk by the lead from the agent's message, unedited apart from this line. The rendered/measured pass is in `01b-visual-capture.md`.

## 0. Method and limits (read first)

No browser was available to this agent, so nothing below was seen rendered. There are NO screenshots, NO computed styles, NO hover/scroll/motion observations and NO mobile checks. Every item carries a tag for how it was observed in this session:

- [P] live page text fetched today (HTML converted to text and extracted by a small model; no CSS, no JS, no rendering). Quotes are as returned by that extraction and should be spot-checked in a browser before reuse.
- [C] the site's own stylesheet fetched directly (declared values, not computed).
- [A] the site's Awwwards entry page (award, date, tags, two published hexes).
- [R] Repaint's dental gallery listing (third-party reported fonts and hexes; not verified against the sites).
- [F] Fonts In Use entry. [S] agency article or case study.

"Not obtained" means it could not be observed. Hero composition, image treatment, radii, type sizes and motion are not obtained for every site except where a tag says otherwise. No page contained text addressed to an AI or automated reader.

## 1. Site by site (distinctive / young-audience)

### 1. Swish Oral Care - https://swishoralcare.ca/ - Calgary, Canada
- Targets: adults who treat dental as lifestyle/self-care; three neighbourhood studios.
- Palette [R]: #FFF6E4, #816EE7, #D4CAFF, #F1B742 (cream, violet, lilac, marigold). Type [R]: Tobias + Maison Neue (both commercial); Repaint notes lavender headlines and pill-shaped buttons. h1 size not obtained.
- Platform [P]: Webflow asset host (cdn.prod.website-files.com).
- Structure [P]: cookie modal > hero (h1, three short lines, Book Now, image "swish-clinic.png") > "Why Switch to Swish?" (3 blurbs with small logo icons) > Locations cards with photos > Our Team > Our Services (9 named cards) > purple background image > "Say ahhhh..." + Book Now > newsletter "Stay in the loop" > footer.
- Nav/CTA [P]: Services, Locations, Meet Swish, Very Well by Swish, The Fresh Press; "Book Now" three times.
- Voice [P]: "Where oral care meets self-care." / "Swish, the original departure from the traditional dental clinic." / "Yep - we do Botox and Dysport here." / "Say ahhhh..."
- Motion/libraries: not obtained.
- Human touch: image alt text records a neon sign reading "Of Course I Floss Daily"; the blog is called "The Fresh Press"; photographers are credited.

### 2. Canary Dental - https://canarydental.ca/ - Toronto, Canada (founder-led single practice)
- Targets: adults who have been avoiding the dentist; anxious patients.
- Palette: hex not obtained. Asset filenames [P] point to pink and black accents ("arched-pink-dots-texture.png", "pink-arrow-up.svg", "black-arrow-right.svg"). Type: not obtained. Platform [P]: WordPress.
- Structure [P]: hero photo + H1 + 5-star graphic + two CTAs > pink dot texture > founder quote > team photo > 5 comfort features with icons > reviews > "What brings you in?" (3 named service blocks) > technology (3) > switch CTA > FAQ (7) > closing CTA > team photo > studio/hours > Instagram.
- CTA [P]: "Book & Smile", "Call (416) 900-1902", "350+ 5-Star Google Reviews", "Book a Cleaning", "Book Cosmetic Consult". No nav menu appeared in the extracted text.
- Voice [P]: "I started Canary Dental to make going to the dentist feel good." / "Not fine. Not tolerable. Actually good." / "this is your sign." Services are named "The Daily Essentials", "The Smile Maker", "The Advanced Solutions". Comfort list includes weighted blankets, headphones, Netflix.
- Human touch: section titles are jokes that carry the brand ("Catch Us Grinning", "Made You Smile", "Let's be friends!").
- QA flags seen in text: a service block repeated twice and six empty "Made You Smile" headings.

### 3. The Gleamery - https://thegleamery.com/ - Los Angeles, USA (cleaning / whitening / aligner studio)
- Targets: LA adults buying dental like a beauty service.
- Palette: hex not obtained; logo files are named "logo-crimson", "logo-olive", "logo-black" [P]. Type: not obtained. Platform [P]: Shopify paths (/cdn/shop/).
- Structure [P]: promo bar > header > two hero slides > Google reviews badge > service card grid (8) > 6 "done differently" features with icons > studio photo carousel (7) > before/after pairs > pricing cards > 4-step process > comparison table vs traditional dentistry > reviews > press logos (Vogue etc.) > insurance > FAQ.
- CTA [P]: "Book Now", "Book your free consult", "New Guests save $75", plus per-product buttons ("Book Shine Now").
- Voice [P]: "To us, smile-care = self-care." / "No needles. No drills. Just comfort-first dentistry." / "choose your vibe".
- Notable [P]: prices are on the homepage as named products (Clean $199, Polish $249, Sparkle $349, Shine $449, Radiate $549, Gleam $649); comforts listed are eye masks, noise-cancelling meditations, massage boots.
- Human touch: the product naming ladder (Clean, Polish, Shine, Radiate, Gleam) is a written system, not a service list.

### 4. Grand Street Dental - https://www.grandstreetdental.com/ - Williamsburg, Brooklyn, USA
- Targets: style-conscious Brooklyn adults; cosmetic focus. Site credit: WILD FUTURE.
- Palette [C] (theme stylesheet, declared): lime #CCFF33 (banner h1), hover lime #E1FF3B at 60% alpha, sky #72CEEC (h2), purple #772A8A (links/hover), butter #FCF29E (primary button), slate #3B667C (header button, serif headings), body grey #666666, button text #2E2E2E.
- Type [C]: Gotham and Gotham Narrow (commercial), Superior Title 600 (commercial), Georgia. Banner h1 60px Gotham Narrow Bold uppercase, 40px/35px on mobile; h2 48px uppercase; body Gotham 16px weight 300; nav 12-14px; buttons 14px/16px weight 600 uppercase, letter-spacing .5px, min-width 180px.
- Radii and motion [C]: no border-radius declared in the theme stylesheet; no @keyframes; transitions of 0.3s to 0.5s on nav and buttons. Caveat: a theme file can hold unused legacy rules.
- Structure [P]: top bar (phone, "book") > hero "Dentistry Redesigned" with rotating press-quote cards (NY Magazine, Forbes, Wired) > photo slideshow (5) > before/after pairs > "Patient Stories" grid of 16 photos > Complete Care > We're All Smiles > quick actions (GALLERY, CALL, BOOK, CONTACT) > hours > contact.
- Voice [P]: "Dentistry Redesigned" / "Using wit, warmth and creativity, Grand Street Dental is totally re-imagining the experience of going to the dentist."
- Human touch: the only palette in this study that is loud on purpose and verified from source.

### 5. LAVA dental - https://lavadental.lv/en - Riga, Latvia
- [A] Awwwards Honorable Mention, 19 Jan 2026, by DigiComm and Reinhards. Tags: Luxury, Animation, Parallax, Single page, Filters and Effects, SVG, After Effects, Figma. Published colours #031C14 and #AABEAF (near-black green, sage).
- Type: not obtained. Platform [P]: Nuxt image paths (/_ipx/).
- Structure [P]: header with en/lv/ru > hero (background image, h1, tagline, CTA) > process carousel > 9-image process gallery > "foil" background + manifesto > 6 value blocks > before/after results > 10 numbered services > team with tabs > vacancies > price list with tabs > FAQ > location with map SVG > footer.
- CTA [P]: "Make an appointment" three times.
- Voice [P]: "Dentistry that will make you smile" / "Safe, modern, painless and with a smile!" / "That's us - LAVA dental studio." Manifesto compares a visit to "flying in first class".
- Notable [P]: first price is stated (diagnostics "The Perfect Smile", 280 EUR) with six bullets; every patient gets a named coordinator.
- Motion: Awwwards tags only; not observed.

### 6. Aventura Dental Arts - https://aventuradentalarts.com/ - Miami area, USA (cosmetic)
- [A] Awwwards Site of the Day, 19 Mar 2026, by The First The Last; score 7.41/10, Developer Award. Tags: Big Background Images, Interaction Design, Photo & Video, Figma. Published colours #EAE8E8 and #14151D.
- Type: not obtained.
- Structure [P]: header (Menu, Services, Patient form, Book A Call, "Based in: Aventura, Bay Harbor, Coral Gables") > hero title + tagline > goal paragraph > 4-image strip > "Our Solutions" (4 cards) > 4 service categories > "Modern Dentistry: Faster / Smarter / Pain-Free / Technology-Driven" > technology (6 images) > team (3 bios) > testimonials with "01 / 04" counter > closing CTA + short form > footer with three locations.
- Voice [P]: "Premium Esthetic Dentistry" / "We combine advanced science with an artist's touch." / "Ready to Transform Your Smile? Book a call."
- Note: one heading came through garbled in extraction, which suggests layered or animated text; unverified.

### 7. Zen Dental Studio - https://www.zen.dentist/ - San Francisco and Mountain View, USA
- Palette/type: not obtained. Platform [P]: Next.js paths (/_next/).
- Structure [P]: header > hero photo (alt: wood-lined treatment studio in morning light) > h1 + "Book a Visit" / "Call Now" > five numbered "How we care" cards > testimonials > services grouped everyday / signature / urgent > technology (6 cards) > "The Details" amenities list > patient stories > "Two studios, one standard" > closing CTA.
- Voice [P]: "Modern dental care, thoughtfully delivered." / "Digital scans instead of goopy molds." / "Nervous at the dentist? We get it, and we'll take things at your pace."
- Human touch: headings are full plain sentences ("You'll always know what's going on and why.").

### 8. Tend - https://www.hellotend.com/ - NYC, Boston, DC, Atlanta, Nashville, USA
- Keep for positioning only. [P] the footer reads "Managed with Tymbrel", and the page has "Accessible Version / Standard Version" toggles and the same asset hosts as the generic Cambie Village Dental site below.
- Identity [F] (dated April 2019): Nantes + Founders Grotesk (both commercial), wordmark possibly a modified Recoleta; by Mythology with Tend in-house. Current site fonts and colours not obtained.
- Hero [P]: h1 "Look forward to going to the dentist"; "Whether it's been 6 months or 6 years, we make it easy to get back to the dentist with no judgment, ever." Hero image filenames are model headshots on blue and yellow backgrounds.
- Nav/CTA [P]: Core Services, Special Services, Locations, Patients, About, "Book Now"; "Find a dental studio near you".

### 9. MINEMAL Dental Aesthetics - https://minemal.dental/ - Miami, USA (two founders)
- [A] Honorable Mention, 14 Nov 2024, by Evgenii Astapov. Tags: Animation, Parallax, Typography, Gallery. Colours #242424 and #F6F4EF. Platform [P]: Tilda.
- Voice [P]: "HIGH-END DENTISTRY ACCESSIBLE TO ALL." / "( Pronounced: min-eh-mal )" / "We are Alex and Victor, dentists and we are redefining what people can expect from dental care."
- Human touch: hero is the two founders (alt: "looking away, artistic photo") and the name is explained like a dictionary entry.

### 10. Rüh Dental - https://www.ruhdental.com/ - London and Manchester, UK (cosmetic)
- Palette/type: not obtained. Platform [P]: WordPress. The hero headline is delivered as an image file.
- Structure [P]: offer banner > hero (h1, two CTAs, rating) > press strip (Tatler, HELLO!, SheerLuxe) > transformations carousel > 3-step "Align / Enhance / Replace" > three pillars > patient video stories (YouTube/Instagram) > clinics (flagship in Harrods) > founder quote > free consultation.
- CTA [P]: "Book a free consultation", "WhatsApp us". Proof line: "4.8 on Google · 1,100+ reviews", "10,000+ smiles transformed". "From" prices are listed (Invisalign from £2,199).
- Voice [P]: "Some smiles need one step, some need all three."

### 11. Impress - https://smile2impress.com/us - aligner clinic network (footer: SMILE2IMPRESS SL), 10 countries
- Palette [R]: #012EF4, #F1272B, #FFFFFF, described as bold red and blue colour blocks. Type [R]: Inter Display + Inter.
- Structure [P]: hero > stats and monthly price > "Tell us your goal" (4 options + quiz) > proof numbers > before/after gallery > 4 values > FAQ.
- CTA [P]: "Book a complimentary visit", "Take the quiz", "Find my fit", "Book a smile assessment".
- Voice [P]: "The ultimate glow-up powered by Invisalign".

### 12. Arbor: A Dental Concept - https://www.arbordentalnyc.com/ - Long Island City, NYC
- [A] Awwwards Nominee, 18 Oct 2025, by Studio8E8. Tags: Animation, Transitions, Storytelling, GSAP, BARBA.js, Webflow. The only site with named animation libraries.
- [P] h1 "Dentist in Long Island City, NYC"; "Biometrically Designed Dental Care"; "Their words, not ours."; CTAs "Book An Appointment", "you're invited".
- QA flags in text: phone shown as "(000) 000-0000", empty alt text, keyboard-mash image filenames.

### 13. Dr. Molly Rosen - https://www.mydentistmolly.com/ - Philadelphia, USA (single dentist)
- [P] Webflow. "A new kind of dentistry"; h1 "Your Dentist in Philadelphia, PA"; "visits that sometimes feel like therapy"; "Life's too short to worry about your smile." Hero image alt: a stack of five books on a small table.

### 14. South Cliff Dental Group - https://southcliffdentalgroup.com/ - southern England, UK (NHS + private)
- [A] Honorable Mention, 16 Jun 2026, by ThisIsLD. Tags: 3D, WebGL, Three.js, Next.js, Storytelling, Microinteractions. Colours #81703F and #28313B. The 3D layer is not visible to a text fetch; unverified.
- Voice [P]: "Dental practices that tell you exactly what you're getting, in a language that actually makes sense."

### 15. Dentologie - https://dentologie.com/ - Chicago and Seattle, USA
- Live page returned only its title ("Dentists Who Are Different by Design"). [R] only: Playfair Display + Inter; #F5F1EB, #B4EBDC, #F2C4B3 (cream, mint, peach).

### 16. Luca Aesthetic - https://www.lucaaesthetic.com/ - Woods Cross, Utah, USA (cosmetic)
- [P] Webflow. Hashtag headings ("get a #lucasmile"), "watch the live reveal" videos, Instagram/TikTok embeds, "517 Smiles Created"; logo alt "pink stylized text logo". [S] the builder's own article describes hot-pink branding, a hero video and smooth animations.

Also checked, lower value for us: Beam Dental https://www.mybeamdental.com/ (NY/NJ; membership "alternative to dental insurance"; orange icon set); Kissdental https://www.kissdental.co.uk/ (Manchester; [R] Tondo + Mark Pro, navy #021E31 and gold #C59A43; "Click to reveal the smile!" hero); Dental Boutique https://dentalboutique.co.nz/ (Auckland; [R] Beausite Fit, #21201E, #D5C1A9); Atelier Dental https://atelierdental.com.au/ (Sunshine Coast, Australia; Awwwards nominee 2023; leftover email domain of another practice); Zahnarztpraxis Natalie Herzel https://www.herzel-zahnarzt.de/ (Hamburg; nominee 2024; "Es tut nicht weh, bei uns zu sein"); Perl Smile Co. https://www.perlsmile.co/ (Atlanta); Love Dental Studio https://lovedentalstudio.com/ (Washington DC; [R] Poppins, #F6EFE7, #E8AF8B, #57603E).

## 2. The generic dental-site fingerprint (what to avoid)

Sites examined:
- Advanced Dental Care, https://www.advanceddentalcare.com/ (Providence, USA) [P]: h1 "Dentist in Providence RI"; hero and section photos are files named AdobeStock_262513359.jpeg, AdobeStock_33367206.jpeg and so on; "Request Appointment"; six service cards each ending "Learn more"; "where your smile is our top priority". [R] Nunito Sans; #172457, #4C82F7, #F3F6FF.
- Cambie Village Dental, https://www.cambievillagedental.com/site/home (Vancouver) [P]: three-slide hero slider; h1 "Dental Care for Vancouver's Smiles"; "Accessible Version / Standard Version"; six service cards with "Learn More"; one slide's alt text names a different town ("Fort St. John, BC"). [R] Nunito + PT Sans; #39A543, #1C7E3A.
- Downtown Dental Centre, https://www.downtowndentalcentre.ca/ (London, Ontario) [P]: Squarespace; hero image file "Pond-Ripples"; "FAMILY ORAL HEALTH"; "GET STARTED"; service cards are "Instagram Post 1080x1080" images; "A dentistry clinic you can trust."
- Hue Dental, https://www.huedentalca.com/ (Los Angeles) [P]: Wix; two h1s ("HUE DENTAL", "Your Smile, Our Mission"); seven services each with "Book Now".
- The Tooth Co., https://www.thetoothco.com/ (Irvine) [P]: h1 "Your Dentist in Irvine, CA"; accessibility widget (Increase Text, Grayscale, High Contrast); "Request an Appointment"; "Areas We Serve" in the nav.

Concrete traits:
1. h1 is a search phrase: "Dentist in {City}" or "Your Dentist in {City, ST}".
2. CTA says "Request Appointment"; secondary CTAs are a stack of "Learn More".
3. Copy opens "Welcome to..." and promises "your smile is our top priority", "comfortable", "state-of-the-art", "the whole family".
4. Six equal service cards; a slider hero; stock photography (literally AdobeStock filenames) or reused social tiles.
5. Hue [R, across Repaint's 36 dental sites]: the conventional ones cluster on blue and teal (#2CB1E3, #0B8AAC, #00AFAA, #06BAB5, #38BFF0, #5591B7, #006FB9, #004277) and one rounded or geometric sans (Nunito Sans, Poppins, Montserrat, Barlow, Outfit, Karla).
6. Accessibility-toggle widgets and "areas we serve" lists bolted on.

A second, "boutique" template also exists. Four sites built by Studio Eighty Eight (Arbor, Dr. Molly Rosen, SoBo Dental Care https://www.sobodentalcare.com/, Luca) share a scaffold [P]: an SEO h1, four one-word value headings (Extra-Ordinary / Empowering / Effortless / Elevated; Connected / Compassionate / Comfortable / Comprehensive), CTAs "You're invited" or "Be Our Guest", "MEET THE TEAM", "HOURS & LOCATION", and a modal "Request An Appointment" form. Copy is templated too: Perl Smile Co. uses "Look forward to the dentist" and "Care at Perl Smile Co. isn't just painless, it's a pleasure", both of which are Tend's lines with the name swapped.

## 3. Patterns across the best young-audience sites

- Palette: warm cream base plus one or two candy accents. Swish cream/violet/lilac/marigold [R]; Dentologie cream/mint/peach [R]; Love Dental cream/peach/olive [R]; Canary pink (filenames). Saturated exceptions are Impress (cobalt + red) [R] and Grand Street (lime, sky, purple, butter) [C]. Award-winning cosmetic studios go dark neutral instead: #14151D/#EAE8E8 (Aventura), #242424/#F6F4EF (MINEMAL), #031C14/#AABEAF (LAVA) [A].
- Type: serif display + neutral grotesk for the lifestyle brands (Tobias + Maison Neue at Swish [R]; Playfair Display + Inter at Dentologie [R]; Nantes + Founders Grotesk in Tend's 2019 identity [F]; Superior Title + Gotham at Grand Street [C]). The aligner chain is all-sans (Inter Display) [R].
- Imagery (from alt text and filenames only): real studio interiors, founders, patient before/after pairs; icons for feature lists. Stock is absent from the good ones.
- Section order: hero > 3 to 6 differentiators > named services > reviews > locations > FAQ > closing CTA. US sites add an insurance block.
- CTA wording: "Book Now" dominates (Tend, Swish, Gleamery); variants "Book a Visit" (Zen), "Book & Smile" (Canary), "Book a free consultation" (Rüh), "Book A Call" (Aventura). Never "Request".
- Tone: self-care and calm. "Where oral care meets self-care." (Swish), "smile-care = self-care" (Gleamery), "calming dentistry designed to rejuvenate" (Canary), "calm, well-designed spaces" (Zen), "Soothing studios" (Tend). And a reinvention claim: "Dentistry Redesigned", "A new kind of dentistry", "Dental Care Done Differently", "Dentistry, reimagined."
- Named products and comfort menus: Gleamery's ladder, Canary's three blocks, Swish's "The Essentials" and "Fresh 5"; Netflix, blankets, eye masks, massage boots.
- Proof in the hero: Google rating plus count (Canary, Rüh, Beam, Gleamery).

## 4. Whitespace / opportunities

1. Energy. Every young brand observed sells calm, spa or self-care. None positions as upbeat. A high-energy practice is unclaimed tonal territory, and it matches the client brief.
2. Colour. The field splits into blue/teal generic, cream-and-pastel lifestyle, and dark-neutral luxury. High-chroma colour blocking appears only at a chain (Impress) and one Brooklyn practice (Grand Street).
3. Stop claiming to reinvent dentistry. "Redesigned / reimagined / different / a new kind of" appears on at least six sites and is now the cliché.
4. A real price and duration in the hero. Gleamery, Rüh and LAVA publish prices, but lower on the page. Nobody observed puts "first visit, this price, this long" next to the booking button.
5. The dentist as narrator. Founder voice appears as a mid-page quote (Canary, Rüh) or an about block (MINEMAL). No observed homepage is written in the dentist's first person from the headline down.
6. A new practice has no reviews. Every strong site leans on a rating count, so we need different proof (hours, price, what the first visit includes) instead of invented numbers.

## 5. Three candidate directions (provisional until someone confirms layout in a browser)

### A. "Loud and clear" - RECOMMENDED by this agent (rank 1)
- Borrows: colour blocking from Impress [R]; lime display colour, square uppercase buttons and butter button fill from Grand Street [C]; blunt voice from Canary [P]; named products with prices from Gleamery [P]; secondary chat CTA from Rüh's "WhatsApp us" [P]; flat colour-field portraits from Tend's hero image filenames [P].
- Palette: cobalt #012EF4 (Impress), lime #CCFF33 (Grand Street), butter #FCF29E (Grand Street), cream #FFF6E4 (Swish), ink #14151D (Aventura), tomato #F1272B (Impress, large type and graphics only). Contrast by the agent's own calculation: cobalt on cream about 7.2:1, lime on ink about 15.5:1, white on cobalt about 7.8:1, tomato on cream about 3.9:1.
- Type: Barlow Condensed 700-800 uppercase for display, standing in for Grand Street's Gotham Narrow Bold uppercase 60px h1; Inter 400-600 for text and UI (in use at Impress and Dentologie [R]). Both are open-licensed (OFL, checked in the google/fonts repository today). Caveat: Barlow was reported in use at JT Orthodontics [R]; the Condensed cut itself was not seen on any site.
- Hero concept: full cobalt field, cream uppercase headline in the dentist's first person, the dentist's real portrait on a flat lime panel, a lime "price tag" chip stating first-visit price and minutes, square butter "Book now" button plus a text-us link, and one line of hours instead of a review count.
- Why first: it is the only direction that occupies the gap in section 4 and it fits "high-energy".

### B. "Self-care, turned up" (rank 2)
- Borrows: palette and pill buttons from Swish [R]; mint from Dentologie [R]; serif plus grotesk pairing from Swish/Dentologie/Tend; plain-sentence headings from Zen [P].
- Palette: #FFF6E4, #816EE7, #D4CAFF, #F1B742 (Swish), #B4EBDC (Dentologie), ink #21201E (Dental Boutique).
- Type: Newsreader (in use at iSmile Dentistry [R]) or Playfair Display (Dentologie [R]) with Inter; all OFL, checked today. Swish's own Tobias and Maison Neue are commercial.
- Hero concept: cream page, large lowercase serif headline, violet pill "Book now", studio photo with a marigold sticker for the first-visit offer.
- Why second: proven with this audience, but it lands next to Swish and Dentologie and reads calm, not energetic.

### C. "After dark" (rank 3)
- Borrows: dark neutral base from Aventura, MINEMAL and LAVA [A]; one acid accent from Grand Street [C]; founders-as-hero from MINEMAL [P]; stated first price from LAVA [P].
- Palette: #14151D, #EAE8E8 (Aventura), #F6F4EF (MINEMAL), #031C14, #AABEAF (LAVA), #CCFF33 (Grand Street).
- Type: Bodoni Moda (in use at SoBro Dental [R]; OFL, checked today) with Inter.
- Hero concept: near-black page, oversized high-contrast serif headline, one lime underline and lime button, black-and-white portrait.
- Why third: it copies the award-winner look, which codes as expensive cosmetic dentistry and is the least energetic.

## 6. Capture list for a browser pass

Handed to `visual-capture`; see `01b-visual-capture.md`. Mobile + desktop: Swish, Canary, The Gleamery, Grand Street Dental, LAVA dental, Aventura Dental Arts. Desktop only: Zen, Impress, MINEMAL, Rüh, Arbor, South Cliff, Dentologie, Dntl Bar. Specifically confirm the Repaint hexes for Swish, Impress and Dentologie, and whether Grand Street's lime and 60px uppercase h1 are live or legacy CSS.

## 7. Failed or unverified

- No browser tools in this agent's session: no screenshots, computed styles, motion or mobile.
- One attempt to read raw page HTML through a public proxy was blocked by the permission system; it was not retried or routed around.
- Rendered nothing to a text fetch: Dntl Bar (https://www.dntlbar.com/ and apex), Tooth Club (https://www.toothclub.co.uk/), Dentologie (title only), Big Apple Media roundup.
- Dead or wrong leads: beamstreet.com does not resolve (the brand is now Beam Dental); wallyhealth.com redirects to a domain-sale page; moderndentist.co.uk redirects to a domain-sale page; kindental.com is a clinic in Tokyo, not the intended lead; get-grin.com is a provider-facing platform; mintd.com.au does not resolve and mintdsmile.com.au has an expired certificate; twofront.com does not resolve.
- Galleries: Lapa Ninja and Land-book returned 403, Httpster 404, Godly redirects to another domain (not followed); site-restricted searches for Land-book, Godly and Siteinspire returned nothing. Gallery evidence therefore comes from Awwwards, Made in Webflow and Repaint only.
- Not opened: Awwwards nominees Tetri's Smile Dental Boutique (links to virtual.limited/street.html), Nova Dental (a webflow.io staging URL), Clínica Dental Dr. M. Esteve (https://dentistapalamos.com/en/).
- Stylesheets for Herzel and Dental Boutique were fetched but held only base or header content, so they gave no design values.

## 8. Sources (every URL visited)

Live sites: https://www.hellotend.com/ · https://swishoralcare.ca/ · https://canarydental.ca/ · https://thegleamery.com/ · https://www.zen.dentist/ · https://www.grandstreetdental.com/ · https://www.grandstreetdental.com/wp-content/themes/plotnick/style.css · https://lavadental.lv/en · https://aventuradentalarts.com/ · https://minemal.dental/ · https://www.arbordentalnyc.com/ · https://www.mydentistmolly.com/ · https://www.sobodentalcare.com/ · https://www.lucaaesthetic.com/ · https://www.ruhdental.com/ · https://smile2impress.com/us · https://southcliffdentalgroup.com/ · https://www.mybeamdental.com/ · https://www.kissdental.co.uk/ · https://dentalboutique.co.nz/ · https://atelierdental.com.au/ · https://www.herzel-zahnarzt.de/ · https://www.perlsmile.co/ · https://lovedentalstudio.com/ · https://orthosouth.co.nz/ · https://www.advanceddentalcare.com/ · https://www.cambievillagedental.com/site/home · https://www.downtowndentalcentre.ca/ · https://www.huedentalca.com/ · https://www.thetoothco.com/ · https://get-grin.com/ · https://www.kindental.com/ · https://dentologie.com/ · https://www.dntlbar.com/ · https://www.toothclub.co.uk/

Galleries, awards, references: https://www.awwwards.com/websites/?text=dental (pages 1 and 2) · https://www.awwwards.com/sites/aventura-dental-arts · https://www.awwwards.com/sites/south-cliff-dental-group · https://www.awwwards.com/sites/lava-dental · https://www.awwwards.com/sites/minemal-dental-aesthetics · https://www.awwwards.com/sites/arbor-a-dental-concept · https://www.awwwards.com/sites/atelier-dental · https://www.awwwards.com/sites/natalie-herzel-dental-clinic · https://www.awwwards.com/sites/nova-dental · https://www.awwwards.com/sites/tetris-smile-dental-boutique · https://www.awwwards.com/sites/clinica-dental-dr-m-esteve · https://www.awwwards.com/sites/dental-brothers · https://repaint.com/website-examples/dental · https://webflow.com/made-in-webflow/dental · https://webflow.com/made-in-webflow/website/smile-doctor-sydney-qagency · https://fontsinuse.com/uses/31460/tend-dental · https://www.mythology.com/project/tend · https://s8e8.com/case-study-beam-dental · https://s8e8.com/articles/best-dental-websites · https://delmain.co/blog/best-dental-websites · https://azurodigital.com/dental-website-examples/ · https://www.krishaweb.com/blog/best-dental-website-designs.md · https://cyberoptik.net/blog/best-orthodontist-website-designs · https://dentistry.co.uk/2023/10/15/tooth-club-creating-a-recognisable-and-stylish-brand/ · https://raw.githubusercontent.com/google/fonts/main/ofl/ (inter, barlowcondensed, playfairdisplay, newsreader, bodonimoda METADATA.pb)
