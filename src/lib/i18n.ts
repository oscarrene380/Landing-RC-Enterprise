/**
 * Internacionalización en tiempo de compilación.
 *
 * Inglés es el idioma principal y vive en la raíz (`/`, `/interior-painting/`).
 * Español vive bajo el prefijo `/es/` con slugs traducidos.
 *
 * El idioma NO se decide en el navegador: se deduce de la ruta durante el
 * build, así que cada página emite un solo idioma. Eso es lo que permite que
 * Google indexe las dos versiones por separado con hreflang recíproco.
 */

export const locales = ['en', 'es'] as const;
export type Lang = (typeof locales)[number];

/** Idioma por defecto: el que ocupa la raíz y el x-default de hreflang. */
export const defaultLang: Lang = 'en';

/** Prefijo del despliegue. Con dominio propio es cadena vacía. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Quita el prefijo de despliegue para poder razonar sobre rutas limpias. */
export function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) return pathname.slice(BASE.length) || '/';
  return pathname;
}

/** Deduce el idioma de una ruta. `/es`, `/es/…` → es; todo lo demás → en. */
export function langFromPath(pathname: string): Lang {
  const path = stripBase(pathname);
  return path === '/es' || path.startsWith('/es/') ? 'es' : 'en';
}

/** Antepone el prefijo de despliegue a una ruta interna ya localizada. */
export function href(path: string): string {
  return `${BASE}${path}`;
}

/** Las dos URLs de una misma página, una por idioma. Alimenta hreflang. */
export type Alternates = Record<Lang, string>;

/** Rutas de las páginas fijas. */
export const routes = {
  home: { en: '/', es: '/es/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
} as const satisfies Record<string, Alternates>;

/** Construye las dos rutas de una página de servicio a partir de sus slugs. */
export function servicePaths(slug: Alternates): Alternates {
  return { en: `/${slug.en}/`, es: `/es/${slug.es}/` };
}

/** Ancla dentro de la home del idioma indicado (`/#services`, `/es/#services`). */
export function homeAnchor(anchor: string, lang: Lang): string {
  return `${href(routes.home[lang])}#${anchor}`;
}

/** Código de locale completo, para `og:locale` y `hreflang`. */
export const ogLocale: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_US',
};

/** Cadenas de interfaz compartidas por varias plantillas. */
export const ui = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    allServices: 'All services',
    otherServices: 'Other services',
    servicesEyebrow: 'Service',
    ctaTitle: 'Get a free estimate',
    ctaText:
      'Tell us what you need and we will come out, look at the job and give you a written number. No pressure, no charge.',
    ctaCall: 'Call for a free estimate',
    ctaContact: 'Send us the details',
    whatsIncluded: 'What is included',
    howItGoes: 'How the job goes',
    servingLabel: 'Serving',
    notFoundTitle: 'Page not found',
    notFoundText:
      'That page does not exist or has moved. Try the homepage, or call us — we answer.',
    backHome: 'Back to homepage',
  },
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    allServices: 'Todos los servicios',
    otherServices: 'Otros servicios',
    servicesEyebrow: 'Servicio',
    ctaTitle: 'Pide tu estimado gratis',
    ctaText:
      'Cuéntanos qué necesitas y vamos a ver el trabajo para darte un número por escrito. Sin presión y sin costo.',
    ctaCall: 'Llama por tu estimado gratis',
    ctaContact: 'Mándanos los detalles',
    whatsIncluded: 'Qué incluye',
    howItGoes: 'Cómo es el trabajo',
    servingLabel: 'Zona de servicio',
    notFoundTitle: 'Página no encontrada',
    notFoundText:
      'Esa página no existe o cambió de dirección. Prueba con la portada, o llámanos: contestamos.',
    backHome: 'Volver a la portada',
  },
} as const;
