# Image prompts: shot list, character, checks

Twelve images for the Feast Dental demo page, one plain-text prompt file each. There are thirteen files because `the-drawing` has a no-words fallback. They are written for `tools/gen-image.sh`, which sends one prompt file, plus optional reference images, to the image generator.

`test-apple.txt` and `test-portrait.txt` are the two look tests. Their lighting language is reused here. The casting and scrub colour in `test-portrait.txt` are superseded by the character block below.

Status, 2026-11-09, first written: none of the twelve has been generated. What this file says the generator will do is a prediction from the two test images, except where a measurement is given. Updated to match the build, 2026-11-09: all twelve have been generated, plus a dentist frame this brief does not list, `paloma-listening`; which files exist and which the page uses is in "Reconciled with the build" at the end.

The dentist is fictional and these pictures are stand-ins for a demo. `research/02-audience-and-conversion.md` F12 is about real photographs of the real dentist and place, so a live page needs those.

## Running them

```sh
# from the project root: write substituted copies to .tmp/prompts (git-ignored)
mkdir -p .tmp/prompts
for f in assets/img/prompts/*.txt; do
  sed -e 's/{{TANGERINE}}/#FF5B1F/g' -e 's/{{COUNTER}}/#CCFF33/g' \
      -e 's/{{PAPER}}/#FFF4E0/g' -e 's/{{INK}}/#1D1410/g' "$f" > ".tmp/prompts/$(basename "$f")"
done
grep -l '{{' .tmp/prompts/*.txt    # must print nothing

tools/gen-image.sh paloma-hero .tmp/prompts/paloma-hero.txt
# approve the hero against the checks below, then:
for n in paloma-apple paloma-drawing paloma-laughing; do
  tools/gen-image.sh $n .tmp/prompts/$n.txt assets/img/src/paloma-hero.png
done
```

- The substitution loop was run on these files (writing to a scratch folder) and left no tokens. The generator lines have not been run.
- The hex values are the provisional ones from `assets/css/tokens.css:11-14`. Swap in the final values before generating. (Updated to match the build, 2026-11-09: `tokens.css` has been deleted. The final values are in `assets/css/page.css`: `--ground` `#f9530a`, `--paper` `#fff4e3`, `--ink` `#26120b`, `--counter` `#cffb43`.)
- **Hero first.** The other three dentist frames take the approved hero as their reference image and carry a line saying the reference is the same woman. If the hero is replaced later, regenerate those three.
- Everything else needs no reference and can run side by side.
- Each token sits beside a colour word (tangerine orange, sharp lime, warm cream, near-black ink) and the empty-space sentences repeat it ("empty flat lime"). If a colour changes hue and not only value, change the words too: `grep -n 'lime\|tangerine\|orange\|cream' assets/img/prompts/*.txt`.
- The toast and the peach are on the counter-colour because they separate well from a lime. If the counter-colour changes, check that again.

## Shot list

| File | Page section it is for | Aspect | Backdrop | Stays empty | Hero as reference |
|---|---|---|---|---|---|
| `paloma-hero` | Hero | 4:5 | `{{TANGERINE}}` | left third | it is the reference |
| `paloma-apple` | Meet the dentist | 4:5 | `{{COUNTER}}` | right third | yes |
| `paloma-drawing` | First visit, step 3 "A written plan". Second choice: Meet the dentist | 3:2 | treatment room in `{{PAPER}}` and ink, one `{{TANGERINE}}` clipboard | right third | yes |
| `paloma-laughing` | "No reviews yet" promises. Second choice: closing band | 4:5 | `{{PAPER}}` | left third | yes |
| `bite-apple` | Services row crop. Also first visit, step 2 | 4:5 | `{{TANGERINE}}` | top third, right third | no |
| `bite-toast` | Services row crop | 4:5 | `{{COUNTER}}` | top third, right third | no |
| `bite-corn` | Services, between the two lanes | 3:2 | `{{PAPER}}` | right third, top strip | no |
| `bite-peach` | Closing band. Also a services row crop | 4:5 | `{{COUNTER}}` | top third, right third | no |
| `bite-taco` | Services row crop. Also Find us | 4:5 | `{{TANGERINE}}` | top third, right third | no |
| `comfort-headphones` | Comfort | 3:2 | `{{PAPER}}` | right third, top strip | no |
| `the-drawing`, fallback `the-drawing-nowords` | Cost and insurance | 4:5 | `{{PAPER}}` | top strip, right strip | no |
| `storefront` | Find us and hours | 3:2 | wall `{{PAPER}}`, door frame `{{TANGERINE}}` | right third | no |

Section names follow "Page outline" in `brand/00-creative-direction.md`. The placements are a proposal; the layout decides.

Two cautions when placing them:

- Do not set a food beside a service so that it reads as cause and effect (a taco next to "Emergency visit"). No food is good or bad (`brand/01-brand-core.md:257`).
- One static photo notch per viewport (`brand/03-interaction-spec.md:38`).

## Character block

Line 2 of all four `paloma-*` files, identical in each. Change it in all four or not at all.

```
Character (fictional): Latina woman, 32, light brown skin, dark eyes, strong eyebrows, a few freckles, faint laugh lines. Dark brown wavy hair cut blunt at the collarbone. Slightly oversized black acetate glasses. Thin gold hoop earrings, plain watch, short bare nails, no rings. Fitted long-sleeved scrub top and trousers in near-black ink ({{INK}}), sleeves pushed to the elbow. Unretouched skin with pores; natural off-white teeth, one lower tooth slightly turned.
```

Left out of the block on purpose, and set per frame: hair down or in a low knot, where the marker is (chest pocket in the hero and the laughing frame, in her hand in the drawing frame), expression and pose.

## Acceptance checks

Look at each result at 100% and again at the size it will run on the page.

### Every image

- **Aspect.** 4:5 came back as 1122 x 1402 in both tests. 3:2 has not been tested. Check with `sips -g pixelWidth -g pixelHeight`. Never stretch a wrong ratio.
- **Flash.** One hard shadow, falling down and to the right, fully inside the frame. No second shadow, no soft studio wrap, no glow, no blurred background.
- **Backdrop flatness.** Sample the corners that should be backdrop:

  ```sh
  python3 - assets/img/src/paloma-hero.png <<'EOF'
  import sys
  from PIL import Image
  im = Image.open(sys.argv[1]).convert('RGB'); W, H = im.size
  spots = {'top-left': (.06, .05), 'top-centre': (.5, .05), 'top-right': (.94, .05), 'bottom-left': (.06, .95), 'bottom-right': (.94, .95)}
  for name, (x, y) in spots.items():
      box = (int(x*W) - 20, int(y*H) - 20, int(x*W) + 20, int(y*H) + 20)
      print(f'{name:13} #%02X%02X%02X' % im.resize((1, 1), Image.BOX, box).getpixel((0, 0)))
  EOF
  ```

  Measured with this on the tests: the apple held `#F94603` to within 3 levels at all five spots. The portrait ran from `#F04D12` at top centre to `#D53607` at bottom left, 27 levels in the red channel, and that shows as a vignette. Working thresholds, which are my judgement and not tested on the page: a spread up to 10 levels passes; 10 to 25, flatten it in post or use the picture as a card; over 25, regenerate.
- **Backdrop colour.** It will not equal the token. Both tests asked for `#FF5B1F` and came back deeper and redder (`#F94603`; `#F04D12` at the portrait's brightest). So a photo's backdrop will not melt into a CSS ground set to the token. Either run photos as cards with visible edges, or sample the approved hero and decide which side moves.
- **Texture.** Fine grain visible at 100%. Real surface detail. Nothing waxy, nothing with rendered symmetry.
- **No text, logo or watermark.** Zoom into pockets, the marker, foil, headphones, door glass.
- **Empty zone and top-right square** are clean backdrop (see crop-safe zones).

Regenerate if: wrong ratio; a gradient or vignette over the threshold; any lettering that was not asked for; the look reads as a render or an illustration.

### Dentist frames (`paloma-*`)

- **Same woman.** Put the frame beside the approved hero with the faces at the same size. Face shape, eyebrows, freckles, hair length and cut, glasses shape, hoops all match. "Similar" fails.
- **Hands.** Two hands. Five fingers on each visible hand, none fused, none extra. Short bare nails, no rings. Natural wrists.
- **Teeth**, where they show (the laughing frame): no brighter than the whites of her eyes, a little uneven, a believable number, one row. The turned lower tooth is welcome and not required. Anything that reads as a gap, a chip or damage fails.
- **Skin.** Pores, freckles, slight flash shine. No smoothing, no beauty retouching.
- **Glasses.** Both lenses, a symmetrical frame, arms going behind the ears, eyes visible with no glare over them and no warping behind the lens.
- **Clothes.** Near-black scrub top, long sleeves pushed up, forearms bare, no second layer in another colour. No name, embroidery, badge, lanyard, stethoscope, mask or gloves. At most one marker in the pocket, with no label.
- **She is a clinician, not a model.** Not glamorised, nothing posed like an advert.
- `paloma-hero`: eyes on the lens, head level, lips closed with a grin starting, arms loose, hands empty, weight on one foot. Fails on a full toothy smile, a tilted head, crossed arms, hands on hips, or anything held.
- `paloma-apple`: mouth closed, not chewing, eyebrows up. One apple, its bite facing the camera, in front of the dark top so it reads. The backdrop is the counter-colour, not the hero's tangerine.
- `paloma-drawing`: nobody else in the frame. No words on the pad. The marker is held the way a hand holds a marker. The room is cream and ink and the clipboard is the only bright thing. No instrument points at the camera.
- `paloma-laughing`: a real laugh at something off camera, both hands in pockets.

Regenerate if: the face is not the hero's; any hand is wrong; teeth are veneer-white, too many or damaged; text or a badge appears; a stethoscope, mask or tooth model appears.

### Bitten food (`bite-*`)

- **One object, one bite.** The corn has one row of bites. The bite is on the upper right, the same corner as the page's notch.
- **Eaten, not broken.** A rounded scoop with a softly scalloped edge. No cracks, shards or splinters, no deep single-tooth gouges, nothing that looks snapped off.
- **Nothing pale on the paper.** No white or cream fragments beside the bite, and no loose corn kernels: both read as teeth. The toast may have up to three toasted-brown crumbs (`brand/03-interaction-spec.md:34`).
- **Nothing red or pink** in or near a bite: yellow peach flesh, clear juice, green salsa.
- **Looks good to eat.** Real surface: speckle on the apple, fuzz on the peach, open crumb in the toast, uneven kernels, a soft tortilla. No plastic shine, no sprayed water beads.
- **Nothing cold or hard.** No ice, frost or condensation. The taco shell is soft.
- **Nothing else.** No plate, cutlery, hands or second item. The taco's foil is the only prop and carries no print.
- **Position.** Object in the lower left with its shadow inside the frame. Top third and right third empty.

Regenerate if: the bite reads as damage; anything red, pink or pale sits near the bite; the food looks plastic; a plate, hand or text appears; the object sits in the centre.

### `comfort-headphones`

- No bite anywhere. No saturated colour.
- The shadow is softer and lighter than in the other frames but still falls down and to the right.
- No logo or marking on the headphones. No cable.
- The blanket reads as a blanket. Rolled towels, candles, plants or stones would turn it into a spa, which the brand is not.

Regenerate if: a logo appears; it reads as a spa or a catalogue shot; any bright colour appears.

### `the-drawing`

- The lettering reads exactly `filling` and `$190`, once each, and nothing else is written anywhere. Legible when the image is 400 px wide.
- One tooth, in cross-section, drawn by a hand with a marker: uneven line weight, slightly imperfect. One circle, one arrow.
- Not a printed diagram, not clip art, no face on the tooth. No red ink. The marker has no label.

Regenerate if: a letter or digit is wrong; extra words or numbers appear; the drawing looks printed. After two failures on the lettering, switch to `the-drawing-nowords` and put the words in the caption.

The price is baked into the picture. It has to equal the filling price on the page (placeholder: from $190, `brand/01-brand-core.md:195`). If that price changes, regenerate or use the no-words file. Repeat the words in the alt text.

### `storefront`

- The number reads exactly `2217`, once.
- No other lettering anywhere. Zoom into the glass, the wall and the sidewalk.
- The door frame is the only strong colour. The sky is a thin strip and the picture does not read as blue.
- No people, no cars. Verticals are straight. It looks like an ordinary real building, not a visualisation.

Regenerate if: the number is wrong or repeated; any sign, poster or window lettering appears; people or cars appear.

It is a placeholder for the real building and should be labelled as one wherever the demo is shown.

## Regenerate tweaks

Change one thing per attempt. Each line below is text to add to the prompt, or a swap.

| Failure | Tweak |
|---|---|
| Fingers wrong in the hero | Swap "arms loose, hands empty" for "one thumb hooked in a trouser pocket, the other hand relaxed at her side". |
| Fingers wrong on the apple | Add "The apple rests in her open palm, held from underneath." |
| Teeth too white, too even or too many | Add "Her teeth are ordinary: slightly off-white, a little uneven, not veneers, no brighter than the whites of her eyes." If it still fails, swap "mid-laugh" for "laughing with her mouth nearly closed". |
| Skin too smooth | Add "Visible pores and fine lines at the eyes. No skin smoothing." |
| Text, logo or badge on the scrubs | Add "The scrub top is completely plain. Nothing is printed, stitched, pinned or clipped on it." and delete the marker sentence. |
| Stethoscope, mask or lanyard | Add "Nothing around her neck." |
| Short sleeves, or an undershirt in another colour | Add "One garment: a long-sleeved top, sleeves bunched at the elbow, forearms bare." |
| Glare on the glasses | Add "No reflections on the lenses." |
| Face drifts from the hero | Pass a tight face crop of the hero as a second reference and add "The same person as the reference, not a similar-looking woman." |
| Backdrop keeps the reference's tangerine | Add "The backdrop is lime, not orange." (or cream). |
| Gradient or vignette on the backdrop | Add "The backdrop is lit evenly from corner to corner, the same colour at the edges as in the middle." Or flatten it in post. |
| Subject centred, empty side missing | Add "Her whole body is inside the right-hand 60% of the frame." For objects: "Nothing but backdrop in the right third." A flat backdrop can also be widened in post with a sampled fill plus grain. |
| Bite looks broken off | Add "The bite is shallow and round, like a scoop, with a smooth edge." |
| Bite shows deep tooth grooves | Add "No separate tooth grooves in the bite." |
| Food looks plastic | Add "Ordinary shop-bought food with small blemishes, matte where it is dry." and delete "glossy" or "wet sheen". |
| Dentist cliches in the drawing frame | Add "The only tools in the picture are a pad and a marker. No tooth model, mirror, drill or tray." |
| A patient appears in the drawing frame | Delete "the edge of a dark dental chair" and add "She is alone in the room." |
| Lettering wrong on `the-drawing` | Two more attempts, then `the-drawing-nowords`. |
| Extra signage on the storefront | Add "The wall, the glass and the door are completely blank apart from the number." |
| `2217` wrong | Swap the number sentence for "four separate dark metal digits: 2, 2, 1, 7". |
| Lighting drifts across the still lifes | Pass the approved `bite-apple` as a reference and add "The attached image is a lighting and colour reference only. Do not copy its subject." |

Adding a line can take a file over 220 words. Cut a line that is already working.

## Crop-safe zones

Positions are percentages of the frame: x from the left edge, y from the top. They are what the prompts aim for. Measure the result against them before building a crop on it.

**The notch.** A photo's notch is a square in the top-right corner whose side is 30% of the frame's width (`assets/css/tokens.css:32`, provisional; updated to match the build, 2026-11-09: that file is deleted, and the built notch is a tile 25% of the frame's width, `.frame img` in `assets/css/page.css`, on two photographs only). On a 4:5 frame that is x 70 to 100, y 0 to 24. On a 3:2 frame it is x 70 to 100, y 0 to 45. Treat the whole square as lost. It never touches her face, hair or hands (`brand/01-brand-core.md:136`). Every prompt keeps that corner as backdrop, or as plain wall in the two room and street frames.

| Image | Subject stays inside | Stays empty | Desktop | Phone crop that holds |
|---|---|---|---|---|
| `paloma-hero` | body x 40 to 88. Face centre x 58 to 64, y 20 to 28. Hair top below y 7 | x 0 to 36, full height | Full frame, with the headline over or beside the left 36% | 9:16 column, x 27 to 97 (`object-position: 91% 0`) |
| `paloma-laughing` | as the hero | x 0 to 36 | Full frame | 9:16 column, x 27 to 97 |
| `paloma-apple` | body x 12 to 62. Face centre x 36 to 42, y 18 to 26. Apple inside x 20 to 55 | x 66 to 100 | Full frame | 9:16 column, x 5 to 75 (`object-position: 17% 0`) |
| `paloma-drawing` | her and the pad x 6 to 62. Head below y 8 | x 67 to 100 | Full frame | Square, x 0 to 67 (`object-position: 0 50%`) |
| `bite-apple`, `bite-toast`, `bite-peach`, `bite-taco` | object and shadow x 5 to 75, y 32 to 92 | y 0 to 28 across the width; x 78 to 100 down the height | Full frame, or a 3:5 row crop x 0 to 75 | Square, y 20 to 100 (`object-position: 50% 100%`) |
| `bite-corn` | x 5 to 64, y 42 to 92 | x 67 to 100; y 0 to 35 | Full frame | Square, x 0 to 67 |
| `comfort-headphones` | x 6 to 62, y 32 to 92 | x 67 to 100; y 0 to 28 | Full frame | Square, x 0 to 67 |
| `the-drawing` | pad x 5 to 72, y 22 to 96 | y 0 to 18; x 76 to 100 | Full frame | Full frame only. A tighter crop cuts the pad |
| `storefront` | door x 25 to 45; number x 47 to 60, y 35 to 55 | x 67 to 100 | Full frame | Square, x 0 to 67 |

Notes:

- The `object-position` values are worked out from the crop windows (start of the window divided by the hidden share). They assume `object-fit: cover` and the box ratio named in the row.
- A cropped box gets its own notch, 30% of the box's width. On the hero's 9:16 phone crop that is x 76 to 97, y 0 to 17 of the original: clear of her hair if her face centre is no further right than x 64. On a square crop of a 3:2 frame it is x 47 to 67, y 0 to 30 of the original, which is why the landscape subjects sit low and to the left.
- The hero and the laughing frame stand on the right, so their top-left corner is the safer place for a notch. The top-right works only if the hair-top and face-centre numbers above hold.
- If the hero needs more empty ground than the frame has, widen the canvas to the left with a fill sampled beside the edge and add grain. This only works on a backdrop that passed the flatness check.

## Alt text

Plain description, no jokes. Alt text is not visible copy, so it does not spend any of the page's three bite references (`brand/01-brand-core.md` Part 5), but it stays literal.

| Image | Alt text |
|---|---|
| `paloma-hero` | Dr. Paloma Krenek, a woman in her early thirties with dark wavy hair to her collarbone and dark-rimmed glasses, stands in a dark scrub top with the sleeves pushed up, looking straight at the camera and starting to grin. |
| `paloma-apple` | Dr. Paloma Krenek holds a green apple with one bite taken out of it at chest height. Her eyebrows are raised and her mouth is closed. |
| `paloma-drawing` | Dr. Paloma Krenek sits on a stool in the treatment room, drawing a tooth on a pad with a black marker. |
| `paloma-laughing` | Dr. Paloma Krenek laughs at something off camera, hands in the pockets of her scrubs. |
| `bite-apple` | A green apple with one bite taken out of it, on a bright orange background. |
| `bite-toast` | A thick slice of buttered toast with one bite taken out of the corner. |
| `bite-corn` | A grilled ear of corn with a row of bites taken out of it. |
| `bite-peach` | A ripe peach with one bite taken out of it and a bead of juice running down its side. |
| `bite-taco` | A breakfast taco half wrapped in foil, with one bite taken out of it. |
| `comfort-headphones` | Over-ear headphones resting on a folded blanket. |
| `the-drawing` | A marker sketch of a tooth in cross-section on a pad. One spot is circled, with an arrow to a handwritten note: filling, $190. |
| `the-drawing-nowords` | A marker sketch of a tooth in cross-section on a pad, with one spot circled and an arrow pointing to it. |
| `storefront` | The entrance to Feast Dental at 2217 Tejocote Street: a cream painted-brick building with an orange-framed glass door and the number 2217 beside it. |

- Where a still life only decorates a service row, use `alt=""`. The food is not information there, and a description would be read out between a service and its price.
- Write the alt text against the image that was accepted. If a detail came out differently (her expression, which side the bite is on), describe what is there.
- These describe placeholders. Rewrite them when real photographs replace the generated ones.

## Calls made in this brief, and why

1. **`paloma-apple` is framed from the hips up**, not three-quarter length. At three-quarter length the apple is too small for its bite to read at page size.
2. **No loupes in `paloma-drawing`.** The brand core puts loupes at her collar in working shots (`brand/01-brand-core.md:131`). A second pair of lenses at the neck is the likeliest thing in the set to come out as a stethoscope or doubled glasses. To try it, add "Dental loupes hang at her collar on a cord."
3. **The one tangerine object in `paloma-drawing` is the clipboard under the pad**, so the colour sits where the eye should go.
4. **The marker is not in the character block.** It is in her pocket in two frames and in her hand in one.
5. **She alternates sides**: right in the hero, left with the apple, right when laughing, so text can alternate down the page.
6. **Every bite is on the upper right**, the notch's default corner. Empty space is always top and right.
7. **Backdrops**: apple and taco on tangerine, toast and peach on the counter-colour, corn on cream. A green apple disappears on lime and a peach disappears on tangerine.
8. **Yellow peach, green salsa.** Nothing red near a bite (`brand/03-interaction-spec.md:34`).
9. **The test prompt's "tooth marks visible" is gone.** The bites ask for a softly scalloped edge instead, so they echo the notch without reading as damage.
10. **Storefront: the tangerine is the door frame, not an awning.** Awnings attract lettering. The brick is cream and the sky is cut to a strip, because a dusk sky would put a large blue area into a palette that bans blue.
11. **The prompts say "kept clear for the page layout"**, never "for a headline". Naming text in a prompt invites the generator to draw some.
12. **`the-drawing` carries one word and one price.** Fewer characters, fewer ways to fail.

## Reconciled with the build (2026-11-09)

Added after generation and the build. The sections above are the brief as written before any image existed; this section records what exists and what the page uses. Checked against `index.html` as saved at 00:19 on 10 November, and against the files in `assets/img/prompts/`, `assets/img/src/` and `assets/img/`. Where to place each picture was decided in `brand/04-image-placement.md`, not in the shot list above.

**Every name this file references exists,** except `assets/css/tokens.css` (deleted; see the notes at "Running them" and "Crop-safe zones"). Also checked and present: `tools/gen-image.sh`, `.tmp/prompts/`, `test-apple.txt`, `test-portrait.txt`, `research/02-audience-and-conversion.md` F12, "Page outline" in `brand/00-creative-direction.md`, and the cited lines `brand/01-brand-core.md:131`, `:136`, `:195`, `:257` and `brand/03-interaction-spec.md:34`, `:38`, which still say what this file quotes them for.

| Image | Prompt (`prompts/`) | Source (`src/`) | Built (`assets/img/`, widths) | On the page |
|---|---|---|---|---|
| `paloma-hero` | yes | yes | `paloma-hero-{640,800,1122}` | **Used.** Hero, from 1024 wide: the full 4:5 frame |
| `paloma-hero-band` | none (a crop of `paloma-hero.png`) | none | `paloma-hero-band-{640,800,1122}`, 1122 x 716 | **Used.** Hero, below 1024 wide |
| `paloma-apple` | yes | yes | `paloma-apple-{640,820,1122}` | **Used.** Meet the dentist, bleeding from the left |
| `paloma-drawing` | yes | yes | `paloma-drawing-{720,1080,1536}` (3:2) and `paloma-drawing-4x5-{360,480,720}` | **Used.** Meet the dentist: the 4:5 crop from 1024, the 3:2 frame below |
| `paloma-listening` | yes (not in the shot list above) | yes | `paloma-listening-{480,720,1080,1536}` | **Used.** Comfort, in place of `comfort-headphones` |
| `paloma-laughing` | yes | yes | `paloma-laughing-{360,480,720}` | **Not used** since the 00:10 save: the FAQ portrait was taken out of `index.html` (`.ops/qa/cold-read.md`, tell 2) |
| `bite-apple`, `bite-toast`, `bite-taco` | yes | yes | `{320,480,640,800,960}`, square | **Used.** The food strip after the first-visit steps, not the services rows the shot list proposed |
| `bite-corn` | yes | yes | `bite-corn-{480,720,960,1200,1440}`, 3:2 | **Used.** The food strip |
| `bite-peach` | yes | yes | `bite-peach-{360,480,720}` | **Used.** Closing band, bitten |
| `the-drawing` | yes | yes | `the-drawing-{360,480,720}` | **Used.** Cost, bitten. Its lettering, "filling, $190", still equals the Fillings from-price on the page |
| `storefront` | yes | yes | `storefront-{570,810,1140,1536}` | **Used.** Find us, captioned "Placeholder picture." |
| `comfort-headphones` | yes | yes | not built | **Not used** (`brand/04-image-placement.md` section 0, call a) |
| `the-drawing-nowords` | yes | yes | not built | **Not used.** The fallback, only if the filling price changes (`brand/04-image-placement.md` 1a) |
| `test-apple`, `test-portrait` | yes | yes | not built | **Not used.** The two look tests |
| `src/rejected/` (`bite-taco-v1`, `comfort-headphones-v1`, `paloma-drawing-v1`, `paloma-hero-b`) | | yes | not built | **Not used.** Superseded takes |

Each built name above comes in `.avif`, `.webp` and `.jpg`. `tools/build-images.mjs` also makes `social-card.jpg` (the page's `og:image`), `avatar-400.png` (a profile picture for listings; `index.html` does not reference it), the favicons, `apple-touch-icon.png`, and `manifest.json`, which is the generator's list of what it wrote, not a web app manifest.

**The hero band crop.** Below 1024 wide the hero serves `paloma-hero-band-*`, not the 4:5 frame: a 1122 x 716 crop of source rows 41 to 757 of `paloma-hero.png`, made by `tools/build-images.mjs`. Below 1024 the figure is a full-bleed band 100vw wide that shows well under half of the frame's height, so phones and tablets download only that part. The 41 is the page's `object-position` y (6%) times the rows the crop removes (0.06 x (1402 - 716) = 41), so the band lands on the same pixels the full frame showed; change that 6% in `assets/css/page.css` and the 41 in the generator must follow. Each version has its own preload in the head of `index.html`, with a media query. The 9:16 phone column in "Crop-safe zones" was the plan before the layout; the build uses this band.

**Other differences from the brief above.**

- Only `the-drawing` and `bite-peach` are bitten on the page, with a notch tile 25% of the frame's width. Every other photograph is unbitten.
- The alt text on the page is the set in `research/04-inclusive-visuals-review.md` section 4, with `brand/04-image-placement.md`'s correction for `paloma-listening` and a shorter hero alt that fits both crops (`.ops/qa/accessibility.md` B7); `content/copy.md` section 14 lists them as built. The "Alt text" table above is the pre-generation draft and is not used.
- `research/04-inclusive-visuals-review.md` section 2 proposes changes to the character block and the `paloma-*` prompts (among them tortoiseshell glasses, which the approved hero wears). They are not applied to this file or to the prompt files.
