import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://kaluanbernardo.github.io',
  // Keystatic's UI fetches `/api/keystatic/...` paths absolute from root, so it
  // breaks under a non-root base. Use root in dev so the admin works, and the
  // GitHub Pages subpath only in production.
  base: isDev ? '/' : '/personal-website/',
  trailingSlash: 'ignore',
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
