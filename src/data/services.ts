export interface Service {
  n: string;
  icon: string;
  en: { name: string; desc: string };
  es: { name: string; desc: string };
}

export const services: Service[] = [
  {
    n: '01',
    icon: 'roller',
    en: {
      name: 'Interior painting',
      desc: 'Walls, ceilings, trim and cabinets finished clean and crisp — furniture covered, floors protected, site left spotless.',
    },
    es: {
      name: 'Pintura interior',
      desc: 'Paredes, techos, molduras y gabinetes con acabado impecable — muebles cubiertos, pisos protegidos y obra limpia al terminar.',
    },
  },
  {
    n: '02',
    icon: 'house',
    en: {
      name: 'Exterior painting',
      desc: 'Weather-ready coatings built for Oregon rain. Siding, soffits, doors and garages that hold up season after season.',
    },
    es: {
      name: 'Pintura exterior',
      desc: 'Recubrimientos hechos para la lluvia de Oregon. Revestimientos, aleros, puertas y cocheras que aguantan temporada tras temporada.',
    },
  },
  {
    n: '03',
    icon: 'brush',
    en: {
      name: 'Staining & sealing',
      desc: 'Decks, fences and doors sealed against moisture and UV so the grain stays warm instead of going gray.',
    },
    es: {
      name: 'Teñido y sellado',
      desc: 'Terrazas, cercas y puertas selladas contra humedad y sol, para que la madera conserve su color en vez de agrisarse.',
    },
  },
  {
    n: '04',
    icon: 'water',
    en: {
      name: 'Power washing',
      desc: 'Siding, patios, walkways and driveways stripped of moss, mildew and grime before a single drop of paint.',
    },
    es: {
      name: 'Lavado a presión',
      desc: 'Revestimientos, patios, andadores y entradas libres de musgo, moho y mugre antes de la primera gota de pintura.',
    },
  },
  {
    n: '05',
    icon: 'tools',
    en: {
      name: 'Prep & repair',
      desc: 'Sanding, caulking, patching and priming. The part nobody sees is the part that makes the finish last.',
    },
    es: {
      name: 'Preparación y reparación',
      desc: 'Lijado, sellado de juntas, resane e imprimación. Lo que nadie ve es justo lo que hace durar el acabado.',
    },
  },
];

export const trustBadges = [
  { icon: 'calendar', en: '27 years of experience', es: '27 años de experiencia' },
  { icon: 'message', en: 'Se habla español', es: 'Se habla español' },
  { icon: 'check', en: 'Free estimates', es: 'Estimados gratis' },
  { icon: 'shield', en: 'Licensed & insured', es: 'Con licencia y asegurado' },
];
