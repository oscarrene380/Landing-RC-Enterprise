// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // --- Demo en GitHub Pages -------------------------------------------------
  // El sitio se sirve en https://oscarrene380.github.io/Landing-RC-Enterprise/
  // por eso hace falta `base`: sin él, el CSS y las imágenes darían 404.
  //
  // Cuando haya dominio propio (ej. rcenterprise.com):
  //   1. site: 'https://rcenterprise.com'
  //   2. borra la línea `base`
  //   3. actualiza la URL del sitemap en public/robots.txt
  site: 'https://oscarrene380.github.io',
  base: '/Landing-RC-Enterprise',

  // El filtro evita que el sitemap liste la misma URL con y sin barra final
  integrations: [sitemap({ filter: (page) => page.endsWith('/') })],

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },
});
