// Material-System-Seiten — technische Tiefe pro Beschichtungsklasse.
// Quellen: research/01-materialien-eigenschaften.md
// Compliance: Sachkundenachweis, keine WHG-Fachbetriebs-Behauptung, keine Pauschalpreise.

import type { Service } from './services'

export const MATERIAL_PAGES: Service[] = [
  // ============================================================ /pu-beschichtung/
  {
    slug: 'pu-beschichtung',
    href: '/pu-beschichtung/',
    title: 'PU-Bodenbeschichtung – elastisch, UV-stabil, schwer belastbar',
    shortTitle: 'PU-Beschichtung',
    metaTitle: 'PU-Bodenbeschichtung Bocholt · Polyurethan | IBS',
    metaDescription:
      'Polyurethan-Bodenbeschichtung vom Fachbetrieb: elastisch, UV-stabil, temperatur- und chemikalien­beständig. Für Außenflächen, Tiefgaragen, Produktion und Sonder­einsätze. Nach DIN EN 13813. Bocholt · NRW.',
    hero: {
      eyebrow: 'Material · Polyurethan',
      headline: 'Polyurethan-Beschichtung — überall, wo Epoxidharz an Grenzen stößt.',
      sub: 'PU bringt Eigenschaften, die EP nicht hat: Elastizität, UV-Stabilität, Temperatur­beständigkeit. Ideal für Außenflächen, Parkdecks, Kühl- und Produktions­bereiche. Sachkundig verarbeitet nach DIN EN 13813.',
      bullets: [
        'Elastisch & rissüberbrückend',
        'UV-stabil & vergilbungs­frei',
        'Temperatur-Toleranz höher als EP',
      ],
    },
    intro:
      'Polyurethan (PU/PUR) ist ein Reaktionsharz aus der Polyaddition von Polyisocyanaten mit Polyolen. Als Bodenbeschichtung nach DIN EN 13813 ist PU elastischer und UV-stabiler als Epoxidharz und damit erste Wahl, wenn Außenflächen, Frost-Tau-Wechsel oder Temperatur­schwankungen ins Spiel kommen. IBS verarbeitet PU-Systeme von Remmers und KLB.',
    suitableFor: [
      'Außenflächen und Hofflächen',
      'Parkdecks und befahrbare Außen­flächen',
      'Kühl- und Tiefkühl­räume',
      'Produktions­bereiche mit thermischer Belastung',
      'Balkone und Terrassen (oft mit PMMA kombiniert)',
      'Bereiche mit dynamischer Rissüberbrückung',
    ],
    problems: [
      { title: 'EP vergilbt im UV-Licht', text: 'Klassisches Epoxidharz wird unter UV-Bestrahlung gelblich und kreidet aus. Außen ist das ein Optikproblem.' },
      { title: 'EP ist starr', text: 'Bei Temperatur­wechsel und Setzungen reißt eine starre EP-Beschichtung. PU bleibt elastisch.' },
      { title: 'Frost-Tau zerstört starre Systeme', text: 'Außenflächen erleben pro Jahr Dutzende Frost-Tau-Wechsel. Starres EP reißt, PU folgt der Bewegung.' },
    ],
    solution: {
      title: 'PU dort, wo seine Stärken zählen',
      text: 'Wir wählen PU statt EP, wenn UV, Temperatur oder Bewegung im Spiel sind. Für Innen­flächen ohne diese Anforderungen ist EP meist die wirtschaftlichere Wahl. Wir beraten ehrlich.',
      bullets: [
        'PU-Versiegelung (0,1–0,3 mm) als UV-Schutzschicht auf EP',
        'PU-Vollbeschichtung (0,5–1,5 mm) für Außenflächen',
        'PU-Hartstoffmörtel für höchste mechanische Belastung',
        'Kombination EP-Aufbau + PU-Versiegelung für Innen­flächen mit Sonne',
      ],
    },
    process: [
      { title: '01 · Beratung', text: 'Wir analysieren UV-Belastung, Temperatur­wechsel, mechanische Anforderungen.' },
      { title: '02 · Systemauswahl', text: 'PU pur oder Hybrid (EP-Basis + PU-Versiegelung) — mit Schicht­aufbau und Belastungs­klasse.' },
      { title: '03 · Vorbereitung', text: 'Untergrund­vorbereitung, Reparaturen, Grundierung passend zur PU-Klasse.' },
      { title: '04 · Beschichtung', text: 'PU-Auftrag in 1–3 Schichten – mit Quarz­einstreu für R10/R11 bei Bedarf.' },
      { title: '05 · Übergabe', text: 'Begehung, Pflege­hinweise, optional Wartungs­plan für Außenflächen.' },
    ],
    benefits: [
      'UV-stabil — keine Vergilbung außen',
      'Elastisch — überbrückt Risse und Bewegungen',
      'Temperatur­beständig — auch in Kühl­bereichen',
      'Sehr gute chemische Resistenz',
      'In RAL-Farben lieferbar',
      'Kombinierbar mit Epoxidharz-Aufbauten',
    ],
    materials: [
      { title: 'Remmers PU-Beschichtung', text: 'PU-Versiegelungen und Vollbeschichtungen. Schulungs­zertifiziert.' },
      { title: 'KLB PU-System', text: 'Polyurethan-Beschichtungen mit hoher mechanischer Resistenz.' },
      { title: 'PU-Hartstoffmörtel', text: 'Für höchste Belastung in Produktion und Logistik.' },
    ],
    industries: [
      'Parkhäuser und Tiefgaragen',
      'Kühl- und Tiefkühl­logistik',
      'Außenflächen Industrie',
      'Lebensmittel-Produktion',
      'Sonderbauten',
    ],
    faqs: [
      { q: 'Was ist der Unterschied zwischen PU und Epoxidharz?',
        a: 'Epoxidharz (EP) ist starrer, härter und meist günstiger – ideal für Innenflächen ohne UV-Belastung. Polyurethan (PU) ist elastischer, UV-stabiler und temperatur­beständiger – ideal für Außenflächen und Bewegungs­anschlüsse. Oft wird ein EP-Aufbau mit einer dünnen PU-Versiegelung kombiniert.' },
      { q: 'Verkraftet PU höhere Temperaturen?',
        a: 'Reine PU-Beschichtungen sind je nach System bis ca. +60 °C dauerhaft belastbar. Spezielle PU-Zementestriche halten kurzzeitig bis +120 °C. Die genauen Werte stehen in den Hersteller-Technischen Datenblättern, die wir vor Vergabe gemeinsam prüfen.' },
      { q: 'Wann ist PU sinnvoller als PMMA?',
        a: 'PMMA ist auf Schnelligkeit getrimmt (45 Min Härtung). PU bringt mehr mechanische Substanz und ist günstiger pro m². Für Schnellbau-Sanierungen im laufenden Betrieb ist PMMA besser, für robuste Außenflächen meist PU.' },
      { q: 'Sind PU-Beschichtungen rutschsicher?',
        a: 'Ja. Über Quarz- oder Korund­einstreuung in der Versiegelungs­schicht stellen wir R9 bis R13 nach DIN 51130 ein. Für Außenflächen empfehlen wir mindestens R11.' },
      { q: 'Wie lange hält eine PU-Beschichtung?',
        a: 'Bei fachgerechtem Aufbau und passendem System sind 15 bis 20 Jahre Nutzungs­dauer üblich – im Außenbereich abhängig von UV-Last und Wartung.' },
    ],
    keywords: [
      'pu bodenbeschichtung', 'polyurethan bodenbeschichtung', 'bodenbeschichtung polyurethan', 'pu harz bodenbeschichtung', 'pu bodenbeschichtung außen', 'bodenbeschichtung pu oder epoxy', 'pu beschichtung industrieboden', 'polyurethan beschichtung',
    ],
    image: '/images/scenes/pu-beschichtung-hero.jpg',
    thumbnail: '/images/scenes/pu-beschichtung-hero.jpg',
  },

  // ============================================================ /pmma-beschichtung/
  {
    slug: 'pmma-beschichtung',
    href: '/pmma-beschichtung/',
    title: 'PMMA-Beschichtung – Schnellsystem für Balkone & laufenden Betrieb',
    shortTitle: 'PMMA-Beschichtung',
    metaTitle: 'PMMA-Bodenbeschichtung Bocholt · Flüssigkunststoff | IBS',
    metaDescription:
      'PMMA-Beschichtung vom Fachbetrieb: nach 45–60 Minuten begehbar, frostunempfindlich bei Verarbeitung. Ideal für Balkonsanierung, Parkdecks und Sanierung im laufenden Betrieb. Bocholt · NRW.',
    hero: {
      eyebrow: 'Material · PMMA',
      headline: 'PMMA — wenn der Termin gestern war.',
      sub: 'PMMA-Reaktionsharz (Methacrylat / Flüssigkunststoff) ist nach 45 bis 60 Minuten begehbar und auch bei niedrigen Temperaturen verarbeitbar. Ideal für Balkonsanierung, Parkdecks und Sanierung im laufenden Betrieb.',
      bullets: [
        'Nach ca. 45 Min. begehbar',
        'Auch bei niedrigen Temperaturen verarbeitbar',
        'Für Balkon, Parkdeck und Notfall-Sanierung',
      ],
    },
    intro:
      'PMMA (Polymethyl­methacrylat) ist ein Reaktionsharz, das innerhalb von Minuten aushärtet. Als Flüssigkunststoff-Beschichtung ist PMMA bei niedrigen Temperaturen verarbeitbar und nach 45 bis 60 Minuten begehbar — daher die Standard­lösung für Balkon­sanierung, Park­deck-Reparatur und Sanierung mit knappen Stillstands­fenstern. IBS verarbeitet PMMA-Systeme von Remmers.',
    suitableFor: [
      'Balkone und Terrassen',
      'Parkdecks (in Verbindung mit OS-11a/b)',
      'Notfall-Sanierung von Industrieböden',
      'Flächen mit knapper Bauzeit',
      'Außenflächen mit Frostrisiko',
      'Stark gerissene Untergründe (rissüberbrückend)',
    ],
    problems: [
      { title: 'EP braucht 24 h pro Schicht', text: 'Klassisches Epoxidharz blockiert die Fläche tagelang — für viele Aufträge zu lang.' },
      { title: 'Außenarbeit im Winter', text: 'Unter 8 °C ist EP nicht mehr verarbeitbar — viele Sanierungen müssen warten.' },
      { title: 'Balkon nicht nutzbar', text: 'Bei klassischer Sanierung ist der Balkon eine Woche gesperrt — bei PMMA oft nur einen Tag.' },
    ],
    solution: {
      title: 'PMMA als Schnellsystem mit gleicher Qualität',
      text: 'Wir setzen PMMA ein, wo Zeit zählt: Balkon­sanierung, Parkdeck-Reparatur, Notfall-Industrieboden. Die Verarbeitung erfordert Erfahrung — wir setzen sie sachkundig ein.',
      bullets: [
        'PMMA-Abdichtung als Basis (OS-11a/b auf Parkdecks)',
        'Decklage als PMMA-Beschichtung oder Steinteppich',
        'Rutsch­hemmung R10/R11 über Quarz­einstreuung',
        'Einsatz auch bei +5 °C möglich (System­spezifisch)',
        'Hohlkehlen, Anschlüsse und Abläufe sauber',
      ],
    },
    process: [
      { title: '01 · Bestandsaufnahme', text: 'Risse, Untergrund, Anschlüsse, Abläufe, Belastung.' },
      { title: '02 · Systemwahl', text: 'PMMA pur oder PMMA + Steinteppich-Decklage. Schicht­aufbau mit Festpreis.' },
      { title: '03 · Vorbereitung', text: 'Alte Beläge entfernen, Risse öffnen, Untergrund prüfen, grundieren.' },
      { title: '04 · Abdichtung', text: 'PMMA-Abdichtung mit Vliesarmierung an Anschlüssen und Hohlkehlen.' },
      { title: '05 · Decklage', text: 'PMMA-Beschichtung, Steinteppich oder farbige Decklage.' },
      { title: '06 · Übergabe', text: 'Bei Standardbalkonen typischerweise an einem Arbeitstag fertig.' },
    ],
    benefits: [
      'Begehbar nach 45–60 Minuten (system­abhängig)',
      'Voll belastbar nach wenigen Stunden',
      'Auch bei kühler Witterung verarbeitbar',
      'Hervorragende Rissüberbrückung',
      'UV-stabil und alterungs­beständig',
      'Im Mehrkomponenten-Aufbau extrem dicht',
    ],
    materials: [
      { title: 'Remmers PMMA-System', text: 'Schnellbau-Reaktionsharz für Balkon, Parkdeck und Industrieboden-Reparatur.' },
      { title: 'PMMA + Steinteppich', text: 'Hochwertige Decklage aus Marmorkiesel auf PMMA-Abdichtung — ideal für Balkone.' },
    ],
    industries: [
      'Privat-Eigentümer (Balkon, Terrasse)',
      'Hausverwaltungen / WEG',
      'Parkhaus-Betreiber',
      'Industrie mit knappen Stillstands­zeiten',
    ],
    faqs: [
      { q: 'Stimmt die „1-Stunden-Härtung"?',
        a: 'Begehbar ist die PMMA-Beschichtung typischerweise nach 45 bis 60 Minuten bei +20 °C; voll belastbar nach ca. 2 Stunden. Die genauen Werte stehen im Hersteller-Datenblatt des jeweiligen Systems. „1 Stunde" ist herstellerspezifisch, nicht Branchen­standard.' },
      { q: 'Was unterscheidet PMMA von EP?',
        a: 'PMMA ist deutlich schneller (Minuten statt Stunden bis Begehbarkeit), bei niedrigen Temperaturen verarbeitbar und elastischer. EP ist günstiger und einfacher zu verarbeiten, braucht aber Stunden bis Tage Aushärtung pro Schicht.' },
      { q: 'Riecht PMMA stark?',
        a: 'Während der Verarbeitung tritt typischer Methylmethacrylat-Geruch auf. Wir lüften und arbeiten mit geeigneter Belüftung. Nach Aushärtung ist die Beschichtung geruchsneutral.' },
      { q: 'Hält PMMA auf Balkonen wirklich?',
        a: 'Ja. Mehrere Hundertausend Balkone in Deutschland sind mit PMMA-Schnellsystemen abgedichtet — bei sachkundiger Verarbeitung und passendem Aufbau (Abdichtung + Decklage) sind 15 bis 25 Jahre Nutzungs­dauer realistisch.' },
      { q: 'Was kostet eine PMMA-Beschichtung?',
        a: 'Marktüblich 2026 zwischen 90 und 180 €/m² – je nach Aufbau und Schnellbau-Anteil. Eine Standard-Balkonsanierung mit PMMA + Decklage liegt häufig zwischen 120 und 180 €/m².' },
    ],
    keywords: [
      'pmma beschichtung', 'bodenbeschichtung pmma', 'bodenbeschichtung flüssigkunststoff', 'flüssig kunststoff bodenbeschichtung', 'flüssigkunststoff bodenbeschichtung', 'flüssige bodenbeschichtung', 'methacrylat beschichtung', 'pmma balkon', 'pmma parkdeck',
    ],
    image: '/images/scenes/pmma-beschichtung-hero.jpg',
    thumbnail: '/images/scenes/pmma-beschichtung-hero.jpg',
  },

  // ============================================================ /whg-beschichtung/
  {
    slug: 'whg-beschichtung',
    href: '/whg-beschichtung/',
    title: 'WHG-Beschichtung — Auffangräume nach §62 AwSV sachkundig beschichten',
    shortTitle: 'WHG-Beschichtung',
    metaTitle: 'WHG-Bodenbeschichtung · §19/§62 AwSV | IBS Schmäing',
    metaDescription:
      'WHG-Bodenbeschichtung: sachkundige Verarbeitung DIBt-zugelassener Systeme für Auffangräume nach §62 AwSV / §63 WHG. Mit Sachkundenachweis – Bocholt, NRW, Niederrhein, Ruhrgebiet.',
    hero: {
      eyebrow: 'Material · WHG · AwSV',
      headline: 'WHG-Beschichtung für Auffangräume — sachkundig verarbeitet.',
      sub: 'Auffangräume nach §62 AwSV / §63 WHG verlangen DIBt-zugelassene Beschichtungs­systeme und sachkundige Verarbeitung. Wir setzen geprüfte Systeme von Remmers und KLB ein — mit gültigem Sachkunde­nachweis.',
      bullets: [
        'Sachkundenachweis nach AwSV',
        'DIBt-zugelassene Systeme',
        'Hohlkehlen, Anschlüsse, Dichtheits­prüfung',
      ],
    },
    intro:
      'Eine WHG-Beschichtung ist eine flüssigkeitsdichte Bodenbeschichtung für Anlagen zum Umgang mit wassergefährdenden Stoffen nach §62 AwSV bzw. §63 WHG. Solche Beschichtungen brauchen eine Zulassung des DIBt (allgemeine bauaufsichtliche Zulassung). IBS Schmäing verarbeitet diese Systeme sachkundig — mit gültigem Sachkunde­nachweis (keine WHG-Fachbetriebs-Zertifizierung).',
    suitableFor: [
      'Auffangräume für Mineralöl, Lacke, Säuren, Laugen',
      'HBV- und LAU-Anlagen',
      'Tanks und Tank-Zonen',
      'Abfüll- und Umschlag­flächen',
      'Werkstätten mit chemischer Lagerung',
      'Gefahrstoff­lager',
    ],
    problems: [
      { title: '§62-Pflicht nicht erfüllt', text: 'Beim Lagern oder Umschlagen wassergefährdender Stoffe ab bestimmten Volumen ist eine flüssigkeitsdichte Beschichtung Pflicht. Fehlende Compliance kostet.' },
      { title: 'Falsches System gewählt', text: 'Nicht jede „chemikalien­beständige" Beschichtung ist DIBt-zugelassen. Nur geprüfte Systeme sind WHG-konform.' },
      { title: 'Hohlkehlen vergessen', text: 'Der Auffangraum braucht aufgehende Hohlkehlen — sonst ist er nicht „flüssigkeitsdicht" im Sinne der Norm.' },
    ],
    solution: {
      title: 'DIBt-zugelassene Systeme sachkundig verarbeitet',
      text: 'Wir nutzen Systeme mit allgemeiner bauaufsichtlicher Zulassung (abZ/aBG) bzw. Prüfzeugnis (abP) — abgestimmt auf das gelagerte Medium. Verarbeitung mit Sachkunde­nachweis nach AwSV, inkl. Hohlkehlen, Anschlüsse und Dokumentation.',
      bullets: [
        'Systemwahl nach gelagertem Medium (Mineralöl, Säure, Lauge, etc.)',
        'Sachkundiger Aufbau inkl. Hohlkehlen und Anschlüsse',
        'Dichtheits­prüfung im Anschluss',
        'Dokumentation für die Anzeige bei der Unteren Wasserbehörde',
        'Optional: Wartungs- und Inspektions­plan',
      ],
    },
    process: [
      { title: '01 · Medien- und Mengen-Analyse', text: 'Welches Medium? Welche WGK-Stufe? Welche Auffang­menge? Daraus folgt die Auswahl der zugelassenen Systeme.' },
      { title: '02 · Systemvorschlag', text: 'Konkrete DIBt-Zulassung, Schicht­aufbau, Hohlkehlen-Detail, Anschluss­situationen.' },
      { title: '03 · Untergrund­vorbereitung', text: 'Kugelstrahlen oder Fräsen, Reparatur, Grundierung.' },
      { title: '04 · Beschichtung', text: 'Schichtweise Auftrag mit zugelassenem System – inklusive Hohlkehlen und Anschlüssen.' },
      { title: '05 · Dichtheits­prüfung', text: 'Visuelle Prüfung und optional Wasser­standsprobe. Übergabe mit Dokumentation.' },
    ],
    benefits: [
      'Erfüllt §62 AwSV / §63 WHG',
      'DIBt-zugelassene Systeme',
      'Hohlkehlen und Anschlüsse normgerecht',
      'Sachkundige Verarbeitung dokumentiert',
      'Wartungs­empfehlung inklusive',
      'Kombinierbar mit Markierungen und Rutsch­hemmung',
    ],
    materials: [
      { title: 'Remmers WHG-Systeme', text: 'EP-Beschichtungen mit DIBt-Zulassung für definierte Medien.' },
      { title: 'KLB WHG-Schutzsysteme', text: 'Reaktionsharz-Systeme mit hoher Chemie­resistenz – nach Mediumliste.' },
    ],
    industries: [
      'Industrie- und Gewerbe­betriebe mit Tank-/Lager­anlagen',
      'Werkstätten mit Lacken oder Beizen',
      'Galvanik und Oberflächentechnik',
      'Druck- und Beschichtungs­industrie',
      'Heizungsanlagen mit Heizöl­lagerung',
    ],
    faqs: [
      { q: 'Ist IBS WHG-Fachbetrieb?',
        a: 'Nein. IBS Schmäing hat keine Fachbetriebs-Zertifizierung nach §62 AwSV als Firma. Wir verfügen aber über einen gültigen Sachkunde­nachweis und verarbeiten DIBt-zugelassene Systeme sachkundig. Für bestimmte Anlagen kann zusätzlich ein zertifizierter Fachbetrieb für Errichtung / Instandsetzung der Gesamt­anlage erforderlich sein — das prüfen wir gemeinsam.' },
      { q: 'Was bedeutet DIBt-Zulassung?',
        a: 'Das Deutsche Institut für Bautechnik (DIBt) erteilt allgemeine bauaufsichtliche Zulassungen (abZ) bzw. allgemeine Bauart­genehmigungen (aBG) für Beschichtungs­systeme zur Verwendung in WHG-Auffangräumen. Nur zugelassene Systeme dürfen in einer §62-Anlage eingesetzt werden.' },
      { q: 'Welches System für welches Medium?',
        a: 'Jede DIBt-Zulassung hat eine Medien­liste (z. B. „Mineralöl bis WGK 2, Säuren bis 10 %, etc."). Wir wählen das System nach Ihrer konkreten Lager­liste. Eine Universallösung gibt es nicht.' },
      { q: 'Brauche ich eine Anzeige bei der Behörde?',
        a: 'Ab bestimmten Volumen sind WHG-Anlagen anzeige- oder genehmigungs­pflichtig bei der Unteren Wasserbehörde. Die exakte Pflicht hängt von Stoff, Volumen und WGK-Klasse ab. Wir liefern die Dokumentation, die Anzeige­pflicht klären Sie mit der Behörde.' },
      { q: 'Wie oft muss die Beschichtung geprüft werden?',
        a: 'Üblich sind regelmäßige Sicht- und Dichtheits­prüfungen sowie ggf. Sachverständigen­prüfungen (z. B. alle 5 Jahre durch SV gemäß AwSV §46) — abhängig von Anlagentyp und Behörden­auflage.' },
    ],
    keywords: [
      'whg bodenbeschichtung', 'bodenbeschichtung whg', 'bodenbeschichtung nach whg', 'bodenbeschichtung nach whg 19', 'auffangraum beschichtung', 'awsv beschichtung', 'whg beschichtung industrie', 'dibt beschichtung', 'flüssigkeitsdichte beschichtung',
    ],
    image: '/images/scenes/whg-beschichtung-hero.jpg',
    thumbnail: '/images/scenes/whg-beschichtung-hero.jpg',
  },
]

export const MATERIAL_BY_SLUG: Record<string, Service> = MATERIAL_PAGES.reduce(
  (acc, m) => ({ ...acc, [m.slug]: m }),
  {} as Record<string, Service>,
)
