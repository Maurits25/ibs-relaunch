// Hauptnavigation — orientiert sich an der bestehenden Sitemap.

export type NavItem = {
  label: string
  href: string
  description?: string
  children?: NavItem[]
}

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Leistungen',
    href: '/leistungen/',
    description: 'Alle Boden­systeme im Überblick',
    children: [
      { label: 'Epoxidharz­beschichtung', href: '/beschichtung/', description: 'WHG, ESD, R9–R13 · Industriequalität' },
      { label: 'PU-Beschichtung', href: '/pu-beschichtung/', description: 'Elastisch · UV-stabil · außenfest' },
      { label: 'PMMA-Schnellsystem', href: '/pmma-beschichtung/', description: 'Nach 45 Min. begehbar · Balkon, Parkdeck' },
      { label: 'WHG-Beschichtung', href: '/whg-beschichtung/', description: 'Auffangräume nach §62 AwSV' },
      { label: 'Sanierung & Versiegelung', href: '/versiegelungen/', description: 'Risse, Löcher, im laufenden Betrieb' },
      { label: 'Epoxidharz­estrich', href: '/ep-estrich/', description: 'Reaktionsharzmörtel · schnell befahrbar' },
      { label: 'Steinteppich & Dekorbeläge', href: '/dekorbelaege/', description: 'Innen & außen · natürliche Optik' },
      { label: 'Designboden / Betonoptik', href: '/betonoptik/', description: 'Fugenlos · hochwertige Anmutung' },
      { label: 'Balkon­sanierung', href: '/balkon/', description: 'PMMA-Schnellsysteme' },
    ],
  },
  {
    label: 'Anwendungen',
    href: '/einsatzbereiche/',
    description: 'Branchen & Themen-Hubs',
    children: [
      { label: 'Industrieboden', href: '/industrieboden/', description: 'Hallen, Logistik, Produktion' },
      { label: 'Garagenboden', href: '/garagenboden/', description: 'Privat & WEG' },
      { label: 'Werkstattboden', href: '/werkstattboden/', description: 'Kfz, Metall, Maschinenbau' },
      { label: 'Kellerboden', href: '/kellerboden/', description: 'Diffusionsoffen oder dicht' },
      { label: 'Industriebodensanierung', href: '/industriebodensanierung/', description: 'Bestandsflächen wieder belastbar' },
      { label: 'Parkhaus & Tiefgarage', href: '/einsatzbereiche/parkhaus-tiefgarage/', description: 'OS-11a / OS-11b' },
      { label: 'Lebensmittel & Pharma', href: '/einsatzbereiche/lebensmittel-pharma/', description: 'IFS, HACCP, R12/R13' },
      { label: 'WHG-Auffangräume', href: '/einsatzbereiche/whg-auffangraeume/', description: '§62 AwSV · sachkundig' },
    ],
  },
  {
    label: 'Eigenschaften',
    href: '/eigenschaften/',
    description: 'Rutschhemmung, ESD, Diffusionsoffen',
  },
  { label: 'Referenzen', href: '/referenzen/' },
  { label: 'Ratgeber', href: '/ratgeber/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Kontakt', href: '/kontakt/' },
]

export const FOOTER_NAV = {
  leistungen: [
    { label: 'Epoxidharz­beschichtung', href: '/beschichtung/' },
    { label: 'Sanierung & Versiegelung', href: '/versiegelungen/' },
    { label: 'Epoxidharz­estrich', href: '/ep-estrich/' },
    { label: 'Steinteppich', href: '/dekorbelaege/' },
    { label: 'Designboden / Betonoptik', href: '/betonoptik/' },
    { label: 'Balkonsanierung', href: '/balkon/' },
  ],
  einsatz: [
    { label: 'Industrie & Lager', href: '/einsatzbereiche/#industrie' },
    { label: 'Werkstatt & Produktion', href: '/einsatzbereiche/#werkstatt' },
    { label: 'Garage & Keller', href: '/einsatzbereiche/#garage-keller' },
    { label: 'Balkon & Terrasse', href: '/einsatzbereiche/#balkon-terrasse' },
    { label: 'WHG-Auffangräume', href: '/einsatzbereiche/#whg' },
  ],
  unternehmen: [
    { label: 'Über uns', href: '/ueber-uns/' },
    { label: 'Ablauf', href: '/ablauf/' },
    { label: 'Referenzen', href: '/referenzen/' },
    { label: 'Service', href: '/service/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum/' },
    { label: 'Datenschutz', href: '/datenschutz/' },
  ],
}
