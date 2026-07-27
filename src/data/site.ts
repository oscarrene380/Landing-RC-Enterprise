/**
 * Single source of truth for business data.
 * Cambia aquí el teléfono, correo o direcciones y se actualiza todo el sitio.
 */

export const site = {
  name: 'Residential Construction Enterprise, LLC',
  shortName: 'RC Enterprise',
  tagline: {
    en: 'Residential painting in the Portland metro',
    es: 'Pintura residencial en el área de Portland',
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
  address: {
    street: '2827 SW Tranquility Terrace',
    city: 'Beaverton',
    region: 'OR',
    postalCode: '97006',
    country: 'US',
  },
  geo: { lat: 45.4757167, lng: -122.8145236 },
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

export const mapEmbed =
  'https://www.google.com/maps/embed/v1/place?key=&q=Residential+Construction+Enterprise+llc,Beaverton,OR';

/** Iframe sin API key: funciona igual y no requiere facturación de Google Cloud. */
export const mapSrc = `https://maps.google.com/maps?q=${contact.geo.lat},${contact.geo.lng}&z=14&output=embed`;

export const hours = [
  { en: 'Monday – Friday', es: 'Lunes a viernes', time: '9:00 – 17:00' },
  { en: 'Saturday', es: 'Sábado', time: '10:00 – 16:00' },
  { en: 'Sunday', es: 'Domingo', time: { en: 'Closed', es: 'Cerrado' } },
] as const;

export const serviceAreas = [
  'Portland',
  'Beaverton',
  'Hillsboro',
  'Tigard',
  'Lake Oswego',
  'Aloha',
  'Tualatin',
  'Sherwood',
] as const;
