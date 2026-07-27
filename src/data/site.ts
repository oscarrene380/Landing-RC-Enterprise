/**
 * Single source of truth for business data.
 * Cambia aquí el teléfono, correo o direcciones y se actualiza todo el sitio.
 */

export const site = {
  name: 'Residential Construction Enterprise, LLC',
  shortName: 'RC Enterprise',
  tagline: {
    en: 'Residential painting in Beaverton, OR',
    es: 'Pintura residencial en Beaverton, OR',
  },
  url: 'https://rcenterprisepainting.com',
  foundedYear: 1998,
  yearsOfExperience: 27,
  ccb: 'CCB #235749',
} as const;

export const contact = {
  phone: '(971) 203-1123',
  phoneRaw: '+19712031123',
  whatsapp: '19712031123',
  email: 'rcenterprisellc.info@gmail.com',
  /**
   * El negocio opera desde un domicilio particular, sin local abierto al
   * público: para Google es un "service-area business". En ese caso la calle
   * NO se publica —ni en la web ni en el perfil de Google— porque publicarla
   * es motivo de suspensión de la ficha. Por eso aquí solo vive la ciudad, el
   * estado y el código postal, que es exactamente lo que se muestra y lo que
   * va al schema. La calle exacta se gestiona en el perfil de Google (oculta)
   * y en la licencia CCB; no hace falta en este repositorio, que es público.
   */
  address: {
    city: 'Beaverton',
    region: 'OR',
    postalCode: '97008',
    country: 'US',
  },
  /**
   * Centro de Beaverton, no el domicilio. Alimenta el mapa y el GeoCircle del
   * schema: queremos señalar la ciudad, no marcar la casa con un pin.
   */
  geo: { lat: 45.4871, lng: -122.8037 },
  /** Radio de cobertura declarado, en millas. Se usa en el texto y el schema. */
  serviceRadiusMiles: 25,
} as const;

export const social = {
  facebook: 'https://www.facebook.com/residentialconstructionenterprise/',
  googleMaps: 'https://maps.app.goo.gl/Sk46LNEXxb4EggLh6',
  /** Abre directamente el cuadro para escribir una reseña en Google */
  googleReview: 'https://search.google.com/local/writereview?placeid=ChIJ--N1e7sNlVQRGVRygt82njg',
  homeAdvisor: 'https://www.homeadvisor.com/rated.RESIDENTIALCONSTRUCTION.115197041.html',
  /**
   * Buscador oficial de licencias de la Oregon Construction Contractors Board.
   * Es una app con renderizado por JavaScript y no admite enlace directo a una
   * licencia, así que lleva al buscador: el cliente pega el número de CCB.
   */
  ccbSearch: 'https://search.ccb.state.or.us/search/',
} as const;

/**
 * Iframe sin API key: funciona igual y no requiere facturación de Google Cloud.
 * Encuadra la ciudad entera en vez de poner un pin en unas coordenadas: el mapa
 * ilustra el área que cubrimos, no dónde vive nadie.
 */
export const mapSrc = `https://maps.google.com/maps?q=${contact.address.city},${contact.address.region}&z=11&output=embed`;

export const hours = [
  { en: 'Monday – Friday', es: 'Lunes a viernes', time: '9:00 – 17:00' },
  { en: 'Saturday', es: 'Sábado', time: '10:00 – 16:00' },
  { en: 'Sunday', es: 'Domingo', time: { en: 'Closed', es: 'Cerrado' } },
] as const;

/**
 * La ciudad base. El negocio está físicamente en Beaverton y ahí es donde
 * queremos rankear primero, así que se trata aparte del resto: encabeza las
 * listas, se destaca en el diseño y es la única que aparece en los <title>.
 */
export const primaryArea = 'Beaverton' as const;

/** Alrededores, ordenados por cercanía real a Beaverton (no alfabéticamente). */
export const nearbyAreas = [
  'Aloha',
  'Tigard',
  'Hillsboro',
  'Portland',
  'Lake Oswego',
  'Tualatin',
  'Sherwood',
] as const;

/** Lista completa con Beaverton al frente. La consumen el schema y el footer. */
export const serviceAreas = [primaryArea, ...nearbyAreas] as const;
