import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    readingTime: z.number(),
    tag: z.enum(['ensaio', 'produto', 'jornalismo', 'leitura', 'notas', 'academia']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    lang: z.enum(['pt', 'en']).default('pt'),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['jornalismo', 'produto', 'academia', 'palestra', 'pessoal']),
    place: z.string(),
    year: z.number(),
    url: z.string().url().optional(),
    thumb: z.string().optional(),
    lang: z.enum(['pt', 'en']).default('pt'),
  }),
});

const pubs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/pubs' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    kind: z.enum(['artigo', 'capítulo', 'livro', 'tese', 'dissertação']),
    url: z.string().url().optional(),
    lang: z.enum(['pt', 'en']).default('pt'),
  }),
});

export const collections = { posts, projects, pubs };
