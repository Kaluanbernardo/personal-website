# personal-website

Personal site — Editorial direction (B&W minimal + ochre accent), built with Astro 5 + Markdown content collections, deployed to GitHub Pages.

## Stack

- Astro 5 (static)
- Markdown content collections (posts, projects, pubs) with Zod schemas
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

## Configuration

1. Edit `astro.config.mjs` and set `site` / `base` for your repo:
   - User/org page (`<user>.github.io`): `site: 'https://<user>.github.io'`, `base: '/'`
   - Project page (any other repo): `site: 'https://<user>.github.io'`, `base: '/<repo>/'`
2. Copy `.env.example` to `.env` and set `PUBLIC_GA_ID` if you want GA4 enabled.
3. Replace placeholder `public/cv-pt.pdf` and `public/cv-en.pdf` with real files.
4. Drop your portrait at `public/img/portrait.jpg` and replace `<div class="img-frame">` placeholders in the page components.

## Content

- `src/content/posts/*.md` — blog posts (one file per post). Set `lang: pt` or `lang: en`.
- `src/content/projects/*.md` — projects grid entries.
- `src/content/pubs/*.md` — academic publications shown on `/academico`.

Schemas live at `src/content/config.ts`.

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action@v3` and publishes to GitHub Pages on every push to `main`. Add a `PUBLIC_GA_ID` repository secret if you want GA enabled in production.

## Design source

The visual direction comes from the Claude Design handoff (HF1 Editorial). See `/tmp/design-extract/site-pessoal/project/hifi/*.jsx` for the original prototypes; CSS tokens were ported into `src/styles/global.css`.
