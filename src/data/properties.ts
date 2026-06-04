// Eigenschafts-Pages – transversale Themen (Norm-Klassen).
// Quellen: research/01-materialien-eigenschaften.md
// Schema-Optimierung: jede Page als DefinedTerm (Glossar) + Service.

import type { Service } from './services'

export const PROPERTY_PAGES: Service[] = [
  // ============================================================ /eigenschaften/rutschhemmung-r9-r13/
  {
    slug: 'rutschhemmung-r9-r13',
    href: '/eigenschaften/rutschhemmung-r9-r13/',
    title: 'Rutschhemmung R9 bis R13 — DIN 51130 für gewerbliche Böden',
    shortTitle: 'Rutschhemmung R9–R13',
    metaTitle: 'Rutschhemmung R9 R10 R11 R12 R13 erklärt | IBS Schmäing',
    metaDescription:
      'Rutschhemmungsklassen R9–R13 nach DIN 51130: Bedeutung, Anwendungsbereich und Pflicht-Werte je Branche. Wir liefern die geforderte Klasse — von R9 (Verkauf) bis R13 (Schwerlast/Fett).',
    hero: {
      eyebrow: 'Eigenschaft · DIN 51130',
      headline: 'R9 bis R13: die richtige Rutschhemmung für Ihren Boden.',
      sub: 'Rutschhemmung wird in Deutschland nach DIN 51130 (gewerblich) und DIN 51097 (Barfußbereich) klassifiziert. Wir stellen über Quarz- oder Korund­einstreuung jede Klasse von R9 bis R13 her — passend zu Ihrer Branche und den Vorgaben Ihrer Berufs­genossenschaft.',
      bullets: [
        'R9–R13 nach DIN 51130',
        'V4/V6/V8/V10 Verdrängungs­räume',
        'Konform mit DGUV-Regel 108-003',
      ],
    },
    intro:
      'Die Rutschhemmung gewerblich genutzter Böden wird in Deutschland nach DIN 51130 in fünf Klassen R9 bis R13 eingeteilt — bestimmt über den Akzeptanz­winkel im schiefen Ebenen-Test. Ergänzend kennzeichnet die V-Klasse (V4, V6, V8, V10) den Verdrängungsraum unter der Oberfläche. Welche Klasse Pflicht ist, regelt die DGUV-Regel 108-003 (vormals BGR 181) je Arbeitsbereich.',
    suitableFor: [
      'R9 — Eingangs- und Verkaufs­bereiche, Büros',
      'R10 — Werkstatt allgemein, Garagen, Sanitär­räume',
      'R11 — Großküchen, Galvanik, Wäschereien',
      'R12 — Fleisch- und Wurst­verarbeitung, Bäckereien',
      'R13 — Schlachthof, Frischfisch­verarbeitung, fettige Produktion',
      'A/B/C — Barfußbereiche (DIN 51097, Bad/Schwimmbad)',
    ],
    problems: [
      { title: 'Zu niedrige Klasse', text: 'Unfälle, Berufsunfähigkeit, Regress durch BG: bei Unfall mit nachgewiesener Unterschreitung wird es teuer.' },
      { title: 'Zu hohe Klasse', text: 'R13 in einer Verkaufsfläche ist nicht reinigbar — Schmutz setzt sich in den Strukturen fest.' },
      { title: 'Unklare Vorgabe', text: 'Welche Klasse für „Bäckerei mit Verkaufs­tresen"? Die BG-Vorgabe ist nicht immer eindeutig.' },
    ],
    solution: {
      title: 'Quarz- oder Korund­einstreuung erzeugt die Klasse',
      text: 'Wir bringen in die letzte Beschichtungs­schicht Quarz- oder Korund­körner ein. Korngröße + Einstreu­menge bestimmen die R-Klasse. So bekommen Sie genau die Klasse, die Ihre BG vorschreibt — nicht mehr und nicht weniger.',
      bullets: [
        'R9 — fein, gestreute Versiegelung',
        'R10 — feiner Quarz (0,1–0,3 mm)',
        'R11 — mittlerer Quarz (0,4–0,7 mm)',
        'R12 — grober Quarz (0,7–1,2 mm)',
        'R13 — Korund mit Verdrängungs­raum V6/V8/V10',
      ],
    },
    process: [
      { title: '01 · BG-Vorgabe prüfen', text: 'Welche DGUV-Regel gilt für Ihre Tätigkeit? Welche R- und V-Klasse ist gefordert?' },
      { title: '02 · Klasse + Einstreu­plan', text: 'Wir wählen Material, Korngröße und Einstreu­menge so, dass die Klasse erreicht wird.' },
      { title: '03 · Probefläche (optional)', text: 'Für Sonderfälle: kleine Testfläche zur Begehung vor Auftrag.' },
      { title: '04 · Beschichtung', text: 'Aufbau mit definierter Einstreu­menge und passender Versiegelung.' },
      { title: '05 · Dokumentation', text: 'Klassen-Nachweis schriftlich für Ihre BG-Akte.' },
    ],
    benefits: [
      'Exakte BG-Konformität',
      'Klasse dauerhaft erhalten (Quarz/Korund liegt im Aufbau)',
      'Pflegeleicht – Klasse bleibt auch nach Reinigung',
      'In jeder Farbe lieferbar (Quarz wird mitgefärbt oder eingestreut)',
      'Kombinierbar mit Markierungen und ESD',
    ],
    materials: [
      { title: 'Quarz­einstreu', text: 'Für R9 bis R12 — feiner bis mittlerer Quarz in der letzten Beschichtungs­schicht.' },
      { title: 'Korund­einstreu', text: 'Für R13 und höchste Belastung — sehr harter Korund mit großem Verdrängungs­raum.' },
      { title: 'Versiegelungs­schicht', text: 'Bindemittel-Versiegelung über der Einstreu hält Klasse und Optik stabil.' },
    ],
    industries: [
      'Lebensmittel-Produktion',
      'Werkstätten und Kfz',
      'Großküchen und Gastronomie',
      'Verkauf und Einzelhandel',
      'Galvanik und Oberflächentechnik',
      'Wäschereien und Reinigungs­betriebe',
    ],
    faqs: [
      { q: 'Welche R-Klasse braucht meine Branche?',
        a: 'Die DGUV-Regel 108-003 listet für jede Tätigkeit die Mindest­klasse. Beispiele: Büro/Verkauf R9, allg. Werkstatt R10, Großküche R11, Schweine­schlachtung R13. Im Zweifel fragt man die zuständige BG.' },
      { q: 'Was ist der Unterschied zwischen R-Klasse und V-Klasse?',
        a: 'Die R-Klasse beschreibt die Rutsch­hemmung der Ober­fläche (Schiefe-Ebenen-Test). Die V-Klasse beschreibt den Verdrängungs­raum unter der Oberfläche (für ablaufende Flüssigkeiten). V4 = 4 cm³/dm² Verdrängung, V10 = 10 cm³/dm². Für stark fettige Bereiche oft V8 oder V10.' },
      { q: 'Hält die R-Klasse dauerhaft?',
        a: 'Ja, wenn Quarz/Korund im Beschichtungs­aufbau eingebunden ist (nicht nur oben aufgestreut). Bei klassischer Einstreuung mit Versiegelung darüber bleibt die Klasse über die Lebens­dauer erhalten.' },
      { q: 'Können Sie R13 in jeder Farbe?',
        a: 'Ja — die Einstreuung erfolgt in die letzte gefärbte Beschichtungs­schicht. Optisch ist die Oberfläche durch die Körnung rauer, behält aber den RAL-Ton.' },
      { q: 'Welche Klasse für ein Schwimmbad?',
        a: 'Im Barfuß­bereich gilt DIN 51097 mit A, B, C (statt R). Wir setzen meist Klasse C in Nass­bereichen (Spritzwasser, Fußduschen).' },
    ],
    keywords: [
      'rutschhemmung r9 r10 r11 r12 r13', 'din 51130', 'rutschfeste bodenbeschichtung', 'anti rutsch bodenbeschichtung', 'antirutsch bodenbeschichtung', 'bodenbeschichtung rutschhemmend', 'bodenbeschichtung r10', 'bodenbeschichtung r11', 'bodenbeschichtung r12', 'bodenbeschichtung rutschfest',
    ],
    image: '/images/scenes/rutschhemmung-hero.jpg',
    thumbnail: '/images/scenes/rutschhemmung-hero.jpg',
  },

  // ============================================================ /eigenschaften/esd-ableitfaehig/
  {
    slug: 'esd-ableitfaehig',
    href: '/eigenschaften/esd-ableitfaehig/',
    title: 'ESD-Bodenbeschichtung — ableitfähig nach DIN EN 61340',
    shortTitle: 'ESD / Ableitfähig',
    metaTitle: 'ESD Bodenbeschichtung · Ableitfähig nach EN 61340 | IBS',
    metaDescription:
      'ESD-Bodenbeschichtung für Elektronik, Reinraum und Ex-Zonen: ableitfähig nach DIN EN 61340-5-1, dauerhafte Erdung, Widerstand < 10^9 Ω. Sachkundig verarbeitet — Bocholt, NRW.',
    hero: {
      eyebrow: 'Eigenschaft · ESD · DIN EN 61340',
      headline: 'Ableitfähige Beschichtung für Elektronik, Reinraum und Ex-Zone.',
      sub: 'ESD-Böden schützen empfindliche Bauteile vor elektrostatischen Entladungen. Wir verarbeiten zertifizierte Systeme von Remmers und KLB nach DIN EN 61340-5-1 — mit dauerhafter Erdung und dokumentiertem Wider­stand.',
      bullets: [
        'Widerstand < 10⁹ Ω (EPA-konform)',
        'Erdungs­punkte und Kupferband im Aufbau',
        'Messprotokoll nach Übergabe',
      ],
    },
    intro:
      'Eine ESD-Bodenbeschichtung (electrostatic discharge) ist eine ableitfähige Beschichtung, die elektrostatische Ladungen kontrolliert zur Erde ableitet. Geregelt in DIN EN 61340-5-1 (ESD-Schutz für elektronische Bauteile) und DIN EN 61340-4-1 (Mess­verfahren). Der Punkt-zu-Erde-Widerstand muss im EPA-Bereich (ESD Protected Area) unter 10⁹ Ω liegen.',
    suitableFor: [
      'Elektronik- und Halbleiter-Fertigung',
      'Sensorik und Mikro­elektronik',
      'Pharma und Reinräume (oft kombiniert)',
      'Ex-Zonen (Sprengstoff, Gase, Stäube)',
      'IT-Server­räume',
      'Galvanik mit elektrochemischen Prozessen',
    ],
    problems: [
      { title: 'Bauteile zerstört', text: 'Ohne ESD-Boden reichen wenige Volt aus, um moderne Halbleiter zu zerstören — die Ausschussrate steigt unbemerkt.' },
      { title: 'Ex-Schutz nicht erfüllt', text: 'In Ex-Zonen ist ableitfähiger Boden vorgeschrieben — Verstoß bedeutet Betriebs­untersagung.' },
      { title: 'Falscher Widerstand', text: 'Antistatisch (10⁹ – 10¹¹ Ω) ≠ ableitfähig (< 10⁹ Ω). Verwechslung ist teuer.' },
    ],
    solution: {
      title: 'Geschlossener Aufbau mit Erdung',
      text: 'Wir verarbeiten ESD-zertifizierte Beschichtungs­systeme von Remmers und KLB. Der Aufbau enthält ein Kupferband-Erdungs­netz, das mit dem Potenzial­ausgleich verbunden wird. Nach Verarbeitung messen wir die Widerstands­werte und dokumentieren sie.',
      bullets: [
        'Leitende Grundierung als erstes Schichtelement',
        'Kupferband im Raster (Erdungs­netz)',
        'ESD-Decklage mit Kohlenstoff­fasern oder leitenden Pigmenten',
        'Anschluss an Potenzial­ausgleich (durch Elektriker)',
        'Mess­protokoll für jede Übergabe',
      ],
    },
    process: [
      { title: '01 · Anforderungs-Klärung', text: 'Welche Norm (EPA, Ex, Pharma)? Welche Widerstands­klasse? Welche Begehung erlaubt?' },
      { title: '02 · Aufbau-Planung', text: 'Erdungs­raster, leitende Grundierung, Decklage, Verbindung zum Potenzial­ausgleich.' },
      { title: '03 · Untergrund­vorbereitung', text: 'Mechanisch entfernen, reparieren, grundieren.' },
      { title: '04 · ESD-Aufbau', text: 'Leitende Grundierung, Kupferband, ESD-Decklage, ggf. Versiegelung.' },
      { title: '05 · Messung & Übergabe', text: 'Punkt-zu-Erde-Messung an mehreren Stellen, Protokoll und Übergabe.' },
    ],
    benefits: [
      'EPA-konform (< 10⁹ Ω)',
      'Dokumentiert mit Mess­protokoll',
      'Lebens­dauer wie klassische EP-Beschichtung',
      'Auch farbig in RAL-Tönen möglich',
      'Kombinierbar mit R-Klassen (R9 bis R11 typisch)',
      'Kompatibel mit Reinraum- und Pharma-Anforderungen',
    ],
    materials: [
      { title: 'Remmers ESD-Beschichtung', text: 'Leitende Beschichtungs­systeme mit Erdungs­raster, schulungs­zertifiziert verarbeitet.' },
      { title: 'KLB ESD-System', text: 'Ableitfähige Reaktionsharz-Beschichtung mit Kohlenstoff­fasern.' },
      { title: 'Kupferband + Anschluss­satz', text: 'Erdungs­raster und Anschluss-Komponenten — Potenzial­ausgleich durch Elektriker.' },
    ],
    industries: [
      'Elektronik- und Halbleiter-Industrie',
      'Sensorik und Messtechnik',
      'Pharma- und Reinraum-Produktion',
      'Munitions- und Pyrotechnik',
      'Lebensmittel mit Ex-Zonen (Mehlstaub)',
      'Galvanik und Plattierung',
    ],
    faqs: [
      { q: 'Was ist der Unterschied zwischen antistatisch und ableitfähig?',
        a: 'Antistatisch = Punkt-zu-Erde-Widerstand 10⁹ bis 10¹¹ Ω. Ableitfähig (ESD-EPA) = unter 10⁹ Ω. Für reine Elektronik-Fertigung braucht es ableitfähig; für Bereiche mit hoher Reibung (Förder­bänder, Türen) reicht oft antistatisch. Die exakte Anforderung steht in DIN EN 61340-5-1.' },
      { q: 'Wie wird die Erdung hergestellt?',
        a: 'Wir legen ein Kupferband-Raster auf die Grundierung, das alle paar Meter mit dem Potenzial­ausgleich (durch Elektriker) verbunden wird. Die ableitfähige Beschichtung darüber leitet Ladungen ins Kupferband und damit zur Erde.' },
      { q: 'Hält der Widerstand dauerhaft?',
        a: 'Bei sachkundigem Aufbau ja. Wir empfehlen jährliche Kontroll­messung (insbesondere in EPA-Bereichen). Reinigungsprodukte ohne ableitfähige Pflege­zusätze können den Widerstand kurzfristig erhöhen — wir liefern Pflege­empfehlungen.' },
      { q: 'Funktioniert ESD mit Markierungen und Rutsch­hemmung?',
        a: 'Ja. ESD ist eine elektrische Eigenschaft, die parallel zu Rutsch­hemmung (R9–R11) und Markierungen umgesetzt wird. Höhere Quarz­körnung (R12/R13) reduziert allerdings die Leitfähigkeit — daher meist Kompromiss bei R9–R10.' },
      { q: 'Was kostet eine ESD-Beschichtung?',
        a: 'Marktüblich 2026 zwischen 90 und 180 €/m² – höher als Standard wegen Kupfer-Erdungs­raster und ESD-Material. Genauer Preis nach Aufmaß und Mess­raster.' },
    ],
    keywords: [
      'esd bodenbeschichtung', 'ableitfähige bodenbeschichtung', 'antistatische bodenbeschichtung', 'ableitfähiger industrieboden', 'din en 61340', 'esd industrieboden', 'esd boden', 'ex zone bodenbeschichtung', 'leitfähige beschichtung',
    ],
    image: '/images/scenes/esd-ableitfaehig-hero.jpg',
    thumbnail: '/images/scenes/esd-ableitfaehig-hero.jpg',
  },

  // ============================================================ /eigenschaften/diffusionsoffen/
  {
    slug: 'diffusionsoffen',
    href: '/eigenschaften/diffusionsoffen/',
    title: 'Diffusionsoffene Bodenbeschichtung — atmungsaktiv bei Restfeuchte',
    shortTitle: 'Diffusionsoffen',
    metaTitle: 'Diffusionsoffene Bodenbeschichtung Bocholt | IBS Schmäing',
    metaDescription:
      'Diffusionsoffene Bodenbeschichtung für Keller und feuchte Untergründe: Wasserdampf kann entweichen, die Beschichtung sprengt nicht ab. Mit CM-Messung vor Auftrag. Bocholt · NRW.',
    hero: {
      eyebrow: 'Eigenschaft · Bauphysik',
      headline: 'Diffusionsoffen statt abgeplatzt: das richtige System bei Restfeuchte.',
      sub: 'Klassische dichte Beschichtungen sprengen ab, wenn der Untergrund noch Feuchtigkeit abgibt. Diffusionsoffene Systeme lassen Wasserdampf passieren — und bleiben dauerhaft haftend. Wir messen vor jedem Auftrag.',
      bullets: [
        'CM- oder Darrtrocknungs-Messung',
        'Mineralische oder spezielle Reaktionsharz-Systeme',
        'Sd-Wert dokumentiert',
      ],
    },
    intro:
      'Diffusionsoffenheit beschreibt die Fähigkeit eines Bodensystems, Wasserdampf durchzulassen. Bei Untergründen mit Restfeuchte (typisch: Keller, alte Betonböden, Erdberührung) kann eine zu dichte Beschichtung durch Wasserdampf­druck von unten absprengen. Diffusionsoffene Systeme haben einen niedrigeren sd-Wert (wasserdampf­äquivalente Luftschichtdicke) und lassen den Dampf entweichen.',
    suitableFor: [
      'Kellerböden mit Restfeuchte',
      'Erdberührte Bodenplatten',
      'Altbau-Beton ohne intakte Sperrschicht',
      'Hofflächen und nicht überdachte Außenflächen',
      'Standorte mit hoher Bodenfeuchte',
      'Sanierung von feuchten Bestands­böden',
    ],
    problems: [
      { title: 'Beschichtung sprengt ab', text: 'Wasserdampf­druck von unten hebt eine dichte Beschichtung in Form von Blasen und Abplatzungen ab.' },
      { title: 'Restfeuchte über 4 % CM', text: 'Klassisches 2K-Epoxidharz fordert oft Restfeuchte unter 4 %. Im Bestand ist das selten erreicht.' },
      { title: 'Schimmel unter Belag', text: 'Wenn Feuchtigkeit nicht entweichen kann, sammelt sie sich darunter — Schimmel und Geruch sind die Folge.' },
    ],
    solution: {
      title: 'sd-Wert messen + atmendes System wählen',
      text: 'Wir messen die Restfeuchte per CM- oder Darrtrocknungs-Methode. Bei Werten über 4 % wählen wir mineralische Beschichtungen oder spezielle Reaktionsharz­systeme mit niedrigem sd-Wert. So bleibt der Aufbau dauerhaft haftend.',
      bullets: [
        'CM-Messung Restfeuchte vor Vergabe',
        'Mineralische Beschichtungs­systeme (atmungsaktiv)',
        'Spezielle PU- oder Hybrid-Reaktionsharze',
        'Dokumentierter sd-Wert für die Aufbau-Akte',
        'Auf Wunsch: kombiniert mit nachträglicher Bauwerks­abdichtung',
      ],
    },
    process: [
      { title: '01 · Feuchte-Messung', text: 'CM- oder Darrtrocknungs-Wert. Beurteilung Bauwerks­zustand. Ursache der Feuchte klären.' },
      { title: '02 · Systemwahl', text: 'Mineralisch, Reaktionsharz mit niedrigem sd, oder Empfehlung Bauwerks­abdichtung erst.' },
      { title: '03 · Vorbereitung', text: 'Untergrund­vorbereitung mechanisch, ohne abdichtende Verkapselung.' },
      { title: '04 · Beschichtung', text: 'Diffusionsoffenes System in 1–3 Schichten — atmend, haftend, dauerhaft.' },
      { title: '05 · Übergabe', text: 'sd-Wert-Dokumentation, Pflege­hinweise.' },
    ],
    benefits: [
      'Haftet auch bei höherer Restfeuchte',
      'Verhindert Abplatzungen durch Wasserdampf',
      'Hindert keine Bauwerks­trocknung',
      'Kann auf alten Beton ohne Sperrschicht',
      'Dokumentierter sd-Wert',
      'Auch farbig und rutsch­hemmend lieferbar',
    ],
    materials: [
      { title: 'Mineralische Beschichtung', text: 'Zementgebundene Beschichtungs­systeme mit sehr hoher Wasserdampf­diffusion.' },
      { title: 'Spezial-PU diffusionsoffen', text: 'Reaktionsharz-Beschichtungen mit Sonderaufbau für höhere Wasserdampf­durchlässigkeit.' },
      { title: 'Hybrid-Systeme', text: 'Kombination aus mineralischem Bindemittel und Reaktionsharz für stabilen Aufbau bei Restfeuchte.' },
    ],
    industries: [
      'Privathaushalte (Keller)',
      'Bestandsobjekt-Sanierung',
      'Hausverwaltungen',
      'Altbau-Modernisierung',
      'Außenflächen Industrie',
    ],
    faqs: [
      { q: 'Was bedeutet diffusionsoffen genau?',
        a: 'Eine Beschichtung gilt als diffusionsoffen, wenn ihr sd-Wert (wasserdampf­äquivalente Luftschichtdicke) deutlich niedriger ist als bei klassischen dichten Systemen. Wasserdampf kann passieren, flüssiges Wasser nicht. Die genaue Schwelle ist im Hersteller-Datenblatt angegeben.' },
      { q: 'Wann ist diffusionsoffen Pflicht?',
        a: 'Immer wenn der Untergrund die Hersteller-Grenz­werte für Restfeuchte überschreitet — typisch im Bestand, in Kellern und auf erdberührten Bodenplatten ohne intakte Sperrschicht.' },
      { q: 'Wie wird Restfeuchte gemessen?',
        a: 'Standard ist die CM-Methode (Calcium-Carbid-Test): aus der zerkleinerten Probe entweicht Acetylen, der Druckanstieg wird in CM-% gemessen. Ergänzend ist die Darrtrocknung (Massenverlust nach Ofen­trocknung) genauer aber zerstörender.' },
      { q: 'Ist diffusionsoffen wasserdicht?',
        a: 'Nein. Wasserdampf darf passieren — flüssiges Wasser nicht. Das ist genau der Unterschied: wasserabweisende Oberfläche, aber atmender Untergrund-Aufbau.' },
      { q: 'Kann ich später eine dichte Beschichtung darüber legen?',
        a: 'Erst nach kompletter Austrocknung des Bauwerks. Wenn die Ursache der Restfeuchte gelöst ist (Drainage, Bauwerks­abdichtung) und CM-Werte unter den Hersteller-Grenz­werten liegen, kann später ein klassisches System aufgebaut werden.' },
    ],
    keywords: [
      'diffusionsoffene bodenbeschichtung', 'bodenbeschichtung diffusionsoffen', 'bodenbeschichtung keller diffusionsoffen', 'diffusionsoffene beschichtung', 'sd wert beschichtung', 'feuchter keller beschichten', 'bodenbeschichtung restfeuchte', 'bodenbeschichtung wasserdicht',
    ],
    image: '/images/scenes/diffusionsoffen-hero.jpg',
    thumbnail: '/images/scenes/diffusionsoffen-hero.jpg',
  },
]

export const PROPERTY_BY_SLUG: Record<string, Service> = PROPERTY_PAGES.reduce(
  (acc, p) => ({ ...acc, [p.slug]: p }),
  {} as Record<string, Service>,
)
