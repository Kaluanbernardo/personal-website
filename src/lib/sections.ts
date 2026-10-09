/* Cada seção tem três marcas que andam sempre juntas: número, cor e
   glifo. Onde a seção aparece (menu, índice da home, título, rodapé),
   as três aparecem — é isso que faz delas um sistema e não enfeite. */
export type Glyph = 'star' | 'circle' | 'triangle' | 'diamond' | 'down' | 'square' | 'spark';

export const sections = {
  home: { number: '00', slug: '', theme: 'theme-home', accent: 'var(--fg)', glyph: 'star' },
  sobre: { number: '01', slug: 'sobre', theme: 'theme-sobre', accent: 'var(--cyan)', glyph: 'circle' },
  cv: { number: '02', slug: 'cv', theme: 'theme-cv', accent: 'var(--ylw)', glyph: 'triangle' },
  academico: { number: '03', slug: 'publicacoes', theme: 'theme-academ', accent: 'var(--acid)', glyph: 'diamond' },
  projetos: { number: '04', slug: 'projetos', theme: 'theme-projetos', accent: 'var(--orng)', glyph: 'down' },
  blog: { number: '05', slug: 'blog', theme: 'theme-blog', accent: 'var(--vio)', glyph: 'square' },
  contato: { number: '06', slug: 'contato', theme: 'theme-contato', accent: 'var(--hot)', glyph: 'spark' },
} as const satisfies Record<string, { number: string; slug: string; theme: string; accent: string; glyph: Glyph }>;

export type SectionKey = keyof typeof sections;

export const primaryNavOrder: SectionKey[] = [
  'home',
  'sobre',
  'cv',
  'academico',
  'projetos',
  'blog',
  'contato',
];
