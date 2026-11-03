# personal-website

Personal site — Editorial direction (B&W minimal + ochre accent), built with Astro 5 + Markdoc content collections, edited locally via Keystatic, deployed to Hostinger shared hosting (kaluan.tech) via GitHub Actions + FTP.

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

## Editing content (Keystatic)

With the dev server running, the admin UI is at:

```
http://localhost:4321/keystatic
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

`.github/workflows/deploy.yml` builds the site and uploads `dist/` to Hostinger over FTP on every push to `main` (and on manual `workflow_dispatch`). Only changed files are uploaded.

Repository secrets (Settings → Secrets and variables → Actions → Secrets):

- `FTP_SERVER` — FTP host shown in hPanel → Files → FTP Accounts (e.g. `ftp.kaluan.tech` or an IP)
- `FTP_USERNAME` — FTP user (e.g. `u123456789.kaluan.tech`)
- `FTP_PASSWORD` — FTP password
- `PUBLIC_GA_ID` — optional, enables GA4

Optional repository variables (same page → Variables):

- `FTP_SERVER_DIR` — remote folder relative to the FTP login root, default `./public_html/`. If the FTP account already lands inside `public_html`, set it to `./`.
- `FTP_PROTOCOL` — `ftps` (default) or `ftp` if the TLS handshake fails.

Server rules (HTTPS, www → apex, 404 page, cache headers) live in `public/.htaccess`, which Astro copies to the root of `dist/`.
