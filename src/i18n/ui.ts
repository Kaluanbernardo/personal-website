export type Lang = 'pt' | 'en';

type Dict = {
  brand: string;
  nav: {
    home: string;
    sobre: string;
    cv: string;
    academico: string;
    blog: string;
    projetos: string;
    contato: string;
    menu: string;
  };
  home: {
    eyebrow: string;
    title: { line1: string; line2: string };
    intro: string;
    ctaBlog: string;
    ctaCV: string;
    photoCredit: string;
    threeTalksHeading: string;
    cards: { n: string; t: string; sub: string; cta: string }[];
    fromBlog: string;
    allPosts: string;
  };
  sobre: {
    eyebrow: string;
    title: { line1: string; emph: string; line2: string };
    p1Lead: string;
    p1: string;
    p2: string;
    nowHeading: string;
    nowRows: [string, string][];
    socialsHeading: string;
    socials: string[];
    photoCredit: string;
  };
  cv: {
    eyebrow: string;
    title: { line1: string; emph: string };
    updated: string;
    download: string;
    experienceHeading: string;
    experience: { p: string; r: string; o: string; d: string; cta: string }[];
    skillsHeading: string;
    skills: string[];
  };
  academico: {
    eyebrow: string;
    title: { line1: string; emph: string };
    scholarIds: { label: string; href: string }[];
    linesHeading: string;
    lines: string[];
    formationHeading: string;
    formation: { p: string; r: string; o: string; d: string }[];
    publicationsHeading: string;
    publications: { y: string; t: string; v: string; tag: string }[];
  };
  blog: {
    eyebrow: string;
    title: { line1: string; emph: string };
    meta: (count: number) => string;
    filters: string[];
    featuredKicker: string;
    newsletterKicker: string;
    newsletterTitle: string;
    newsletterCopy: string;
    newsletterPlaceholder: string;
    archiveHeading: string;
  };
  post: {
    backToList: string;
    metaJoin: (date: string, mins: number) => string;
    prev: string;
    next: string;
    subscribe: string;
  };
  projetos: {
    eyebrow: string;
    title: string;
    sub: string;
    filters: string[];
  };
  contato: {
    eyebrow: string;
    title: { line1: string; emph: string };
    intro: string;
    email: string;
    socialsHeading: string;
    socials: { n: string; h: string; d: string }[];
  };
  footer: {
    note: string;
    sourceLabel: string;
  };
  altLang: {
    label: string;
    href: (path: string) => string;
  };
};

export const ui: Record<Lang, Dict> = {
  pt: {
    brand: 'nome sobrenome',
    nav: {
      home: 'home',
      sobre: 'sobre',
      cv: 'cv',
      academico: 'acadêmico',
      blog: 'blog',
      projetos: 'projetos',
      contato: 'contato',
      menu: 'menu ☰',
    },
    home: {
      eyebrow: '— site pessoal · ed. 2026',
      title: { line1: 'Nome', line2: 'Sobrenome.' },
      intro:
        'Product manager em educação, jornalista freelancer e doutorando em comunicação. Escrevo sobre o que constróem, lêem e estudam — e sobre o que conecta as três coisas.',
      ctaBlog: 'Ler o blog →',
      ctaCV: 'Baixar CV',
      photoCredit: 'foto: créditos',
      threeTalksHeading: '',
      cards: [
        {
          n: 'I.',
          t: 'no produto',
          sub: 'PM em uma empresa de educação. Descoberta, métricas, escrita de specs.',
          cta: 'ver mais →',
        },
        {
          n: 'II.',
          t: 'na imprensa',
          sub: 'Reportagens e ensaios sobre tecnologia, mídia e cultura digital.',
          cta: 'ver mais →',
        },
        {
          n: 'III.',
          t: 'na pesquisa',
          sub: 'Doutorando em comunicação. Tese sobre economia da atenção.',
          cta: 'ver mais →',
        },
      ],
      fromBlog: 'Do blog,',
      allPosts: 'todos os posts →',
    },
    sobre: {
      eyebrow: '01 · sobre',
      title: { line1: 'Em ', emph: 'poucas', line2: 'palavras.' },
      p1Lead: 'S',
      p1: 'ou Nome Sobrenome. Trabalho com produto digital em educação, escrevo sobre tecnologia e mídia, e investigo comunicação como doutorando. Este site é onde essas três conversas se encontram.',
      p2: 'Comecei na redação. Migrei pra produto sem deixar de escrever. Voltei à academia porque algumas perguntas exigem mais do que um deadline.',
      nowHeading: 'agora',
      nowRows: [
        ['produto', 'Liderando descoberta de uma feature de avaliação na empresa'],
        ['pesquisa', 'Capítulo 3 da tese — economia da atenção em plataformas educacionais'],
        ['leitura', 'Releitura de "Amusing Ourselves to Death", Postman'],
        ['escrita', 'Ensaio mensal no Substack · próxima edição: 5 mai'],
      ],
      socialsHeading: 'onde encontrar',
      socials: ['substack', 'linkedin', 'github', 'twitter', 'lattes', 'e-mail'],
      photoCredit: 'foto: créditos',
    },
    cv: {
      eyebrow: '02 · currículo profissional',
      title: { line1: 'Currículo ', emph: 'profissional.' },
      updated: 'atualizado em abril/2026 · disponível também em inglês',
      download: 'baixar PDF ↓',
      experienceHeading: 'experiência',
      experience: [
        {
          p: '2024 — atual',
          r: 'Product Manager',
          o: 'Empresa de educação · São Paulo',
          d: 'Lidera descoberta e roadmap de produtos para professores. Métricas de adoção, entrevistas e especificação.',
          cta: 'case ↗',
        },
        {
          p: '2022 — 2024',
          r: 'Jornalista freelancer',
          o: 'Veículos diversos',
          d: 'Reportagens e ensaios sobre tecnologia, mídia digital e cultura.',
          cta: 'case ↗',
        },
        {
          p: '2019 — 2022',
          r: 'Repórter / Editor',
          o: 'Redação X',
          d: 'Cobertura de tecnologia. Editor de caderno semanal de cultura digital.',
          cta: 'case ↗',
        },
      ],
      skillsHeading: 'habilidades',
      skills: [
        'descoberta',
        'pesquisa qualitativa',
        'métricas de produto',
        'escrita',
        'edição',
        'SQL',
        'Notion',
        'Figma',
        'entrevistas',
        'redação',
        'reportagem',
      ],
    },
    academico: {
      eyebrow: '03 · currículo acadêmico',
      title: { line1: 'Pesquisa & ', emph: 'publicações' },
      scholarIds: [
        { label: 'Lattes', href: 'https://lattes.cnpq.br/' },
        { label: 'ORCID', href: 'https://orcid.org/' },
        { label: 'academia.edu', href: 'https://academia.edu/' },
        { label: 'Google Scholar', href: 'https://scholar.google.com/' },
      ],
      linesHeading: 'linhas de pesquisa',
      lines: [
        'Economia da atenção',
        'Plataformas educacionais',
        'Jornalismo digital',
        'Métricas e mídia',
      ],
      formationHeading: 'formação',
      formation: [
        {
          p: '2023 — atual',
          r: 'Doutorado em Comunicação',
          o: 'Universidade · Programa',
          d: 'Tese: economia da atenção em plataformas educacionais. Orientação: Profa. X.',
        },
        {
          p: '2020 — 2022',
          r: 'Mestrado em Comunicação',
          o: 'Universidade · Programa',
          d: 'Dissertação: jornalismo digital e métricas de engajamento.',
        },
        {
          p: '2014 — 2018',
          r: 'Bacharelado em Jornalismo',
          o: 'Universidade',
          d: 'TCC com menção honrosa.',
        },
      ],
      publicationsHeading: 'publicações selecionadas',
      publications: [],
    },
    blog: {
      eyebrow: '05 · escritos',
      title: { line1: 'Notas, ', emph: 'ensaios.' },
      meta: (count: number) =>
        `${count} texto${count === 1 ? '' : 's'} · escritos em markdown · sincronizados com substack`,
      filters: ['todos', 'produto', 'jornalismo', 'academia', 'leituras', 'notas'],
      featuredKicker: 'em destaque',
      newsletterKicker: 'newsletter',
      newsletterTitle: 'Receba no e-mail',
      newsletterCopy: 'Ensaios mensais. Cancelamento em 1 clique.',
      newsletterPlaceholder: 'seu@email.com',
      archiveHeading: 'arquivo',
    },
    post: {
      backToList: '← todos os posts',
      metaJoin: (date: string, mins: number) => `${date} · ${mins} min de leitura`,
      prev: '← post anterior',
      next: 'próximo post →',
      subscribe: 'assinar substack ↗',
    },
    projetos: {
      eyebrow: '04 · projetos',
      title: 'Projetos',
      sub: 'reportagens · produtos · papers · palestras · pessoais',
      filters: ['todos', 'jornalismo', 'produto', 'academia', 'palestras', 'pessoal'],
    },
    contato: {
      eyebrow: '06 · contato',
      title: { line1: 'Vamos', emph: 'conversar.' },
      intro:
        'Aceito pautas de jornalismo, propostas de produto e parcerias acadêmicas. Resposta em até 48h úteis.',
      email: 'ola@nome.com.br',
      socialsHeading: 'onde mais encontrar',
      socials: [
        { n: 'Substack', h: '@nome', d: 'ensaios mensais' },
        { n: 'LinkedIn', h: '/in/nome', d: 'rede profissional' },
        { n: 'Twitter / X', h: '@nome', d: 'pensamentos curtos' },
        { n: 'GitHub', h: '/nome', d: 'código e experimentos' },
        { n: 'Lattes', h: 'CV completo', d: 'currículo acadêmico oficial' },
        { n: 'ORCID', h: '0000-0000-0000-0000', d: 'identificador acadêmico' },
      ],
    },
    footer: {
      note: '© nome sobrenome · feito com markdown + astro',
      sourceLabel: 'código fonte ↗',
    },
    altLang: {
      label: 'EN',
      href: (path: string) => (path.startsWith('/en') ? path : `/en${path === '/' ? '' : path}`),
    },
  },
  en: {
    brand: 'first last',
    nav: {
      home: 'home',
      sobre: 'about',
      cv: 'cv',
      academico: 'academic',
      blog: 'blog',
      projetos: 'projects',
      contato: 'contact',
      menu: 'menu ☰',
    },
    home: {
      eyebrow: '— personal site · ed. 2026',
      title: { line1: 'First', line2: 'Last.' },
      intro:
        'Product manager in education, freelance journalist, and PhD candidate in communication. I write about what we build, read, and study — and about what ties the three together.',
      ctaBlog: 'Read the blog →',
      ctaCV: 'Download CV',
      photoCredit: 'photo: credit',
      threeTalksHeading: '',
      cards: [
        {
          n: 'I.',
          t: 'in product',
          sub: 'PM at an education company. Discovery, metrics, spec writing.',
          cta: 'see more →',
        },
        {
          n: 'II.',
          t: 'in the press',
          sub: 'Reporting and essays on technology, media, and digital culture.',
          cta: 'see more →',
        },
        {
          n: 'III.',
          t: 'in research',
          sub: 'PhD in communication. Thesis on the attention economy.',
          cta: 'see more →',
        },
      ],
      fromBlog: 'From the blog,',
      allPosts: 'all posts →',
    },
    sobre: {
      eyebrow: '01 · about',
      title: { line1: 'In a ', emph: 'few', line2: 'words.' },
      p1Lead: 'I',
      p1: " am First Last. I work in digital product for education, write about technology and media, and study communication as a doctoral candidate. This site is where those three conversations meet.",
      p2: 'I started in the newsroom. Moved into product without giving up writing. Came back to academia because some questions ask for more than a deadline.',
      nowHeading: 'now',
      nowRows: [
        ['product', 'Leading discovery for an assessment feature'],
        ['research', 'Chapter 3 of the thesis — attention economy in education platforms'],
        ['reading', 'Re-reading "Amusing Ourselves to Death", Postman'],
        ['writing', 'Monthly essay on Substack · next: May 5'],
      ],
      socialsHeading: 'where to find me',
      socials: ['substack', 'linkedin', 'github', 'twitter', 'lattes', 'e-mail'],
      photoCredit: 'photo: credit',
    },
    cv: {
      eyebrow: '02 · professional cv',
      title: { line1: 'Professional ', emph: 'CV.' },
      updated: 'updated April/2026 · also available in Portuguese',
      download: 'download PDF ↓',
      experienceHeading: 'experience',
      experience: [
        {
          p: '2024 — present',
          r: 'Product Manager',
          o: 'Education company · São Paulo',
          d: 'Leads discovery and roadmap for teacher-facing products. Adoption metrics, interviews, specs.',
          cta: 'case ↗',
        },
        {
          p: '2022 — 2024',
          r: 'Freelance journalist',
          o: 'Various outlets',
          d: 'Reporting and essays on technology, digital media, and culture.',
          cta: 'case ↗',
        },
        {
          p: '2019 — 2022',
          r: 'Reporter / Editor',
          o: 'Newsroom X',
          d: 'Tech beat. Editor of the weekly digital culture section.',
          cta: 'case ↗',
        },
      ],
      skillsHeading: 'skills',
      skills: [
        'discovery',
        'qualitative research',
        'product metrics',
        'writing',
        'editing',
        'SQL',
        'Notion',
        'Figma',
        'interviewing',
        'copywriting',
        'reporting',
      ],
    },
    academico: {
      eyebrow: '03 · academic cv',
      title: { line1: 'Research & ', emph: 'publications' },
      scholarIds: [
        { label: 'Lattes', href: 'https://lattes.cnpq.br/' },
        { label: 'ORCID', href: 'https://orcid.org/' },
        { label: 'academia.edu', href: 'https://academia.edu/' },
        { label: 'Google Scholar', href: 'https://scholar.google.com/' },
      ],
      linesHeading: 'research lines',
      lines: [
        'Attention economy',
        'Education platforms',
        'Digital journalism',
        'Metrics and media',
      ],
      formationHeading: 'training',
      formation: [
        {
          p: '2023 — present',
          r: 'PhD in Communication',
          o: 'University · Program',
          d: 'Thesis: attention economy in education platforms. Advisor: Prof. X.',
        },
        {
          p: '2020 — 2022',
          r: 'MA in Communication',
          o: 'University · Program',
          d: 'Dissertation: digital journalism and engagement metrics.',
        },
        {
          p: '2014 — 2018',
          r: 'BA in Journalism',
          o: 'University',
          d: 'Honors thesis.',
        },
      ],
      publicationsHeading: 'selected publications',
      publications: [],
    },
    blog: {
      eyebrow: '05 · writings',
      title: { line1: 'Notes, ', emph: 'essays.' },
      meta: (count: number) =>
        `${count} ${count === 1 ? 'piece' : 'pieces'} · written in markdown · synced with substack`,
      filters: ['all', 'product', 'journalism', 'academia', 'reading', 'notes'],
      featuredKicker: 'featured',
      newsletterKicker: 'newsletter',
      newsletterTitle: 'Get it by email',
      newsletterCopy: 'Monthly essays. One-click unsubscribe.',
      newsletterPlaceholder: 'you@email.com',
      archiveHeading: 'archive',
    },
    post: {
      backToList: '← all posts',
      metaJoin: (date: string, mins: number) => `${date} · ${mins} min read`,
      prev: '← previous post',
      next: 'next post →',
      subscribe: 'subscribe on substack ↗',
    },
    projetos: {
      eyebrow: '04 · projects',
      title: 'Projects',
      sub: 'reporting · products · papers · talks · personal',
      filters: ['all', 'journalism', 'product', 'academia', 'talks', 'personal'],
    },
    contato: {
      eyebrow: '06 · contact',
      title: { line1: "Let's", emph: 'talk.' },
      intro:
        'Open to journalism pitches, product proposals, and academic collaborations. Reply within 48h on weekdays.',
      email: 'hello@name.com',
      socialsHeading: 'where else to find me',
      socials: [
        { n: 'Substack', h: '@name', d: 'monthly essays' },
        { n: 'LinkedIn', h: '/in/name', d: 'professional network' },
        { n: 'Twitter / X', h: '@name', d: 'short thoughts' },
        { n: 'GitHub', h: '/name', d: 'code and experiments' },
        { n: 'Lattes', h: 'full CV', d: 'official academic record' },
        { n: 'ORCID', h: '0000-0000-0000-0000', d: 'academic identifier' },
      ],
    },
    footer: {
      note: '© first last · made with markdown + astro',
      sourceLabel: 'source code ↗',
    },
    altLang: {
      label: 'PT',
      href: (path: string) => (path.startsWith('/en') ? path.replace(/^\/en/, '') || '/' : path),
    },
  },
};

export const tagDisplay: Record<Lang, Record<string, string>> = {
  pt: {
    ensaio: 'ensaio',
    produto: 'produto',
    jornalismo: 'jornalismo',
    leitura: 'leitura',
    notas: 'notas',
    academia: 'academia',
    palestra: 'palestra',
    pessoal: 'pessoal',
  },
  en: {
    ensaio: 'essay',
    produto: 'product',
    jornalismo: 'journalism',
    leitura: 'reading',
    notas: 'notes',
    academia: 'academia',
    palestra: 'talk',
    pessoal: 'personal',
  },
};

export function formatDate(date: Date, lang: Lang): string {
  const months = {
    pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    en: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  };
  const d = new Date(date);
  return `${String(d.getUTCDate()).padStart(2, '0')} ${months[lang][d.getUTCMonth()]}`;
}

export function formatLongDate(date: Date, lang: Lang): string {
  const months = {
    pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    en: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  };
  const d = new Date(date);
  return `${String(d.getUTCDate()).padStart(2, '0')} ${months[lang][d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
