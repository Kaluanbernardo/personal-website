#!/usr/bin/env node
// One-shot migration: pulls entries from the three Notion databases used during
// the Notion-CMS phase and writes them as .mdoc files with frontmatter that
// matches src/content/config.ts.
//
// Usage:
//   1. .env must still contain NOTION_TOKEN, NOTION_DB_POSTS,
//      NOTION_DB_PROJECTS, NOTION_DB_PUBS (same values as before).
//   2. node scripts/migrate-notion-to-mdoc.mjs
//   3. Review the generated files under src/content/, commit, then delete this
//      script and the notion deps from package.json.

import { Client, isFullPage, iteratePaginatedAPI } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

function loadEnv() {
  try {
    const raw = readFileSync('.env', 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    }
  } catch {
    /* .env optional — env vars may already be set */
  }
}
loadEnv();

const env = (k) => {
  const v = process.env[k];
  if (!v) throw new Error(`Missing env var ${k}. Set it in .env first.`);
  return v;
};

const notion = new Client({ auth: env('NOTION_TOKEN') });
const n2m = new NotionToMarkdown({ notionClient: notion });

const richText = (rt) => (rt ?? []).map((t) => t.plain_text).join('');
const selectName = (s) => s?.name ?? null;

function yamlValue(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return JSON.stringify(String(v));
}

function frontmatter(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    lines.push(`${k}: ${yamlValue(v)}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

async function pageBody(pageId) {
  const blocks = await n2m.pageToMarkdown(pageId);
  const md = n2m.toMarkdownString(blocks).parent ?? '';
  return md.trim() ? md + '\n' : '';
}

async function migrate({ databaseId, dir, mapProps, slugFrom }) {
  mkdirSync(dir, { recursive: true });
  const written = [];
  for await (const page of iteratePaginatedAPI(notion.databases.query, {
    database_id: databaseId,
  })) {
    if (!isFullPage(page)) continue;
    const data = mapProps(page.properties);
    const slug = slugFrom(data, page);
    if (!slug) {
      console.warn(`[skip] ${page.id}: could not determine slug`);
      continue;
    }
    const body = await pageBody(page.id);
    const file = join(dir, `${slug}.mdoc`);
    writeFileSync(file, frontmatter(data) + body);
    written.push(file);
  }
  return written;
}

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

async function main() {
  console.log('Migrating Posts...');
  const posts = await migrate({
    databaseId: env('NOTION_DB_POSTS'),
    dir: 'src/content/posts',
    mapProps: (p) => ({
      title: richText(p.Title?.title),
      description: richText(p.Description?.rich_text),
      pubDate: p['Pub date']?.date?.start ?? new Date().toISOString().slice(0, 10),
      readingTime: p['Reading time']?.number ?? 5,
      tag: selectName(p.Tag?.select) ?? 'ensaio',
      featured: p.Featured?.checkbox ?? false,
      draft: p.Draft?.checkbox ?? false,
      lang: selectName(p.Lang?.select) ?? 'pt',
    }),
    slugFrom: (data) => {
      const date = String(data.pubDate).slice(0, 10);
      return `${date}-${slugify(data.title)}${data.lang === 'en' ? '-en' : ''}`;
    },
  });
  console.log(`  ${posts.length} post(s) written`);

  console.log('Migrating Projects...');
  const projects = await migrate({
    databaseId: env('NOTION_DB_PROJECTS'),
    dir: 'src/content/projects',
    mapProps: (p) => ({
      title: richText(p.Title?.title),
      kind: selectName(p.Kind?.select) ?? 'produto',
      place: richText(p.Place?.rich_text),
      year: p.Year?.number ?? new Date().getFullYear(),
      url: p.URL?.url ?? undefined,
      thumb: richText(p.Thumb?.rich_text) || undefined,
      lang: selectName(p.Lang?.select) ?? 'pt',
    }),
    slugFrom: (data) => slugify(data.title) + (data.lang === 'en' ? '-en' : ''),
  });
  console.log(`  ${projects.length} project(s) written`);

  console.log('Migrating Publications...');
  const pubs = await migrate({
    databaseId: env('NOTION_DB_PUBS'),
    dir: 'src/content/pubs',
    mapProps: (p) => ({
      title: richText(p.Title?.title),
      venue: richText(p.Venue?.rich_text),
      year: p.Year?.number ?? new Date().getFullYear(),
      kind: selectName(p.Kind?.select) ?? 'artigo',
      url: p.URL?.url ?? undefined,
      lang: selectName(p.Lang?.select) ?? 'pt',
    }),
    slugFrom: (data) =>
      `${data.year}-${slugify(data.title)}${data.lang === 'en' ? '-en' : ''}`,
  });
  console.log(`  ${pubs.length} publication(s) written`);

  console.log('\nDone. Review the generated files, then:');
  console.log('  git add src/content && git commit -m "Migrate Notion content to .mdoc"');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
