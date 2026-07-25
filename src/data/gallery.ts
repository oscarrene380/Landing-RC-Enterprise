import type { ImageMetadata } from 'astro';

import work1 from '../assets/work/work-1.jpg';
import work2 from '../assets/work/work-2.jpg';
import work3 from '../assets/work/work-3.jpg';
import work4 from '../assets/work/work-4.jpg';
import work5 from '../assets/work/work-5.jpg';
import work6 from '../assets/work/work-6.jpg';
import work7 from '../assets/work/work-7.jpg';
import work8 from '../assets/work/work-8.jpg';
import work9 from '../assets/work/work-9.jpg';
import work10 from '../assets/work/work-10.jpg';
import work11 from '../assets/work/work-11.jpg';
import work12 from '../assets/work/work-12.jpg';
import work13 from '../assets/work/work-13.jpg';

export interface GalleryItem {
  src: ImageMetadata;
  en: { title: string; alt: string };
  es: { title: string; alt: string };
  /** Ocupa dos columnas en escritorio */
  wide?: boolean;
}

/** Foto principal del hero: arquitectura moderna, alto contraste. */
export const heroImage = work7;
export const heroAlt = {
  en: 'Modern Portland-area home with freshly painted white siding and dark trim',
  es: 'Casa moderna del área de Portland con revestimiento blanco recién pintado y molduras oscuras',
};

export const gallery: GalleryItem[] = [
  {
    src: work2,
    wide: true,
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
    src: work13,
    en: { title: 'Fence staining', alt: 'Cedar fence finished in a deep red stain' },
    es: { title: 'Teñido de cerca', alt: 'Cerca de cedro con acabado en tinte rojo profundo' },
  },
  {
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
  {
    src: work4,
    en: { title: 'Stair & rail staining', alt: 'Exterior stone staircase with dark stained treads' },
    es: {
      title: 'Teñido de escaleras',
      alt: 'Escalera exterior de piedra con peldaños teñidos en tono oscuro',
    },
  },
  {
    src: work10,
    wide: true,
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
    src: work11,
    en: { title: 'Deck restoration', alt: 'Wide wooden deck refinished in light gray' },
    es: { title: 'Restauración de terraza', alt: 'Terraza de madera restaurada en gris claro' },
  },
  {
    src: work9,
    en: { title: 'Floor coating', alt: 'Blue epoxy floor coating next to a yellow front door' },
    es: {
      title: 'Recubrimiento de piso',
      alt: 'Recubrimiento epóxico azul junto a una puerta principal amarilla',
    },
  },
  {
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
    src: work12,
    en: { title: 'Interior in progress', alt: 'Room mid-project with blue walls and a ladder' },
    es: {
      title: 'Interior en proceso',
      alt: 'Habitación en pleno proyecto con paredes azules y una escalera',
    },
  },
  {
    src: work3,
    en: { title: 'Prep & masking', alt: 'Company van parked beside a house being prepped' },
    es: {
      title: 'Preparación y enmascarado',
      alt: 'Camioneta de la empresa junto a una casa en preparación',
    },
  },
  {
    src: work1,
    en: { title: 'Concrete & steps', alt: 'Freshly coated concrete steps with a wet paint sign' },
    es: {
      title: 'Concreto y escalones',
      alt: 'Escalones de concreto recién recubiertos con letrero de pintura fresca',
    },
  },
];
