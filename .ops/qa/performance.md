# Performance: lead's measurements

Measured by the team lead on 2026-11-09, 23:46 to 23:58 CST, after the hero lock-up and the art-directed hero picture. The Performance Benchmarker assigned to this stopped before writing a report (its model ran out of usage credits); its raw traces are in `shots/performance/` and are from earlier builds. This note replaces that report and is narrower: load metrics and bytes only. Traces are in `shots/performance-lead/`.

## Method

- Chrome 157 in the shared automation browser (which has three extensions installed; the trace attributes about 200 ms of main-thread time at 4x CPU to them, which a visitor's browser may or may not have).
- Phone: `emulate` 390x844 at DPR 2, mobile and touch, DevTools "Slow 4G", 4x CPU slowdown, cold load (cache ignored).
- Desktop: no emulation; the real window was 1595x1059 at DPR 2, no throttling, cold load.
- Two servers. The preview server (`python3 -m http.server`, port 4173) sends nothing compressed. Real hosts compress text, so the phone runs that matter were taken through a small gzip-compressing static server on port 4176 (`gzip_server.py` in the lead's scratchpad; stopped afterwards). Both are shown.

## Results

| Run | LCP | LCP element | CLS |
|---|---|---|---|
| Phone, uncompressed, full 4:5 hero (before the art-directed picture) | 2,352 ms | hero `img` (`paloma-hero-800.avif`, 35 kB) | 0.00 |
| Phone, uncompressed, band crop | 2,295 ms | hero `img` (`paloma-hero-band-*.avif`) | 0.00 |
| Phone, gzip, band crop, run 1 | 1,639 ms | hero `img` | 0.00 |
| Phone, gzip, band crop, run 2 | 1,647 ms | hero `img` | 0.00 |
| Desktop, gzip, unthrottled | 91 ms | hero `img` | 0.02 (see below) |

On the uncompressed server the phone LCP is set by `page.css` (61.7 kB raw) arriving at about 2.1 s; compressed it is 14.6 kB and LCP drops by about 650 ms. LCP breakdown with gzip: TTFB 565 ms (the Slow 4G profile's latency), load delay about 43 ms, load duration about 950 ms, render delay about 90 ms.

**The headline is hidden for about 170 ms on a slow phone.** Found later by the route curator in the frames of the gzip phone trace: the first painted frames (1,630 and 1,650 ms) show the hero photograph but no headline, "$195" or GENERAL DENTIST; they appear at about 1,800 ms. That is `font-display: block` on Anybody, a deliberate trade against a visible font swap (the metric-matched stand-ins keep the layout still either way). If the blank interval ever matters more than the swap, change Anybody to `font-display: swap`; the stand-ins already limit the movement to about 2px.

**Desktop CLS 0.016**, in one of two loads (the other recorded no shift at all). The shifted elements were the ticker view, the time chips (`#slots`) and the header status text: all filled or switched by `page.js`. On a fast machine the first paint can come before the module script runs; on the throttled phone it never did. Below the 0.1 "good" threshold; recorded, not fixed. If it ever matters: add the `js` class from the inline head script instead of from `page.js`, and reserve the status text's width.

## Bytes (from the files)

| File | Raw | gzip -9 | brotli -q 11 |
|---|---|---|---|
| `index.html` | 52,349 | 11,526 | 9,515 |
| `assets/css/page.css` | 61,694 | 14,602 | 12,447 |
| `assets/css/bite.css` | 3,468 | 1,165 | 1,000 |
| `assets/js/page.js` | 21,029 | 7,800 | 6,758 |
| `anybody-wdth-wght.woff2` | 56,860 | | |
| `public-sans-wght.woff2` | 26,636 | | |
| Hero, phone at DPR 2 (`paloma-hero-band-800.avif`) | 19,959 | | |
| Hero, desktop (`paloma-hero-1122.avif`) | 70,459 | | |

Changed in this pass: below 1024 the page now serves the band crop that `tools/build-images.mjs` already produced (source rows 41 to 757), with one preload per file set (`media="(min-width: 1024px)"` and `media="(max-width: 1023.98px)"`). Pixel comparison of the first screen before and after: 374 of 1.3 million pixels differ by more than 3% at 390 (RMSE 0.6%, the clock text and resampling) and 115 of 3.1 million at 768. Phones at DPR 2 download 20 kB instead of 35 kB for the hero; at DPR 3, 40 kB instead of 70 kB.

## Not measured

Runtime cost of the animations (the developer's `engines.md` has frame timings from an earlier build), INP, memory over time, idle main-thread cost, Firefox and Safari, a real phone or network, and repeat views (the preview server sends no cache headers).
