#!/bin/zsh
# Generate one image with Codex (ChatGPT image generation) and save it as a PNG.
#
#   tools/gen-image.sh <name> <prompt-file> [reference-image ...]
#
# <name>         output basename; result lands in assets/img/src/<name>.png
# <prompt-file>  plain-text art direction for the image
# [reference]    optional image(s) Codex should look at for palette/style continuity
#
# Each call is one Codex session, so calls can be run side by side.
set -euo pipefail

ROOT="${0:A:h:h}"
NAME="$1"; PROMPT_FILE="$2"; shift 2
OUT_DIR="$ROOT/assets/img/src"
LOG_DIR="$ROOT/.ops/imagegen"
mkdir -p "$OUT_DIR" "$LOG_DIR"

REFS=()
for ref in "$@"; do REFS+=(-i "$ref"); done

INSTRUCTIONS="Use your built-in image generation tool to make exactly ONE image from the art direction below. Follow it literally, including the aspect ratio and the colours. Do not add any text, lettering, logos or watermarks to the image unless the art direction asks for them. When the image exists, copy the generated file into the current working directory as ${NAME}.png and reply with only that file's absolute path. Do not write any other files.

ART DIRECTION:
$(cat "$PROMPT_FILE")"

# Reference images go before the other options so the variadic -i cannot swallow the prompt.
# stdin is closed explicitly: Codex otherwise waits for extra input when run from a background job.
codex exec "${REFS[@]}" --skip-git-repo-check --ignore-user-config -s workspace-write \
  -c model_reasoning_effort='"low"' \
  -C "$OUT_DIR" -o "$LOG_DIR/$NAME.last.txt" \
  "$INSTRUCTIONS" < /dev/null > "$LOG_DIR/$NAME.log" 2>&1

if [[ -s "$OUT_DIR/$NAME.png" ]]; then
  echo "ok  $NAME  $(sips -g pixelWidth -g pixelHeight "$OUT_DIR/$NAME.png" | awk '/pixel/{printf "%s ", $2}')"
else
  echo "FAILED  $NAME  (see $LOG_DIR/$NAME.log)"; exit 1
fi
