/**
 * Rutas de archivos que viven en `public/`.
 *
 * Antepone `BASE_URL` a la ruta. Con dominio propio `BASE_URL` es `/`, así que
 * el helper es transparente; se mantiene por si el sitio vuelve a servirse en
 * un subdirectorio (p. ej. una preview en github.io/<repo>/).
 *
 * Las imágenes de `src/assets/` NO lo necesitan: el componente <Image />
 * de Astro ya resuelve la ruta con el base incluido.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
