#!/usr/bin/env bash
# Regenerates docs/manual.pdf from docs/MANUAL.md.
#
# Requires:
#   - pandoc                  (apt install pandoc)
#   - weasyprint               (apt install weasyprint, or: pip install weasyprint)
#
# On Linux, run from the repo root:
#   bash scripts/build-manual-pdf.sh

set -euo pipefail

cd "$(dirname "$0")/.."

SRC="docs/MANUAL.md"
CSS="docs/manual.css"
HTML="$(mktemp --suffix=.html)"
OUT="docs/manual.pdf"

trap 'rm -f "$HTML"' EXIT

pandoc "$SRC" \
  --standalone \
  --metadata title="Manual do site pessoal" \
  --metadata lang=pt-BR \
  --toc --toc-depth=2 \
  --css="$CSS" \
  -o "$HTML"

weasyprint "$HTML" "$OUT"

echo "Generated: $OUT ($(du -h "$OUT" | cut -f1))"
