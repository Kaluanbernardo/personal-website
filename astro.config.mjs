import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kaluanbernardo.github.io',
  base: '/personal-website/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
