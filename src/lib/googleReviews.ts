/**
 * Reseñas de Google en tiempo de build (opcional).
 *
 * Hoy la landing usa las reseñas verificadas de `src/data/reviews.ts`.
 * Cuando quieras traer las de Google:
 *
 *   1. Google Cloud Console → habilita "Places API (New)" y activa facturación.
 *      La lectura de un lugar entra en la capa gratuita mensual.
 *   2. Crea una API key y restríngela por API (solo Places).
 *   3. Añade a un archivo `.env` en la raíz (NO lo subas a git):
 *
 *        GOOGLE_PLACES_API_KEY=tu_key
 *
 *   4. En `src/components/Reviews.astro`, cambia:
 *
 *        import { reviews } from '../data/reviews';
 *
 *      por:
 *
 *        import { getReviews } from '../lib/googleReviews';
 *        const reviews = await getReviews();
 *
 * La key solo se usa durante `astro build`, nunca llega al navegador.
 * Las reseñas se refrescan en cada despliegue: si quieres que se actualicen
 * solas, programa un rebuild diario en tu hosting (Netlify/Vercel lo permiten).
 *
 * Límite de la API: Google devuelve un máximo de 5 reseñas por lugar.
 */

import { reviews as fallbackReviews, type Review } from '../data/reviews';

/** Place ID de Residential Construction Enterprise, LLC en Google Maps */
export const PLACE_ID = 'ChIJ--N1e7sNlVQRGVRygt82njg';

interface PlacesReview {
  authorAttribution?: { displayName?: string };
  rating?: number;
  publishTime?: string;
  originalText?: { text?: string; languageCode?: string };
  text?: { text?: string };
}

export async function getReviews(): Promise<Review[]> {
  const key = import.meta.env.GOOGLE_PLACES_API_KEY;

  if (!key) {
    // Sin key seguimos mostrando las reseñas verificadas: la página nunca queda vacía.
    return fallbackReviews;
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
    });

    if (!res.ok) throw new Error(`Places API ${res.status}`);

    const data = (await res.json()) as { reviews?: PlacesReview[] };
    const mapped = (data.reviews ?? [])
      .filter((r) => (r.rating ?? 0) >= 4 && r.originalText?.text)
      .map<Review>((r) => {
        const text = r.originalText?.text ?? r.text?.text ?? '';
        return {
          name: r.authorAttribution?.displayName ?? 'Google user',
          date: (r.publishTime ?? '').slice(0, 7),
          rating: r.rating ?? 5,
          source: 'Google',
          // Google entrega un solo idioma: se muestra el original en ambos.
          en: text,
          es: text,
        };
      });

    return mapped.length ? mapped : fallbackReviews;
  } catch (error) {
    console.warn('[googleReviews] usando reseñas locales:', error);
    return fallbackReviews;
  }
}
