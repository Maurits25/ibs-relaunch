// URL-Mapping: bestehende URL → neue URL, Aktion, SEO-Hinweis.
// Grundregel: bestehende URL = neue URL. Nur bei zwingend notwendiger Änderung
// wird ein 301 angelegt (siehe public/_redirects und next.config.mjs).

export type UrlMapping = {
  legacy: string
  next: string
  action: 'keep' | '301' | 'new'
  note: string
}

export const URL_MAPPING: UrlMapping[] = [
  { legacy: '/',                    next: '/',                    action: 'keep', note: 'Startseite – komplett neu gestaltet, URL identisch.' },
  { legacy: '/leistungen/',         next: '/leistungen/',         action: 'keep', note: 'Übersichtsseite aller Leistungen.' },
  { legacy: '/beschichtung/',       next: '/beschichtung/',       action: 'keep', note: 'Epoxidharzbeschichtung – Hauptranking-URL, bleibt.' },
  { legacy: '/versiegelungen/',     next: '/versiegelungen/',     action: 'keep', note: 'Sanierung & Versiegelung – URL bleibt.' },
  { legacy: '/ep-estrich/',         next: '/ep-estrich/',         action: 'keep', note: 'Epoxidharzestrich – URL bleibt.' },
  { legacy: '/dekorbelaege/',       next: '/dekorbelaege/',       action: 'keep', note: 'Steinteppich & Dekorbeläge – URL bleibt.' },
  { legacy: '/betonoptik/',         next: '/betonoptik/',         action: 'keep', note: 'Designböden / Betonoptik – URL bleibt.' },
  { legacy: '/balkon/',             next: '/balkon/',             action: 'keep', note: 'Balkonsanierung – URL bleibt.' },
  { legacy: '/referenzen/',         next: '/referenzen/',         action: 'keep', note: 'Referenzen / Projektgalerie.' },
  { legacy: '/ueber-uns/',          next: '/ueber-uns/',          action: 'keep', note: 'Über uns – URL bleibt.' },
  { legacy: '/service/',            next: '/service/',            action: 'keep', note: 'Service – URL bleibt.' },
  { legacy: '/kontakt/',            next: '/kontakt/',            action: 'keep', note: 'Kontakt – URL bleibt.' },
  { legacy: '/impressum/',          next: '/impressum/',          action: 'keep', note: 'Impressum – URL bleibt.' },
  { legacy: '/datenschutz/',        next: '/datenschutz/',        action: 'keep', note: 'Datenschutz – URL bleibt, Inhalte werden überarbeitet.' },

  // Neu ergänzte SEO-Seiten
  { legacy: '—',                    next: '/ablauf/',             action: 'new',  note: 'Neu: dedizierte Ablauf-Seite zur Conversion-Stärkung.' },
  { legacy: '—',                    next: '/faq/',                action: 'new',  note: 'Neu: zentrale FAQ-Seite mit FAQPage Schema.' },
  { legacy: '—',                    next: '/einsatzbereiche/',    action: 'new',  note: 'Neu: Branchen-Hub für interne Verlinkung & SEO.' },
  { legacy: '—',                    next: '/anfrage/',            action: 'new',  note: 'Neu: dedizierte Anfrageseite mit Upload-Funktion.' },

  // Häufige Tippfehler / Synonyme → 301
  { legacy: '/epoxidharzbeschichtung', next: '/beschichtung/',    action: '301',  note: 'Häufige Schreibweise → /beschichtung/.' },
  { legacy: '/sanierung',           next: '/versiegelungen/',     action: '301',  note: 'Synonym → /versiegelungen/.' },
  { legacy: '/sanierungen',         next: '/versiegelungen/',     action: '301',  note: 'Synonym → /versiegelungen/.' },
  { legacy: '/steinteppich',        next: '/dekorbelaege/',       action: '301',  note: 'Synonym → /dekorbelaege/.' },
  { legacy: '/designboden',         next: '/betonoptik/',         action: '301',  note: 'Synonym → /betonoptik/.' },
  { legacy: '/balkonsanierung',     next: '/balkon/',             action: '301',  note: 'Synonym → /balkon/.' },
  { legacy: '/index.php',           next: '/',                    action: '301',  note: 'WordPress-Reste.' },
  { legacy: '/index.html',          next: '/',                    action: '301',  note: 'Legacy.' },
]
