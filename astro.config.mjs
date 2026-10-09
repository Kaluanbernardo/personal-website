import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://kaluan.tech',
  trailingSlash: 'ignore',
  /* a página acadêmica virou /publicacoes; links antigos continuam funcionando */
  redirects: {
    '/academico': '/publicacoes',
    '/en/academico': '/en/publicacoes',
  },
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    markdoc(),
    ...(isDev ? [react(), keystatic()] : []),
  ],
});
