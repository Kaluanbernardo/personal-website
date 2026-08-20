export const sections = {
  home: { number: '00', slug: '', theme: 'theme-home', accent: 'var(--acid)' },
  sobre: { number: '01', slug: 'sobre', theme: 'theme-sobre', accent: 'var(--cyan)' },
  cv: { number: '02', slug: 'cv', theme: 'theme-cv', accent: 'var(--ylw)' },
  academico: { number: '03', slug: 'academico', theme: 'theme-academ', accent: 'var(--acid)' },
  projetos: { number: '04', slug: 'projetos', theme: 'theme-projetos', accent: 'var(--orng)' },
  blog: { number: '05', slug: 'blog', theme: 'theme-blog', accent: 'var(--vio)' },
  contato: { number: '06', slug: 'contato', theme: 'theme-contato', accent: 'var(--hot)' },
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
