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
    download: string;
    experienceHeading: string;
    experience: { p: string; r: string; o: string; d: string; cta: string }[];
    skillsHeading: string;
    skills: { name: string; level: number }[];
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
    brand: 'kaluan bernardo',
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
      title: { line1: 'Kaluan', line2: 'Bernardo.' },
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
      p1Lead: 'H',
      p1: 'á mais de 15 anos, trabalho na interseção entre jornalismo, conteúdo, educação, produto e estratégia. Embora pareçam muitas frentes para atuar, todas elas conversam entre si o tempo todo. Pode chamar de interdisciplinaridade, mas eu chamo de curiosidade mesmo. Aqui, tento mostrar como esses interesses se cruzam.',
      p2: '',
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
      download: 'baixar PDF ↓',
      experienceHeading: 'experiência',
      experience: [
        {
          p: '2024 — atual',
          r: 'Product Manager — Inovação em Educação',
          o: 'SENAI São Paulo · São Paulo',
          d: 'Desenvolvimento end-to-end de produtos tecnológicos e soluções para a indústria. Liderei 12+ produtos digitais impactando 1M+ alunos, estruturei programa de IA com 100+ parcerias e conduzi product discovery aplicando JTBD, Double Diamond e Design Sprints.',
          cta: 'case ↗',
        },
        {
          p: '2023 — 2024',
          r: 'Professor de Jornalismo Digital & Comunicação',
          o: 'FAPCOM — Faculdade Paulus de Comunicação',
          d: 'Docente em 7 disciplinas de Jornalismo e Comunicação. Impactei ~200 alunos com metodologias ativas, orientei projetos de Iniciação Científica e participei de 10 bancas de TCC.',
          cta: 'case ↗',
        },
        {
          p: '2023 — 2024',
          r: 'Data Product Manager',
          o: 'Cortex',
          d: 'Plataforma de monitoramento de reputação. Migrei fluxos para datalake (-50% SLA, -30% custos), unifiquei dados de múltiplos fornecedores reduzindo churn ~20% QoQ e estabeleci processos de Data Quality Assurance.',
          cta: 'case ↗',
        },
        {
          p: '2022 — 2023',
          r: 'Senior Product Manager — Conteúdo & Mídia Digital',
          o: 'Vivo (Telefônica Brasil) · Portal Terra',
          d: 'Gerência das verticais Terra Byte e Terra Game On. Criei o Terra Byte do zero escalando a 8M pageviews/mês e cresci o Terra Game On em +100% em 3 meses (0 a 1M pageviews), com cobertura proprietária de BGS, CES e TGA.',
          cta: 'case ↗',
        },
        {
          p: '2021 — 2022',
          r: 'Executive Editor — Tecnologia, Ciência & Saúde',
          o: 'CNN Brasil · São Paulo',
          d: 'Liderei a equipe editorial de Saúde, Tecnologia e Ciência no site, com conteúdo aproveitado também pela TV. Coordenei cobertura de COVID-19, vacinas e políticas públicas, plantões de breaking news 24/7 e integração digital-TV.',
          cta: 'case ↗',
        },
        {
          p: '2020 — 2021',
          r: 'Editor-in-Chief — Tecnologia & Cultura Digital',
          o: 'Gizmodo Brasil',
          d: 'Liderança editorial e de produto. Cresci pageviews +40% QoQ e receita +70% via projetos editoriais comerciais; dobrei a equipe (3-4 → 7 repórteres) e lancei novos formatos de conteúdo.',
          cta: 'case ↗',
        },
        {
          p: '2019 — 2021',
          r: 'Professor de Jornalismo Digital & Comunicação',
          o: 'Centro Universitário FMU | FIAM-FAAM',
          d: 'Disciplinas em Jornalismo, Publicidade, Rádio/TV e Relações Públicas. Vice-coordenação interina do curso de Jornalismo, coordenação da agência interna de estágios e orientação de dezenas de TCCs.',
          cta: 'case ↗',
        },
        {
          p: '2018 — 2020',
          r: 'Repórter especial',
          o: 'UOL — Universo Online',
          d: 'Reportagens de alto impacto na editoria de especiais e multimídia (UOL Tab), que cresceu 40% em audiência e 20% em receita. Storytelling com dados, longreads e produção multimídia.',
          cta: 'case ↗',
        },
        {
          p: '2017 — 2018',
          r: 'Analista de Comunicação',
          o: 'SumUp',
          d: 'Comunicação corporativa, PR e branded content em fintech global. Lancei site de branded content que alcançou 500 mil acessos em 3 meses, conduzi media training com C-levels e geri a agência de PR.',
          cta: 'case ↗',
        },
        {
          p: '2016 — 2017',
          r: 'Gerente de SEO / Editor assistente',
          o: 'Green Park Content',
          d: 'Estratégia de conteúdo SEO para grandes marcas (Nestlé, Unilever, Pepsico, Danone, Intel). Coordenei 10+ projetos com 100M+ pageviews/mês e R$ 15M+ de receita anual, e times de 50+ pessoas em múltiplos países.',
          cta: 'case ↗',
        },
        {
          p: '2015 — 2016',
          r: 'Repórter',
          o: 'Nexo Jornal',
          d: 'Um dos primeiros repórteres do Nexo, participando da formulação do jornal antes do lançamento. Reportagens diárias e especiais sobre ciência, tecnologia, segurança pública, meio ambiente e saúde.',
          cta: 'case ↗',
        },
        {
          p: '2014 — 2015',
          r: 'Repórter',
          o: 'Projeto Draft',
          d: 'Cobertura diária do ecossistema de inovação e startups: curadoria de notícias, editoria "Acelerados" e perfis de grandes empreendedores.',
          cta: 'case ↗',
        },
        {
          p: '2013 — 2014',
          r: 'Editor',
          o: 'Startupi',
          d: 'Gestão de audiência, edição de reportagens, cobertura de eventos e relatórios especiais no portal especializado em startups.',
          cta: 'case ↗',
        },
        {
          p: '2012 — 2013',
          r: 'Redator',
          o: 'Olhar Digital',
          d: 'Hard news e reportagens especiais sobre tecnologia e ciência; sugestão de pautas e roteirização para o programa de TV.',
          cta: 'case ↗',
        },
      ],
      skillsHeading: 'habilidades',
      skills: [
        { name: 'Product Management', level: 92 },
        { name: 'Product Discovery (JTBD, Double Diamond)', level: 90 },
        { name: 'Estratégia de conteúdo', level: 95 },
        { name: 'UX Research', level: 88 },
        { name: 'Pesquisa qualitativa', level: 88 },
        { name: 'OKRs & métricas', level: 85 },
        { name: 'A/B testing', level: 80 },
        { name: 'SEO', level: 88 },
        { name: 'Edição & reportagem', level: 95 },
        { name: 'Gestão de equipes', level: 88 },
        { name: 'SQL', level: 65 },
        { name: 'Notion', level: 88 },
        { name: 'Figma', level: 72 },
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
          p: '2024 — 2028',
          r: 'Doutorado em Comunicação e Consumo',
          o: 'ESPM — Escola Superior de Propaganda e Marketing',
          d: 'Pesquisa sobre como videogames constroem imaginários sobre a América Latina.',
        },
        {
          p: '2014 — 2016',
          r: 'Mestrado em Comunicação',
          o: 'Faculdade Cásper Líbero',
          d: '',
        },
        {
          p: '2010 — 2013',
          r: 'Bacharelado em Jornalismo',
          o: 'Faculdade Cásper Líbero',
          d: '',
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
      note: '© kaluan bernardo · feito com markdown + astro',
      sourceLabel: 'código fonte ↗',
    },
    altLang: {
      label: 'EN',
      href: (path: string) => (path.startsWith('/en') ? path : `/en${path === '/' ? '' : path}`),
    },
  },
  en: {
    brand: 'kaluan bernardo',
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
      title: { line1: 'Kaluan', line2: 'Bernardo.' },
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
      p1Lead: 'F',
      p1: "or over 15 years, I've been working at the intersection of journalism, content, education, product, and strategy. They might seem like a lot of different fields to work in, but they're all in conversation with each other all the time. You can call it interdisciplinarity — I just call it curiosity. Here, I try to show how these interests cross paths.",
      p2: '',
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
      download: 'download PDF ↓',
      experienceHeading: 'experience',
      experience: [
        {
          p: '2024 — present',
          r: 'Product Manager — Education Innovation',
          o: 'SENAI São Paulo · São Paulo, Brazil',
          d: 'End-to-end development of tech products and solutions for industry. Led 12+ digital products reaching 1M+ learners, structured an AI program with 100+ strategic partnerships and ran product discovery with JTBD, Double Diamond and Design Sprints.',
          cta: 'case ↗',
        },
        {
          p: '2023 — 2024',
          r: 'Lecturer — Digital Journalism & Communication',
          o: 'FAPCOM — Faculdade Paulus de Comunicação',
          d: 'Taught 7 courses in Journalism and Communication. Reached ~200 students with active learning methodologies, advised undergraduate research projects and served on 10 thesis committees.',
          cta: 'case ↗',
        },
        {
          p: '2023 — 2024',
          r: 'Data Product Manager',
          o: 'Cortex',
          d: 'Reputation-monitoring platform. Migrated data pipelines to a datalake (−50% SLA, −30% infra cost), unified data from multiple vendors reducing churn ~20% QoQ and set up Data Quality Assurance processes.',
          cta: 'case ↗',
        },
        {
          p: '2022 — 2023',
          r: 'Senior Product Manager — Content & Digital Media',
          o: 'Vivo (Telefónica Brasil) · Terra portal',
          d: 'Led Terra Byte and Terra Game On verticals. Built Terra Byte from scratch to 8M monthly pageviews and grew Terra Game On +100% in 3 months (0 → 1M), with original coverage of BGS, CES and TGA.',
          cta: 'case ↗',
        },
        {
          p: '2021 — 2022',
          r: 'Executive Editor — Technology, Science & Health',
          o: 'CNN Brasil · São Paulo',
          d: 'Led the Health, Tech and Science editorial team for the site, with content reused on TV. Coordinated COVID-19, vaccine and public-policy coverage, 24/7 breaking news shifts and digital-to-TV integration.',
          cta: 'case ↗',
        },
        {
          p: '2020 — 2021',
          r: 'Editor-in-Chief — Technology & Digital Culture',
          o: 'Gizmodo Brasil',
          d: 'Editorial and product leadership. Grew pageviews +40% QoQ and revenue +70% via editorial partnerships, doubled the team (3-4 → 7 reporters) and launched new content formats.',
          cta: 'case ↗',
        },
        {
          p: '2019 — 2021',
          r: 'Lecturer — Digital Journalism & Communication',
          o: 'Centro Universitário FMU | FIAM-FAAM',
          d: 'Courses across Journalism, Advertising, Radio/TV and Public Relations. Interim deputy coordinator of the Journalism program, coordinator of the internal internship agency, supervisor of dozens of theses.',
          cta: 'case ↗',
        },
        {
          p: '2018 — 2020',
          r: 'Special Reporter',
          o: 'UOL — Universo Online',
          d: 'High-impact reporting in the specials and multimedia desk (UOL Tab), which grew 40% in audience and 20% in revenue. Data-driven storytelling, longreads and multimedia production.',
          cta: 'case ↗',
        },
        {
          p: '2017 — 2018',
          r: 'Communications Analyst',
          o: 'SumUp',
          d: 'Corporate communications, PR and branded content at a global fintech. Launched a branded-content site that reached 500k visits in 3 months, ran media training with C-levels and managed the PR agency.',
          cta: 'case ↗',
        },
        {
          p: '2016 — 2017',
          r: 'SEO Manager / Assistant Editor',
          o: 'Green Park Content',
          d: 'Content strategy with an SEO focus for major brands (Nestlé, Unilever, Pepsico, Danone, Intel). Ran 10+ projects with 100M+ monthly pageviews and R$15M+ annual revenue, and 50+ people across countries.',
          cta: 'case ↗',
        },
        {
          p: '2015 — 2016',
          r: 'Reporter',
          o: 'Nexo Jornal',
          d: 'One of the first reporters hired at Nexo, joining before launch. Daily and feature reporting on science, technology, public safety, environment and health.',
          cta: 'case ↗',
        },
        {
          p: '2014 — 2015',
          r: 'Reporter',
          o: 'Projeto Draft',
          d: 'Daily coverage of the innovation and startup ecosystem: news curation, the "Acelerados" column on early-stage startups and long-form founder profiles.',
          cta: 'case ↗',
        },
        {
          p: '2013 — 2014',
          r: 'Editor',
          o: 'Startupi',
          d: 'Audience management, editing, event coverage and special reports for a startup-focused outlet.',
          cta: 'case ↗',
        },
        {
          p: '2012 — 2013',
          r: 'Staff Writer',
          o: 'Olhar Digital',
          d: 'Hard news and feature reporting on technology and science; pitching and scripting segments for the TV show.',
          cta: 'case ↗',
        },
      ],
      skillsHeading: 'skills',
      skills: [
        { name: 'Product Management', level: 92 },
        { name: 'Product Discovery (JTBD, Double Diamond)', level: 90 },
        { name: 'Content strategy', level: 95 },
        { name: 'UX Research', level: 88 },
        { name: 'Qualitative research', level: 88 },
        { name: 'OKRs & metrics', level: 85 },
        { name: 'A/B testing', level: 80 },
        { name: 'SEO', level: 88 },
        { name: 'Editing & reporting', level: 95 },
        { name: 'Team leadership', level: 88 },
        { name: 'SQL', level: 65 },
        { name: 'Notion', level: 88 },
        { name: 'Figma', level: 72 },
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
          p: '2024 — 2028',
          r: 'PhD in Communication and Consumption',
          o: 'ESPM — Escola Superior de Propaganda e Marketing',
          d: 'Research on how video games shape imaginaries about Latin America.',
        },
        {
          p: '2014 — 2016',
          r: 'MA in Communication',
          o: 'Faculdade Cásper Líbero',
          d: '',
        },
        {
          p: '2010 — 2013',
          r: 'BA in Journalism',
          o: 'Faculdade Cásper Líbero',
          d: '',
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
      note: '© kaluan bernardo · made with markdown + astro',
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
