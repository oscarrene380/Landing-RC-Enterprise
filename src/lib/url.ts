/**
 * Rutas de archivos que viven en `public/`.
 *
 * En GitHub Pages el sitio no se sirve en la raíz del dominio sino en
 * `/Landing-RC-Enterprise/`, así que una ruta escrita a mano como `/og.jpg`
 * apuntaría al lugar equivocado. Astro expone ese prefijo en `BASE_URL`;
 * este helper lo antepone.
 *
 * Las imágenes de `src/assets/` NO lo necesitan: el componente <Image />
 * de Astro ya resuelve la ruta con el base incluido.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
