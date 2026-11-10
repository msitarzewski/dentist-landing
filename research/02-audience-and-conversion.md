# 02 — Audience, content and conversion research

Research date: 2026-11-09. Scope: one landing page for a new general + cosmetic dental practice whose patients are mostly in their 20s and 30s. Visual design and animation are covered by other teammates; this file covers who the visitor is, what the page has to say, in what order, and what is known to convert.

## How to read this file

- **Method.** Desk research only. Every number below was read this session from the linked page or PDF unless it is explicitly marked *secondary* (seen only in a search-result summary, source not opened). No interviews, surveys or usability tests were run, so the personas and the outline are hypotheses to validate, not validated findings.
- **Confidence labels.** *High* = primary source read directly, 2024–2026, reasonable sample, relevant population. *Medium* = primary but vendor-run, self-selected sample, single source, or not split by age. *Low* = indirect, older than 2023, from another sector, or my inference from several weaker signals.
- **Biggest limitation.** Very few surveys split results for people in their 20s and 30s. Where a number covers all adults or all healthcare (not dental), the table says so.
- **Site teardowns** are based on the server-rendered HTML of each homepage fetched on 2026-11-09. Content injected by JavaScript (review widgets, booking widgets, whether a header is actually sticky) is not visible that way, and DOM order can differ slightly from visual order.
- **Instructions inside pages.** None of the fetched pages contained instructions aimed at automated agents. Three domains were discarded as unsafe or wrong: `lydiandental.com` now redirects to an unrelated site, `toothclub.com` is a Los Angeles children's practice (not the UK brand), and `wally.health` / `wallyhealth.com` are parked domains (the live site is `carebywally.com`).

---

## 1. Key findings

Source keys such as [S1] refer to the full source list in section 9.

### 1a. Who is not going, and why

| ID | Finding | Evidence | Source, year | Confidence |
|---|---|---|---|---|
| F1 | Young adults are the age group least likely to have seen a dentist in the last year. This audience is largely "overdue", not "between cleanings". | 63% of adults aged 18–29 had a dental visit in the past year vs 77% of those 60+ (70% all adults). Separately, "nearly one in three" adults aged 18–35 had no dental visit in the past 12 months, the highest of any age group. | [S1] CareQuest Institute SOHEA, 2025 (n=9,450, NORC panel). [S2] Tufts / *Frontiers in Oral Health*, 2025 (about 128,000 adults, NIH All of Us data) | High |
| F2 | Cost and coverage are the stated reasons. A quarter of adults have no dental coverage at all. | People who skipped dental care "most often pointed to cost and lack of insurance coverage" [S2]. 26% of US adults (69 million) have no dental coverage, three times the share without medical insurance (8%) [S1]. Not split by age. | [S1] 2025, [S2] 2025 | High (all adults); age split not available |
| F3 | Dental fear is the norm, not a niche. How big depends on how you ask. | 72.6% of US adults report some dental fear: 45.8% moderate, 26.8% severe (n=1,003). A separate insurer survey that asks about "dental anxiety" finds about 1 in 5 adults (20%). Neither figure was available split by age. | [S3] NYU College of Dentistry, published in *JADA*, 2025. [S4] Delta Dental, 2026 (n=1,000 adults, fielded Jan 2026) | High that it is widespread; Medium on size; Low for a 20s–30s figure |
| F4 | What anxious patients are actually afraid of: pain, a bad past visit, the sensory environment, and the bill. Their memories include being judged. | Among adults with dental anxiety: "I thought it would be painful or uncomfortable" 50% (59% a year earlier), "unpleasant experiences at the dentist in the past" 39% (48%), "the sounds and smells of the dentist's office stress me out" 29% (39%); discomfort and financial cost are named as the leading drivers [S4]. Fearful patients recalled "humiliation", not being listened to or believed, and dentists "recommending unnecessary treatments" [S3]. | [S4] 2026 (chart values read from the PDF text), [S3] 2025 | Medium |
| F5 | The comfort features anxious adults ask for are cheap and concrete. | Top requests from adults with a history of dental anxiety: shorter wait times 35%, noise-cancelling headphones 34%, streaming media options 33%. | [S4] 2026 | Medium (single survey) |
| F6 | Younger adults are more likely to need actual treatment, which raises the stakes on judgment and cost. | Cavity fillings were the most common dental treatment of 2025, "and younger adults were more likely to report needing them (43% Gen Z, 40% Millennials, 29% Gen X, 29% Boomers)". | [S4] 2026 | Medium |
| F7 | Gen Z increasingly frames oral care as self-care and wellbeing, which fits an upbeat brand. | 81% of Gen Z agree protecting oral health is closely connected to mental health (73% a year earlier); 89% say dental visits are as essential as physicals (75%); 48% rate their oral health positively (31%). | [S4] 2026 | Medium (Gen Z subsample size not published) |

### 1b. How they choose

| ID | Finding | Evidence | Source, year | Confidence |
|---|---|---|---|---|
| F8 | Reviews come first, the practice website second. People under 35 are the most likely to be shopping for a new dentist. | 67% of people looking for a new dentist use online reviews; of those 81% use Google, 45% Yelp, 30% Facebook. 76% look for location and insurance information inside reviews. 77% did or would look at the dentist's website before switching. "Patients under 35 years old are the ones who are most likely to seek a new dentist." | [S8] Dandy / Isurus Market Research, reported Dec 2023 (n=600 US adults) | Medium–High (dental-specific, but 2023 and vendor-commissioned) |
| F9 | The thresholds are harsh, and getting harsher. A brand-new practice starts below them. | 79% of patients read reviews before choosing a provider; 53% won't consider one with fewer than 4 stars; 44% say the practice website influences their choice (all healthcare, n=3,964) [S7]. 47% of consumers won't use a business with fewer than 20 reviews; 74% only care about reviews from the last three months; 31% require 4.5+ stars (17% a year earlier) (all local businesses, n=1,002) [S9]. On Zocdoc, dental providers with 10–29 reviews received nearly 3x the bookings of those with 1–9, and those with 50–99 received 6x [S5]. | [S7] Tebra, 2025. [S9] BrightLocal, 2026. [S5] Zocdoc, 2023 booking data published 2024 | High for direction; none of the three is split by age |
| F10 | After reading good reviews most people keep researching, and the website is the next stop. The page has to finish the job the reviews started. | After reading positive reviews, 54% visit the business website (32% in 2019); 66% do more research while 34% go straight to buying or booking. | [S9] 2026 | Medium (all local businesses) |
| F11 | The words people look for in dentist reviews are about manner, not technology. Explanation and cost honesty drive satisfaction. | Most searched words in reviews: "nice, friendly, caring, helpful, kind, patient, and understanding". 93% of patients who said procedures were explained well rated their dentist 5/5. 62% of people who switched because of a poor experience rated the dentist low on transparency. 68% were satisfied with dentists who were honest about total cost. | [S8] 2023 | Medium |
| F12 | Real photos of the place and the people measurably help (on a marketplace). | Dental providers with 1–3 office photos received 2x the bookings of those with none; 4+ photos received 3x. | [S5] 2023 data | Medium (marketplace listing, not a practice website) |
| F13 | Insurance acceptance is a primary filter for the insured majority. | Nearly 90% of Zocdoc dental bookings are in-network on a commercial plan [S5]. 77% of patients say it is important that the provider can tell them what insurance covers before treatment [S6]. | [S5] 2023 data, [S6] Experian Health, 2025 (n=1,004 US adults) | High |

### 1c. How they book and communicate

| ID | Finding | Evidence | Source, year | Confidence |
|---|---|---|---|---|
| F14 | Booking happens on a phone, outside office hours, for an appointment soon. | Of Zocdoc dental bookers: 55% are millennials (25–39) and 25% are 18–29; 60% booked on mobile; 48% booked between 5 p.m. and 9 a.m.; 41% booked an appointment within 4 days and 59% within 8 days; 4 in 5 booked within 20 miles. | [S5] Zocdoc, 2023 dental bookings, published Apr 2024 | Medium–High (large behavioural dataset, but people who already chose to book online) |
| F15 | Wanting self-service scheduling is close to universal. | 80% agree "I would like to schedule appointments anytime, from my home or mobile device". 65% prioritise getting an appointment as soon as possible. | [S6] 2025. [S7] 2025 | High (all healthcare) |
| F16 | The phone has not gone away, and it leaks. Keep it as a visible second route. | 41% of patients still prefer a phone call for scheduling [S7]. In one 26-practice dental group, 38% of 4,280 inbound calls went unanswered, and answered new-patient calls converted to an appointment 25.24% of the time vs 55.77% for existing patients [S11]. | [S7] 2025. [S11] Peerlogic, Feb 2026 (vendor case study, one group) | Medium for the preference; Low–Medium for the call data |
| F17 | Text is the preferred channel for reminders and follow-ups; phone for scheduling and billing. | Texts for reminders and follow-ups 48%; automated appointment reminders wanted by 47%; secure messaging 40%. | [S7] 2025 (all healthcare) | Medium; no dental-specific 2024–2026 survey was verified |
| F18 | Evidence for evening and weekend *appointments* is indirect. Evidence for after-hours *booking* is direct (F14). | Among patients who say access improved, 51% cite "appointments work with personal schedule"; among those who say it got worse, 31% cite appointments that don't [S6]. On Zocdoc, Tuesday is the most popular day and popularity "drops off on Fridays and into the weekend" [S5]. | [S6] 2025, [S5] 2023 data | Low–Medium |

### 1d. Money, memberships and cosmetic interest

| ID | Finding | Evidence | Source, year | Confidence |
|---|---|---|---|---|
| F19 | Not knowing the cost stops people booking. Saying the price, or promising an estimate first, is a conversion lever and a satisfaction lever. | 43% say they will likely postpone or cancel care without an accurate estimate; 81% say an accurate estimate helps them prepare to pay. Only 41% received an estimate before care in 2025. | [S6] 2025 (all healthcare) | High |
| F20 | Membership plans are common on youth-oriented practice sites, but real uptake looks small and I found no survey of young adults' attitudes to them. | 6 of 11 sites reviewed offer a membership or in-house plan (section 2). 26% of dentists offer an in-office plan and most say 5% or fewer of their patients are enrolled (about 950 dentists polled). | Section 2. [S16] ADA Health Policy Institute poll, July 2023, as reported by Dentistry33 | Low on demand; Medium on supply |
| F21 | Cosmetic work is the aspiration; a cleaning or exam is the way in. | Among adults who visited a dentist in 2025, 89% made a preventive visit and 5% a cosmetic visit [S4]. Top Zocdoc dental visit reasons are cleanings, consultations and new-patient exams; when patients self-pay the top reasons are veneers, cosmetic emergencies and braces/retainer checks [S5]. | [S4] 2026, [S5] 2023 data | Medium |
| F22 | Social media makes this age group self-conscious about teeth, which creates cosmetic interest and also a duty of care in how we talk about it. | 72% of Gen Z (53% of all respondents) compare their teeth to others on social media; 26% feel pressured to change their teeth; 29% have considered going to a dentist for aligners. | [S10] Forbes Health / OnePoll, reported June 2024 (n=2,000 US social media users) | Medium |

### 1e. What converts on a landing page: data vs opinion

| Tactic | What the evidence says | Evidence type | Verdict |
|---|---|---|---|
| Online scheduling as the primary action | 80% want anytime self-scheduling [S6]; 48% of dental bookings are made when the office is closed and 60% on mobile [S5]. | Survey + behavioural data | **Data-backed** |
| Click-to-call as a second action | 41% still prefer calling to schedule [S7]; but 38% of calls unanswered in one dental group [S11]. | Survey + one vendor dataset | **Data-backed as a secondary route**, with the caveat that a call button only works if someone answers |
| Reviews, rating and review count near the top | F8–F10, F12. | Several surveys + marketplace data | **Data-backed** |
| Price or an estimate promise on the page | F19. | Survey | **Data-backed** for stating cost clarity; no experiment found on showing exact dental prices |
| Insurance statement or checker | F13; 3 of 11 sites reviewed have a checker. | Survey + marketplace data + competitor practice | **Data-backed** for stating insurance; the checker itself is practice-led, no test data found |
| Short forms | "There's a correlation between fewer form fields (like one or two) and higher conversion rates" on medical landing pages [S13]. 31% of patients are frustrated by mobile forms that don't work well [S7]. | Correlational benchmark (2021) + survey | **Partly data-backed** (correlation, older) |
| Sticky booking button | One published test on a long e-commerce page: every sticky-button variant beat the control by at least 8%, the best by 25% in sales. The lowest-commitment label got the most clicks but fewer sales [S14]. NN/g guidance: keep a persistent header small, high-contrast and minimally animated, and consider one that reappears on scroll-up [S15]. | One agency case study from another sector + expert guidance | **Plausible, not proven for dental.** Low risk; treat as a hypothesis to measure |
| Real photos of the dentist and the office | F12. | Marketplace data | **Partly data-backed** |
| Before/after imagery | No quantified effect on bookings was found. 4 of 11 sites put it on the homepage, all cosmetic-led. | Competitor practice only | **Opinion.** Also the most regulated element on the page (section 6) |
| Positive, trust-oriented language over pain language | Medical landing pages over-index on fear (+197%), disgust (+200%) and sadness (+180%) words; pages with more trust and anticipation words tend to convert better [S13]. | Correlational benchmark (2021) | **Partly data-backed** |
| Long vs short copy | For medical pages, word count and reading ease "don't show much of a relationship with page performance" [S13]. | Correlational benchmark (2021) | **No evidence either way**; length should follow the questions people have |
| Mobile-first | 60% of dental bookings on mobile [S5]. | Marketplace data (2023) | **Data-backed**, though no current device split for practice websites was verified |
| Paid-search benchmark to judge the page against | Dentists & Dental Services: 10.67% conversion rate, $8.00 cost per click, $72.97 cost per lead, 5.66% click-through rate [S12]. An older benchmark calls anything over 3.6% "healthy" for medical practitioners' landing pages [S13]. | Platform benchmarks | **Data-backed**, as a yardstick only |

---

## 2. Competitor content teardown

Eleven homepages were read in full and one (Dentologie) only as a title. Sites that could not be read are listed in section 8.

### 2a. Hero, call to action and lead offer

| Site (market) | Hero headline (verbatim) | Subhead (verbatim) | Primary CTA; secondary | Offer it leads with |
|---|---|---|---|---|
| **Tend** — hellotend.com (US chain) | "Look forward to going to the dentist" | "Whether it's been 6 months or 6 years, we make it easy to get back to the dentist with no judgment, ever." | "Book Now"; phone number | None. Leads with attitude. |
| **Wally** — carebywally.com (US membership chain) | "GET a million-dollar smile for $249/year" | "Say goodbye to the drill forever with unlimited Swiss Airflow® dental cleanings, whitening, and more." | "Book an Appointment"; later "Become a Member" | Annual membership price in the headline; ribbon "LIMITED-TIME OFFER: GET $100 OFF" |
| **Swish Dental** — swishsmiles.com (Texas group) | "Seeing the dentist just got cooler" | "Welcome to Swish Dental, where seeing the dentist is something you actually look forward to. We are dedicated to helping you achieve your healthiest smile, delivering compassionate dental care and an extraordinary dental experience." | "Book an Appointment"; "Find a Studio Near You" | None in hero; "Get $2,000 Off Invisalign" sits inside the services section |
| **Toothbar** — toothbar.com (Austin independent) | "Top Cosmetic Dentists Serving the Austin Community" | No subhead. Three value blocks follow, the first reading "...you should expect a personalized, pain-free, shame-free experience delivered with a caring human touch." | "Become A Patient"; header "Book Appointment" and phone | None. The "Toothbar Lounge" (express cleanings and whitening) is the hook |
| **URBN Dental** — urbndental.com (Houston group) | H1 "Houston Dentists"; H2 "Modern Dentistry. Designed for You." | "Are you looking for a trusted dentist in Houston or Katy? At URBN Dental, we offer same-day appointments, emergency dental care, and comprehensive services tailored to your smile using advanced dental technology." | "Book An Appointment"; "Find Dentist Near You", "See Celebrity Gallery" | Top bar "Emergency Appointments Seen Same Day"; lower down a stack of free consultations and a "$99 Emergency Dental Exam" |
| **Core Smiles** — coresmiles.com (New York) | "Comprehensive Dentistry, Delivered with Precision." | "From routine care to advanced solutions, Core Smiles brings academic excellence and modern technology together to serve every stage of your oral health." | "Book now"; "Learn More" | None |
| **Grand Street Dental** — grandstreetdental.com (Brooklyn independent) | "Dentistry Redesigned" | "Grand Street Dental has redefined the dental experience and set a new standard for patient care and aesthetic dentistry." | "book" / "Book Online"; phone | None. Leads with press quotes |
| **Paste Dental** — pastedental.co.uk (Belfast independent) | "Say hello to Paste." | "We make going to the dentist fun!" then "We believe in ideal smiles." | "Book Online"; "Or call us" | Ribbon "Finance over 5 years - now that sounds interesting!" |
| **Rüh Dental** — ruhdental.com (London, Manchester) | "Confidence Begins With A Smile: Expert Cosmetic and Implant Dentistry in London & Manchester" | "Expert cosmetic and implant dentistry, delivered with artistry and care." | "Book a free consultation"; "WhatsApp us" | Free consultation; ribbon "10 Years of Rüh · Save up to £1,000 on your new smile" |
| **Banning Dental Group** — banningdental.co.uk (London) | No H1. First headline "Relax, this is more than just a dentist" | "...No misleading "from" prices, no hidden extras or surprises..." | "BOOK YOUR FREE CONSULTATION" | "Dental checkup only £30 including X-Rays" |
| **Sage Space** — sagespace.au (Sydney independent) | "The dental practice you didn't know you needed." | "Sage Space defies dental stereotypes by indulging every sense, at every touchpoint. We make dental health a pleasure." | "Book a ritual"; "Explore rituals" | None. Services are renamed "rituals" |
| **Dentologie** — dentologie.com (Chicago, Seattle) | Body not readable (JavaScript app). Page title: "Dentologie \| Dentists Who Are Different by Design \| Chicago & Seattle" | — | — | — |

### 2b. Price, insurance, anxiety, amenities, dentists, proof

| Site | Price and insurance | Anxiety and comfort | Amenities named | How dentists are shown | Social proof |
|---|---|---|---|---|---|
| Tend | No prices. "Most major PPO insurance accepted", carrier list, and "Check your insurance — Curious if your insurance will cover your exam? We can tell you in just a few seconds." "Flexible financing". | "no judgment, ever"; "judgment-free, prevention-first approach"; closing line "Care at Tend Dental isn't just painless, it's a pleasure" | "TV & free WiFi", "Soothing studios", "Complimentary brush bags with exam" | No individuals. "A top-rated clinical team" with four principles ("Outcomes, not quotas") and a link to meet the team | "Over 8,000 five star reviews"; carousel of 5-star reviews with first name, initial and studio; press logos |
| Wally | Price is the headline. "No insurance needed"; FAQ: "We don't work with insurance". Comparison table vs "traditional dentists" includes "Upfront, transparent pricing". | "NO DRILL GUARANTEE", "PAINLESS CLEANINGS", "scrape-free" | Technology rather than comfort (Airflow, 3D scans) | Three named clinical leads with credentials under "LED BY THE BEST CLINICIANS IN THE GAME" | "4.9 stars / 2K+ google reviews" in the hero; "400,000+ cleanings completed", "50,000+ Members"; before/after pairs; testimonials; "featured in" |
| Swish | No prices. "Most Insurances Accepted" with "Verify Your Coverage"; "Swish Smile Membership"; financing via named lenders. Section title "Dental Care for Every Wallet". | "Dental services in a relaxed, judgment-free environment"; "non-judgmental dental services" | "Home-like amenities to make you comfortable" (not itemised on the homepage) | Founder named in navigation ("Meet our Founder"); team page | "Over 10,000 5-star reviews and counting..."; five quoted reviews |
| Toothbar | "Toothbar accepts most major PPO insurance plans." "VIP Membership" mentioned. FAQ gives a US range for an extraction "$150 to $400" and promises "a trustworthy estimate". | "Not a fan of the dentist? We get it."; "shame-free"; two of five dentist bios are about anxiety ("anxiety-free", "committed to managing patient anxiety") | "we thoughtfully designed our dental suites to transport you somewhere else"; the Lounge; "Happy Hour" private whitening parties | Five dentists, each with a photo and a one- or two-sentence human bio; founders' story is the second section | "What Our Patients Say" section |
| URBN | "We Accept Most Major PPO Insurances" with "VERIFY YOUR DENTAL INSURANCE NOW"; "No Insurance? Ask Us About Our Discount Plan!"; "$99 Emergency Dental Exam" | "making every visit simple and stress-free" | None specific | "Our Houston Dentists" and team sections | Press logos, sports-team partnership, testimonials, before/after gallery, "Celebrity Gallery" |
| Core Smiles | None on homepage. "Transparent Planning" as a value. | Light: "comfortable" | None, apart from "Enzo, Chief Comfort Officer" in the team list | Five named dentists with credentials and focus areas | "Excellent on Google 4.8 (160)" with dated Google reviews |
| Grand Street | None on homepage | Hospitality framing through press quotes ("warmth, thoughtfulness and comfort") | The designed office itself | Founder-led; "We're All Smiles" team section | Eight press quotes directly under the hero; Instagram "Patient Stories"; before/after gallery |
| Paste | "Insurance accepted... we work with the UK's biggest and most popular providers"; "we also offer finance up to 5 years" so that "the cost doesn't bite!" | Playful tone ("We make going to the dentist fun!"); a navigation page titled "Pain free- What?" | "safe haven" city-centre studio; digital scanning "free from the gooey impressions of your childhood" | Team page only | Partner logos; reviews are a separate page |
| Rüh | "From" prices per treatment on the homepage (for example "Invisalign from £2,199", "Composite bonding from £410 per tooth"); "0% finance options available" | "honest advice and no pressure"; "no obligation" consultation | "Private, unhurried appointments in beautiful clinics" | Founder quote and "Meet the team" | "4.8 on Google · 1,100+ reviews / 10,000+ smiles transformed" in the hero; filterable before/after gallery labelled "Shared with patient consent. Individual results vary."; video "Smile stories" |
| Banning | "Dental checkup only £30"; fee guide; "Price Match Promise"; "WE BEAT ANY QUOTE"; premium membership card | "Relax"; "fun, calming, enjoyable" | "accessible 7 days a week" | Not on homepage | "Trust & Reviews" links; claim to be "the highest rated Dentists in the UK" |
| Sage Space | No figures on homepage, but "there are no hidden costs, what you see is what you pay" | Reframes care as pleasure and self-care; testimonial "I experienced no pressure or judgment" | Sensory "rituals"; curated retail products | Not on homepage | Six quoted testimonials with first name and suburb |

### 2c. Section order (top to bottom)

- **Tend:** hero → services carousel → "The Tend Dental difference" with review count and a grid of practical benefits (online booking, same-day, "Evening & Saturday hours", financing, PPO, TV and WiFi) → "Why people love Tend" reviews → studio locations → insurance and checker → "A top-rated clinical team" → blog → press → closing line and app download.
- **Wally:** offer ribbon → hero with rating → three big numbers → three-step "how it works" → problem/solution tabs (cavities, crooked, stained, bad breath), each with one statistic and a footnote → before/after → technology → "Wally vs. traditional dentists" table → testimonials → clinical leaders → locations → press → FAQ.
- **Swish:** hero → philosophy → six service cards → location finder → reviews → "You deserve the best dental care" (three reasons) → "Flexible Payment Options" (insurance, membership, financing) → Instagram → blog.
- **Toothbar:** hero with three value blocks → founders' story → who it is for ("Built For Downtown Austinites") → "Schedule Your Visit Now" → five dentists → reviews → the Lounge menu → services → office → insurance → FAQ → contact and hours.
- **URBN:** utility bar → hero → sponsorship → "Why URBN Dental?" → hiring banner → services → locations and insurance → discount plan → dentists → press → team → implants → testimonials → before/after → Saturday hours → final CTA → offer stack.
- **Core Smiles:** hero → eight service categories → four "why" points → standard/mission → named team → Google reviews → closing CTA.
- **Grand Street:** hero → press quotes → cosmetic before/after → Instagram patient stories → services → team → action bar (Gallery / Call / Book / Contact) → hours and contact.
- **Paste:** finance ribbon → hero → five benefit blocks (health first, insurance, cosmetic, digital, emergency cover) → partners → "We do dentistry differently." → location → contact form → newsletter.
- **Rüh:** offer ribbon → hero with rating → press → before/after gallery → three treatment lanes with from-prices → "why" with evening/weekend and finance chips → video stories → clinics → founder → "Your smile, mapped in one visit." → enquiry and callback forms.
- **Banning:** dental/skin split → treatment shortcuts → £30 checkup → "Relax, this is more than just a dentist" → three promises → price match → virtual consultation → clinics → memberships.
- **Sage Space:** hero → one-line manifesto → eight named services each with "Book Now" → three values → retail → space gallery → testimonials → newsletter.

### 2d. Patterns across the eleven sites

| ID | Pattern | Count |
|---|---|---|
| P1 | Hero sells an attitude or experience rather than a service list | 5 of 11 (Tend, Swish, Paste, Sage Space, Grand Street). 3 use a keyword-style headline (Toothbar, URBN, Rüh), 1 leads with price (Wally) |
| P2 | A booking button in the header | 10 of 11 confirmed |
| P3 | A phone number visible in the header or hero | 8 of 11 confirmed |
| P4 | "Judgment-free" or equivalent wording in the practice's own copy | 3 of 11 (Tend, Swish, Toothbar), plus Sage Space via a testimonial |
| P5 | Star rating or review count on the homepage | 5 of 11 (Tend, Wally, Swish, Core Smiles, Rüh); in or directly under the hero on 2 (Wally, Rüh). Patient quotes, video stories or press quotes on 9 of 11 (not Paste or Banning) |
| P6 | Insurance acceptance stated on the homepage | 5 of 11 (Tend, Swish, Toothbar, URBN, Paste). An insurance checker on 3 (Tend, Swish, URBN) |
| P7 | Membership or in-house plan | 6 of 11 (Wally, Swish, Toothbar, URBN, Banning, Paste) |
| P8 | An actual price on the homepage | 5 of 11 (Wally, Rüh, Banning, URBN's emergency exam, Toothbar's FAQ). No US practice that takes insurance shows a routine checkup price on its homepage |
| P9 | Discount in the hero itself | 1 of 11 (Wally). Others park promotions in a top ribbon or inside a section |
| P10 | Before/after photos on the homepage | 4 of 11 (Wally, Rüh, Grand Street, URBN), all cosmetic-led |
| P11 | Named dentists on the homepage | Clear on 4 (Toothbar, Core Smiles, Wally, Rüh). Independents use founder stories; the chain (Tend) uses principles instead of people |
| P12 | Evening or weekend availability claimed | 4 of 11 (Tend, URBN, Rüh, Banning). Two independents publish weekday-only hours (Toothbar, Grand Street) |
| P13 | FAQ on the homepage | 2 of 11 (Wally, Toothbar) |

The common order, reduced to its skeleton: **hero → practical proof → services → reviews → location → payment → people → final call to action.**

---

## 3. Two provisional personas

Evidence base: 0 interviews, 0 survey responses of our own; built from the published surveys and booking data in section 1. Names, ages and life details are illustrative and marked *inferred*.

### Persona A — "It's been a while"

| | |
|---|---|
| Who | Mid-20s to early 30s, renting, early or mid career (*inferred from F1, F2*). |
| Situation | Has not seen a dentist in over a year (F1). May be between jobs or newly on an employer plan they don't understand; roughly a quarter of adults have no dental cover (F2). |
| Trigger | Something specific: a twinge, a chipped tooth, a new benefits card, a move (*inferred*; F6 shows this group is the most likely to need a filling). |
| How they search | On a phone in the evening (F14). Reads Google reviews first, looking for words like "kind", "patient", "understanding" and for insurance information (F8, F11), then opens the practice site (F10). |
| What they fear | Being lectured, pain, and a bill they did not expect (F3, F4, F19). |
| What gets them to book | A clear signal that overdue patients are welcome, a price or an estimate promise, proof the practice takes their plan, and an appointment this week that they can book without calling (F13, F14, F15, F19). |
| What loses them | No online booking, fewer than about 20 reviews or under 4 stars, vague money language, a page that feels clinical or salesy (F9, F16). |
| Device and context | Mobile, short session, likely comparing two or three practices (*inferred from F10*). |

### Persona B — "Ready to upgrade"

| | |
|---|---|
| Who | Late 20s to mid-30s, insured, recently moved or unhappy with their last dentist (*inferred*; under-35s are the most likely to be seeking a new dentist, F8). |
| Situation | Goes fairly regularly. Has been thinking about whitening or straightening; compares their teeth with what they see on social media (F22). |
| Trigger | An event or a photo (*inferred*), or simply needing a new regular dentist. |
| How they search | Reviews, then the website, then the gallery and the price. Looks at who the dentist actually is (F8, F12). |
| What they fear | Being upsold, results that look fake, not knowing the total (F4 "recommending unnecessary treatments", F11, F19). |
| What gets them to book | Starting with a normal exam or a no-pressure consultation (F21), real cases with honest labelling, a from-price or a written plan before any commitment, financing. |
| What loses them | Superlatives without proof, stock smiles, pressure tactics. |
| Device and context | Mobile first, may return on a laptop before committing to a larger spend (*inferred*). |

Persona A is the primary audience for the page: it is the larger group (F1), has the most friction, and the entry service is the same one Persona B starts with (F21).

---

## 4. Recommended landing-page outline

### 4a. The three things a visitor must believe within 10 seconds

1. **"This place is for people like me, and nobody will make me feel bad."** Overdue and nervous is the typical state of this audience, not the exception (F1, F3, F4). Tend's subhead does this in one line (section 2a).
2. **"I can sort this out right now, on my phone, and be seen soon."** (F14, F15.)
3. **"I'll know what it costs before anything happens."** Insurance accepted or a plain price without it (F13, F19).

Supporting proof that has to be visible in the same screen or the next one: a real rating with a review count, and the real dentist's face (F8, F9, F12).

### 4b. Ordered sections

| # | Section | Job it does | Content it needs | CTA here | Tied to |
|---|---|---|---|---|---|
| 0 | Persistent header (mobile: compact bar that can reappear on scroll-up) | Keeps the booking action one tap away at all times | Logo, at most four anchor links, a "Book online" button, a tap-to-call icon | Primary + phone | F14, F16, P2, [S14], [S15] |
| 1 | Hero | Lands beliefs 1 and 2 | Attitude headline (not a service list). One-sentence subhead that welcomes overdue and nervous patients. Photo or short loop of the actual dentist with a patient-facing expression, not stock. A three-item trust strip under the buttons: rating and review count (once real), "Most PPO plans accepted" (if true), "New patients welcome" | Primary "Book online"; secondary "Call or text (number)" | F1, F3, F9, F12, P1, P5 |
| 2 | "Easy" strip | Lands belief 3 and answers the practical filters before any scrolling effort | Four to six short facts with icons: book online any time; appointments this week (only if true); evenings / Saturday (only if true); cost explained before treatment; plans accepted; no insurance, no problem | None (keeps the strip scannable) | F13, F14, F18, F19; Tend's benefit grid |
| 3 | Your first visit | Removes fear of the unknown, which is where pain, judgment and cost worries live | Three steps: book in a minute or two → exam, X-rays and cleaning, how long it takes, what it feels like → you get a plan and a price, and nothing happens without your yes. One line: "Haven't been in years? That's most of our new patients" only if the dentist can stand behind it; otherwise "Haven't been in years? You're welcome here." | Primary | F3, F4, F11, F19; Wally's three-step block |
| 4 | Services in two lanes | Shows range without a catalogue; lets Persona B self-select | Lane one, "Healthy": checkup and cleaning, fillings, emergencies. Lane two, "Confident": whitening, clear aligners, bonding and veneers. Six cards at most, one line each, each with a from-price or "price confirmed before you start". "General Dentist" disclosure near the dentist's name (section 6) | Text link per card to book that visit type | F6, F21, F22, P8 |
| 5 | Comfort | Speaks to the 20–73% who are anxious without dramatising it | "Nervous is normal here." A short comfort menu the practice really offers: headphones, something to watch, a stop signal, breaks, numbing options explained, short waits. No "painless" promise | Secondary "Text us a question" (lower commitment for anxious visitors) | F3, F4, F5; Texas rule 108.57(c)(3)–(4) |
| 6 | Meet the dentist | Supplies the human proof that reviews prime people to look for | Real portrait or 20-second video; three sentences in the first person; degree and school; "General Dentist"; one thing they do differently (for example, explains everything first) | None, or a quiet "Book with Dr. ___" | F8, F11, F12, P11 |
| 7 | Reviews | Finishes the job reviews started | Live Google rating and count, three to six recent reviews quoted exactly with first name and initial, link to all reviews. Favour reviews that mention kindness, explanation and cost clarity. Do not filter to hide negatives while implying these are all the reviews | Primary | F8–F11; FTC rule (section 6) |
| 8 | Cost and insurance | Lands belief 3 in full | (a) Plans accepted, with a short checker or "send us your card, we'll confirm before you come". (b) No insurance: new-patient visit price with what is included, or a membership with price and inclusions. (c) Financing line. (d) "You'll get a written estimate before any treatment." | Primary; secondary "Check my insurance" | F2, F13, F19, F20, P6, P7 |
| 9 | Smile gallery (optional; only with real cases) | Proof for Persona B | Three or four of this dentist's own cases with treatment named, duration, patient consent on file and "Actual results may vary" | "Book a cosmetic consult" | F21, F22, P10; section 6 |
| 10 | Find us | Confirms it fits their life | Address, map, transit and parking, hours stated plainly including any evenings or Saturdays, "five minutes from ___" | Phone + directions | F14 (4 in 5 book within 20 miles), F18; Paste's location copy |
| 11 | FAQ | Catches the last objections | What does a first visit cost without insurance? Do you take my plan? I haven't been in years, is that a problem? Does whitening hurt? How long is the first visit? What if I need to cancel? | Primary after the last answer | F19, P13 |
| 12 | Closing band and footer | Last chance, plus the required small print | One-line restatement of the promise, both buttons, hours. Footer: practice legal name, dentist name with "General Dentist", licence details as required locally, privacy and accessibility links | Primary + phone | F16; section 6 |

### 4c. Calls to action

- **Primary: "Book online".** It names the action and the channel. All eleven sites reviewed use a booking verb ("Book Now", "Book an Appointment", "Book Online"); none uses "Get started" or "Learn more" as the main button. In the one sticky-button test found, the softest label drew the most clicks but fewer sales, so the label should promise exactly what happens next (F14, F15, [S14]).
- **Secondary: "Call or text (number)".** Phone is still preferred for scheduling by 41% (F16), and text is the preferred channel for follow-ups (F17). Only offer text if the practice has a monitored textable line. Rüh's "WhatsApp us" is the same idea.
- **Where the primary repeats:** header (always), hero, after the first-visit steps, after reviews, in cost and insurance, after the FAQ, closing band. On mobile that is roughly once every one and a half to two screens.
- **Form length:** if booking is not a live scheduler, ask for name, mobile number and preferred time only; collect insurance and history later by text or at the confirmation step (F15, [S13], and the 82% who resent re-entering known information in [S6]).
- **Speed to care:** if real availability can be shown ("Next opening: Thursday 5:30 pm"), show it next to the primary button. 41% of dental bookings are for a slot within four days (F14).

### 4d. What to say about price and insurance

- Say which plans are accepted in plain words and offer to confirm coverage before the visit. Do not write "we accept all insurance" (F13; section 6).
- Give the uninsured a number: the new-patient visit price with inclusions, or the membership price with inclusions. Wally puts the number in the headline; Rüh and Banning publish from-prices and fees; Toothbar answers cost questions in its FAQ (P8). For a practice that takes insurance, the price belongs in section 8 and the FAQ, not the hero.
- Promise the process: "a written estimate before any treatment". This is the single most evidence-backed sentence on the page (F19, F11).
- Membership: present it as the answer for people without insurance, inside section 8. Do not make it the headline unless the practice is insurance-free; demand evidence is thin (F20).
- Any introductory offer must state the regular fee, what is included, who qualifies and when it ends (section 6).

### 4e. How to address anxiety

- Normalise it in the hero subhead and the first-visit section in a light tone, then give it one dedicated section with concrete comfort options (F3–F5).
- Lead with what the patient controls (a stop signal, breaks, being told everything first) and with the non-judgment promise; fear memories are about humiliation and not being heard as much as pain (F4).
- Keep the vocabulary positive. Medical pages overuse fear and pain words and those pages tend to convert worse ([S13]); a board rule also bars "appealing to an individual's anxiety in an excessive or unfair way" (section 6).
- Never promise "painless" or "pain-free" (section 6). "Gentle", "we go at your pace" and "we numb properly and check before we start" describe conduct rather than outcomes.
- For teammates: the sensory triggers named by anxious adults are sounds and smells (F4), and NN/g's guidance for persistent headers is minimal animation ([S15]). A calm page supports the message.

### 4f. What to leave out

| Leave out | Why |
|---|---|
| Superlatives: "best", "top", "#1", "leading" | Board rules and the ADA Code require substantiation (section 6). Three of the sites reviewed use them; we should not copy that |
| "Painless" or "pain-free" claims and outcome guarantees | Section 6 |
| A discount in the hero | Only 1 of 11 does it, and it is the insurance-free model (P9). Promotions carry disclosure duties and compete with the three beliefs |
| A long service catalogue, implants-first messaging | The way in is a cleaning, consult or new-patient exam (F21) |
| Blog feed, careers banner, press wall, newsletter signup | They push the booking path down the page. URBN's third section is a hiring banner; Swish, Tend and Paste end on blog or newsletter. For a single landing page they answer no visitor question in F1–F22. Judgment call |
| Stock smile photography and borrowed before/after images | Real photos carry the proof (F12) and borrowed cases are a compliance problem (section 6) |
| Unverifiable numbers ("thousands of smiles") | A new practice cannot support them, and one board rule bars statistics the public cannot verify (section 6) |
| Fear-led headlines | F3 says the fear is already there; [S13] and section 6 say not to lean on it |
| A carrier-by-city link farm | Tend's footer has dozens of insurance-by-city links for search traffic. Not needed on one page |

### 4g. The new-practice problem

A practice with few reviews starts under the bar that 47% of consumers apply (20 reviews) and under the range where bookings multiply (10+ reviews) (F9). Until the review count is there:

- Lead proof with the dentist's own face, training and words, real photos of the space, and transparent pricing (F11, F12, F19).
- Show the true rating and count, however small; do not import reviews from elsewhere or write "testimonials" in-house (section 6).
- Ask every early patient for a Google review as routine. Do not make any incentive conditional on a positive review (section 6).

---

## 5. Messaging hierarchy

Levels 1 to 3 are the three things a visitor must believe within 10 seconds (argued in 4a). Everything below them is support and should never push them off the first screen.

| Level | Message | Where it lives | Evidence |
|---|---|---|---|
| 1 | You're welcome here, however long it has been. No lecture. | Hero headline and subhead | F1, F3, F4, P1, P4 |
| 2 | Book online in a couple of minutes; be seen this week. | Hero buttons, "Easy" strip | F14, F15 |
| 3 | You'll know the cost first. We take most plans / here is the price without one. | Trust strip, "Easy" strip, section 8 | F13, F19 |
| Proof | Real rating and reviews; the real dentist. | Trust strip, sections 6 and 7 | F8–F12 |
| Depth | Comfort options; first-visit steps. | Sections 3 and 5 | F4, F5 |
| Aspiration | Whitening, aligners, bonding when you're ready. | Section 4 lane two, section 9 | F21, F22 |

Illustrative headline directions (placeholders to test, not final copy): "The dentist you won't put off." / "Been a while? No lecture. Just a fresh start." / "Dentistry that's actually on your side."

---

## 6. Copy guardrails (US dental advertising)

I am not a lawyer and the practice's state is unknown; state board rules differ and the dentist's own board rule governs. Two states' rules were read in full as examples of "typical" board language (Texas and New York). Rule keys refer to section 9.

### Do

- **Do** put "General Dentist" or "General Dentistry" with the dentist's name wherever services are promoted. The ADA Code says general dentists announcing services "shall also state that the services are being provided by general dentists" [R1 §5.I]. Texas requires the notation directly after the name, in a font no smaller than the largest used for the advertised services [R5 §108.55(b)].
- **Do** make every factual claim one you can prove on request: hours, "appointments this week", plans accepted, review counts, years of experience. Texas bars "statistical data, representations, or other information that is not subject to reasonable verification by the public" [R5 §108.57(c)(14)]; New York puts the burden of proof on the licensee [R6].
- **Do** use only real reviews from real patients, quoted without changing their meaning, and get the patient's written permission before using a name, photo or story on the page. Testimonials must be from "a patient of record" in Texas [R5 §108.57(c)(8)]; New York requires that "the patient or client expressly authorizes the portrayal in writing" [R6]; HIPAA requires authorization to use protected health information for marketing [R7]; FTC guides require endorsements to reflect honest experience and not be reworded "so as to distort" [R2 §255.1].
- **Do** label before/after images. Use only this dentist's own patients, with written consent, and include "Actual results may vary" [R5 §108.57(d)]. If a result is not typical, say what is [R2 §255.2(b)]. Rüh's line "Shared with patient consent. Individual results vary." is a good model.
- **Do** disclose any connection behind a testimonial: staff, family, free or discounted treatment [R2 §255.5; R3 §465.5].
- **Do** spell out offers: regular fee, what is included, who qualifies, end date. New York requires price advertising to state related charges and "the period of time for which the advertised prices shall be in effect" [R6].
- **Do** keep a dated copy of every version of the page. New York requires an exact copy for one year after last appearance [R6].

### Don't

- **Don't** call the dentist a "specialist" or "cosmetic specialist", or word things to imply it. Only recognised specialties may be announced [R1 §5.H]; Texas lists twelve and cosmetic dentistry is not among them [R5 §108.54(b)]. Fellowship-style titles and society memberships can mislead if presented as attainment [R1 §5.F.3].
- **Don't** claim superiority: "best", "top", "leading", "#1", "better than other dentists". The ADA Code flags any "representation... that the advertised services are superior in quality to those of other dentists, if that representation is not subject to reasonable substantiation" [R1 §5.F.2]; Texas bars "implying or suggesting superiority" and unsupported comparisons [R5 §108.57(c)(5)–(6)]; New York bars unsubstantiated "claims of professional superiority" [R6].
- **Don't** say "painless", "pain-free" or "no pain". Texas lists "claiming to provide or perform dental work without pain or discomfort to the patient" as an example of misleading advertising [R5 §108.57(c)(4)].
- **Don't** guarantee results or satisfaction, or create "an unjustified expectation about results" [R1 §5.F.2]. New York bars advertising that "guarantees any service" [R6]. Texas bars implied guarantees of success but allows a promise to return a fee if the patient is not satisfied [R5 §108.57(c)(7)]. Because states differ, leave guarantees out.
- **Don't** play on fear. Texas bars "appealing to an individual's anxiety in an excessive or unfair way" and "exerting undue pressure" [R5 §108.57(c)(2)–(3)]. Acknowledging nerves is fine; countdown timers and "before it gets worse" are not worth the risk.
- **Don't** write, buy or stage reviews, pay for positive ones, let staff post undisclosed reviews, or display a filtered set while implying it is all of them. Each is a listed violation of the FTC rule on reviews and testimonials [R3 §§465.2, 465.4, 465.5, 465.7(b)].
- **Don't** say "free" unless it is free. A "free whitening" funded by a higher exam fee fails the FTC's definition [R4 §251.1(b)] and Texas's rule against implying a service is free "when the fee is built in to a companion procedure" [R5 §108.57(c)(13)]. New York allows inducements only as "a discount or reduction in an established fee" [R6].

### What landing pages commonly get wrong (seen in this session's sample)

These are phrases of the kind the rules above target. I am not asserting any site is in breach; each may have substantiation or sit under different rules. They are examples of copy we should not imitate.

- "pain-free" in the first value block of a Texas practice's homepage; "painless" in two US chains' copy.
- "Top Cosmetic Dentists..." and "One Of The Best Cosmetic Dentists In..." as headings; "the highest rated Dentists in the UK"; "LED BY THE BEST CLINICIANS IN THE GAME".
- A "No Drill Guarantee".
- Round, uncited numbers ("10,000+ smiles transformed").
- Generic conversion advice that conflicts with dental rules: the Unbounce benchmark page itself recommends words like "guaranteed" to build trust on medical pages [S13]. That advice should not be applied here.

---

## 7. Open questions for the real dentist

The page currently describes a placeholder practice. These answers change the content.

**Identity and licence**
1. Which state is the practice in? (Decides which board advertising rule applies.)
2. Dentist's full name, degree, school and graduation year; any real credentials or society memberships.
3. Is anyone at the practice a recognised specialist?
4. Legal practice name and any trade-name registration the board requires.

**Access**
5. Opening hours. Any evening or Saturday sessions?
6. Typical wait for a new-patient appointment. Can live availability be shown?
7. Booking system and whether it can be embedded or deep-linked. Is there a monitored text line?
8. Who answers the phone, and during which hours?
9. Address, parking, transit, step-free access.

**Money**
10. Which insurance plans is the practice in-network with? Out-of-network policy?
11. New-patient exam, X-ray and cleaning fee without insurance.
12. Is there, or will there be, a membership plan? Price and inclusions.
13. Any launch offer? Regular fee, inclusions, eligibility, end date.
14. Financing partners.
15. Will the practice commit to a written estimate before treatment?

**Services**
16. Which cosmetic services are actually offered in-house (whitening type, aligner brand, bonding, veneers)? From-prices?
17. Emergency and same-day policy.
18. Any sedation offered? (Usually carries its own permit and advertising rules.)

**Comfort**
19. Which comfort options are real today: headphones, ceiling screens or streaming, blankets, stop signal, longer first appointments?
20. How does the dentist personally handle a patient who has not been for years? (Best source of authentic copy.)

**Proof**
21. Current Google rating and review count; plan for collecting reviews.
22. Are professional photos or video of the dentist, team and space available?
23. Any of the dentist's own before/after cases with written patient consent?

**Other**
24. Languages spoken.
25. Cancellation and late policy.
26. Accessibility commitments for the site. Several competitor sites expose skip links and accessibility statements; no accessibility standard was sourced in this session, so the team should set its own.

**Suggested validation before launch** (not yet done): five moderated sessions with people aged 22–38, at least two of whom have not seen a dentist in two years, on a phone. Tasks: a five-second test of the hero against the three beliefs in 4a; find out whether your insurance is accepted; find what a first visit costs; book. Include at least one screen-reader or keyboard-only pass of the booking path.

---

## 8. What could not be verified

- **Named examples.** *Dntl Bar* (dntlbar.com) answers automated requests with a bot check; not read. *Beam Street* appears to have rebranded to Beam Dental; the old domain returns "not found" and the new one returns an empty redirect shell; not read. *Grin* could not be matched to a young-audience dental practice (results point to an orthodontic monitoring software company and unrelated small practices). *Dentologie* is a JavaScript-only site; only its title was readable. *Mint Dentistry* and *Dental House* block automated requests. The page-fetch helper agent returned no report on three attempts, so pages were fetched directly instead.
- **Age-split statistics.** No 2024–2026 source read this session gives online-booking preference, review use, text preference, membership interest or dental anxiety specifically for people in their 20s and 30s.
- **Secondary figures not used as findings** (seen in search summaries only): Press Ganey "73% of Millennials and Gen Z prefer to book digitally"; rater8 "84% check reviews before booking care" (2025); Zocdoc 2025 "nearly 43% of bookings outside office hours"; Kyruus 2022 "Gen Z mostly prefer phone scheduling"; LocalMed "38% of appointments scheduled after hours"; "about 48% of 18–34s have used whitening". The *JADA* paper itself (doi:10.1016/j.adaj.2025.07.004) was not opened; its figures come from the NYU release, and the survey field dates from secondary coverage.
- **Cosmetic demand among young adults.** Only indirect evidence (F21, F22). No current survey of whitening or aligner intent for 18–34s was verified.
- **Evening and weekend demand.** Indirect only (F18).
- **Before/after imagery and insurance checkers** have no conversion data behind them in anything read.
- **Device split for dental practice websites.** Only Zocdoc's 60% mobile booking share (2023).
- **Compliance.** California Business and Professions Code §651 and Florida rule 64B5-4.002 could not be retrieved in full (the Florida index page shows the rule was amended effective 24 Sep 2026). The ADA Code file served today is the edition with advisory opinions revised to March 2023; a newer edition may exist. FTC plain-language guidance pages returned "not found"; the regulation text was read from eCFR instead.
- **Sticky behaviour** of competitor headers cannot be confirmed from HTML alone.
- **Older source used with caution:** the Unbounce medical-services page dates from 2021.

---

## 9. Sources

All accessed 2026-11-09. "Read directly" means the page or PDF text was fetched and the cited passage read.

### Surveys, studies and data

| Key | Source | Year | Access |
|---|---|---|---|
| S1 | CareQuest Institute for Oral Health, *State of Oral Health Equity in America 2025: Key Survey Findings* (survey Jan–Feb 2025, NORC AmeriSpeak, n=9,450). https://carequest.org/wp-content/uploads/2025/11/CareQuest_Institute_SOHEA-2025-Key-Survey-Findings_11.10.25.pdf | 2025 | Read directly (PDF) |
| S2 | Tufts University School of Dental Medicine release on Yu, *Frontiers in Oral Health*, via News-Medical: "Young adults face highest rates of missed dental care amid cost and insurance gaps". https://www.news-medical.net/news/20250922/Young-adults-face-highest-rates-of-missed-dental-care-amid-cost-and-insurance-gaps.aspx | 2025 | Read directly (press release; paper not opened) |
| S3 | NYU College of Dentistry release on Heyman et al., *Journal of the American Dental Association*, via News-Medical: "Most adults experience dental fear and show interest in virtual fear-treatments". https://www.news-medical.net/news/20250902/Most-adults-experience-dental-fear-and-show-interest-in-virtual-fear-treatments.aspx | 2025 | Read directly (press release; paper not opened) |
| S4 | Delta Dental Plans Association, *2026 State of America's Oral Health and Wellness Report* (Material Holdings survey, 5–15 Jan 2026, 1,000 adults and 1,000 parents). https://deltadentaltn.com/hubfs/DDPA%202026%20State%20of%20Americas%20Oral%20Health%20and%20Wellness%20Report_Final.pdf | 2026 | Read directly (PDF) |
| S5 | Zocdoc, "15 Facts About Zocdoc Dental Patients" (hundreds of thousands of 2023 dental bookings; published 1 Apr 2024). https://www.zocdoc.com/resources/blog/article/15-facts-about-zocdoc-dental-patients/ | 2024 | Read directly |
| S6 | Experian Health, *The State of Patient Access 2025* (survey 3–13 Feb 2025; 1,004 US adults and 213 provider decision-makers). https://www.experian.com/content/dam/noindex/na/us/healthcare/state-of-patient-access-2025.pdf | 2025 | Read directly (PDF) |
| S7 | Tebra, "Top 5 takeaways about what patients really want in 2025" (6th annual Patient Perspectives Report; 3,964 US adults; fielded 29 Jun 2025). https://www.tebra.com/theintake/patient-experience/tips-and-trends/patient-survey-questions-preferences-habits | 2025 | Read directly |
| S8 | DentistryIQ, "Secrets to happy dental patients: Actionable tips from a recent study" (Dandy / Isurus Market Research, 600 US adults). https://www.dentistryiq.com/practice-management/patient-communication-and-patient-financing/article/14302668/secrets-to-happy-dental-patients-actionable-tips-from-a-recent-study | 2023 | Read directly (trade report of the survey) |
| S9 | BrightLocal, *Local Consumer Review Survey 2026* (1,002 US adults; published 11 Feb 2026). https://www.brightlocal.com/research/local-consumer-review-survey/ | 2026 | Read directly |
| S10 | DentistryIQ, "Comparison kills: Why Gen Z is self-conscious about their smile" (Forbes Health / OnePoll, 2,000 US social media users). https://www.dentistryiq.com/for-patients/cosmetic-dentistry/article/55089590/comparison-kills-why-gen-z-is-self-conscious-about-their-smile | 2024 | Read directly (trade report of the survey) |
| S11 | Peerlogic, "We Analyzed 4,280 Dental Patient Calls Across 26 Practices" (Feb 2026 call data). https://www.peerlogic.com/post/peerlogic-dso-case-study | 2026 | Read directly (vendor case study) |
| S12 | LocaliQ with WordStream, "Search Advertising Benchmarks" (2026 edition; published 26 May 2026). https://localiq.com/blog/search-advertising-benchmarks/ | 2026 | Read directly |
| S13 | Unbounce, Conversion Benchmark Report, Medical Services industry page (published Apr 2021, page updated 2024). https://unbounce.com/industry/medical-services/ | 2021 | Read directly |
| S14 | Conversion Rate Experts, "Win Report: How a 'sticky' call to action increased sales by 25%". https://conversion-rate-experts.com/sticky-cta-win-report/ | Undated | Read directly (agency case study) |
| S15 | Nielsen Norman Group, "Sticky Headers" guidelines article. https://www.nngroup.com/articles/sticky-headers/ | 2021 | Read directly |
| S16 | Dentistry33, "26% of dentists offer In-office dental plans: ADA" (ADA Health Policy Institute poll, 17–23 Jul 2023, about 950 dentists). https://www.dentistry33.com/companies/news/2557/26-of-dentists-offer-in-office-dental-plans-ada.html | 2023 | Read directly (trade report of the poll) |
| S17 | HIT Consultant, "Zocdoc Report Reveals 2024 Insights into Patient Preferences and Behaviors". https://hitconsultant.net/2024/12/13/zocdoc-2024-insights-into-patient-preferences-and-behaviors/ | 2024 | Read directly (background only) |
| S18 | American Dental Association release, "New Research by ADA Health Policy Institute Examines Oral Care Access and Utilization". https://www.prnewswire.com/news-releases/new-research-by-ada-health-policy-institute-examines-oral-care-access-and-utilization-300018494.html | 2015 | Read directly (background only; dated) |

### Rules and codes

| Key | Source | Access |
|---|---|---|
| R1 | American Dental Association, *Principles of Ethics and Code of Professional Conduct*, sections 5.F, 5.H, 5.I (edition with advisory opinions revised to March 2023). https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/about/ada_code_of_ethics.pdf | Read directly (PDF) |
| R2 | FTC, Guides Concerning the Use of Endorsements and Testimonials in Advertising, 16 CFR Part 255 (88 FR 48102, 26 Jul 2023). https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255 | Read directly (eCFR text) |
| R3 | FTC, Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465 (89 FR 68077, 22 Aug 2024). https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465 | Read directly (eCFR text) |
| R4 | FTC, Guide Concerning Use of the Word "Free", 16 CFR 251.1. https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-251 | Read directly (eCFR text) |
| R5 | Texas State Board of Dental Examiners, 22 Tex. Admin. Code §108.54 (Advertising of Specialties), §108.55 (Advertising for General Dentists), §108.57 (False, Misleading or Deceptive Advertising), via Cornell Legal Information Institute. https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-54 · https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-55 · https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-57 | Read directly |
| R6 | New York State Education Department, Rules of the Board of Regents, Part 29, §29.1(b)(12) (advertising not in the public interest). https://www.op.nysed.gov/title8/rules-board-regents/part-29 | Read directly |
| R7 | HIPAA Privacy Rule, 45 CFR 164.508(a)(3) (authorization required: marketing). https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.508 | Read directly (eCFR text) |

### Practice websites reviewed

| Site | URL | Access |
|---|---|---|
| Tend | https://www.hellotend.com/ | Homepage read in full |
| Wally | https://www.carebywally.com/ | Homepage read in full |
| Swish Dental | https://www.swishsmiles.com/ | Homepage read in full |
| Toothbar | https://toothbar.com/ | Homepage read in full |
| URBN Dental | https://urbndental.com/ | Homepage read in full |
| Core Smiles | https://www.coresmiles.com/ | Homepage read in full |
| Grand Street Dental | https://www.grandstreetdental.com/ | Homepage read in full |
| Paste Dental | https://www.pastedental.co.uk/ | Homepage read in full |
| Rüh Dental | https://ruhdental.com/ | Homepage read in full |
| Banning Dental Group | https://banningdental.co.uk/ | Homepage read in full |
| Sage Space | https://sagespace.au/ | Homepage read in full |
| Dentologie | https://www.dentologie.com/ | Title only (JavaScript-rendered) |
