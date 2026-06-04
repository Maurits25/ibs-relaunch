// Zentrale Stammdaten — werden in Layout, SEO, JSON-LD, Footer & Kontakt verwendet.
//
// HINWEIS Datenstand 2026-06:
// - Gewerbeanmeldung: 04/2011 (siehe `founded`)
// - Adresse: Kreuzstr. 5, 46395 Bocholt (operative Adresse aus Google Business Profile).
// - Marken-Partner: nur tatsächliche Materialien-Hersteller (Remmers, KLB, Korodur).
//   IBS hat KEINE offiziellen Partnerverträge, ABER Schulungs-Zertifikate von Remmers.

export const SITE = {
  name: 'IBS Industriebodensanierung Schmäing',
  shortName: 'IBS Schmäing',
  legalName: 'IBS Industriebodensanierung Schmäing',
  owner: 'Daniel Schmäing',
  /** Gewerbeanmeldung 04/2011 */
  founded: 2011,
  /** Persönliche Erfahrung des Inhabers (über 20 Jahre in der Industrie­bodensanierung) */
  ownerExperienceYears: 20,
  url: 'https://ibs-industriebodensanierung.de',
  locale: 'de_DE',
  defaultTitle:
    'Industriebodensanierung & Bodenbeschichtung – IBS Schmäing | Bocholt · Niederrhein',
  defaultDescription:
    'IBS Schmäing aus Bocholt: Fachbetrieb für Industriebodensanierung, Epoxidharz-Beschichtungen, WHG- und Parkhaus-Systeme (OS-11a/b), Versiegelungen, Steinteppich und Designböden. Seit 2011 — mit über 20 Jahren Erfahrung am Niederrhein, Ruhrgebiet, Raum Düsseldorf und Osnabrück.',
  region: 'Bocholt · Niederrhein · Ruhrgebiet · Düsseldorf · Osnabrück · NRW',
  serviceArea: [
    'Bocholt',
    'Kreis Borken',
    'Kreis Wesel',
    'Münsterland',
    'Niederrhein',
    'Ruhrgebiet',
    'Raum Düsseldorf',
    'Raum Osnabrück',
    'NRW',
    'Niedersachsen Süd-West',
    'Niederlande Grenzregion',
  ],
  address: {
    street: 'Kreuzstr. 5',
    postalCode: '46395',
    city: 'Bocholt',
    country: 'Deutschland',
    countryCode: 'DE',
    region: 'Nordrhein-Westfalen',
  },
  contact: {
    phone: '+49 2871 2345300',
    phoneDisplay: '02871 / 234 53 00',
    fax: '+49 2871 2948616',
    faxDisplay: '02871 / 29 486 16',
    email: 'info@ibs-industriebodensanierung.de',
    mobileOwner: '+49 151 50474636',
    mobileOwnerDisplay: '0151 / 504 746 36',
    mobileSales: '+49 170 7330479',
    mobileSalesDisplay: '0170 / 73 30 479',
  },
  vatId: 'DE287833430',
  socials: {
    facebook: 'https://www.facebook.com/ibsschmaeing/',
    instagram: 'https://www.instagram.com/ibs_schmaeing/',
  },
  /** Google Business Profile (für LocalBusiness-Schema und sameAs) */
  googleBusinessProfileUrl: 'https://share.google/lUejxudADKLHgbDGK',
  /** Aktuelle Werte aus Google Business Profile (manuell aktualisieren) */
  reviews: {
    ratingValue: 5.0,
    reviewCount: 3,
    bestRating: 5,
    source: 'Google',
  },
  /** Tatsächlich verarbeitete Material-Marken (keine offiziellen Partnerschaften) */
  partners: [
    { name: 'Remmers',  logo: '/logos/partner-remmers.svg',  note: 'Schulungs-Zertifikate vorhanden' },
    { name: 'KLB',      logo: '/logos/partner-klb.svg',      note: 'Kötztaler Beschichtungs­systeme' },
    { name: 'Korodur',  logo: '/logos/partner-korodur.svg',  note: 'Hartstoffeinstreuung' },
  ],
  /** Schriftlich freigegebene Referenz-Kunden für Trust-Bar */
  referenceCustomers: [
    { name: 'Siemens',     logo: '/logos/referenzen/siemens.svg',     industry: 'Industrie & Automation' },
    { name: 'Honeywell',   logo: '/logos/referenzen/honeywell.svg',   industry: 'Technologie & Klimasysteme' },
    { name: 'KHS',         logo: '/logos/referenzen/khs.svg',         industry: 'Abfüll- und Verpackungs­technik' },
    { name: 'RKW',         logo: '/logos/referenzen/rkw.svg',         industry: 'Kunststoff­verarbeitung' },
    { name: 'TÜV Nord',    logo: '/logos/referenzen/tuev-nord.svg',   industry: 'Prüfung & Zertifizierung' },
    { name: 'Hörmann',     logo: '/logos/referenzen/hoermann.svg',    industry: 'Tor- und Türsysteme' },
  ],
  /** Zertifikate / Qualifikationen (verifiziert: Sachkundenachweis vorhanden, keine WHG-Fachbetriebs-Zulassung) */
  qualifications: {
    sachkundenachweis: true,         // Sachkundige Verarbeitung
    whgFachbetrieb: false,            // Keine Fachbetriebs-Zertifizierung nach §62 AwSV
    remmersSchulungen: true,          // Schulungs-Zertifikate vom Hersteller
  },
} as const

export type SiteConfig = typeof SITE
