export const sections = {
  home: { number: '00', slug: '', theme: 'theme-home', accent: 'var(--acid)', glyph: '_' },
  sobre: { number: '01', slug: 'sobre', theme: 'theme-sobre', accent: 'var(--cyan)', glyph: '●' },
  cv: { number: '02', slug: 'cv', theme: 'theme-cv', accent: 'var(--ylw)', glyph: '▲' },
  academico: { number: '03', slug: 'academico', theme: 'theme-academ', accent: 'var(--blue)', glyph: '◆' },
  projetos: { number: '04', slug: 'projetos', theme: 'theme-projetos', accent: 'var(--orng)', glyph: '▼' },
  blog: { number: '05', slug: 'blog', theme: 'theme-blog', accent: 'var(--vio)', glyph: '■' },
  contato: { number: '06', slug: 'contato', theme: 'theme-contato', accent: 'var(--hot)', glyph: '✦' },
} as const;

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
