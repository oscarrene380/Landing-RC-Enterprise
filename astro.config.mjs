// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // --- Dominio propio en GitHub Pages ---------------------------------------
  // El sitio se sirve en https://rcenterprisepainting.com (ver public/CNAME).
  // Al usar dominio propio el sitio vive en la raíz, así que no hace falta `base`.
  site: 'https://rcenterprisepainting.com',

  // Todas las URLs terminan en barra: así el canonical, el hreflang y el
  // sitemap coinciden carácter por carácter y no hay pares descartados.
  trailingSlash: 'always',

  // Sin la opción `i18n` del sitemap a propósito: empareja versiones por ruta
  // idéntica y nuestros slugs en español están traducidos, así que generaría
  // pares equivocados. El hreflang autoritativo va en el <head> de cada página.
  integrations: [sitemap({ filter: (page) => page.endsWith('/') })],

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },
});
