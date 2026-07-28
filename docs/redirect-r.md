# `/r` — el atajo del QR y la alerta de Google

## Qué pasó

Search Console marcó el sitio con **"contenido dañino"**. La causa es `/r`, la
ruta corta que lleva el QR de la tarjeta al formulario de reseña de Google.

La versión anterior de `src/pages/r.astro` saltaba sola:

```html
<meta http-equiv="refresh" content="0; url=https://search.google.com/local/writereview?..." />
<script>window.location.replace(target)</script>
```

Ese es el patrón que Google Safe Browsing llama **sneaky redirect**: una URL de
tu dominio que, sin que el visitante toque nada, lo empuja a otro dominio. Es
exactamente el mecanismo que usan las campañas de malware y phishing para
esconder el destino real detrás de un dominio limpio, así que el clasificador lo
marca por la forma, no por el destino. Da igual que el destino sea Google.

Señales que lo agravaban en la versión vieja:

- doble redirección (meta refresh **y** JS) — redundancia típica de las páginas
  puente maliciosas, pensada para funcionar aunque el JS esté desactivado;
- retardo `0` — sin ventana para que el usuario lea nada;
- `<link rel="canonical">` apuntando a `search.google.com` — declara que el
  contenido de esa URL "es de otro dominio";
- el archivo era la única página del sitio sin layout ni marca visible.

El resto del repositorio está limpio: no hay scripts externos, ni `eval`, ni
`document.write`, ni iframes de terceros más allá del mapa de Google Maps en
`ServiceArea.astro`.

## La solución, en dos capas

### 1. La página ya no redirige sola (hecho)

`src/pages/r.astro` es ahora una página con la marca de RC Enterprise y un botón
que el visitante pulsa. **Un clic humano nunca es un redirect furtivo.** Esto
elimina la señal por sí solo, aunque no se toque el hosting.

No volver a añadir `meta refresh`, `location.replace()`, `location.href = …` ni
`canonical` a un dominio externo en esta página.

### 2. Un 301 de servidor en Cloudflare (por hacer)

Un `301 Moved Permanently` de servidor **no** es un sneaky redirect: es la forma
canónica y estándar de mover una URL, y Safe Browsing no la penaliza. Además el
visitante no ve página intermedia — el QR va directo al formulario, que es lo
que se quería desde el principio.

GitHub Pages no sirve 301, así que hace falta Cloudflare **por delante** de
GitHub Pages. El sitio se sigue construyendo y desplegando igual: no se cambia
de hosting, solo se pone Cloudflare en el DNS.

#### Pasos

1. **Alta del dominio en Cloudflare** (plan Free)
   - Añadir `rcenterprisepainting.com` en Cloudflare; importa los DNS actuales.
   - Cambiar los **nameservers** en el registrador (donde se compró el dominio)
     por los dos que da Cloudflare. Propagación: de minutos a unas horas.

2. **Registros DNS** — deben quedar apuntando a GitHub Pages:

   | Tipo  | Nombre | Contenido |
   |-------|--------|-----------|
   | A     | `@`    | `185.199.108.153` |
   | A     | `@`    | `185.199.109.153` |
   | A     | `@`    | `185.199.110.153` |
   | A     | `@`    | `185.199.111.153` |
   | CNAME | `www`  | `<usuario>.github.io` |

3. **SSL/TLS → modo `Full`** (no `Flexible`). GitHub Pages ya sirve HTTPS;
   `Flexible` provoca bucles de redirección.

   > Si GitHub Pages aún no ha emitido su certificado para el dominio, dejar los
   > registros **en gris (DNS only)** hasta que en *Settings → Pages* aparezca
   > el candado y "Enforce HTTPS". Después pasarlos a **naranja (Proxied)** — el
   > proxy es imprescindible: las reglas de redirección solo se aplican al
   > tráfico que pasa por Cloudflare.

4. **La regla de redirección** — Cloudflare → *Rules* → *Redirect Rules* →
   *Create rule*:

   - **Nombre:** `QR tarjeta → reseña de Google`
   - **Cuándo:** *Custom filter expression*, en modo edición:

     ```
     (http.host eq "rcenterprisepainting.com" and (http.request.uri.path eq "/r" or http.request.uri.path eq "/r/"))
     ```

     Hay que cubrir `/r` y `/r/` porque el sitio usa `trailingSlash: 'always'`.

   - **Entonces:** *Static* → URL:

     ```
     https://search.google.com/local/writereview?placeid=ChIJ--N1e7sNlVQRGVRygt82njg
     ```

   - **Código de estado:** `301`
   - *Preserve query string*: **desactivado** (el destino ya lleva su propio
     `placeid`; arrastrar parámetros del QR lo rompería).

5. **Comprobar** desde una terminal:

   ```bash
   curl -sSI https://rcenterprisepainting.com/r | head -3
   # HTTP/2 301
   # location: https://search.google.com/local/writereview?placeid=...
   ```

   Y lo mismo con `/r/`. Escanear también el QR de la tarjeta con el móvil.

6. **Que el resto del sitio siga igual:** abrir la home, `/es/`, una página de
   servicio y `/contact/`. Cloudflare no debería cambiar nada, pero conviene
   mirarlo antes de pedir la revisión.

## Pedir la revisión a Google

Solo **después** de que el paso 1 esté desplegado (y, si ya está, el 301 activo):

1. Search Console → **Seguridad y acciones manuales → Problemas de seguridad**.
2. Mirar las **URLs de ejemplo** que lista Google y confirmar que son `/r`.
   Si aparece alguna otra URL, hay algo más que revisar antes de continuar.
3. Comprobar cada URL de ejemplo en
   <https://transparencyreport.google.com/safe-browsing/search>.
4. Pulsar **Solicitar revisión** y describir la corrección, por ejemplo:

   > The flagged URL `/r` was a QR shortcut to our Google review form. It used a
   > meta-refresh and JavaScript redirect, which matched the sneaky-redirect
   > pattern. We removed both. The path is now a server-side 301 at the CDN
   > level, and the fallback page requires an explicit user click.

La revisión suele tardar de unas horas a unos días. Mientras esté marcado,
Chrome sigue mostrando el aviso; no reenviar la solicitud repetidamente porque
alarga la cola.

## Notas

- `noindex` **no** protege de Safe Browsing: son sistemas distintos. Safe
  Browsing rastrea la URL igualmente.
- Si en el futuro hace falta otro atajo (`/f` para Facebook, etc.), hacerlo
  siempre como regla 301 en Cloudflare, nunca como página que salte sola.
