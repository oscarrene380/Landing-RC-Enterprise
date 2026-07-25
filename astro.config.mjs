// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por el dominio real antes de desplegar:
  // afecta canonical, Open Graph, sitemap y robots.txt.
  site: 'https://rcenterprise.com',

  integrations: [sitemap()],

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },
});
