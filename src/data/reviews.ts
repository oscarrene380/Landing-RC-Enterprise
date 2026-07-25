export interface Review {
  name: string;
  date: string;
  rating: number;
  source: 'HomeAdvisor' | 'Google';
  en: string;
  es: string;
}

/**
 * Reseñas verificadas de HomeAdvisor.
 * Para conectar las de Google en vivo, ver `src/lib/googleReviews.ts`.
 */
export const reviews: Review[] = [
  {
    name: 'Esperanza W.',
    date: '2021-11',
    rating: 5,
    source: 'HomeAdvisor',
    en: 'I interviewed a number of painting companies before selecting RC Enterprise to paint about 1,200 sq ft. We couldn’t be happier. He came on time and worked long hours. We were most impressed with the quality of his work — absolutely tops.',
    es: 'Entrevisté a varias compañías de pintura antes de elegir a RC Enterprise para pintar unos 1,200 pies². No podríamos estar más contentos. Llegó puntual y trabajó jornadas largas. Lo que más nos impresionó fue la calidad de su trabajo: de primera.',
  },
  {
    name: 'Marianne T.',
    date: '2023-06',
    rating: 5,
    source: 'HomeAdvisor',
    en: 'Fidel was conscientious and detail oriented — he did a great job for us!',
    es: 'Fidel fue responsable y detallista. ¡Hizo un excelente trabajo para nosotros!',
  },
  {
    name: 'Jon S.',
    date: '2021-06',
    rating: 5,
    source: 'HomeAdvisor',
    en: 'The crew did a great job prepping, painting, and cleaning up. Great communication and follow-through.',
    es: 'El equipo hizo un gran trabajo preparando, pintando y limpiando. Excelente comunicación y seguimiento.',
  },
];

export const ratingSummary = {
  value: 5.0,
  count: reviews.length,
};

/** Formatea "2021-11" → "Nov 2021" / "nov 2021" */
export function formatReviewDate(iso: string, locale: 'en' | 'es'): string {
  const [year, month] = iso.split('-');
  const d = new Date(Number(year), Number(month) - 1, 1);
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-US' : 'en-US', {
    month: 'short',
    year: 'numeric',
  }).format(d);
}
