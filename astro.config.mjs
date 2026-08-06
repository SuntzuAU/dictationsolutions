import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  // Emit and canonicalise one URL form only. /about and /about/ were both
  // being indexed as separate pages, splitting what little equity exists.
  trailingSlash: 'always',
  site: 'https://dictationsolutions.com.au',
  build: {
    format: 'directory'
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/404') && !page.includes('/placeholder')
  })]
});
