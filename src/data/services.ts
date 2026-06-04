// Zentrale Datenquelle für alle Leistungsseiten.
// Slugs entsprechen den bestehenden URLs (Ranking-Schutz!).

export type ServiceFAQ = { q: string; a: string }

export type Service = {
  slug: string                 // entspricht bestehender URL ohne Slashes
  href: string                 // mit führendem / und trailing Slash
  title: string                // Anzeige-Titel
  shortTitle: string           // Kurzform für Nav/Cards
  metaTitle: string
  metaDescription: string
  hero: {
    eyebrow: string
    headline: string
    sub: string
    bullets: string[]
  }
  intro: string
  suitableFor: string[]
  problems: { title: string; text: string }[]
  solution: { title: string; text: string; bullets: string[] }
  process: { title: string; text: string }[]
  benefits: string[]
  materials: { title: string; text: string }[]
  industries: string[]
  faqs: ServiceFAQ[]
  keywords: string[]
  image: string                // Header / Hero Bild
  thumbnail: string            // Cards
}

export const SERVICES: Service[] = [
  // ---------------------------------------------------------------- Beschichtung
  {
    slug: 'beschichtung',
    href: '/beschichtung/',
    title: 'Epoxidharz­beschichtung – Industrieboden in Premium-Qualität',
    shortTitle: 'Epoxidharzbeschichtung',
    metaTitle:
      'Epoxidharzbeschichtung Bocholt · WHG · ESD · R9–R13 | IBS Schmäing',
    metaDescription:
      'Epoxidharz­beschichtung vom Fachbetrieb: ölbeständig, chemikalien­resistent, WHG- und ESD-zertifiziert, Rutschhemmung R9–R13. Bocholt, Niederrhein, NRW.',
    hero: {
      eyebrow: 'Bodenbeschichtung',
      headline: 'Industrieböden, die jedem Belastungstest standhalten.',
      sub: 'Maßgefertigte Epoxidharz­beschichtung für Hallen, Werkstätten, Lager und Produktion – wasserdicht oder diffusionsoffen einstellbar, chemikalien­beständig und in jedem RAL-Ton lieferbar.',
      bullets: [
        '20 h begeh- · 3 Tage voll belastbar',
        'Druckfest 97 N/mm² · Biegezug 20 N/mm²',
        'WHG §19 · ESD nach DIN IEC 61340-4-1',
      ],
    },
    intro:
      'Eine Epoxidharz­beschichtung verbindet enorme Belastbarkeit mit Reinraum-Sauberkeit. IBS Schmäing plant und realisiert das System passend zu Ihrer Nutzung – mit der richtigen Schichtstärke, Farbe, Rutsch­hemmung und chemischen Resistenz. Das Ergebnis ist ein fugenloser, leicht zu reinigender Industrieboden, der über viele Jahre stabil bleibt.',
    suitableFor: [
      'Industrie- und Lagerhallen',
      'Produktionsflächen und Werkstätten',
      'Logistik- und Versandbereiche',
      'Verkaufs- und Ausstellungsflächen',
      'Tiefgaragen, Garagen, Kellerräume',
      'Auffangräume nach WHG',
      'Reinräume und ESD-Bereiche',
    ],
    problems: [
      { title: 'Staubender Beton', text: 'Offene Zementoberflächen geben permanent Feinstaub ab – schädlich für Produkte, Anlagen und Mitarbeiter.' },
      { title: 'Öl und Chemie', text: 'Schmierstoffe, Säuren und Lösemittel ziehen ungebremst in poröse Böden ein und zerstören die Statik.' },
      { title: 'Rutschgefahr', text: 'Glatte Beton- oder Fliesenflächen werden bei Nässe zur Unfallquelle – mit erheblichen Haftungsrisiken.' },
      { title: 'Auflagen nicht erfüllt', text: 'Behörden­auflagen für WHG-Auffangräume oder ESD-Zonen verlangen geprüfte Systeme – Standardböden reichen nicht.' },
    ],
    solution: {
      title: 'Unsere Antwort: ein durchgeplantes Beschichtungssystem',
      text: 'Wir beraten Sie kostenfrei vor Ort, prüfen Untergrund, Restfeuchte und Belastung – und konfigurieren das exakt passende System. Verarbeitet wird mit professionellen Markenmaterialien von Remmers, KLB, Triflex und SIKA, ausgeführt staubarm – auch im laufenden Betrieb.',
      bullets: [
        'Untergrund­vorbereitung mit Kugelstrahlen oder Diamantfräsen',
        'Grundierung, Spachtelung, Beschichtung, Versiegelung – als System',
        'Rutschhemmung R9 bis R13 nach Bedarf',
        'RAL-Töne, Chips, Quarzeinstreu, Dekoreinlagen verfügbar',
        'ESD-Ausführung für Elektronik und Reinraum',
      ],
    },
    process: [
      { title: '01 · Beratung & Aufmaß', text: 'Kostenloser Vor-Ort-Termin. Bewertung von Untergrund, Belastung, Nutzung und Auflagen.' },
      { title: '02 · Systemvorschlag', text: 'Konkrete Empfehlung mit Schichtaufbau, Materialien, Farbton, Rutschhemmung und Termin.' },
      { title: '03 · Vorbereitung', text: 'Kugelstrahlen oder Schleifen, Risse und Löcher reparieren, Untergrund grundieren.' },
      { title: '04 · Beschichtung', text: 'Schichtweiser Auftrag, Quarzeinstreu, Versiegelung – staubarm und sauber gearbeitet.' },
      { title: '05 · Abnahme', text: 'Begehung mit Ihnen, Übergabe, Pflege- und Reinigungshinweise.' },
    ],
    benefits: [
      'Extrem belastbar – auch unter Staplerverkehr',
      'Beständig gegen Säuren, Alkohol, Benzin, Mineralöl',
      'Fugenlos, hygienisch und leicht zu reinigen',
      'Anti-Rutsch in 5 Stufen (R9 bis R13)',
      'In nahezu jeder RAL-Farbe lieferbar',
      'Schnelle Aushärtung – kurze Stillstands­zeiten',
      'Nach Herstellervorgaben ESD- und WHG-zertifizierbar',
    ],
    materials: [
      { title: 'Remmers EP-Systeme', text: 'Geprüfte Epoxidharz­systeme für Lager, Industrie und Werkstatt.' },
      { title: 'KLB Bodensysteme', text: 'Robuste Beschichtungen mit hoher chemischer Beständigkeit.' },
      { title: 'Triflex / SIKA', text: 'PMMA- und Polyurethan-Systeme für Schnellbaustellen und Sondernutzungen.' },
    ],
    industries: [
      'Logistik und Lager',
      'Maschinen­bau',
      'Metall­verarbeitung',
      'Kfz und Werkstatt',
      'Lebensmittel und Hygiene',
      'Pharma und Reinraum',
      'Tiefgaragen und Parkhäuser',
    ],
    faqs: [
      { q: 'Wie lange dauert eine Epoxidharz­beschichtung?', a: 'Eine Standardhalle bis ca. 500 m² ist je nach System in 3 bis 5 Tagen fertig. Begehbar ist die Fläche nach ca. 20 Stunden, voll belastbar nach 3 Tagen.' },
      { q: 'Kann während des Betriebs gearbeitet werden?', a: 'Ja. Wir arbeiten zonenweise und mit staubreduzierenden Maschinen – auch nachts oder am Wochenende, wenn es Ihren Ablauf weniger stört.' },
      { q: 'Sind die Böden rutschsicher?', a: 'Wir stellen jede Rutschhemmungsklasse von R9 (Verkauf, Büro) bis R13 (Industrie, nasse Produktion) her – über Quarzeinstreu in der Versiegelung.' },
      { q: 'Sind die Beschichtungen WHG-konform?', a: 'Ja. Wir verarbeiten geprüfte Systeme nach §19 WHG für Auffangräume – mit Allgemeiner Bauaufsichtlicher Zulassung.' },
      { q: 'Welche Lebensdauer ist realistisch?', a: 'Bei fachgerechter Ausführung und passendem System sind 15 bis 25 Jahre Nutzungsdauer üblich.' },
    ],
    keywords: [
      'Epoxidharzbeschichtung Bocholt',
      'Industrieboden beschichten',
      'Bodenbeschichtung WHG',
      'Epoxidharzboden Niederrhein',
      'ESD Bodenbeschichtung',
      'Werkstattboden beschichten',
    ],
    image: '/images/services/01-beschichtung.jpg',
    thumbnail: '/images/services/01-beschichtung.jpg',
  },

  // ---------------------------------------------------------------- Versiegelungen / Sanierungen
  {
    slug: 'versiegelungen',
    href: '/versiegelungen/',
    title: 'Sanierung & Versiegelung – Risse, Löcher und Abnutzung dauerhaft beheben',
    shortTitle: 'Sanierung & Versiegelung',
    metaTitle:
      'Industrieboden sanieren & versiegeln – Bocholt | IBS Schmäing',
    metaDescription:
      'Industrieböden sanieren, Risse und Ausbrüche reparieren, Beton dauerhaft versiegeln. Reaktionsharz­mörtel nach 45 Minuten belastbar – auch nachts und am Wochenende.',
    hero: {
      eyebrow: 'Reparatur & Versiegelung',
      headline: 'Risse, Löcher, staubende Flächen – sauber saniert, schnell befahrbar.',
      sub: 'IBS Schmäing repariert beschädigte Industrieböden und versiegelt sie dauerhaft. Reaktionsharzmörtel sind nach 45 Minuten voll belastbar – ideal für laufende Betriebe.',
      bullets: [
        'Voll belastbar nach 45 Minuten',
        'Auch nachts, am Wochenende, im laufenden Betrieb',
        'Mit Markenmaterial von Remmers, KLB, SIKA',
      ],
    },
    intro:
      'Schäden an Industrieböden bringen Kosten: für Stapler, Räder, Produkte und Mitarbeiter. Wir reparieren Risse, Ausbrüche und Dehnfugen, schließen offene Beton­oberflächen und versiegeln sie chemikalien­fest. Mit schnellaushärtenden Reaktionsharzen ist Ihre Fläche oft am selben Tag wieder befahrbar.',
    suitableFor: [
      'Risse, Setzrisse, Dehnfugenschäden',
      'Löcher, Krater, Ausbrüche',
      'Verschleißzonen vor Toren und Regalen',
      'Staubender, alter Beton',
      'Alte Beschichtungen, die sich lösen',
      'Übergänge und Anschluss­bereiche',
    ],
    problems: [
      { title: 'Staplerschäden steigen', text: 'Jeder Riss, jede Stufe kostet Reifen, Achsen und Bauteile – schleichend, aber teuer.' },
      { title: 'Stillstand vermeiden', text: 'Klassische Sanierung legt Bereiche tagelang lahm – das können viele Betriebe nicht leisten.' },
      { title: 'Kosmetik reicht nicht', text: 'Spachtelreparaturen halten nicht – wir arbeiten kraftschlüssig mit Reaktionsharz.' },
    ],
    solution: {
      title: 'Schnell, sauber, kraftschlüssig',
      text: 'Wir öffnen den Schaden bis in den tragfähigen Untergrund, reinigen und grundieren ihn, füllen mit Reaktionsharz­mörtel und versiegeln die Fläche. Auf Wunsch zusätzlich beschichtet und farblich angepasst.',
      bullets: [
        'Reparatur einzelner Schadstellen oder ganzer Bereiche',
        'Fugen­sanierung mit dauer­elastischen Systemen',
        'Versiegelung gegen Staub, Öl und Chemie',
        'Markierungen, Linien, Sperrflächen',
      ],
    },
    process: [
      { title: '01 · Schadens­aufnahme', text: 'Wir analysieren Ursache und Ausmaß und entscheiden über Material und Schichtaufbau.' },
      { title: '02 · Vorbereitung', text: 'Schadstelle öffnen, lose Teile entfernen, staubarm reinigen, grundieren.' },
      { title: '03 · Reparatur', text: 'Reaktionsharz­mörtel einbringen, nivellieren, abziehen.' },
      { title: '04 · Versiegelung', text: 'Schutzversiegelung gegen Staub, Öl, Chemie. Auf Wunsch passende Optik.' },
      { title: '05 · Freigabe', text: 'Nach kurzer Aushärtezeit – oft am selben Tag – wieder befahrbar.' },
    ],
    benefits: [
      '45-Minuten-Technik möglich',
      'Auch nachts und am Wochenende',
      'Kein Stillstand für den gesamten Betrieb',
      'Versiegelt gegen Staub, Wasser, Öl, Chemie',
      'Farblich und in der Rutschhemmung anpassbar',
    ],
    materials: [
      { title: 'Remmers PCC / Reaktionsharz', text: 'Schnelle, dauerhafte Reparatur­mörtel für jede Belastung.' },
      { title: 'KLB Versiegelung', text: 'Versiegelungs­systeme mit hoher Chemie­resistenz.' },
      { title: 'SIKA Mörtel', text: 'Lösungen für Sonderfälle: Schnellbefahrbarkeit, Hohlkehlen, Fugen.' },
    ],
    industries: [
      'Logistik und Lager',
      'Metallverarbeitung',
      'Lebensmittel und Pharma',
      'Werkstätten',
      'Tiefgaragen',
      'Öffentliche Hand',
    ],
    faqs: [
      { q: 'Wie schnell ist die Fläche wieder befahrbar?', a: 'Mit Reaktionsharz­mörtel typischerweise nach 45 Minuten bis wenigen Stunden – exakt nach Belastungsklasse.' },
      { q: 'Können Sie nachts oder am Wochenende arbeiten?', a: 'Ja. Genau dafür sind die schnell­aushärtenden Systeme gemacht – wir richten uns nach Ihrem Betrieb.' },
      { q: 'Wird auch die Fuge mit saniert?', a: 'Ja. Wir öffnen schadhafte Fugen, säubern sie und füllen sie mit dauerelastischen oder kraftschlüssigen Materialien – je nach Belastung.' },
      { q: 'Hält das langfristig?', a: 'Wir arbeiten kraftschlüssig mit dem Untergrund. Bei passender Materialwahl ist die Reparatur dauerhaft.' },
    ],
    keywords: [
      'Industrieboden sanieren',
      'Risse Industrieboden reparieren',
      'Boden versiegeln Bocholt',
      'Fugensanierung Niederrhein',
      'Betonboden Reparatur',
    ],
    image: '/images/services/02-versiegelung.jpg',
    thumbnail: '/images/services/02-versiegelung.jpg',
  },

  // ---------------------------------------------------------------- EP-Estrich
  {
    slug: 'ep-estrich',
    href: '/ep-estrich/',
    title: 'Epoxidharzestrich – fugenlos, schnell befahrbar, extrem belastbar',
    shortTitle: 'Epoxidharzestrich',
    metaTitle:
      'Epoxidharzestrich Bocholt · Reaktionsharzmörtel | IBS Schmäing',
    metaDescription:
      'Epoxidharzestrich für Industrie, Werkstatt, Lager: nahezu fugenlos, hoher Verschleißwiderstand, schnelle Aushärtung, frostbeständig. Vom Fachbetrieb aus Bocholt.',
    hero: {
      eyebrow: 'Reaktionsharz-Estrich',
      headline: 'Wenn der klassische Estrich an Grenzen stößt.',
      sub: 'Epoxidharz­estrich verbindet höchste Belastbarkeit mit kurzer Bauzeit. Ideal überall dort, wo schnell wieder produziert werden muss.',
      bullets: [
        'Nahezu fugenlos verlegbar',
        'Sehr schnelle Aushärtung',
        'Frostbeständig & feuchtebeständig',
      ],
    },
    intro:
      'Epoxidharz­estrich ist ein Reaktionsharz­mörtel, der direkt auf vorhandene Untergründe aufgebracht wird – mit minimaler Aufbauhöhe und maximaler Belastbarkeit. Er härtet sehr schnell aus, ist nahezu fugenlos und bietet hohen Verschleiß­widerstand sowie ein hohes elektrisches Isolations­vermögen.',
    suitableFor: [
      'Lagerhallen mit Staplerverkehr',
      'Eingangsbereiche & Hofflächen',
      'Kellerräume mit Feuchtebelastung',
      'Garagen und Werkstätten',
      'Balkone und Terrassen',
      'Bereiche mit chemischer Belastung',
    ],
    problems: [
      { title: 'Geringe Aufbauhöhe verfügbar', text: 'Klassischer Estrich ist oft zu dick – Türen, Tore und Anschlüsse leiden.' },
      { title: 'Schnell wieder nutzbar', text: 'Standard­estriche brauchen Wochen, bis sie befahrbar sind.' },
      { title: 'Feuchte oder Frost', text: 'Außenflächen und Keller stellen besondere Anforderungen, die Zement­estrich überfordert.' },
    ],
    solution: {
      title: 'Reaktionsharz­mörtel statt klassischem Estrich',
      text: 'Wir wählen das passende EP-Estrich-System nach Belastung, Aufbauhöhe und Untergrund. Verarbeitet wird mit Materialien von Remmers, KLB und SIKA – staubarm und betriebsfreundlich.',
      bullets: [
        'Nahezu fugenlose Verlegung',
        'Sehr hohe Verschleißfestigkeit',
        'Feuchte- und chemikalien­beständig',
        'Kurze Trocknungszeit – schneller wieder im Betrieb',
      ],
    },
    process: [
      { title: '01 · Bestandsaufnahme', text: 'Aufmaß, Bewertung Untergrund, Belastungs­klasse, Aufbauhöhe.' },
      { title: '02 · Systemwahl', text: 'Materialauswahl nach Anforderung, Vorbereitung des Untergrunds.' },
      { title: '03 · Einbau', text: 'Maschineller oder handwerklicher Einbau, Nivellieren, Abziehen.' },
      { title: '04 · Versiegelung', text: 'Optional Versiegelung und Optik nach Wunsch.' },
    ],
    benefits: [
      'Geringe Aufbauhöhe ab wenigen Millimetern',
      'Schnelle Aushärtung',
      'Hoher Verschleißwiderstand und Schlagzähigkeit',
      'Beständig gegen Feuchtigkeit, Wasser, Chemikalien',
      'Frostbeständig mit geringer Schwindneigung',
      'Hoher elektrischer Widerstand',
    ],
    materials: [
      { title: 'Reaktionsharz­mörtel', text: 'Schnell aushärtende Mörtel auf Epoxid- oder Polyurethanbasis.' },
      { title: 'Hartstoff­einstreuung', text: 'Quarz oder Korund für höchste Verschleiß­festigkeit.' },
    ],
    industries: [
      'Logistik und Lager',
      'Werkstatt und Produktion',
      'Hof- und Außenflächen',
      'Eingangs- und Verkaufs­bereiche',
      'Kellerräume',
    ],
    faqs: [
      { q: 'Wann ist EP-Estrich besser als klassischer Estrich?', a: 'Wenn Aufbauhöhe gering, Belastung hoch oder Trocknungszeit knapp ist – und überall dort, wo Wasser, Frost oder Chemie eine Rolle spielen.' },
      { q: 'Wie dick wird er aufgetragen?', a: 'Je nach System und Belastung typischerweise zwischen 4 und 15 mm.' },
      { q: 'Ist eine Versiegelung sinnvoll?', a: 'Ja – die Versiegelung schützt den Estrich gegen Eindringen von Wasser, Öl und Chemikalien und erleichtert die Reinigung.' },
    ],
    keywords: [
      'Epoxidharzestrich Bocholt',
      'Reaktionsharzmörtel',
      'Industrieestrich',
      'Schnellestrich Niederrhein',
    ],
    image: '/images/services/03-ep-estrich.jpg',
    thumbnail: '/images/services/03-ep-estrich.jpg',
  },

  // ---------------------------------------------------------------- Dekorbeläge / Steinteppich
  {
    slug: 'dekorbelaege',
    href: '/dekorbelaege/',
    title: 'Steinteppich & Dekorbeläge – natürliche Optik, robuste Technik',
    shortTitle: 'Steinteppich & Dekorbeläge',
    metaTitle:
      'Steinteppich & Dekorbeläge Bocholt – Innen & Außen | IBS Schmäing',
    metaDescription:
      'Steinteppich für Balkon, Terrasse, Garage, Eingang: rutschhemmend, pflegeleicht, frostfest. Marmor- und Quarzkiesel in zahlreichen Farben. Vom Fachbetrieb aus Bocholt.',
    hero: {
      eyebrow: 'Naturoptik',
      headline: 'Stein, der bleibt. Optik, die überzeugt.',
      sub: 'Steinteppich aus Marmor- oder Quarzkiesel verbindet edle Anmutung mit handfester Industriequalität – innen wie außen.',
      bullets: [
        'Rutschhemmend & trittschall­dämmend',
        'Frostfest & UV-stabil',
        'Über ein Dutzend Farbtöne lieferbar',
      ],
    },
    intro:
      'Steinteppich ist ein hochwertiger Dekorbelag aus natürlichen Steinkörnungen, die mit transparentem Reaktionsharz verbunden werden. Das Ergebnis: ein offenporiger oder geschlossener Belag mit edlem Look – belastbar, rutschhemmend, pflegeleicht und in vielen Farbtönen lieferbar. Ideal für Balkone, Terrassen, Eingänge, Garagen und gehobene Innenräume.',
    suitableFor: [
      'Balkone und Terrassen',
      'Garagen und Carports',
      'Eingangs­bereiche und Foyers',
      'Wohn- und Verkaufsflächen',
      'Wege und Übergänge',
      'Treppen und Podeste',
    ],
    problems: [
      { title: 'Spröde Fliesen, undichte Beläge', text: 'Klassische Beläge auf Balkonen werden im Lauf der Jahre undicht und unschön.' },
      { title: 'Glatte, unsichere Flächen', text: 'Eingänge bei Nässe sind ein Sicherheits- und Haftungsrisiko.' },
      { title: 'Hoher Reinigungs­aufwand', text: 'Strukturierte Beläge nehmen Schmutz auf, lassen sich aber schwer säubern.' },
    ],
    solution: {
      title: 'Naturkies trifft Hochleistungs­harz',
      text: 'Wir bereiten den Untergrund vor, bringen Grundierung auf und verlegen den Steinteppich vor Ort – im gewünschten Farbton, Aufbau und mit der passenden Rutschhemmung. Außen offenporig zur Drainage, innen verdichtet für hohe Pflegeleichtigkeit.',
      bullets: [
        'Verlegung innen und außen',
        'Offenporig für Drainage oder geschlossen für Reinigung',
        'Farbmischungen nach Wunsch',
        'Hohlkehlen und Anschlüsse sauber ausgeführt',
      ],
    },
    process: [
      { title: '01 · Beratung', text: 'Farbmuster vor Ort, Bewertung Untergrund und Wasserführung.' },
      { title: '02 · Vorbereitung', text: 'Untergrund prüfen, vorbereiten, Abdichten falls erforderlich.' },
      { title: '03 · Grundierung', text: 'Geeignete Reaktionsharz­grundierung als Haftbrücke.' },
      { title: '04 · Verlegung', text: 'Steinteppich Korn für Korn von Hand eingebracht und abgezogen.' },
      { title: '05 · Übergabe', text: 'Pflegehinweise, Begehung, Übergabe.' },
    ],
    benefits: [
      'Hohe Trittschall­dämmung',
      'Pflegeleicht und strapazierfähig',
      'Abriebfest, auch bei Belastung',
      'Selbst bei Nässe rutschhemmend',
      'Frostfest und UV-stabil im Außenbereich',
      'Vielfältige Farbpaletten – natürlich und designorientiert',
    ],
    materials: [
      { title: 'Marmorkiesel', text: 'Edle Naturoptik, viele Farbtöne von Weiß bis Rot, ideal innen und außen.' },
      { title: 'Quarzkiesel', text: 'Sehr abriebfest, modern, perfekt für stark frequentierte Flächen.' },
    ],
    industries: [
      'Privathaushalte',
      'Hausverwaltungen / WEG',
      'Hotellerie & Gastronomie',
      'Verkaufs- und Ausstellungsräume',
      'Architektur und Innenausbau',
    ],
    faqs: [
      { q: 'Wie lange hält ein Steinteppich?', a: 'Bei fachgerechter Verlegung und üblicher Belastung 15 bis 25 Jahre – im Außenbereich abhängig von der Pflege.' },
      { q: 'Welche Korngrößen gibt es?', a: 'Typischerweise 2 bis 4 mm für Wohnbereiche und 4 bis 8 mm für stärker beanspruchte Flächen.' },
      { q: 'Ist der Belag wasserdurchlässig?', a: 'Außen verlegen wir offenporig – Wasser kann durchsickern, Frost greift den Belag nicht an. Innen wird er geschlossen ausgeführt.' },
      { q: 'Wie pflege ich den Belag?', a: 'Einfach absaugen, gelegentlich feucht wischen. Für offenporige Außenflächen empfehlen wir regelmäßiges Ausspritzen.' },
    ],
    keywords: [
      'Steinteppich Bocholt',
      'Steinteppich Balkon',
      'Marmorkiesel Bodenbelag',
      'Steinteppich Garage',
      'Dekorbelag Innen',
    ],
    image: '/images/services/04-steinteppich.jpg',
    thumbnail: '/images/services/04-steinteppich.jpg',
  },

  // ---------------------------------------------------------------- Betonoptik / Designböden
  {
    slug: 'betonoptik',
    href: '/betonoptik/',
    title: 'Designböden in Betonoptik – fugenlos, hochwertig, repräsentativ',
    shortTitle: 'Designboden / Betonoptik',
    metaTitle:
      'Designboden Betonoptik Bocholt · fugenloser Boden | IBS Schmäing',
    metaDescription:
      'Fugenloser Designboden in Betonoptik für Verkaufsräume, Showrooms, Wohnungen und Praxen. Hochwertig, robust, pflegeleicht – realisiert vom IBS Fachbetrieb.',
    hero: {
      eyebrow: 'Designboden',
      headline: 'Beton-Anmutung. Fugenlos. Repräsentativ.',
      sub: 'Fugenlose Designböden in Betonoptik schaffen eine ruhige, hochwertige Fläche – ideal für Verkauf, Showroom, Praxen und Wohnen mit Anspruch.',
      bullets: [
        'Vollständig fugenlos',
        'Reinigungs­freundlich',
        'Individuelle Farb- und Effektgestaltung',
      ],
    },
    intro:
      'Fugenlose Designböden vereinen Industrie­technologie mit Architektur­anspruch. Wir realisieren Spachtelböden mit Betonoptik, mineralisch oder auf Reaktionsharz­basis – hochwertig, rutschfest und in repräsentativen Anwendungen so robust, wie sie aussehen sollen.',
    suitableFor: [
      'Verkaufs- und Ausstellungs­räume',
      'Showrooms und Foyers',
      'Praxen und Kanzleien',
      'Hotellerie und Gastronomie',
      'Hochwertige Wohnungen und Lofts',
      'Öffentliche Gebäude',
    ],
    problems: [
      { title: 'Fugen wirken unruhig', text: 'Großflächige Räume verlangen ruhige Oberflächen – Fliesen unterbrechen das Bild.' },
      { title: 'Robustheit & Optik', text: 'Designböden müssen aussehen wie ein Statement – und sich verhalten wie ein Industrieboden.' },
      { title: 'Hygiene und Reinigung', text: 'Fugen sind Schmutzfänger – fugenlose Flächen sind in Praxen, Hotellerie und Lebensmittel klar im Vorteil.' },
    ],
    solution: {
      title: 'System statt Optik allein',
      text: 'Wir planen Aufbau und Optik gemeinsam: Farbe, Maserung, Glanzgrad, Versiegelung. Verarbeitet werden zertifizierte Systeme, die in öffentlichen Gebäuden Anforderungen an Brandschutz, Hygiene und Umwelt erfüllen.',
      bullets: [
        'Individuelle Farb- und Effekt­varianten',
        'Matt, seidenmatt, glänzend',
        'Geringe Aufbauhöhe',
        'Schnelle Sanierung möglich',
      ],
    },
    process: [
      { title: '01 · Konzept', text: 'Wir besprechen Look, Belastung und Termin – mit Mustern vor Ort.' },
      { title: '02 · Untergrund', text: 'Vorbereitung des Untergrunds mit Fräse, Schleifer oder Strahlung.' },
      { title: '03 · Spachtelung', text: 'Boden wird in dünnen Lagen aufgespachtelt – das schafft den charakteristischen Look.' },
      { title: '04 · Versiegelung', text: 'Versiegelung in der gewünschten Glanzstufe und Rutschhemmung.' },
    ],
    benefits: [
      'Vollkommen fugenlose Oberfläche',
      'Hochwertige Anmutung – wie aus einem Guss',
      'Robust und langlebig',
      'Geringe Aufbauhöhe',
      'Schnelle Realisierung',
      'Hygienisch und pflegeleicht',
    ],
    materials: [
      { title: 'Mineralischer Spachtelboden', text: 'Natürliche Betonoptik, hoher matter Look.' },
      { title: 'Reaktionsharz Designboden', text: 'Höhere Belastbarkeit, breitere Farbpalette.' },
    ],
    industries: [
      'Handel und Showroom',
      'Gastronomie und Hotellerie',
      'Praxen und Kanzleien',
      'Öffentliche Gebäude',
      'Architektur und Wohnen',
    ],
    faqs: [
      { q: 'Sieht jeder Designboden gleich aus?', a: 'Nein. Spachtel­böden sind handwerklich erstellt – jeder Boden hat seine eigene, einzigartige Wolkung.' },
      { q: 'Wie pflege ich einen Designboden?', a: 'Trocken kehren oder saugen, feucht wischen mit pH-neutralem Reiniger.' },
      { q: 'Welche Rutschhemmung ist möglich?', a: 'Wir liefern R9 bis R11. R12/R13 wäre auf Designbödenflächen optisch unüblich.' },
      { q: 'Können Designböden auf alten Estrich?', a: 'In den meisten Fällen ja – wir prüfen den Untergrund vor der Empfehlung.' },
    ],
    keywords: [
      'Designboden Bocholt',
      'Betonoptik Boden',
      'Spachtelboden',
      'Fugenloser Designboden',
      'Showroom Boden',
    ],
    image: '/images/services/05-designboden.jpg',
    thumbnail: '/images/services/05-designboden.jpg',
  },

  // ---------------------------------------------------------------- Balkon
  {
    slug: 'balkon',
    href: '/balkon/',
    title: 'Balkonsanierung – dicht, sicher und schön in einem Tag',
    shortTitle: 'Balkonsanierung',
    metaTitle:
      'Balkonsanierung Bocholt · Schnelltechnik PMMA | IBS Schmäing',
    metaDescription:
      'Balkonsanierung mit PMMA-Schnelltechnik: Abdichten, Beschichten, Steinteppich – oft an einem Tag. UV-stabil, frostfest, langlebig. Aus Bocholt am Niederrhein.',
    hero: {
      eyebrow: 'Balkon & Terrasse',
      headline: 'Aus alt mach dicht – an einem Tag, in voller Optik.',
      sub: 'Wir sanieren und versiegeln Balkone und Terrassen mit PMMA-Schnelltechnik – inklusive sauberer Anschlüsse, Hohlkehlen und Optik nach Wunsch.',
      bullets: [
        'Schnelltechnik · oft an einem Tag fertig',
        'UV-stabil, frostfest, langlebig',
        'Steinteppich, Beschichtung oder Designoberfläche',
      ],
    },
    intro:
      'Geflieste Balkone und Terrassen werden im Lauf der Jahre spröde und undicht. Wasser dringt ein, frostsprengt die Beläge und schädigt die Bausubstanz. Wir sanieren diese Flächen schnell und dauerhaft mit Reaktionsharz­abdichtungen – aufbauend ergänzt um Steinteppich, Beschichtung oder Designoberfläche.',
    suitableFor: [
      'Balkone in Mehrfamilienhäusern',
      'Terrassen privater Häuser',
      'Loggien und Laubengänge',
      'Treppen und Podeste außen',
      'Übergangs- und Anschlussbereiche',
    ],
    problems: [
      { title: 'Wasser dringt in den Beton', text: 'Risse in Fliesen und Fugen lassen Wasser eindringen – das zerstört die Bausubstanz.' },
      { title: 'Stürze auf nasser Fliese', text: 'Glatte alte Fliesen sind bei Nässe und Frost ein erhebliches Risiko.' },
      { title: 'Lange Bauzeiten', text: 'Klassische Sanierung blockiert den Balkon wochenlang.' },
    ],
    solution: {
      title: 'Triflex- und PMMA-Schnellsysteme',
      text: 'Wir bauen Schäden zurück, dichten die Fläche kraftschlüssig mit PMMA ab und bringen den gewünschten Belag auf. Hohlkehlen an Wänden, sauber gearbeitete Abläufe, schlanke Anschlüsse an Türen – alles aus einer Hand.',
      bullets: [
        'PMMA-Abdichtung in einem Tag',
        'Steinteppich, Beschichtung oder Designboden als Optik',
        'Hohlkehlen, Wandanschlüsse, Abläufe',
        'Auch bei kühler Witterung verarbeitbar',
      ],
    },
    process: [
      { title: '01 · Aufmaß', text: 'Bewertung des Bestands, Aufnahme der Schäden, Beratung zu Belag und Optik.' },
      { title: '02 · Vorbereitung', text: 'Alte Beläge entfernen, Risse öffnen, Untergrund prüfen.' },
      { title: '03 · Abdichtung', text: 'PMMA-Abdichtung inkl. Hohlkehlen und Anschlüssen.' },
      { title: '04 · Belag', text: 'Steinteppich, Beschichtung oder Designoberfläche aufbringen.' },
      { title: '05 · Übergabe', text: 'Begehung, Pflegehinweise, Übergabe.' },
    ],
    benefits: [
      'In vielen Fällen in einem Tag fertig',
      'Dauerhaft dicht – auch an Anschlüssen',
      'UV-stabil, frostfest, langlebig',
      'Optik nach Wahl: Stein, Farbe, Beton',
      'Vermeidet teure Folgeschäden in der Bausubstanz',
    ],
    materials: [
      { title: 'Triflex PMMA', text: 'Schnellaushärtende Reaktionsharz­abdichtung für Balkone und Terrassen.' },
      { title: 'Reaktionsharz­beschichtung', text: 'Robuste Decklage in vielen Farben.' },
      { title: 'Steinteppich', text: 'Hochwertige Natursteinoptik außen offenporig.' },
    ],
    industries: [
      'Privat­eigentümer',
      'Hausverwaltungen',
      'WEG-Verwaltungen',
      'Architektur und Sanierungsbüros',
    ],
    faqs: [
      { q: 'Muss der alte Belag immer raus?', a: 'In den meisten Fällen ja – nur so können wir eine dauerhafte Abdichtung garantieren. Es gibt aber auch Systeme zur Sanierung im Bestand.' },
      { q: 'Wie lange dauert die Sanierung?', a: 'Standardbalkone bis ca. 15 m² sind oft in einem Arbeitstag fertig.' },
      { q: 'Bei welchem Wetter kann gearbeitet werden?', a: 'Trocken muss es sein – PMMA verarbeiten wir auch bei niedrigeren Temperaturen.' },
      { q: 'Bekomme ich Garantie auf die Abdichtung?', a: 'Wir arbeiten nach Hersteller­vorgaben und mit zertifizierten Systemen. Die Hersteller­garantie können wir Ihnen schriftlich darstellen.' },
    ],
    keywords: [
      'Balkonsanierung Bocholt',
      'Balkon abdichten',
      'Balkonbeschichtung',
      'Terrassensanierung',
      'PMMA Balkon',
    ],
    image: '/images/services/06-balkon.jpg',
    thumbnail: '/images/services/06-balkon.jpg',
  },
]

export const SERVICE_BY_SLUG: Record<string, Service> = SERVICES.reduce(
  (acc, s) => ({ ...acc, [s.slug]: s }),
  {} as Record<string, Service>,
)
