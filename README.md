# personal-website

Personal site — Editorial direction (B&W minimal + ochre accent), built with Astro 5 + Markdoc content collections, edited locally via Keystatic, deployed to GitHub Pages.

## Stack

- Astro 5 (static)
- Markdoc content collections (posts, projects, pubs) with Zod schemas
- Keystatic local admin for editing content via UI (dev-only)
- i18n PT (default) + EN
- Newsreader + JetBrains Mono, self-hosted via `@fontsource`
- Light/dark theme toggle (localStorage, no flash)
- Google Analytics 4 (optional, via `PUBLIC_GA_ID`)

## Development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build
npm run preview
```

## Editing guide

A complete editing manual (in PT-BR) covering Keystatic, the i18n strings, public assets, and the GitHub Pages deploy lives at:

- **`docs/MANUAL.md`** — source (Markdown)
- **`docs/manual.pdf`** — printable version

To regenerate the PDF after edits to `MANUAL.md`:

```bash
bash scripts/build-manual-pdf.sh
```

(Requires `pandoc` and `weasyprint` installed on the system.)

## Editing content (Keystatic)

With the dev server running, the admin UI is at:

```
http://localhost:4321/personal-website/keystatic
```

It edits the `.mdoc` files in `src/content/{posts,projects,pubs}` directly. After editing, commit and push as usual — the GitHub Action rebuilds and deploys.

The Keystatic integration only loads in development (`NODE_ENV !== 'production'`), so the admin route is **not** included in the production build and `/keystatic` will 404 on the deployed site. Schema lives at `keystatic.config.ts` and must stay in sync with the Zod schemas at `src/content/config.ts`.

## One-time migration from Notion

This branch supersedes a previous Notion-as-CMS setup. If you had content in the three Notion databases and want to bring it into the new `.mdoc`-based flow:

```bash
# 1. Make sure .env still has NOTION_TOKEN + the three NOTION_DB_* IDs.
cp .env.example .env

# 2. Run the migration script.
npm run migrate:notion

# 3. Review the generated files under src/content/, then commit.
git add src/content
git commit -m "Migrate Notion content to .mdoc"

# 4. Once you're happy with the result, you can clean up:
#    - delete scripts/migrate-notion-to-mdoc.mjs
#    - npm uninstall @notionhq/client notion-to-md
#    - remove the NOTION_* lines from .env and .env.example
```

If you don't have meaningful Notion content (only test entries), skip this section — the repo already includes placeholder `.mdoc` files you can edit via Keystatic.

## Other configuration

1. Edit `astro.config.mjs` and set `site` / `base` for your repo:
   - User/org page (`<user>.github.io`): `site: 'https://<user>.github.io'`, `base: '/'`
   - Project page (any other repo): `site: 'https://<user>.github.io'`, `base: '/<repo>/'`
2. Copy `.env.example` to `.env` and set `PUBLIC_GA_ID` if you want GA4 enabled.
3. Replace placeholder `public/cv-pt.pdf` and `public/cv-en.pdf` with real files.
4. Drop your portrait at `public/img/portrait.jpg` and replace `<div class="img-frame">` placeholders in the page components.

## Content

- `src/content/posts/*.mdoc` — blog posts (one file per post). Set `lang: pt` or `lang: en`.
- `src/content/projects/*.mdoc` — projects grid entries.
- `src/content/pubs/*.mdoc` — academic publications shown on `/academico`.

Files are Markdoc (a Markdown superset). Plain Markdown works as-is; Markdoc tags are available if needed.

Astro schemas live at `src/content/config.ts`. Keystatic schemas live at `keystatic.config.ts` and must mirror them.

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action@v3` and publishes to GitHub Pages on every push to `main` (and on manual `workflow_dispatch`). Add a `PUBLIC_GA_ID` repository secret if you want GA enabled in production.
