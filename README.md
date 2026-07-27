# RC Enterprise — landing page

Landing bilingüe (EN/ES) para **Residential Construction Enterprise, LLC**, pintura
residencial en el área de Portland / Beaverton, Oregón.

Construida con [Astro](https://astro.build) como sitio estático: sin backend, sin
base de datos, se puede alojar gratis en Netlify, Vercel, Cloudflare Pages o GitHub Pages.

---

## Arrancar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build → dist/
npm run preview    # sirve dist/ localmente
```

Requiere Node 22.12 o superior.

---

## Estructura

```
src/
├─ assets/work/        Fotos de obra (las procesa Astro: webp + responsive)
├─ components/         Un componente por sección, con sus estilos y su JS
│  ├─ T.astro          Texto bilingüe: <T en="Services" es="Servicios" />
│  ├─ Icon.astro       Iconos SVG inline, sin dependencias
│  ├─ Wordmark.astro   Logotipo vectorial
│  ├─ Header · Hero · TrustBar · Services · Gallery
│  ├─ Reviews · ServiceArea · Contact · Footer
│  └─ FloatingActions.astro   Botones flotantes de WhatsApp / Facebook / llamar
├─ data/               Todo el contenido editable, separado del maquetado
│  ├─ site.ts          Teléfono, correo, dirección, redes, horario, zonas
│  ├─ services.ts      Los 5 servicios y los sellos de confianza
│  ├─ gallery.ts       Fotos con título y texto alternativo bilingüe
│  └─ reviews.ts       Reseñas verificadas
├─ layouts/Layout.astro   <head>, SEO, JSON-LD, idioma, scroll reveal
├─ lib/googleReviews.ts   Conector opcional a Google Places (ver abajo)
├─ pages/index.astro      Solo compone las secciones
└─ styles/global.css      Design tokens y utilidades compartidas
```

**Para cambiar contenido no hace falta tocar HTML**: casi todo vive en `src/data/`.

---

## Cómo hacer los cambios más comunes

| Quiero… | Archivo |
| --- | --- |
| Cambiar teléfono, correo o dirección | `src/data/site.ts` |
| Añadir o quitar un servicio | `src/data/services.ts` |
| Añadir fotos a la galería | Copia el `.jpg` a `src/assets/work/` y regístralo en `src/data/gallery.ts` |
| Cambiar colores o tipografía | `src/styles/global.css` (bloque `:root`) |
| Cambiar el dominio | `astro.config.mjs` (`site`) y `public/robots.txt` |

### Paleta

Sale del logo original de la empresa:

| Token | Valor | Uso |
| --- | --- | --- |
| `--ink-800` | `#0e1a24` | Fondo principal |
| `--coral-500` | `#e14434` | Botones y acentos — el rojo del rótulo |
| `--teal-300` | `#6fc9cd` | Etiquetas, iconos, enlaces — el celeste de la tarjeta |
| `--paper-100` | `#f5f1ea` | Secciones claras |

Tipografía: **Bricolage Grotesque** (títulos) e **Instrument Sans** (texto),
autoalojadas vía Fontsource — no hay peticiones a Google Fonts.

---

## Bilingüe

El HTML incluye **los dos idiomas a la vez** y CSS oculta el que no está activo
(`[data-lang]` en `<html>`). Ventajas frente a ocultar con JavaScript:

- no hay parpadeo al cargar;
- funciona aunque falle el JS;
- los buscadores indexan ambos idiomas.

El idioma inicial se toma del navegador y se guarda en `localStorage`.

---

## Formulario de contacto

Abre WhatsApp con el mensaje ya redactado (nombre, teléfono, servicio y detalles).
No necesita servidor ni servicio externo.

Si algún día prefieres recibirlo por correo, cambia el `submit` de
`src/components/Contact.astro` por [Web3Forms](https://web3forms.com) o
[Formspree](https://formspree.io) — ambos tienen plan gratuito.

---

## Reseñas de Google

Ahora se muestran las 3 reseñas verificadas de HomeAdvisor y un botón que lleva
directo a escribir una reseña en Google.

Para traerlas en vivo desde Google, sigue las instrucciones dentro de
`src/lib/googleReviews.ts`. Resumen: habilitar Places API (New), poner
`GOOGLE_PLACES_API_KEY` en un `.env` y cambiar una línea en `Reviews.astro`.
La key solo se usa al compilar, nunca llega al navegador.

---

## Despliegue

La demo se publica en **GitHub Pages**:
<https://oscarrene380.github.io/Landing-RC-Enterprise/>

Cada `git push` a `main` dispara `.github/workflows/deploy.yml`, que compila con
`withastro/action` y publica `dist/`. No hay que subir la carpeta compilada ni
mantener una rama `gh-pages`.

**Activación (una sola vez):** en el repo → *Settings* → *Pages* → en **Source**
elegir **GitHub Actions**.

Como el sitio no vive en la raíz del dominio sino en `/Landing-RC-Enterprise/`,
`astro.config.mjs` define `base`. Las rutas a archivos de `public/` pasan por el
helper `asset()` de `src/lib/url.ts` para que ese prefijo se aplique solo.

### Pasar a dominio propio

1. En `astro.config.mjs`: `site: 'https://rcenterprise.com'` y borra la línea `base`.
2. Actualiza la URL del sitemap en `public/robots.txt`.
3. Añade un archivo `public/CNAME` con el dominio, y apunta el DNS a GitHub Pages.

---

## SEO y accesibilidad

- Datos estructurados `HousePainter` con teléfono, horario, zonas y calificación.
- Meta Open Graph y Twitter con imagen propia (`public/og.jpg`).
- `sitemap-index.xml` generado en cada build + `robots.txt`.
- Enlace «saltar al contenido», foco visible, menú móvil con `aria-expanded`,
  textos alternativos bilingües y respeto por `prefers-reduced-motion`.

---

## Pendiente de confirmar

- **Correo**: `rcenterprisellc.info@gmail.com` es una suposición. Confírmalo en `src/data/site.ts`.
- **Número CCB**: se leyó `235749` del logo, que está a baja resolución.
  Verifícalo en el [buscador de licencias de Oregon CCB](https://search.ccb.state.or.us/search/).
- **Dominio**: `rcenterprise.com` es un marcador de posición en `astro.config.mjs`.

El bundle original exportado de Claude Design queda archivado en
`chats/HANDOFF-original.md` y `project/`.
