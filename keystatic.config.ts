import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Site pessoal' },
    navigation: {
      Conteúdo: ['posts', 'projects', 'pubs'],
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      columns: ['pubDate', 'tag', 'lang'],
      schema: {
        title: fields.slug({
          name: { label: 'Título' },
          slug: { label: 'Slug' },
        }),
        description: fields.text({
          label: 'Descrição',
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        pubDate: fields.date({
          label: 'Data de publicação',
          validation: { isRequired: true },
        }),
        readingTime: fields.integer({
          label: 'Tempo de leitura (min)',
          validation: { min: 1, isRequired: true },
        }),
        tag: fields.select({
          label: 'Tag',
          options: [
            { label: 'Ensaio', value: 'ensaio' },
            { label: 'Produto', value: 'produto' },
            { label: 'Jornalismo', value: 'jornalismo' },
            { label: 'Leitura', value: 'leitura' },
            { label: 'Notas', value: 'notas' },
            { label: 'Academia', value: 'academia' },
          ],
          defaultValue: 'ensaio',
        }),
        featured: fields.checkbox({
          label: 'Destacado',
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: 'Rascunho',
          defaultValue: false,
        }),
        lang: fields.select({
          label: 'Idioma',
          options: [
            { label: 'Português', value: 'pt' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'pt',
        }),
        content: fields.markdoc({
          label: 'Conteúdo',
        }),
      },
    }),

    projects: collection({
      label: 'Projetos',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      columns: ['kind', 'year', 'lang'],
      schema: {
        title: fields.slug({
          name: { label: 'Título' },
          slug: { label: 'Slug' },
        }),
        kind: fields.select({
          label: 'Tipo',
          options: [
            { label: 'Jornalismo', value: 'jornalismo' },
            { label: 'Produto', value: 'produto' },
            { label: 'Academia', value: 'academia' },
            { label: 'Palestra', value: 'palestra' },
            { label: 'Pessoal', value: 'pessoal' },
          ],
          defaultValue: 'produto',
        }),
        place: fields.text({
          label: 'Onde / veículo',
          validation: { length: { min: 1 } },
        }),
        year: fields.integer({
          label: 'Ano',
          validation: { min: 1900, max: 2100, isRequired: true },
        }),
        url: fields.url({
          label: 'URL externa',
        }),
        thumb: fields.text({
          label: 'Thumbnail (caminho)',
          description: 'Caminho relativo a /public, ex.: img/projetos/foo.jpg',
        }),
        lang: fields.select({
          label: 'Idioma',
          options: [
            { label: 'Português', value: 'pt' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'pt',
        }),
        content: fields.markdoc({
          label: 'Descrição',
        }),
      },
    }),

    pubs: collection({
      label: 'Publicações acadêmicas',
      slugField: 'title',
      path: 'src/content/pubs/*',
      format: { contentField: 'content' },
      columns: ['kind', 'year', 'lang'],
      schema: {
        title: fields.slug({
          name: { label: 'Título' },
          slug: { label: 'Slug' },
        }),
        venue: fields.text({
          label: 'Venue / publicação',
          validation: { length: { min: 1 } },
        }),
        year: fields.integer({
          label: 'Ano',
          validation: { min: 1900, max: 2100, isRequired: true },
        }),
        kind: fields.select({
          label: 'Tipo',
          options: [
            { label: 'Artigo', value: 'artigo' },
            { label: 'Capítulo', value: 'capítulo' },
            { label: 'Livro', value: 'livro' },
            { label: 'Tese', value: 'tese' },
            { label: 'Dissertação', value: 'dissertação' },
          ],
          defaultValue: 'artigo',
        }),
        url: fields.url({
          label: 'URL externa',
        }),
        lang: fields.select({
          label: 'Idioma',
          options: [
            { label: 'Português', value: 'pt' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'pt',
        }),
        content: fields.markdoc({
          label: 'Resumo / notas',
        }),
      },
    }),
  },
});
