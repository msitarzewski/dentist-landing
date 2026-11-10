// page.js — Feast Dental landing page
// The page is complete without this file. It adds: the open-now state, the demo opening chips, the bite on
// press, the first-visit portions, chew / open wide, the ticker controls, the stop-the-motion control,
// the footer cookie, and an honest notice on links that are placeholders in this demo.
// Behaviour: brand/03-interaction-spec.md. Bite, chips, portions and type code: prototypes/interaction.html.

const root = document.documentElement;
root.classList.add('js');
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const still = () => reduce.matches || root.dataset.motion === 'off';

for (const el of $$('[data-needs-js]')) el.hidden = false;

/* ---------------------------------------------------------------------------------------------------
   PLACEHOLDER FACTS (brand/01-brand-core.md Part 4). Replace with the real practice's confirmed facts.
   Minutes after midnight, practice time. Index 0 is Sunday.
   --------------------------------------------------------------------------------------------------- */
const TZ = 'America/Chicago';
// The hours live in ONE place: openingHoursSpecification in the JSON-LD block in index.html. The visible
// hours table and the footer line must be edited to match it; this script reads the JSON-LD so "Open now"
// can never disagree with the structured data. The array below is only the fallback if that block is missing.
let HOURS = [null, [480, 1020], [660, 1170], [480, 1020], [660, 1170], [480, 840], [540, 780]];
try {
  const ld = JSON.parse($('script[type="application/ld+json"]').textContent);
  const practice = (ld['@graph'] || [ld]).find((n) => n['@type'] === 'Dentist');
  const LD_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const toMins = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  const read = LD_DAYS.map(() => null);
  for (const s of practice.openingHoursSpecification) {
    if (s.validFrom || s.validThrough) continue;                        // a dated exception is not the weekly table
    for (const d of [].concat(s.dayOfWeek)) {
      const i = LD_DAYS.indexOf(String(d).split('/').pop());            // "Monday" or "https://schema.org/Monday"
      if (i < 0) throw new Error(`dayOfWeek "${d}"`);
      if (s.opens === s.closes) continue;                               // closed all day
      if (read[i]) throw new Error(`two sets of hours for ${d}: this script holds one a day`);
      read[i] = [toMins(s.opens), toMins(s.closes)];
    }
  }
  if (read.some(Boolean)) HOURS = read;
} catch (e) { console.warn('Hours: could not read the JSON-LD, using the table in page.js.', e); }
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const FIRST_VISIT_MIN = 75;
// "Booking's open all night" may only be shown if the online scheduler really works out of hours.
const BOOKING_OPEN_ALL_NIGHT = true;
// While closed, the phone bar offers "Text us" instead of dialling a closed practice. Only if the line is monitored for texts.
const TEXTS_ANSWERED = true;

const partsFmt = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' });
function practiceNow(d = new Date()) {
  const p = Object.fromEntries(partsFmt.formatToParts(d).map((x) => [x.type, x.value]));
  return { dow: DAYS.indexOf(p.weekday), mins: (+p.hour % 24) * 60 + +p.minute };
}
// true when the visitor's own clock reads differently from the practice's
function elsewhere(d = new Date()) {
  const p = practiceNow(d);
  return p.dow !== d.getDay() || p.mins !== d.getHours() * 60 + d.getMinutes();
}
const clock = (m) => { const h = Math.floor(m / 60) % 12 || 12, mm = m % 60; return mm ? `${h}:${String(mm).padStart(2, '0')}` : `${h}`; };
const ampm = (m) => (m >= 720 ? 'pm' : 'am');
const clockFull = (m) => `${Math.floor(m / 60) % 12 || 12}:${String(m % 60).padStart(2, '0')} ${ampm(m)}`;

/* ---- open-now state: header, Find us, and today's row. Clock times only, never a countdown. ---- */
function nextOpening(now) {
  for (let i = 0; i < 8; i++) {
    const dow = (now.dow + i) % 7, h = HOURS[dow];
    if (!h) continue;
    if (i === 0 && now.mins >= h[0]) continue;
    return { dow, mins: h[0], today: i === 0 };
  }
  return null;
}
function status(now = practiceNow()) {
  const h = HOURS[now.dow];
  const zone = elsewhere() ? ' CT' : '';
  if (h && now.mins >= h[0] && now.mins < h[1]) {
    const t = zone ? `${clock(h[1])} ${ampm(h[1])}${zone}` : clock(h[1]);
    return { open: true, long: `Open now till ${t}.`, short: `Open till ${t}` };
  }
  const n = nextOpening(now);
  const when = n ? `${n.today ? '' : DAYS[n.dow] + ' '}${clock(n.mins)} ${ampm(n.mins)}${zone}` : '';
  const lastClose = Math.max(...HOURS.filter(Boolean).map((x) => x[1]));
  const night = now.mins >= lastClose || now.mins < 360;
  const long = night && BOOKING_OPEN_ALL_NIGHT ? 'Closed now. Booking’s open all night.' : `Closed now. Opens ${when}.`;
  // at night the short form (phones) says what the visitor can still do, not when the door opens
  return { open: false, long, short: night && BOOKING_OPEN_ALL_NIGHT ? 'Booking’s open all night' : `Opens ${when}` };
}
function paintStatus() {
  const now = practiceNow(), s = status(now);
  const head = $('[data-status]');
  if (head) {
    const l = $('.st-l', head), sh = $('.st-s', head), dot = $('.dot', head);
    if (l) l.textContent = s.long;
    if (sh) sh.textContent = s.short;
    if (dot) { dot.hidden = false; dot.classList.toggle('is-closed', !s.open); }
  }
  for (const a of $$('[data-call]')) {
    const text = !s.open && TEXTS_ANSWERED, label = $('[data-call-label]', a);
    a.dataset.tel ??= a.getAttribute('href');                            // the number lives in the markup, once
    a.href = text ? a.dataset.tel.replace('tel:', 'sms:') : a.dataset.tel;
    if (label) label.textContent = text ? 'Text us' : 'Call';            // the label says what the link does
  }
  const big = $('[data-bigstatus]');
  if (big) {
    big.hidden = false;
    const t = $('[data-bigstatus-text]', big), dot = $('.dot', big);
    if (t) t.textContent = s.long;
    dot?.classList.toggle('is-closed', !s.open);
  }
  for (const tr of $$('#hours tr[data-dow]')) {
    const today = +tr.dataset.dow === now.dow;
    tr.classList.toggle('is-today', today);
    let tag = $('.tg', tr);
    if (today && !tag) { tag = document.createElement('span'); tag.className = 'tg'; tag.textContent = 'Today'; tag.setAttribute('data-nosnippet', ''); tr.firstElementChild?.append(' ', tag); }
    if (!today && tag) tag.remove();
  }
}

/* ---- opening chips ------------------------------------------------------------------------------
   DEMO DATA. These times are worked out from the hours table and the clock; they are not real openings
   and the page says so. On a live site, replace sampleSlots() with a call to the practice's scheduler
   and keep the return shape: [{ key, label, day, time }]. Never countdowns, never "2 left". */
const SAMPLE = { 1: [480, 930], 2: [675, 1065], 3: [480, 855], 4: [780, 1050], 5: [480, 750], 6: [570, 675] };
const PREFER = { 1: 0, 2: 1, 3: 0, 4: 1, 5: 0, 6: 0 };
function sampleSlots(now = practiceNow()) {
  const out = [];
  for (let i = 0; i < 9 && out.length < 3; i++) {
    const dow = (now.dow + i) % 7, h = HOURS[dow], cand = SAMPLE[dow];
    if (!h || !cand) continue;
    // every sample must fall inside that day's hours as read from the page, and today's must still be ahead
    const ok = cand.filter((m) => m >= h[0] && m + FIRST_VISIT_MIN <= h[1] && (i > 0 || m > now.mins + 45));
    if (!ok.length) continue;
    const t = ok.includes(cand[PREFER[dow]]) ? cand[PREFER[dow]] : ok[ok.length - 1];
    out.push({ key: `${i === 0 ? 'today' : 'd' + dow}-${t}`, day: DAYS[dow], time: clockFull(t), label: `${DAYS[dow]} ${clockFull(t)}` });
  }
  return out;
}
const slotsBox = $('#slots'), slotStatus = $('#slot-status'), opCap = $('#op-cap');
let chosenLabel = null, shownKeys = null;   // null, not '': an empty list must still draw its "call for times" line
const say = (text) => { if (slotStatus) slotStatus.textContent = text; };
function chew(el) { if (!el || still()) return; el.classList.remove('is-chewing'); void el.offsetWidth; el.classList.add('is-chewing'); }
function paintBookLabels() {
  const text = chosenLabel ? `Book ${chosenLabel}` : 'Book online';
  for (const el of $$('[data-book-label]')) { if (el.textContent !== text) { el.textContent = text; chew(el); } }
}
function paintSlots() {
  if (!slotsBox) return;
  const now = practiceNow(), list = sampleSlots(now), keys = list.map((s) => s.key).join('|');
  if (opCap) { opCap.textContent = `Sample times for this demo, not real openings. As of ${clockFull(now.mins)}${elsewhere() ? ' CT' : ''}.`; slotsBox.setAttribute('aria-describedby', 'op-cap'); }
  if (keys === shownKeys) return;
  shownKeys = keys;
  // remember where keyboard focus was, so redrawing the list on the minute tick does not drop it to <body>
  const focused = slotsBox.contains(document.activeElement) ? document.activeElement.value : null;
  for (const el of $$('.slot, .slots__msg', slotsBox)) el.remove();
  if (!list.length) { const m = document.createElement('span'); m.className = 'slots__msg'; m.textContent = 'Call or text for today’s times.'; slotsBox.append(m); }
  let kept = false;
  for (const s of list) {
    const label = document.createElement('label'); label.className = 'slot';
    const input = Object.assign(document.createElement('input'), { type: 'radio', name: 'slot', value: s.label });
    if (s.label === chosenLabel) { input.checked = true; kept = true; label.classList.add('is-kept'); }   // redrawn, not newly chosen: no second bite
    const body = document.createElement('span'); body.className = 'btn__body';
    const face = document.createElement('span'); face.className = 'btn__face'; face.setAttribute('aria-hidden', 'true');
    const day = document.createElement('b'); day.textContent = s.day;
    body.append(face, day, ` ${s.time}`); label.append(input, body); slotsBox.append(label);
  }
  if (focused !== null) ($$('input', slotsBox).find((i) => i.value === focused) || $('input', slotsBox))?.focus({ preventScroll: true });
  if (chosenLabel && !kept) { chosenLabel = null; paintBookLabels(); say('That time has passed. Pick another.'); }
}
slotsBox?.addEventListener('click', (e) => {
  const input = e.target.closest('input'); if (!input) return;
  for (const l of $$('.slot.is-kept', slotsBox)) l.classList.remove('is-kept');
  if (chosenLabel === input.value) { input.checked = false; chosenLabel = null; say('No time picked.'); }   // choosing the chosen chip again puts it back
  else { chosenLabel = input.value; say(`${chosenLabel} picked. Nothing is booked yet.`); }
  paintBookLabels();
});
slotsBox?.addEventListener('keydown', (e) => { if (e.key === ' ' && e.target.matches('input:checked')) { e.preventDefault(); e.target.click(); } });   // Space on the chosen time clears it

// one painter failing must not stop the other, or the rest of this script
function tick() { for (const paint of [paintStatus, paintSlots]) try { paint(); } catch (e) { console.error(e); } }
tick();
(function everyMinute() { setTimeout(() => { tick(); everyMinute(); }, 60000 - (Date.now() % 60000) + 50); })();
addEventListener('pageshow', tick);
document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });

/* ---- the bite on press ---------------------------------------------------------------------------
   The squash is :active in CSS. The bite waits for click, so a swipe never leaves a button bitten and
   mouse, touch, Enter and Space all take the same path. It rests bitten for 2 s or until it leaves the
   screen, then restocks. A second click replays the spring and removes nothing more. */
const REST = 2000;
const timers = new WeakMap();
const offscreen = 'IntersectionObserver' in window ? new IntersectionObserver((es) => { for (const e of es) if (!e.isIntersecting) restock(e.target, false); }) : null;
function bite(el) {
  clearTimeout(timers.get(el));
  el.setAttribute('data-bitten', '');
  el.dataset.kick = el.dataset.kick === 'a' ? 'b' : 'a';
  offscreen?.observe(el);
  timers.set(el, setTimeout(() => restock(el, true), REST));
}
function restock(el, pop) {
  clearTimeout(timers.get(el)); offscreen?.unobserve(el);
  if (!el.hasAttribute('data-bitten')) return;
  el.removeAttribute('data-bitten');
  if (pop) el.dataset.kick = 'pop'; else delete el.dataset.kick;
}
addEventListener('click', (e) => { const el = e.target.closest?.('[data-bite]'); if (el) bite(el); });

/* ---- links that are placeholders in this demo say so instead of going nowhere --------------------- */
const toast = $('#toast'); let toastTimer;
const NOTES = {
  booking: () => (chosenLabel ? `Demo page. Nothing was booked for ${chosenLabel}. Online booking isn’t connected.` : 'Demo page. Online booking isn’t connected.'),
  link: () => 'Demo page. This link isn’t connected.',
};
addEventListener('click', (e) => {
  const a = e.target.closest?.('[data-placeholder]'); if (!a || !toast) return;
  e.preventDefault();
  toast.textContent = (NOTES[a.dataset.placeholder] || NOTES.link)();
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.textContent = ''; }, 10000);   // the region stays; only its text comes and goes
});

/* ---- three steps, three bites --------------------------------------------------------------------
   One queue for every disc, so bites land one at a time, 120 ms apart. Once per page load, no replay.
   Without script, with motion off, and for rows already above the viewport, the discs are drawn bitten. */
const queue = []; let busy = false;
function pump() {
  const job = queue.shift();
  if (!job) { busy = false; return; }
  job.p.classList.remove('is-squash'); job.p.dataset.bites = job.n;
  queue[0]?.p.classList.add('is-squash');
  setTimeout(pump, 120);
}
if ('IntersectionObserver' in window) {
  const seen = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      seen.unobserve(e.target);
      const p = e.target;
      const n = +p.dataset.target;
      if (still()) { p.classList.remove('is-live'); p.dataset.bites = n; continue; }
      for (let i = 1; i <= n; i++) queue.push({ p, n: i });
    }
    if (!busy && queue.length) { busy = true; queue[0].p.classList.add('is-squash'); setTimeout(pump, 80); }
  }, { threshold: 1, rootMargin: '0px 0px -12% 0px' });   // the whole disc, clear of the bottom edge
  for (const s of $$('#steps .step')) {
    const p = $('.portion', s);
    if (!p || still() || s.getBoundingClientRect().bottom < 0) continue;
    p.dataset.target = p.dataset.bites; p.dataset.bites = 0; p.classList.add('is-live');
    seen.observe(p);
  }
}

/* ---- type: pressing a service row chews its word; one-shots run once when seen --------------------- */
for (const list of $$('.svc')) list.addEventListener('click', (e) => chew($('.w__t', e.target.closest('.svc__row') || list)));
if ('IntersectionObserver' in window) {
  const once = new IntersectionObserver((es) => {
    for (const e of es) {
      if (!e.isIntersecting) continue;
      once.unobserve(e.target);
      if (e.target.dataset.once === 'chew') chew($('.w__t', e.target)); else e.target.classList.add('is-inview');
    }
  }, { threshold: 0.5 });
  for (const el of $$('[data-once]')) once.observe(el);
} else for (const el of $$('[data-once="wide"]')) el.classList.add('is-inview');

/* ---- ticker: a second copy for the loop, a pause control, a rest when off screen, a nudge from scroll -- */
const ticker = $('#ticker'), track = $('#ticker-track'), pauseBtn = $('#ticker-pause');
if (ticker && track) {
  const tracks = [track];
  const addTwin = () => { const twin = track.cloneNode(true); twin.removeAttribute('id'); twin.setAttribute('aria-hidden', 'true'); twin.inert = true; tracks.at(-1).after(twin); tracks.push(twin); };
  addTwin();
  while (!still() && track.scrollWidth * (tracks.length - 1) < innerWidth && tracks.length < 6) addTwin();   // very wide screens need more than two copies to stay full
  const anims = () => tracks.flatMap((t) => t.getAnimations?.() ?? []);
  // 64 px a second on phones, 80 above (interaction spec section 8). Measured only while the track is laid out
  // as a moving line: with motion off the list is wrapped and its width is the screen's, not the track's.
  const setDur = () => { if (!still()) ticker.style.setProperty('--ticker-dur', `${Math.max(12, Math.round(track.scrollWidth / (innerWidth < 640 ? 64 : 80)))}s`); };
  setDur(); document.fonts?.ready.then(setDur);
  new MutationObserver(setDur).observe(root, { attributes: true, attributeFilter: ['data-motion'] });
  reduce.addEventListener?.('change', setDur);
  let userPaused = false, inView = true;
  // One place decides, and it drives the animations directly: once play() or pause() has been called on a
  // CSS animation the engines stop listening to animation-play-state (found in Chrome, Firefox and WebKit).
  const sync = () => { for (const a of anims()) { if (userPaused || !inView) a.pause(); else a.play(); } };
  pauseBtn?.addEventListener('click', () => {
    userPaused = !userPaused;
    ticker.classList.toggle('is-paused', userPaused);
    pauseBtn.textContent = userPaused ? 'Play' : 'Pause';
    sync();
  });
  if ('IntersectionObserver' in window) new IntersectionObserver((es) => { inView = es.at(-1).isIntersecting; sync(); }).observe(ticker);
  // scroll speed lends the ticker up to three times its pace, then it settles
  let lastY = scrollY, lastT = performance.now(), rate = 1, raf = 0;
  const settle = () => {
    rate += (1 - rate) * 0.15;   // settles in about half a second
    if (Math.abs(rate - 1) < 0.02) rate = 1;
    for (const a of anims()) a.playbackRate = rate;
    raf = rate === 1 ? 0 : requestAnimationFrame(settle);
  };
  addEventListener('scroll', () => {
    const t = performance.now(), v = Math.abs(scrollY - lastY) / Math.max(16, t - lastT);   // px per ms
    lastY = scrollY; lastT = t;
    if (still() || userPaused || !inView) return;
    rate = Math.min(3, Math.max(rate, 1 + v * 1.2));
    if (!raf) raf = requestAnimationFrame(settle);
  }, { passive: true });
  // a line for whoever reads to the end
  const closing = $('#closing-h') || $('#closing');
  if (closing && 'IntersectionObserver' in window) new IntersectionObserver((es, io) => {
    if (!es.at(-1).isIntersecting) return; io.disconnect();
    for (const t of tracks) { const li = document.createElement('li'); li.textContent = 'You read the whole page. I like you already.'; t.append(li); }
    setDur();
  }, { threshold: 0.4 }).observe(closing);
}

/* ---- the food strip is a keyboard stop only where it actually scrolls (phones) ---------------------- */
const foods = $('#foods');
if (foods) {
  const fit = () => { if (foods.scrollWidth > foods.clientWidth + 1) foods.tabIndex = 0; else foods.removeAttribute('tabindex'); };
  fit(); addEventListener('resize', fit, { passive: true });
}

/* ---- stop the motion: the page's own stop signal, kept between visits ------------------------------ */
function paintMotion() {
  const off = root.dataset.motion === 'off';
  for (const el of $$('[data-motion-label]')) el.textContent = off ? 'Start the motion' : 'Stop the motion';
  for (const el of $$('[data-motion-state]')) el.hidden = !off;
  // when the system setting has already stopped everything, a "Stop the motion" button would be lying
  for (const el of $$('.stoprow, .tbtn[data-motion-toggle]')) el.hidden = reduce.matches;
}
reduce.addEventListener?.('change', paintMotion);
addEventListener('click', (e) => {
  if (!e.target.closest?.('[data-motion-toggle]')) return;
  if (root.dataset.motion === 'off') delete root.dataset.motion; else root.dataset.motion = 'off';
  try { localStorage.setItem('motion', root.dataset.motion === 'off' ? 'off' : 'on'); } catch {}
  paintMotion();
});
paintMotion();

/* ---- the last cookie: three bites, crumbs, a fresh one. Hold to keep eating. ------------------------ */
const cookie = $('#cookie'), cookieStatus = $('#cookie-status');
if (cookie && $('.portion', cookie) && cookieStatus) {
  const SAY = ['Fresh cookie.', 'One bite.', 'Two bites.', 'Three bites.', 'All gone.'];
  const disc = $('.portion', cookie); disc.classList.add('is-live');
  let hold = 0, held = false;
  const eat = () => {
    const n = (+cookie.dataset.bites + 1) % 5;
    cookie.dataset.bites = n; disc.dataset.bites = Math.min(n, 3);
    cookieStatus.textContent = SAY[n];
  };
  cookie.addEventListener('pointerdown', (e) => {   // primary button only
    if (e.button) return; held = false; clearTimeout(hold);
    hold = setTimeout(function chomp() { held = true; eat(); hold = setTimeout(chomp, 280); }, 280);
  });
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel', 'blur']) cookie.addEventListener(ev, () => clearTimeout(hold));
  cookie.addEventListener('click', (e) => { if (!held || e.detail === 0) eat(); held = false; });   // short presses bite on the up event (2.5.2); a keyboard click (detail 0) always bites, even after a hold that slid off
}
