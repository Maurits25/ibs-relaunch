// Einsatzbereiche / Branchen — verlinken auf die Leistungen.

export type Industry = {
  id: string
  title: string
  subtitle: string
  description: string
  needs: string[]
  recommended: string[]   // Service Slugs
  icon: string
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'industrie',
    title: 'Industrie & Lagerhallen',
    subtitle: 'Belastbar unter Schwerlast und Staplerverkehr',
    description:
      'Hallenböden müssen extrem viel aushalten: Punktlasten, Vibration, Öl, Reinigungsmittel und thermische Wechsel. Wir konfigurieren das System nach Ihrer Belastung.',
    needs: [
      'Belastbarkeit unter Staplerverkehr',
      'Chemikalien- und Ölbeständigkeit',
      'Markierungen und Sicherheitskennzeichnung',
      'Fugenlose, leicht zu reinigende Flächen',
    ],
    recommended: ['beschichtung', 'versiegelungen', 'ep-estrich'],
    icon: 'warehouse',
  },
  {
    id: 'werkstatt',
    title: 'Werkstatt & Produktion',
    subtitle: 'Saubere Flächen für Maschinenbau, Kfz und Metall',
    description:
      'Werkstattböden müssen ölbeständig, schnitt- und stoßfest sein und sich täglich problemlos reinigen lassen. Wir wählen Schichtaufbau und Rutsch­hemmung passend zur Tätigkeit.',
    needs: [
      'Ölabweisende, dichte Oberfläche',
      'Markierungen für Sicherheit',
      'Schnelle Reparatur einzelner Stellen',
      'Trittsicherheit auch bei Nässe',
    ],
    recommended: ['beschichtung', 'versiegelungen'],
    icon: 'wrench',
  },
  {
    id: 'garage-keller',
    title: 'Garage & Keller',
    subtitle: 'Für Privat und Hausverwaltung',
    description:
      'Garagen- und Kellerböden staubst nicht, sind schnell sauber und sehen hochwertig aus. Wir realisieren Beschichtungen oder Steinteppich – innen verdichtet.',
    needs: [
      'Staubfreie, dichte Oberfläche',
      'Beständig gegen Reifen, Öl, Salz',
      'Optisch hochwertige Anmutung',
      'Pflegeleicht',
    ],
    recommended: ['beschichtung', 'dekorbelaege', 'versiegelungen'],
    icon: 'car',
  },
  {
    id: 'balkon-terrasse',
    title: 'Balkon & Terrasse',
    subtitle: 'Schnelltechnik mit PMMA – oft in einem Tag fertig',
    description:
      'Geflieste Balkone werden undicht und unsicher. Wir sanieren mit PMMA-Schnelltechnik und einer Decklage nach Wahl – Steinteppich, Beschichtung oder Designoberfläche.',
    needs: [
      'Dauerhafte Abdichtung',
      'Frostfest und UV-stabil',
      'Trittsicher auch bei Nässe',
      'Kurze Bauzeit',
    ],
    recommended: ['balkon', 'dekorbelaege'],
    icon: 'sun',
  },
  {
    id: 'whg',
    title: 'WHG-Auffangräume',
    subtitle: 'Geprüfte Systeme nach §19 WHG',
    description:
      'Auffangräume für wassergefährdende Stoffe verlangen geprüfte Beschichtungs­systeme. Wir verarbeiten Hersteller­systeme mit Allgemeiner Bauaufsichtlicher Zulassung.',
    needs: [
      'Chemikalien­beständigkeit nach Liste',
      'Dauer­dichtigkeit und Nachweis',
      'Hohlkehlen und Anschlüsse korrekt',
      'Wartungs­dokumentation',
    ],
    recommended: ['beschichtung'],
    icon: 'shield',
  },
  {
    id: 'verkauf-showroom',
    title: 'Verkauf, Showroom & Praxis',
    subtitle: 'Repräsentation trifft Robustheit',
    description:
      'Für Räume, in denen der Boden sichtbar Teil der Marke ist: fugenlose Designböden in Betonoptik, Steinteppich oder Designharz – mit Industrie­langlebigkeit.',
    needs: [
      'Hochwertiger Look',
      'Stille, ruhige Oberfläche',
      'Reinigungs­freundlich',
      'Mehrjährige Belastbarkeit',
    ],
    recommended: ['betonoptik', 'dekorbelaege'],
    icon: 'sparkles',
  },
]
