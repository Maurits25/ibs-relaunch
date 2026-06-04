// Referenzprojekte — Bilder werden aus der bestehenden Site übernommen.
// Beschreibungen sind generisch gehalten (keine erfundenen Kundennamen).

export type Project = {
  id: string
  title: string
  category: 'industrie' | 'werkstatt' | 'gewerbe' | 'balkon' | 'wohnen' | 'sonderloesung'
  service: string         // Service Slug
  description: string
  image: string
  size?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'heiligenhaus-hohlkehle',
    title: 'Industrieboden mit Hohlkehle',
    category: 'industrie',
    service: 'beschichtung',
    description:
      'Hallenboden inklusive sauber gearbeiteter Hohlkehle an Wand­anschlüssen – chemikalien­beständig und leicht zu reinigen.',
    image: '/images/projects/heiligenhaus-hohlkehle.jpg',
  },
  {
    id: 'beschichtung-werkstatt-1',
    title: 'Beschichtung in Werkstatthalle',
    category: 'werkstatt',
    service: 'beschichtung',
    description: 'Voll beschichtete Werkstatt mit Markierungen für Verkehrs­wege und Lagerflächen.',
    image: '/images/projects/werkstatt-beschichtung-1.jpg',
  },
  {
    id: 'beschichtung-werkstatt-2',
    title: 'Werkstattboden Sanierung',
    category: 'werkstatt',
    service: 'beschichtung',
    description: 'Vorherige Beschädigung saniert, neue Beschichtung mit hoher Beständigkeit gegen Öl und Reinigungs­mittel.',
    image: '/images/projects/werkstatt-beschichtung-2.jpg',
  },
  {
    id: 'industrie-1',
    title: 'Industriehalle – fugenlose Beschichtung',
    category: 'industrie',
    service: 'beschichtung',
    description: 'Großflächige Industriehalle mit hoher Beanspruchung – fugenlos beschichtet.',
    image: '/images/projects/industrie-1.jpg',
  },
  {
    id: 'industrie-2',
    title: 'Industrieboden mit Sicherheitskennzeichnung',
    category: 'industrie',
    service: 'beschichtung',
    description: 'Kombination aus Beschichtung und Markierung für Logistik- und Verkehrs­wege.',
    image: '/images/projects/industrie-2.jpg',
  },
  {
    id: 'industrie-3',
    title: 'Schwerlastfähige Industrie­beschichtung',
    category: 'industrie',
    service: 'beschichtung',
    description: 'Beschichtung für Schwerlasten in einem Produktions­betrieb.',
    image: '/images/projects/industrie-3.jpg',
  },
  {
    id: 'zeusnik',
    title: 'Beschichtung Gewerbegebäude',
    category: 'gewerbe',
    service: 'beschichtung',
    description: 'Gewerbliche Beschichtung mit hochwertiger Optik und Versiegelung.',
    image: '/images/projects/zeusnik.jpg',
  },
  {
    id: 'bauwerk-koeln',
    title: 'Sanierung Bauwerk Köln',
    category: 'sonderloesung',
    service: 'versiegelungen',
    description: 'Sanierung eines anspruchsvollen Bauwerks mit Reaktionsharz­systemen.',
    image: '/images/projects/bauwerk-koeln.jpg',
  },
  {
    id: 'fahrwegsmarkierung',
    title: 'Fahrwegs­markierungen',
    category: 'industrie',
    service: 'beschichtung',
    description: 'Sicherheits­markierungen, Verkehrs­leitlinien und Sperrflächen in Industrie­halle.',
    image: '/images/projects/fahrwegsmarkierungen.jpg',
  },
  {
    id: 'sic-color-top-rhede',
    title: 'Color-Top-Beschichtung in Rhede',
    category: 'gewerbe',
    service: 'beschichtung',
    description: 'Farbig gestaltete Beschichtung mit Rutsch­hemmung und Hochglanz-Versiegelung.',
    image: '/images/projects/zeusnik-2.jpg',
  },
  {
    id: 'metalu',
    title: 'Industrie­beschichtung Metallverarbeitung',
    category: 'industrie',
    service: 'beschichtung',
    description: 'Speziell für metall­verarbeitenden Betrieb ausgelegt – chemikalien­beständig.',
    image: '/images/projects/metalu-floor.jpg',
  },
  {
    id: 'steinteppich-projekt',
    title: 'Steinteppich Außenbereich',
    category: 'wohnen',
    service: 'dekorbelaege',
    description: 'Hochwertiger Marmor-Steinteppich im Außenbereich – frostfest und rutsch­hemmend.',
    image: '/images/projects/steinteppich.jpg',
  },
  {
    id: 'projekt-2019-1',
    title: 'Industrieboden Sanierung',
    category: 'industrie',
    service: 'versiegelungen',
    description: 'Sanierung einer mehrere hundert Quadratmeter großen Industrie­fläche.',
    image: '/images/projects/projekt-2019-1.jpg',
  },
  {
    id: 'projekt-2019-2',
    title: 'Industriebeschichtung Detail',
    category: 'industrie',
    service: 'beschichtung',
    description: 'Detail einer fugenlosen Industrie­beschichtung mit sauberen Anschlüssen.',
    image: '/images/projects/projekt-2019-2.jpg',
  },
  {
    id: 'projekt-2019-3',
    title: 'Gewerblicher Boden',
    category: 'gewerbe',
    service: 'beschichtung',
    description: 'Gewerblicher Boden in Showroom-Qualität.',
    image: '/images/projects/projekt-2019-3.jpg',
  },
  {
    id: 'projekt-2019-4',
    title: 'Sanierung & Versiegelung',
    category: 'industrie',
    service: 'versiegelungen',
    description: 'Komplett­sanierung mit anschließender Schutz­versiegelung.',
    image: '/images/projects/projekt-2019-4.jpg',
  },
]
