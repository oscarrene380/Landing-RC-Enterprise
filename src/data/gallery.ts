import type { ImageMetadata } from 'astro';

import work2 from '../assets/work/work-2.jpg';
import work4 from '../assets/work/work-4.jpg';
import work5 from '../assets/work/work-5.jpg';
import work6 from '../assets/work/work-6.jpg';
import work7 from '../assets/work/work-7.jpg';
import work8 from '../assets/work/work-8.jpg';
import work10 from '../assets/work/work-10.jpg';
import work13 from '../assets/work/work-13.jpg';
import work14 from '../assets/work/work-14.jpg';
import deckBefore from '../assets/work/work-15-before.jpg';
import deckAfter from '../assets/work/work-15-after.jpg';
import fenceBefore from '../assets/work/work-16-before.jpg';
import fenceAfter from '../assets/work/work-16-after.jpg';

/** Cuántas columnas ocupa la ficha en escritorio (el grid tiene 6). */
export type Span = 'normal' | 'wide' | 'full';

interface Shot {
  src: ImageMetadata;
  alt: { en: string; es: string };
}

interface Labels {
  en: { title: string; alt: string };
  es: { title: string; alt: string };
}

/** Una foto suelta. */
export interface PhotoItem extends Labels {
  kind: 'photo';
  src: ImageMetadata;
  span?: Span;
}

/**
 * Par antes/después dentro de una sola ficha.
 * Se muestran lado a lado y no con un comparador deslizante porque las
 * fotos no están tomadas desde el mismo ángulo: esa cortina arrastrable
 * exige encuadres idénticos o delata el desajuste.
 */
export interface PairItem {
  kind: 'pair';
  before: Shot;
  after: Shot;
  en: { title: string };
  es: { title: string };
  span?: Span;
}

export type GalleryEntry = PhotoItem | PairItem;

/** Foto principal del hero: arquitectura moderna, alto contraste. */
export const heroImage = work7;
export const heroAlt = {
  en: 'Modern Portland-area home with freshly painted white siding and dark trim',
  es: 'Casa moderna del área de Portland con revestimiento blanco recién pintado y molduras oscuras',
};

/**
 * Galería curada: 8 fotos sueltas + 2 pares antes/después.
 *
 * El orden no es casual: los `span` están calculados para que las filas
 * cierren exactas en el grid de 6 columnas (4+2 / 6 / 2+4 / 4+2 / 2+2+2),
 * sin huecos al final de ninguna fila.
 */
export const gallery: GalleryEntry[] = [
  {
    kind: 'photo',
    src: work2,
    span: 'wide',
    en: {
      title: 'Interior repaint — Beaverton',
      alt: 'Living room with a curved wall painted deep teal and white trim',
    },
    es: {
      title: 'Repintado interior — Beaverton',
      alt: 'Sala con pared curva pintada en azul teal profundo y molduras blancas',
    },
  },
  {
    kind: 'photo',
    src: work14,
    en: {
      title: 'Exterior — steel blue',
      alt: 'Three-story home painted steel blue with white trim and a glass balcony',
    },
    es: {
      title: 'Exterior — azul acero',
      alt: 'Casa de tres niveles pintada en azul acero con molduras blancas y balcón de cristal',
    },
  },
  {
    kind: 'pair',
    span: 'full',
    en: { title: 'Deck wash & redwood stain — Hillsboro' },
    es: { title: 'Terraza: lavado y teñido color secuoya — Hillsboro' },
    before: {
      src: deckBefore,
      alt: {
        en: 'Before: deck boards weathered gray with dirt and mildew',
        es: 'Antes: tablas de la terraza grises por la intemperie, con tierra y moho',
      },
    },
    after: {
      src: deckAfter,
      alt: {
        en: 'After: the same deck sealed in a warm redwood stain',
        es: 'Después: la misma terraza sellada con tinte cálido color secuoya',
      },
    },
  },
  {
    kind: 'photo',
    src: work5,
    en: {
      title: 'Exterior repaint',
      alt: 'White farmhouse-style exterior with black window frames',
    },
    es: {
      title: 'Repintado exterior',
      alt: 'Exterior estilo farmhouse en blanco con marcos de ventana negros',
    },
  },
  {
    kind: 'photo',
    src: work10,
    span: 'wide',
    en: {
      title: 'Full exterior — navy & gray',
      alt: 'Two-story home painted gray with navy blue accent gables',
    },
    es: {
      title: 'Exterior completo — azul y gris',
      alt: 'Casa de dos pisos pintada en gris con frontones en azul marino',
    },
  },
  {
    kind: 'pair',
    span: 'wide',
    en: { title: 'Moss stripped off a cedar fence' },
    es: { title: 'Musgo eliminado de una cerca de cedro' },
    before: {
      src: fenceBefore,
      alt: {
        en: 'Before: cedar fence covered in green moss, with one cleaned section showing the contrast',
        es: 'Antes: cerca de cedro cubierta de musgo verde, con una sección ya lavada que muestra el contraste',
      },
    },
    after: {
      src: fenceAfter,
      alt: {
        en: 'After: the full fence washed back to clean cedar',
        es: 'Después: la cerca completa lavada hasta dejar el cedro limpio',
      },
    },
  },
  {
    kind: 'photo',
    src: work6,
    en: {
      title: 'New construction',
      alt: 'Modern home with white panels, cedar soffit and metal roof',
    },
    es: {
      title: 'Obra nueva',
      alt: 'Casa moderna con paneles blancos, alero de cedro y techo metálico',
    },
  },
  {
    kind: 'photo',
    src: work13,
    en: { title: 'Fence staining', alt: 'Cedar fence finished in a deep red stain' },
    es: { title: 'Teñido de cerca', alt: 'Cerca de cedro con acabado en tinte rojo profundo' },
  },
  {
    kind: 'photo',
    src: work4,
    en: { title: 'Stair & rail staining', alt: 'Exterior stone staircase with dark stained treads' },
    es: {
      title: 'Teñido de escaleras',
      alt: 'Escalera exterior de piedra con peldaños teñidos en tono oscuro',
    },
  },
  {
    kind: 'photo',
    src: work8,
    en: {
      title: 'Built-ins & cabinets',
      alt: 'Painter spraying white built-in shelving inside a closet',
    },
    es: {
      title: 'Clósets y gabinetes',
      alt: 'Pintor aplicando esmalte blanco a estantería empotrada en un clóset',
    },
  },
];

/**
 * Fotos fuera de la galería. Los archivos siguen en `src/assets/work/`;
 * para reactivar una, añade su objeto al array `gallery` de arriba
 * (y revisa que los `span` sigan cerrando las filas).
 *
 * - work-1  escalones de concreto: se lee como obra de concreto, no pintura
 * - work-3  camioneta estacionada: anodina, no muestra acabado
 * - work-9  piso epoxi azul: no comunica el servicio
 * - work-11 terraza gris: redundante con el antes/después de terraza
 * - work-12 interior a medias: se ve desordenado junto a las terminadas
 */
export const archived: string[] = [
  'work-1.jpg',
  'work-3.jpg',
  'work-9.jpg',
  'work-11.jpg',
  'work-12.jpg',
];
