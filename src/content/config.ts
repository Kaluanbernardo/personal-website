import { defineCollection, z } from 'astro:content';
import { notionLoader } from 'notion-astro-loader';
import {
  notionPageSchema,
  transformedPropertySchema as p,
} from 'notion-astro-loader/schemas';

function requireEnv(name: string): string {
  const value = import.meta.env[name] ?? process.env[name];
  if (!value) {
    throw new Error(
      `Missing required env var ${name}. Content is fetched from Notion at build time — see .env.example for setup.`,
    );
  }
  return value;
}

const NOTION_TOKEN = requireEnv('NOTION_TOKEN');

const posts = defineCollection({
  loader: notionLoader({
    auth: NOTION_TOKEN,
    database_id: requireEnv('NOTION_DB_POSTS'),
  }),
  schema: notionPageSchema({
    properties: z.object({
      Title: p.title,
      Slug: p.rich_text,
      Description: p.rich_text,
      'Pub date': p.date,
      'Reading time': p.number,
      Tag: p.select,
      Featured: p.checkbox,
      Draft: p.checkbox,
      Lang: p.select,
    }),
  }).transform((page) => ({
    title: page.properties.Title,
    slug: page.properties.Slug,
    description: page.properties.Description,
    pubDate: page.properties['Pub date']?.start ?? new Date(0),
    readingTime: page.properties['Reading time'] ?? 5,
    tag: (page.properties.Tag ?? 'ensaio') as
      | 'ensaio'
      | 'produto'
      | 'jornalismo'
      | 'leitura'
      | 'notas'
      | 'academia',
    featured: page.properties.Featured,
    draft: page.properties.Draft,
    lang: (page.properties.Lang ?? 'pt') as 'pt' | 'en',
  })),
});

const projects = defineCollection({
  loader: notionLoader({
    auth: NOTION_TOKEN,
    database_id: requireEnv('NOTION_DB_PROJECTS'),
  }),
  schema: notionPageSchema({
    properties: z.object({
      Title: p.title,
      Kind: p.select,
      Place: p.rich_text,
      Year: p.number,
      URL: p.url.optional(),
      Thumb: p.rich_text.optional(),
      Lang: p.select,
    }),
  }).transform((page) => ({
    title: page.properties.Title,
    kind: (page.properties.Kind ?? 'produto') as
      | 'jornalismo'
      | 'produto'
      | 'academia'
      | 'palestra'
      | 'pessoal',
    place: page.properties.Place,
    year: page.properties.Year ?? new Date().getFullYear(),
    url: page.properties.URL ?? undefined,
    thumb: page.properties.Thumb || undefined,
    lang: (page.properties.Lang ?? 'pt') as 'pt' | 'en',
  })),
});

const pubs = defineCollection({
  loader: notionLoader({
    auth: NOTION_TOKEN,
    database_id: requireEnv('NOTION_DB_PUBS'),
  }),
  schema: notionPageSchema({
    properties: z.object({
      Title: p.title,
      Venue: p.rich_text,
      Year: p.number,
      Kind: p.select,
      URL: p.url.optional(),
      Lang: p.select,
    }),
  }).transform((page) => ({
    title: page.properties.Title,
    venue: page.properties.Venue,
    year: page.properties.Year ?? new Date().getFullYear(),
    kind: (page.properties.Kind ?? 'artigo') as
      | 'artigo'
      | 'capítulo'
      | 'livro'
      | 'tese'
      | 'dissertação',
    url: page.properties.URL ?? undefined,
    lang: (page.properties.Lang ?? 'pt') as 'pt' | 'en',
  })),
});

export const collections = { posts, projects, pubs };
