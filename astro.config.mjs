// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // --- Dominio propio en GitHub Pages ---------------------------------------
  // El sitio se sirve en https://rcenterprisepainting.com (ver public/CNAME).
  // Al usar dominio propio el sitio vive en la raíz, así que no hace falta `base`.
  site: 'https://rcenterprisepainting.com',

  // El filtro evita que el sitemap liste la misma URL con y sin barra final
  integrations: [sitemap({ filter: (page) => page.endsWith('/') })],

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },
});
