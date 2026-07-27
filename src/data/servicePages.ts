/**
 * Contenido largo de cada página de servicio.
 *
 * `services.ts` guarda la ficha corta (la que se ve en la home). Aquí vive el
 * texto que hace que cada página tenga entidad propia para Google: 350-450
 * palabras por idioma, con su propio <title>, meta description y H1.
 *
 * Regla al editar: nada de precios, garantías, marcas de pintura ni
 * certificaciones que no estén verificadas. La licencia CCB y los años de
 * oficio sí son datos reales y están en `site.ts`.
 */

export interface Block {
  h: string;
  p: string;
}

export interface ServiceCopy {
  /** <title>. Objetivo: 50-60 caracteres. */
  title: string;
  /** meta description. Objetivo: 140-160 caracteres. */
  description: string;
  h1: string;
  lede: string;
  intro: string[];
  includes: Block[];
  process: Block[];
  closing: string;
}

type Copy = { en: ServiceCopy; es: ServiceCopy };

export const servicePages: Record<string, Copy> = {
  // ---------------------------------------------------------------- interior
  'interior-painting': {
    en: {
      title: 'Interior House Painting in Beaverton, OR',
      description:
        'Interior painting for homes in Beaverton and the surrounding Portland metro: walls, ceilings, trim and cabinets. Furniture covered, floors protected, free estimates. Since 1998.',
      h1: 'Interior house painting',
      lede: 'Walls, ceilings, trim, doors and cabinets painted clean — with your furniture covered and your floors protected from the first day to the last.',
      intro: [
        'Interior work happens inside a house people are still living in, and that changes how the job has to be run. Protection goes down before anything opens, the staging area stays in one place, and the rooms go back to normal at the end of each day. We have been painting homes in Beaverton and around the Portland metro since 1998, and the thing clients bring up most often is not the color — it is that the house stayed livable while we were in it.',
        'We only take residential work. That focus is why the prep is right: the crew already knows how a textured ceiling from the seventies behaves compared to fresh drywall, and does not have to guess at what a wall needs before the first coat.',
      ],
      includes: [
        {
          h: 'Walls and ceilings',
          p: 'Full repaint in the sheen that fits the room — flat or matte overhead and in low-traffic spaces, eggshell or satin where hands and furniture actually reach.',
        },
        {
          h: 'Trim, doors and baseboards',
          p: 'Cut in by hand, sanded between coats when the finish calls for it, and caulked so the line against the wall stays sharp instead of shadowed.',
        },
        {
          h: 'Cabinets and built-ins',
          p: 'Degreased, sanded and primed before any color goes on. Cabinet finishes fail because the prep was rushed, not because the paint was cheap.',
        },
        {
          h: 'Patching and repair',
          p: 'Nail pops, anchor holes, hairline cracks and old picture hooks filled, sanded flush and spot-primed so they disappear under the finish instead of telegraphing through it.',
        },
        {
          h: 'Protection and cleanup',
          p: 'Furniture moved and covered, floors masked, switch plates pulled and reinstalled, and the site left clean — not "construction clean".',
        },
      ],
      process: [
        {
          h: 'Free estimate',
          p: 'We come out, walk the rooms, measure, and give you a written number. There is no charge and nothing to sign on the spot.',
        },
        {
          h: 'Prep first',
          p: 'Covering, patching, sanding and priming all happen before a single finish coat. Anything that needs to cure overnight gets scheduled first.',
        },
        {
          h: 'Paint',
          p: 'Primer where the surface needs it, then coats until the coverage is honest — not until we hit the number of coats written on a quote.',
        },
        {
          h: 'Walkthrough',
          p: 'We walk the rooms with you at the end, mark anything you want touched up, and handle it before the last drop cloth comes up.',
        },
      ],
      closing:
        'We paint interiors across Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin and Sherwood. Licensed and insured in Oregon. Se habla español.',
    },
    es: {
      title: 'Pintura Interior en Beaverton, OR',
      description:
        'Pintura interior para casas en Beaverton y alrededores: paredes, techos, molduras y gabinetes. Muebles cubiertos, pisos protegidos y estimados gratis. Desde 1998.',
      h1: 'Pintura interior',
      lede: 'Paredes, techos, molduras, puertas y gabinetes con acabado impecable — con tus muebles cubiertos y tus pisos protegidos de principio a fin.',
      intro: [
        'El trabajo interior se hace dentro de una casa donde la gente sigue viviendo, y eso cambia la forma de organizarlo. La protección se coloca antes de abrir nada, el área de trabajo se mantiene en un solo lugar y los cuartos vuelven a la normalidad al terminar el día. Llevamos pintando casas en Beaverton y el área de Portland desde 1998, y lo que más mencionan los clientes no es el color: es que la casa siguió siendo habitable mientras estuvimos ahí.',
        'Solo tomamos trabajo residencial. Ese enfoque es la razón de que la preparación esté bien hecha: el equipo ya sabe cómo se comporta un techo texturizado de los años setenta comparado con tablaroca nueva, y no tiene que adivinar qué necesita una pared antes de la primera mano.',
      ],
      includes: [
        {
          h: 'Paredes y techos',
          p: 'Repintado completo con el acabado que le corresponde a cada cuarto: mate en techos y espacios de poco tránsito, satinado donde de verdad se apoyan las manos y los muebles.',
        },
        {
          h: 'Molduras, puertas y zoclos',
          p: 'Cortados a mano, lijados entre manos cuando el acabado lo pide y sellados con silicón para que la línea contra la pared quede limpia y no sombreada.',
        },
        {
          h: 'Gabinetes y muebles fijos',
          p: 'Desengrasados, lijados e imprimados antes de que entre el color. Los gabinetes fallan porque se apuró la preparación, no porque la pintura fuera barata.',
        },
        {
          h: 'Resanes y reparación',
          p: 'Clavos saltados, huecos de taquetes, grietas finas y ganchos viejos se rellenan, se lijan al ras y se imprimen por punto para que desaparezcan bajo el acabado en vez de marcarse.',
        },
        {
          h: 'Protección y limpieza',
          p: 'Muebles movidos y cubiertos, pisos enmascarados, placas de contactos retiradas y vueltas a poner, y la obra entregada limpia de verdad.',
        },
      ],
      process: [
        {
          h: 'Estimado gratis',
          p: 'Vamos, recorremos los cuartos, medimos y te damos un número por escrito. No cuesta nada y no hay que firmar nada en el momento.',
        },
        {
          h: 'Primero la preparación',
          p: 'Cubrir, resanar, lijar e imprimar ocurre antes de la primera mano de acabado. Lo que necesita curar toda la noche se programa primero.',
        },
        {
          h: 'Pintura',
          p: 'Imprimador donde la superficie lo necesita y luego las manos que haga falta hasta que la cobertura sea honesta, no hasta llegar al número escrito en una cotización.',
        },
        {
          h: 'Recorrido final',
          p: 'Recorremos los cuartos contigo al terminar, marcamos lo que quieras retocar y lo resolvemos antes de levantar la última lona.',
        },
      ],
      closing:
        'Pintamos interiores en Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin y Sherwood. Con licencia y asegurados en Oregon. Se habla español.',
    },
  },

  // ---------------------------------------------------------------- exterior
  'exterior-painting': {
    en: {
      title: 'Exterior House Painting in Beaverton, OR',
      description:
        'Exterior house painting built for Oregon rain: siding, soffits, doors and garages. Washing and prep included, free estimates. Licensed, insured, since 1998.',
      h1: 'Exterior house painting',
      lede: 'Coatings chosen for Oregon weather, on siding, soffits, doors and garages — with the washing and prep that make them last.',
      intro: [
        'An exterior paint job in the Willamette Valley is really a moisture job. Eight months of rain, moss that takes hold on the north side, and a short dry window in summer to get everything done. A finish that looks perfect in August and fails in February was not a paint problem — it was a prep and timing problem.',
        'We plan exterior work around the weather, not around the calendar. Surfaces get washed and given time to dry before anything is coated, and we do not put a finish over a substrate that is still holding water. Twenty-seven years of Oregon summers is mostly an education in knowing when a wall is actually ready.',
      ],
      includes: [
        {
          h: 'Siding and lap boards',
          p: 'Washed, scraped where the old coating has let go, spot-primed on bare wood, and coated with exterior-grade product suited to the surface.',
        },
        {
          h: 'Soffits, fascia and eaves',
          p: 'The parts that fail first because water sits there longest, and the parts most often skipped in a cheap bid.',
        },
        {
          h: 'Doors, garage doors and shutters',
          p: 'Prepped and finished separately from the body so the sheen and the color line come out clean.',
        },
        {
          h: 'Caulking and sealing',
          p: 'Joints, penetrations and trim gaps resealed before coating, because that is where water actually gets behind the paint.',
        },
        {
          h: 'Landscaping protection',
          p: 'Plants, walkways, driveways and windows covered before the first drop, and the site swept down at the end.',
        },
      ],
      process: [
        {
          h: 'Free estimate',
          p: 'We walk the whole exterior, note the failing areas, and give you a written number with the prep spelled out — not hidden in a line item.',
        },
        {
          h: 'Wash and dry',
          p: 'Moss, mildew and chalking come off first, and the surface gets the time it needs to dry before anything is coated.',
        },
        {
          h: 'Scrape, patch, prime',
          p: 'Loose coating removed, bare wood primed, damaged boards flagged. If something needs replacing rather than painting, we tell you before we paint over it.',
        },
        {
          h: 'Coat and inspect',
          p: 'Coats applied in workable weather, then a walk around the house with you before we call it done.',
        },
      ],
      closing:
        'Exterior painting across Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin and Sherwood. Licensed and insured in Oregon. Se habla español.',
    },
    es: {
      title: 'Pintura Exterior en Beaverton, OR',
      description:
        'Pintura exterior hecha para la lluvia de Oregon: revestimientos, aleros, puertas y cocheras. Lavado y preparación incluidos, estimados gratis. Desde 1998.',
      h1: 'Pintura exterior',
      lede: 'Recubrimientos elegidos para el clima de Oregon, en revestimientos, aleros, puertas y cocheras — con el lavado y la preparación que los hacen durar.',
      intro: [
        'Pintar un exterior en el valle del Willamette es en realidad un trabajo contra la humedad. Ocho meses de lluvia, musgo que se agarra del lado norte y una ventana seca corta en verano para hacerlo todo. Un acabado que se ve perfecto en agosto y falla en febrero no tuvo un problema de pintura: tuvo un problema de preparación y de tiempos.',
        'Programamos el trabajo exterior según el clima, no según el calendario. Las superficies se lavan y se les da tiempo de secar antes de aplicar nada, y no ponemos acabado sobre un material que todavía retiene agua. Veintisiete veranos en Oregon son, sobre todo, aprender a reconocer cuándo una pared de verdad está lista.',
      ],
      includes: [
        {
          h: 'Revestimiento y tablas',
          p: 'Lavados, raspados donde el recubrimiento viejo ya se soltó, imprimados por punto en la madera desnuda y pintados con producto de exterior adecuado a la superficie.',
        },
        {
          h: 'Aleros, fascias y cornisas',
          p: 'Las partes que fallan primero porque el agua se queda ahí más tiempo, y las que más se saltan en una cotización barata.',
        },
        {
          h: 'Puertas, cocheras y persianas',
          p: 'Preparadas y terminadas aparte del cuerpo de la casa, para que el brillo y la línea de color salgan limpios.',
        },
        {
          h: 'Sellado de juntas',
          p: 'Uniones, penetraciones y separaciones de moldura se vuelven a sellar antes de pintar, porque es justo por ahí donde el agua se mete detrás de la pintura.',
        },
        {
          h: 'Protección del jardín',
          p: 'Plantas, andadores, entradas y ventanas cubiertos antes de la primera gota, y el sitio barrido al terminar.',
        },
      ],
      process: [
        {
          h: 'Estimado gratis',
          p: 'Recorremos todo el exterior, anotamos las zonas dañadas y te damos un número por escrito con la preparación detallada, no escondida en una línea.',
        },
        {
          h: 'Lavado y secado',
          p: 'Primero sale el musgo, el moho y la pintura calcinada, y la superficie recibe el tiempo que necesita para secar antes de recibir nada.',
        },
        {
          h: 'Raspar, resanar, imprimar',
          p: 'Se quita el recubrimiento suelto, se imprima la madera desnuda y se señalan las tablas dañadas. Si algo hay que cambiar en vez de pintarlo, te lo decimos antes de pintarlo.',
        },
        {
          h: 'Aplicar y revisar',
          p: 'Las manos se aplican con clima trabajable y luego damos la vuelta a la casa contigo antes de darlo por terminado.',
        },
      ],
      closing:
        'Pintura exterior en Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin y Sherwood. Con licencia y asegurados en Oregon. Se habla español.',
    },
  },

  // ------------------------------------------------------------ tenido/stain
  'staining-sealing': {
    en: {
      title: 'Deck Staining & Sealing in Beaverton, OR',
      description:
        'Deck, fence and door staining and sealing for homes in Beaverton and the nearby Portland metro. Washed, dried and sealed against rain and UV so the grain stays warm, not gray.',
      h1: 'Deck staining and sealing',
      lede: 'Decks, fences and doors sealed against moisture and sun, so the grain stays warm instead of going silver-gray.',
      intro: [
        'Untreated wood in Oregon goes gray, then soft, then it starts costing real money. The gray is UV breaking down the surface of the fibers; the soft part is water that got in behind it. Stain and sealer are what slow both down, and they only work if the wood underneath is clean and genuinely dry when they go on.',
        'That last point is where most deck jobs go wrong. A deck washed on Saturday and sealed on Sunday traps the water it just absorbed. We build drying time into the schedule instead of pretending it does not exist.',
      ],
      includes: [
        {
          h: 'Decks and railings',
          p: 'Washed, allowed to dry, then stained or sealed — including the rail caps and the top edges of boards, which take the most sun and fail first.',
        },
        {
          h: 'Fences and gates',
          p: 'Both sides where access allows, with the posts and bottom rails given attention since that is where ground moisture works upward.',
        },
        {
          h: 'Front doors and trim',
          p: 'Stained wood entry doors stripped back where needed and refinished, rather than painted over.',
        },
        {
          h: 'Transparent, semi or solid',
          p: 'We walk through the trade-off with you: more pigment means more UV protection and less visible grain. There is no single right answer, only the one that matches how the wood already looks.',
        },
        {
          h: 'Board check',
          p: 'While we wash, we find the soft boards and loose fasteners. You get told about them whether or not we are the ones fixing them.',
        },
      ],
      process: [
        {
          h: 'Free estimate',
          p: 'We look at the wood, the exposure and the condition of the existing finish, and give you a written number.',
        },
        {
          h: 'Clean',
          p: 'Moss, mildew, old flaking finish and mill glaze come off. Stain will not bond through any of it.',
        },
        {
          h: 'Dry',
          p: 'The wood gets the time it needs. Sealing wet wood is the single most common reason a deck finish fails within a year.',
        },
        {
          h: 'Stain and seal',
          p: 'Applied in the right weather window, worked into the end grain and the joints, and left to cure before the furniture goes back.',
        },
      ],
      closing:
        'Deck, fence and door staining across Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin and Sherwood. Licensed and insured. Se habla español.',
    },
    es: {
      title: 'Teñido y Sellado de Terrazas en Beaverton, OR',
      description:
        'Teñido y sellado de terrazas, cercas y puertas en Beaverton y alrededores. Lavado, secado y sellado contra lluvia y sol para que la madera no se agrise.',
      h1: 'Teñido y sellado',
      lede: 'Terrazas, cercas y puertas selladas contra la humedad y el sol, para que la madera conserve su color en vez de volverse gris.',
      intro: [
        'La madera sin tratar en Oregon primero se agrisa, luego se ablanda y al final cuesta dinero de verdad. El gris es el sol rompiendo la superficie de la fibra; lo blando es el agua que se metió por detrás. El tinte y el sellador frenan las dos cosas, y solo funcionan si la madera de abajo está limpia y de verdad seca cuando se aplican.',
        'Ese último punto es donde se arruinan casi todos los trabajos de terraza. Una terraza lavada el sábado y sellada el domingo queda con el agua que acaba de absorber atrapada adentro. Nosotros metemos el tiempo de secado en el programa en vez de fingir que no existe.',
      ],
      includes: [
        {
          h: 'Terrazas y barandales',
          p: 'Lavados, secados y luego teñidos o sellados, incluidos los pasamanos y los cantos superiores de las tablas, que reciben más sol y fallan primero.',
        },
        {
          h: 'Cercas y portones',
          p: 'Por ambos lados donde se puede acceder, con atención a los postes y a los travesaños bajos, que es por donde sube la humedad del suelo.',
        },
        {
          h: 'Puertas de entrada y molduras',
          p: 'Las puertas de madera teñida se decapan donde hace falta y se reacaban, en vez de taparlas con pintura.',
        },
        {
          h: 'Transparente, semi o sólido',
          p: 'Revisamos contigo el intercambio: más pigmento significa más protección contra el sol y menos veta visible. No hay una respuesta correcta, solo la que va con cómo se ve ya tu madera.',
        },
        {
          h: 'Revisión de tablas',
          p: 'Mientras lavamos encontramos las tablas blandas y los clavos flojos. Te los decimos, seamos o no quienes los reparen.',
        },
      ],
      process: [
        {
          h: 'Estimado gratis',
          p: 'Vemos la madera, la exposición al sol y el estado del acabado que ya tiene, y te damos un número por escrito.',
        },
        {
          h: 'Limpiar',
          p: 'Sale el musgo, el moho, el acabado viejo descarapelado y el vidriado de aserradero. El tinte no pega a través de nada de eso.',
        },
        {
          h: 'Secar',
          p: 'La madera recibe el tiempo que necesita. Sellar madera húmeda es la razón más común de que un acabado de terraza falle en menos de un año.',
        },
        {
          h: 'Teñir y sellar',
          p: 'Se aplica en la ventana de clima correcta, trabajando las testas y las juntas, y se deja curar antes de regresar los muebles.',
        },
      ],
      closing:
        'Teñido de terrazas, cercas y puertas en Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin y Sherwood. Con licencia y asegurados. Se habla español.',
    },
  },

  // ------------------------------------------------------------ power wash
  'power-washing': {
    en: {
      title: 'Power Washing in Beaverton, OR',
      description:
        'Power washing for homes in Beaverton and the nearby Portland metro: siding, patios, walkways and driveways stripped of moss, mildew and grime. Free estimates, licensed and insured.',
      h1: 'Power washing',
      lede: 'Siding, patios, walkways and driveways stripped of moss, mildew and grime — as a job on its own or as the first day of a paint job.',
      intro: [
        'Around here, washing is not cosmetic. Moss holds water against a surface, and water against a surface is how siding rots and how concrete spalls. Getting the growth off is maintenance, and doing it on a schedule is cheaper than the repair it prevents.',
        'Pressure is also the part people get wrong. The same setting that is right for a concrete driveway will drive water behind lap siding or carve lines into a cedar fence. We match pressure and technique to the material instead of running everything at maximum.',
      ],
      includes: [
        {
          h: 'House siding',
          p: 'Moss, mildew, cobwebs and chalking removed at a pressure the siding can take, working downward so nothing gets driven up under the laps.',
        },
        {
          h: 'Driveways and walkways',
          p: 'Concrete and pavers cleaned of the green film that makes them slick in winter — which is a safety issue before it is an appearance one.',
        },
        {
          h: 'Patios and decks',
          p: 'Cleaned carefully on wood, which is softer than people expect and shows every pass if it is done wrong.',
        },
        {
          h: 'Fences and retaining walls',
          p: 'The north-facing runs that never see sun and hold moss year-round.',
        },
        {
          h: 'Pre-paint washing',
          p: 'If washing is the first step of an exterior repaint, it is priced as part of that job — not billed twice.',
        },
      ],
      process: [
        {
          h: 'Free estimate',
          p: 'We look at the surfaces, the growth and the access, and give you a written number.',
        },
        {
          h: 'Protect',
          p: 'Plants, light fixtures, outlets and vents covered before we start. Water goes where we point it and nowhere else.',
        },
        {
          h: 'Wash',
          p: 'Pressure and nozzle matched to the material, worked in overlapping passes so there are no stripes left behind.',
        },
        {
          h: 'Check',
          p: 'A walk around with you at the end. If a stain is not coming out with water, we tell you that instead of running the machine until something gets damaged.',
        },
      ],
      closing:
        'Power washing across Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin and Sherwood. Licensed and insured in Oregon. Se habla español.',
    },
    es: {
      title: 'Lavado a Presión en Beaverton, OR',
      description:
        'Lavado a presión para casas en Beaverton y alrededores: revestimientos, patios, andadores y entradas libres de musgo, moho y mugre. Estimados gratis.',
      h1: 'Lavado a presión',
      lede: 'Revestimientos, patios, andadores y entradas libres de musgo, moho y mugre — como trabajo propio o como el primer día de un trabajo de pintura.',
      intro: [
        'Por acá lavar no es cosa de apariencia. El musgo retiene agua contra la superficie, y el agua contra la superficie es la forma en que se pudre el revestimiento y se descascara el concreto. Quitar el crecimiento es mantenimiento, y hacerlo con calendario sale más barato que la reparación que evita.',
        'La presión es la otra parte que se hace mal seguido. El mismo ajuste que sirve para una entrada de concreto mete agua detrás del revestimiento o talla líneas en una cerca de cedro. Ajustamos presión y técnica al material en vez de correr todo al máximo.',
      ],
      includes: [
        {
          h: 'Revestimiento de la casa',
          p: 'Musgo, moho, telarañas y pintura calcinada retirados a una presión que el revestimiento aguanta, trabajando hacia abajo para no meter agua bajo los traslapes.',
        },
        {
          h: 'Entradas y andadores',
          p: 'Concreto y adoquín sin esa película verde que los pone resbalosos en invierno, que es un tema de seguridad antes que de estética.',
        },
        {
          h: 'Patios y terrazas',
          p: 'Limpiados con cuidado sobre madera, que es más blanda de lo que la gente cree y marca cada pasada si se hace mal.',
        },
        {
          h: 'Cercas y muros de contención',
          p: 'Los tramos orientados al norte que nunca ven sol y guardan musgo todo el año.',
        },
        {
          h: 'Lavado previo a pintar',
          p: 'Si el lavado es el primer paso de un repintado exterior, va incluido en el precio de ese trabajo y no se cobra dos veces.',
        },
      ],
      process: [
        {
          h: 'Estimado gratis',
          p: 'Vemos las superficies, el crecimiento y los accesos, y te damos un número por escrito.',
        },
        {
          h: 'Proteger',
          p: 'Plantas, luminarias, contactos y ventilaciones cubiertos antes de empezar. El agua va a donde la apuntamos y a ningún otro lado.',
        },
        {
          h: 'Lavar',
          p: 'Presión y boquilla ajustadas al material, con pasadas traslapadas para no dejar rayas.',
        },
        {
          h: 'Revisar',
          p: 'Una vuelta contigo al final. Si una mancha no sale con agua, te lo decimos en vez de insistir con la máquina hasta dañar algo.',
        },
      ],
      closing:
        'Lavado a presión en Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin y Sherwood. Con licencia y asegurados en Oregon. Se habla español.',
    },
  },

  // ------------------------------------------------------------- prep/repair
  'prep-repair': {
    en: {
      title: 'Surface Prep & Repair Before Painting | Beaverton, OR',
      description:
        'Sanding, caulking, patching and priming for homes in Beaverton and the nearby Portland metro. The prep work that decides whether a paint job lasts two years or ten.',
      h1: 'Surface prep and repair',
      lede: 'Sanding, caulking, patching and priming. The part nobody sees is the part that decides how long the finish lasts.',
      intro: [
        'Almost every paint failure we get called out to look at is a prep failure. Paint peeling off in sheets means it was applied over something it could not bond to. A crack that reappeared after a year means it was filled but never stabilized. New paint over a bad surface buys you one season.',
        'Prep is not glamorous and it is the first thing cut when a bid needs to look cheaper. We price it openly instead, because it is the actual difference between a finish that holds for two years and one that holds for ten.',
      ],
      includes: [
        {
          h: 'Sanding and scraping',
          p: 'Loose and failing coating removed back to something sound, and glossy surfaces dulled so the next coat has something to grip.',
        },
        {
          h: 'Patching and filling',
          p: 'Drywall damage, nail pops, dents and gouges filled, sanded flush and feathered so the repair does not read as a patch under raking light.',
        },
        {
          h: 'Caulking',
          p: 'Trim gaps, joints and penetrations sealed. Inside it is what makes lines look sharp; outside it is what keeps water from getting behind the paint.',
        },
        {
          h: 'Priming',
          p: 'Bare wood, patched areas, stains and bleed-through spot-primed or fully primed depending on what the surface is doing.',
        },
        {
          h: 'Honest assessment',
          p: 'If a board is rotted through or a substrate needs replacing rather than coating, you hear it before we paint over it — not after.',
        },
      ],
      process: [
        {
          h: 'Free estimate',
          p: 'We assess what the surface actually needs and put the prep in writing as its own line, so you can see what you are paying for.',
        },
        {
          h: 'Clean and dry',
          p: 'Nothing gets filled or primed over dirt, moss or moisture. That is where most of the shortcuts happen.',
        },
        {
          h: 'Repair',
          p: 'Fill, sand, caulk and prime in the order the surface requires, with cure time respected between steps.',
        },
        {
          h: 'Hand off to finish',
          p: 'The surface goes to paint only when it is ready. If that means a day longer, it means a day longer.',
        },
      ],
      closing:
        'Prep and repair across Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin and Sherwood. Licensed and insured in Oregon. Se habla español.',
    },
    es: {
      title: 'Preparación y Reparación Antes de Pintar | Beaverton, OR',
      description:
        'Lijado, sellado de juntas, resane e imprimación en Beaverton y alrededores. La preparación que decide si un trabajo de pintura dura dos años o diez.',
      h1: 'Preparación y reparación',
      lede: 'Lijado, sellado de juntas, resane e imprimación. Lo que nadie ve es justo lo que decide cuánto dura el acabado.',
      intro: [
        'Casi todas las fallas de pintura que nos llaman a revisar son fallas de preparación. La pintura que se desprende en placas se aplicó sobre algo a lo que no podía adherirse. Una grieta que reapareció al año se rellenó pero nunca se estabilizó. Pintura nueva sobre una superficie mala te compra una temporada.',
        'La preparación no es vistosa y es lo primero que se recorta cuando una cotización tiene que verse más barata. Nosotros la cobramos de frente, porque es la diferencia real entre un acabado que aguanta dos años y uno que aguanta diez.',
      ],
      includes: [
        {
          h: 'Lijado y raspado',
          p: 'Se retira el recubrimiento suelto o vencido hasta llegar a material sano, y se matan los brillos para que la siguiente mano tenga de dónde agarrarse.',
        },
        {
          h: 'Resane y relleno',
          p: 'Daños en tablaroca, clavos saltados, golpes y raspones se rellenan, se lijan al ras y se difuminan para que la reparación no se note con luz rasante.',
        },
        {
          h: 'Sellado de juntas',
          p: 'Separaciones de moldura, uniones y penetraciones selladas. Adentro es lo que hace que las líneas se vean limpias; afuera es lo que evita que el agua se meta detrás de la pintura.',
        },
        {
          h: 'Imprimación',
          p: 'Madera desnuda, zonas resanadas, manchas y sangrados se imprimen por punto o por completo según lo que esté haciendo la superficie.',
        },
        {
          h: 'Diagnóstico honesto',
          p: 'Si una tabla está podrida o un material hay que cambiarlo en vez de recubrirlo, te enteras antes de que pintemos encima, no después.',
        },
      ],
      process: [
        {
          h: 'Estimado gratis',
          p: 'Evaluamos qué necesita de verdad la superficie y ponemos la preparación por escrito como su propia línea, para que veas qué estás pagando.',
        },
        {
          h: 'Limpio y seco',
          p: 'No se rellena ni se imprima sobre tierra, musgo o humedad. Ahí es donde se toman casi todos los atajos.',
        },
        {
          h: 'Reparar',
          p: 'Rellenar, lijar, sellar e imprimar en el orden que pide la superficie, respetando el tiempo de curado entre pasos.',
        },
        {
          h: 'Entregar a pintura',
          p: 'La superficie pasa a pintarse solo cuando está lista. Si eso significa un día más, es un día más.',
        },
      ],
      closing:
        'Preparación y reparación en Beaverton, Aloha, Tigard, Hillsboro, Portland, Lake Oswego, Tualatin y Sherwood. Con licencia y asegurados en Oregon. Se habla español.',
    },
  },
};
