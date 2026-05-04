# personal-website

Personal site — Editorial direction (B&W minimal + ochre accent), built with Astro 5, content fetched from Notion at build time, deployed to GitHub Pages.

## Stack

- Astro 5 (static)
- Content fetched from Notion via the Astro Content Layer API (`notion-astro-loader`)
- Three Notion databases: posts, projects, publications
- i18n PT (default) + EN
- Newsreader + JetBrains Mono, self-hosted via `@fontsource`
- Light/dark theme toggle (localStorage, no flash)
- Google Analytics 4 (optional, via `PUBLIC_GA_ID`)

## Development

```bash
npm install
cp .env.example .env   # then fill NOTION_TOKEN + the three NOTION_DB_* IDs
npm run dev            # http://localhost:4321
npm run build
npm run preview
```

`npm run dev` and `npm run build` both fetch from Notion at boot, so the env vars must be set or the build errors out.

## Notion setup

1. Create a Notion integration at <https://www.notion.so/profile/integrations>. Copy the **Internal Integration Token** into `NOTION_TOKEN`.
2. Create three databases in your workspace and **share each one with the integration** (the … menu on the database → *Connections* → add your integration). Required properties:

   **Posts**
   - `Title` (title)
   - `Slug` (text) — used in URLs, e.g. `metodologias-de-descoberta`
   - `Description` (text)
   - `Pub date` (date)
   - `Reading time` (number, minutes)
   - `Tag` (select: `ensaio`, `produto`, `jornalismo`, `leitura`, `notas`, `academia`)
   - `Featured` (checkbox)
   - `Draft` (checkbox)
   - `Lang` (select: `pt`, `en`)

   **Projects**
   - `Title` (title)
   - `Kind` (select: `jornalismo`, `produto`, `academia`, `palestra`, `pessoal`)
   - `Place` (text)
   - `Year` (number)
   - `URL` (url, optional)
   - `Thumb` (text, optional — path under `/public`, e.g. `img/projetos/foo.jpg`)
   - `Lang` (select: `pt`, `en`)

   **Publications**
   - `Title` (title)
   - `Venue` (text)
   - `Year` (number)
   - `Kind` (select: `artigo`, `capítulo`, `livro`, `tese`, `dissertação`)
   - `URL` (url, optional)
   - `Lang` (select: `pt`, `en`)

3. Copy each database's ID (the 32-char hex in its URL) into `NOTION_DB_POSTS`, `NOTION_DB_PROJECTS`, `NOTION_DB_PUBS`.
4. Body content for posts (and optional descriptions for projects/pubs) lives in the **page content** of each Notion entry — write whatever Notion blocks you like; `notion-astro-loader` renders them to HTML at build time.

Property and field names are matched **exactly** (case-sensitive) — see `src/content/config.ts`.

## Other configuration

1. Edit `astro.config.mjs` and set `site` / `base` for your repo:
   - User/org page (`<user>.github.io`): `site: 'https://<user>.github.io'`, `base: '/'`
   - Project page (any other repo): `site: 'https://<user>.github.io'`, `base: '/<repo>/'`
2. Set `PUBLIC_GA_ID` in `.env` if you want GA4 enabled.
3. Replace placeholder `public/cv-pt.pdf` and `public/cv-en.pdf` with real files.
4. Drop your portrait at `public/img/portrait.jpg` and replace `<div class="img-frame">` placeholders in the page components.

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action@v3` and publishes to GitHub Pages on three triggers:

- Push to `main`
- Manual `workflow_dispatch` (the **Run workflow** button on the Actions tab) — use this to publish a Notion edit immediately
- Daily cron at 06:00 UTC

Required repository secrets (Settings → Secrets and variables → Actions):

- `NOTION_TOKEN`
- `NOTION_DB_POSTS`
- `NOTION_DB_PROJECTS`
- `NOTION_DB_PUBS`
- `PUBLIC_GA_ID` (optional)

## Design source

The visual direction comes from the Claude Design handoff (HF1 Editorial). See `/tmp/design-extract/site-pessoal/project/hifi/*.jsx` for the original prototypes; CSS tokens were ported into `src/styles/global.css`.
