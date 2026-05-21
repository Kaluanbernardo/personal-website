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
    experience: { p: string; r: string; o: string; d: string; cta: string; tags: string[]; full: string[] }[];
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
          o: 'SENAI São Paulo',
          d: 'Desenvolvimento end-to-end de produtos tecnológicos e soluções para a indústria, combinando visão estratégica com pesquisa aplicada.',
          cta: 'case ↗',
          tags: ['Product Management', 'Product Discovery', 'Pesquisas profundas', 'AI Development', 'JTBD/Scrum/Agile', 'Educação', 'EdTech', 'Stakeholder Mgmt'],
          full: [
            'Liderei desenvolvimento de 12+ produtos digitais impactando 1M+ alunos/profissionais, usando Lean Product Management, Stage-Gate e Scrum/Kanban, com NPS médio 80+.',
            'Estruturei programa de IA para indústria com 100+ parcerias estratégicas, reduzindo tempo de processos em até 50%.',
            'Conduzi Product Discovery aplicando JTBD, Value Proposition Design, Double Diamond, Design Thinking e Design Sprints.',
            'Gerenciei stakeholders de diversos níveis, definindo métricas com OKR, Data-Driven Decision Making e A/B Testing.',
          ],
        },
        {
          p: '2023 — 2024',
          r: 'Professor de Jornalismo Digital & Comunicação',
          o: 'FAPCOM — Faculdade Paulus de Comunicação',
          d: 'Docente em 7 disciplinas de Jornalismo e Comunicação, com metodologias ativas e aprendizagem baseada em projetos.',
          cta: 'case ↗',
          tags: ['Ensino Superior', 'Design de Currículo', 'Jornalismo de Dados', 'Mentoria', 'Aprendizado Ativo'],
          full: [
            'Lecionei Jornalismo de Dados, Jornalismo Cultural, Redação para TV/Áudio, Teorias do Jornalismo, Técnicas de Reportagem e Jornalismo Comunitário.',
            'Impactei ~200 alunos combinando aulas expositivas e projetos práticos para desenvolver pensamento crítico.',
            'Orientei projetos de Iniciação Científica e participei de 10 bancas de TCC.',
          ],
        },
        {
          p: '2023 — 2024',
          r: 'Data Product Manager',
          o: 'Cortex',
          d: 'Plataforma de monitoramento de reputação. Ponte entre times de estratégia e técnico, responsável por qualidade de dados.',
          cta: 'case ↗',
          tags: ['Data Product', 'Product Owner', 'B2B SaaS', 'Desenvolvimento com Python', 'Data Quality', 'KPIs', 'Discovery'],
          full: [
            'Migrei fluxos de dados para datalake, reduzindo 50% do SLA operacional e ~30% dos custos de infraestrutura.',
            'Implementei sistema de unificação de dados de múltiplos fornecedores, reduzindo churn em ~20% QoQ.',
            'Atuei como Product Owner conduzindo discovery e traduzindo necessidades de negócio em especificações técnicas.',
            'Estabeleci processos de Data Quality Assurance e KPIs de produto.',
          ],
        },
        {
          p: '2022 — 2023',
          r: 'Senior Product Manager — Conteúdo & Mídia Digital',
          o: 'Vivo (Telefônica Brasil) · Portal Terra',
          d: 'Gerência das verticais Terra Byte e Terra Game On no portal Terra, coordenando operação e estratégia de produto.',
          cta: 'case ↗',
          tags: ['Senior PM', 'Estratégia de Conteúdo', 'Crescimento de Audiência', 'SEO', 'Parcerias com Marcas', 'Tech & Science', 'Mídia', 'Games'],
          full: [
            'Terra Byte: criei o produto do zero e escalei para 8M pageviews mensais.',
            'Executei campanhas com marcas (BGS, CES, Black Friday) e expandi o portfólio audiovisual (videocasts, webstories).',
            'Terra Game On: cresci audiência +100% em 3 meses (0 a 1M pageviews).',
            'Produzi cobertura proprietária de eventos como BGS e TGA e desenvolvi produtos para redes sociais.',
          ],
        },
        {
          p: '2021 — 2022',
          r: 'Executive Editor — Tecnologia, Ciência & Saúde',
          o: 'CNN Brasil',
          d: 'Liderança da equipe editorial de Saúde, Tecnologia e Ciência no site, com conteúdo aproveitado também pela TV.',
          cta: 'case ↗',
          tags: ['Liderança Editorial', 'Gestão de Equipes', 'Breaking News', 'Multiplataforma', 'Tech & Science', 'Saúde'],
          full: [
            'Liderei equipe e rede de freelancers produzindo cobertura essencial de COVID-19, vacinas e políticas públicas.',
            'Estabeleci editorias como campeãs de audiência durante a pandemia, com rigor jornalístico e fact-checking.',
            'Atuei como editor-geral em plantões, gerenciando breaking news 24/7.',
            'Gerenciei podcasts interinamente e desenvolvi integração multiplataforma digital-TV.',
          ],
        },
        {
          p: '2020 — 2021',
          r: 'Editor-in-Chief — Tecnologia & Cultura Digital',
          o: 'Gizmodo Brasil',
          d: 'Liderança editorial e de produto de um dos principais blogs de tecnologia do Brasil.',
          cta: 'case ↗',
          tags: ['Editor-Chefe', 'Estratégia Editorial', 'SEO', 'Crescimento de Receita', 'Gestão de Equipe', 'Branded Content', 'Liderança Editorial'],
          full: [
            'Crescimento de pageviews em 40% QoQ via estratégia editorial data-driven e otimização de SEO.',
            'Aumentei receita em 70% desenvolvendo projetos editoriais em parceria com o time comercial.',
            'Dobrei o tamanho da equipe (de 3-4 para 7 repórteres) após resultados consistentes.',
            'Editei reportagens e breaking news garantindo qualidade e velocidade de publicação.',
            'Planejei e implementei novos formatos e produtos para diversificar a oferta de conteúdo.',
          ],
        },
        {
          p: '2019 — 2021',
          r: 'Professor de Jornalismo Digital & Comunicação',
          o: 'Centro Universitário FMU | FIAM-FAAM',
          d: 'Docência, coordenação e orientação em cursos de Jornalismo, Publicidade, Rádio/TV e Relações Públicas.',
          cta: 'case ↗',
          tags: ['Ensino Superior', 'Coordenação de Curso', 'Design de Currículo', 'Mentoria'],
          full: [
            'Professor de disciplinas como "Política e Economia", "Comunicação Multiplataforma", "Jornalismo de Dados" e "Cultura da Convergência".',
            'Vice-coordenação interina do curso de Jornalismo.',
            'Coordenação da agência interna de estágios.',
            'Orientação de dezenas de TCCs.',
          ],
        },
        {
          p: '2018 — 2020',
          r: 'Repórter especial',
          o: 'UOL — Universo Online',
          d: 'Reportagens de alto impacto na editoria de especiais e multimídia (UOL Tab), que cresceu 40% em audiência e 20% em receita.',
          cta: 'case ↗',
          tags: ['Reportagem Investigativa', 'Longread', 'Jornalismo Multimídia', 'Data Storytelling'],
          full: [
            'Storytelling com dados para grandes reportagens.',
            'Apuração, edição e redação de grandes reportagens sobre política, comportamento, cultura e tecnologia.',
            'Criação de reportagens multimídia integrando texto, infográficos e vídeos.',
          ],
        },
        {
          p: '2017 — 2018',
          r: 'Analista de Comunicação',
          o: 'SumUp',
          d: 'Comunicação corporativa, relações públicas e branded content em fintech alemã global.',
          cta: 'case ↗',
          tags: ['Comunicação Corporativa', 'Relações Públicas', 'Media Training', 'Branded Content', 'Fintech', 'Comunicação Executiva'],
          full: [
            'Desenvolvi e lancei site de branded content alcançando 500 mil acessos em 3 meses, posicionando a marca e gerando leads qualificados.',
            'Colaborei no desenvolvimento de campanhas integradas (online e offline) com orçamento multimilionário.',
            'Redigi comunicados públicos, garantindo alinhamento da mensagem corporativa.',
            'Contratei e gerenciei agência de PR, coordenando estratégias de mídia e relacionamento com imprensa.',
            'Conduzi media training com C-levels, preparando executivos para entrevistas e aparições públicas.',
            'Elaborei planos de comunicação para times de suporte ao cliente, padronizando linguagem e melhorando a experiência.',
          ],
        },
        {
          p: '2016 — 2017',
          r: 'Gerente de SEO / Editor assistente',
          o: 'Green Park Content',
          d: 'Estratégia de conteúdo SEO para grandes marcas como Nestlé, Unilever, Pepsico, Danone e Intel.',
          cta: 'case ↗',
          tags: ['SEO', 'Estratégia de Conteúdo', 'Account Management', 'Analytics', 'Times Globais', 'Clientes Enterprise'],
          full: [
            'Gerenciei 10+ projetos simultâneos com 100M+ pageviews mensais e R$ 15M+ em receita anual.',
            'Coordenei equipes de 50+ pessoas em diversos países (redatores, designers, analistas).',
            'Planejei e executei estratégias de conteúdo SEO-driven para múltiplos clientes.',
            'Conduzi análises de audiência e performance, identificando oportunidades de otimização.',
            'Realizei pesquisas de palavras-chave e desenvolvi pautas estratégicas alinhadas a objetivos de negócio.',
            'Implementei otimizações técnicas e de conteúdo para SEO.',
          ],
        },
        {
          p: '2015 — 2016',
          r: 'Repórter',
          o: 'Nexo Jornal',
          d: 'Um dos primeiros repórteres do Nexo, participando da formulação do jornal antes do lançamento.',
          cta: 'case ↗',
          tags: ['Time Fundador', 'Reportagem', 'Jornalismo Científico', 'Roteiro de Vídeo'],
          full: [
            'Reportagens diárias sobre ciência, tecnologia, música, segurança pública, meio ambiente e saúde.',
            'Reportagens especiais nas mesmas áreas.',
            'Roteirização de vídeos.',
            'Proposição de pautas.',
          ],
        },
        {
          p: '2014 — 2015',
          r: 'Repórter',
          o: 'Projeto Draft',
          d: 'Cobertura diária do ecossistema de inovação e startups.',
          cta: 'case ↗',
          tags: ['Cobertura de Startups', 'Longread', 'Entrevistas', 'Curadoria Editorial'],
          full: [
            'Curadoria e redação da compilação diária de notícias mais importantes.',
            'Entrevista e redação da editoria "Acelerados", que apresentava startups em early stage.',
            'Entrevistas e redação de longos perfis de grandes empreendedores.',
            'Cobertura especial de eventos.',
          ],
        },
        {
          p: '2013 — 2014',
          r: 'Editor',
          o: 'Startupi',
          d: 'Edição em portal especializado em startups durante a fase de rápida expansão do setor no Brasil.',
          cta: 'case ↗',
          tags: ['Edição', 'Startups', 'Gestão de Audiência', 'Cobertura de Eventos'],
          full: [
            'Gestão de audiência.',
            'Redação e edição de reportagens.',
            'Cobertura de eventos especiais.',
            'Elaboração de relatórios especiais.',
          ],
        },
        {
          p: '2012 — 2013',
          r: 'Redator',
          o: 'Olhar Digital',
          d: 'Redação no então segundo maior site de tecnologia do país e único programa do tema em TV aberta.',
          cta: 'case ↗',
          tags: ['Jornalismo de Tecnologia', 'Redação Científica', 'Roteiro para TV', 'Hard News'],
          full: [
            'Redação de hard news sobre tecnologia e ciência.',
            'Redação de reportagens especiais.',
            'Sugestão de pautas para o programa de TV.',
            'Roteirização para o programa de TV.',
          ],
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
        { n: 'Substack', h: '@kaluanbernardo', d: 'ensaios mensais' },
        { n: 'LinkedIn', h: '/in/kaluanbernardo', d: 'rede profissional' },
      ],
    },
    footer: {
      note: '© kaluan bernardo · vibecodado com claude + markdown + astro',
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
          o: 'SENAI São Paulo',
          d: 'End-to-end development of tech products and solutions for industry, blending strategic vision with applied research.',
          cta: 'case ↗',
          tags: ['Product Management', 'Product Discovery', 'OKRs', 'A/B Testing', 'JTBD', 'AI', 'EdTech', 'Stakeholder Mgmt'],
          full: [
            'Led 12+ digital products reaching 1M+ learners/professionals using Lean Product Management, Stage-Gate and Scrum/Kanban, with an average NPS of 80+.',
            'Structured an AI program for industry with 100+ strategic partnerships, cutting process time by up to 50%.',
            'Ran Product Discovery applying JTBD, Value Proposition Design, Double Diamond, Design Thinking and Design Sprints.',
            'Managed stakeholders across levels, defining metrics via OKR, data-driven decision making and A/B testing.',
          ],
        },
        {
          p: '2023 — 2024',
          r: 'Lecturer — Digital Journalism & Communication',
          o: 'FAPCOM — Faculdade Paulus de Comunicação',
          d: 'Taught 7 courses in Journalism and Communication using active learning and project-based methodologies.',
          cta: 'case ↗',
          tags: ['Higher Education', 'Curriculum Design', 'Data Journalism', 'Mentoring', 'Active Learning'],
          full: [
            'Taught Data Journalism, Cultural Journalism, Writing for TV/Audio, Journalism Theory, Reporting Techniques and Community Journalism.',
            'Reached ~200 students combining lectures and practical projects to build critical thinking.',
            'Advised undergraduate research projects and served on 10 thesis committees.',
          ],
        },
        {
          p: '2023 — 2024',
          r: 'Data Product Manager',
          o: 'Cortex',
          d: 'Reputation-monitoring platform. Bridge between strategy and technical teams, responsible for data quality.',
          cta: 'case ↗',
          tags: ['Data Product', 'Product Owner', 'B2B SaaS', 'SQL', 'Data Quality', 'KPIs', 'Discovery'],
          full: [
            'Migrated data pipelines to a datalake, cutting operational SLA by 50% and infra cost by ~30%.',
            'Implemented a system unifying data from multiple vendors, reducing churn ~20% QoQ.',
            'Acted as Product Owner running discovery and translating business needs into technical specs.',
            'Established Data Quality Assurance processes and product KPIs.',
          ],
        },
        {
          p: '2022 — 2023',
          r: 'Senior Product Manager — Content & Digital Media',
          o: 'Vivo (Telefónica Brasil) · Terra portal',
          d: 'Managed the Terra Byte and Terra Game On verticals on the Terra portal, owning operation and product strategy.',
          cta: 'case ↗',
          tags: ['Senior PM', 'Content Strategy', 'Audience Growth', 'SEO', 'Brand Partnerships', 'B2C', 'Media', 'Games'],
          full: [
            'Terra Byte: built the product from scratch and scaled it to 8M monthly pageviews.',
            'Ran campaigns with brands (BGS, CES, Black Friday) and expanded the audiovisual portfolio (videocasts, web stories).',
            'Terra Game On: grew audience +100% in 3 months (0 → 1M monthly pageviews).',
            'Produced original coverage of events like BGS and TGA and built products for social media.',
          ],
        },
        {
          p: '2021 — 2022',
          r: 'Executive Editor — Technology, Science & Health',
          o: 'CNN Brasil',
          d: 'Led the Health, Tech and Science editorial team for the site, with content reused by TV.',
          cta: 'case ↗',
          tags: ['Editorial Leadership', 'Team Management', 'Breaking News', 'Cross-platform', 'Health & Science'],
          full: [
            'Led the team and freelance network producing essential COVID-19, vaccine and public-policy coverage.',
            'Made the team audience leaders during the pandemic with strict journalism standards and fact-checking.',
            'Acted as general editor on shifts, handling 24/7 breaking news.',
            'Managed podcasts on an interim basis and developed digital-to-TV integration.',
          ],
        },
        {
          p: '2020 — 2021',
          r: 'Editor-in-Chief — Technology & Digital Culture',
          o: 'Gizmodo Brasil',
          d: 'Editorial and product leadership of one of the largest technology blogs in Brazil.',
          cta: 'case ↗',
          tags: ['Editor-in-Chief', 'Editorial Strategy', 'SEO', 'Revenue Growth', 'Team Building', 'Branded Content', 'P&L'],
          full: [
            'Grew pageviews +40% QoQ via data-driven editorial strategy and SEO optimization.',
            'Grew revenue +70% by developing editorial projects with the commercial team.',
            'Doubled the team (3-4 → 7 reporters) after consistent results.',
            'Edited features and breaking news, ensuring quality and publishing speed.',
            'Designed and shipped new formats and products to diversify content offering.',
          ],
        },
        {
          p: '2019 — 2021',
          r: 'Lecturer — Digital Journalism & Communication',
          o: 'Centro Universitário FMU | FIAM-FAAM',
          d: 'Teaching, coordination and advising across Journalism, Advertising, Radio/TV and Public Relations programs.',
          cta: 'case ↗',
          tags: ['Higher Education', 'Program Coordination', 'Curriculum Design', 'Mentoring'],
          full: [
            'Taught courses such as "Politics and Economy", "Multiplatform Communication", "Data Journalism" and "Convergence Culture".',
            'Interim deputy coordinator of the Journalism program.',
            'Coordinated the internal internship agency.',
            'Advised dozens of theses.',
          ],
        },
        {
          p: '2018 — 2020',
          r: 'Special Reporter',
          o: 'UOL — Universo Online',
          d: 'High-impact reporting on the specials and multimedia desk (UOL Tab), which grew 40% in audience and 20% in revenue.',
          cta: 'case ↗',
          tags: ['Investigative Reporting', 'Longform', 'Multimedia Journalism', 'Data Storytelling'],
          full: [
            'Data-driven storytelling for major stories.',
            'Researched, edited and wrote in-depth pieces on politics, behavior, culture and technology.',
            'Created multimedia reports integrating text, infographics and video.',
          ],
        },
        {
          p: '2017 — 2018',
          r: 'Communications Analyst',
          o: 'SumUp',
          d: 'Corporate communications, public relations and branded content at a global German fintech.',
          cta: 'case ↗',
          tags: ['Corporate Comms', 'PR', 'Media Training', 'Branded Content', 'Fintech', 'Executive Comms'],
          full: [
            'Built and launched a branded-content website that reached 500k visits in 3 months, positioning the brand and generating qualified leads.',
            'Collaborated on integrated campaigns (online and offline) with multimillion-dollar budgets.',
            'Wrote public statements ensuring corporate message alignment.',
            'Hired and managed the PR agency, coordinating media strategies and press relations.',
            'Ran media training with C-levels, preparing executives for interviews and public appearances.',
            'Designed communication plans for customer support teams, standardizing language and improving experience.',
          ],
        },
        {
          p: '2016 — 2017',
          r: 'SEO Manager / Assistant Editor',
          o: 'Green Park Content',
          d: 'SEO-driven content strategy for major brands like Nestlé, Unilever, Pepsico, Danone and Intel.',
          cta: 'case ↗',
          tags: ['SEO', 'Content Strategy', 'Account Management', 'Analytics', 'Global Teams', 'Enterprise Clients'],
          full: [
            'Managed 10+ simultaneous projects with 100M+ monthly pageviews and R$15M+ in annual revenue.',
            'Coordinated 50+ people across countries (writers, designers, analysts).',
            'Planned and ran SEO-driven content strategies for multiple clients.',
            'Conducted audience and performance analyses, identifying optimization opportunities.',
            'Did keyword research and developed pitches aligned with business goals.',
            'Implemented technical and content SEO optimizations.',
          ],
        },
        {
          p: '2015 — 2016',
          r: 'Reporter',
          o: 'Nexo Jornal',
          d: 'One of the first reporters at Nexo, joining the project before launch.',
          cta: 'case ↗',
          tags: ['Founding Team', 'Reporting', 'Science Journalism', 'Video Scripting'],
          full: [
            'Daily reporting on science, technology, music, public safety, environment and health.',
            'Feature reporting on the same areas.',
            'Scripted videos.',
            'Pitched stories.',
          ],
        },
        {
          p: '2014 — 2015',
          r: 'Reporter',
          o: 'Projeto Draft',
          d: 'Daily coverage of the innovation and startup ecosystem.',
          cta: 'case ↗',
          tags: ['Startup Coverage', 'Longform', 'Interviewing', 'Editorial Curation'],
          full: [
            'Curated and wrote the daily roundup of top news.',
            'Interviewed and wrote the "Acelerados" column, featuring early-stage startups.',
            'Long-form profiles of major entrepreneurs.',
            'Special coverage of events.',
          ],
        },
        {
          p: '2013 — 2014',
          r: 'Editor',
          o: 'Startupi',
          d: 'Editing at a startup-focused outlet during the sector’s rapid expansion in Brazil.',
          cta: 'case ↗',
          tags: ['Editing', 'Startups', 'Audience Management', 'Event Coverage'],
          full: [
            'Audience management.',
            'Writing and editing of articles.',
            'Coverage of special events.',
            'Development of special reports.',
          ],
        },
        {
          p: '2012 — 2013',
          r: 'Staff Writer',
          o: 'Olhar Digital',
          d: 'Writing at what was then the second-largest tech outlet in Brazil and the only TV show on the topic on free-to-air TV.',
          cta: 'case ↗',
          tags: ['Tech Journalism', 'Science Writing', 'TV Scripting', 'Hard News'],
          full: [
            'Hard news on technology and science.',
            'Feature reporting.',
            'Story pitches for the TV show.',
            'Scripting for the TV show.',
          ],
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
        { n: 'Substack', h: '@kaluanbernardo', d: 'monthly essays' },
        { n: 'LinkedIn', h: '/in/kaluanbernardo', d: 'professional network' },
      ],
    },
    footer: {
      note: '© kaluan bernardo · vibecoded with claude + markdown + astro',
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
