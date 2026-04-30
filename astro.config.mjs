import { defineConfig } from 'astro/config';

// Replace `site` and `base` for your repo:
//   - User/org page (repo named `<user>.github.io`): site: 'https://<user>.github.io', base: '/'
//   - Project page (any other repo name):           site: 'https://<user>.github.io', base: '/<repo>/'
export default defineConfig({
  site: 'https://example.github.io',
  base: '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
