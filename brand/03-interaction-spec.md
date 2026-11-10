# 03 — Interaction spec: what moves, when, and why

Status: 2026-11-09. Built on `brand/00-creative-direction.md`, `research/03-motion-techniques.md` (§1, 4–7), `research/01b-visual-capture.md` (Part 4; Part 5 #6, 8, 12, 13) and `research/02-audience-and-conversion.md` (§4e).

Two limits. Nothing here has been prototyped or watched in a browser, so every duration and distance is a starting value to tune by eye. `brand/01-brand-core.md` did not exist when this was written, so all copy below is a slot for the brand writer, and each bite joke counts against whatever pun limit that file sets.

## 0. The idea in five lines

1. **Shape, not place.** Things here change shape: a corner goes missing, a word gets wider. Nothing slides in, fades in, floats or parallaxes. Only the ticker and crumbs travel.
2. **A bite is a cut.** The notch is never tweened: one frame whole, the next frame bitten. The spring lives in what is left, a squash before and a recoil after. A hard cut inside a soft spring is the silent crunch.
3. **A bite means yes.** Only booking actions and the first-visit story get bitten, and the visitor always causes it.
4. **The chair and the bill stand still.** The comfort section and every price are motionless. That is where this audience is afraid, so that is where the page shows it can stop.
5. **Five mechanisms, no more:** bite, chew, open wide, ticker, accordion. Adding a sixth means removing one.

## 1. The bite as an interaction

**Notch**: the designer's scalloped corner. **Bite**: the event that adds one. **Crumbs**: two or three round dots. **Restock**: a bitten thing replaced by a whole one.

| Where | Trigger | What the visitor sees | Timing, easing | Reverses? |
|---|---|---|---|---|
| **Primary button** (every "Book online") | Squash on press (`:active`). Bite on `click`, so mouse, touch, Enter and Space behave alike | Press: the pill squashes 4% toward its bottom-left corner and holds. Release: in one frame the top-right corner is gone, 2–3 crumbs leave the notch, and the pill springs back with a 1.2° tilt away from the bite and one small overshoot. It rests bitten, label untouched, still pressable. After 2 s, or on leaving the viewport, it restocks | Squash 80 ms (Down). Notch 0 ms. Recoil 480 ms nominal (Up spring; reads as about 220 ms). Crumbs 240 ms. Restock: one frame plus a 160 ms pop from scale 1.03; no pop off screen | No. Restock is a replacement, never a rewind |
| **Time chip** (hero) | Choosing it: tap, click, arrow keys, Space | 3% squash while pressed; on choose, notch, two crumbs, recoil; fill swaps to the chosen colour. The previous chip restocks in the same frame, no pop | As button; recoil 420 ms | Choosing another chip, or this one again, restocks it |
| **First-visit portions**: the shape eaten as you scroll | Each step's row reaching 60% visible, once per page load | Each step carries a flat disc, its "portion". Step 1 takes one bite, step 2 two, step 3 three and is nearly gone. Each bite: 2% squash, cut, 2° recoil, crumbs | Bites 120 ms apart; group done within 700 ms | No, no replay. Rows already above the viewport are drawn bitten |
| **Photographs** | None | The notch is a crop, present at first paint. It never animates or responds | n/a | n/a |
| **Status dot** (header, hours) | The real opening or closing time arriving while the page is open | At dot size the notch is one round cut, so a closed dot is a crescent. Closing: cut and recoil. Opening: restock pop | 280 ms, no crumbs | With the clock only |

Two calls in that table. **Photos are never bitten in motion**: the brief says photography stays still, a bite out of a person's picture reads as aggression, and the hero portrait is the likely LCP element. **The scroll bite is stepped and one-shot, not scrubbed**: a bite has a tempo and a scrubbed bite has no recoil; it needs no sticky stage for keyboard focus to hide under; and with motion off the three portions still tell the story as a strip of one, two, three bites.

**Keeping it friendly (binding).** A nervous patient must read biscuit, apple, toast.

1. Only flat-colour things are bitten: pills, chips, discs, dots. Never a face, a moving photo, a label, a price or body text.
2. The biter is never shown: no teeth, mouth, jaw or tooth marks. Nothing enters the frame.
3. Round scallops only. Nothing cracks, splinters, shatters, chips or falls.
4. Crumbs are round, the colour of the thing bitten, at most three, travel at most 14 px. Never white or cream (a tooth fragment), never red or pink.
5. Squash at most 4%, tilt at most 2°. No screen shake, flash or inversion; nothing else on screen reacts. No sound, no vibration.
6. Bites answer the visitor's own action or the real clock. Never a timer.

**How many is too many.** One bite event at a time (a sequence on one object counts as one). At most three notches on an object; buttons and chips take one, and a second click replays the recoil without removing more. In one viewport: one static photo notch, plus either the portion set or one bitten control. Scroll-caused bites happen in one section only. Test: if you can count more than three separate bitten things without scrolling, it has become wallpaper.

## 2. Type that plays

Two verbs, driven by `font-stretch` and `font-weight` so the registered axes interpolate natively.

- **Chew**: a word squeezes narrow and springs back. Rest to tight in 90 ms (Down); tight to rest in 450 ms (Up, overshoot at most 4 width units). Weight follows by up to 60 units.
- **Open wide**: a word goes from rest to wide while you are on it. In 360 ms (Up), out 200 ms (Down).

Tokens: `--wdth-tight` is about 78% of the rest advance width, `--wdth-wide` about 125–130%. The designer approves the wide extreme; it need not be the axis maximum.

| Moment | Behaviour | Sizer held at |
|---|---|---|
| **Hero headline entrance** | The headline is set and readable at first paint. Then each word chews once in reading order, 45 ms apart, from 120 ms after first paint, done by about 950 ms (over 8 words: chew by line). Pure CSS, never replays. Nothing else in the hero animates on load: price, chips and buttons are simply there | Rest |
| **The scroll-linked moment: services, touch only** | The row nearest mid-screen opens wide. Each service word runs a `view()` timeline: rest until the row is within about 18% of viewport height from centre, fully wide at centre, rest again as it leaves. The price list ripples under the thumb | Wide |
| **Hover and press on service words** | Fine pointers: hover or `:focus-visible` on a row swaps its ground (80 ms) and opens its word wide; the scroll link is media-queried off. Everywhere: pressing a row chews its word. Rows never bite | Wide |
| **Price numerals** | Nothing, ever. Tabular figures, present at first paint, `transition: none`. No count, roll, pulse or hover colour. If an option changes a price, the new figure appears in one frame | n/a |
| **One-shots lower down** | Dentist's first name chews once. The "0" in "no reviews yet" and the closing line each open wide once and stay wide | Wide |

Why prices hold still: this audience fears a surprise bill, and a number that moves is a number that might change. Recipe 6 (count-up) is therefore unused. This page counts in bites.

**Every row above shifts layout unless contained.** One pattern: each animated word is an inline grid with two layers in one cell, the real text and a hidden copy of itself fixed at the widest state it will reach (a pseudo-element fed by `data-text`, `visibility: hidden`). The cell never changes size, so neighbours never move. Also: animated words are `white-space: nowrap` with authored line breaks; the left edge is anchored; "open wide" is used only where a word is alone on its line or last on it, so the reserved width is not a visible gap.

**If only one axis exists.** Width only: as written, minus the weight follow. Weight only: chew is a dip of about 180 units; "open wide" becomes rest 600–700 up to maximum, which is weaker and loses the joke, so prefer a face with a width axis (Anybody, Archivo and Saira have both, `03` §4.2). No axes: chew is a transient `scale: .94 1` for 90 ms, and rows keep the colour swap alone.

## 3. Time and liveness

**Open-now state**, computed in the browser from the hours table that also feeds the hours section, always in the practice's time zone.

| State | Header text slot (phone) | Dot |
|---|---|---|
| Open | "Open now · until 7:00 pm" ("Open till 7") | Whole |
| Closed | "Closed · opens 8:00 am", or "opens Tue 8:00 am" ("Opens 8 am") | Crescent |
| No script | A plain "Hours" link | None |

- Evaluated at load, at each minute boundary, and on `pageshow` and `visibilitychange`. Text changes in one frame inside a reserved width.
- The dot moves only when the state really flips. No idle pulse, radar ring or blinking colon.
- Clock times, never durations: "until 7:00 pm", never "closes in 12 min". The last half hour before closing looks like any other.
- If the visitor's time zone differs from the practice's, append the zone abbreviation.

**Opening chips.**

- A radio group of three or four times, plus a plain "More times" link. Choosing never navigates: the chip is bitten and the primary button's label becomes "Book Thu 5:30 pm" in one frame, with one chew to tie cause to effect. Nothing happens without the visitor's yes, which is the practice's promise in miniature.
- Fill colour and the native checked state carry the selection. The notch is a bonus, never the only signal.
- A caption states freshness: "Times as of 6:42 pm".
- When a time passes, its chip is removed at the minute tick, no animation. If it was chosen, the selection clears, the label reverts and a polite status line says so.
- Loading is one line of text, never a shimmer. On failure: "Call or text for today's times".
- Never: countdowns, "2 left", struck-through slots, "just booked" toasts, chips that rotate on a timer.
- On a live site chips come from the scheduler. In this demo they are derived from the hours table and the clock, and must be labelled as sample times.

## 4. Section-by-section script

"Trigger" means recipe 8's IntersectionObserver tier (`.is-inview`, once). Use that tier only; `03` itself calls the Chrome-only tier removable.

| Section | The one thing that moves | Technique | Motion off |
|---|---|---|---|
| Header | Nothing on scroll: no hide, no shrink. Dot flips with the clock. Book pill bites | Recipe 5 press, minus pointer fill and magnet. New: hours script, notch mask | Text and dot states |
| Hero | Headline chews once on load. Chips and Book bite when used. Portrait still | Recipe 1's variable-font option, minus the rise and the fade-up. New: sizer | Headline is there; notch is a state |
| Facts ticker | The marquee; scroll-speed boost capped at 3× | Recipe 4 | Static wrapped list, every fact visible |
| First visit | Portions take one, two, three bites | Trigger + bite. Not recipe 2 | Portions drawn bitten |
| Services | Row in focus opens wide; press chews. Prices and crops still | Recipe 9's `view()` focus idea, vertical, touch only. New: axis hover | Words at rest; colour swap stays |
| Comfort | Nothing | New: stop control (§5) | Same |
| Meet the dentist | First name chews once at 50% visible | Trigger + chew | Still |
| No reviews yet | The "0" opens wide once | Trigger + open wide | Shown wide |
| Cost and insurance | Nothing. An insured or uninsured switch is a one-frame swap with a colour change; no bite, no chew | None | Same |
| Find us and hours | Nothing on scroll. Today's row marked from the clock; large status dot; static map image with a link out | Hours script | Same |
| FAQ | Marker turns, panel opens | Recipe 10, accordion only, at 260 ms. Instant where `interpolate-size` is missing | Instant |
| Closing band | Closing line opens wide once. Book bites | Trigger + open wide; recipe 5 | Shown wide |
| Footer | Nothing, unless you find the cookie (§6) | New, about 20 lines | State change, no spring |

Not used: recipe 2 (card stack), 3 (image reveal), 6 (count-up), 7 (page colour blend; bands meet at a hard edge, a cut like the bite), the rail of 9, view transitions, and SplitText. All animated type is authored nowrap words, so the vendor file can go.

## 5. The comfort section calms down

While "Nervous is normal here" is on screen:

- Nothing is scroll-triggered, nothing loops, no bite, no chew. The ticker is far above and paused by its off-screen rule.
- Its own link ("Text us a question") is secondary: colour swap and a 2% squash, no notch.
- Header and mobile bar sit still as always. If the visitor presses Book there it bites, because they asked.
- It follows services, the liveliest section on a phone. The drop from 3 to 0 is the largest step on the page.

Why the contrast is the point: `02` §4e says to lead with what the patient controls and that a calm page supports the message. A page that is lively everywhere reads as hyperactive. One that goes still exactly where it says "we go at your pace" reads as chosen, and stillness is where a nervous reader actually reads.

**The stop signal.** The practice offers one in the chair, so the page offers one here: a plain secondary pill, "Stop the motion" (`aria-pressed`; pressed label "Motion is off. Turn it back on"). It sets `data-motion="off"` on `<html>`, behaves exactly like the reduced-motion setting, is kept in `localStorage`, and is read by a one-line script in `<head>` so a returning visitor's hero does not chew. It repeats as a text button in the footer. It is this section's only invention, and it moves nothing.

## 6. Small surprises

| Surprise | What happens | Access | Cost, cut? |
|---|---|---|---|
| **Night shift** | When the practice is closed the dot is a crescent: the bite makes the moon. The closed line adds the useful half, that online booking still works (slot: "Closed now. Booking is open all night."). 48% of online dental bookings in `02` F14 were made between 5 pm and 9 am | The text says everything; the dot is decorative | Free with the hours script. Cut the dot if you must, never the text |
| **You read the whole page** | Once the closing band has been seen, the ticker gains one line in the dentist's voice (slot: "You read the whole page. I like you already."). Scroll back up and it is waiting | It joins the real list, so it is read aloud and appears in the static version | 5 lines. Cut freely |
| **The last cookie** | The last focusable thing in the footer is a flat disc, a real `<button>` named "Cookie. Take a bite." Each press is a bite; press and hold eats one every 280 ms. After three, one more press leaves three still crumbs and the next restocks it. Caption slot, only if the page truly sets no cookies: "The only cookie on this site." | Pointer, touch, Enter, Space. A hidden polite status reads "One bite" to "All gone". One tab stop, after everything else | 20 lines. First of the three to cut |

Hold-to-eat lives on a button, never a link: long-press on a link is the phone's own preview gesture.

## 7. Energy map

0 = nothing moves beyond colour, even on interaction. 1 = one small one-shot or a touch response. 2 = a group or a loop. 3 = type and the bite lead.

| Header | Hero | Ticker | First visit | Services | Comfort | Dentist | No reviews | Cost | Find us | FAQ | Closing | Footer |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 3 | 2 | 2 | 3 touch, 2 pointer | 0 | 1 | 1 | 0 | 1 | 1 | 2 | 0 |

Loud first half, a drop to nothing, a low simmer, one last beat.

## 8. Rules

**Easing: one family, "the bite".** In fast, hard stop, one small rebound. Going in takes about a fifth as long as settling out.

| Member | Character | Suggested value | Used for |
|---|---|---|---|
| Down | Front-loaded, no overshoot, no long tail | `cubic-bezier(.25, .8, .3, 1)` | Squash, hover-out, accordion, colour |
| Up | Spring: one overshoot of about 10%, one wobble, never two | `--spring-snappy` from `03` §6.0 (`linear()`, with its fallback) | Recoil, chew release, open wide |
| Cut | None | `step-end` or an attribute change | Notch, text swaps, prices, colour bands |

Never `ease`, `ease-in-out`, `cubic-bezier(.4, 0, .2, 1)` or `--spring-bouncy` (25% overshoot is too much wobble for this audience). `linear` only for the ticker and the scroll-linked timeline.

**Durations.**

| Interaction | Range |
|---|---|
| Colour swap (hover, focus, selected) | 0–100 ms |
| Press squash | 70–90 ms |
| Notch | 0 ms |
| Recoil, chew release | 420–500 ms nominal |
| Crumbs | 220–260 ms |
| Open wide, in / out | 320–400 / 180–220 ms |
| Scroll-caused group, stagger included | up to 700 ms; stagger 45–120 ms |
| Accordion | 240–280 ms |
| Ticker | 64 px/s phone, 80 px/s desktop; boost up to 3×, back to 1× within 500 ms |

Ceilings: nothing time-based runs longer than 700 ms, nothing starts more than 400 ms after its trigger, the hero is finished within 1 s of first paint.

**Simultaneous movement.** At most two things per viewport: one actor (a bite or a type move; a staggered group counts as one) and one more, either the ticker or a response the visitor just caused. If the ticker shares the first screen with the hero, it starts after the headline settles.

**Never animates.** Body text and captions. Form fields, errors included (colour and words; no shake). Prices, phone number, address, hours. Photographs (no zoom, reveal, parallax or hover scale). The header. Focus rings. Background colour between bands. Scroll position (native anchor scrolling only). Opacity, anywhere. Anything that would move a neighbour.

**Touch and pointer.** Hover styles sit behind `(hover: hover) and (pointer: fine)`; touch gets press, choose and scroll. Squash is `:active`, so a tap that becomes a scroll cancels cleanly, and the bite waits for `click`, so a swipe never leaves a button bitten. Navigation is never delayed for an animation. Targets at least 48 px, `touch-action: manipulation` on bitable controls. Nothing follows the pointer: no magnet, no fill from the cursor, no custom cursor.

**Keyboard focus.**

| Effect | Focus behaviour |
|---|---|
| Bite | The notch mask goes on the fill layer (a pseudo-element), never on the focusable element, because masks and `clip-path` clip outlines. The ring is a 3 px solid outline with offset, always whole. Enter and Space bite through `click` |
| Chips | Native radios: Tab in, arrows move and choose; each choice bites |
| Service rows | `:focus-visible` equals hover |
| Ticker | `:focus-within` pauses it. Pause button first in its DOM order. Duplicate track `aria-hidden` and `inert` |
| One-shots | Fire the same way when focus scrolls a section into view |
| Sticky header, mobile bar | `scroll-padding-top` and `-bottom` equal their heights (WCAG 2.4.11) |
| FAQ | Native `<details name>` |

**Reduced motion.** Opt in: all motion sits inside `@media (prefers-reduced-motion: no-preference)` and `:root:not([data-motion="off"])`. Off means no squash, recoil, crumbs, axis change, ticker movement or scroll link. What stays: colour swaps, and the bite as a state (the notch appears in one frame, portions are drawn bitten, the crescent, the chosen chip). A notch that is simply there is not motion.

**Pause control (WCAG 2.2.2).** The ticker is the only loop on the page. Its control is a text tab fixed at the inline start of the band: full band height, at least 48 px wide, reading "Pause" or "Play" in the text face, sentence case, an ink rule on its trailing edge, the track sliding under it. Paused, the tab inverts (ink fill, band-colour text) and stays inverted, so the state reads without motion. Never icon-only. Kept for the session. The stop control in §5 is the page-wide equivalent.

## 9. Cut list

First to go, in order: (1) crumbs, (2) ticker speed boost, (3) the last cookie, (4) the extra ticker line, (5) dentist's name chew, (6) the "0" opening wide, (7) closing line opening wide, (8) minute-tick updates, keeping the state computed at load, (9) FAQ height animation, (10) restock pop, (11) the services scroll link on touch, keeping press chew and pointer hover, (12) hero headline chew.

**The three that must survive:**

1. **The bite on press**: Book and the time chips. Squash, cut, spring.
2. **Three steps, three bites**: the first-visit portions.
3. **Open wide**: service words widening on the row in focus.

The two stillnesses (comfort, prices) cost nothing and are not negotiable either.

## 10. Template or generated? The motion check

Tells this page must not show:

- Fade-in-up on each block, or any opacity reveal at all; a grid of cards arriving on a stagger
- The stock ease, `ease`, one 300 ms duration on everything, `transition: all`
- A hover that lifts a card, grows a shadow or zooms a photo
- Count-up stats, shimmer skeletons, a pulsing "live" dot with a radar ring
- Typewriter, blur-in or gradient-shimmer headlines
- A scroll progress bar, a header that hides on scroll, a floating back-to-top button
- Magnetic buttons, cursor followers, tilt cards, parallax
- Link underlines that draw in from the left
- Confetti, sparkles or emoji bursts. Crumbs are three dots in one colour, and that is the ceiling
- A marquee with no control
- Bounce everywhere: overshoot above 12%, or more than one wobble
- Every section doing something on entry. Here four do, once each

Checks the developer can run:

- In the motion CSS, `opacity` appears in no transition or keyframe; `cubic-bezier(.4` and `transition: all` appear nowhere; no keyframe changes `translate` except the ticker and crumbs.
- **Freeze-frame**: pause at any instant. Nothing is half-transparent, nothing is mid-slide.
- **Sound**: imagine the sound each effect would make. Click and crunch pass. Whoosh fails.
- **Count**: five mechanisms.

## Build notes

New techniques beyond `03` §6, all inside its stack (native CSS and one small script; no library, one vendor file fewer):

1. **Notch mask.** The designer supplies the notch as an SVG whose black area is the part removed. Cut it from the fill layer: `mask: url(notch.svg) top right / var(--notch-w) var(--notch-h) no-repeat, linear-gradient(#000 0 0); mask-composite: exclude;`. Bites are attribute states (`data-bites="1"`), so the change is a cut by construction. For two and three bites the designer draws the cumulative missing area as separate SVGs and the attribute swaps the image; do not stack overlapping notch layers, because `exclude` fills overlaps back in. Inline the SVGs as data URIs so the first bite never waits on the network. For a sequence the script steps `data-bites` at 0, 120 and 240 ms, and each state names its own copy of the recoil keyframes so the spring restarts.
2. **Sizer** (§2). The visible text needs one inner span so it and the hidden copy share a grid cell.
3. **Hours script**: `Intl.DateTimeFormat` with `timeZone`, a minute tick, chip expiry on the same tick.
4. **Bite on `click`**: one listener sets `data-bites`; a timer or the observer restocks.
5. **Stop control**: an attribute on `<html>` and a nesting wrapper around the motion CSS.
6. **Crumbs**: one pseudo-element at the notch holding three dots, scaled outward from the corner and ended with a cut. Transform only.

The script grows from the 1.4 kB measured in `03` to perhaps 2 kB gzip once count-up, colour blend, magnet and the SplitText import are dropped. That is an estimate; nothing was measured.

## Risks, most serious first

1. **The type choice decides half of this.** Without a width axis, "open wide" (signature 3) is weak.
2. **Axis animation is main-thread layout and raster work.** The services ripple re-rasterises large glyphs on mid-range Android. If frames drop on a test phone, give those keyframes `steps(4)`; if that still drops, cut it (cut list 11).
3. **Unseen.** No frame of this has been watched. Squash, tilt and spring values are educated guesses.
4. **A late font skips the hero chew.** It runs from first paint; if the variable font arrives a second later the entrance has silently passed. Preload the display font.
5. **A bite on a link that navigates at once** may show for a frame or two. Accepted; navigation is never delayed.
6. **Demo chips** show derived times. Unlabelled, they are invented data.
7. **Copy slots** (closed line, ticker line, cookie caption, stop control) need the brand writer. The cookie caption is true only if the page sets no cookies; the stop control uses `localStorage`, which belongs in any privacy note.
8. **Auto-updating status text** is treated here as essential real-time information under WCAG 2.2.2, with no live-region announcements. That is this document's reading, not an audit.
9. **`mask-composite`, `font-stretch` animation and the sizer** come from knowledge of the platform. They were not run in the three engines `03` tested.
