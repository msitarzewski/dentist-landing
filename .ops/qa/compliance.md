# Advertising and consumer-protection check: Feast Dental landing page

Reviewer: Legal Compliance Checker. Date: 2026-11-09. Report only; nothing under `index.html`, `assets/`, `brand/`, `content/`, `research/` or `tools/` was edited.

This is a compliance reading by a non-lawyer, not legal advice. A real practice should have a Texas dental-practice attorney confirm the items marked "must" before launch.

## 0. What was tested

- **Version.** `index.html` 46,932 bytes, modified 22:50:19; `assets/js/page.js` 17,937 bytes, 22:51:29; `assets/css/page.css` 50,691 bytes, 22:51:52. The first read was the 22:17 file; the page then changed three times while this review ran (22:32, 22:42, 22:50). Quotes and line numbers in sections 3 to 5 are from the 22:50 files. At 23:01 most of the wording in section 5 was applied to the page, and the build kept moving until 23:06 (`index.html` 50,870 bytes, 23:06:44; `page.js` 20,604 bytes, 23:08:33; `page.css` 54,847 bytes, 23:06:51). Section 1a is a full re-check of that last build with its own line numbers. Where the two differ, section 1a is current.
- **How.** Read every visible string, the head tags and the JSON-LD. Measured computed font sizes in my own browser tab at 1440x900, 1024x768, 768x1024 and 390x844, and again at 1440 and 390 on the 22:51 build. Tested storage in a clean, isolated browser context. Screenshots: `.ops/qa/shots/compliance/`.
- **Is the font-size sentence in §108.55(b) real? Yes, confirmed at the primary source.** A fetch helper could not open any Texas source (Justia, the Texas Register archive and the Board's rules page all returned 403) and reported the sentence as unconfirmed. I then read §108.55 on the Secretary of State's Texas Administrative Code viewer (text as of 11/09/2026; screenshot `.ops/qa/shots/compliance/tx-sos-108-55.png`), on Cornell LII, and in the Board's own 2016 rules compilation. All three carry the sentence word for word, and an independent second reader found it on Cornell LII as well. What is unverified is how the Board applies it (section 3), not whether it exists. Rules change: before launch the practice should re-read 22 TAC chapter 108, subchapter E in the Texas Administrative Code and put the questions in section 3 to the Texas State Board of Dental Examiners or to dental counsel.
- **Frame.** Every practice fact is a placeholder. The page is judged as a template a real Texas general dentist would fill in. Severity uses two scales: the brief's (must before any real use / should / optional) and the QA README's (blocker / should fix / could fix). Nothing here blocks the page as a labelled demo.

## 1. The five things that matter most

1. **Texas has a price-advertising rule the project never read.** 22 TAC 108.53(c) requires any advertisement that includes a price to disclose, among other things, "the dates upon which the advertised service will be available at the advertised price" and "a disclosure statement that the fee is a minimum fee and that the charges may increase depending on the treatment required". At 22:50 the page stated eight prices and no dates. The 23:01 build adds the date placeholders and the minimum-fee sentence; what remains is in section 1a.
2. **The hero's "$195" against the "General Dentist" notation.** On the rule's wording I read the hero as compliant, with moderate confidence, and an independent second reader reached the same reading without seeing mine. Neither of us found Board guidance, and the fix is cheap. The second exposure we both flagged, the 104px "first visit" heading, was closed at 23:01 by rewording it. Section 3.
3. **The price disclosures are now on the page, as placeholders.** Dates, the minimum-fee sentence, the emergency fee's limits and the owner were added at 23:01. A phone-width fault that hid the new inclusions line was found at 23:03 and is fixed in the 23:06 build. What is left is placement and two stale FAQ answers. Section 1a.
4. **The sample "Next openings", the invented biography (in three places) and the AI photographs of the dentist and premises** are statements of fact once the demo labels come off. They must be real or removed. Sections 5 (M1, M3) and 6.
5. **A live site needs four notices the footer does not yet have,** and a text line that is read: HIPAA Notice of Privacy Practices, the federal Good Faith Estimate notice for uninsured patients, the Texas notice of electronic disclosure, and a real privacy policy. Section 7.

## 1a. Re-check of the last build (23:06)

I re-read the whole file and re-measured the type at 1440 and 390, with spot checks at 1024 and 768 on the 23:03 build. Line numbers in this section are from the 23:06 `index.html` and the 23:08 `page.js`.

### Applied and verified

| Item | Now on the page (line) |
|---|---|
| M2a inclusions with the price | From 640px up, `.cap` reads "without insurance · exam, X-rays, regular cleaning¹" (394). On phones it reads "without insurance¹" and the footnote directly below carries the rest. Footnote (409): "Exam, X-rays and a regular cleaning. If your gums need more than a regular cleaning, the fee is higher, and I show you why and price it in writing first. Good through [Month D, YYYY]." |
| M2b note | `.svc-note` (488), with the date placeholder and the minimum-fee sentence |
| M2c rows | Checkups, Fillings, Emergency (476-478); Whitening, Aligners (484-485) |
| M2d chips | "First visit $195 without insurance · 75 min" (454, 564, 615, 629) |
| M2f JSON-LD | `priceValidUntil` on all eight offers; the gum sentence in the first-visit offer |
| M5 owner | Footer column "The dentist and owner [...] Texas dental license no. [number]" (645); legal line naming the owner and the website's owner (647) |
| M7 card and text | Hero (391) and step 1 (435) say "Add a photo of your card when you book"; warning under "Text us a question" (505) |
| M11 insured panel | 556 |
| 3.3 edit 2, the heading | The h2 is now "Here's how it goes." (430). After the hero numeral, the largest type that names or prices a service is 72px (40px on a phone), equal to the Services notation. That exposure is closed. |
| S1, S2, S4, S6, S7, S8, S9 | "Will it hurt?" (605); "A raised hand is enough." (539); meta and og descriptions without the price (7, 14); "usually" (607); "Call" and "Text us" as separate links (404, 591, 628, 643, 661); after-hours and 911 line (609); "October 2026" (519, 534) |

### Found and already fixed

At 23:03 the new caption ran on one line across the portrait at 390px, dark ink on dark scrubs, and "exam, X-rays, regular cleaning" could not be read (`.ops/qa/shots/compliance/hero-390-2303.png`). The 23:06 build hides that part of the caption below 640px (`page.css:554`) and restores the inclusions to the footnote, which sits on the first screen (`hero-390-2306.png`). Verified at 390. Not re-checked at 360 or 430, and at 768 the footnote marker sat on the sleeve at 23:03 (`hero-768-2303.png`).

### Still open

| Item | Where now | What remains |
|---|---|---|
| M4 hero numeral | `.hero .num` 150px at 1440 and 56px at 390, against `.hero .who` 22px and 17px | Unchanged. Decision in 3.3. This is now the only font-size question on the page. |
| M2a placement | 394, 409 | The date and "the fee is higher" sit in the 13px footnote, and on phones so do the inclusions. It meets the letter. Lower risk: `through [Mon D, YYYY]` and `More if your gums need more than a regular cleaning.` directly under the numeral. Should. |
| M2d chips | 454, 564, 615, 629 | They carry "without insurance" now, not the "may be more" condition. Add "from", or link each chip to `#cost`. Should. |
| Uninsured cost panel | 557 | No date, and "price it first" where the hero says "the fee is higher". Add `Good through [Month D, YYYY].` Should. |
| FAQ insurance answer | 602 | Still the old text: "[PPO plans to confirm]. Send us a photo of your card and we'll confirm your plan before you come." Make it match the insured panel (556). Must, with M7 and M11. |
| FAQ first-visit and filling answers | 601, 608 | 601 lacks "the fee is higher"; 608 lacks the basis of "from". Wording in M2c. Should. |
| X-ray wording | "X-rays" at 394, 409, 441, 601, 606; "the X-rays you need" at 557 and in JSON-LD | One wording. Optional. |
| Legal line | 647 | "Owned by Dr. Paloma Krenek, DDS." has no notation after the name. The page carries it elsewhere, so this is optional: add ", General Dentist". |
| M1 invented history | 452, 519, 603 | Fine in the demo. Real or gone for a real practice. |
| M3 openings | 396-401; `page.js:124-138` | Fine in the demo, labelled. |
| M6 notices and the Good Faith Estimate line | 650; Cost section | Not started. |
| M8, S11 flags | `page.js:46, 48` | Both still `true`. |
| M9 Spanish | 424, 590 | Conditional on the practice. |
| M10 "0 reviews" | 534 | Dated now; still hard-coded. |
| Lane line and "$0 scan" | 474, 485 | "Something hurts today? Book Emergency." and "Book a $0 scan" unchanged. Conditions in section 4. |
| S3 closures | `page.js:74-88` | Not started. |
| S10 cancellation | 611 | Placeholder. |
| S12 README section | comment at `index.html:15`; `README.md` | Section still missing. |
| S13 demo previews | 13, 14; social card | og text has no "Demo"; the card's wording differs from the strip. |

## 2. Rule texts, quoted, with sources

"Official" means the Texas Secretary of State's Texas Administrative Code viewer, queried as of 11/09/2026, read in a browser and captured in `.ops/qa/shots/compliance/tx-sos-108-*.png`. "LII" means Cornell Legal Information Institute's copy. Where both were read they matched word for word.

### 2.1 Texas State Board of Dental Examiners, 22 Tex. Admin. Code ch. 108, subch. E (Business Promotion)

**§108.55 Advertising for General Dentists** (official: `https://texas-sos.appianportalsgov.com/rules-and-meetings?recordId=206319&queryAsDate=11%2F09%2F2026&interface=VIEW_TAC_SUMMARY&$locale=en_US`; LII: https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-55)

> (a) A dentist whose license is not limited to the practice of an ADA recognized specialty identified under §108.54(b)(1) - (12) of this subchapter (relating to Advertising of Specialties), may advertise that the dentist performs dental services in those specialty areas of practice, but only if the advertisement also includes a clear disclosure that he/she is a general dentist.
>
> (b) Any advertisement of any specific dental service or services by a general dentist shall include the notation "General Dentist" or "General Dentistry" directly after the name of the dentist. The notation shall be in a font size no smaller than the largest font size used to identify the specific dental services being advertised. For example, a general dentist who advertises "ORTHODONTICS" and "DENTURES" and/or "IMPLANTS" shall include a disclosure of "GENERAL DENTIST" or "GENERAL DENTISTRY" in a font size no smaller than the largest font size used for terms 'orthodontics,' 'dentures' and/or 'implants.' [...]
>
> (c) A general dentist is not prohibited from listing services provided, so long as the listing does not imply specialization. A listing of services provided shall be separate and clearly distinguishable from the dentist's designation as a general dentist.

What it requires: (1) wherever a general dentist advertises a specific service, the two words "General Dentist" (or "General Dentistry") come straight after the dentist's name; (2) those two words are set no smaller than the largest type used to identify the services; (3) the service list is visually separate from the designation; (4) aligners are orthodontics, a listed specialty area (§108.54(b)(3)), so subsection (a)'s "clear disclosure" also applies. The rule sizes the notation. It says nothing about the size of the name. History: adopted 2013; the 2021 amendment only updated the specialty cross-reference in (a) (Texas Register proposal of 9 July 2021, read as a search summary).

**§108.57 False, Misleading or Deceptive Advertising** (official: same viewer, `recordId=161819`; LII: https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-57)

> (a) [...] Dentists shall not advertise or solicit patients in any form of communication in a manner that is false, misleading, deceptive, or not readily subject to verification.
>
> (c) Examples. [...] additional examples of advertisements that may be false, misleading, deceptive, or not readily subject to verification include but are not limited to:
> (1) making a material misrepresentation of fact or omitting a fact necessary to make a statement as a whole not materially misleading;
> (2) intimidating or exerting undue pressure or undue influence over a prospective patient;
> (3) appealing to an individual's anxiety in an excessive or unfair way;
> (4) claiming to provide or perform dental work without pain or discomfort to the patient;
> (5) implying or suggesting superiority of materials or performance of professional services;
> (6) comparing a health care professional's services with another health care professional's services unless the comparison can be factually substantiated;
> (7) communicating an implication, prediction or suggestion of any guarantee of future satisfaction or success of a dental service or otherwise creating unjustified expectations concerning the potential result of dental treatment. The communication of a guarantee to return a fee if the patient is not satisfied with the treatment rendered is not considered false, misleading deceptive or not readily subject to verification under this rule;
> (8) containing a testimonial from a person who is not a patient of record or that includes false, misleading or deceptive statements, or which is not readily subject to verification, or which fails to include disclosures or warnings as to the identity and credentials of the person making the testimonial;
> (9) referring to benefits or other attributes of dental procedures or products that involve significant risks without including realistic assessments of the safety and efficacy of those procedures or products;
> (10) causing confusion or misunderstanding as to the credentials, education, or licensing of a health care professional;
> [...]
> (13) communicating an implication or suggestion that a service is free or discounted when the fee is built in to a companion procedure provided to the patient and charged to the patient; and
> (14) communicating statistical data, representations, or other information that is not subject to reasonable verification by the public.
>
> (d) Photographs or other representations may be used in advertising of actual patients of record of the licensee. Written patient consent must be obtained prior to the communication of facts, data, or information which may identify the patient. The advertising must include language stating "Actual results may vary."
>
> (f) Any and all advertisements are presumed to have been approved by the licensee named therein.

What it requires: every statement true, not misleading by omission, and checkable; no no-pain, superiority or success claims; testimonials only from patients of record. The list is "not limited to" its examples.

**§108.53 Fees** (official: same viewer, `recordId=161815`; LII: https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-53). Not in the project's research file.

> (a) General. Dentists shall not represent or advertise the fees they charge in a false or misleading manner. Dentists shall state availability and price of goods, appliances or services in a clear and non-deceptive manner and include all material information to fully inform members of the general public about the nature of the goods, appliances or services offered at the announced price.
>
> (c) Disclosures. An advertisement which includes the price of dental services shall disclose:
> (1) the professional service being offered in the advertisement;
> (2) any related services which are usually required in conjunction with the advertised services and for which additional fees may be charged;
> (3) a disclosure statement that the fee is a minimum fee and that the charges may increase depending on the treatment required;
> (4) the dates upon which the advertised service will be available at the advertised price;
> (5) when a service is advertised at a discount, the standard fee of the service and whether the discount is limited to a cash payment; and
> (6) if the advertisement quotes a range of fees for a service, the advertisement shall contain all the basic considerations upon which the actual fee shall be determined.
>
> (d) A dentist shall not:
> (1) represent that health care insurance deductibles or copayments may be waived or are not applicable to dental services to be provided if the deductibles or copayments are required;
> (2) represent that the benefits of a health benefit plan will be accepted as full payment when deductibles or copayments are required;
> (3) refer to a fee for dental services without disclosing that additional fees may be involved in individual cases, if the possibility of additional fees may be reasonably predicted;
> (4) offer a discount for dental services without disclosing the total fee to which the discount will apply; and
> (5) represent that services are "free" when there is remuneration by a third-party payor, including Medicaid or Medicare.

**§108.52 Names and Responsibilities** (official: same viewer, `recordId=225040`; amended effective 22 May 2025)

> (b)(4) A licensed Texas dentist, in any professional communication concerning dental services, shall include the dentist's dental degree; the words "general dentist" or "general dentistry;" or a specialization [...]
>
> (c)(2) A dentist practicing under a corporation, company, association or trade name shall give each patient the name and license number of the treating dentist, in writing, either before or after each office visit, upon request of a patient.
>
> (c)(3) An advertisement under a corporation, company, association or trade name must include prominently the name of the owner(s) and at least one dentist actually engaged in the practice of dentistry under that trade name at each location advertised. [...]
>
> (c)(4) Each dentist practicing under a corporation, company, association or trade name shall file notice with the board of every corporation, company, association or trade name under which that dentist practices upon initial application for licensure and annual license renewal.

Also (a)(6): if hygienists or assistants are named in advertising they "must be clearly identified by title, along with the name of a supervising dentist."

**§108.56(b) Credentials** (official: same viewer, `recordId=161818`)

> A listing of credentials shall be separate and clearly distinguishable from the dentist's designation as a dentist. A listing of credentials may not occupy the same line as the dentist's name and designation as a dentist. Any use of abbreviations to designate credentials shall be accompanied by a definition of the acronym immediately following the credential.

The Board's attached example, read in the Board's own rules compilation (as in effect 8 Sept 2016; http://tsbde.texas.gov/78i8ljhbj/2019/02/TSBDE-Rules-and-Regulations.pdf, p. 68): "Jane Doe, DDS, General Dentist / FAAD, Fellow Anytown Academy of Dentistry". So the Board itself puts the degree between the name and the notation; "Dr. Paloma Krenek, DDS · General Dentist" follows that form.

**Read from LII only** (titles confirmed against the official index):

- §108.51(1): "Advertisements [...] include electronic media and print media"; (2) electronic media includes "the Internet"; (4) "Patient of Record--A patient who has been examined and diagnosed by a licensed dentist and whose treatment has been planned by a licensed dentist"; (6) "Testimonial--An attestation or implied attestation to the competence of a dentist's services or treatment." https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-51
- §108.58(a): "A licensee may offer, give, dispense, distribute or make available directly to a potential patient, a non-cash gift valued at no more than ten dollars to secure or solicit the potential patient." https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-58
- §108.59: "Dental practice websites should clearly disclose: (1) ownership of the website; (2) services provided; (3) office addresses and contact information; and (4) licensure and qualifications of dentist(s) and associated health care providers." https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-59
- §108.60(a): "[...] a copy of electronic advertisements shall be retained for four years following the final appearance or communication of the advertisement." https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-60

### 2.2 Texas statutes (read on a mirror, texas.public.law, whose copies are stamped "accessed May 26, 2025"; the official statutes site did not render)

- Occ. Code §259.001: "A dentist may not, in the practice of dentistry, make a misrepresentation or a false or misleading statement to a patient or prospective patient."
- Occ. Code §259.003(b): "An advertisement under a corporation, company, association, or trade name must include prominently the name of at least one dentist practicing under the name." (c)-(d): file the trade name and the dentists practising under it with the Board; update within 30 days of a change.
- Occ. Code §259.006(c): for a first violation of the Board's advertising restrictions a person "may not be prosecuted [...] before the 31st day after" certified-mail notice that gives "30 days from the date of the notice to cure the violation." (h): remedies are in addition to the Deceptive Trade Practices Act.
- Occ. Code §259.008(9)-(10): unprofessional conduct includes "advertising the performance of dental work without pain or discomfort to the patient" and "advertising a prediction of future satisfaction or success of a dental service."
- Occ. Code §104.003(d): a Board licensee using their name professionally designates "dentist", "doctor, D.D.S.", "doctor of dental surgery", "D.D.S." or "doctor of dental medicine, D.M.D.".
- Health & Safety Code §181.154(a): "A covered entity shall provide notice to an individual [...] if the individual's protected health information is subject to electronic disclosure. A covered entity may provide general notice by: [...] (2) posting a notice on the covered entity's Internet website". §181.152(a): "clear and unambiguous permission in written or electronic form to use or disclose protected health information for any marketing communication".
- S.B. 140 (89th Leg., enrolled text, effective 1 Sept 2025; https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00140F.htm): "Telephone solicitation" now means "a call or other transmission, including a transmission of a text or graphic message or of an image"; violations of Bus. & Com. Code chs. 304 and 305 are deceptive trade practices with private remedies.

### 2.3 Federal (eCFR, read through its API at issue dates 2026-11-05 for Titles 45 and 47, 2026-10-30 for Title 16)

- 45 CFR 164.520(c)(3)(i): "A covered entity that maintains a web site that provides information about the covered entity's customer services or benefits must prominently post its notice on the web site and make the notice available electronically through the web site."
- 45 CFR 164.508(a)(3)(i): "a covered entity must obtain an authorization for any use or disclosure of protected health information for marketing".
- 45 CFR 149.610(b)(1)(iii): a provider must inform "all uninsured (or self-pay) individuals of the availability of a good faith estimate of expected charges upon scheduling an item or service or upon request", and that information must be "(A) Written in a clear and understandable manner, prominently displayed (and easily searchable from a public search engine) on the convening provider's or convening facility's website, in the office, and on-site where scheduling or questions about the cost of items or services occur".
- 45 CFR 92.10(a)(2)(iii) and 92.11(c)(3) (only if the practice takes federal money such as Medicaid or CHIP): notice of nondiscrimination and notice of language assistance "At a conspicuous location on the covered entity's health program or activity website".
- 45 CFR 84.84(b) (same condition): web content to WCAG 2.1 Level A and AA "Beginning May 11, 2027" for recipients with fifteen or more employees and "Beginning May 10, 2028" for fewer (dates as amended at 91 FR 25507, 11 May 2026).
- 47 CFR 64.1200(a)(1): no autodialed or prerecorded call to a cell number without "the prior express consent of the called party"; (a)(2): advertising or telemarketing calls need "prior express written consent", with an exception for a "health care" message by a HIPAA covered entity; (a)(10): consent may be revoked "by using any reasonable method", and a reply of "stop," "quit," "end," "revoke," "opt out," "cancel," or "unsubscribe" is a reasonable method per se. The section covers "calls or text messages".
- 16 CFR 251.1(c): for "Free" offers, "all the terms, conditions and obligations [...] should be set forth clearly and conspicuously at the outset of the offer [...] disclosure of the terms of the offer set forth in a footnote of an advertisement to which reference is made by an asterisk or other symbol placed next to the offer, is not regarded as making disclosure at the outset."
- 16 CFR 465.4: it is a violation "to provide compensation or other incentives in exchange for, or conditioned expressly or by implication on, the writing or creation of consumer reviews expressing a particular sentiment". 465.5(c): an officer or manager may not solicit reviews from relatives, employees or agents that then appear without disclosure of the relationship. 465.2: no fake reviews.
- 16 CFR 255.2(d): "In procuring, suppressing, boosting, organizing, publishing, upvoting, downvoting, reporting, or editing consumer reviews of their products, advertisers should not take actions that have the effect of distorting or otherwise misrepresenting what consumers think of their products".

The ADA Code §5 and New York Part 29 were not re-read; see `research/02-audience-and-conversion.md` section 6.

## 3. The Texas designation rule against the built page

Status at 23:06: the first-visit heading was reworded to "Here's how it goes.", so the heading exposure described in 3.2 and edit 2 of 3.3 are done. The hero numeral and notation are unchanged (150 against 22 at 1440, 56 against 17 at 390), so the numeral question and edit 1 stand. The rest of this section describes the 22:50 build.

### 3.1 Measured sizes (computed `font-size`, px)

| Width | Hero "$195" `.hero .num` | Hero notation `.hero .who` | Hero service label "First visit · 75 min" | h2 "Here's your whole first visit." | Services notation `.desig` | Service words / row prices |
|---|---|---|---|---|---|---|
| 1440 | 150 | 22 | 15 | 104 | 72 | 72 / 72 |
| 1024 | 119 | 20 | 14.6 | 80 (from the token, not measured) | 59 | 59 / 59 |
| 768 | 100 | 19 | 14.4 | 66 (from the token, not measured) | 51.5 | 51.5 / 51.5 |
| 390 | 56 | 17 | 14 | 44 | 40 | 40 / 40 |

The notation also appears at 14 to 15px in the dentist band (`#dentist .cred`), the cost section (`#cost .cred`) and the footer. At 1440 the hero notation sits about 600px to the right of the price block. Screenshots: `hero-1440.png`, `hero-768.png`, `hero-390.png`, `services-1440.png` (taken on the 22:17 build; the sizes were re-measured unchanged at 1440 and 390 on the 22:51 build).

### 3.2 Does the price numeral count as "type used for the advertised services"?

**My reading: no, on the wording.** The sentence compares the notation with "the largest font size used *to identify* the specific dental services being advertised", and the rule's own example compares it with the service terms ('orthodontics,' 'dentures,' 'implants'). "$195" states a fee. What identifies the service in the hero is "First visit" (15px) and the footnote "Exam, X-rays and a regular cleaning" (13px). The hero notation is larger than both at every width measured (22 against 15, 20 against 14.6, 19 against 14.4, 17 against 14). In Services the notation equals the service words. Read this way, the built page meets §108.55(b) and (a).

**Confidence: moderate.** Roughly two chances in three that this is how the sentence would be applied. Reasons it is not higher:

- I found no Board guidance, newsletter, order or commentary on whether a price counts. Four searches, one aimed at disciplinary orders and FAQs, and one attorney commentary (2021) say only that websites are covered and the notation must follow the name. Absence of a ruling is not a ruling.
- Read for its purpose, the rule wants the general-dentist status to be as prominent as the service being sold. The numeral is the headline of a service offer and is 6.8 times the notation at 1440 and 3.3 times at 390. A reviewer who treats the whole lock-up ("First visit · 75 min / $195") as the identification of the service would compare 150 with 22.
- One reading the team has not considered: the h2 "Here's your whole first visit." names the same service at `--fs-d1` (104px at 1440, 44px at 390). That is larger than the largest notation on the page (`--fs-d2`: 72px, 40px) at every width. Whether "first visit" is a "specific dental service" or just an appointment type is arguable. I ranked it the weaker of the two arguments. The second reader ranks it the stronger one (3.4), because the best defence of the hero, that the label and not the numeral identifies the service, is exactly what makes this heading service-identifying type. It does not depend on prices at all.
- The rule does not say whether a scrolling page is judged whole or screen by screen. Judged whole, the 72px line in Services is the page's notation. Judged by first screen, the hero stands alone.

Practical stakes: a first advertising violation carries a 30-day cure window after written notice (Occ. Code §259.006(c)), so the realistic downside is a complaint and a forced redesign.

Other §108.55 points, all met: the notation follows the name in the Board's own order (name, degree, notation); the service list is separated from the designation by a rule and by case (§108.55(c)); aligners are listed under a general-dentist line of equal size (§108.55(a)); nothing says or implies "specialist" or "cosmetic dentist".

### 3.3 Lowest-risk layout change

One rule for the design system: **nothing that names or prices a service is set larger than the largest "GENERAL DENTIST" on the same screen.** Two edits deliver it.

1. **Hero.** Set the numeral and the two words GENERAL DENTIST at the same size at every breakpoint. The ready-made value is `--fs-d2` (72 / 59 / 51.5 / 40px), the pairing Services already uses: `.hero .num { font-size: var(--fs-d2) }` and the notation part of `.hero .who` at `var(--fs-d2)`. The name line may stay at `--fs-d4`; the rule sizes the notation, not the name.
2. **First-visit heading.** Cap `#fv-h` at `--fs-d2`, or reword it so it does not name the service: `Here's how it goes.`

For edit 2 there is a third route: raise the Services designation to the heading's size (`--fs-d1`: 104px, 44px on a phone) and leave the heading alone.

If the 150px numeral is not negotiable, two cheaper changes lower the risk without removing it. Either should go to counsel in writing.

- **Move and raise the hero designation** (the second reader's suggestion). Put it directly above the price label and set it at about 32 to 40px. That answers the 600px gap and narrows the ratio. The numeral argument stays open; the second reader puts the residual chance of a font-size finding on the hero at about one in ten, down from one in five.
- **Set GENERAL DENTIST once at `--fs-price`,** for example as a second line of the Services designation (about 830 to 860px wide at 1440 and about 310 to 320px at 390, estimated from the brand file's 1,481px-per-100px measurement of the full line; not measured). The page as one advertisement then carries a notation as large as its largest numeral and larger than the first-visit heading. The hero taken alone still shows 150 against 22.

### 3.4 The independent second reading

A separate agent was given the rule text and the measurements, not my conclusion, and read §§108.52, 108.53, 108.55 and 108.59 on Cornell LII. It did not view the page. Its percentages are its own judgment, as mine are.

| Question | Second reader | Mine |
|---|---|---|
| Is the font-size sentence in the text? | Yes | Yes (official viewer) |
| What is sized? | Only the notation, which must sit directly after the name (90%) | Same |
| Whole page or screen by screen? | One scrolling page is most naturally one advertisement (75%); one conforming instance probably satisfies the text (70%). Investigators work from screenshots, so each screen that advertises a service should pass alone | Same doubt, no number |
| Does "$195" count as service-identifying type? | No (65%). Chance an investigator calls the hero non-compliant on font size: about 20%, range 10 to 35% | No; about two in three |
| The 104px "first visit" heading | The larger textual exposure. About 35% that "first visit" is a "specific dental service" here | An exposure; I ranked it second |
| Services section | Passes (b) and (c); 72 equals 72 and "no smaller than" permits equal (85%) | Passes |
| Fee advertising (§108.53) | Dates absent everywhere, "a plain miss" (95%). On any ground, the chance the hero draws a finding is "well over half" because of this | Same; it is M2 |

Where we differ: only on which of the two font-size exposures is larger. The remedy in 3.3 covers both. The second reader also reports that the Board's 2019 disciplinary matrix confirms cure-first handling of a first advertising violation, with a warning, reprimand or probated suspension if it continues after the cure period (http://tsbde.texas.gov/78i8ljhbj/Matrix-2019.pdf; read by the second reader, not by me), and notes that any future video needs an audible "General Dentist" under §108.55(b).

## 4. Claim by claim

Classes: **OK** fine as written. **IF** fine only if the condition is true. **DISCLOSE** needs words near it. **REWORD** change the wording (replacement in section 5). **REPLACE** cannot ship in a real page. Numbers in the first column are `index.html` lines unless marked.

### Head and structured data

| Where | As shipped | Class | Condition, disclosure or fix | Rule |
|---|---|---|---|---|
| `<title>`, og:title (6, 13) | "General Dentist in East Austin, TX \| Feast Dental" | IF | Trade name filed with the Board; the dentist is named elsewhere on the page (she is). | §108.52(c); Occ. Code §259.003 |
| meta description, og:description (7, 14) | "First visit: 75 min, $195 without insurance. Price in writing first. No lecture. Book online." | REWORD | A price in a search snippet with no inclusions, no gum condition, no dates. Take the price out (S4). | §108.53(a), (c) |
| JSON-LD `hasOfferCatalog` (118-182) | Eight offers with prices | DISCLOSE | Machine-readable price advertising. Add `priceValidUntil` to each Offer and the gum sentence to "First visit", or leave the catalog out until dates exist. | §108.53(c)(3)-(4) |
| JSON-LD (77, 78, 194) | `isAcceptingNewPatients: true`; `knowsLanguage` es | IF | True. The file already marks es "keep only if confirmed". | §108.57(a) |
| JSON-LD "Aligner consult" (169) | "$0 [...] [Keep this offer only if nothing from the consult is folded into a later fee.]" | IF | Correct instinct. See the Aligners row. | §108.57(c)(13) |

### Header and hero

| Where | As shipped | Class | Condition, disclosure or fix | Rule |
|---|---|---|---|---|
| `.plate` (230) | "Feast Dental" | IF | Trade-name notice filed with the Board and renewed; owner and one practising dentist named prominently. | §108.52(c)(3)-(4) |
| `[data-status]`, `page.js:67-81` | "Open now till 7:30." / "Closed now. Opens Tue 11 am." | IF | Computed from the weekly hours only. False on any holiday or closure. Add closures (S3). | §108.57(c)(1) |
| same, `page.js:39,78,80` | "Closed now. Booking's open all night." | IF | A real-time scheduler that takes bookings out of hours. A request form is not booking. | §108.57(a) |
| `.hd .tel` (239) and every "Call or text" | (512) 555-0142 | IF | Real number, text-enabled and read by staff. Four "Call or text" links (262, 448, 485, 500) are `tel:` only (S7). | §108.57(a) |
| "Book online" (all) | button | IF | Real-time booking. Otherwise "Request a time online". | §108.57(a) |
| `h1` (247) | "I don't care how long it's been." | OK | | |
| `.hero__sub` (248) | "I care about what's bothering you now. I'm Paloma, a general dentist in East Austin. You get a real look, the price in writing, and no lecture." | IF | Conduct promises. True for every clinician who sees the patient, hygienists included. | Occ. Code §259.001 |
| `.hero__hrs` (249) | "Insured? Send us a photo of your card and we'll confirm your plan before you come." | REWORD | The card invitation is now on the first screen and names no channel. Also a promise that every plan is checked in advance. M7. | HIPAA; Tex. H&S Code ch. 181 |
| `.who` (250) | "Dr. Paloma Krenek, DDS · General Dentist" | OK (form); see section 3 (size) | Real name as on the licence or commonly used. | §108.55(b); §108.52(a) |
| `.fv` + `.fn` (252, 267) | "First visit · 75 min / $195 / without insurance¹" and "¹ Exam, X-rays and a regular cleaning. If your gums need more than a regular cleaning, I show you why and price it first." | DISCLOSE + REWORD | (a) No dates. (b) What the price buys is in a 13px footnote under a 150px numeral. (c) "price it first" does not say the fee goes up. (d) If $195 is an opening offer, the usual fee must be stated. (e) The footnote marker hangs on "without insurance", not on the price. M2. | §108.53(a), (c)(1)-(5), (d)(3) |
| `#slots`, `#op-cap` (254-259), `page.js:109-125` | "Next openings" Tue 5:45 pm, Wed 8:00 am, Thu 5:30 pm; "Sample times for this demo, not real openings." | REPLACE | Times are computed from the clock. On a live page they would be invented availability. Feed from the scheduler or remove the block. M3. | §108.57(c)(1); Occ. Code §259.001 |

### Ticker

| Where | As shipped | Class | Condition, disclosure or fix | Rule |
|---|---|---|---|---|
| 274 | "Book online any time" | IF | As "Booking's open all night". | §108.57(a) |
| 275-276 | "Evenings Tuesday and Thursday", "Saturday mornings too" | IF | True hours. | |
| 277-278 | "Price in writing first", "With insurance or without" | IF | A written estimate is the office's standing practice for every patient. | Occ. Code §259.001 |
| 279-281 | "No lecture", "I draw what I see", "Raise a hand, I stop" | IF | Conduct the dentist commits to and staff follow. Not pain or outcome claims. | |
| 282 | "Hablo español" | IF | The treating dentist speaks Spanish with patients. M9. | §108.57(a) |
| `page.js` bonus line | "You read the whole page. I like you already." | OK | | |

### First visit and Services

| Where | As shipped | Class | Condition, disclosure or fix | Rule |
|---|---|---|---|---|
| `#fv-h` (288) | "Here's your whole first visit." | OK (words); see 3.2 (size) | | §108.55(b) |
| step 1 (293) | "Pick a time online. Got insurance? Send a photo of your card and we'll check it before you come." | REWORD | As `.hero__hrs`. M7. | HIPAA; Tex. H&S Code ch. 181 |
| step 2 (299) | "Then a full exam, X-rays, and a regular cleaning if your gums are ready for one." "75 minutes." | IF | Good: the gum condition is in the sentence. If a hygienist does the cleaning, "I" overstates. X-ray wording differs across the page (S5). | §108.57(a) |
| step 3 (305-306) | "I draw what I found and write down what each fix costs. Nothing gets added today without your yes." "You keep the drawing." | IF | True every visit. | |
| 310 | "Haven't been in years? I went four without. You're welcome here." | REPLACE (middle sentence) | The invented history, third appearance. M1. | §108.57(c)(1) |
| `.chip` (312, 421, 472, 486) | "First visit $195 75 min" | REWORD | The chip drops "without insurance". In First visit, FAQ and Closing nothing nearby restores it. M2d. | §108.53(a) |
| `.desig` (328) | "Dr. Paloma Krenek, DDS · General Dentist" at service-word size | OK | | §108.55(a)-(c) |
| lane 1 (331) | "Keep your teeth working" "Something hurts today? Book Emergency. If not, start with the first visit." | IF | Reads as same-day emergency care. Keep "today" only if emergency slots are held every open day. Otherwise `Something hurts? Book Emergency.` | §108.57(c)(1) |
| Checkups (333) | "Every visit after your first. An exam and a regular cleaning, with X-rays when they're due. 50 min. If your gums need more, I show you why and price it first." from $145 | DISCLOSE | Say what moves the price off $145 (X-rays when due) and add dates. | §108.53(c)(2)-(4), (6) |
| Fillings (334) | "Tooth-colored. I draw the spot and price it before I start." from $190 | DISCLOSE | State the basis of the range (size of filling, which tooth). $190 must be a fee actually charged. | §108.53(a), (c)(6) |
| Emergency (335) | "Something hurts or broke. I look, I X-ray that tooth, and I price the fix before I start." $95 | REWORD (light) | Say outright that $95 is the look and the X-ray and treatment is extra. S8. | §108.53(c)(2), (d)(3) |
| lane 2 (339) | "Change how they look" "Only if you want to. If I'd leave it alone, I'll say so." | IF | No pressure, no "cosmetic dentist". The second sentence is a conduct promise. | §108.57(c)(2) |
| Whitening (341) | "Trays to take home, or done here in the chair. You pick. In-chair from $450." from $250 | DISCLOSE | Basis of each "from"; dates. | §108.53(c)(6) |
| Aligners (342) | "Start with a 3D scan and a plain answer on cost and time. Consult $0 · 30 min." "Book a $0 scan" from $3,400 | IF + DISCLOSE | Orthodontic service by a general dentist: disclosure met by `.desig`. $0 only if the consult and scan are never billed to a plan and never recovered in the treatment fee, with no strings. State the basis of "from $3,400". Whether a free scan is a "gift" over $10 under §108.58(a) is unverified; "Book a $0 scan" leans on it harder, so ask counsel. | §108.55(a); §108.57(c)(13); §108.53(d)(5), (c)(6); 16 CFR 251.1 |
| `.svc-note` (345) | "Every price here is without insurance. You get a written estimate before any treatment." | REWORD | Add the dates and the minimum-fee statement. M2b. | §108.53(c)(3)-(4) |

### Comfort, dentist, promises

| Where | As shipped | Class | Condition, disclosure or fix | Rule |
|---|---|---|---|---|
| `#comfort-h` (349) | "Nervous is normal here." | OK | Acknowledges nerves without playing on them. | §108.57(c)(3) |
| 353 | "Say so at the door and I slow down. I tell you what's next before I do it. You set the pace." | IF | Conduct. | |
| list (356-360) | "Raise a hand and I stop", "Breaks whenever you ask", "Headphones", "Something to watch", "I explain the numbing before I start" | IF | Each exists on day one, for every patient, at no charge. None claims an absence of pain. No sedation is advertised (it would bring permit rules). | §108.57(c)(4) |
| `a[href^="sms:"]` (362) | "Text us a question" | IF + DISCLOSE | Monitored text line. Invites health details over an unencrypted channel. M7. | HIPAA; 47 CFR 64.1200 |
| stop control (364-365) | "Like the stop signal in the chair. Press it and the ticker, the corners and the stretching words hold still." | OK | | |
| `.bio` (376) | "I'm a general dentist, and I opened Feast Dental on the east side this October. In college I went four years without a cleaning. I had no insurance and I was scared of the bill. So you won't get a lecture from me about how long it's been." | REPLACE | An invented personal history used to win trust. Only the real dentist's own true account can stand here. "this October" dates badly (S9). M1. | §108.57(c)(1); Occ. Code §259.001 |
| `.pull` (377) | "Teeth are for biting. I keep them at it." | OK | Puffery. Optional softening O1. | Occ. Code §259.008(10) |
| `.pts` (380-382) | "I ask first." "I draw it." "I price it in writing. The number comes first, then the work." | IF | The dentist's actual habits. | |
| `#dentist .cred` (386) | Name and notation, line break, then "DDS, [dental school, year] · [university, year] · [number] years as an associate dentist at [two Austin-area practices]" | IF | Real and checkable. The layout already keeps credentials on their own line. Any added letters (FAGD and so on) need the full name straight after. | §108.56(b); §108.57(c)(10) |
| `#zero-h` (391) | "0 reviews. I opened in October. Here's what I promise instead." | IF | True on the day. The zero is hard-coded and becomes false with the first review. M10. | §108.57(c)(1), (14) |
| promise 1 (394) | "No lecture. I'll ask when you last came in, and there's no wrong answer." | IF | Conduct. It must not mean withholding findings the patient needs to hear. | |
| promise 2 (395) | "The price in writing. Every fix and its price, on paper, before I start. I add nothing without your yes." | IF | For uninsured patients this is also a federal duty with set contents (Good Faith Estimate). | 45 CFR 149.610 |
| promise 3 (396) | "I stop when you say. A raised hand is enough. Every time." | REWORD | "Every time" is an absolute about moments when stopping at once is not safe. S2. | Occ. Code §259.001 |
| promise 4 (397) | "Look me up. DDS, [dental school, year]. [number] years as an associate dentist in Austin. Texas license [number to confirm], on the state dental board's site." | IF | Good: it invites the check the rules assume. Real licence in good standing, and link the words to the Board's public lookup. | §108.59(4); §108.57(c)(10) |
| 399 | "Come in, then tell people how it really went. Feast Dental on Google" | IF | Neutral wording is right. Ask every patient, offer nothing, no staff or family reviews, link to the real profile. Reviews shown on the site later must be from patients of record with written permission. | 16 CFR 465.2, 465.4, 465.5; 255.2(d); §108.57(c)(8) |

### Cost, find us, FAQ, closing, footer

| Where | As shipped | Class | Condition, disclosure or fix | Rule |
|---|---|---|---|---|
| `#cost-h` (406) | "You'll know the cost first." | IF | As promise 2. | |
| `[data-panel="yes"]` (413), FAQ (459) | "We're in-network with [PPO plans to confirm]. Send us a photo of your card and we'll confirm your plan before you come. [Your cost with insurance: to confirm per plan.]" | IF + REWORD | Name each plan. Never write that a plan is "accepted as full payment" or that copays are waived. A plan check is an estimate, not the insurer's promise. M11, M7. | §108.53(d)(1)-(2) |
| `[data-panel="no"]` (414), FAQ (458) | "The first visit is $195. That's a full exam, a full set of X-rays and a regular cleaning. You leave with a written plan and a price for anything else. If your gums need more than a regular cleaning, I show you why and price it first. [What a deeper cleaning costs, and what the $195 covers that day: to confirm.]" | DISCLOSE + REWORD | The new placeholder asks the right question; its answer belongs beside the hero price too. Dates. "a full set of X-rays" is a specific promise the hero and the steps do not make (S5). | §108.53(c) |
| `.promise` (416) | "You get a written estimate before any treatment. Insured or not." | IF | True for every patient, emergencies included. | |
| "Check my insurance" (420) | placeholder link | IF | Whatever it opens collects plan details: secure form, vendor under a business associate agreement, privacy notice linked. | HIPAA |
| `.costfig` caption (424) | "Fillings from $190." over an AI image of a sketch reading "filling, $190" | REPLACE (image) | Covered by the Services note once that carries dates. Use a real sketch that shows no patient. | §108.57(c)(1) |
| `#find-h` (429), address, hours table | "We're in Holly, East Austin." and facts | IF | True. | |
| storefront (431) | AI image; "The front door, 2217 Tejocote Street. Placeholder picture." "[Parking, nearest bus stop and level entrance: to confirm]" | REPLACE | A real photograph of the real door. Access details must be accurate. | §108.57(c)(1) |
| 447 | "Hablo español. Llama o manda un mensaje al (512) 555-0142." | IF | Goes further than the ticker: it promises Spanish on the phone and text line, so whoever answers must speak it. M9. | §108.57(a) |
| FAQ (460) | "No. I'll ask when your last visit was, and there's no wrong answer. I went four years without one myself." | REPLACE (last sentence) | Same invented history. | |
| FAQ (461) | "Say so when you walk in. You set the pace from there, and you can text us a question before you book." | IF | Text line as above. | |
| FAQ (462) | "Will it hurt?" "I numb the area first and check it's working before I start. I tell you what's next before I do it. Raise a hand and I stop." | REWORD | Every sentence is conduct and none says "no". But as the whole answer to that question it reads as "it won't". Texas names no-pain claims twice. Answer the question first, as the whitening answer does (S1). | §108.57(c)(4); Occ. Code §259.008(9) |
| FAQ (463) | "75 minutes. That's the exam and X-rays, a regular cleaning if your gums are ready for one, and time to go over the plan." | IF | Appointment really is 75 minutes. | |
| FAQ (464) | "It can make teeth sensitive for a few days. I check yours first and tell you what to expect. You can stop any time." | OK, with one word | Honest about the downside. "for a few days" predicts a duration: add "usually" (S6). | §108.57(c)(7), (9) |
| FAQ (465, 466) | "From $190 for a tooth-colored filling. [...]" "$95. I look at what hurts or broke and X-ray that tooth. I price the fix before I start." | DISCLOSE | Same as the Services rows. | §108.53(c) |
| FAQ (467) | "Yes. Tuesdays and Thursdays till 7:30 pm, and Saturdays from 9 am to 1 pm." | IF | True hours. | |
| FAQ (468) | "Call or text as soon as you know and we'll find you another time. [Cancellation policy to confirm.]" | DISCLOSE | If a late-cancel or no-show fee exists, state the amount here and at booking (S10). | §108.53(a) |
| closing (482-489) | "No lecture. Price in writing. Come in." "Then go bite something." "Open Monday to Saturday. Till 7:30 pm Tuesdays and Thursdays." | IF / OK | Hours true. | |
| footer (502) | "Dr. Paloma Krenek, DDS / General Dentist / Texas license [number to confirm]" | IF | Real licence number. | §108.59(4) |
| footer (504) | "© 2026 [Legal entity name, PLLC, to confirm], doing business as Feast Dental." | REWORD | Name the owner and say who owns the website. M5. | §108.52(c)(3); §108.59(1) |
| footer (507) | "Privacy", "Accessibility" | REPLACE | Real pages. Section 7. | 45 CFR 164.520(c)(3) |
| `.cookie` (511) | "The only cookie on this site." | IF | True today (below). False the day a scheduler widget, map, analytics tag, font CDN or a cookie-setting host is added. | FTC Act §5; Tex. DTPA |
| phone bar (518), `page.js:41, 89-93` | Open: "Call or text" (`tel:`). Closed: "Text us" (`sms:`), because `TEXTS_ANSWERED = true` | IF + DISCLOSE | At night this sends people, some of them in pain, to a text line nobody is reading. Needs an auto-reply with hours and an emergency route, or the flag off. S7, S11. | Occ. Code §259.001 |

### The four website disclosures in §108.59

The rule says a dental practice website "should clearly disclose" four things. The 2021 attorney commentary calls them "the minimum information that should appear on a practice's website".

| # | Disclosure | On the page now | Verdict |
|---|---|---|---|
| 1 | Ownership of the website | At 22:50: only "© 2026 [Legal entity name, PLLC, to confirm], doing business as Feast Dental." Since 23:01 (now line 647): "Owned by Dr. Paloma Krenek, DDS. This website is owned and run by [Legal entity, PLLC]." | **Was missing; present since 23:01,** with the entity name a placeholder. §108.52(c)(3) separately wants the owner named "prominently"; the footer heading "The dentist and owner" (645) does that. |
| 2 | Services provided | Services section: five named services under the general-dentist line; the first visit is described in full. | Present. The listing does not imply specialisation. |
| 3 | Office addresses and contact information | Address, phone and hours in Find us and the footer, all placeholders. One location. No email address. | Present once real. Add an email or contact form if the practice uses one. |
| 4 | Licensure and qualifications of dentist(s) and associated health care providers | "Texas license [number to confirm]" (397, 502); "DDS, [dental school, year] · [university, year] · [number] years [...]" (386). No hygienist or assistant is named. | Present in outline, every value a placeholder. If staff are named later, each needs a title and the supervising dentist's name (§108.52(a)(6)). |

**"The only cookie on this site." against what the page stores.** Tested in a clean browser context. Fresh load: `document.cookie` empty, `localStorage` and `sessionStorage` empty, no IndexedDB or Cache entries, 11 requests, all same-origin. Eating the footer cookie stores nothing. Pressing "Stop the motion" writes one value, `localStorage.motion = "off"` (`page.js:297`); pressing again writes `"on"`; the inline script at `index.html:31` reads it before first paint. So the sentence is literally true: no HTTP cookie is set, and the one stored value is a preference the visitor asked for, kept on their device and sent nowhere. The privacy page should say that in one line (section 7).

**Words searched for and not found anywhere on the page:** painless, pain-free, gentle, best, top, #1, leading, guarantee, specialist, expert, cosmetic dentist, free, award, sedation, affordable, discount, special offer.

## 5. Ranked changes, with replacement wording

### Must, before any real practice uses the page (README scale: blocker for real use)

**M1. Real facts, real story, real photographs.** Every bracketed placeholder; the bio and its two echoes; the five portraits, `storefront`, `the-drawing` and `social-card.jpg`. Template for `.bio`:

> I'm a general dentist, and I opened [practice name] in [neighborhood] in [Month YYYY]. [One or two true sentences, in the dentist's own words, on why nobody gets lectured here.] So you won't get a lecture from me about how long it's been.

Line 310: `Haven't been in years? You're welcome here.` FAQ "I haven't been in years": end at `[...] there's no wrong answer.` Restore either only with the dentist's own true line.

**M2. Bring every price up to §108.53.** The disclosures the lead asked for, as exact wording, with where the 23:06 build stands:

| Disclosure | Rule | Exact wording | On the page at 23:06 |
|---|---|---|---|
| The period the fees are in effect | (c)(4) | `Good through [Month D, YYYY].` Short form beside the hero numeral: `through [Mon D, YYYY]` | In the hero footnote (409), `.svc-note` (488) and JSON-LD. Missing from the uninsured cost panel (557). |
| The fee is a minimum and may increase | (c)(3), (c)(6), (d)(3) | `"From" is the lowest fee for that service. Yours can be higher, depending on the treatment you need.` | Present (488). |
| The same, for the first visit | (c)(2), (c)(3), (d)(3) | `More if your gums need more than a regular cleaning.` directly under the numeral | Said in the footnote only (409): "If your gums need more than a regular cleaning, the fee is higher". |
| What the emergency fee does and does not include | (c)(1), (c)(2), (d)(3) | `$95 covers the look and an X-ray of that tooth. The fix is extra, and I price it before I start.` | Present (478, 609). |
| The price chip's condition | (a), (d)(3) | Lowest risk: `First visit from $195 without insurance · 75 min`. See d. | "First visit $195 without insurance · 75 min": half the condition. |
| Ownership | §108.52(c)(3); §108.59(1) | `Owned by Dr. Paloma Krenek, DDS, General Dentist. This website is owned and run by [Legal entity, PLLC].` See M5. | Present (645, 647), without ", General Dentist". |

a. Hero (`.fv`, `.fn`). As applied at 23:06 (on phones the caption stops at "without insurance¹"):

> First visit · 75 min
> **$195**
> without insurance · exam, X-rays, regular cleaning¹
>
> ¹ Exam, X-rays and a regular cleaning. If your gums need more than a regular cleaning, the fee is higher, and I show you why and price it in writing first. Good through [Month D, YYYY].

Lower-risk placement, which both readers prefer: name the service in the label, and put the date and the condition that changes the price directly under the numeral. Only the detail goes to the footnote.

> First visit · 75 min · exam, X-rays, regular cleaning
> **$195**
> without insurance, through [Mon D, YYYY]. More if your gums need more than a regular cleaning.¹
>
> ¹ If your gums need a deeper cleaning, I show you why and give you the price in writing before anything is done. [What a deeper cleaning costs, and what the $195 covers that day: to confirm.]

Either version has to be readable at 390. The applied one is, since 23:06.

b. `.svc-note`, as applied:

> Every price here is without insurance and good through [Month D, YYYY]. "From" is the lowest fee for that service. Yours can be higher, depending on the treatment you need. You get a written estimate before any treatment.

c. Row descriptions, to give the basis of each "from" (§108.53(c)(6)), as applied:

> **Checkups.** Every visit after your first. An exam and a regular cleaning, 50 min. X-rays, when they're due, are $[amount] more. If your gums need more, I show you why and price it first.
> **Fillings.** Tooth-colored. From $190 for a small filling. Bigger fillings and back teeth cost more. I draw the spot and price it before I start.
> **Emergency.** Something hurts or broke. $95 covers the look and an X-ray of that tooth. The fix is extra, and I price it before I start.
> **Whitening.** Trays to take home from $250, or done here in the chair from $450. [What moves the price: to confirm.]
> **Aligners.** Start with a 3D scan and a plain answer on cost and time. The consult and the scan are $0 · 30 min. Treatment from $3,400, depending on how far the teeth have to move.

Still to change, the two FAQ answers that repeat prices. First visit (601): `$195 at Feast Dental in East Austin, and it takes 75 minutes. That covers a full exam, X-rays, a regular cleaning, and a written plan with prices. If your gums need more than a regular cleaning, the fee is higher, and I show you why and give you the price in writing first.` Filling (608): `From $190 for a small tooth-colored filling. Bigger fillings and back teeth cost more. I draw the spot and give you the price in writing before I start.`

d. Chips (four places). Each chip is a reference to a fee, and §108.53(d)(3) bars referring to a fee "without disclosing that additional fees may be involved". Three ways to carry the condition, lowest risk first:

1. `First visit from $195 without insurance · 75 min`. "From" makes every chip disclose itself. It is accurate: $195 is the fee unless the gums need more.
2. `First visit $195 without insurance · 75 min` (as applied), with the chip made a link to `#cost`, where the inclusions and the gum condition sit and the date should. Acceptable only because the hero and the Cost panel carry the full terms on the same page.
3. No price in the chip outside the Cost section: `First visit · 75 min`.

e. If $195 is an opening price below the usual fee, add under the numeral: `Usual fee $[amount].` and say if it is cash-only (§108.53(c)(5), (d)(4)).

f. JSON-LD: `"priceValidUntil"` on each Offer and the gum sentence in the "First visit" description. Applied.

I could not confirm whether an "as of" date satisfies (c)(4). A through-date, refreshed each quarter, plainly does.

**M3. "Next openings".** Replace `sampleSlots()` (`page.js:111`) with the scheduler's real availability, or delete the `.op` openings block. Caption for live data: `Real openings as of [time]. A time is yours once booking confirms it.` The existing fallback, "Call or text for today's times.", is right when the feed fails.

**M4. Decide the hero numeral.** Default to section 3.3, edits 1 and 2. If the 150px numeral stays, get the reading confirmed in writing by counsel first.

**M5. Owner, trade name, licence.** Applied at 23:01 (lines 645, 647 in the 23:06 file). The footer column reads "The dentist and owner · Dr. Paloma Krenek, DDS · General Dentist · Texas dental license no. [number]" and the legal line reads:

> © 2026 [Legal entity, PLLC], doing business as Feast Dental. Owned by Dr. Paloma Krenek, DDS. This website is owned and run by [Legal entity, PLLC].

§108.52(c)(3) wants the owner named "prominently". The column heading at display size does that; the 13px legal line alone would not. Optional: add ", General Dentist" after the name in the legal line, and a line of its own in `#dentist .cred`, `Owner, Feast Dental`.

Conditions: she is the sole owner (otherwise name every owner); the trade name is on file with the Board and renewed with the licence (§108.52(c)(4); Occ. Code §259.003(c)-(d)); on request each patient gets the treating dentist's name and licence number in writing (§108.52(c)(2)).

**M6. The notices in section 7,** linked from the footer, and the Good Faith Estimate line in the Cost section.

**M7. Texting and the insurance card.**

Hero line, step 1 and the insured panel, if the booking tool takes an upload:

> Insured? Add a photo of your card when you book and we'll check your plan before you come.

If texting is the only route:

> Insured? Text us a photo of your card. Texts aren't encrypted, so call instead if you'd rather keep it private.

Under "Text us a question": `Texts aren't private and aren't for emergencies. For anything urgent, call.`

Keep `TEXTS_ANSWERED = true` (`page.js:41`) only with a line that is read in opening hours and auto-replies outside them.

**M8. Booking claims.** Keep "Book online", "Book online any time" and "Booking's open all night" only with a real-time scheduler that confirms a slot at any hour. Otherwise: `Request a time online`, `Ask for a time online, any hour`, and set `BOOKING_OPEN_ALL_NIGHT = false` (`page.js:39`).

**M9. Spanish.** Keep "Hablo español" only if the treating dentist does. Keep the second sentence at line 447 only if the phone and text line are answered in Spanish; otherwise the line is just `Hablo español.` If staff speak Spanish and the dentist does not: `Hablamos español.`

**M10. "0 reviews".** True or gone. Date it now: `0 reviews. I opened in October 2026. Here's what I promise instead.` When the first review exists, replace the heading: `[N] Google reviews so far. I opened in October 2026. Here's what I promise.` Offer no incentive of any kind for reviews.

**M11. Insurance wording.**

> We're in-network with [each plan by name]. Not on the list? We'll tell you what out-of-network would cost before you book. Add a photo of your card when you book and we'll check your plan before you come. What we tell you is an estimate from your plan, not a promise from your insurer. You still pay your plan's deductible and copay.

**M12. Keep a dated copy of every published version for four years** after it last appears (§108.60(a)). A build step that archives the HTML, images and a full-page screenshot meets it.

### Should (README scale: should fix)

- **S1.** "Will it hurt?": `Sometimes, a little. The numbing is a pinch, and you can be sore afterwards. I numb the area first and check it's working before I start. I tell you what's next before I do it. Raise a hand and I stop.`
- **S2.** Promise 3: `A raised hand is enough.` Drop "Every time."
- **S3.** Open-now status: read closures as well as weekly hours (schema.org `specialOpeningHoursSpecification` fits the JSON-LD the script already parses, `page.js:24-35`). Until then show `Today: 11 am to 7:30 pm` in place of "Open now".
- **S4.** Meta description: `Dr. Paloma Krenek, DDS, General Dentist, East Austin. A 75-minute first visit: exam, X-rays and a regular cleaning, with the price in writing first. Evenings and Saturdays. Book online.` Same change in og:description.
- **S5.** One X-ray wording everywhere. The cost panel and JSON-LD say "a full set of X-rays"; the hero, steps and FAQ say "X-rays". Suggested: `the X-rays you need`. It is also what the dentist must decide patient by patient (professional guidance recalled, not re-read this session).
- **S6.** Whitening: `It can make teeth sensitive, usually for a few days.`
- **S7.** "Call or text" links at 262, 448, 485 and 500 open the dialler only. Make "text" a separate `sms:` link or label them `Call (512) 555-0142`. For the closed-hours "Text us" bar, the first auto-reply should read: `Thanks. We're closed and will answer when we open at [time]. If your face is swelling or it's hard to breathe or swallow, call 911.`
- **S8.** Emergency FAQ, add: `After hours, call [number]. If your face is swelling or it's hard to breathe or swallow, call 911.`
- **S9.** "this October" and "in October" to `October 2026` (lines 376, 391).
- **S10.** Cancellation: `Cancel with less than [N] hours' notice and the fee is $[amount].` or `There's no fee.`
- **S11.** Ship the template with `BOOKING_OPEN_ALL_NIGHT = false` and `TEXTS_ANSWERED = false`, so a practice that forgets the flags does not publish two false claims.
- **S12.** `index.html:15` points to a README section, "Before a real practice uses this", that is not in `README.md`. Add it and paste the must list.
- **S13.** Demo previews: section 6.

### Optional (README scale: could fix)

- **O1.** `Teeth are for biting. I help keep them at it.`
- **O2.** The food photographs can stay AI-generated. They show no person, place or result.
- **O3.** If financing is ever added with terms ("0% for 12 months", "$99 a month"), federal lending-advertising rules apply. Not on the page now; not researched.

## 6. Photographs and the demo disclosure

**What a real practice must replace.** `paloma-hero`, `paloma-listening`, `paloma-apple`, `paloma-drawing`, `paloma-laughing` and `social-card.jpg`: real photographs of the actual dentist. `storefront`: the real door. `the-drawing`: a real sketch by the dentist that shows no patient. An AI image presented as the dentist or her premises is a misstatement of fact about who treats you and where (§108.57(c)(1); Occ. Code §259.001). No rule I read requires AI images to be labelled as such; the problem is depicting someone or somewhere that is not real. If patients ever appear: patients of record only, written consent, and "Actual results may vary." (§108.57(d)).

**Is the on-page disclosure adequate for a demo? On the page, yes.** The strip is the first element in the document, in plain words ("Demo page. This practice and its dentist are fictional. The photographs are AI-generated."). The footer repeats it and adds that prices, hours, phone and address are placeholders. The openings, the storefront and every dead link are labelled where they sit. `noindex` is set. The phone number is in the 555-01xx range reserved for fiction. The social card image carries the strip too.

Gaps, all should-fix for the demo:

- The strip is `position: static` and scrolls away, so a screenshot of the hero, the dentist band or the price list carries no marker. Make it sticky, or add "Demo" to the header plate.
- og:title and og:description have no "Demo" word. The card image does, but text-only previews do not.
- The social card still reads "This practice and Dr. Paloma Krenek are fictional" while the page strip now says "its dentist". One wording.
- The JSON-LD describes the fictional practice as a real `Dentist` with eight priced offers. Inert under `noindex`; it becomes a false listing if that tag is removed before the facts are real. The comment at `index.html:8` says so; the README section it relies on is missing (S12).

## 7. Notices and data handling a live version needs

The footer's "Privacy" and "Accessibility" links are placeholders. A live page needs:

1. **HIPAA Notice of Privacy Practices**, posted prominently and downloadable (45 CFR 164.520(c)(3)(i)). The practice is a covered entity once it checks eligibility or bills plans electronically, which the copy promises.
2. **A website privacy policy**, separate from item 1: what the site and its booking tool collect, who receives it, and one true line on storage, for example `This site sets no cookies. If you press "Stop the motion", your browser remembers that on your device. Nothing is sent to us.`
3. **Texas notice of electronic disclosure** of health information (Health & Safety Code §181.154(a)); a website notice satisfies it.
4. **Good Faith Estimate notice** for uninsured and self-pay patients, prominent on the site (45 CFR 149.610(b)(1)(iii)(A)). The page courts exactly these patients. Put a line in the Cost section: `No insurance, or not using it? You have the right to a Good Faith Estimate of what your care will cost.` linked to the federal model notice. The "written estimate" the page promises should be that document for uninsured patients.
5. **Ownership, services, address and contact, licence and qualifications** on the site (§108.59). All present once M5 and the credentials are filled in.
6. **Only if the practice takes Medicaid, CHIP or other federal funds:** nondiscrimination notice and language-assistance notice on the site (45 CFR 92.10, 92.11), and WCAG 2.1 AA by 11 May 2027 or 10 May 2028 depending on staff size (45 CFR 84.84).
7. **An accessibility statement.** No regulation I read compels one for a private practice outside item 6, but a dental office is a place of public accommodation. State the standard aimed at, known gaps, a phone and email route for anyone who cannot use the site or the booking tool, and the date last checked. Do not write "fully compliant" without an audit; that is an advertising claim too.

**Texting patients.**

- A patient who texts first may be answered. Reminders, recalls and any promotion need consent captured at booking: say what will be sent, that message rates apply, and "Reply STOP to stop" (47 CFR 64.1200(a)(1), (a)(2), (a)(10)).
- Promotional texts are now "telephone solicitation" in Texas with private remedies (S.B. 140, effective 1 Sept 2025). Take advice before any text campaign.
- Ordinary SMS is unencrypted. The texting platform needs a business associate agreement, and staff should move health details to a call.
- Using patient contact details for marketing needs HIPAA authorization and Texas "clear and unambiguous permission" (45 CFR 164.508(a)(3); H&S Code §181.152).
- The line must be read during stated hours, with an auto-reply after hours that says so and points emergencies to a phone number. The page now sends closed-hours visitors there by default.

**Insurance-card photos.**

- Name the channel. Best: an upload inside the booking tool, with that vendor under a business associate agreement.
- If the office accepts cards by text or email, tell the patient the channel is not encrypted and offer the phone instead.
- Ask for the card only. State how long images are kept. Keep advertising and analytics tags off any page that collects them.
- "We'll confirm your plan before you come" is a promise. Staff must do it for every first visit, and the answer is an estimate, not the insurer's guarantee (M11).

**Replying to reviews.** Never confirm that a reviewer is a patient or mention their care. A Dallas dental practice paid a federal settlement over review replies in 2019 (read as a search summary only).

**Off the page: search listing and Google Business Profile** (raised by the SEO review).

- **Title tag.** The earlier title put "General dentist" before the dentist's name. The current one, "General Dentist in East Austin, TX | Feast Dental", has no name in it, so the order question is gone. The meta description and JSON-LD keep the notation directly after the name.
- **Profile categories.** My view: primary category "Dentist"; do not add "Cosmetic dentist" or "Orthodontist". A category says what the business is, and the rules bar a general dentist from implying a specialty, recognised or not: "A dentist shall not communicate or imply that he/she is a specialist when providing specialty services" (§108.54(d), LII), and credentials may be advertised only while avoiding "any communications that express or imply specialization in a recognized specialty, or specialization in an area of dentistry that is not recognized as a specialty" (§108.56(a)). Orthodontics is a recognised specialty, so that category is a plain no. Cosmetic dentistry is not one, so that category implies a specialisation that does not exist. Categories that name a service and not a kind of dentist ("Teeth whitening service", "Emergency dental service") are lower risk if the service is really offered in the posted hours. List whitening and aligners under the profile's services, and write "Dr. [Name], DDS, General Dentist" in the description. This is my reading; I found no Board statement on directory categories, and the category names are from memory.
- **The profile is an advertisement too** (§108.51(1)). Prices typed into it need the same §108.53 disclosures as the page.

## 8. Findings against the specs (QA README rule 4)

- `research/02-audience-and-conversion.md` section 6 quotes §108.55(b) and §108.57 accurately; I confirmed both against the official text. It is incomplete: it never mentions §108.53 (price disclosures), §108.52(c)(3) (owner named under a trade name), §108.56(b), §108.58, §108.59 or §108.60. Its retention advice cites New York's one year; Texas requires four. The rule is right; the research file should be extended.
- Same file, section 4d: "Any introductory offer must state the regular fee, what is included, who qualifies and when it ends". Under §108.53(c)(4) every advertised price needs its dates, not only introductory ones.
- Same file, section 4e, offers "we numb properly and check before we start" as safe conduct wording. It is, as a statement. As the whole answer to "Will it hurt?" it implies the outcome the rule bars (S1).
- `brand/02-visual-system.md` section 6.4, "Texas rule": correct as far as it goes. Add that the rule sizes the two-word notation and not the name, and that "Here's your whole first visit." at `--fs-d1` exceeds the designation at `--fs-d2`. Its fallback ("set the hero numeral and the hero designation to the same size") is the right one and matches 3.3.
- `brand/01-brand-core.md` Part 0 item 3 and `content/copy.md` (label note under Services): consistent with the rule as written.
- `content/copy.md` hero: the inclusions and the gum condition sit in a footnote. §108.53(a) and (c) want them clear and with the price. The spec should move the inclusions beside the numeral (M2a).

## 9. What I could not verify

1. **No authority on prices and the font-size sentence.** Searches found no Board guidance, FAQ, newsletter or order on whether a price numeral counts, on screen-by-screen judging, or on what satisfies §108.53(c)(4). Nobody at the Board was asked.
2. **Official text was read for §§108.52, 108.53, 108.55, 108.56, 108.57 only.** §§108.50, 108.51, 108.54, 108.58 to 108.63 were read on Cornell LII (a quarterly mirror); their titles match the official index. The §108.56 "Attached Graphic" was read in the Board's 2016 compilation, not opened in the current viewer. A search found no 2025 or 2026 Texas Register amendment to §§108.53, 108.55 or 108.57; that is a search result, not a docket check.
3. **Texas statutes** were read on a mirror dated May 2025, not the official site. Any 2025 change to Occupations Code ch. 259 is unchecked. S.B. 140 was read as enrolled bill text; its codification and exemptions were not.
4. **Whether a $0 consult or scan is a "gift" over ten dollars** under §108.58(a). Free consults are common, but I found nothing either way.
5. **Search summaries only, primary documents not opened:** the 2019 Dallas review-reply settlement; the federal confirmation that dentists owe Good Faith Estimates; the status of federal guidance on tracking technologies (partly vacated by a Texas federal court in 2024, appeal withdrawn). Check the last before adding any analytics or advertising tag.
6. **From memory, not read this session:** professional guidance that X-rays are prescribed per patient; the federal model Good Faith Estimate notice; carrier registration rules for business texting; the Texas Data Privacy and Security Act and its exemptions; Texas law on AI-generated content; ADA Title III as applied to websites.
7. **Not re-read:** ADA Code section 5 and New York Part 29 (taken from the research file).
8. **The names.** Whether a licensed Texas dentist called Paloma Krenek exists was not checked against the Board's licence search, and "Feast Dental" has had no trade-name clearance. The brand file says the same.
9. **Not tested:** `sms:` and `tel:` links on a phone; how link previews render (og:image is a relative URL); any browser other than the shared Chromium-based one; print.
10. **Helpers.** The independent second reading returned after the first version of this report and is folded into 3.3, 3.4 and M2. It worked from my measurements and never saw the page, and it read the rules on Cornell LII only. The fetch helper opened one source, the 2021 attorney commentary; Justia, the Texas Register archive, the Board's rules page and one attorney newsletter refused it or returned nothing, and those hosts were not retried. The Texas Register preambles for the 2013 adoption and the 2021 amendment therefore remain unread, and they are the likeliest place for the Board's own explanation of the font-size sentence.
11. **Later edits.** The page changed at least six times during the review. Anything added after 23:08:33 is unread. The re-check in section 1a covered copy, type sizes and the hero; it did not repeat the storage test, and the last build was measured at 1440 and 390 only.
12. **Other states.** Texas only.
13. **The practice's actual facts.** Every "IF" above.

## 10. Sources and how each was read

| Source | How read |
|---|---|
| Texas Administrative Code viewer (Secretary of State), 22 TAC 108.52, .53, .55, .56, .57, as of 11/09/2026: `https://texas-sos.appianportalsgov.com/rules-and-meetings?interface=VIEW_TAC&title=22&part=5&chapter=108&subchapter=E` | In a browser; rule text captured as screenshots in `.ops/qa/shots/compliance/tx-sos-108-52.png`, `-53`, `-55`, `-56`, `-57` |
| Cornell LII, 22 Tex. Admin. Code §§108.50 to 108.63: `https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-108-55` (and `-50` to `-63`) | Fetched directly, full text |
| TSBDE Rules and Regulations compilation, as in effect 8 Sept 2016: http://tsbde.texas.gov/78i8ljhbj/2019/02/TSBDE-Rules-and-Regulations.pdf | PDF text; used for the §108.56 example and as a third copy of §108.55 |
| Attorney guest post on §108.59 and §108.55 (26 July 2021): https://dentalcompliance.com/blogs/news/guest-post-website-disclosures-pursuant-to-the-board-s-business-promotion-rules-by-laura-diamond-attorney | Fetched directly |
| Texas statutes mirror: `https://texas.public.law/statutes/tex._occ._code_section_259.006` (also 104.003, 259.001, 259.003, 259.005, 259.008; Health & Safety Code 181.001, 181.152, 181.154) | Fetched directly; mirror, not official |
| S.B. 140 enrolled text: https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00140F.htm | Fetched directly |
| eCFR: 45 CFR 164.501, 164.508, 164.520, 164.522, 149.610, 92.10, 92.11, 84.84; 47 CFR 64.1200; 16 CFR 251, 255, 465 (https://www.ecfr.gov) | Versioner API, full section text |
| Federal settlement over review replies; ADA News on Good Faith Estimates (https://adanews.ada.org/ada-news/2023/february/ada-receives-clarification-on-no-surprises-act/); tracking-technology litigation | Search summaries only |
| TSBDE disciplinary matrix (http://tsbde.texas.gov/78i8ljhbj/Matrix-2019.pdf) and August 2023 newsletter (https://tsbde.texas.gov/78i8ljhbj/August-2023-TSBDE-Newsletter.pdf) | Read by the second reader only |
| TSBDE site (`tsbde.texas.gov/laws-rules/`), Justia regulations, Texas Register archive pages, one attorney newsletter PDF | Refused automated requests or returned nothing; not read and not retried |
