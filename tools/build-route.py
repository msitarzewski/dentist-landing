#!/usr/bin/env python3
"""Builds its-the-prompt/route/: "How run 03 was made", the long page behind the comparison.

    python3 tools/build-route.py            # thumbnails, web copies, video encodes, then index.html
    python3 tools/build-route.py --html     # index.html only (after editing the words below)

Needs magick, cwebp and ffmpeg on the PATH (the same machine set-up as tools/build-images.mjs).

Sources:
- In the repository, linked as they are: brand/specimens/*.png, prototypes/shots/*.png, assets/img/src/**.png.
  Only a cropped thumbnail is made for each.
- Not in the repository (.ops/qa/shots, .ops/build-shots: about 900 MB): the items listed in
  its-the-prompt/route/evidence.json (curated by a Visual Storyteller agent) get a thumbnail and a web copy
  (WebP, at most 1600 px wide), and recordings get an H.264 encode and a poster frame.
- research/shots/ (screenshots of real practices' websites) is never used.
"""
import hashlib, html, json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "its-the-prompt" / "route"
THUMB_W, THUMB_H, LARGE_W = 480, 360, 1600
REPO = "https://github.com/msitarzewski/dentist-landing/blob/main/"
TREE = "https://github.com/msitarzewski/dentist-landing/tree/main/"
AA = "https://github.com/msitarzewski/agency-agents/blob/main/"
ONLY_HTML = "--html" in sys.argv

esc = lambda s: html.escape(s, quote=True)
rel = lambda p: "../../" + p            # from its-the-prompt/route/ to the repository root


def run(*cmd):
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def slug(src):
    return re.sub(r"[^a-z0-9]+", "-", src.lower()).strip("-")[-60:] + "-" + hashlib.sha1(src.encode()).hexdigest()[:6]


def is_wide(src):
    w, h = map(int, subprocess.check_output(["magick", "identify", "-format", "%w %h", f"{ROOT / src}[0]"]).split())
    return w / h > THUMB_W / THUMB_H


def thumb(src, centre=False):
    """A 480x360 thumbnail: cropped from the top for tall screenshots (read from the top), filled and centred for
    photographs, and fitted whole for wide sheets (side-by-side comparisons would otherwise lose their panels)."""
    wide = not centre and is_wide(src)
    name = f"t/{slug(src)}{'-c' if centre else '-f' if wide else ''}.webp"
    dst = OUT / name
    if not ONLY_HTML and not dst.exists():
        dst.parent.mkdir(parents=True, exist_ok=True)
        tmp = dst.with_suffix(".png")
        if wide:
            run("magick", str(ROOT / src), "-alpha", "off", "-thumbnail", f"{THUMB_W}x{THUMB_H}", "-background", "#f2f0ea",
                "-gravity", "center", "-extent", f"{THUMB_W}x{THUMB_H}", str(tmp))
        elif centre:
            run("magick", str(ROOT / src), "-alpha", "off", "-thumbnail", f"{THUMB_W}x{THUMB_H}^", "-gravity", "center",
                "-extent", f"{THUMB_W}x{THUMB_H}", str(tmp))
        else:
            run("magick", str(ROOT / src), "-alpha", "off", "-thumbnail", f"{THUMB_W}x", "-gravity", "north",
                "-crop", f"{THUMB_W}x{THUMB_H}+0+0", "+repage", "-background", "#f2f0ea", "-extent", f"{THUMB_W}x{THUMB_H}", str(tmp))
        run("cwebp", "-quiet", "-q", "72", "-m", "6", str(tmp), "-o", str(dst))
        tmp.unlink()
    return name


def large(src):
    """A web copy for evidence that is not in the repository."""
    name = f"l/{slug(src)}.webp"
    dst = OUT / name
    if not ONLY_HTML and not dst.exists():
        dst.parent.mkdir(parents=True, exist_ok=True)
        tmp = dst.with_suffix(".png")
        run("magick", str(ROOT / src), "-alpha", "off", "-resize", f"{LARGE_W}x>", str(tmp))
        run("cwebp", "-quiet", "-q", "78", "-m", "6", str(tmp), "-o", str(dst))
        tmp.unlink()
    return name


# the curator's crops (x 330 to 900, y 500 to 760 of the 1440x900 frame): the button and the chips, not the whole screen
CROPS = {".ops/qa/shots/motion/rec-02-book-bite-restock-1440.mp4": "570:260:330:500",
         ".ops/qa/shots/motion/rec-04-chips-1440.mp4": "570:260:330:500"}


def video(src, poster_s):
    base = slug(src)
    vf = (f"crop={CROPS[src]}," if src in CROPS else "") + "scale='min(1280,iw)':-2"
    mp4, poster = f"v/{base}.mp4", f"v/{base}.webp"
    if not ONLY_HTML and not (OUT / mp4).exists():
        (OUT / "v").mkdir(parents=True, exist_ok=True)
        run("ffmpeg", "-y", "-i", str(ROOT / src), "-an", "-vf", vf + ",fps=30", "-c:v", "libx264",
            "-preset", "slow", "-crf", "30", "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(OUT / mp4))
        png = OUT / f"v/{base}.png"
        run("ffmpeg", "-y", "-ss", str(poster_s), "-i", str(ROOT / src), "-frames:v", "1", "-vf", vf, str(png))
        run("cwebp", "-quiet", "-q", "75", str(png), "-o", str(OUT / poster))
        png.unlink()
    return mp4, poster


# ------------------------------------------------------------------------------------------------ galleries
def item(src, title, caption="", in_repo=True, cls=""):
    return {"src": src, "title": title, "caption": caption, "in_repo": in_repo, "cls": cls}


def gallery(items, wide=False, show=None):
    """A gallery; past `show` items the rest sit behind a "Show all" disclosure. The viewer steps through the whole set."""
    if show and len(items) > show + 2:
        head, rest = items[:show], items[show:]
        return (f'<div class="galset">{_ul(head, wide)}<details class="more"><summary>Show all {len(items)}</summary>'
                f'{_ul(rest, wide)}</details></div>')
    return f'<div class="galset">{_ul(items, wide)}</div>'


def _ul(items, wide=False):
    out = [f'<ul class="gal{" gal--wide" if wide else ""}">']
    for it in items:
        if it.get("kind") == "video":
            mp4, poster = video(it["src"], it.get("poster_s", 1))
            out.append(f'<li class="gal__v"><video controls muted playsinline preload="none" poster="{poster}"><source src="{mp4}" type="video/mp4"></video>'
                       f'<p class="cap"><b>{esc(it["title"])}</b> {esc(it["caption"])}</p></li>')
            continue
        t = thumb(it["src"], centre=it.get("cls") == "photo")
        full = rel(it["src"]) if it["in_repo"] else large(it["src"])
        cap = f'<b>{esc(it["title"])}</b> {esc(it["caption"])}'.strip()
        out.append(f'<li><a href="{full}" data-lb><img src="{t}" width="{THUMB_W}" height="{THUMB_H}" loading="lazy" decoding="async" alt="{esc(it["title"] + ". " + it["caption"])}"></a>'
                   f'<p class="cap">{cap}</p></li>')
    out.append("</ul>")
    return "\n".join(out)


def files(pattern):
    return sorted(p.relative_to(ROOT).as_posix() for p in ROOT.glob(pattern))


WIDTH = lambda name: (re.search(r"-(\d{3,4})(?:-|\.|$)", name) or [None, ""])[1]


def colour_items():
    words = {
        "v1-blood-orange-lime": ("V1, blood orange and lime.", "Out: reads tomato before it reads orange, and sits close to one aligner chain's red."),
        "v2-tangerine-lime": ("V2, tangerine and lime.", "Picked, then tuned."),
        "v3-true-orange-lemon": ("V3, true orange and lemon.", "Out: a hazard sign. Lemon on that orange is 2.0:1 and the pills dissolve."),
        "v4-tangerine-leaf": ("V4, tangerine and leaf green.", "Out: the same lightness, so the two colours vibrate and the rows read as a flag."),
        "v5-tuned-by-eye": ("V5, V2 tuned by eye.", "Before the photographs arrived."),
        "final": ("Final.", "Ground and counter sampled from the hero and apple portraits, so each photograph bleeds into its own field."),
    }
    out = []
    for f in files("brand/specimens/colour-*.png"):
        key = next(k for k in words if f"colour-{k}" in f)
        t, c = words[key]
        extra = " Contrast check." if "contrast" in f else (" On paper." if "paper" in f else "")
        out.append(item(f, f"{t} {WIDTH(f)} wide.", c + extra))
    return out


def type_items():
    words = {
        "d1-anybody": ("D1 Anybody.", "Chosen: the only face that held the whole first line at 128px, and it can stretch."),
        "d2-archivo": ("D2 Archivo.", "Runner-up and fallback: the easiest read, but the compressed grotesque every poster already uses."),
        "d3-science-gothic": ("D3 Science Gothic.", "Out: cold and technical."),
        "d4-georama": ("D4 Georama.", "Out, narrowly: warm and rare, less presence at 128px."),
        "d5-truculenta": ("D5 Truculenta.", "Out: reads as a cartoon title."),
        "d6-bevellier": ("D6 Bevellier.", "Out: its licence does not allow subsetting or converting the files."),
        "text-candidates": ("Four text faces.", "Set as navigation, body, captions, the hours table and buttons."),
        "text-winner-public-sans": ("Public Sans.", "Chosen for text: even at 18 to 20px, with tabular figures that keep times and prices tidy."),
        "winner-anybody-axes": ("Anybody's axes.", "Width and weight: the range the headline's motion uses."),
    }
    out = []
    for f in files("brand/specimens/type-*.png"):
        key = next(k for k in words if k in f)
        t, c = words[key]
        out.append(item(f, f"{t} {WIDTH(f)} wide.", c))
    return out


SECTIONS = {"hero": "Hero", "food-strip": "Food strip", "comfort": "Comfort", "dentist": "Meet the dentist", "dentist-drawing": "The drawing",
            "dentist-cost": "Dentist and cost", "cost": "Cost", "find-us": "Find us", "faq-ruled": "FAQ, ruled", "faq-portrait": "FAQ with portrait",
            "faq-graded": "FAQ, graded", "closing": "Closing", "social-card-favicon": "Social card and favicon", "favicon-avatar": "Favicon and avatar",
            "bite": "The bite", "dentist-zero": "Dentist and 0 reviews", "footer": "Footer", "hours": "Hours", "services": "Services",
            "steps-faq": "Steps and FAQ", "zero": "0 reviews"}


def section_name(f, prefix):
    stem = Path(f).stem[len(prefix):]
    stem = re.sub(r"^\d+b?-", "", stem)
    stem = re.sub(r"-(\d{3,4})(-[a-z])?$", "", stem)
    return SECTIONS.get(stem, stem.replace("-", " ").capitalize())


def placement_items():
    return [item(f, f"{section_name(f, 'images-')}, {WIDTH(f)} wide.", "Where each photograph sits, how it is cropped and what it is captioned.") for f in files("brand/specimens/images-*.png")]


def proof_items():
    return [item(f, f"{section_name(f, 'proof-')}, {WIDTH(f)} wide.", "Design proof, drawn in the browser before the page was built.") for f in files("brand/specimens/proof-*.png")]


PROTO_GROUPS = [
    ("a", "A. A static bite on a photograph", "Four mask techniques on three box shapes; the one-tile SVG mask won because it leaves no hairline."),
    ("b", "B. The bite on press", "Pointer, keyboard and focus; the focusable element is never masked, so the focus ring stays whole."),
    ("c", "C. A shape eaten by scroll", "IntersectionObserver against scroll-driven animation, with no script and with reduced motion."),
    ("d", "D. The bitten time chip", "Rest, hover and press, and the notch kept clear of the label."),
    ("e", "E. Type on a variable axis", "Anybody, Archivo and Saira stretching, and what reduced motion leaves."),
    ("i", "The interaction spec, running", "Press, squash, bite, crumbs, chips, steps and service rows, as brand/03 specifies."),
]
ENGINES = {"chromium": "Chromium", "firefox": "Firefox", "webkit": "WebKit"}


def proto_items(prefix):
    out = []
    for f in files(f"prototypes/shots/{prefix}*.png"):
        stem = Path(f).stem
        if not re.match(rf"^{prefix}(-|$)", stem):
            continue
        eng = next((v for k, v in ENGINES.items() if f"-{k}" in stem), "")
        what = re.sub(r"-(chromium|firefox|webkit).*$", "", stem)
        what = what[len(prefix):].lstrip("-").replace("-", " ") or "rest"
        rest = re.sub(r"^.*-(chromium|firefox|webkit)-?", "", stem) if eng else stem
        size = (re.search(r"(\d{3,4})", rest) or [None, ""])[1]
        bites = (re.search(r"bites(\d)", rest) or [None, ""])[1]
        title = " · ".join(x for x in [what, eng, f"{size} wide" if size else "", f"{bites} bites" if bites else ""] if x)
        out.append(item(f, title + "."))
    return out


SRC = {
    "test-apple": ("Test frame: apple.", "First try, to see whether the generator would hold the palette."),
    "test-portrait": ("Test frame: portrait.", "First try at the dentist, before the reference images that kept her face the same."),
    "paloma-hero-b": ("Rejected: the grin take.", "A full toothy smile: generated teeth in the hero of a dental page, against the brief's own rule."),
    "paloma-hero": ("Shipped: the hero.", "Closed-mouth smile, eyes on the lens, empty hands. Its backdrop became the page's ground colour."),
    "bite-taco-v1": ("Rejected: a burrito.", "Right filling, wrong form: a rolled, closed tube. In Austin, fold against roll is the line people notice."),
    "bite-taco": ("Shipped: a breakfast taco.", "Regenerated as a small flour tortilla folded once, open along the top."),
    "paloma-drawing-v1": ("Rejected: a tooth icon.", "She was drawing a finished, symmetrical molar outline, and the frame drifted from the hero."),
    "paloma-drawing": ("Shipped: the drawing.", "Sketching on a pad on her knee, beside the chair."),
    "comfort-headphones-v1": ("Rejected: a product render.", "No seam, hinge or wear."),
    "comfort-headphones": ("Regenerated, then not used.", "The Comfort section took a portrait of the dentist listening instead."),
    "paloma-apple": ("Shipped: Paloma, apple.", "Its lime backdrop became the page's counter colour."),
    "paloma-listening": ("Shipped: listening.", "The Comfort section's photograph."),
    "paloma-laughing": ("Used, then cut.", "The cold read found it repeated the hero's pose; it left the FAQ."),
    "bite-apple": ("Shipped: apple.", ""), "bite-toast": ("Shipped: toast.", ""), "bite-corn": ("Shipped: corn.", ""),
    "bite-peach": ("Shipped: peach.", "The closing section."),
    "the-drawing": ("Shipped: the pad.", "The drawing a patient keeps."),
    "the-drawing-nowords": ("Not used.", "The pad without handwriting."),
    "storefront": ("Shipped, labelled as a stand-in.", "The front door. A real practice must replace it with a real photograph."),
}


def src_items(names):
    out = []
    for n in names:
        f = f"assets/img/src/rejected/{n}.png" if (ROOT / f"assets/img/src/rejected/{n}.png").exists() else f"assets/img/src/{n}.png"
        t, c = SRC[n]
        out.append(item(f, t, c, cls="photo"))
    return out


# the curator's strongest frames: they lead the review chapter and come first in their own groups
FEATURED = [".ops/qa/shots/design/hero2-00-asbuilt-1440.png", ".ops/qa/shots/design/hero2-L-1440.png",
            ".ops/qa/shots/evidence/sheets/final2-top-defects.png",
            ".ops/qa/shots/a11y2/text-spacing-1440-openings-over-photo.png", ".ops/qa/shots/a11y2/text-spacing-1440-with-proposed-fix.png",
            ".ops/qa/shots/coldread2/zoom/three-standing.png", ".ops/qa/shots/final/cmp-1440x900-day.jpg"]


def evidence(group=None, chapter=None, only=None):
    path = OUT / "evidence.json"
    if not path.exists():
        return []
    items = json.loads(path.read_text())
    if only:
        items = sorted((it for it in items if it["src"] in only), key=lambda it: only.index(it["src"]))
    else:
        items = sorted(items, key=lambda it: it["src"] not in FEATURED)   # stable: featured first, the curator's order otherwise
    out = []
    for it in items:
        if group and it["group"] != group:
            continue
        if chapter and it["chapter"] != chapter:
            continue
        cap = it["caption"] + (" Earlier build." if it.get("earlier_build") and "earlier build" not in it["caption"].lower() else "")
        d = item(it["src"], it["title"].rstrip(".") + ".", cap, in_repo=False)
        if it["kind"] == "video":
            d.update(kind="video", poster_s=it.get("poster_s", 1))
        out.append(d)
    return out


# ------------------------------------------------------------------------------------------------ words
def role(name, path):
    return f'<a href="{AA}{path}">{esc(name)}</a>'


R = {
    "trend": role("Trend Researcher", "product/product-trend-researcher.md"),
    "ux": role("UX Researcher", "design/design-ux-researcher.md"),
    "ui": role("UI Designer", "design/design-ui-designer.md"),
    "brand": role("Brand Guardian", "design/design-brand-guardian.md"),
    "whimsy": role("Whimsy Injector", "design/design-whimsy-injector.md"),
    "prompt": role("Image Prompt Engineer", "design/design-image-prompt-engineer.md"),
    "inclusive": role("Inclusive Visuals Specialist", "design/design-inclusive-visuals-specialist.md"),
    "content": role("Content Creator", "marketing/marketing-content-creator.md"),
    "fe": role("Frontend Developer", "engineering/engineering-frontend-developer.md"),
    "persona": role("Persona Walkthrough Specialist", "design/design-persona-walkthrough.md"),
    "legal": role("Legal Compliance Checker", "support/support-legal-compliance-checker.md"),
    "seo": role("SEO Specialist", "marketing/marketing-seo-specialist.md"),
    "a11y": role("Accessibility Auditor", "testing/testing-accessibility-auditor.md"),
    "code": role("Code Reviewer", "engineering/engineering-code-reviewer.md"),
    "evidence": role("Evidence Collector", "testing/testing-evidence-collector.md"),
    "perf": role("Performance Benchmarker", "testing/testing-performance-benchmarker.md"),
    "story": role("Visual Storyteller", "design/design-visual-storyteller.md"),
    "writer": role("Technical Writer", "engineering/engineering-technical-writer.md"),
}
doc = lambda p, label=None: f'<a href="{REPO}{p}">{esc(label or p)}</a>'
live = lambda p, label: f'<a href="{rel(p)}">{esc(label)}</a>'

REPORTS = [  # file, role key, time, finding
    ("brand-voice", "brand", "10:31 pm", "The page passes the mechanical rules and speaks as the dentist throughout. Two British phrases out, one missing designation in, fifteen line edits."),
    ("persona-walkthrough", "persona", "10:46 pm", "Two invented patients, one on a phone at 9:40 at night and one on a laptop mid-afternoon, with a five-second test and ranked changes. It calls itself a hypothesis to test, not research."),
    ("engines", "fe", "11:07 pm", "Chrome, Firefox and WebKit at five widths, by pointer, keyboard and touch, with no script, reduced motion, page zoom and forced colours."),
    ("compliance", "legal", "11:08 pm", "Read the Texas dental advertising rules (22 TAC 108) on the state's own viewer. Fee dates, minimum-fee wording, the owner line, and the question that reshaped the hero: may $195 be larger than “General Dentist”?"),
    ("seo", "seo", "11:12 pm", "Title, structured data and local search, then a re-check after the page changed under it."),
    ("code-review", "code", "11:13 pm", "3 blockers, 10 should-fix and 17 could-fix; 24 fixed while the review was still running."),
    ("design-review", "ui", "11:24 pm", "Measured every section against the proofs, then designed the lock-up that set the price and GENERAL DENTIST at one size."),
    ("evidence", "evidence", "11:27 pm", "Three capture passes at six widths while the page kept changing: 1 blocker, 7 should-fix, 11 could-fix, and the team's own “looks generated” checklist, item by item."),
    ("performance", None, "11:50 pm", "Load measured on a slow phone connection with a 4x slower processor, through a compressing server: the largest image at 1.64 seconds and no layout shift. The Performance Benchmarker recorded the first traces before its model ran out of credits; the lead finished."),
    ("cold-read", "story", "12:07 am", "Looked first and read the brief after. The design passes; 17 visible placeholders, a repeated portrait and repeated phrases gave it away. Fixed within the hour."),
    ("accessibility", "a11y", "12:29 am", "WCAG 2.2 AA: five should-fix problems found, all fixed, then re-checked by the same auditor. Lighthouse accessibility 100."),
    ("docs-reconcile", "writer", "12:25 am", "Brought the copy deck and the specs in line with the build and found ten suspected page errors; eight were fixed."),
    ("final-verification", "fe", "1:37 am", "108 loads across three engines, nine sizes, day and night: clean. Found that Firefox fakes bold on the fallback fonts, and fixed it."),
]

ROUNDS = [
    ("6:18 pm", "The prompt.", "One message: research real dental practices, current motion, a young dentist with energy, generated images, a team, and not identifiable as AI-generated."),
    ("6:37 pm", "Research starts.", "Live practice sites opened and measured in a browser; the market and the audience read in parallel."),
    ("7:15 pm", "Direction.", "Teeth are for biting. A palette nobody holds, a type that can move, five motion mechanisms, a never list."),
    ("8:27 pm", "Pictures reviewed.", "Every generated frame checked for representation and for tells; four sent back."),
    ("10:20 pm", "Built, and seven reviews at once.", "Brand voice, persona, engines, compliance, SEO, code review and design review, all on the live page."),
    ("11:05 pm", "Rounds 1 to 3.", "Voice, wording, fee disclosures, a phone header that overflowed at night, the first-visit discs, links on the price chips."),
    ("11:30 pm", "The model runs out.", "Claude Fable 5.2 hits its usage limit and every agent stops mid-task. The session moves to Claude Opus 5.5; fresh agents pick up from the files the others left."),
    ("11:43 pm", "Rounds 4 and 5: the hero.", "$195 and GENERAL DENTIST set at one size in one block. Old hero rules removed and 24 boxes measured unchanged at 13 sizes. Fallback fonts matched to the new type."),
    ("11:51 pm", "Round 6.", "A tighter crop of the hero photograph for phones: 20 kB instead of 35 kB, same framing."),
    ("12:10 am", "Round 7: the cold read.", "No more bracket placeholders, the third portrait out, the repeated list and buttons cut."),
    ("12:19 am", "Round 8: accessibility.", "Text spacing, forced colours, the demo notice, 400% zoom, the food strip's focus ring."),
    ("12:29 am", "Rounds 9 and 10.", "Firefox's faked bold, eight page errors from the docs pass, a keyboard regression in the cookie."),
    ("1:10 am", "Rounds 11 and 12.", "A shift when the script runs late on a phone, image sizes for tablets, the insurance switch at 320 wide."),
    ("1:37 am", "Verified.", "108 loads clean in three engines. Published to GitHub Pages the next morning."),
]


def page():
    research_findings = [
        ("14 of 19", "sell calm: cream and pastel self-care, spa, or dark luxury."),
        ("8 of 19", "sit on the same warm cream. None runs a saturated colour as the page's ground."),
        ("10 of 19", "pair a serif headline with a grotesk. The median hero headline is 71px at 1440 wide."),
        ("15 of 19", "use pill buttons; 14 of 19 use no shadows on cards."),
        ("9 of 15", "of the sites probed have no scroll animation at all."),
        ("5 of 19", "show a price on the home page. None puts the first visit's price and length beside the booking button."),
    ]
    none_do = [
        "A high-energy general practice. The loud sites are aligner retailers and a celebrity cosmetic brand.",
        "A saturated ground. Orange and tangerine, true yellow and bright green are unowned.",
        "The dentist speaking, in the first person, in the first screen.",
        "Live information in the hero: next openings, a first-visit price, an open-now state.",
        "Type that plays, or small, fast, physical interaction as the brand's energy.",
        "Anything that acknowledges the time of day.",
    ]
    never = ["Stock smiles", "Tooth icons or tooth logos", "Blue or teal", "Gradients as decoration", "Glass panels", "Drop shadows",
             "Star rows", "Emoji", "A centred hero with two pills", "“Reimagined”", "Invented numbers"]
    taco_prompt = (ROOT / "assets/img/prompts/bite-taco.txt").read_text().strip()

    chapters = []
    ch = lambda n, id_, time, title, roles, body: chapters.append((n, id_, time, title, roles, body))

    ch("01", "research", "6:18 to 7:25 pm", "Read the market. Measure the field.", f"{R['trend']}, {R['ux']}, {R['ui']}", f"""
<p class="intro">Before anything was drawn, three agents read the market and the audience, and one of them opened 19 live dental practice sites in a browser and measured them: colours, type sizes, buttons, motion, and where the price and the booking button sit.</p>
<dl class="facts">{''.join(f'<div><dt>{esc(a)}</dt><dd>{esc(b)}</dd></div>' for a, b in research_findings)}</dl>
<h3>What none of the 19 do</h3>
<ol class="list">{''.join(f'<li>{esc(x)}</li>' for x in none_do)}</ol>
<blockquote class="pull">“The gap that follows: a general practice that looks as confident as the aligner retailers past the first screen, in a colour family nobody holds, with the dentist’s face and first-person voice in the hero.”<cite>{doc('research/01b-visual-capture.md', 'research/01b, Part 5')}</cite></blockquote>
<p class="note">The team also took 85 screenshots of those sites. They are not published: the sites belong to real practices. The measurements are in {doc('research/01b-visual-capture.md', 'the visual capture')}; the market and audience reading in {doc('research/01-dental-inspiration.md', 'research/01')} and {doc('research/02-audience-and-conversion.md', 'research/02')}; motion techniques in {doc('research/03-motion-techniques.md', 'research/03')}.</p>
""")

    ch("02", "direction", "7:15 to 8:30 pm", "One idea: teeth are for biting.", f"{R['brand']}, {R['ui']}, {R['content']}", f"""
<p class="intro">“Dental sites show smiles, rooms, or nothing dental at all. None shows what teeth are for.” From that came one owned device, the bite, a scalloped notch out of a corner. It crops the photographs, it is the subject of the still lifes, and it is what happens when you press a button.</p>
<div class="never"><h3>Never</h3><p>{' · '.join(esc(x) for x in never)}</p></div>
<h3>Colour: four palettes, then the photographs decided</h3>
<p>Four palettes were set on identical components and judged on screen. Tangerine and lime won. When the generated photographs came back a few steps off the asked-for colours, the team stopped fighting them: the page's ground was sampled from the hero portrait's backdrop and the lime from the apple portrait's, so the two photographs bleed into their fields with no seam. {live('brand/specimens/colour.html', 'Open the colour specimen')}.</p>
{gallery(colour_items(), show=6)}
<h3>Type: six display faces, four text faces</h3>
<p>Each candidate set with the real headline at poster size. Anybody won for display because it held the whole first line and has width and weight axes to move on; Public Sans for text. {live('brand/specimens/type.html', 'Open the type specimen')}.</p>
{gallery(type_items(), show=6)}
<p class="note">The name, the voice and the claims rules are in {doc('brand/01-brand-core.md', 'the brand core')} (the name was checked against web and US provider-registry searches; that is not a trademark clearance). The visual system is {doc('brand/02-visual-system.md', 'brand/02')}; the brief that started it, {doc('brand/00-creative-direction.md', 'brand/00')}; every word on the page, {doc('content/copy.md', 'the copy deck')}.</p>
""")

    ch("03", "pictures", "7:30 to 8:30 pm", "Every photograph directed. Four sent back.", f"{R['prompt']}, {R['inclusive']}", f"""
<p class="intro">Each frame had its own written art direction, with the palette as tokens that the generator received as exact colours. The prompt asked for ChatGPT image generation through Codex. Reference images kept the dentist's face the same from frame to frame. Then every frame was reviewed for representation and for the tells of generated images, and four went back.</p>
<figure class="prompt"><figcaption>The taco's art direction, as sent ({doc('assets/img/prompts/bite-taco.txt', 'bite-taco.txt')})</figcaption><blockquote>{esc(taco_prompt)}</blockquote></figure>
<h3>Rejected, and what replaced them</h3>
{gallery(src_items(["paloma-hero-b", "paloma-hero", "bite-taco-v1", "bite-taco", "paloma-drawing-v1", "paloma-drawing", "comfort-headphones-v1", "comfort-headphones"]))}
<h3>Tests, and everything else that was made</h3>
{gallery(src_items(["test-apple", "test-portrait", "paloma-apple", "paloma-listening", "paloma-laughing", "bite-apple", "bite-toast", "bite-corn", "bite-peach", "the-drawing", "the-drawing-nowords", "storefront"]))}
<h3>Where each one sits</h3>
<p>Placement proofs: crop, notch corner and caption for every photograph, at desktop and phone width. {live('brand/specimens/images.html', 'Open the image specimen')}.</p>
{gallery(placement_items(), show=6)}
<p class="note">Verdicts and alt text: {doc('research/04-inclusive-visuals-review.md', 'the inclusive visuals review')}. Every prompt: {doc('assets/img/prompts/README.md', 'assets/img/prompts')}. Placement rules: {doc('brand/04-image-placement.md', 'brand/04')}.</p>
""")

    proto = "".join(f"<h3>{esc(t)}</h3><p>{esc(d)}</p>{gallery(proto_items(p), show=6)}" for p, t, d in PROTO_GROUPS)
    ch("04", "proofs", "8:00 to 10:00 pm", "Proved in the browser before it was built.", f"{R['ui']}, {R['fe']}, {R['whimsy']}", f"""
<p class="intro">The designer drew every section as a proof in the browser at four widths. The developer prototyped the risky parts in Chromium, Firefox and WebKit before a line of the page existed: which mask technique draws the bite without a hairline, what the bite costs on a phone, how type stretches on a variable axis, and what everything looks like with no script and with reduced motion. Both prototypes still run: {live('prototypes/bite.html', 'the bite')} and {live('prototypes/interaction.html', 'the interaction spec')}.</p>
<h3>Design proofs</h3>
{gallery(proof_items(), show=6)}
{proto}
""")

    ch("05", "motion", "Specified 7:34 pm", "Five mechanisms, and a stop button.", f"{R['whimsy']}, {R['fe']}", f"""
<p class="intro">Bite, chew, open wide, ticker, accordion: nothing else moves. Prices never animate. The Comfort section never moves. A “Stop the motion” control stills the page and remembers it, and the system's reduced-motion setting does the same. The recordings below were made by the Whimsy Injector during its review, on builds before the final hero; its written review stopped when its model ran out of credits. The rules are in {doc('brand/03-interaction-spec.md', 'the interaction spec')}.</p>
{gallery(evidence(chapter="motion"), wide=True)}
""")

    ch("06", "build", "10:00 pm onward", "One page, three files, no framework.", f"Lead session, {R['fe']}", f"""
<p class="intro">One HTML file, one stylesheet, one script. A generator made 147 image files in three formats from the sources, and a tighter crop of the hero for phones. Nine fallback faces were measured against the display font, one for each width it rests at, so a slow font moves the hero 2 pixels instead of 100; the final pass found Firefox faking bold on them and that was fixed too. The lead's own review shots show the page changing.</p>
{gallery(evidence(group="build-shots"), show=6)}
""")

    blocks = []
    for f, rk, time, finding in REPORTS:
        who = R[rk] if rk else "Lead session, after the Performance Benchmarker"
        items = evidence(group=f)
        blocks.append(f"""<div class="report">
  <div class="report__meta"><h3>{doc(f'.ops/qa/{f}.md', f)}</h3><p>{who}</p><p class="time">{esc(time)}</p></div>
  <div class="report__body"><p>{esc(finding)}</p>{gallery(items, show=6) if items else ''}</div>
</div>""")
    ch("07", "review", "10:20 pm to 1:37 am", "Thirteen reviews, while the page kept changing.", "Eleven roles and the lead", f"""
<p class="intro">Reviews ran in parallel on the live page, and the page changed under them: one review was rewritten mid-way because its first findings were being fixed while it was still testing. Every reviewer wrote what it could not check as plainly as what it found. The screenshots below are a selection from about 2,000, chosen and captioned by a {R['story']}; the full reports are linked.</p>
<h3>Seven frames that tell it</h3>
{gallery(evidence(only=FEATURED))}
{''.join(blocks)}
""")

    ch("08", "rounds", "6:18 pm to 1:37 am", "Twelve rounds of fixes.", "Everyone", f"""
<ol class="timeline">{''.join(f'<li><span class="t">{esc(t)}</span><div><b>{esc(a)}</b> {esc(b)}</div></li>' for t, a, b in ROUNDS)}</ol>
<p class="note">Every round, with what changed and why, is in {doc('.ops/session.jsonl', 'the session log')}.</p>
""")

    ch("09", "files", "", "All of it.", "", f"""
<ul class="files">
  <li>{doc('research/', 'research/')}<span>The market, the audience, 19 sites measured, motion techniques, the image review.</span></li>
  <li>{doc('brand/', 'brand/')}<span>Creative direction, brand core, visual system, interaction spec, image placement, and 79 specimens.</span></li>
  <li>{doc('content/copy.md', 'content/copy.md')}<span>Every word on the page, with what a real practice must confirm.</span></li>
  <li>{doc('assets/img/prompts/', 'assets/img/prompts/')}<span>The art direction for every generated photograph.</span></li>
  <li>{doc('prototypes/', 'prototypes/')}<span>Two working prototypes and 182 screenshots across three engines.</span></li>
  <li>{doc('.ops/qa/', '.ops/qa/')}<span>The thirteen review reports.</span></li>
  <li>{doc('tools/', 'tools/')}<span>The image, bite and route generators.</span></li>
</ul>
""")

    nav = "".join(f'<li><a href="#{i}"><span>{n}</span>{esc(t)}</a></li>' for n, i, _, t, _, _ in chapters)
    body = "".join(f"""
<section class="ch" id="{i}" aria-labelledby="{i}-h">
  <div class="wrap">
    <header class="ch__head"><span class="ch__n">{n}</span><h2 id="{i}-h">{esc(t)}</h2>
      <p class="ch__meta">{f'<span>{esc(time)}</span>' if time else ''}{f'<span>{roles}</span>' if roles else ''}</p></header>
    {b}
  </div>
</section>""" for n, i, time, t, roles, b in chapters)

    stats = [("7½ hours", "from the prompt to a verified page"), ("18", "Agency Agents roles"), ("2,400+", "screenshots and recordings"),
             ("13", "review reports"), ("12", "rounds of fixes"), ("3", "browser engines, 9 screen sizes")]
    return TEMPLATE.replace("{{STATS}}", "".join(f'<div><dt>{esc(a)}</dt><dd>{esc(b)}</dd></div>' for a, b in stats)) \
                   .replace("{{NAV}}", nav).replace("{{BODY}}", body)


TEMPLATE = (Path(__file__).parent / "route-template.html").read_text()

if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    text = page()
    (OUT / "index.html").write_text(text)
    removed = 0
    if not ONLY_HTML:   # files from earlier runs that the page no longer uses
        for d in ("t", "l", "v"):
            for f in (OUT / d).glob("*") if (OUT / d).exists() else []:
                if f"{d}/{f.name}" not in text:
                    f.unlink(); removed += 1
    n = len(list((OUT / "t").glob("*.webp"))) if (OUT / "t").exists() else 0
    print(f"wrote {OUT.relative_to(ROOT)}/index.html; {n} thumbnails; {removed} unused files removed")
