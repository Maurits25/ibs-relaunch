// Themenbereich-Hub-Seiten (SEO-Top-Tier).
// Diese 5 Seiten zielen auf die volumstärksten Suchcluster:
//   - "industrieboden" / "industrieböden"           ~4.000/Monat
//   - "bodenbeschichtung garage"                   ~3.500/Monat
//   - "werkstatt bodenbeschichtung"                  ~900/Monat
//   - "bodenbeschichtung keller"                     ~770/Monat
//   - "industrieboden sanierung" + Brand-Match       ~290/Monat
//
// Sie nutzen die bestehende ServicePage-Template-Architektur — sind aber semantisch
// keine "Leistungen", sondern Anwendungs-Hubs. Daher nicht in /leistungen/ gelistet.
//
// Quellen für Fakten siehe: content/research/03-tier1-conversion-hubs.md
// Compliance: Sachkundenachweis statt Fachbetrieb, keine Pauschalpreise, Marken nur Remmers/KLB/Korodur.

import type { Service } from './services'

export const TOPIC_PAGES: Service[] = [
  // ============================================================ /industrieboden/
  {
    slug: 'industrieboden',
    href: '/industrieboden/',
    title: 'Industrieboden – Sanierung, Beschichtung & Neuaufbau in NRW',
    shortTitle: 'Industrieboden',
    metaTitle: 'Industrieboden Bocholt · NRW – Sanierung & Beschichtung | IBS',
    metaDescription:
      'Industrieboden vom Fachbetrieb: Sanierung, Reaktionsharz-Beschichtung, Versiegelung. Belastbar nach DIN 18560-7 und DIN EN 13813. Für Industrie, Logistik und Werkstatt – aus Bocholt für ganz NRW.',
    hero: {
      eyebrow: 'Themenbereich · Industrie',
      headline: 'Industrieböden, die Belastung aushalten – planbar saniert oder neu beschichtet.',
      sub: 'Wir realisieren Industrieböden für Hallen, Werkstätten, Logistik und Produktion – inklusive Sanierung bestehender Flächen. Reaktionsharz­systeme nach DIN EN 13813, sachkundig verarbeitet, in Bocholt und ganz NRW.',
      bullets: [
        'DIN 18560-7 · DIN EN 13813 · AGI A40',
        'Sachkundige Verarbeitung',
        'Auch im laufenden Betrieb',
      ],
    },
    intro:
      'Ein Industrieboden ist ein für hohe mechanische, chemische und thermische Beanspruchung ausgelegtes Fußboden­system. In Deutschland sind Industrie­böden in DIN 18560-7 (Industrieestrich) und DIN EN 13813 (Reaktionsharz-Estriche und -Beschichtungen) geregelt. IBS Schmäing realisiert Industrieböden als Reaktionsharz-Beschichtung, Mörtelbelag oder Versiegelung – passend zur Belastung.',
    suitableFor: [
      'Produktions- und Lagerhallen',
      'Logistik- und Versandbereiche',
      'Werkstätten (Kfz, Metall, Maschinenbau)',
      'Tiefgaragen, Parkhäuser und Rampen',
      'Lebensmittel- und Pharma-Produktion',
      'Hof- und Außenflächen',
      'WHG-Auffangräume',
    ],
    problems: [
      { title: 'Staubender, offener Beton', text: 'Unbehandelter Beton gibt Feinstaub ab – schädlich für Mitarbeiter, Maschinen und Produkte. Reinigungs­aufwand steigt.' },
      { title: 'Risse und Hohlstellen', text: 'Setzungen, Punktlasten und Vibrationen erzeugen Risse, die sich ohne kraftschlüssige Sanierung weiter aufweiten.' },
      { title: 'Chemische Belastung', text: 'Öl, Säuren, Reinigungsmittel und Tausalze dringen in poröse Böden ein und zerstören die Substanz.' },
      { title: 'Lange Stillstände', text: 'Klassische Sanierung legt Bereiche tagelang lahm – das können viele Betriebe nicht leisten.' },
    ],
    solution: {
      title: 'Das richtige System – nach Belastung konfiguriert',
      text: 'Wir bewerten Untergrund, Belastungs­klasse (DIN 18560-7 Klasse I–III), chemische Anforderungen und Termine. Daraus konfigurieren wir das passende Industrie­bodensystem – von der dünnen Versiegelung bis zum 6 mm Reaktionsharz-Mörtelbelag.',
      bullets: [
        'Untergrund­vorbereitung mit Kugelstrahlen, Fräsen oder Schleifen',
        'Reparatur von Rissen und Hohlstellen mit Reaktionsharz­mörtel',
        'Beschichtungs­aufbau aus Grundierung, Kratzspachtelung, Beschichtung, Versiegelung',
        'Rutsch­hemmung R9–R13 nach DIN 51130 wählbar',
        'Markierungen und Sicherheits­kennzeichnung nach ASR A1.3',
      ],
    },
    process: [
      { title: '01 · Vor-Ort-Termin', text: 'Kostenfreie Bestandsaufnahme: Untergrund, Restfeuchte, Belastung, Auflagen, Termin.' },
      { title: '02 · Systemvorschlag', text: 'Schriftliches Konzept mit Schicht­aufbau, Materialien (Remmers, KLB, Korodur), Rutsch­hemmung und Optik.' },
      { title: '03 · Vorbereitung', text: 'Mechanische Untergrund­vorbereitung, Reparaturen, Grundierung – staubarm.' },
      { title: '04 · Beschichtung', text: 'Schichtweise sauber gearbeitet – zonenweise auch im laufenden Betrieb.' },
      { title: '05 · Übergabe', text: 'Gemeinsame Begehung, Pflege- und Reinigungs­hinweise, Dokumentation.' },
    ],
    benefits: [
      'Fugenlose, hygienisch zu reinigende Oberfläche',
      'Beständig gegen Säuren, Öle, Reinigungs­mittel',
      'Schnell wieder belastbar – auch mit Schnelltechnik',
      'Anti-Rutsch von R9 bis R13 nach Anforderung',
      'In nahezu jeder RAL-Farbe lieferbar',
      'Erwartete Nutzungs­dauer 15–25 Jahre bei fachgerechter Ausführung',
    ],
    materials: [
      { title: 'Remmers EP- & PU-Systeme', text: 'Industrieboden­systeme für Hallen, Werkstätten und Logistik. Geschulter Verarbeiter mit Remmers-Zertifikat.' },
      { title: 'KLB Kötztaler Bodensysteme', text: 'Reaktionsharz-Bodenbeschichtungen mit hoher chemischer und mechanischer Resistenz.' },
      { title: 'Korodur Hartstoffeinstreuung', text: 'Hartstoffmörtel und Streueinstreu­ung für extreme Verschleiß­belastung.' },
    ],
    industries: [
      'Maschinen- und Anlagenbau',
      'Logistik & Lager',
      'Metallverarbeitung',
      'Kfz- und Nutzfahrzeug-Werkstätten',
      'Lebensmittel- und Pharma-Industrie',
      'Tiefgaragen und Parkhäuser',
    ],
    faqs: [
      { q: 'Welche Norm gilt für Industrieböden in Deutschland?',
        a: 'Maßgeblich sind DIN 18560-7 (Industrieestriche, drei Beanspruchungs­klassen I bis III) und DIN EN 13813 (Reaktionsharz-Estriche und -Beschichtungen). Für die Verarbeitungs­praxis ergänzen die AGI-Arbeitsblätter A12 (Hartstoffestrich) und A40 (Reaktionsharz-Beschichtungen).' },
      { q: 'Was kostet ein Industrieboden pro Quadratmeter?',
        a: 'Belastbare Werte gibt es nur per Aufmaß. Marktübliche Spannen 2026 liegen für eine Industrieboden-Beschichtung zwischen 25 €/m² (dünne Versiegelung) und 200 €/m² (Mörtelbelag mit Sondersystem). Wir kalkulieren nach Untergrund, Belastung, Schicht­aufbau und Sondereigenschaften.' },
      { q: 'Kann während des Betriebs gearbeitet werden?',
        a: 'Ja. Wir arbeiten zonenweise mit staubreduzierten Maschinen. PMMA-Schnellsysteme von Remmers sind nach 1–3 Stunden wieder belastbar; klassische EP-Systeme brauchen 24–72 Stunden je Schicht. Die Termine planen wir nach Ihrem Zyklus.' },
      { q: 'Wie lange hält ein Industrie­boden?',
        a: 'Bei fachgerechtem Aufbau und passender Belastungs­klasse sind 15 bis 25 Jahre Nutzungs­dauer üblich. Wartung (Reinigung, regelmäßige Inspektion, gezielte Reparatur) verlängert die Lebens­dauer deutlich.' },
      { q: 'Welche Rutsch­hemmung ist sinnvoll?',
        a: 'Die Klasse hängt vom Einsatzbereich ab und ist in DIN 51130 sowie der DGUV-Regel 108-003 geregelt. Trockene Lagerflächen kommen mit R9–R10 aus, nasse Produktion oder Lebensmittel­bereiche brauchen R11–R12, stark fettige Bereiche R13. Wir berechnen die Klasse nach Ihrer Tätigkeit.' },
    ],
    keywords: [
      'industrieboden', 'industrieböden', 'industrieboden beschichtung', 'industrieboden epoxidharz', 'industrieboden epoxidharzbeschichtung', 'industrieboden sanierung', 'industrieboden sanieren', 'industrieboden farbe', 'industrieboden außen', 'industrieboden betonoptik', 'industrieboden bocholt', 'industrieboden nrw',
    ],
    image: '/images/scenes/industrieboden-hero.jpg',
    thumbnail: '/images/scenes/industrieboden-hero.jpg',
  },

  // ============================================================ /garagenboden/
  {
    slug: 'garagenboden',
    href: '/garagenboden/',
    title: 'Garagenboden beschichten – Epoxidharz, langlebig & rutschsicher',
    shortTitle: 'Garagenboden',
    metaTitle: 'Garagenboden beschichten Bocholt – 2K Epoxidharz | IBS',
    metaDescription:
      'Garagenboden vom Profi: 2K-Epoxidharz, Steinteppich oder PU – ölbeständig, rutschsicher (R10/R11), in RAL-Farben. Für Privatgaragen, WEG-Tiefgaragen und Hausverwaltungen am Niederrhein, im Ruhrgebiet und in NRW.',
    hero: {
      eyebrow: 'Themenbereich · Garage',
      headline: 'Garagenboden, der hält – aus Reaktionsharz oder Steinteppich.',
      sub: 'Wir beschichten Garagen-, Tiefgaragen- und Carportböden langlebig und sauber: ölbeständig, rutschsicher, in jeder RAL-Farbe. Auch als WEG- oder Hausverwaltungs­auftrag in mehrgeschossigen Tiefgaragen.',
      bullets: [
        '2K-Epoxidharz · PU · Steinteppich',
        'Rutsch­hemmend R10/R11',
        'Beständig gegen Öl, Reifenabrieb, Tausalz',
      ],
    },
    intro:
      'Ein professioneller Garagenboden besteht aus einer Reaktionsharz-Beschichtung (meist 2K-Epoxidharz) oder einem Steinteppich, mechanisch und chemisch auf die Belastung durch Reifen, Schmierstoffe, Tausalze und Streufette ausgelegt. IBS Schmäing realisiert Privat-Garagen, Mehrfamilien-Tiefgaragen und WEG-Sammelobjekte – staubarm und in der Regel innerhalb eines Tages befahrbar.',
    suitableFor: [
      'Privat-Garagen (Einzel-, Doppel-, Dreifach-)',
      'Tiefgaragen in Wohngebäuden und WEG',
      'Carports und Vorflächen',
      'Werkstatt- und Hobby-Garagen',
      'Boots- und Anhänger­garagen',
    ],
    problems: [
      { title: 'Staubender Beton', text: 'Roher Garagenbeton gibt Feinstaub ab, der sich auf Fahrzeug, Werkzeug und Kleidung legt.' },
      { title: 'Ölflecken', text: 'Unbeschichteter Beton saugt Motor­öl und Bremsflüssigkeit dauerhaft auf – Flecken bleiben.' },
      { title: 'Frost und Tausalze', text: 'Wasser und Streusalze dringen in den Beton ein, sprengen ihn von innen und führen zu Abplatzungen.' },
      { title: 'Klick-PVC nicht dicht', text: 'PVC-Klickfliesen sind günstig, aber nicht fugendicht – Feuchtigkeit dringt darunter.' },
    ],
    solution: {
      title: 'Reaktionsharz oder Steinteppich – beides hochwertig',
      text: 'Für die meisten Garagen ist eine 2K-Epoxidharz-Beschichtung in 0,5 bis 1,5 mm Dicke die beste Wahl: dicht, ölbeständig, in RAL-Farben, mit Rutsch­hemmung R10. Für edle Optik mit Außenanmutung ist Steinteppich aus Marmorkiesel die premium Alternative.',
      bullets: [
        'Untergrund­vorbereitung (Schleifen oder Kugelstrahlen)',
        'Reparatur von Rissen und Hohlstellen',
        'Beschichtung in Wunschfarbe (RAL-Töne)',
        'Rutsch­hemmung über Quarz- oder Korund­einstreuung',
        'Hohlkehlen, Sockel und Anschlüsse sauber gearbeitet',
      ],
    },
    process: [
      { title: '01 · Vor-Ort-Termin', text: 'Wir kommen kostenfrei zur Begutachtung und beraten Sie zu System, Farbe und Termin.' },
      { title: '02 · Konzept', text: 'Schriftliches Angebot mit Festpreis – System, Farbe, Rutschhemmung, Termin transparent.' },
      { title: '03 · Vorbereitung', text: 'Schleifen oder Strahlen des Untergrunds, Reparatur von Rissen, Grundierung.' },
      { title: '04 · Beschichtung', text: 'Auftrag der Beschichtung in 2–3 Schichten – in der Regel an einem Arbeitstag.' },
      { title: '05 · Übergabe', text: 'Begehbar nach 12–24 h, voll belastbar nach ca. 3 Tagen. Sie bekommen Pflege­hinweise.' },
    ],
    benefits: [
      'Pflegeleicht – wie eine Fliese, aber fugenlos',
      'Beständig gegen Öl, Treibstoff, Tausalze',
      'In jeder RAL-Farbe lieferbar',
      'Rutsch­hemmung wählbar (R9 oder R10/R11)',
      'In der Regel an einem Tag fertig',
      'Erwartete Lebens­dauer 15+ Jahre bei normaler Garagen­nutzung',
    ],
    materials: [
      { title: 'Remmers Garagenboden­system', text: '2K-Epoxidharz, Schichtdicke 0,5–1,5 mm. Schulungs-Zertifikat als Verarbeiter.' },
      { title: 'KLB Garagenboden', text: 'Reaktionsharz­systeme für höhere mechanische Belastung in Tiefgaragen.' },
      { title: 'Steinteppich (Marmorkiesel)', text: 'Hochwertige Alternative für Carport, Garagen­einfahrt oder Premium-Garage.' },
    ],
    industries: [
      'Privathaushalte',
      'Hausverwaltungen / WEG',
      'Architekten und Bauträger',
      'Boots- und Wohnmobil-Eigentümer',
    ],
    faqs: [
      { q: 'Welche Beschichtung ist die beste für die Garage?',
        a: 'Für die meisten Privatgaragen ist eine 2K-Epoxidharz-Beschichtung in 0,5 bis 1,5 mm Dicke ideal: ölbeständig, fugenlos, in RAL-Farben, mit Rutsch­hemmung R10. Bei höherer Belastung (Tiefgarage, Werkstatt) wählen wir PU-Beschichtung oder Mörtelbelag.' },
      { q: 'Wie lange ist die Garage gesperrt?',
        a: 'Eine Standard-Doppelgarage ist meistens an einem Tag fertig. Begehbar ist die Fläche nach ca. 12–24 Stunden, voll mit dem Auto befahrbar nach 3 Tagen.' },
      { q: 'Was kostet eine Garagen­boden­beschichtung?',
        a: 'Marktübliche Werte 2026 liegen zwischen 60 und 120 €/m² inkl. Material, Untergrund­vorbereitung und Verarbeitung – abhängig von Untergrund­zustand und System. Wir geben einen Festpreis nach Vor-Ort-Termin.' },
      { q: 'Funktioniert das auch auf alten Fliesen?',
        a: 'In den meisten Fällen ja. Voraussetzung: Fliesen sitzen fest, sind tragfähig und nicht durchfeuchtet. Wir prüfen das im Vor-Ort-Termin und wählen die passende Haftungs­grundierung.' },
      { q: 'Wie pflege ich den beschichteten Boden?',
        a: 'Trocken kehren oder saugen, gelegentlich mit pH-neutralem Reiniger feucht wischen. Ölfilme einfach abwischen – die Beschichtung lässt sie nicht eindringen.' },
    ],
    keywords: [
      'bodenbeschichtung garage', 'garagen bodenbeschichtung', 'garage bodenbeschichtung', 'bodenbeschichtung für garage', '2k bodenbeschichtung garage', 'epoxidharz bodenbeschichtung garage', 'bodenbeschichtung garagenboden', 'bodenbeschichtung garage rutschfest', 'garagenboden epoxidharz', 'garagenboden beschichten', 'tiefgarage bodenbeschichtung',
    ],
    image: '/images/scenes/garagenboden-hero.jpg',
    thumbnail: '/images/scenes/garagenboden-hero.jpg',
  },

  // ============================================================ /werkstattboden/
  {
    slug: 'werkstattboden',
    href: '/werkstattboden/',
    title: 'Werkstattboden beschichten – ölbeständig, rutschsicher, fugenlos',
    shortTitle: 'Werkstattboden',
    metaTitle: 'Werkstattboden Beschichtung Bocholt · Kfz · Metall | IBS',
    metaDescription:
      'Werkstattboden vom Fachbetrieb: 2K-Epoxidharz und PU für Kfz-Werkstatt, Metallverarbeitung, Maschinenbau. Ölbeständig, fugenlos, ESD optional, Markierungen nach ASR A1.3. NRW & Niederrhein.',
    hero: {
      eyebrow: 'Themenbereich · Werkstatt',
      headline: 'Werkstattböden für Profis – ölbeständig und sicher.',
      sub: 'Reaktionsharz-Beschichtungen für Kfz-Werkstätten, Metallverarbeitung, Maschinenbau und Lackierereien. Beständig gegen Schmierstoffe, Kühlmittel, Säuren. Mit Markierungen und Sicherheits­kennzeichnung nach ASR A1.3.',
      bullets: [
        'Beständig gegen Öl, Bremsflüssigkeit, Kühlmittel',
        'Rutsch­hemmung R10/R11',
        'ESD-Ausführung optional',
      ],
    },
    intro:
      'Ein Werkstattboden muss tagsüber Stoßlasten von Hebebühnen, Wagenhebern und Rangier­bewegungen aushalten – und gleichzeitig Schmierstoffe, Reinigungs­mittel und Säuren abweisen. IBS Schmäing realisiert Werkstatt­böden als 2K-Epoxidharz oder Polyurethan-Beschichtung nach DIN EN 13813, mit passender Rutsch­hemmung und optionalen Markierungen nach ASR A1.3.',
    suitableFor: [
      'Kfz- und Nutzfahrzeug-Werkstätten',
      'Metallverarbeitung (Schlosserei, Schweißerei)',
      'Maschinen- und Werkzeugbau',
      'Lackierereien und Vorbereitungs­hallen',
      'Schreinereien und Tischlereien',
      'Reifen- und Montagebereiche',
    ],
    problems: [
      { title: 'Öl und Bremsflüssigkeit', text: 'Schmierstoffe ziehen in unbehandelten Beton ein – die Substanz wird zerstört, der Boden rutschig.' },
      { title: 'Punktlasten', text: 'Hebebühnen und Wagenheber konzentrieren mehrere Tonnen auf wenige cm². Klassische Estriche brechen.' },
      { title: 'Säurebelastung', text: 'Batteriesäure, Beizmittel und Reinigungs­mittel greifen unbehandelten Beton an.' },
      { title: 'Reinigungs­aufwand', text: 'Offene Poren halten Schmutz – tägliches Putzen wird teuer und ineffektiv.' },
    ],
    solution: {
      title: 'Beschichtungs­system passend zur Werkstatt­art',
      text: 'Wir wählen das System nach Belastung: 2K-Epoxidharz für klassische Kfz-Werkstätten, PU für höhere thermische Belastung (Schweißerei, Lackiererei), Mörtelbelag bei Punktlasten. Markierungen nach ASR A1.3 für Verkehrswege, Lagerflächen und Sicherheits­zonen.',
      bullets: [
        '2K-Epoxidharz oder PU nach Belastungs­klasse',
        'Rutsch­hemmung R10 oder R11 (nasse Produktion)',
        'ESD-Ausführung für Elektronik-Werkstätten',
        'Markierungen und Sicherheits­kennzeichnung',
        'Hohlkehlen für leichte Reinigung',
      ],
    },
    process: [
      { title: '01 · Bedarfsanalyse', text: 'Welche Tätigkeiten? Welche Stoffe? Welche Belastung? Welche Rutsch­hemmung Pflicht?' },
      { title: '02 · System & Markierung', text: 'Schicht­aufbau, Material, Farbschema, Markierungs­plan – schriftlich.' },
      { title: '03 · Vorbereitung', text: 'Mechanische Untergrund­vorbereitung, Reparatur, Grundierung.' },
      { title: '04 · Beschichtung', text: 'Beschichtung und Versiegelung, danach Verkehrswege und Sicherheits­zonen markieren.' },
      { title: '05 · Übergabe', text: 'Begehung, Hinweise zur Pflege und Reinigung, Markierungs­plan zur Dokumentation.' },
    ],
    benefits: [
      'Beständig gegen Öl, Säuren, Kühlmittel',
      'Fugenlos und leicht zu reinigen',
      'Markierungen für Sicherheit und Effizienz',
      'Rutsch­hemmung R10/R11/R12 verfügbar',
      'ESD optional für Elektronik-Werkstätten',
      'Schnell wieder belastbar – PMMA-Technik bei Bedarf',
    ],
    materials: [
      { title: 'Remmers Werkstatt­system', text: '2K-Epoxidharz für die klassische Kfz-Werkstatt – mit Schulungs­zertifikat verarbeitet.' },
      { title: 'KLB PU-Beschichtung', text: 'Polyurethan-Beschichtung für höhere thermische und chemische Belastung.' },
      { title: 'Korodur Hartstoff­einstreuung', text: 'Hartstoff­mörtel für Punktlasten und Stapler­verkehr in Großwerkstätten.' },
    ],
    industries: [
      'Kfz-Werkstätten (Pkw, Nutzfahrzeug, Bus)',
      'Metallverarbeitung',
      'Maschinen- und Werkzeugbau',
      'Lackierereien',
      'Holzverarbeitung',
      'Elektronik- und Sensorik-Fertigung (ESD)',
    ],
    faqs: [
      { q: 'Welches System für eine Kfz-Werkstatt?',
        a: 'Standardlösung ist 2K-Epoxidharz in 0,8 bis 1,5 mm mit Rutsch­hemmung R10 und Markierungen. Bei viel Wasser, Bremsflüssigkeit oder hoher Beanspruchung empfehlen wir PU oder eine Mörtel­beschichtung.' },
      { q: 'Sind Markierungen Pflicht?',
        a: 'Verkehrswege, Rettungswege und Gefahrenzonen müssen nach ASR A1.3 und DGUV-Vorschrift A8 gekennzeichnet sein. Wir planen den Markierungs­plan gemeinsam mit Ihnen und arbeiten ihn in die Beschichtung ein.' },
      { q: 'Brauche ich ESD?',
        a: 'ESD-Böden (DIN EN 61340-5-1) sind Pflicht in Elektronik- und Sensorik-Fertigung, in vielen Pharma- und Reinraum-Bereichen sowie bei Arbeit mit zündfähigen Stoffen. Wir verarbeiten ESD-zertifizierte Remmers-/KLB-Systeme.' },
      { q: 'Kann ich die Werkstatt während der Arbeiten weiter nutzen?',
        a: 'Wir arbeiten zonenweise. Klassische EP-Beschichtung braucht 24–72 Stunden Aushärtung pro Schicht. Mit PMMA-Schnellsystemen ist eine Zone nach 1–3 Stunden wieder befahrbar – ideal für laufende Werkstätten.' },
      { q: 'Was kostet ein Werkstatt­boden?',
        a: 'Marktüblich 2026: 50–120 €/m² je nach System, Belastung und Markierungs­aufwand. Wir kalkulieren nach Aufmaß und vereinbaren einen Festpreis.' },
    ],
    keywords: [
      'werkstatt bodenbeschichtung', 'bodenbeschichtung werkstatt', 'werkstattboden', 'werkstattboden beschichten', '2k bodenbeschichtung werkstatt', 'bodenbeschichtung für kfz werkstatt', 'industrieboden werkstatt', 'epoxidharz bodenbeschichtung werkstatt', 'bodenbeschichtung werkstatt kosten', 'werkstattboden epoxidharz',
    ],
    image: '/images/scenes/werkstattboden-hero.jpg',
    thumbnail: '/images/scenes/werkstattboden-hero.jpg',
  },

  // ============================================================ /kellerboden/
  {
    slug: 'kellerboden',
    href: '/kellerboden/',
    title: 'Kellerboden beschichten – diffusionsoffen oder dicht',
    shortTitle: 'Kellerboden',
    metaTitle: 'Kellerboden beschichten Bocholt – diffusionsoffen | IBS',
    metaDescription:
      'Kellerboden vom Fachbetrieb: diffusionsoffene oder dichte Beschichtung je nach Restfeuchte. Mit CM-Messung des Untergrunds. Für Wohnkeller, Hobbyraum, Heizraum, Hausanschlussraum – am Niederrhein und in NRW.',
    hero: {
      eyebrow: 'Themenbereich · Keller',
      headline: 'Kellerboden, der zu Ihrem Untergrund passt.',
      sub: 'Im Keller entscheidet die Restfeuchte über das System. Wir messen, beraten und beschichten – diffusionsoffen bei feuchten Untergründen, klassisch EP bei trockenen Kellern. Mit Reaktionsharz oder Steinteppich.',
      bullets: [
        'CM- oder Darrtrocknungs-Messung',
        'Diffusionsoffene Systeme bei Restfeuchte',
        'Auch hochwertig als Wohnkeller-Boden',
      ],
    },
    intro:
      'Ein Kellerboden braucht eine andere Lösung als eine Garage oder Halle: der Untergrund hat oft Restfeuchte, der Wasserdampf­druck von unten kann eine klassische dichte Beschichtung absprengen. IBS Schmäing misst den Untergrund (CM-Messung), wählt das passende System (diffusionsoffen oder dicht) und beschichtet sauber – auch als Premium-Lösung für den Wohnkeller.',
    suitableFor: [
      'Wohnkeller und Hobbyräume',
      'Hausanschluss- und Technikräume',
      'Heizungs- und Waschräume',
      'Vorratskeller und Werkstatt­keller',
      'Gewerbliche Kellerlager',
    ],
    problems: [
      { title: 'Restfeuchte im Beton', text: 'Im Bestand sind Kellerböden oft feucht – CM-Werte über 4 % sprengen klassische EP-Beschichtungen.' },
      { title: 'Kalt und staubig', text: 'Roher Beton ist kalt, staubt und nimmt Feuchtigkeit aus der Luft auf.' },
      { title: 'Optisch unattraktiv', text: 'Hobbyraum, Wohnkeller, Bürokeller – mit rohem Beton fehlt jede Anmutung.' },
      { title: 'Wasser von außen', text: 'Drückendes Wasser ist eine Bauwerksabdichtungs-Aufgabe – eine Beschichtung allein löst das Problem nicht.' },
    ],
    solution: {
      title: 'Erst messen, dann das passende System',
      text: 'Wir messen den Untergrund (CM oder Darrtrocknung). Bei niedrigen Restfeuchte­werten kommt klassisches 2K-Epoxidharz zum Einsatz. Bei höheren Werten verwenden wir diffusionsoffene Systeme – z. B. mineralische Beschichtungen oder spezielle Reaktionsharze, die Wasserdampf durchlassen.',
      bullets: [
        'CM- oder Darrtrocknungs-Messung',
        'Diffusionsoffenes System bei Restfeuchte > 4 %',
        'Klassisches 2K-EP bei trockenen Untergründen',
        'Steinteppich für Premium-Wohnkeller',
        'Bei drückendem Wasser: Hinweis auf Abdichtung',
      ],
    },
    process: [
      { title: '01 · Untergrund­diagnose', text: 'CM-Messung, Sichtprüfung, Bauwerks­geschichte. Klarheit über Ursache jeglicher Feuchtigkeit.' },
      { title: '02 · Systemwahl', text: 'Diffusionsoffen, dicht, oder gar nicht (bei drückendem Wasser) – mit ehrlicher Empfehlung.' },
      { title: '03 · Vorbereitung', text: 'Schleifen oder Strahlen, Reparatur kleiner Schäden, Grundierung.' },
      { title: '04 · Beschichtung', text: 'Auftrag in Schichten, optional mit Quarzeinstreu für Rutsch­hemmung.' },
      { title: '05 · Übergabe', text: 'Begehung, Pflege­hinweise, Hinweis auf weitere Bauwerks­abdichtung wenn nötig.' },
    ],
    benefits: [
      'Staubfreier, dichter Boden',
      'Pflegeleicht – feucht wischen reicht',
      'Diffusionsoffen wo nötig – atmender Aufbau',
      'Auch in Wohn-Optik (Steinteppich, Designboden) realisierbar',
      'Schimmel- und Feuchteproblem entschärft',
      'Erwartete Lebens­dauer 15+ Jahre bei passender Wahl',
    ],
    materials: [
      { title: 'Remmers diffusionsoffenes System', text: 'Spezielle Reaktionsharz- oder mineralische Systeme für feuchte Untergründe.' },
      { title: 'KLB Keller­beschichtung', text: '2K-EP für trockene Keller-Betonböden, in RAL-Farben.' },
      { title: 'Steinteppich Wohnkeller', text: 'Premium-Variante für Hobbyräume, Bar-Keller oder Werkstatt­bereiche.' },
    ],
    industries: [
      'Privathaushalte',
      'Hausverwaltungen',
      'Gewerbe-Keller (Lager, Archiv)',
    ],
    faqs: [
      { q: 'Mein Keller ist feucht – geht trotzdem eine Beschichtung?',
        a: 'Ja, wenn die Feuchte nicht von außen drückt. Wir messen den Untergrund per CM- oder Darrtrocknungs-Methode und wählen ein diffusionsoffenes System, das den Wasserdampf von unten passieren lässt. Bei drückendem Wasser braucht es zuerst eine Bauwerks­abdichtung.' },
      { q: 'Wie hoch darf die Restfeuchte sein?',
        a: 'Für klassisches 2K-Epoxidharz gelten i. d. R. unter 4 % CM. Höhere Werte erlauben diffusionsoffene Systeme. Exakte Grenz­werte stehen in der Hersteller-Technischen Information des jeweiligen Systems.' },
      { q: 'Kann ich den Wohnkeller hochwertig gestalten?',
        a: 'Ja. Steinteppich (Marmorkiesel in transparentem Harz), Designböden in Betonoptik oder farbige EP-Systeme mit Chips machen aus dem Keller einen Wohn- oder Hobbyraum. Wir beraten zu Optik und Pflege­leichtigkeit.' },
      { q: 'Wie lange dauern Arbeiten im Keller?',
        a: 'Ein typischer 30-m²-Wohnkeller ist in 2 Arbeitstagen fertig. Begehbar nach 12–24 h, voll belastbar nach 3 Tagen.' },
      { q: 'Was kostet eine Keller­beschichtung?',
        a: 'Marktüblich 2026 liegen Werte zwischen 50 und 150 €/m² – abhängig von Untergrund­zustand, System und Optik. Wir geben einen Festpreis nach Vor-Ort-Aufmaß.' },
    ],
    keywords: [
      'bodenbeschichtung keller', 'keller bodenbeschichtung', 'bodenbeschichtung keller wasserdicht', 'bodenbeschichtung kellerräume', 'bodenbeschichtung für keller', '2k bodenbeschichtung keller', 'bodenbeschichtung kellerboden', 'kellerboden beschichten', 'kellerboden epoxidharz', 'diffusionsoffene bodenbeschichtung keller',
    ],
    image: '/images/scenes/kellerboden-hero.jpg',
    thumbnail: '/images/scenes/kellerboden-hero.jpg',
  },

  // ============================================================ /industriebodensanierung/
  {
    slug: 'industriebodensanierung',
    href: '/industriebodensanierung/',
    title: 'Industriebodensanierung – Bestandsflächen wieder belastbar',
    shortTitle: 'Industriebodensanierung',
    metaTitle: 'Industriebodensanierung Bocholt · Hallen & Lager | IBS',
    metaDescription:
      'Industriebodensanierung vom Spezialisten: Risse, Hohlstellen, Ausbrüche, Verschleißzonen – wir reparieren, beschichten und versiegeln. Reaktionsharz-Schnelltechnik, oft im laufenden Betrieb. Bocholt · NRW.',
    hero: {
      eyebrow: 'Themenbereich · Sanierung',
      headline: 'IBS — Industriebodensanierung ist unser Name und unser Tagesgeschäft.',
      sub: 'Wir sanieren bestehende Hallen-, Werkstatt- und Lager­böden: Risse schließen, Hohlstellen kraftschlüssig füllen, Versiegelung erneuern. Mit Schnelltechnik oft im laufenden Betrieb – seit 2011 aus Bocholt.',
      bullets: [
        'Reaktionsharz-Reparatur 45-Min-Technik',
        'Auch nachts und am Wochenende',
        'Kraftschlüssig statt kosmetisch',
      ],
    },
    intro:
      'Industriebodensanierung bedeutet: bestehende Industrieböden so instand setzen, dass sie ihrer ursprünglichen Belastungs­klasse wieder gerecht werden. IBS Schmäing diagnostiziert Schäden (Risse, Hohlstellen, Ausbrüche, Verschleißzonen, staubender Beton), wählt das passende Reparatur­system und führt sachkundig aus – meist zonenweise und im laufenden Betrieb.',
    suitableFor: [
      'Industriehallen mit Stapler­verkehr',
      'Lager- und Logistikflächen',
      'Werkstätten und Produktions­hallen',
      'Tiefgaragen und Rampen',
      'Hof- und Außenflächen aus Beton',
      'Auffangräume und Sonderflächen',
    ],
    problems: [
      { title: 'Risse, die wachsen', text: 'Unbehandelte Risse weiten sich durch Lasten und Vibration weiter auf – Stapler­räder, Achsen und Anlagen werden beschädigt.' },
      { title: 'Hohlstellen unter der Beschichtung', text: 'Lose Schichten klingen hohl beim Abklopfen – sie platzen unter Last weg.' },
      { title: 'Ausbrüche an Fugen und Toren', text: 'Verschleiß­zonen vor Toren und an Dehnfugen brechen aus und werden zur Stolper­falle.' },
      { title: 'Staubender, alter Beton', text: 'Versiegelung ist aufgebraucht – die Halle staubt wieder, Reinigungs­kosten steigen.' },
    ],
    solution: {
      title: 'Diagnose zuerst – dann das richtige Reparatur­system',
      text: 'Wir öffnen Risse bis in den tragfähigen Untergrund, säubern sie, füllen mit Reaktionsharz­mörtel kraftschlüssig auf und versiegeln die Fläche. Bei großflächigem Verschleiß bauen wir eine neue Beschichtung auf. Sanierung statt Neubau spart bis zu 70 % der Kosten.',
      bullets: [
        'Schadensaufnahme und Ursachen­diagnose',
        'Reaktionsharz-Reparatur (auch 45-Min-Technik)',
        'Fugen­sanierung mit dauer­elastischen Systemen',
        'Versiegelung gegen Staub, Öl, Chemie',
        'Neue Beschichtung wo Substanz es erlaubt',
      ],
    },
    process: [
      { title: '01 · Bestandsaufnahme', text: 'Schadens­katalog, Ursachen, Belastungs­anforderung – als schriftlicher Bericht.' },
      { title: '02 · Konzept', text: 'Reparatur­plan: welche Stellen, welches System, welcher Termin. Mit Festpreis.' },
      { title: '03 · Vorbereitung', text: 'Stellen öffnen, säubern, grundieren. Staubarm mit modernen Maschinen.' },
      { title: '04 · Reparatur', text: 'Reaktionsharz-Mörtel einbringen, nivellieren, abziehen. Schnelltechnik bei Bedarf.' },
      { title: '05 · Versiegelung', text: 'Schutz­versiegelung gegen Staub und Chemikalien. Markierungen falls gewünscht.' },
      { title: '06 · Freigabe', text: 'Nach Aushärtung wieder voll belastbar – oft schon am selben Tag.' },
    ],
    benefits: [
      '45-Minuten-Technik mit Reaktionsharz möglich',
      'Auch nachts und am Wochenende',
      'Kein Komplett-Stillstand der Halle',
      'Sanierung statt Neubau – deutlich günstiger',
      'Kraftschlüssig und dauerhaft',
      'Auf Wunsch farblich angepasst',
    ],
    materials: [
      { title: 'Remmers Reaktionsharz-Mörtel', text: 'Schnellbau-Reparatur­mörtel auf EP- und PMMA-Basis – mit Schulungs­zertifikat verarbeitet.' },
      { title: 'KLB Versiegelung', text: 'Versiegelungs­systeme mit hoher Chemie- und Mechanik-Resistenz.' },
      { title: 'Korodur Hartstoff­mörtel', text: 'Hartstoff­mörtel für höchste Punktlasten und Stapler­verkehr.' },
    ],
    industries: [
      'Logistik und Lager',
      'Maschinen- und Anlagenbau',
      'Metallverarbeitung',
      'Lebensmittel- und Getränke­produktion',
      'Tiefgaragen und Parkhäuser',
      'Öffentliche Hand',
    ],
    faqs: [
      { q: 'Wann lohnt sich Sanieren statt Neubau?',
        a: 'Wenn der Untergrund tragfähig ist und die Schäden lokal sind, ist Sanieren günstiger und schneller. Bei großflächiger Karbonatisierung, dauerhafter Feuchte­belastung oder strukturellen Setzungen ist der Neubau die richtige Lösung. Wir entscheiden nach Diagnose.' },
      { q: 'Wie schnell ist die Fläche wieder befahrbar?',
        a: 'Mit Reaktionsharz-Schnellsystemen typischerweise 45 Minuten bis wenige Stunden. Klassische EP-Reparatur braucht 12–24 Stunden bis zur Belastbarkeit.' },
      { q: 'Können Sie nachts oder am Wochenende arbeiten?',
        a: 'Ja. Schnelltechnik-Sanierungen sind genau dafür gemacht: zwischen den Schichten arbeiten, am Wochenende sanieren, Montag wieder volle Produktion.' },
      { q: 'Wie wird eine Fuge saniert?',
        a: 'Wir öffnen die Fuge, säubern sie, prüfen Flanken­zustand und füllen je nach Belastung mit dauer­elastischem PU oder mit kraftschlüssigem Reaktionsharz auf. Dauer­fugen, Schein­fugen und Bauwerks­fugen behandeln wir unterschiedlich.' },
      { q: 'Was kostet eine Industriebodensanierung?',
        a: 'Marktüblich 2026 liegen Reparatur­positionen zwischen 50 und 200 €/m² – stark abhängig von Schadensbild, Belastung und Schnelligkeits­anforderung. Wir kalkulieren nach Aufmaß und Schadens­bericht.' },
    ],
    keywords: [
      'industrieboden sanierung', 'industrieboden sanieren', 'industrieböden sanieren', 'sanierung industrieböden', 'bodensanierung industrieböden', 'industrieboden reparatur', 'industrieboden reparieren', 'industriebodensanierung', 'industriebodensanierung bocholt', 'industriebodensanierung nrw',
    ],
    image: '/images/scenes/industriebodensanierung-hero.jpg',
    thumbnail: '/images/scenes/industriebodensanierung-hero.jpg',
  },
]

export const TOPIC_BY_SLUG: Record<string, Service> = TOPIC_PAGES.reduce(
  (acc, t) => ({ ...acc, [t.slug]: t }),
  {} as Record<string, Service>,
)
