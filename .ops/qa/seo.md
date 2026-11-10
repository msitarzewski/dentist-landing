# SEO review: on-page, local, structured data, answer engines

Reviewer: `qa-seo` · 2026-11-09 · Report only. Nothing in `index.html`, `assets/`, `brand/`, `content/`, `research/` or `tools/` was edited.

Each finding is tagged **TEMPLATE** (fix now; needs no real facts) or **LAUNCH** (needs the real practice's facts or a domain). Severity uses the README scale: blocker / should fix / could fix. "GBP" means Google Business Profile throughout.

**Read this first: the build changed after this review was written.** Section 0 is a re-check of the current files and says what is fixed, what is open and what is new. Sections 1 to 5 are kept as written, as the record of what was found; their line numbers refer to the earlier build (`index.html` at 344 lines).

## What was reviewed, and what was not

Read in full: `index.html` (344 lines), `assets/css/page.css`, `assets/js/page.js`, the header of `assets/css/bite.css`, `README.md`, `content/copy.md`, `brand/01-brand-core.md`, `research/01-dental-inspiration.md`, `research/02-audience-and-conversion.md`. Viewed `assets/img/social-card.jpg` and `assets/img/apple-touch-icon.png`.

Not done, so do not read these as passed:

- No browser render, no Lighthouse, no field data. Core Web Vitals comments are from markup and CSS only. A `noindex` page on localhost has no field data to read.
- The JSON-LD was checked by reading it against schema.org and Google's local business documentation as fetched today. It was not run through the Rich Results Test or the Schema Markup Validator (no tool in this session).
- No file sizes. This session had no directory listing, so image and CSS weights are unknown.
- No Search Console data exists (no domain). The cannibalization check was done by the pre-access method: there is one URL, so no two pages can compete today. Finding B2 gives the ownership map for when pages are added.
- Web evidence was read through a page-to-text extraction. Figures are quoted as extracted and should be opened in a browser before anyone reuses them outside this project. The Whitespark rows were extracted twice and agreed; one figure that did not agree between passes (the rank of "title tag length") is not used.

---

## 0. Re-check of the current build

Re-read after the build changed: `index.html` (now 667 lines), `assets/js/page.js` lines 1 to 189, all of `assets/css/page.css` (745 lines) and `README.md`. Viewed `assets/img/favicon-96.png` and `assets/img/social-card.jpg` again. Line numbers in this section refer to the current files. The limits listed above still apply: nothing was rendered, validated by tool or measured.

### Status of each template finding

| Finding | Status | Evidence in the current build |
|---|---|---|
| A1 place name in the visible text | Fixed | `:390` "a general dentist in East Austin"; `:572` h2 "We’re in Holly, East Austin."; also `:601`. Three visible instances, where there were none |
| A2 title | Fixed | `:6` `General Dentist in East Austin, TX \| Feast Dental`: 49 characters, no dentist name. It uses a pipe where I gave a dash. Zyppy found pipes replaced more often than dashes (41.0% against 19.7%), but that changes a separator, not the words. No action |
| A3 JSON-LD | Fixed | `:36-362`: the full graph, the Sunday row, the person and the offers, with `priceValidUntil` and the fee disclosures added to each offer. Valid JSON by reading; still not run through a validator. The offer text agrees with the visible rows (`:476-485`, `:557`) |
| A4 quotable price answer | Mostly fixed | `:601` is self-contained; `:608-610` add the filling, emergency and hours questions. The Spanish question was not added; the visible Spanish line at `:590` does that job better. "Prices checked" became "good through [Month D, YYYY]" (`:409`, `:488`), which is stronger. The open question about "new patients" stands |
| A5 head | Fixed for the template | `og:site_name`, `og:locale`, `og:image:type` and the 96 px icon are in (`:11`, `:12`, `:19`, `:24`); `favicon-96.png` exists and is square (viewed). The gate now points at a real list: README "Placeholders" and "Removing the demo marks". Canonical, `og:url` and the absolute `og:image` remain launch items, as intended (`:15`) |
| A6 clock-driven text | Fixed | `data-nosnippet` at `:379` (both spans), `:395`, `:576`, and on the "Today" tag (`page.js:115`). The sample-times caption is hidden without script (`:401`) |
| A7 hours in four places | Fixed | `page.js:24-42` reads the JSON-LD, accepts plain day names or schema.org URLs, skips dated exceptions and keeps its own table only as a fallback. Three places are left to edit together, and README says which |
| A8 words touching | Fixed | spaces at `:379`, `:474`, `:476-485`, `:482`, `:625` |
| A9 hero crop on phones | Open · could fix | the hero `<picture>` (`:388`) still has no small-screen source, and the band is now 190 px tall on phones (`page.css:556`) |
| A10 phone spacing, address element | Fixed | all six visible numbers use a normal space (`:380`, `:404`, `:590`, `:591`, `:628`, `:643`); `<address>` at `:589` and `:642` |

Name, address, phone and hours were compared again in the current build and agree everywhere: six visible numbers, six `tel:` and three `sms:` links, `+15125550142` in the JSON-LD; the address at `:88-94`, `:574`, `:589`, `:642`; hours in the table (`:580-586`), the footer (`:644`), the JSON-LD (`:116-153`), the fallback (`page.js:24`) and the prose (`:417-418`, `:610`, `:632`).

The outline is still sound: one h1, 13 h2, 15 h3 (a fourth promise, "Look me up.", `:540`).

### New in the current build

**R1. The meta description is now 185 characters · TEMPLATE · should fix**

- **Where:** `index.html:7`.
- **What:** the price was taken out, which is reasonable (a search snippet cannot carry the footnote), and the text grew from 148 to 185 characters. Google sets no limit but cuts snippets to fit, typically near 155 to 160 characters on desktop and fewer on phones (general knowledge, not re-fetched today). By character count the desktop cut falls inside "Evenings and Saturdays" (characters 149 to 172) and the phone cut earlier, inside "with the price in writing first". Either way "Book online." is lost, and usually the hours with it: the call to action and the practice's advantage.
- **Fix (145 characters, same name form):** `Dr. Paloma Krenek, DDS, General Dentist, East Austin. 75-minute first visit with the price in writing first. Evenings and Saturdays. Book online.`

**R2. One heading lost its subject · TEMPLATE · could fix**

- **Where:** `index.html:430`. "Here’s how it goes." replaced "Here’s your whole first visit."
- **What:** the section's nav label is "First visit" and the $195 is sold as a "first visit"; the old heading named it. Headings are part of the eighth-ranked organic factor, and this was the one carrying the page's own name for what it sells.
- **Fix:** `Here’s how your first visit goes.` The copy lead's call.

**R3. The launch gate's numbers changed (B1)**

- Bracketed placeholders in the visible text: 20 now, not 11 (`:409`, `:476`, `:484`, `:488`, `:529` four, `:540` three, `:556`, `:557`, `:574`, `:602`, `:609`, `:611`, `:645`, `:647` two). The JSON-LD holds its own.
- `data-placeholder`: still 19 (`:382`, `:396`, `:403`, `:455`, `:476`, `:477`, `:478`, `:484`, `:485`, `:542`, `:562`, `:563`, `:591`, `:614`, `:627`, `:643`, `:650` twice, `:660`).
- README's "Legal line and licence" row quotes `[Legal entity name, PLLC, to confirm]`, which is no longer on the page (it is `[Legal entity, PLLC]` at `:647`). README's instruction to search for `[` still finds everything.
- The social card still carries the demo strip, as README step 6 says it will until regenerated.

**R4. Spanish (B4)** is partly answered: `:590` is a visible, correctly tagged sentence with the phone number. The language on the Business Profile and a `/es/` page remain launch decisions.

**R5. Business Profile categories (section 5)** were revised after qa-compliance's reading; see the checklist.

---

## 1. The brand h1: what it costs, and the cheapest way to get it back

**Verdict: keep the h1.** The cost is small in the map pack and moderate in local organic results, and three short string changes recover nearly all of it. The larger losses on this page today sit next to the h1, not in it: the place name never appears in the visible text, and the title tag is long enough to be rewritten.

### Evidence

| Source | What it says | What kind of evidence |
|---|---|---|
| Whitespark, *2026 Local Search Ranking Factors* (published 6 Nov 2025; 47 practitioners scored 187 factors from 0 to 5; scores are summed) | "Keywords in GBP Landing Page Headings (H1, H2, etc)": map pack rank 20, score 135. Local organic rank 8, score 169. AI search rank 24, score 124. For scale, the top pack factor (primary GBP category) scores 227 and the top organic factor (a dedicated page for each service) scores 210. | Expert survey. Opinion, not measurement. |
| Same report | "Keywords in GBP Landing Page Title Tag": pack rank 17 (146), organic rank 4 (179). "Geographic (City/Neighborhood) Keyword Relevance of Content": pack rank 18 (142), organic rank 2 (190), AI rank 6 (153). Both outrank headings in both result types. | Expert survey |
| Same report | Pack ranks 1 to 14 are all profile, proximity and review factors. The first website factor is "HTML NAP Matching GBP NAP" at rank 15 (153). | Expert survey |
| Google, SEO Starter Guide | Lists "Number and order of headings" under things not to focus on: "from Google Search perspective, it doesn't matter if you're using them out of order." | Google documentation |
| John Mueller (Google), Reddit, reported 9 Sep 2019 | Headings are "great for SEO & accessibility, but they're not going to make or break your sites rankings." | Google statement, old but not withdrawn |
| Google, title link documentation | Lists "Heading elements, such as `<h1>` elements" among the sources for the title shown in results, and says it "may use the first heading" when the main title is unclear. | Google documentation |
| Ahrefs, title tag study (Nov 2021; 953,276 pages) | When Google does not use the title tag, it uses the h1 50.76% of the time. Titles wider than the display limit were 57% more likely to be rewritten. | Observational, dated |
| Zyppy, title rewrite study (data from early 2022; 80,959 titles; page updated 6 Oct 2026) | Titles over 60 characters: more than 76% rewritten. Over 70: 99.9%. Lowest rewrite rate at 51 to 60 characters (39% to 42%). Pipes removed or replaced 41.0% of the time; dashes 19.7%. | Observational, dated |

I found no controlled test that isolates the h1 on a local landing page. Nobody can honestly give a percentage for this decision, and this report does not.

### Reading

- **Map pack: close to nothing.** The pack is decided by category, distance, the business name, being open at the time of search, and reviews. Headings are the twentieth factor, and the factor as the panel defines it is "H1, H2, etc", so a phrase in an h2 counts toward it. A practice with zero reviews is held back by reviews, not by its headline.
- **Local organic: a real but recoverable cost.** Headings rank eighth. The two on-page factors the panel rates higher, the title tag and the geographic relevance of the content, can both carry the phrase without touching the h1.
- **The cost that is live today is a side effect.** With a brand h1, the title tag has to do the keyword work alone, and Google falls back to the h1 about half the time when it rewrites a title. The current title is 70 characters with two pipes, which is in the band both studies found most rewritten. The likely replacement is "I don't care how long it's been." as the blue link: no "dentist", no place. A title that fits removes that risk (A2).
- **The page does not yet say where it is.** "East Austin" appears four times in the source, all of them in the head (`index.html:6`, `:7`, `:11`, `:37`). It appears zero times in the visible text. The body says "the east side" three times (`:75`, `:203`, `:254`) and, apart from a bracketed placeholder at `:213`, "Austin" only in the two address lines (`:271`, `:319`). That is the second-ranked organic factor left empty (A1).

### Recovery, cheapest first

1. Two short string changes, one in the hero subhead and one in the Find-us heading (A1).
2. A 49-character title with the phrase first (A2).
3. The structured data and the Business Profile, which carry the category and the place in machine-readable form (A3 and the launch checklist).

The designation line (`.who`, `.desig`) needs no change. It already puts "General Dentist" in large type twice.

---

## 2. Template findings (fix now), in order of impact

### A1. "East Austin" is absent from the visible text · TEMPLATE · should fix

- **Where:** `index.html:75` (hero subhead), `:254` (Find-us h2), `:203` (bio).
- **What:** see the last bullet of the reading above. A searcher types "dentist east austin" or "dentist 78702"; the page answers with "the east side". Read out of context by a crawler or a language model, "a general dentist on the east side" names no city.
- **Expected:** the place appears in the first paragraph and in one heading. Whitespark 2026: geographic relevance of content is organic rank 2, pack rank 18, AI rank 6.
- **Fix (two strings):**
  - `:75` replace `I’m Paloma, a general dentist on the east side.` with `I’m Paloma, a general dentist in East Austin.`
  - `:254` replace `We’re in Holly, on the east side.` with `We’re in Holly, East Austin.`
  - Leave `:203` ("on the east side this October") as it is, so the local phrasing survives in her own story.
- **Spec conflict:** `content/copy.md` section 0 says the search phrase lives "never in a heading", and sections 2 and 10 set the two strings above. I think the spec is right about the h1 and about the full phrase "General dentist in East Austin", and that this change keeps to its intent: the Find-us heading already names the place, and "Holly, East Austin" is a plain statement of where the door is. The spec should be updated to the new strings.
- **Do not** add a keyword eyebrow above the h1 or a visually hidden phrase inside it. The first is the template tell the team is avoiding; the second is hidden text.

### A2. The title tag is 70 characters with two pipes · TEMPLATE · should fix

- **Where:** `index.html:6`: `Feast Dental | General dentist in East Austin | Dr. Paloma Krenek, DDS` (70 characters, counted; `copy.md` section 0 agrees).
- **What:** the tail is cut in results (`copy.md` already expects this), the length puts it in the most-rewritten band, and the fallback text for a rewrite is the brand h1. The brand comes first, although a new practice has nobody searching for its name yet.
- **Fix:** `<title>General Dentist in East Austin, TX - Feast Dental</title>` (49 characters). "Feast" stays locked to "Dental", as the brand core requires. If the brand lead wants the name first, `Feast Dental - General Dentist in East Austin, TX` is the same length and equally safe.
- **Spec conflict:** `brand/01-brand-core.md` section 2e and `copy.md` section 0 set the 70-character title. I think they should change. Her name is in the meta description, the visible text (four labels: `:77`, `:155`, `:213`, `:322`), five alt texts and the structured data, so a search for her name still finds the page.
- **For qa-compliance (sent to them directly):** in the current title her name appears with "General dentist" before it, not directly after it. The shorter title removes the question.
- **og:title** (`:11`, 45 characters) can stay as it is.

### A3. The `Dentist` JSON-LD is valid but thin · TEMPLATE for the structure, LAUNCH for the values · should fix

- **Where:** `index.html:32-48`.
- **As it stands:** valid JSON, the most specific type (Google: "Use the most specific `LocalBusiness` sub-type possible"), and both properties Google requires (`name`, `address`). `telephone`, `priceRange` and `openingHoursSpecification` are present and well formed. `priceRange` "$$" is allowed (under 100 characters).

| Property | Status now | Google local business doc (fetched today) | Note |
|---|---|---|---|
| `url` | missing | recommended; "fully-qualified URL of the specific business location" | Needs the domain |
| `geo` | missing | recommended; latitude and longitude "at least 5 decimal places" | Needs the real address |
| `openingHoursSpecification` | present; Sunday omitted | recommended; closed all day is `opens` and `closes` both "00:00" | Add the Sunday row |
| `aggregateRating`, `review` | absent | "only recommended for sites that capture reviews about other local businesses" | Keep them out. Reviews a business controls about itself are "ineligible for star review feature", and Google says "Don't aggregate reviews or ratings from other websites." |
| `@id`, `image`, `logo`, `hasMap`, `sameAs`, `areaServed` | missing | not listed | Valid on `Dentist` per schema.org; they tie the page to the profile and the place |
| `medicalSpecialty`, `isAcceptingNewPatients`, `knowsLanguage` | missing | not listed | Valid on `Dentist` (from `MedicalOrganization` and `Organization`). `https://schema.org/Dentistry` is a `MedicalSpecialty` member. This is the field of practice, not a claimed specialty; never put "cosmetic" here |
| `founder` / `employee` as `Person` | missing | not listed | Carries `honorificSuffix` "DDS", `jobTitle` "General Dentist", school and license |
| `hasOfferCatalog` | missing | not listed | The page's distinguishing facts are prices and durations; this is where a machine reads them |
| `WebSite` node | missing | Site names doc: `WebSite` structured data on the home page is the strongest signal for the name shown beside the result | Needs the domain |
| `telephone` | `+1-512-555-0142` | fine | Changed below to `+15125550142` only so it is identical to the six `tel:` links |

- **Expectation:** none of this earns a visible rich result for a dentist, and the Whitespark panel rates it low for ranking ("NAP in Schema/JSON-LD on GBP Landing Page URL": pack rank 118, organic rank 76; "Website Content Marked Up in Schema": pack 161, organic 69, AI 44). It is cheap, correct, and the one place the prices become unambiguous to a machine. Google's guidance for AI features asks only that "structured data matches the visible text on the page", which every value below does.

- **FAQ markup: do not add it.** Google's documentation changelog says the FAQ rich result "will no longer appear in Google Search starting May 7, 2026", and the feature's documentation was removed on 15 June 2026. `FAQPage` remains valid schema.org and is harmless, but it would be a second copy of seven answers (two of which still hold bracketed placeholders) with no search feature attached. Spend the effort on the visible answers instead (A4).
- **Service markup: yes, as offers.** Use `hasOfferCatalog` with one `Offer` per priced row, as below. No rich result follows from it; the value is that price, currency and what is included are stated once in a form that cannot be misread.

- **Corrected block, in full.** Placeholders are in square brackets and are written as strings so the block stays valid JSON while they are unfilled. At launch `latitude` and `longitude` become numbers.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://[domain]/#website",
      "url": "https://[domain]/",
      "name": "Feast Dental",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://[domain]/#practice" }
    },
    {
      "@type": "WebPage",
      "@id": "https://[domain]/#webpage",
      "url": "https://[domain]/",
      "name": "General Dentist in East Austin, TX - Feast Dental",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://[domain]/#website" },
      "about": { "@id": "https://[domain]/#practice" },
      "dateModified": "[YYYY-MM-DD: the day the prices and hours were last checked]"
    },
    {
      "@type": "Dentist",
      "@id": "https://[domain]/#practice",
      "name": "Feast Dental",
      "legalName": "[Legal entity name, PLLC]",
      "description": "General dentistry in the Holly neighborhood of East Austin, Texas, by Dr. Paloma Krenek, DDS, General Dentist. A first visit is 75 minutes and $195 without insurance: a full exam, a full set of X-rays, a regular cleaning, and a written plan with prices.",
      "url": "https://[domain]/",
      "telephone": "+15125550142",
      "image": [
        "https://[domain]/assets/img/[real photo of the front door, 1x1].jpg",
        "https://[domain]/assets/img/[real photo of the front door, 4x3].jpg",
        "https://[domain]/assets/img/[real portrait of the dentist, 16x9].jpg"
      ],
      "logo": "https://[domain]/assets/img/[logo, square, 512px].png",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "[Payment types: to confirm]",
      "foundingDate": "2026-10",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "isAcceptingNewPatients": true,
      "knowsLanguage": ["en", "[es: keep only if confirmed]"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2217 Tejocote Street",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78702",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "[30.xxxxx]",
        "longitude": "[-97.xxxxx]"
      },
      "hasMap": "[Google Maps URL of the verified Business Profile]",
      "areaServed": [
        { "@type": "City", "name": "Austin, TX" },
        { "@type": "Place", "name": "East Austin" },
        { "@type": "Place", "name": "Holly" }
      ],
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Wednesday"], "opens": "08:00", "closes": "17:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Thursday"], "opens": "11:00", "closes": "19:30" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "14:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "00:00", "closes": "00:00" }
      ],
      "founder": { "@id": "https://[domain]/#dentist" },
      "employee": { "@id": "https://[domain]/#dentist" },
      "sameAs": [
        "[Google Business Profile URL]",
        "[Yelp URL]",
        "[Instagram URL]",
        "[Facebook URL]"
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "name": "Book online",
        "target": { "@type": "EntryPoint", "urlTemplate": "[Online booking URL]" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Prices without insurance",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "First visit",
            "description": "75 minutes. A full exam, a full set of X-rays, a regular cleaning, and a written plan with a price for anything else. Price without insurance.",
            "price": 195,
            "priceCurrency": "USD",
            "itemOffered": { "@type": "Service", "name": "First visit", "alternateName": "New patient exam, X-rays and cleaning", "serviceType": "General dentistry" }
          },
          {
            "@type": "Offer",
            "name": "Checkups",
            "description": "From $145. 50 minutes. After your first visit: exam and a regular cleaning. X-rays when they are due. Price without insurance.",
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": 145, "priceCurrency": "USD" },
            "itemOffered": { "@type": "Service", "name": "Checkups", "alternateName": "Dental exam and teeth cleaning", "serviceType": "General dentistry" }
          },
          {
            "@type": "Offer",
            "name": "Fillings",
            "description": "From $190. Tooth-colored. Priced in writing before work starts. Price without insurance.",
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": 190, "priceCurrency": "USD" },
            "itemOffered": { "@type": "Service", "name": "Fillings", "alternateName": "Tooth-colored fillings", "serviceType": "General dentistry" }
          },
          {
            "@type": "Offer",
            "name": "Emergency",
            "description": "$95. An exam and an X-ray of the tooth that hurts or broke. Treatment is priced before it starts. Price without insurance.",
            "price": 95,
            "priceCurrency": "USD",
            "itemOffered": { "@type": "Service", "name": "Emergency visit", "alternateName": "Emergency dental exam", "serviceType": "General dentistry" }
          },
          {
            "@type": "Offer",
            "name": "Whitening, trays to take home",
            "description": "From $250. Price without insurance.",
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": 250, "priceCurrency": "USD" },
            "itemOffered": { "@type": "Service", "name": "Whitening", "alternateName": "Take-home teeth whitening" }
          },
          {
            "@type": "Offer",
            "name": "Whitening, in the chair",
            "description": "From $450. Price without insurance.",
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": 450, "priceCurrency": "USD" },
            "itemOffered": { "@type": "Service", "name": "Whitening", "alternateName": "In-office teeth whitening" }
          },
          {
            "@type": "Offer",
            "name": "Aligner consult",
            "description": "$0. 30 minutes, with a 3D scan. [Keep this offer only if nothing from the consult is folded into a later fee.]",
            "price": 0,
            "priceCurrency": "USD",
            "itemOffered": { "@type": "Service", "name": "Aligner consult", "alternateName": "Clear aligner consultation" }
          },
          {
            "@type": "Offer",
            "name": "Aligners",
            "description": "From $3,400. [Aligner brand: to confirm.] Price without insurance.",
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": 3400, "priceCurrency": "USD" },
            "itemOffered": { "@type": "Service", "name": "Aligners", "alternateName": "Clear aligners" }
          }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://[domain]/#dentist",
      "name": "Paloma Krenek",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "DDS",
      "jobTitle": "General Dentist",
      "description": "Dr. Paloma Krenek, DDS, General Dentist. She opened Feast Dental in East Austin in October 2026.",
      "image": "https://[domain]/assets/img/[real portrait of the dentist].jpg",
      "worksFor": { "@id": "https://[domain]/#practice" },
      "knowsLanguage": ["en", "[es: keep only if confirmed]"],
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "[Dental school]" },
        { "@type": "CollegeOrUniversity", "name": "[University]" }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Doctor of Dental Surgery (DDS)",
          "recognizedBy": { "@type": "CollegeOrUniversity", "name": "[Dental school]" }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "license",
          "name": "Texas dental license [number]",
          "recognizedBy": { "@type": "GovernmentOrganization", "name": "Texas State Board of Dental Examiners" }
        }
      ],
      "identifier": { "@type": "PropertyValue", "propertyID": "NPI", "value": "[10-digit NPI]" },
      "sameAs": [
        "[State board license lookup URL for this license]",
        "[NPI registry record URL]"
      ]
    }
  ]
}
</script>
```

Every price, duration and inclusion above is copied from the visible page (`index.html:79`, `:94`, `:160-169`, `:240`). The `alternateName` values are the searcher's words for the same services; they add no fact that is not on the page.

### A4. Make the price answer quotable on its own · TEMPLATE · should fix

- **Where:** `index.html:282-288` (FAQ) and `:172` (the note under the services).
- **What:** for a question such as "dentist in East Austin without insurance price", an answer engine lifts a passage. The page has the facts in plain text, which is the hard part, but no single passage holds who, where, how much, how long and what is included. FAQ answer 1 opens "$195." with no practice, no place and no duration. The other four priced services have no question at all.
- **Evidence:** Google's AI features page says the features use "query fan-out", "issuing multiple related searches across subtopics", and asks for "important content ... in textual form". It also says no special markup or AI text file is needed, so do not add an `llms.txt`. Whitespark 2026 AI factors: geographic relevance of content rank 6, scannable content structure rank 10.
- **Fix 1.** Replace the answer at `:282` with:
  `$195 at Feast Dental in East Austin, and it takes 75 minutes. That covers a full exam, X-rays, a regular cleaning, and a written plan with prices. If your gums need more than a regular cleaning, I show you why and price it first.`
- **Fix 2.** Add these after the existing seven, in the existing markup. Every fact is already on the page.

```html
<details name="faq"><summary><span class="q">What does a filling cost without insurance?</span><span class="mk" aria-hidden="true"></span></summary><p class="a">From $190 for a tooth-colored filling. I draw the spot and give you the price in writing before I start.</p></details>
<details name="faq"><summary><span class="q">What does an emergency visit cost?</span><span class="mk" aria-hidden="true"></span></summary><p class="a">$95. I look at what hurts or broke and X-ray that tooth. Treatment is priced before it starts.</p></details>
<details name="faq"><summary><span class="q">Are you open evenings or Saturdays?</span><span class="mk" aria-hidden="true"></span></summary><p class="a">Yes. Tuesdays and Thursdays till 7:30 pm, and Saturdays from 9 am to 1 pm.</p></details>
<details name="faq"><summary><span class="q">Do you speak Spanish?</span><span class="mk" aria-hidden="true"></span></summary><p class="a" lang="es">Sí. Hablo español.</p></details>
```

  The Spanish item prints only if it is true of the real dentist (it is flagged **[confirm]** in `copy.md` section 3).
- **Fix 3 (LAUNCH).** Append to `:172`: ` Prices checked [month and year].` and keep `dateModified` in the JSON-LD in step. A price with a date is easier to trust and to cite than one without.
- **Spec conflict:** `copy.md` ("Word count of visible copy") lists FAQ questions 1 and 5 first among the cuts if the page must be shorter. For search they are the two most valuable answers on the page: they are the literal queries. Cut elsewhere. The four additions are about 75 words and sit inside closed accordions, so the on-load count does not change.
- **Open question for the copy lead:** "Are you taking new patients?" is a real query, and "new patient" appears nowhere on the page because the voice guide bars "patients" in Paloma's sentences. A question is the visitor speaking, so it could carry the term (answer: `Yes. Book online, or call or text (512) 555-0142.`). I have not included it above; it is the copy lead's call.

### A5. The head is not ready for a domain · TEMPLATE for the scaffolding, LAUNCH for the values · should fix

- **Where:** `index.html:4-23`.
- **Sound as built:** `lang="en"`; the viewport does not block zoom; `theme-color` matches the ground colour; the meta description is 148 characters with the price, the duration and a call to action ("Book online."); `twitter:card` is enough on its own because the other card fields fall back to the Open Graph tags; `og:image` has width, height and alt. The apple-touch-icon is a 180 px square, which Google's favicon doc accepts.
- **Missing or wrong:**
  - `og:url` is one of the four properties the Open Graph protocol requires for every page. Absent.
  - `og:image` (`:14`) is a relative path. The protocol defines a URL as one that uses `http://` or `https://`; link previews in messaging and social apps will not resolve `assets/img/social-card.jpg`. The comment at `:13` already says so.
  - No canonical. Fine while `noindex`; needed the day it is removed, because the profile link will carry tracking parameters.
  - `og:site_name` and `og:locale` are absent. Google's site names doc lists `og:site_name` as a source for the name shown beside the result.
  - The `rel="icon"` rasters are 16 and 32 px. Google's favicon doc (as fetched today) recommends larger than 48 px and lists raster formats only.
  - `social-card.jpg` has the demo strip baked into the top of the image (viewed). It also shows no place.
  - `index.html:8` says to keep `noindex` "until every placeholder in README.md is replaced", and `:31` says "see README.md". `README.md` contains no list of placeholders. The lists are in `brand/01-brand-core.md` Part 4 and `content/copy.md` ("Every bracketed placeholder"). The gate for removing `noindex` points at a list that does not exist.
- **Fix now (no domain needed):** add

```html
<meta property="og:site_name" content="Feast Dental">
<meta property="og:locale" content="en_US">
<meta property="og:image:type" content="image/jpeg">
<link rel="icon" href="assets/img/favicon-96.png" sizes="96x96" type="image/png">
```

  (`favicon-96.png` is a new file, a 96 px raster of the existing mark), and change the two comments to point at `brand/01-brand-core.md` Part 4 and `content/copy.md`.
- **Fix at launch:** replace `:9` and `:14` and add the two new lines:

```html
<link rel="canonical" href="https://[domain]/">
<meta name="robots" content="max-image-preview:large">
<meta property="og:url" content="https://[domain]/">
<meta property="og:image" content="https://[domain]/assets/img/social-card.jpg">
```

  Regenerate the social card without the demo strip, and consider one more line on it under the designation: `East Austin`.

### A6. Clock-driven text can be indexed and quoted when it is no longer true · TEMPLATE · should fix

- **Where:** `index.html:65` (header status), `:80-92` (opening chips and their caption), `:258` (Find-us status); `assets/js/page.js:64-80` and `:110-129`.
- **Does the script-driven content matter for crawling?** No. All primary content is in the HTML: every heading, price, duration, the hours table, both address lines, the FAQ answers (inside `<details>`, in the DOM) and the hidden "With insurance" panel. The script adds only the open-now line, the "Today" marker, the chips and the controls marked `data-needs-js`. Hours are in the static table and the JSON-LD, and "open now" in the map pack comes from the Business Profile, not from this page.
- **What does matter:** Google renders the page with the script at whatever moment it crawls, so the stored copy will most likely contain a line such as "Closed now. Opens Tue 11 am CT." and, on the live site, three real appointment times. Any of them can surface in a result snippet days later.
- **Fix:** `data-nosnippet`, which Google supports "on `span`, `div`, and `section` elements" only:
  - `:65` `<span class="st-l" data-nosnippet>Hours</span><span class="st-s" data-nosnippet>Hours</span>`
  - `:80` `<div class="op" data-nosnippet>`
  - `:258` `<span data-bigstatus-text data-nosnippet></span>`
  - `page.js:77`, after the class is set: `tag.setAttribute('data-nosnippet', '');`
- Not tested in a renderer; this is from reading the script.

### A7. The hours are written in four places that must be edited together · TEMPLATE · could fix

- **Where:** the table (`index.html:262-268`), the footer (`:321`), the JSON-LD (`:42-45`) and `HOURS` in `assets/js/page.js:21`. Three prose lines repeat them (`:76`, `:309`, ticker `:102-103`).
- **Today they agree.** Every value was compared (table below in section 4).
- **Why it matters at launch:** "Business is Open at Time of Search" is the fifth pack factor in the Whitespark survey (score 189), and the evening and Saturday hours are this practice's advantage in exactly those searches. If the real dentist trims the hours and one of four copies is missed, the page will say "Open now" against its own table and against the profile.
- **Fix:** let the script read the hours from the JSON-LD so two of the four copies become one. Replace `page.js:21` with:

```js
const ld = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
const practice = (ld['@graph'] || [ld]).find((n) => n['@type'] === 'Dentist');
const LD_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const toMins = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
const HOURS = LD_DAYS.map(() => null);
for (const s of practice.openingHoursSpecification)
  for (const d of [].concat(s.dayOfWeek))
    if (s.opens !== s.closes) HOURS[LD_DAYS.indexOf(d)] = [toMins(s.opens), toMins(s.closes)];
```

  It works with the current block and with the A3 block (the Sunday row, where `opens` equals `closes`, stays `null`). It assumes day names are written as plain words, as they are now. Not run.

### A8. Words that touch in the DOM · TEMPLATE · could fix

CSS separates these visually, but a text extraction (a snippet builder, a reader mode, a language-model fetcher) sees them joined.

| Where | Extracted text | Fix |
|---|---|---|
| `index.html:160`, `:161`, `:168`, `:169` | `from$145`, `from$190`, `from$250`, `from$3,400` | a space after `</span>`: `<span class="svc__from">from</span> $145` |
| `:160-169`, between `.svc__desc` and `.svc__price` | `...price it first.from$145`, `...before it starts.$95` | a space between the two spans |
| `:166` | `Change how they lookOnly if you want to.` | a space before `<small>` |
| `:302` | `Price in writing.Come in.` | a space before `<span class="w w--wide once-wide"` |
| `:65` | `HoursHours` (after script: both status lengths run together) | a space between the two spans |

The h1 is not affected: its seven word spans have real spaces between them, and the sizing copy is CSS generated content (`page.css:185`), which is not in the DOM.

### A9. Phones download a portrait to show a landscape band · TEMPLATE · could fix

- **Where:** `index.html:25` and `:73`; `page.css:488`, `:530`.
- **Sound as built:** the hero image is preloaded with `imagesrcset` and `imagesizes` that match the `<source>` exactly, `fetchpriority="high"` on both, `loading="eager"`; the other eleven images are `loading="lazy"`; all twelve have `width` and `height`; the display font is preloaded (the text font is not, and uses `font-display: swap`); both families have metric-matched fallbacks; the script is a module, so it does not block parsing; the chips have a reserved `min-height` (`page.css:248`), so their arrival should not move the layout. By my area estimate from the CSS the hero image is the largest element at every width. Nothing in the markup looks likely to fail a Core Web Vitals threshold.
- **What:** below 1024 px the hero figure is a band `100vw` wide and 204 px tall (up to 400 px on tablets), filled by `object-fit: cover` from a 4:5 portrait. A phone at three device pixels per CSS pixel needs about 1170 by 612 pixels and downloads the 1122 by 1402 file: roughly 2.2 times the pixels it shows, on the image that sets the largest-paint time.
- **Fix:** an art-directed wide crop for small screens, the pattern already used at `index.html:211` for `paloma-drawing-4x5`: a `<source media="(max-width: 1023px)">` with a 2:1 crop at 780, 1170 and 1560 px wide, and the preload split into two `<link>` elements with matching `media`. Needs new derivatives from `tools/build-images.mjs`.
- **Unmeasured:** file sizes were not readable in this session, so the saving in bytes is unknown.
- **No action:** `font-display: block` on the display face (`page.css:11`) hides the headline for up to the block period on a slow connection. With the preload and the matched fallback this is a design choice, not a defect.

### A10. Two small ones · TEMPLATE · could fix

- **Phone number spacing.** The digits and the format agree everywhere (table in section 4). Three of the five visible instances join the area code with a non-breaking space (`index.html:89`, `:272`, `:305`); the header and footer use a normal space (`:66`, `:320`). Search engines normalise this. A strict string comparison, or a copy and paste into a form, sees two different strings. Use a normal space and keep the number on one line with `white-space: nowrap`, which `.tel` and `.btn__body` already have.
- **Address markup.** The footer address (`:319`) is bare text in a `div`. Wrapping the two address lines in `<address>` costs nothing and says what they are. No ranking effect is claimed.

---

## 3. Launch findings (need real facts), in order of impact

### B1. Indexability gate · LAUNCH · blocker on launch day

`noindex` is deliberate and correct today. On launch day all of the following change together, or the page is either invisible or public with demo text in its snippet:

- Replace `index.html:9` with the robots line in A5. Add the canonical, `og:url` and the absolute `og:image`.
- Delete the demo strip (`:54`), the footer demo note (`:326`) and the comment at `:31`. The strip is the first text in `<body>` and would be the likeliest snippet.
- Zero `data-placeholder` attributes: there are 19 today (`:67`, `:81`, `:88`, `:140`, `:160`, `:161`, `:162`, `:168`, `:169`, `:225`, `:244`, `:245`, `:272`, `:291`, `:304`, `:320`, `:327` twice, `:337`). None of `#book`, `#reviews`, `#insurance`, `#privacy`, `#accessibility` exists as a target.
- Zero bracketed placeholders in the visible text: there are 11 today (`:213` four, `:239` two, `:256`, `:283`, `:288`, `:322`, `:324`).
- `sampleSlots()` replaced by the scheduler, and `BOOKING_OPEN_ALL_NIGHT` set truthfully (`page.js:25`, `:88`).
- Any staging copy keeps `noindex` by HTTP header or sits behind a password. Do not use a robots.txt disallow for this: Google's robots doc says the rules "can be read and followed only if crawlers are allowed to access the pages".

### B2. One page cannot rank for five services · LAUNCH, first build after it · should fix

- **Evidence:** "Dedicated Page for Each Service" is the top local organic factor in the Whitespark survey (210), second for AI search (170) and eighth for conversion.
- **What:** this page can earn the brand, the dentist's name, and "general dentist" plus the place. It will not earn "teeth whitening East Austin" or "emergency dentist East Austin" against pages that are about only that.
- **Fix:** five short pages in the same voice, each with a brand h1 and a descriptive title, and the home page rows linking to them. Ownership, so the pages do not compete:

| Queries | Owner | Title |
|---|---|---|
| brand, dentist's name, general dentist + East Austin / Holly / 78702, first visit cost without insurance | `/` | `General Dentist in East Austin, TX - Feast Dental` |
| teeth cleaning, checkup | `/checkups/` | `Dental Checkups and Cleanings in East Austin - Feast Dental` |
| fillings, cavity | `/fillings/` | `Tooth-Colored Fillings in East Austin - Feast Dental` |
| emergency dentist, toothache, broken tooth | `/emergency/` | `Emergency Dentist in East Austin - Feast Dental` |
| teeth whitening | `/whitening/` | `Teeth Whitening in East Austin - Feast Dental` |
| clear aligners, [brand] | `/aligners/` | `Clear Aligners in East Austin - Feast Dental` |

  The home page keeps its one-line service rows and must not grow service copy of its own. When the pages exist, each service word on the home page links to its page and the price or button links to booking. Today all five rows link to `#book` (`:160-169`).

### B3. The searcher's vocabulary · LAUNCH · should fix

The page's own words are right for the voice. These are the terms people type that appear nowhere in the visible text, with the cheapest honest place for each:

| Term | Now | Where it can go |
|---|---|---|
| the aligner brand | `[aligner brand to confirm]` in the brand core; "Aligners" on the page | the Aligners description, once confirmed. People search the brand name |
| toothache, broken tooth | "Something hurts or broke" | the `/emergency/` page (B2); the home page line can stay |
| teeth whitening, teeth cleaning | "Whitening", "a regular cleaning" | service page titles (B2); `alternateName` in A3 |
| new patient | "First visit" | the open question in A4; `isAcceptingNewPatients` in A3; the profile |
| cross streets, landmark, bus route, parking | `[Parking, nearest bus stop and level entrance: to confirm]` (`:256`) | that line, written as true wayfinding. Name a landmark or cross street a local would use. Not an "areas we serve" list, which is trait 6 of the generic fingerprint |
| children, families | not stated | one FAQ answer, whichever way it is true |

### B4. The Spanish line · LAUNCH · could fix

`<li lang="es">Hablo español</li>` (`:109`) is correctly tagged and sits only in the ticker, which the script duplicates for the loop. It tells an English reader something true; it will not be found by anyone searching in Spanish. If Spanish-speaking patients matter to the real practice: the FAQ item in A4, `knowsLanguage` in A3, the language on the profile, and later a full Spanish page at `/es/` with `lang="es"` and reciprocal `hreflang` links on both pages. Do not mix more Spanish into this URL than a tagged line.

### B5. What replaces the map · LAUNCH · could fix

The absence of a map embed costs little: "Embedded Google Map for Location on GBP Landing Page" is pack rank 125 and organic rank 91 in the Whitespark survey. At launch:

- "Get directions" (`:272`) links to the verified profile's Google Maps URL. Add an Apple Maps link beside it.
- A static, self-hosted map image with the alt text `copy.md` section 10 already supplies, linked to the same URL.
- `hasMap` and `geo` in the JSON-LD.
- No map iframe. It sets third-party cookies, which would make "The only cookie on this site." (`:331`) untrue.

---

## 4. Checked and found sound

### Heading outline, as parsed

```
h1  I don’t care how long it’s been.
  h2  Here’s your whole first visit.
        h3  Book / Look / You decide
  h2  What I do, and what it costs.
        h3  Checkups / Fillings / Emergency / Whitening / Aligners
  h2  Nervous is normal here.
  h2  I’m Paloma.
        h3  I ask first. / I draw it. / I price it in writing.
  h2  0 reviews. I opened in October. Here’s what I promise instead.
        h3  No lecture. / The price in writing. / I stop when you say.
  h2  You’ll know the cost first.
  h2  We’re in Holly, on the east side.
  h2  Go on, ask.
  h2  No lecture. Price in writing. Come in.        (joined in the DOM: A8)
footer
  h2  Find us / Call or text / Hours / The dentist
```

One h1, 13 h2, 14 h3, no skipped level. Nothing is misleading. The per-word spans in the h1 do not break it for a crawler or a screen reader (A8). The footer column heads as h2 are harmless to Google and sit inside the `<footer>` landmark; no change. An h3 inside a link (`:160-169`) is valid. Apart from the footer's "The dentist", the outline read alone contains no "dentist", "dental" or "Austin", which is the reason A1 puts the place into the Find-us heading.

### Name, address, phone: every instance

| | Value | Where |
|---|---|---|
| Name | `Feast Dental` | `:6`, `:11`, `:17`, `:36`, `:57`, `:66` (aria-label), `:203`, `:318`, `:324`. Identical each time; capitals are CSS |
| Street | `2217 Tejocote Street` | `:40` (JSON-LD), `:256` (caption), `:271`, `:319`. "Street" spelled out every time, no suite |
| City, state, ZIP | `Austin, TX 78702` | `:271`, `:319`; split into fields at `:40`. Identical |
| Phone, visible | `(512) 555-0142` | `:66`, `:320` with a normal space; `:89`, `:272`, `:305` with a non-breaking space (A10) |
| Phone, links | `tel:+15125550142` six times (`:66`, `:89`, `:272`, `:305`, `:320`, `:338`); `sms:+15125550142` once (`:189`) | Identical |
| Phone, JSON-LD | `+1-512-555-0142` (`:38`) | Same number; A3 aligns the format |

The hero carries the phone but no address, which is fine. The name, address and phone are in crawlable HTML text twice, which is what the survey's "HTML NAP Matching GBP NAP" (pack rank 15) asks of the page. The other half is the profile matching these strings exactly.

### Hours: every source

| Day | Table `:262-268` | Footer `:321` | JSON-LD `:42-45` | `page.js:21` (minutes) |
|---|---|---|---|---|
| Mon | 8 am to 5 pm | 8 to 5 | 08:00 to 17:00 | 480 to 1020 |
| Tue | 11 am to 7:30 pm | 11 to 7:30 | 11:00 to 19:30 | 660 to 1170 |
| Wed | 8 am to 5 pm | 8 to 5 | 08:00 to 17:00 | 480 to 1020 |
| Thu | 11 am to 7:30 pm | 11 to 7:30 | 11:00 to 19:30 | 660 to 1170 |
| Fri | 8 am to 2 pm | 8 to 2 | 08:00 to 14:00 | 480 to 840 |
| Sat | 9 am to 1 pm | 9 to 1 | 09:00 to 13:00 | 540 to 780 |
| Sun | Closed | closed | no entry | null |

All agree, and the prose lines at `:76`, `:102-103` and `:309` agree with them. The only gap is the missing Sunday row in the JSON-LD (A3).

### Images

Twelve images, each with alt text, intrinsic `width` and `height`, and AVIF, WebP and JPEG sources. Alt text describes the frame and names the dentist in five of them, which is the right association; it carries no practice name, place or keyword, and should not. File names are lowercase, hyphenated and descriptive. I see no ranking case for renaming them. At launch the storefront alt (`:256`) is the one place where the practice name and street are honest description: `The front door of Feast Dental at [street address].` The photographs themselves must be real ones, on the page and on the profile.

### Internal anchors

The four nav anchors and "Hours and directions" resolve to real ids (`#first-visit`, `#services`, `#cost`, `#find-us`). The ids are descriptive. Fragments are not separate URLs, so there is nothing to canonicalise.

---

## 5. Launch checklist for the real practice

### Google Business Profile (the pack is decided here)

- [ ] **One profile, not two.** Google's guideline for a sole practitioner at a branded practice is a single shared profile, named in the form `[brand/company]: [practitioner name]`. A second, practitioner-only profile splits the reviews.
- [ ] **Name:** the real-world name only. "Keywords in GBP Business Title" is the third pack factor (223), and "Dental" is already in the name. Adding "Dentist" or "East Austin" is the "unnecessary information" the guideline forbids and risks suspension.
- [ ] **Primary category:** Dentist (the top pack factor, 227).
- [ ] **Do not add "Cosmetic dentist" or "Orthodontist".** This follows qa-compliance's reading (`.ops/qa/compliance.md` section 7): a category states what the business is, and the Texas rules bar a general dentist from implying a specialty, recognised or not. It is a reading, not a Board statement; none was found on directory categories.
- [ ] **Categories that name a service** (Emergency dental service, Teeth whitening service) are lower risk if the service is really offered in the posted hours. Have dental counsel confirm before adding any. Exact names were not checked against Google's live picker in this session.
- [ ] **Description:** include "Dr. [Name], DDS, General Dentist", with the designation directly after the name.
- [ ] **Address, suite and pin** exactly as on the page. Check the pin is on the door ("Proper Placement of the Map Pin" is pack rank 10).
- [ ] **Phone:** the same local number as the page. If call tracking is wanted, the tracking number goes on the profile as primary with the real number as additional; the website keeps the real number in the HTML.
- [ ] **Hours** identical to the page, plus special hours for every holiday. Evening and Saturday hours are a ranking asset in those searches.
- [ ] **Opening date:** month and year (October 2026 in the placeholder facts).
- [ ] **Website link** to the home page with `?utm_source=google&utm_medium=organic&utm_campaign=gbp`; the canonical tag absorbs the parameters. **Appointment link** to the scheduler.
- [ ] **Services:** list each service here, including whitening and aligners, which belong in services and not in categories. Any price typed into the profile needs the same disclosures as the page: the good-through date, what is included, and that a "from" fee can be higher (qa-compliance).
- [ ] **Attributes** from the live editor (names vary by category and were not verified here): the accessibility set, matching whatever the page says about the entrance; languages; new patients; payment types; any "identifies as" attribute the dentist chooses to claim.
- [ ] **Photos:** real exterior matching the "front door" picture, interior, the dentist. No generated images.
- [ ] The public questions-and-answers section has been withdrawn from profiles and replaced in the US by an AI answer feature in Maps that, according to trade coverage, draws on the profile, the reviews and the website. This was not confirmed on a Google help page in this session. Practical effect: the page's FAQ is the input, which is one more reason for A4.

### Reviews

- [ ] Replace the placeholder at `:225` with the profile's review link, and ask every patient from the first day. Ratings, review count and recency are pack ranks 6, 9 and 11; a new practice is limited by these before anything on the page.
- [ ] No incentive and no filtering of who is asked (`research/02` section 6 covers the rules).
- [ ] Reply to every review.
- [ ] Do not mark Google reviews up with `aggregateRating` on the site (A3).
- [ ] The day there is a rating, the "0 reviews" heading (`:218`) becomes the true rating and count as text, as the brand core already says.

### Citations (same name, address and phone, character for character)

- [ ] Apple Business Connect, Bing Places, Yelp, Facebook and Instagram. Bing and Yelp matter beyond their own traffic: vendor studies seen in search summaries (not opened, and they disagree with each other) report that AI assistants lean on them for local answers.
- [ ] Health directories: the NPI registry record (many directories copy the practice address and phone from it), the state board license record, Healthgrades, Zocdoc, WebMD, and each insurer's provider directory once the plans are confirmed.
- [ ] The data aggregators (Data Axle, Foursquare, Neustar Localeze).
- [ ] Local and professional: the Texas Dental Association and the local dental society if she is a member, the chamber of commerce, the neighbourhood association, Nextdoor.
- [ ] One piece of local press about the opening. Unstructured citations and "best of" lists are the top AI visibility factors in the Whitespark survey (ranks 1, 4 and 7).

### Site hygiene

- [ ] Everything in B1.
- [ ] One canonical host. `http` and the other of `www` or the bare domain redirect to it in a single 301. `/index.html` redirects to `/`.
- [ ] `robots.txt` allowing everything, with a `Sitemap:` line. Never disallow `/assets/`: Google needs the CSS and script to render the page. Do not block AI search crawlers there, and check the host or CDN is not blocking them by default (Google's AI features page: crawling must be allowed "by any CDN or hosting infrastructure").
- [ ] `sitemap.xml` listing `/`, the privacy page, the accessibility page, and later the service pages and `/es/`. Neither file exists in the project today.
- [ ] Search Console and Bing Webmaster Tools, both verified by DNS record. Submit the sitemap and request indexing.
- [ ] After 28 days of traffic, read the Core Web Vitals report. Targets: largest contentful paint under 2.5 s, interaction to next paint under 200 ms, layout shift under 0.1.
- [ ] `page.css` and `page.js` have no version in their file names. Either give them one or keep their cache lifetime short, so an hours change reaches returning visitors.

### Measurement without breaking "The only cookie on this site."

The caption at `:331` is a factual claim (`copy.md` section 13 flags it). To keep it true:

- [ ] Search Console, Bing Webmaster Tools and the profile's own performance report: no script on the page at all.
- [ ] A cookieless analytics product or server logs. Not a default Google Analytics install, which sets cookies; no advertising pixels.
- [ ] Count taps on `tel:`, `sms:` and the booking link as events. They are the conversions.
- [ ] No call-tracking script that swaps the number in the page. It sets cookies, and it breaks the match between the HTML number and the profile.
- [ ] Link out to the scheduler and to Google Maps; do not embed either in an iframe. If the practice insists on an embed, delete the caption.
- [ ] The motion preference is kept in `localStorage`, not a cookie; `copy.md` section 6 already asks the privacy page to mention it.

### After launch

- [ ] The five service pages (B2).
- [ ] `/es/` if confirmed (B4).
- [ ] Update "this October" (`:203`) and "I opened in October" (`:218`) after December 2026, as the brand core notes.

---

## 6. Sources (all opened or searched on 2026-11-09)

- Whitespark, 2026 Local Search Ranking Factors: https://whitespark.ca/local-search-ranking-factors/
- Google, local business structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google, documentation changelog entries on the FAQ rich result (reached from the former FAQ page URL): https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Google, review snippet guidelines: https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- Google, title links: https://developers.google.com/search/docs/appearance/title-link
- Google, site names: https://developers.google.com/search/docs/appearance/site-names
- Google, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google, robots meta tag and `data-nosnippet`: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Google, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google, favicon in Search: https://developers.google.com/search/docs/appearance/favicon-in-search
- Google, Business Profile guidelines: https://support.google.com/business/answer/3038177
- schema.org: https://schema.org/Dentist and https://schema.org/Dentistry
- Open Graph protocol: https://ogp.me/
- Ahrefs, title tag study (2021): https://ahrefs.com/blog/title-tags-study
- Zyppy, title rewrite study (2022 data): https://zyppy.com/seo/google-title-rewrites/
- Search Engine Roundtable on Mueller and headings (2019): https://www.seroundtable.com/google-headings-seo-rankings-28185.html
- Removal of the profile questions-and-answers section (trade coverage, seen in search summaries, not opened): https://www.seroundtable.com/google-maps-qa-feature-ask-40594.html
- Business Profile categories for dentists (third-party guides, seen in search summaries, not opened; they disagree on "Dental clinic"): https://www.brightlocal.com/blog/google-business-profile-categories/
- AI assistants and local sources (vendor data, seen in search summaries, not opened): https://ppc.land/yelp-gets-3-4x-more-ai-citations-than-any-rival-in-new-local-search-data/
- One page did not load: https://www.sterlingsky.ca/local-seo-for-dentists-dental-seo/ returned no text, so nothing from it is used.
