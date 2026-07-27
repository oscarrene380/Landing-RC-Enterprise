/**
 * Ayudas para construir datos estructurados desde las páginas.
 *
 * El nodo del negocio lo emite `Layout.astro` en todas las páginas con el
 * `@id` `<home>#business`. Desde aquí se referencia ese mismo `@id` para que
 * Google entienda que el servicio y el negocio son la misma entidad, en vez de
 * repetir los datos del negocio en cada página.
 */
import { site } from '../data/site';
import { asset } from './url';
import { href } from './i18n';

function origin(astroSite: URL | undefined): URL {
  return astroSite ?? new URL(site.url);
}

/** URL absoluta de una ruta interna. */
export function absUrl(path: string, astroSite: URL | undefined): string {
  return new URL(href(path), origin(astroSite)).href;
}

/** El `@id` del nodo del negocio, para referenciarlo sin duplicarlo. */
export function businessId(astroSite: URL | undefined): string {
  return `${new URL(asset('/'), origin(astroSite)).href}#business`;
}

interface Crumb {
  name: string;
  path: string;
}

/** Migas de pan. La última entrada es la página actual. */
export function breadcrumbs(crumbs: Crumb[], astroSite: URL | undefined) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absUrl(c.path, astroSite),
    })),
  };
}
