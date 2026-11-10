# 03 - Motion and animation techniques (verified 2026-11-09)

Scope: what is state of the art for marketing-page motion, what ships in browsers today, and a tested motion stack with recipes for a static, no-framework landing page (8 to 10 sections, mobile first, must degrade gracefully and honour reduced motion). Research only; nothing here builds the page.

## 0. Method and limits (read first)

Everything below was checked on the live web or by running code in this session. Tags used throughout:

| Tag | Meaning |
|---|---|
| [BCD] | MDN browser-compat-data 8.1.8, published 2026-11-02 (downloaded from the npm registry and queried locally) |
| [WF] | web-features 3.45.0, published 2026-11-02 (Baseline dates) |
| [CIU] | caniuse full data set, updated 2026-11-05 (support plus global usage shares) |
| [REL] | Vendor release notes read today (Firefox, Chrome, WebKit blog, Chrome Status API) |
| [NPM] | npm registry metadata and package contents read today (versions, dates, licences, file sizes) |
| [TEST] | Run today in three engines: Google Chrome 157.0.8103.50 (installed build), Firefox 159.0 and WebKit 27.2 (Playwright test builds). Separate headless instances with a throwaway profile; the shared automation browser was not touched |
| [AWW] | Awwwards pages fetched directly today |
| [COD] | Codrops article read in full from an Internet Archive snapshot (web.archive.org, captures dated 2026-06 to 2026-11). The live host returned 403 to every direct request, mine and two helper agents', so nothing was checked against the live page |
| Read / Title / Snippet | Evidence grades used in section 4; defined in 4.1 |

Stable browsers on 2026-11-09: Chrome 157 (released 2026-11-03), Safari 27.2 (2026-10-26), Firefox 159 (2026-10-27; Firefox 160 is due 2026-11-10, ESR is 153) [BCD][CIU].

Limits, stated once so nobody over-trusts this file:

- No real Safari and no iOS or Android device was used. WebKit results come from Playwright's WebKit 27.2 build, which is close to Safari but is not Safari.
- [TEST] checked computed styles, animation progress, class changes and console errors. Nobody looked at the result with their eyes. Timing, easing feel and visual polish are untested.
- Award-site observations come from Awwwards listings, case studies and archived Codrops write-ups. The live sites themselves were not opened, so nothing is claimed about how they feel. Several patterns rest on Awwwards element titles alone; section 4 says which.
- FWA and CSS Design Awards could not be read (404, placeholder content and an empty 202 response; confirmed independently by a helper agent). They are not represented.
- No source that was read says any effect is "dated". The avoid list in 4.4 is judgement and is labelled as such.
- Global usage figures are computed from caniuse usage data with version thresholds; treat them as estimates within a point or two.

## 1. Headline findings

1. **Scroll-driven animations became Baseline two weeks ago.** Firefox 159 shipped them on 2026-10-27 [REL], joining Chrome 115+ and Safari 26+. Safari runs them on the compositor thread since 26.4 [REL]. Estimated global support today is about 89%, rising to roughly 91% as Firefox users update [CIU]. This is the single biggest change for a CSS-first page: scroll-linked motion no longer needs a library.
2. **Scroll-triggered animations** (`animation-trigger`, `timeline-trigger`) shipped in Chrome 146 (2026-03-10) and nowhere else [BCD][REL]. Useful as a progressive layer, not as a foundation. They ran correctly in Chrome 157 in today's test.
3. **Same-document View Transitions are Baseline** (Firefox 144, 2025-10-14) [WF]. Cross-document transitions still lack Firefox [BCD].
4. **`linear()` springs are safe everywhere** (Baseline widely available since 2026-06-11) [WF]. There is still no native `spring()`; the CSSWG issue has been open since 2016 and was last discussed on 2026-09-08.
5. **`sibling-index()`, `shape()` and `progress()` all reached Baseline in 2026** [WF]. `random()` is in Safari 26.2+ and Chrome 156+, not Firefox [BCD].
6. **GSAP is free, including every former Club plugin**, under a Webflow "no charge" licence that is not open source [REL]. Current stable is 3.15.1 (2026-11-04) [NPM]. SplitText works standalone at 3.6 kB gzip (measured).
7. **Award sites still run on GSAP plus Lenis plus WebGL.** 7 of the 10 Awwwards Sites of the Month for January to October 2026 are tagged GSAP and 9 of 10 are tagged WebGL or 3D; of the 15 most recent Sites of the Day, 8 are tagged GSAP and 12 WebGL, 3D or three.js [AWW]. Every 2026 Codrops scroll tutorial found uses GSAP (ScrollTrigger or Observer); none found uses native scroll-driven CSS. For this page that stack is the wrong default: it buys desktop spectacle at a mobile cost.
8. **Recommendation in one line:** native CSS for almost everything, a 1.4 kB gzip script for the rest, SplitText standalone as the only vendor file, no smooth-scroll library, no WebGL.

## 2. Support matrix

Version numbers are the first stable release with support [BCD]. "Baseline" dates are from [WF]. Rows marked [TEST] were also exercised today in all three engines.

### 2.1 Scroll-linked motion

| Feature | Chrome | Safari | Firefox | Status | Detect and fall back |
|---|---|---|---|---|---|
| Scroll-driven animations: `animation-timeline: scroll() / view()`, `animation-range`, `view-timeline`, `scroll-timeline`, `timeline-scope` [TEST] | 115 (2023-07) | 26.0 (2025-09); compositor-threaded from 26.4 (2026-03) | 159 (2026-10-27) | Baseline newly available 2026-10-27 | `@supports (animation-timeline: view())`. Fallback: static end state, or an IntersectionObserver class. Missing in iOS 18 and earlier and in Firefox ESR 153 |
| `scroll` named range for view timelines | 147 | 26.5 | 159 | New | Use `entry` / `cover` / `exit` ranges for now |
| Scroll-triggered animations: `animation-trigger`, `timeline-trigger`, `trigger-scope` [TEST, Chrome] | 146 (2026-03) | no | no | Experimental, Chrome and Edge only | `@supports (animation-trigger: --t play-once) and (timeline-trigger: --t view())`. Fallback: IntersectionObserver |
| JS: `ScrollTimeline`, `ViewTimeline`, `Element.animate({ timeline, rangeStart, rangeEnd })` | 115 | 26 | 159 | Same as CSS | `'ScrollTimeline' in window` |
| Scroll-state container queries: `stuck`, `snapped`, `scrollable`; `scrolled` [TEST, Chrome] | 133; `scrolled` 144 | no | no | Chrome and Edge only | `@supports (container-type: scroll-state)`. Fallback: nothing changes |
| CSS carousels: `::scroll-marker`, `::scroll-marker-group`, `::scroll-button()`, `:target-current` [TEST, Chrome] | 135 | no | no | Chrome and Edge only | `@supports selector(::scroll-marker)`. Fallback: native swipe with scroll snap |
| Scroll snap | 69 | 11 | 68 | Baseline widely available | none needed |
| `scrollend` event | 114 | 26.2 | 109 | Baseline newly available 2025-12-12 | debounce `scroll` |
| Scroll anchoring (`overflow-anchor`) | 56 | 27.0 (2026-09) | 66 | New in Safari | none needed |

### 2.2 Transitions between states and pages

| Feature | Chrome | Safari | Firefox | Status | Detect and fall back |
|---|---|---|---|---|---|
| View Transitions, same document: `document.startViewTransition()`, `view-transition-name` [TEST] | 111 | 18.0 | 144 | Baseline newly available 2025-10-14 | `if (document.startViewTransition)`; otherwise run the DOM update directly |
| `view-transition-class` | 125 | 18.2 | 144 | Baseline 2025-10-14 | ignored when unsupported |
| `view-transition-name: match-element` | 137 | 18.4 | 144 | All three | fall back to explicit names |
| Transition types: `startViewTransition({ types })`, `:active-view-transition-type()` | 125 | 18.2 | 147 | Baseline 2026-01-13 | optional |
| Cross-document: `@view-transition { navigation: auto }`, `pageswap`, `pagereveal` | 126 | 18.2 | no | Interop 2026 focus area | Safe to ship; Firefox does a normal navigation |
| Nested groups: `view-transition-group` | 140 | no | no | Chrome only | avoid |
| Element-scoped: `element.startViewTransition()`, `view-transition-scope` | 147 | no | no | Chrome only | avoid |
| `@starting-style` [TEST] | 117 | 17.5 | 129 | Baseline 2024-08-06 | element simply appears |
| `transition-behavior: allow-discrete` | 117 | 17.4 (`display` from 18) | 129, but cannot transition `display` or `content-visibility` | Partial in Firefox | exit animations are skipped in Firefox |
| `interpolate-size: allow-keywords`, `calc-size()` [TEST] | 129 | no per [BCD]; the WebKit 27.2 test build reported support and animated | no | Treat as Chrome only | `@supports (interpolate-size: allow-keywords)`; otherwise it opens instantly |
| `::details-content`, `<details name>` | 131 / 120 | 18.4 / 17.2 | 143 / 130 | Baseline | none needed |

### 2.3 Easing, maths and values

| Feature | Chrome | Safari | Firefox | Status | Detect and fall back |
|---|---|---|---|---|---|
| `linear()` easing (springs, bounces) [TEST] | 113 | 17.2 | 112 | Baseline widely available 2026-06-11 | `@supports not (transition-timing-function: linear(0, 1))` then `cubic-bezier()` |
| Native `spring()` easing | no | no | no | CSSWG issue 280, open since 2016, last comment 2026-09-08 | Generate `linear()` |
| `@property` (animatable custom properties) [TEST] | 85 | 16.4 | 128 | Baseline 2024-07-09 | `'CSSPropertyRule' in window`; value snaps instead of animating |
| `sibling-index()`, `sibling-count()` [TEST] | 138 | 26.2 | 154 | Baseline newly available 2026-08-18 | inline `--i` custom property |
| `random()` | 156 (2026-10-20) | 26.2 | no (Nightly) | Not Baseline | set values in markup or JS |
| `progress()` | 138 | 26 | 155 | Baseline 2026-09-01 | `calc()` |
| `if()` | 137 | no | no | Chrome only | avoid |
| Typed `attr()` | 133 | no (Technology Preview) | 155 | Interop 2026 focus area | inline custom properties |
| `@function` | 139 | no (Technology Preview) | no | Chrome only | avoid |
| Individual transforms: `translate`, `rotate`, `scale` | 104 | 14.1 | 72 | Baseline widely available | none needed |
| `contrast-color()` | 147 | 26 | 146 | All three | hard-code the pair |

### 2.4 Shape, type and layout

| Feature | Chrome | Safari | Firefox | Status | Detect and fall back |
|---|---|---|---|---|---|
| `shape()` in `clip-path` [TEST] | 135 | 18.4 | 148 | Baseline newly available 2026-02-24 | `@supports (clip-path: shape(from 0 0, line to 10px 10px))`; fall back to `inset()` |
| `offset-path` (motion path) | 55 (shapes 116) | 16 (shapes 18) | 72 (shapes 122) | Baseline widely available | none needed |
| `corner-shape` | 139 | no (Technology Preview) | no (Nightly) | Chrome only | `border-radius` |
| `border-shape` | 147 | no | no | Chrome only | avoid |
| `text-box-trim`, `text-box-edge` | 133 | 18.2 | 154 | All three | manual padding |
| `text-wrap: balance` | 114 | 17.5 | 121 | Baseline | none needed |
| `text-wrap: pretty` | 117 | 26 | no | Two of three | harmless |
| `text-fit` (fit text to container width) | 150 | no | no | Chrome only | `clamp()` with viewport units |
| Anchor positioning | 125 | 26 (complete in 27) | 147 | All three; caniuse marks Chrome and Firefox partial | not needed for this page |
| Variable fonts, `font-variation-settings` | 62 | 11 | 62 | Baseline widely available | none needed |
| COLRv1 colour fonts | 98 | no | 107 | No Safari [BCD][CIU] | Safari shows the fallback font; do not rely on it |
| `content-visibility` | 85 | 18 | 125 | Baseline newly available 2025-09-15 | none needed |

### 2.5 Other 2026 arrivals worth knowing

- **HTML-in-canvas** (draw live DOM into canvas, WebGL and WebGPU textures): listed as enabled by default in Chrome 157 on Chrome Status after an origin trial from Chrome 148; API names changed during the trial. Chrome only. This is how award sites will distort real, accessible DOM text in shaders. Not for this page.
- **Programmatic scroll promises** (`scrollTo()` returns a promise): Chrome 150.
- **Animatable `zoom`**: Chrome 150.
- **Safari 27.0** (released 2026-09-14; WebKit notes dated 2026-09-17) was a quality release: 844 fixes, scroll anchoring, `stretch` sizing, `alpha()`, and `AnimationEvent.animation`. Its notes list dozens of scrolling and sticky fixes, which is good news for sticky-based effects.
- **Foldables**: Safari 27.1 arrived with a folding iPhone; viewport widths run from 382 to 951 CSS px. Motion must not assume one "mobile" width.
- **Interop 2026** focus areas include scroll-driven animations, view transitions (including cross-document), typed `attr()`, `shape()`, scroll snap and container style queries.

### 2.6 What today's test run showed

A scratch page containing all ten recipes from section 6 was run in the three engines, at 1280 and 390 px width, with and without reduced motion, and in Firefox with scroll-driven animations switched off by preference to exercise the fallback path.

| Check | Chrome 157 | Firefox 159 | WebKit 27.2 |
|---|---|---|---|
| `@supports` for scroll-driven animations, `linear()`, `sibling-index()`, `shape()`, `@starting-style`, `@property`, view transitions | all true | all true | all true |
| `@supports` for scroll triggers, scroll markers, scroll-state queries | true | false | false |
| `interpolate-size` | true | false | true (test build) |
| Scroll-driven progress on scroll (card stack, image reveal, rail) | correct | correct | correct |
| Curved `shape()` reveal interpolates | yes | yes | yes |
| Console errors | none | none | none |

One artefact to remember when writing automated tests: in the WebKit build, a scripted `scrollTo()` issued immediately at load on a minimal page left view timelines at 0% until the next real scroll. Wheel scrolling on the same page progressed correctly. It is the reason for design rule 3 in section 5.

## 3. Libraries

Versions, dates and licences are from the npm registry today [NPM]. Sizes are measured: "file" is the shipped minified file gzipped; "bundled" is an esbuild 0.28 minified ES module of the named imports, gzipped.

| Library | Latest (date) | Licence | Size (gzip) | What is new | Use it when | Verdict for this page |
|---|---|---|---|---|---|---|
| GSAP `gsap` | 3.15.1 (2026-11-04) | "Standard no charge" licence, Webflow-owned, not open source. Free for commercial sites; prohibits use in visual animation builders that compete with Webflow | Core 27.8 kB bundled. Files: ScrollTrigger 18.0, SplitText 3.7 (3.6 bundled), Flip 9.7, ScrollSmoother 5.5, Observer 4.3, MorphSVG 9.6, DrawSVG 2.2, CustomEase 3.7. Core + ScrollTrigger + SplitText 48.4 bundled | 3.13 (2025-04): everything free, SplitText rewritten (masks, `autoSplit`, `aria`, standalone). 3.14 (2025-12): MorphSVG `smooth`. 3.15 (2026-04): `easeReverse` for interruptible reverses | Sequenced timelines, SVG morphing, Flip layout transitions, anything that must be scrubbed and reversed precisely | Vendor only `SplitText.js` (standalone). Add core only if a designed sequence needs it |
| Motion `motion` | 14.11.1 (2026-11-09) | MIT. `splitText`, `scrambleText` and other "Motion UI" pieces need paid Motion+ | `animate` mini + `inView` + `scroll` 6.9 bundled; plus `spring`, `stagger`, `hover`, `press` 10.7; hybrid `animate` set 31.1. Whole UMD file 63.5 | v13 (2026-08), v14 (2026-10). Vanilla API gained `drag`, `press`, `pinch`, `animateView` (view transitions), timeline sequences. `scroll()` uses native `ScrollTimeline` where present | You want an MIT-licensed, tree-shakable JS layer over WAAPI with springs and gestures | Good second choice if the team prefers MIT. Needs a bundling step to stay small |
| Lenis `lenis` | 1.3.27 (2026-10-15) | MIT | 5.4 file, plus 0.25 CSS | 1.3.26 (2026-08) honours `prefers-reduced-motion` by default | WebGL or heavily scrubbed scenes that need DOM and canvas locked to one smoothed scroll value | Not recommended. See section 5 |
| Anime.js `animejs` | 4.5.0 (2026-06-22) | MIT | `animate` + `stagger` + `onScroll` + `splitText` 21.5 bundled; `waapi` + `stagger` 7.6; whole file 40.9 | v4 is modular: WAAPI wrapper, `onScroll`, text splitter, auto layout, draggable. 4.5 added a three.js adapter. 4.4 changed transform order (breaking) | MIT alternative to GSAP with a free text splitter | Viable; heavier than Motion mini for the same job |
| Rive `@rive-app/canvas-lite` | 2.50.0 (2026-11-09) | Runtime MIT. Per the package README, free-plan exports play a short Rive splash screen and paid plans remove it | 122.6 JS + 352.6 wasm (lite). Full canvas runtime 152.7 + 941.0 | Positioned as an interactive 2D and 3D engine; lite build omits Rive Text and audio | One interactive character or illustration with states (idle, hover, success) | Only if a designer delivers a `.riv` mascot. Lazy-load on visibility; static poster otherwise |
| dotLottie `@lottiefiles/dotlottie-web` | 0.82.1 (2026-11-02) | MIT | 30.9 JS + 491.1 wasm (fetched from a CDN by default; can be self-hosted) | State machines and theming inside `.lottie`; worker rendering | After Effects-authored loops and simple interactive states | Same caveat as Rive. For two-second icon loops, inline SVG and CSS is lighter |
| OGL `ogl` | 1.0.11 (2025-01-27) | Unlicense | README states 8 core, 29 total; tree-shakable | No release in 2026; repository last pushed 2025-04 | One lightweight shader effect on images | Not needed |
| three.js `three` | 0.187.0 (2026-10-30) | MIT | No minified build ships in the package; core alone is 290 gzip unminified. Budget well over 150 after minifying | Roughly one release every two months; WebGPU renderer and TSL are the active front | Real 3D scenes | Not for this page |
| Theatre.js `@theatre/core` | 0.7.2 (2024-05-19) | Apache-2.0 | 50.0 file | No release since May 2024; repository last pushed 2024-08 | Hand-keyed cinematic sequences with an editor UI | Stale. Avoid for new work |
| Swup `swup` | 4.10.0 (2026-09-03) | MIT | 7.3 file | Actively maintained | Page transitions on multi-page server-rendered sites | Not needed; use cross-document view transitions |
| Taxi `@unseenco/taxi` | 2.0.0 (2026-09-27) | BSD-3-Clause | 4.8 file | 2.0 released September 2026 | Same job as Swup, lighter, popular with studios | Not needed |
| Barba `@barba/core` | 2.10.3 (2024-08-12) | MIT | 9.9 file | No release since 2024, still used in 2026 Codrops tutorials | Legacy projects | Prefer Taxi or Swup if a library is required |

Note on GSAP 4: the npm `beta` tag carries `4.0.0-beta.3` (2026-11-05). Its README asks testers not to publish previews before the official announcement, and it is not for production. Do not plan around it and do not mention it in client-facing material; stay on 3.15.1.

## 4. What award-level sites are doing in 2026

### 4.1 Evidence base and how to read it

Each pattern below is marked by how it was verified. The grades are deliberately blunt:

| Grade | Meaning |
|---|---|
| **Read** | I read the full text of a case study or tutorial that describes the technique. Awwwards articles were fetched directly; Codrops articles were read from Internet Archive snapshots because the live host refused every automated request |
| **Title** | Known only from an Awwwards "element" entry: its title, category and keyword tags. The clip was not watched and the site was not opened, so what it actually does is not known |
| **Snippet** | Known only from a search-result summary. Title, date and URL are real; nothing else is confirmed |

Awwwards status is given where it matters: SOTM (Site of the Month), SOTD (Site of the Day) or nominee. A nominee is a recent submission, not a winner.

What was collected:

- **Sites of the Month, January to October 2026** [AWW]: Bruno's Portfolio, The Renaissance Edition (Shopify), GQ and Audemars Piguet: The Extraordinary Lab, Oryzo AI, Floema, Son Daven, Lama Lama, ERA Residence, Why Zero, Santioni Spirits. Tags on their Awwwards pages: GSAP on 7 of 10; WebGL, 3D or three.js on 9 of 10.
- **The 15 most recent Sites of the Day, 2026-10-26 to 2026-11-09** [AWW]: A24 (concept), Awards Racing, G. Colombel Portfolio 2026, Unbelievably Crap, Spyker Cars, MECHA, Dont Look Up game, Grids by Obys, DeepBook, Grail, Agrumea Farm, ViV, Justin Jefferson, Extrafazant, ZIRKA Interceptor. Tags: GSAP on 8 of 15; WebGL, 3D or three.js on 12 of 15; Barba.js on 2; Webflow on 3. Eight of the 15 list a loader or preloader among their highlighted elements.
- **Awwwards case studies, read in full** [AWW]: La Revoltosa (waka, 2026-07-15), The New Obys (2026-07-01), Floema (Bürocratik, 2026-08-06), Fluid Glass (Exo Ape, 2026-05-07), ShapeShifts (fromanother, 2026-07-08).
- **Awwwards element listings** for scroll, mouse interaction, transition, loading and animation [AWW]. These show the newest submissions. The entries I checked were Sites of the Day and nominees dated 2026-11-04 to 2026-11-09. They are evidence of what is being built now, not of what wins.
- **Codrops 2026 articles, read in full from archive snapshots** [COD]: Astro and GSAP landing page (2026-10-09), Sticky Grid Scroll (2026-03-02), Obys (2026-05-14), Exat microsite (2026-04-10), Animaxxing kinetic type (2026-10-26), Infinite GSAP gallery with Flip (2026-07-30), SVG mask transitions (2026-03-11), Trionn architecture (2026-07-15), Shopify Spring '26 Edition (2026-06-26), 1820 Productions (2026-02-13), Paper shaders (2026-10-19), Carmen Ansio profile (2026-10-24).
- **Not obtained:** FWA, CSS Design Awards, the live Codrops site, and any studio's own breakdown page. The GSAP showcase lists featured sites without per-site plugin tags, and the Unseen and Locomotive home pages name no techniques (both relayed by a helper agent; not re-read by me), so neither added evidence.

Two framing observations, both from text that was read:

- The studios talk about restraint. Obys on motion: "It's not decorative. It helps explain the idea". fromanother: "Every effect earned its place." Exat: "Not all motion is meant to be noticed." Carmen Ansio: "if a transition isn't saying something, keep it quiet."
- The studios also cheat for performance. fromanother built its "shader" backgrounds from "videos layered with opacity and blend modes. No glassmorphism, no GLSL." Shopify "exported non-interactive motion to video when runtime animation was not worth the cost" and tiers devices down to static fallbacks. Floema only renders while the user scrolls. waka admits that "a flawless 60fps on every single mid-range phone is nearly impossible with a setup this heavy."

### 4.2 Fourteen current patterns

The pattern descriptions are of the generic effect. Where the evidence grade is Title, the named site's actual behaviour was not seen. "Strength" rates the evidence that the pattern is in current use, not how good the pattern is.

| # | Pattern (generic description) | Evidence and how verified | Strength | How it is built | Cost and risk | Fit here |
|---|---|---|---|---|---|---|
| 1 | **Masked line and word headline reveals.** Words rise from behind a clip edge and settle | Read: Animaxxing ("headline lines snap up from behind masks"; motion brief: "bold, precise and a little springy"; with reduced motion "the hero simply appears at rest"). Read: Trionn (reusable SplitText component for character, word and line reveals with central reduced-motion handling). Snippet: Au-rel.io (2026-11-09), Joffrey Spitzer (2026-02-18) | Strong | SplitText `mask: "lines"` plus stagger, or authored spans plus CSS. Fonts must load before splitting | Low. Splitting breaks screen-reader text unless `aria-label` is set (SplitText does this) | Yes: recipe 1 |
| 2 | **Variable-font axis motion.** Letters change weight or width with cursor distance, hover or scroll | Read: Exat (weight and colour by cursor distance; hovering style names morphs weight and width). Read: Animaxxing (names "gain weight as they scroll in" and "widen on hover", with a documented layout-shift bug). Title: "Loader and Hero Variable Font Interaction" (Extrafazant, SOTD 2026-11-08; tags: loader, variable, font, hero, svg, path) | Strong | `font-variation-settings` or `font-weight` / `font-stretch` driven by custom properties | Relayout and repaint every frame; neighbours shift when a word widens. Needs a variable font | Only if the display face is variable. Barlow Condensed is static (Google Fonts metadata, checked today). Anybody, Archivo and Saira have `wdth` and `wght` axes |
| 3 | **Sticky stacked cards.** Cards pin and the next slides over | Title only: "Cards stack on scroll" (MindMarket, SOTD 2025-12-29); "Creed Teaser - Stacking Cards on Scroll" (Logan Circle Group, nominee; tags: cards, stacking, scroll animation); "Showcase stack" (annnimate, nominee; tags: scroll animation, card stack, smooth scroll); "Services Cards Scroll" (Emblematica, nominee). annnimate sells packaged GSAP components, which suggests the pattern is now off-the-shelf | Thin. Titles only; no write-up read, nothing watched | My inference: `position: sticky` plus a scroll-driven scale | Low. Common; needs real content to earn its place | Yes, once: recipe 2 |
| 4 | **Sticky "stage" scenes.** A section pins and scrolling advances time inside it | Read: Sticky Grid Scroll ("Scrolling does not move the scene, it advances time inside it"; a 425vh block; GSAP, ScrollTrigger, Lenis). Read: Trionn ("pinned storytelling sections"). Read (critical): Designerly groups "pinned animations" with scrolljacking | Strong | Tall wrapper, sticky child, scrubbed timeline | Long scroll distance, fatigue on phones, awkward for keyboard users | Sparingly; at most one, under two viewport heights |
| 5 | **Section-level colour change on scroll.** Background and palette shift as a section arrives | Read: fromanother ("As you scroll, the background shifts through colour states"). Read: La Revoltosa (per-flavour illustration, palette and copy "all shift at once"). Read: Astro and GSAP landing page (scrubbed pixel colour transition between sections). Title, trigger unknown: "Infinite scroll with theme switch" (Klad Syndicate, nominee), "Day Night Theme" (ERA Residence, SOTM August), "Spyker Preliator XXV Time change" (Spyker Cars, SOTD 2026-10-30). Not counted: The Branx "Light or dark, one pixel switch away" is tagged as a toggle | Strong for scroll-linked colour change. The build in recipe 7 (all tokens flip at the viewport midpoint) is my design; no source describes it | Page-level custom properties animated together | Low if colours are registered custom properties. Watch contrast during the blend | Yes, and it suits colour blocking: recipe 7 |
| 6 | **Pixel, grid and blind wipes.** Transitions resolve through cells or slats | Read: Astro and GSAP landing page (pixel transition with random stagger, scrubbed; canvas pixel image reveal). Read: SVG mask transitions (grid and blind patterns). Title: "Pixel Icon Loader" (jld2nd), "ASCII Lens Hover" and "ASCII Boot Preloader" (Bohdan Ratiiev), "Seven beliefs, seven pixel sprites" (The Branx, nominee). Snippet: HAOQI.DESIGN (2026-08-15) | Medium to strong | Grid of cells with randomised stagger, or an SVG mask | Many DOM nodes if overdone | Optional accent for one divider |
| 7 | **Masked image reveals.** An image appears through an opening shape | Read: SVG mask transitions (fullscreen images revealed through SVG masks on scroll). Read: 1820 Productions (a clip-path reveal, but of the page leaving the loader, not of an image). Title: "Showreel Player with SVG Mask" (Logan Circle Group, nominee) | Medium. The inner counter-scale in recipe 3 is a convention I added; no 2026 source read describes it | `clip-path` or mask on the frame | Low. `clip-path` repaints the element | Yes: recipe 3 |
| 8 | **Shared-element (Flip) transitions.** A thumbnail becomes the full view | Read: Infinite GSAP gallery (Flip with matching `data-flip-id`; Observer for input). Snippet: Better Off Studio (2026-03-03), Joffrey Spitzer (2026-02-18). Title: "Films -> Detail page" (A24 concept, SOTD 2026-10-26) | Medium. No source read uses the native View Transitions API; every example is GSAP Flip or a routing library | GSAP Flip, or natively with View Transitions | Low natively | Yes, natively: recipe 10 |
| 9 | **Intro that hands off into the hero.** A branded opening resolves into the first screen | Read: 1820 Productions (session-aware loader via `sessionStorage`: full intro once, quick version after). Read: Fluid Glass ("premium loader ... transitions directly into the website"). Read: Obys (old logo to new, dark to light). Title: loader elements on 8 of the 15 latest SOTD | Strong | Timeline plus a clip reveal | A loader that blocks content costs patience and risks LCP | No loader. Borrow the idea as a sub-second hero entrance |
| 10 | **Cursor-reactive media.** Lens, trail and fluid effects under the pointer | Read: Paper shaders (lens distortion on thumbnails follows the cursor, "slightly damped"). Read: Floema (leaf shadows shift with the cursor). Read: Exat (glyph grid reacts to cursor distance). Title: "Fluid mouse interaction" (G. Colombel, SOTD 2026-10-28), "Mouse Trail Image Hover Effect" (Logan Circle Group, nominee), "A cursor that greets the team" (Bitwip, nominee). Snippet: square lens tutorial (2026-08-25) | Strong | WebGL shaders, or DOM for simple trails | Desktop only, GPU cost | No. Most visitors will be on phones |
| 11 | **Velocity-reactive ambient motion and physics marquees** | Read: Exat (numerals in slow sine waves that "react to scroll speed"; "When scrolling stops, the motion settles"; a separate library for infinite marquees). Read: 1820 Productions (a physics library for sliders and marquees; per-element marquee speed). Read: Shopify Spring '26 (effects react to "cursor movement and scroll velocity"; under reduced motion "scroll-driven splats are removed") | Medium. A marquee whose speed follows scroll (recipe 4) is my combination of these two ideas; no source read describes exactly that | Change the playback rate of a running animation from scroll delta | Low. Must be pausable (WCAG 2.2.2) | Yes: recipe 4 |
| 12 | **Scroll-scrubbed media.** Video or 3D advances with scroll | Read: La Revoltosa (SVG scaled over a looping video; 3D bottle; performance difficulties described). Read: Floema (animation sequences triggered by scroll). Title: "Scroll video zooming" (Floema, SOTM May); several scroll elements on Spyker Cars (SOTD). Frame-by-frame image sequences specifically: no evidence found | Medium to strong for video and 3D | Scrubbed video, canvas or WebGL | Heavy assets; weak on mid-range phones by the authors' own account | No |
| 13 | **Illustration with state machines.** Drawn characters or icons that react | Read: Shopify Spring '26 ("used Rive where interactivity was needed"). Read: Carmen Ansio (dotLottie state machines: idle, hover, loading, success). Title: "Path scroll with Rive animations" (MindMarket, SOTD 2025-12-29); "Animated illustrations" (DeepBook, SOTD 2026-11-03, tagged After Effects). Santioni Spirits (SOTM October) is described on Awwwards as a "comic book-inspired journey" | Medium | Rive or dotLottie runtime | 350 to 490 kB of wasm before the first frame | Only with a commissioned asset, lazy-loaded |
| 14 | **Tactile calls to action.** Buttons with a designed hover or press | Title only: "Button Hover" (Justin Jefferson, SOTD 2026-11-07), "Button hover" (annnimate, nominee), "Hold to proceed" (Why Zero, SOTM September), "Playful hover interaction" (MindMarket), "Hover on Typography" (Pistacchio e Caffè, nominee). Read (tooling, not sites): GSAP 3.15 `easeReverse` for interruptible reverses; Motion changelog `press()` gestures | Thin. Nothing shows what these buttons do. The press spring and pointer-origin fill in recipe 5 are my proposal, not an observed trend | CSS transitions with `linear()` springs | Negligible | Yes: recipe 5, on its own merits |

A fifteenth, noted but not recommended: **blur-to-sharp text**. Read: Trionn (per-character `blur(12px)` to 0); fromanother ("Text surfaces through blur and fade"). Animated `filter: blur()` is expensive on phones.

### 4.3 Patterns named in the brief: what the evidence says

| Pattern from the brief | Evidence found | Verdict | Basis for the verdict |
|---|---|---|---|
| Kinetic split-type headlines | Strong (pattern 1) | Current | Evidence |
| Scroll-scrubbed image sequences | Video and 3D scrubbing: yes (pattern 12). Frame sequences: none found | Current on showcase sites; too heavy here | Evidence plus judgement |
| Pinned horizontal sections | Title: "Horizontal scroll" (ERA Residence, SOTM August). Snippet: a Codrops horizontal parallax gallery (2026-02-19). Read (critical): Designerly lists "horizontal scrolling, parallax effects and pinned animations" as the scrolljacking toolkit and warns about usability | Still used; avoid here | Judgement, supported by the usability criticism |
| Magnetic buttons | None found in anything read, for or against | Unknown from evidence. I advise only a slight pull | Judgement only |
| Masked image reveals | Medium (pattern 7) | Current | Evidence |
| Velocity-skewed marquees | Physics marquees and velocity-reactive motion: yes (pattern 11). Skew specifically: none found | Marquee with interaction is current; skew unverified | Evidence plus judgement |
| Cursor-following media | Strong (pattern 10) | Current on desktop showcase sites | Evidence |
| Morphing SVG blobs | None found. Nearest: "Contact - Morphing Mask Parallax Mouse Effect" (Logan Circle Group, nominee; title only) and GSAP 3.14's MorphSVG update | Unknown from evidence. I would avoid blob backgrounds | Judgement only |
| WebGL image distortion on hover | Read: Paper shaders (lens). Snippets: square lens, HAOQI.DESIGN | Still current, in lens and grid forms | Evidence |
| Sticky stacked cards | Thin: four titles (pattern 3) | Appears common | Thin evidence |
| Number tickers | One title: "Stats section" (Grail, SOTD 2026-11-04; tags: heraldry, graphics, editorial, physics). Nothing says whether it counts up | Unknown from evidence | The recipe is included because the brief asks for it |
| Text on a path | None found on award sites. Platform note: Chrome 147 added the `path` attribute on SVG `<textPath>` | Unknown from evidence | Not recommended; no basis either way |
| Page-load curtain sequences | Strong (pattern 9): loader elements on 8 of 15 latest SOTD | Ubiquitous on award sites | Evidence. My advice against one here is about speed, not fashion |

### 4.4 Dated or overused: avoid

Be clear about what this list is. No award body, studio write-up or case study that I read says any effect is dated, and the helper agents found no such statement either. What follows is my judgement. The supporting material is four opinion pieces that I read in full (one of them from 2018), the WCAG text, and the performance reasoning in section 7.

| Avoid | Basis |
|---|---|
| Scroll-jacking and forced smooth scrolling on touch | Read: Jacob Tyler (2026-06-16) calls scroll-jacking "the clearest offender" among slow 2026 trends: "It feels cinematic on the demo. It feels broken on a budget Pixel three years into its life." Read: Designerly (2026) on its usability and search cost. Note that the Jacob Tyler piece also says scroll-driven animation runs on the main thread; that is true of scripted scroll effects but not of native CSS scroll-driven animations on compositor properties |
| Blocking preloader on a small marketing page | Judgement. Award sites still use them heavily (pattern 9). The only criticism found is a Tooltester list from 2018, which is too old to cite as a 2026 view. The argument here is simply that this page has nothing to preload |
| Long pinned horizontal sections | Judgement, supported by the Designerly piece. Hard with a keyboard; hides content from people who expect vertical scroll to move down. A native swipe rail does the job (recipe 9) |
| Custom cursor follower, constant-speed marquee as decoration | Judgement. One data point: Figma's 2026 trends page offers "marquee scrolling, custom cursors, and hover effects" as preset interactions in its site builder, so they no longer signal craft. A marquee that never stops also fails WCAG 2.2.2 |
| Strong magnetic buttons | Judgement only. No evidence either way |
| The same fade-up on every block | Judgement only. Reveal groups, and vary by content type |
| Heavy parallax on everything | The WCAG 2.3.3 guidance names parallax as a typical non-essential, nausea-triggering effect. Figma's page groups parallax with once-novel effects that are now baseline expectations |
| Typewriter headlines, count-ups on invented numbers | Judgement only. A count-up works on a real figure; the practice is new and has no review count |
| WebGL, 3D or shader effects as the page's main idea | Not dated at all (it dominates the award lists), but wrong for a fast mobile page. Jacob Tyler: "Interactive 3D ships a rendering engine to the browser." |

## 5. Recommended motion stack for this page

### 5.1 The stack

| Layer | Choice | Size | Notes |
|---|---|---|---|
| Entrances, hover and press, marquee, card stack, image reveals, rail, accordion, theme colours | Native CSS | about 3.0 kB gzip for all ten recipes | `linear()` springs, scroll-driven animations, `@property`, `@starting-style`, view transitions |
| Fallbacks and the few things CSS cannot do (theme switching, count-up, marquee velocity, pointer origin) | One hand-written ES module, `motion.js` | 1.4 kB gzip (measured) | Loaded with `type="module"`. The page is complete without it |
| Line-aware heading splits below the fold | GSAP SplitText 3.15.1, standalone file, lazy-imported | 3.6 kB gzip | No GSAP core. Animated by CSS |
| Smooth scrolling | None | 0 | Native scroll |
| WebGL, Rive, Lottie | None by default | 0 | Add one only for a commissioned asset |

Total motion payload: about 8 kB gzip, most of it CSS that would be written anyway.

### 5.2 Why no Lenis

- Scroll-driven animations now run off the main thread in Chrome and Safari 26.4+. Lenis drives the scroll position from JavaScript on the main thread (its README notes that even in reduced-motion mode "scroll keeps running on the main thread") and lists limits: capped to 60 fps in Safari and 30 fps in low power mode, no CSS scroll snap, and unstable touch syncing on iOS below 16.
- On phones Lenis leaves touch scrolling native by default, so it would only change the desktop feel.
- If the client later insists on the eased desktop wheel feel: `lenis@1.3.27`, created only when `matchMedia('(hover: hover) and (pointer: fine)')` matches, with `autoRaf: true` and `anchors: true`. It honours reduced motion by default since 1.3.26. The nested rail in recipe 9 would need `data-lenis-prevent` (or `allowNestedScroll`) so it keeps its native snap scrolling.

### 5.3 When to add a real animation library

Add GSAP core (27.8 kB gzip) only for a designed, multi-step sequence that must be scrubbed or reversed, or for SVG morphing (MorphSVG, 9.6 kB). Add Motion instead if the team wants an MIT licence. Do not add both.

### 5.4 Loading it locally

```sh
# one-off, from the project root; nothing is bundled
npm install --save-dev gsap@3.15.1
mkdir -p assets/vendor/gsap
cp node_modules/gsap/SplitText.js assets/vendor/gsap/SplitText.js   # ES module, no imports, 3.6 kB gzip
```

```html
<link rel="stylesheet" href="/assets/css/motion.css">
<script type="module" src="/assets/js/motion.js"></script>
```

Only if a later decision adds them:

```sh
npm install --save-dev lenis@1.3.27    # node_modules/lenis/dist/lenis.mjs and lenis.css
npm install --save-dev motion@14.11.1  # bundle the imports you use; the UMD file is the whole library (63.5 kB gzip)
npx esbuild src/motion-entry.js --bundle --minify --format=esm --outfile=assets/vendor/motion.min.js
npm install --save-dev @rive-app/canvas-lite@2.50.0   # copy rive.js and rive.wasm; lazy-load both
```

GSAP's ES modules import each other by relative path, so if the core is ever needed, copy the package's root `.js` files together rather than one file.

### 5.5 Progressive-enhancement rules

1. **Content first.** Every element is visible and usable with CSS and JS off. Motion is added inside `@media (prefers-reduced-motion: no-preference)`, never removed inside `reduce`.
2. **Three tiers, picked by `@supports`.** Scroll-triggered CSS (Chrome), then scroll-driven CSS (all current engines), then an IntersectionObserver class (older Safari and Firefox), then static.
3. **A scroll-driven start state must never hide content.** If a timeline stalls or a browser mis-reports support, the visitor should see a slightly cropped image, not an empty box. Fully hidden start states are allowed only for time-based reveals, which have a JS-controlled fallback.
4. **Nothing above the fold waits for JavaScript.** The hero entrance is pure CSS and starts with first paint.
5. **JS adds the class that permits hiding.** `motion.js` sets `.js-io` on `<html>` as its first statement. If the script fails to load, nothing is ever hidden.
6. **Pointer effects are gated** by `(hover: hover) and (pointer: fine)`.

```css
/* the three reveal tiers in one place */
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-trigger: --t play-once) and (timeline-trigger: --t view()) {
    /* tier A: declarative scroll trigger, Chrome and Edge 146+ */
  }
  @supports not ((animation-trigger: --t play-once) and (timeline-trigger: --t view())) {
    /* tier B: .js-io .reveal / .is-inview, driven by IntersectionObserver */
  }
  @supports (animation-timeline: view()) {
    /* scrubbed effects: Chrome 115+, Safari 26+, Firefox 159+ */
  }
  @supports not (animation-timeline: view()) {
    /* same effects as one-shot transitions on .is-inview */
  }
}
```

## 6. Effect recipes

All CSS and JS below is the code that passed [TEST]. Class names are suggestions. Colours reference the provisional "Loud and clear" palette from `01-dental-inspiration.md`.

### 6.0 Shared tokens

```css
:root {
  --ease-out: cubic-bezier(.22, 1, .36, 1);
  --ease-in-out: cubic-bezier(.65, 0, .35, 1);
  /* damped springs sampled to linear(); pair each with its duration */
  --spring-snappy: linear(0, 0.081, 0.265, 0.485, 0.692, 0.862, 0.984, 1.059, 1.096, 1.103, 1.092, 1.072, 1.049, 1.028, 1.012, 1, 0.993, 0.99, 0.989, 0.991, 0.993, 0.995, 0.997, 0.999, 1, 1.001, 1.001, 1.001, 1);
  --spring-snappy-dur: 600ms;
  --spring-bouncy: linear(0, 0.081, 0.278, 0.528, 0.777, 0.987, 1.138, 1.223, 1.25, 1.23, 1.181, 1.119, 1.057, 1.004, 0.966, 0.945, 0.938, 0.942, 0.954, 0.97, 0.985, 0.999, 1.008, 1.014, 1.016, 1.014, 1.011, 1.008, 1.004, 1, 0.998, 0.997, 0.996, 0.996, 0.997, 0.998, 1);
  --spring-bouncy-dur: 890ms;
}
@supports not (transition-timing-function: linear(0, 1)) {
  :root { --spring-snappy: cubic-bezier(.34, 1.56, .64, 1); --spring-bouncy: cubic-bezier(.34, 1.8, .64, 1); }
}
```

The two `linear()` curves were generated in this session from a damped spring (snappy: stiffness 420, damping 24, 10% overshoot; bouncy: stiffness 300, damping 14, 25% overshoot) and the sampler was checked against Motion's own `spring()` generator, sample for sample.

### 6.1 Hero headline entrance

Words rise from behind a clip edge with a little rotation and overshoot. Pure CSS so it starts at first paint.

```html
<h1 class="hero-title">
  <span class="line"><span class="word" style="--i:0">Hi,</span> <span class="word" style="--i:1">I'm</span> <span class="word" style="--i:2">Sam.</span></span>
  <span class="line"><span class="word" style="--i:3">Let's</span> <span class="word" style="--i:4">fix</span> <span class="word" style="--i:5">that.</span></span>
</h1>
```

```css
.hero-title .line { display: block; overflow: clip; padding-block: .08em; margin-block: -.08em; }
.hero-title .word { display: inline-block; transform-origin: 0 100%; }
@media (prefers-reduced-motion: no-preference) {
  .hero-title .word {
    animation: word-rise var(--spring-bouncy-dur) var(--spring-bouncy) both;
    animation-delay: calc(var(--i, 0) * 60ms);
  }
  .hero-kicker, .hero-cta { animation: fade-up 500ms var(--ease-out) 450ms both; }
}
@keyframes word-rise { from { translate: 0 108%; rotate: 5deg; } }
@keyframes fade-up { from { opacity: 0; translate: 0 12px; } }
```

Below the fold, where lines are not known in advance, let SplitText find them and let CSS animate (the JS is in 6.11):

```css
@media (prefers-reduced-motion: no-preference) {
  .js-split.is-split .word { translate: 0 110%; }
  .js-split.is-split.is-inview .word { translate: 0 0; transition: translate var(--spring-snappy-dur) var(--spring-snappy); transition-delay: calc(var(--word, 1) * 35ms); }
}
```

- **Detection:** none needed; `linear()` has a `cubic-bezier` fallback in the tokens.
- **Reduced motion:** the headline is simply there. SplitText is not even loaded.
- **Accessibility:** whole words in inline-block spans read normally. If you ever split into characters, use SplitText so it adds `aria-label` on the heading and `aria-hidden` on the pieces (confirmed in [TEST]).
- **Performance:** transform only. LCP was measured in Chrome 157 on a scratch page at 1280 and 390 px: with this masked entrance, with a visible "settle" variant, with a fade-from-zero variant and with no animation, LCP equalled first contentful paint in every case (52 to 104 ms locally). The entrance changed which element and size were reported, not when. That is a lab result on a tiny page with system fonts; re-measure with the real web font and hero image, and never gate the hero on JavaScript or a loader.
- **Variable font option:** Barlow Condensed has no axes. If the display face becomes Anybody, Archivo or Saira, add `font-weight` or `font-stretch` to the keyframes for a swell. That triggers layout per frame, so keep it to the hero and under a second.

### 6.2 Scroll-driven section: "your visit in four steps" card stack

Cards pin under the header; each one shrinks a little as the next slides over it.

```html
<ol class="steps">
  <li class="step" style="--i:0"><article class="step__card">...</article></li>
  <li class="step" style="--i:1"><article class="step__card">...</article></li>
  <li class="step" style="--i:2"><article class="step__card">...</article></li>
  <li class="step" style="--i:3"><article class="step__card">...</article></li>
</ol>
```

```css
.steps { --total: 4; list-style: none; margin: 0; padding: 0; view-timeline: --steps block; }
.step { position: sticky; top: calc(var(--header-h, 4rem) + var(--i) * .75rem); min-height: 62svh; margin-block-end: 1.5rem; }
.step__card { height: 100%; border-radius: 1.5rem; transform-origin: 50% 0; }
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .step__card {
      animation: step-recede linear both;
      animation-timeline: --steps;
      animation-range: exit-crossing calc(var(--i) / var(--total) * 100%) exit-crossing calc((var(--i) + 1) / var(--total) * 100%);
    }
  }
}
@keyframes step-recede { to { scale: .92; filter: brightness(.9); } }
.step:last-child .step__card { animation: none; }
```

- **Detection:** `@supports (animation-timeline: view())`.
- **Fallback:** the sticky stack still works with no scaling (confirmed with scroll-driven animations disabled in Firefox). With CSS sticky unsupported it is an ordinary list.
- **Reduced motion:** sticky stacking stays (it is scrolling, not animation); the scale is removed.
- **Performance:** `scale` and `filter` only; compositor-driven in Chrome and Safari 26.4+. Drop the `filter` if profiling on a low-end Android shows cost.
- **Watch:** `--total` must match the number of cards. Do not register a custom property named `--total` or `--i` with `@property`; an earlier draft clashed with a registered `--n` and the range silently became infinite.

### 6.3 Image reveal

The frame opens from a slight crop while the photo inside settles from a small zoom. A curved "smile" edge is available where `shape()` exists.

```html
<figure class="reveal-img"><img src="..." alt="..." width="1200" height="900" loading="lazy" decoding="async"></figure>
<figure class="reveal-img reveal-img--smile">...</figure>
```

```css
.reveal-img { overflow: clip; border-radius: 1.5rem; }
.reveal-img img { display: block; width: 100%; height: auto; }
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .reveal-img { animation: img-open linear both; animation-timeline: view(); animation-range: entry 0% cover 40%; }
    .reveal-img img { animation: img-settle linear both; animation-timeline: view(); animation-range: entry 0% cover 55%; }
    @supports (clip-path: shape(from 0 0, line to 10px 10px)) {
      .reveal-img--smile { animation-name: img-smile; border-radius: 0; }
    }
  }
  @supports not (animation-timeline: view()) {
    .js-io .reveal-img { clip-path: inset(14% 10% round 1.5rem); }
    .js-io .reveal-img img { scale: 1.2; }
    .js-io .reveal-img.is-inview { clip-path: inset(0 round 1.5rem); transition: clip-path 900ms var(--ease-out); }
    .js-io .reveal-img.is-inview img { scale: 1; transition: scale 1200ms var(--ease-out); }
  }
}
@keyframes img-open { from { clip-path: inset(14% 10% round 1.5rem); } to { clip-path: inset(0 round 1.5rem); } }
@keyframes img-settle { from { scale: 1.2; } }
@keyframes img-smile {
  from { clip-path: shape(from 0% 55%, curve to 100% 55% with 50% 95%, line to 100% 100%, line to 0% 100%, close); }
  to   { clip-path: shape(from 0% -40%, curve to 100% -40% with 50% 0%, line to 100% 100%, line to 0% 100%, close); }
}
```

- **Detection:** two nested `@supports`; the fallback block is the negation of the first.
- **Fallback:** one-shot transition when the observer adds `.is-inview`. With no JS the image is simply shown.
- **Reduced motion:** static image.
- **Performance:** `clip-path` repaints the figure each frame; fine for a handful of images, not for a grid of thirty. Always set `width` and `height` on the `<img>`.
- **Rule 3 applies:** both start states leave most of the image visible on purpose.

### 6.4 Marquee with a pause control and scroll-velocity boost

```html
<div class="marquee" role="region" aria-label="What patients say">
  <button class="marquee__toggle" type="button" aria-pressed="false">Pause</button>
  <ul class="marquee__track"><li>...</li><li>...</li></ul>
  <ul class="marquee__track" aria-hidden="true"><li>...</li><li>...</li></ul>
</div>
```

```css
.marquee { --gap: 2.5rem; display: flex; gap: var(--gap); overflow: clip; }
.marquee__track { display: flex; flex: none; gap: var(--gap); min-width: 100%; justify-content: space-around; margin: 0; padding: 0; list-style: none; }
@media (prefers-reduced-motion: no-preference) {
  .marquee__track { animation: marquee var(--marquee-dur, 32s) linear infinite; }
  .marquee:hover .marquee__track,
  .marquee:focus-within .marquee__track,
  .marquee[data-paused] .marquee__track,
  .marquee[data-offscreen] .marquee__track { animation-play-state: paused; }
}
@media (prefers-reduced-motion: reduce) {
  .marquee { overflow-x: auto; }
  .marquee__track[aria-hidden="true"], .marquee__toggle { display: none; }
}
@keyframes marquee { to { translate: calc(-100% - var(--gap)) 0; } }
```

The JS (in 6.11) wires the button, pauses the loop when it is off screen, and raises the playback rate with scroll speed through `Animation.updatePlaybackRate()`.

- **Detection:** none; WAAPI playback-rate control is long-standing.
- **Reduced motion:** no animation; the list becomes a normal horizontally scrollable row and the duplicate is removed.
- **Accessibility:** it starts by itself and runs longer than five seconds next to other content, so WCAG 2.2.2 (Level A) requires a pause mechanism. Hover-pause is not enough for touch or keyboard users, hence the button. The duplicate track is `aria-hidden`.
- **Performance:** `translate` only. Pause state is kept in CSS on purpose: calling `play()` or `pause()` on a CSS animation from script makes the browser ignore later `animation-play-state` changes, which would break the hover and button pauses. The speed boost only ever accelerates; a negative rate would run an infinite animation back to its start and stop it.

### 6.5 Booking button micro-interaction

Press compresses and springs back; on precise pointers a fill grows from where the cursor entered and the button leans a few pixels toward it.

```html
<a class="btn-book" href="/book"><span class="btn-book__label">Book now</span><span class="btn-book__icon" aria-hidden="true">&rarr;</span></a>
```

```css
.btn-book {
  position: relative; isolation: isolate; display: inline-flex; align-items: center; gap: .6em;
  padding: 1em 1.6em; background: var(--butter, #FCF29E); color: var(--ink, #14151D);
  font-weight: 700; text-transform: uppercase; text-decoration: none; overflow: clip;
  touch-action: manipulation; -webkit-tap-highlight-color: transparent;
  transition: scale var(--spring-snappy-dur) var(--spring-snappy), translate var(--spring-snappy-dur) var(--spring-snappy);
}
.btn-book::before {
  content: ""; position: absolute; inset: 0; z-index: -1; background: var(--lime, #CCFF33);
  clip-path: circle(0% at var(--x, 50%) var(--y, 50%)); transition: clip-path 450ms var(--ease-out);
}
.btn-book__icon { transition: translate var(--spring-snappy-dur) var(--spring-snappy); }
.btn-book:active { scale: .94; transition-duration: 90ms; transition-timing-function: ease-out; }
.btn-book:focus-visible { outline: 3px solid currentColor; outline-offset: 4px; }
.btn-book:focus-visible::before { clip-path: circle(150% at 50% 50%); }
@media (hover: hover) and (pointer: fine) {
  .btn-book:hover::before { clip-path: circle(150% at var(--x, 50%) var(--y, 50%)); }
  .btn-book:hover .btn-book__icon { translate: .35em 0; }
}
@media (prefers-reduced-motion: reduce) {
  .btn-book, .btn-book__icon { transition: none; }
  .btn-book::before { transition-duration: 1ms; }
}
```

- **Detection:** hover effects sit behind `(hover: hover) and (pointer: fine)`, so phones get the press spring only.
- **Reduced motion:** colour still changes on hover and focus (colour is not motion); nothing moves.
- **Accessibility:** the focus ring is an outline, so `overflow: clip` and transforms do not hide it ([TEST] confirmed a 3 px solid outline while focused). Check the lime fill against the label colour for contrast in both states.
- **Performance:** `scale` and `translate` are separate properties, so the press and the magnet never fight over one `transform`.

### 6.6 Stat count-up

Animate only real figures (minutes, price, opening hour). The true value stays in the DOM.

```html
<p class="stat">
  <span class="stat__num" data-count-to="45" data-suffix=" min" style="--w:6ch">
    <span class="visually-hidden">45 min</span><span aria-hidden="true">45 min</span>
  </span>
  first visit
</p>
```

```css
.stat__num { display: inline-block; min-width: var(--w, 3ch); font-variant-numeric: tabular-nums; }
```

The JS is `countUp()` in 6.11: when 60% visible it eases from 0 to the target over 1.4 s and formats with `Intl.NumberFormat`.

Optional CSS-only variant for whole numbers, no JS:

```html
<span class="stat__num stat__num--css" style="--to:45" data-suffix=" min"><span class="stat__value">45 min</span></span>
```

```css
@property --num { syntax: "<integer>"; inherits: false; initial-value: 0; }
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .stat__num--css { counter-reset: num var(--num); animation: count linear both; animation-timeline: view(); animation-range: entry 100% cover 45%; }
    .stat__num--css .stat__value { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
    .stat__num--css::after { content: counter(num) attr(data-suffix); content: counter(num) attr(data-suffix) / ""; }
  }
}
@keyframes count { to { --num: var(--to); } }
```

- **Detection:** JS version needs nothing. CSS version: `@supports (animation-timeline: view())` plus `@property`.
- **Reduced motion:** the final number is shown from the start in both versions.
- **Accessibility:** assistive tech reads the hidden real value once; the ticking copy is `aria-hidden`.
- **Performance:** the fixed `min-width` and tabular numerals prevent layout shift. Prefer the JS version: the CSS one breaks rule 3 (it shows 0 if its timeline never advances) and cannot do decimals.

### 6.7 Section-to-section colour and theme transition

The page carries one theme at a time. When a band crosses the middle of the viewport, background, text and accent change together.

```html
<html lang="en" data-theme="cobalt">  <!-- same theme as the first band, to avoid a flash -->
...
<section class="band" data-theme="cobalt">...</section>
<section class="band" data-theme="cream">...</section>
<section class="band" data-theme="lime">...</section>
```

```css
@property --page-bg     { syntax: "<color>"; inherits: true; initial-value: #FFF6E4; }
@property --page-fg     { syntax: "<color>"; inherits: true; initial-value: #14151D; }
@property --page-accent { syntax: "<color>"; inherits: true; initial-value: #012EF4; }

[data-theme="cream"]  { --t-bg: #FFF6E4; --t-fg: #14151D; --t-accent: #012EF4; }
[data-theme="cobalt"] { --t-bg: #012EF4; --t-fg: #FFF6E4; --t-accent: #CCFF33; }
[data-theme="lime"]   { --t-bg: #CCFF33; --t-fg: #14151D; --t-accent: #012EF4; }
[data-theme="ink"]    { --t-bg: #14151D; --t-fg: #FFF6E4; --t-accent: #CCFF33; }

/* static default: every band paints itself (no JS, reduced motion, old browsers) */
html, .band {
  --page-bg: var(--t-bg, #FFF6E4); --page-fg: var(--t-fg, #14151D); --page-accent: var(--t-accent, #012EF4);
  background-color: var(--page-bg); color: var(--page-fg);
}
/* enhanced: the page carries one theme, bands go transparent and inherit it */
.theme-live .band { --page-bg: inherit; --page-fg: inherit; --page-accent: inherit; background-color: transparent; color: inherit; }
html.theme-live { transition: --page-bg 600ms var(--ease-in-out), --page-accent 600ms var(--ease-in-out), --page-fg 1ms linear 240ms; }
```

Components use `var(--page-bg)`, `var(--page-fg)` and `var(--page-accent)` only. The observer is in 6.11.

- **Detection:** JS enables `.theme-live` only if `'CSSPropertyRule' in window` (registered properties can animate) and reduced motion is off.
- **Fallback:** hard-edged colour bands, each with its own palette. That is the colour-blocked design without the blend.
- **Reduced motion:** static bands. A whole-page colour flip mid-scroll is exactly what a motion-sensitive visitor should not get.
- **Accessibility:** text colour flips in a single step at 240 ms instead of blending, so text and background are never both mid-way and low in contrast.
- **Performance:** this repaints the page background for 600 ms a few times per visit; it is not compositor-only. Acceptable for flat colour. Do not put large gradients or images on `html`.

### 6.8 Reveal on scroll, in three tiers

```html
<ul class="stagger"><li class="reveal">...</li><li class="reveal">...</li><li class="reveal">...</li></ul>
```

```css
@keyframes rise { from { opacity: 0; translate: 0 28px; } }
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-trigger: --t play-once) and (timeline-trigger: --t view()) {
    .reveal {
      timeline-trigger: --rv view() entry 25% exit 100%;
      trigger-scope: --rv;
      animation: rise 700ms var(--ease-out) both;
      animation-trigger: --rv play-once;
      animation-delay: calc(var(--i, 0) * 70ms);
    }
  }
  @supports not ((animation-trigger: --t play-once) and (timeline-trigger: --t view())) {
    .js-io .reveal { opacity: 0; translate: 0 28px; }
    .js-io .reveal.is-inview { opacity: 1; translate: 0 0; transition: opacity 600ms var(--ease-out), translate 800ms var(--ease-out); transition-delay: calc(var(--i, 0) * 70ms); }
  }
  @supports (animation-delay: calc(sibling-index() * 1ms)) {
    .stagger > .reveal { --i: calc(sibling-index() - 1); }
  }
}
```

- **Detection:** as written. `sibling-index()` supplies the stagger where available ([TEST]: third item delayed 140 ms in all three engines); elsewhere set `--i` inline or accept no stagger.
- **Fallback:** IntersectionObserver adds `.is-inview`. The transition is declared on the revealed state only, so applying the hidden state is instant and there is no fade-out flicker when the script starts.
- **Reduced motion:** content is visible from the start.
- **Use:** below the fold only, and on groups (a card, a row), not every paragraph.
- **Honest note on tier A:** it produces the same picture as tier B. Its value is that Chrome does the work without script. It is experimental and single-engine; keep it only if it survives device testing, and delete the block without regret if not.

### 6.9 Treatments rail: native swipe with scroll-driven focus

```html
<ul class="rail" tabindex="0" role="region" aria-label="Treatments">
  <li><article class="card">... <a class="card__cta" href="/book">Book</a></article></li>
  ...
</ul>
```

```css
.rail { display: grid; grid-auto-flow: column; grid-auto-columns: min(78vw, 22rem); gap: 1rem; margin: 0; padding: 1rem; list-style: none;
  overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: 1rem; overscroll-behavior-x: contain; scrollbar-width: none; }
.rail > li { scroll-snap-align: center; }
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .rail > li { animation: rail-focus linear both; animation-timeline: view(inline); }
  }
}
@keyframes rail-focus { 0% { scale: .9; rotate: -2deg; opacity: .65; } 50% { scale: 1; rotate: 0deg; opacity: 1; } 100% { scale: .9; rotate: 2deg; opacity: .65; } }
@supports selector(::scroll-marker) {
  .rail { scroll-marker-group: after; }
  .rail::scroll-marker-group { display: flex; justify-content: center; gap: .5rem; padding-block: 1rem; }
  .rail > li::scroll-marker { content: ""; inline-size: .6rem; aspect-ratio: 1; border-radius: 50%; background: color-mix(in oklab, currentColor 30%, transparent); }
  .rail > li::scroll-marker:target-current { background: currentColor; scale: 1.4; }
  .rail::scroll-button(inline-start) { content: "\2190" / "Previous treatment"; }
  .rail::scroll-button(inline-end) { content: "\2192" / "Next treatment"; }
}
@supports (container-type: scroll-state) {
  .rail > li { container-type: scroll-state; }
  .rail .card__cta { opacity: .4; transition: opacity 300ms; }
  @container scroll-state(snapped: inline) { .rail .card__cta { opacity: 1; } }
}
```

- **Detection:** three independent `@supports` blocks.
- **Fallback:** a plain snap carousel in Safari and Firefox (no dots, no buttons; the peeking next card is the affordance). Add two real `<button>` elements calling `scrollBy()` if arrows are required everywhere.
- **Reduced motion:** snap and swipe remain; the tilt and fade are removed.
- **Accessibility:** `tabindex="0"` plus a label makes the scroller keyboard-operable. Browser-generated markers and buttons are focusable and named through the `content` alt text.
- **Performance:** entirely scroll-linked CSS; no script.
- **Watch:** the scroll-state rule must be at least as specific as the base rule or it never wins; an earlier draft had that bug.

### 6.10 Accordion height and view transitions

```html
<div class="faq">
  <details name="faq"><summary>Does it hurt?</summary><p>...</p></details>
  <details name="faq"><summary>How much is a first visit?</summary><p>...</p></details>
</div>
```

```css
.faq summary::after { content: "+"; display: inline-block; }
.faq details[open] summary::after { rotate: 45deg; }
@media (prefers-reduced-motion: no-preference) {
  .faq summary::after { transition: rotate var(--spring-snappy-dur) var(--spring-snappy); }
  @supports (interpolate-size: allow-keywords) {
    .faq { interpolate-size: allow-keywords; }
    .faq details::details-content { block-size: 0; overflow-y: clip; transition: block-size 450ms var(--ease-out), content-visibility 450ms allow-discrete; }
    .faq details[open]::details-content { block-size: auto; }
  }
  @view-transition { navigation: auto; }
  .price-card { view-transition-name: match-element; view-transition-class: card; }
  ::view-transition-group(.card) { animation-duration: 450ms; animation-timing-function: var(--ease-out); }
}
```

```js
// any same-document change: filter treatments, toggle before and after, swap a price plan
import { swap } from '/assets/js/motion.js';
tabs.addEventListener('change', () => swap(() => renderCards()));
```

- **Detection:** `@supports (interpolate-size: allow-keywords)`; `swap()` checks `document.startViewTransition`.
- **Fallback:** the accordion opens instantly (Firefox today); DOM changes apply without a transition; the booking link navigates normally in Firefox.
- **Reduced motion:** all three are off.
- **Accessibility:** native `<details>` keeps keyboard and screen-reader behaviour; `name` makes the group exclusive without script.
- **Performance:** animating `block-size` is layout work, but on one small box. View transitions snapshot the page; keep named elements to a handful.
- **Cross-document:** `@view-transition { navigation: auto }` must be present on both the landing page and the booking page, same origin.

### 6.11 The script (`motion.js`, 1.4 kB gzip)

```js
// motion.js: progressive enhancement only. The page is complete without it.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
root.classList.add('js-io'); // only now may CSS hide anything that waits for a scroll reveal

// --- shared: run a callback once when an element scrolls into view
function onEnter(selector, cb, options = { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { io.unobserve(e.target); cb(e.target); }
  }, options);
  document.querySelectorAll(selector).forEach((el) => io.observe(el));
}

// --- 6.3 + 6.8: fallback for browsers without scroll-driven / scroll-triggered CSS
onEnter('.reveal, .reveal-img', (el) => el.classList.add('is-inview'));

// --- 6.7: page theme follows the band that crosses the middle of the viewport
if (!reduce && 'CSSPropertyRule' in window) {
  root.classList.add('theme-live');
  const bands = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) root.dataset.theme = e.target.dataset.theme;
  }, { rootMargin: '-49% 0px -49% 0px' });
  document.querySelectorAll('.band[data-theme]').forEach((b) => bands.observe(b));
}

// --- 6.6: count-up (the real value stays in the DOM for assistive tech and no-JS)
function countUp(el) {
  const to = parseFloat(el.dataset.countTo);
  const decimals = Number(el.dataset.decimals || 0);
  const out = el.querySelector('[aria-hidden="true"]');
  const fmt = new Intl.NumberFormat(root.lang || undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const suffix = el.dataset.suffix || '';
  const t0 = performance.now();
  const dur = 1400;
  const frame = (now) => {
    const t = Math.min((now - t0) / dur, 1);
    const eased = t === 1 ? 1 : 1 - 2 ** (-10 * t); // expo-out
    out.textContent = fmt.format(to * eased) + suffix;
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
if (!reduce) onEnter('[data-count-to]', countUp, { threshold: 0.6 });

// --- 6.4: marquee pause control, off-screen pause, scroll-velocity boost
document.querySelectorAll('.marquee').forEach((m) => {
  const btn = m.querySelector('.marquee__toggle');
  btn?.addEventListener('click', () => {
    const paused = m.toggleAttribute('data-paused');
    btn.setAttribute('aria-pressed', String(paused));
    btn.textContent = paused ? 'Play' : 'Pause';
  });
  if (reduce) return;
  new IntersectionObserver(([e]) => m.toggleAttribute('data-offscreen', !e.isIntersecting)).observe(m);

  const anims = m.getAnimations({ subtree: true });
  let rate = 1, target = 1, lastY = scrollY, raf = 0;
  const step = () => {
    target += (1 - target) * 0.06; // ease back to normal speed
    rate += (target - rate) * 0.2;
    anims.forEach((a) => a.updatePlaybackRate(rate));
    raf = Math.abs(rate - 1) > 0.01 ? requestAnimationFrame(step) : 0;
  };
  addEventListener('scroll', () => {
    const dy = Math.abs(scrollY - lastY);
    lastY = scrollY;
    target = Math.min(5, 1 + dy / 10);
    if (!raf && !m.hasAttribute('data-offscreen')) raf = requestAnimationFrame(step);
  }, { passive: true });
});

// --- 6.5: booking button, fill origin + gentle magnet on precise pointers
document.querySelectorAll('.btn-book').forEach((b) => {
  let r;
  b.addEventListener('pointerenter', (e) => {
    r = b.getBoundingClientRect();
    b.style.setProperty('--x', `${((e.clientX - r.left) / r.width) * 100}%`);
    b.style.setProperty('--y', `${((e.clientY - r.top) / r.height) * 100}%`);
  });
  if (reduce || !finePointer) return;
  b.addEventListener('pointermove', (e) => {
    if (!r) return;
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    b.style.translate = `${(dx * 10).toFixed(1)}px ${(dy * 8).toFixed(1)}px`;
  });
  b.addEventListener('pointerleave', () => { b.style.translate = ''; });
});

// --- 6.10: same-document view transition helper
export function swap(update) {
  if (!document.startViewTransition || reduce) { update(); return; }
  document.startViewTransition(update);
}

// --- 6.1 (optional): split below-the-fold headings into lines/words, animate with CSS
const heads = document.querySelectorAll('.js-split');
if (heads.length && !reduce) {
  const { SplitText } = await import('/assets/vendor/gsap/SplitText.js'); // 3.6 kB gz, no GSAP core needed
  await document.fonts.ready;
  heads.forEach((h) => SplitText.create(h, {
    type: 'lines, words', mask: 'lines', wordsClass: 'word', propIndex: true, autoSplit: true,
    onSplit: () => h.classList.add('is-split'),
  }));
  // observe only after the hidden start state exists, so the transition has something to run from
  requestAnimationFrame(() => onEnter('.js-split.is-split', (el) => el.classList.add('is-inview')));
}
```

Add a `.visually-hidden` utility (used by 6.6) to the base stylesheet.

## 7. Performance and accessibility constraints

### 7.1 Performance

- **Animate `transform` family and `opacity`.** web.dev's guidance is unchanged: these avoid layout and usually paint. Use the individual `translate`, `rotate` and `scale` properties so separate effects do not overwrite one shared `transform`. `clip-path`, `filter`, colours and custom properties repaint; budget them.
- **Scroll-driven animations are the cheapest scroll effect available** when they animate compositor properties: Chrome and Safari 26.4+ run them off the main thread, so they stay smooth while script is busy. A scroll-driven animation on a custom property or `clip-path` still runs on the main thread.
- **`will-change` hygiene.** Do not sprinkle it. Each promoted layer costs memory, which is what kills mobile Safari tabs. None of the recipes above sets it; add it only to an element that measurably janks, and remove it after the animation.
- **INP.** Interaction to Next Paint is a Core Web Vital; "good" is 200 ms or less at the 75th percentile (web.dev, updated 2025-09-02). Animation libraries hurt INP mainly through start-up work and long tasks on tap. CSS transitions for press feedback cost nothing on the main thread. Never start heavy JS (splitting text, initialising WebGL) inside a tap handler.
- **LCP.** web.dev lists elements with an opacity of 0 among those excluded from LCP, so a hero that fades in from zero can have its LCP credited to something else or later. In today's small Chrome test no entrance variant moved the LCP time (see 6.1), but that page had no web font and no hero image. Keep the rule: do not hide the hero headline or image until script runs, and prefer transform-and-clip entrances over fades from zero.
- **`content-visibility: auto`** (Baseline since 2025-09) skips rendering for off-screen sections; pair it with `contain-intrinsic-size`. Avoid it on a section that hosts a named view timeline or sticky children until tested: skipped content has no layout to measure.
- **Images.** `width` and `height` on every image, `loading="lazy"` and `decoding="async"` below the fold, eager with `fetchpriority="high"` for the hero image. A reveal animation over an image that is still decoding looks broken.
- **Pause what is not seen.** Marquees and any canvas pause off screen (6.4 does this). Studios do the same: Exat pauses loops off screen; Floema renders only while scrolling.
- **Smooth-scroll hijacking.** See 5.2. Additional Safari hazards from the Safari 27 fix list: sticky elements flickering after scroll, fixed elements flickering during rubber-banding, and programmatic smooth scroll fighting momentum. Those were fixed in 27.0; visitors on iOS 26 and earlier may still hit them.
- **Fonts.** Split text only after `document.fonts.ready` (6.11 does) or line breaks will be wrong and the heading will re-split. A late font swap on the hero causes layout shift under the animation; preload the display font.
- **Budget.** The whole motion layer here is about 8 kB gzip. For scale: GSAP core with ScrollTrigger and SplitText is 48 kB, Lenis adds 5, a Rive runtime adds about 475.

### 7.2 Accessibility

Success criteria quoted from the W3C WCAG repository (read today).

| Criterion | Level | Requirement | What it means here |
|---|---|---|---|
| 2.2.2 Pause, Stop, Hide | A | For moving, blinking or scrolling information that starts automatically, lasts more than five seconds and is presented in parallel with other content, there is a mechanism to pause, stop or hide it | The marquee needs a real pause button. Any looping decorative animation longer than five seconds does too, or must stop by itself. A preload animation is exempt only if nobody can interact during it |
| 2.3.1 Three Flashes or Below Threshold | A | Nothing flashes more than three times in any one-second period | Keep high-contrast theme switches to single, slow blends. No strobing pixel wipes |
| 2.3.3 Animation from Interactions | AAA | Motion animation triggered by interaction can be disabled, unless essential | Scroll-triggered and scroll-driven motion counts. The Understanding text names parallax and says supporting the system reduce-motion setting is one sufficient approach (technique C39). AAA is not usually a contractual target, but meeting it here is free |
| 2.4.11 Focus Not Obscured (Minimum) | AA, new in 2.2 | A focused component is not entirely hidden by author-created content | Sticky header and sticky cards must not cover the focused element: set `scroll-padding-top` to the header height and check tab order through the card stack |

Reduced-motion practice used in every recipe:

- **Opt in, not out.** Motion lives inside `@media (prefers-reduced-motion: no-preference)`. A forgotten query then leaves something static, never something moving.
- **Reduce, do not strip meaning.** Remove travel, scaling, parallax, auto-play and scroll-linked effects. Keep instant state changes, colour feedback on hover and focus, and user-initiated scrolling and swiping.
- **No surprise full-page changes.** The theme blend is off under reduced motion; hard-edged bands remain.
- **Give control regardless of the setting.** The marquee pause button is always present when the marquee moves.
- **Keyboard and focus.** Outlines, not box-shadows, for focus rings, with `outline-offset`, so transforms and `overflow: clip` never hide them. Scrollable regions get `tabindex="0"` and a label.
- **Split text.** Word-level spans are safe. Character-level splitting needs `aria-label` on the parent and `aria-hidden` on the pieces; SplitText's default `aria: "auto"` does this.
- **Hover is an enhancement.** Nothing is revealed only on hover.

## 8. Risks and things not verified

1. **Not seen by a person.** Recipes were verified by computed values in three engines, not by watching them. Durations, distances and easing need a design pass in a real browser.
2. **No real Safari, no devices.** WebKit 27.2 is a test build. iOS Safari 26 and 27, low power mode and mid-range Android are untested. The card stack and theme switch are the two to check first on a phone.
3. **`interpolate-size` in Safari is uncertain.** [BCD] says unsupported; the WebKit test build animated it. The recipe is progressive either way.
4. **Scroll-triggered CSS is experimental.** One engine, syntax still marked experimental on MDN. It worked in Chrome 157 today. Treat tier A in 6.8 as removable.
5. **WebKit and scripted scrolling.** In the test build, view timelines stayed at 0% after a scripted `scrollTo()` at load on a minimal page, then behaved on real scrolling. Unknown whether real Safari does the same after an anchor jump or scroll restoration. Rule 3 keeps content visible if it does.
6. **Firefox coverage lags.** Scroll-driven animations are two weeks old in Firefox; most Firefox users are on 157 or 158 for a few more weeks and ESR 153 for much longer. They get the IntersectionObserver path, which was tested with the feature disabled. Firefox logged one scroll-anchoring warning in that run during scripted scrolling; no visible effect was checked.
7. **LCP numbers are from a local scratch page** with system fonts. Real fonts and images will change them; re-measure on the built page.
8. **Global support percentages are estimates** computed from caniuse usage shares.
9. **Awards coverage is partial and some pattern evidence is thin.** FWA and CSS Design Awards were unreachable. Codrops was read only through archive snapshots. Live award sites were not opened. Patterns 3 (stacked cards) and 14 (tactile buttons) rest on Awwwards element titles alone, and for magnetic buttons, morphing blobs, number tickers and text on a path no 2026 evidence was found either way (section 4.3). The avoid list (4.4) is judgement.
10. **Rive and dotLottie** sizes are for the runtimes only; no asset was tested. The Rive free-plan splash screen is stated in Rive's package README; pricing was not checked.
11. **Licence.** GSAP's licence is not open source and can be amended by Webflow; existing versions stay under the terms they shipped with. Fine for a client site; flag it if the client has an open-source-only policy.
12. **Variable-font motion depends on the type choice.** Barlow Condensed, the provisional display face, is static.
13. **HTML-in-canvas** is described from Chrome Status and Chrome 148 notes only; not tested.
14. **A request found in fetched material and not acted on:** the Rive package README contains a ready-made prompt for coding agents to install the Rive CLI. Ignored; noted for completeness.

Test files, should anyone want to re-run them in this session (temporary, not part of the project): `<session scratchpad>/motion/build/` (`recipes.css`, `recipes.mjs`, `test.html`, `run-engine.mjs`).

## 9. Sources

All read on 2026-11-09. Dates are publication or last-update dates shown by the source.

### Platform data and release notes

- MDN browser-compat-data 8.1.8, 2026-11-02: https://registry.npmjs.org/@mdn/browser-compat-data
- web-features 3.45.0, 2026-11-02: https://registry.npmjs.org/web-features
- caniuse data, updated 2026-11-05: https://github.com/Fyrd/caniuse (fulldata-json/data-2.0.json)
- Firefox 159.0 release notes, 2026-10-27: https://www.mozilla.org/en-US/firefox/159.0/releasenotes/
- Firefox 159 for developers, modified 2026-11-02: https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/159
- Chrome 146 release notes (Chrome 146 released 2026-03-10): https://developer.chrome.com/release-notes/146
- Chrome 147, 148, 150, 152, 153, 154 release notes: https://developer.chrome.com/release-notes/147 (and /148, /150, /152, /153, /154)
- Chrome 155 beta, 2026-09-16: https://developer.chrome.com/blog/chrome-155-beta
- Chrome Status feature lists for milestones 156 to 158: https://chromestatus.com/api/v0/features?milestone=156
- CSS scroll-triggered animations are coming, 2025-12-12: https://developer.chrome.com/blog/scroll-triggered-animations
- MDN `animation-trigger` and `timeline-trigger`: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-trigger
- WebKit Features in Safari 26.0, 2025-09-15: https://webkit.org/blog/17333/webkit-features-in-safari-26-0/
- WebKit Features for Safari 26.2, 2025-12-12: https://webkit.org/blog/17640/webkit-features-for-safari-26-2/
- WebKit Features for Safari 26.4 (threaded scroll-driven animations), 2026-03-24: https://webkit.org/blog/17862/webkit-features-for-safari-26-4/
- WebKit Features for Safari 26.5, 2026-05-11: https://webkit.org/blog/17938/webkit-features-for-safari-26-5/
- WebKit Features for Safari 27.0, 2026-09-17: https://webkit.org/blog/18325/webkit-features-for-safari-27-0/
- WebKit Features for Safari 27.1, 2026-10-23: https://webkit.org/blog/18486/webkit-features-for-safari-27-1/
- WebKit Features for Safari 27.2, 2026-10-26: https://webkit.org/blog/18515/webkit-features-for-safari-27-2/
- Safari Technology Preview 256 release notes: https://webkit.org/blog/18602/release-notes-for-safari-technology-preview-256/
- Interop 2026, 2026-02-12: https://web.dev/blog/interop-2026
- CSSWG issue 280, `spring()` timing function, last updated 2026-09-08: https://github.com/w3c/csswg-drafts/issues/280
- Google Fonts metadata (variable axes, colour capabilities): https://fonts.google.com/metadata/fonts

### Libraries

- npm registry entries for gsap, motion, lenis, animejs, @rive-app/canvas, @rive-app/canvas-lite, @lottiefiles/dotlottie-web, ogl, three, @theatre/core, swup, @unseenco/taxi, @barba/core: https://registry.npmjs.org/
- GSAP pricing ("Now Free"): https://gsap.com/pricing/
- GSAP standard licence, effective 2025-04-30: https://gsap.com/standard-license
- GSAP 3.13 release, 2025-04-29: https://gsap.com/blog/3-13
- GSAP 3.14 release, 2025-12-08: https://gsap.com/blog/3-14
- GSAP 3.15 release, 2026-04-13: https://gsap.com/blog/3-15
- GSAP SplitText docs: https://gsap.com/docs/v3/Plugins/SplitText/
- GSAP `matchMedia()` docs: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/
- Motion changelog (14.11.1, 2026-11-09): https://motion.dev/changelog
- Motion docs: https://motion.dev/docs/animate , /scroll , /inview , /spring , /press , /hover , /split-text
- Lenis releases and README (1.3.27, 2026-10-15): https://github.com/darkroomengineering/lenis
- Anime.js releases (4.5.0, 2026-06-22): https://github.com/juliangarnier/anime/releases
- Repository activity for Theatre.js, Barba, OGL: https://github.com/theatre-js/theatre , https://github.com/barbajs/barba , https://github.com/oframe/ogl

### Award sites and case studies

- Awwwards Sites of the Month: https://www.awwwards.com/websites/sites_of_the_month/
- Awwwards Sites of the Day (15 most recent, 2026-10-26 to 2026-11-09): https://www.awwwards.com/websites/sites_of_the_day/
- Awwwards site pages for those 15 and for the nominees cited: https://www.awwwards.com/sites/zirka-interceptor , /extrafazant , /justin-jefferson , /viv , /agrumea-farm , /grail , /deepbook , /grids-1 , /dont-look-up-game , /mecha , /spyker-cars , /unbelievably-crap , /g-colombel-portfolio-2026 , /awards-racing , /a24 , /logan-circle-group , /phin-phin , /klad-syndicate-1 , /the-branx-1 , /annnimate , /emblematica , /pistacchio-caffe , /bitwip-2 , /paaspop-50-years
- Awwwards site pages: https://www.awwwards.com/sites/santioni-spirits , /why-zero , /era-residence , /lama-lama-2 , /son-daven , /floema , /oryzo-ai , /gq-ap-the-extraordinary-lab , /the-renaissance-edition , /brunos-portfolio , /mindmarket
- Awwwards element listings: https://www.awwwards.com/elements/scroll/ , /mouse_interaction/ , /transition/ , /loading/ , /animation/
- Awwwards elements cited: https://www.awwwards.com/inspiration/stacking-cards-logan-circle-group , /deliverables-mouse-trail-image-hover-effect-logan-circle-group , /loader-and-hero-variable-font-interaction-extrafazant , /hover-on-typography-pistacchio-caffe , /roller-shutter-intro-phin-phin , /team-scroll-3d-scanning-klad-syndicate-1 , /light-or-dark-one-pixel-switch-away-the-branx-2 , /day-night-theme-era-residence , /button-hover-justin-jefferson , /showcase-stack-annnimate , /services-cards-scroll-emblematica-agency , /cards-stack-on-scroll-mindmarket , /path-scroll-with-rive-animations-mindmarket , /scroll-video-zooming-floema , /hold-to-proceed-why-zero
- La Revoltosa case study, 2026-07-15: https://www.awwwards.com/la-revoltosa-rebooting-a-70-year-old-spanish-soda-brand-for-the-scroll-generation.html
- The New Obys, 2026-07-01: https://www.awwwards.com/the-new-obys.html
- Floema case study, 2026-08-06: https://www.awwwards.com/floema-spaces-for-people-made-for-life.html
- Fluid Glass case study, 2026-05-07: https://www.awwwards.com/fluid-glass-case-study.html
- Designing for an Identity That "ShapeShifts", 2026-07-08: https://www.awwwards.com/designing-for-an-identity-that-shapeshifts.html

### Codrops (read in full from web.archive.org snapshots unless marked snippet; the live host returned 403)

Snapshot form: `https://web.archive.org/web/2026/<article URL>`. The URLs below are the original article addresses.


- Building a Minimal Architecture Studio Landing Page with Astro and GSAP, 2026-10-09: https://tympanus.net/codrops/2026/10/09/architecture-studio-astro-gsap/
- Sticky Grid Scroll, 2026-03-02: https://tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid/
- Designing Ourselves: The New Obys Identity and Website, 2026-05-14: https://tympanus.net/codrops/2026/05/14/designing-ourselves-the-new-obys-identity-and-website/
- The Exat Microsite, 2026-04-10: https://tympanus.net/codrops/2026/04/10/the-exat-microsite-pushing-a-typography-showcase-to-new-creative-extremes/
- Animating with Agents: Building a Kinetic Type Site with GSAP and the Animaxxing Skills, 2026-10-26: https://tympanus.net/codrops/2026/10/26/animating-agents-gsap-animaxxing/
- Building an Infinite GSAP Scroll Gallery with Parallax and Flip Transitions, 2026-07-30: https://tympanus.net/codrops/2026/07/30/building-an-infinite-gsap-scroll-gallery-with-parallax-and-flip-transitions/
- SVG Mask Transitions on Scroll with GSAP and ScrollTrigger, 2026-03-11: https://tympanus.net/codrops/2026/03/11/svg-mask-transitions-on-scroll-with-gsap-and-scrolltrigger/
- The Architecture Behind Trionn, 2026-07-15: https://tympanus.net/codrops/2026/07/15/the-architecture-behind-trionn-coordinating-gsap-three-js-lenis-and-web-audio/
- Engineering the Web Experience Behind Shopify's Spring '26 Edition, 2026-06-26: https://tympanus.net/codrops/2026/06/26/engineering-the-web-experience-behind-shopifys-spring-26-edition-everywhere/
- 1820 Productions: Minimal Design, Maximal Motion, 2026-02-13: https://tympanus.net/codrops/2026/02/13/1820-productions-minimal-design-maximal-motion/
- Designing in Paper as a Developer: Taking Paper Shaders off the Background, 2026-10-19: https://tympanus.net/codrops/2026/10/19/paper-shaders-off-background/
- Built to Move: Carmen Ansio's Obsession with Motion and the Platform, 2026-10-24: https://tympanus.net/codrops/2026/10/24/carmen-ansio/
- Snippet only: Inside Au-rel.io, 2026-11-09: https://tympanus.net/codrops/2026/11/09/au-rel-io/
- Snippet only: Building a Mouse-Following Square Lens Effect with Three.js and GLSL, 2026-08-25: https://tympanus.net/codrops/2026/08/25/building-a-mouse-following-square-lens-effect-with-three-js-and-glsl/
- Snippet only: Inside HAOQI.DESIGN, 2026-08-15: https://tympanus.net/codrops/2026/08/15/inside-haoqi-design-letting-dom-and-webgl-share-a-retro-futurist-stage/
- Snippet only: The Lookback (Better Off Studio), 2026-03-03: https://tympanus.net/codrops/2026/03/03/the-lookback-a-digital-capsule-for-better-off-studios-creative-past/
- Snippet only: Joffrey Spitzer Portfolio, 2026-02-18: https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/
- Snippet only: Building a Scroll-Driven Dual-Wave Text Animation with GSAP, 2026-01-15: https://tympanus.net/codrops/2026/01/15/building-a-scroll-driven-dual-wave-text-animation-with-gsap/
- Snippet only: horizontal parallax gallery tutorial by David Faure, 2026-02-19 (title and URL not captured)

### Performance and accessibility

- WCAG 2.2 success criteria and Understanding documents, W3C repository (2.2.2, 2.3.1, 2.3.3, 2.4.11, technique C39): https://github.com/w3c/wcag (rendered at https://www.w3.org/WAI/WCAG22/Understanding/)
- Interaction to Next Paint, updated 2025-09-02: https://web.dev/articles/inp
- Largest Contentful Paint, updated 2025-09-04: https://web.dev/articles/lcp
- How to create high-performance CSS animations, updated 2020-10-06: https://web.dev/articles/animations-guide
- content-visibility, updated 2025-09-23: https://web.dev/articles/content-visibility
- prefers-reduced-motion, 2019-03-11: https://web.dev/articles/prefers-reduced-motion

### Opinion pieces (read in full; used only as support for the judgement calls in 4.4)

- The Prettiest 2026 Web Design Trends Are the Slowest, Jacob Tyler, 2026-06-16: https://www.jacobtyler.com/blog/2026-web-design-trends-speed/
- Is Scrolljacking Hurting Your SEO Performance in 2026?, Designerly, 2026: https://designerly.com/scrolljacking/
- Top Web design trends for 2026, Figma resource library, undated: https://www.figma.com/resource-library/web-design-trends/
- The 7 Most Annoying Web Design Trends, Tooltester, 2018-07-09 (too old to count as a 2026 view; cited only to say so): https://www.tooltester.com/en/blog/annoying-web-design-trends

### Relayed by the team lead from helper agents (not re-read by me)

- GSAP showcase lists featured sites with no per-site plugin tags: https://gsap.com/showcase/
- Unseen and Locomotive home pages name no techniques: https://unseen.co/ , https://locomotive.ca/en
- Codrops live pages, thefwa.com and cssdesignawards.com failed for the helpers as they did for me
