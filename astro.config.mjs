import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://a1asphaltknoxville.com',
  integrations: [sitemap()],
});
