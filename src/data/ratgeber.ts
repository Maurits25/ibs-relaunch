// Ratgeber-Pages (informational Content für AI Overviews / Featured Snippets).
// Quellen: research/04-ratgeber-ai-crawlability.md
// Compliance: Marktspannen aus verifizierten Quellen, keine IBS-Preise, IBS verarbeitet zugelassene Systeme.

export type Ratgeber = {
  slug: string
  href: string
  title: string
  metaTitle: string
  metaDescription: string
  publishedAt: string
  /** Featured-Snippet-fähige 40-60-Wörter-Definition für AI Overview-Zitation */
  leadParagraph: string
  /** H2-Struktur als Inhaltsverzeichnis */
  sections: { id: string; heading: string; body: string }[]
  faqs: { q: string; a: string }[]
  keywords: string[]
  image: string
  relatedHrefs: string[]
}

export const RATGEBER: Ratgeber[] = [
  // ============================================================ Kosten
  {
    slug: 'kosten-bodenbeschichtung-pro-m2',
    href: '/ratgeber/kosten-bodenbeschichtung-pro-m2/',
    title: 'Kosten Bodenbeschichtung pro m² — was Sie 2026 zahlen',
    metaTitle: 'Kosten Bodenbeschichtung pro m² · Marktpreise 2026',
    metaDescription:
      'Marktpreis-Spannen 2026 für Bodenbeschichtung in Deutschland: Versiegelung ab 25 €/m², EP-Beschichtung 50-80 €/m², Mörtelbelag 70-120 €/m², Designboden 100-200 €/m². Quellenbasiert.',
    publishedAt: '2026-06-04',
    leadParagraph:
      'Eine Bodenbeschichtung kostet in Deutschland 2026 zwischen 25 und 200 Euro pro Quadratmeter, je nach System. Eine einfache Epoxidharz-Versiegelung beginnt bei 25 €/m², eine zweischichtige Industrieboden-Beschichtung liegt bei 50–80 €/m², und ein PU- oder PMMA-System für stark beanspruchte Hallen erreicht bis zu 180 €/m². Genauer Preis nach Aufmaß.',
    sections: [
      { id: 'spannen', heading: 'Marktpreise nach System (€/m²)', body: 'Versiegelung 1-schichtig: 25–45 €/m². EP-Beschichtung 2-schichtig (0,5–1 mm): 50–80 €/m². EP-Mörtelbelag/Verlaufs­beschichtung (2–4 mm): 70–120 €/m². PU-Beschichtung 3-schichtig: 90–140 €/m². PMMA-Schnellsystem: 90–180 €/m². Steinteppich (EP-gebunden): 80–150 €/m². Designboden Sichtbeton-Optik: 100–200 €/m². Werte aus baupreislexikon.de, wirverlegenestrich.de, daibau.de und baucheck.io (Stand 2026, Industrie- und Gewerbe­flächen ab ca. 100 m², netto).' },
      { id: 'einflussfaktoren', heading: 'Was den Preis beeinflusst', body: 'Untergrund­zustand (Reparatur­aufwand), Größe der Fläche (Skalen­effekt), Schicht­aufbau (1 bis 4 Schichten), Sondersysteme (WHG, ESD, R12/R13), Markierungs­aufwand, Zugänglichkeit (Anlieferung, Türgrößen), Termin­druck (Nacht-/Wochenend­arbeit), Demontage-/Entsorgungs­anteil (alte Beläge). Bei Privatgaragen (10–30 m²) sind die Preise pro m² höher als bei Hallenflächen ab 500 m² wegen fixer Rüstkosten.' },
      { id: 'vorgehen', heading: 'So bekommen Sie einen belastbaren Preis', body: '1. Aufmaß vor Ort kostenfrei vereinbaren. 2. Belastungs­profil klären (Tätigkeit, Stoffe, BG-Vorgabe). 3. Schicht­aufbau festlegen (Material, Schichten, R-Klasse). 4. Festpreis schriftlich einholen — kein „ca."-Preis, sondern definierter Schicht­aufbau. 5. Termin- und Zugangs­plan abstimmen.' },
      { id: 'ibs-vorgehen', heading: 'Vorgehen bei IBS', body: 'IBS Schmäing macht ausschließlich Festpreis-Angebote nach Vor-Ort-Aufmaß — keine pauschalen €/m²-Werte ohne Bestands­diagnose. Erst Untergrund, Belastung und Sondereigenschaften klären, dann transparent kalkulieren. Vor-Ort-Termin und Angebot sind kostenfrei.' },
    ],
    faqs: [
      { q: 'Was ist die günstigste Bodenbeschichtung?',
        a: 'Eine einfache 1K- oder 2K-Epoxidharz-Versiegelung beginnt bei ca. 25–45 €/m². Sie schützt vor Staub und leichten Belastungen, ist aber nicht für Stapler­verkehr oder chemische Beanspruchung ausgelegt.' },
      { q: 'Lohnt sich Selbermachen?',
        a: 'Für kleine Privatgaragen mit ausreichend trockenem Untergrund ja — Material­kosten ab 15 €/m². Bei größeren Flächen, anspruchsvollem Untergrund oder gewerblicher Nutzung lohnt der Profi: bessere Untergrund­vorbereitung, längere Lebens­dauer, Mängel-Gewährleistung.' },
      { q: 'Warum schwanken die Preise so stark?',
        a: 'System (EP, PU, PMMA, Mörtel) und Schicht­dicke unterscheiden sich um den Faktor 5–10. Auch Untergrund­zustand, Sondereigenschaften (WHG, ESD) und Markierungs­aufwand wirken sich stark aus. Daher: kein Pauschal­preis, nur Festpreis nach Aufmaß.' },
      { q: 'Sind Material und Verarbeitung im Preis?',
        a: 'Bei seriösen Angeboten ja — Material, Untergrund­vorbereitung, Reparatur, Beschichtung und Versiegelung sind enthalten. Achten Sie auf eindeutige Leistungs­positionen.' },
    ],
    keywords: ['bodenbeschichtung kosten', 'epoxidharz bodenbeschichtung preis pro m2', 'bodenbeschichtung preis pro m2', '2k epoxidharz bodenbeschichtung kosten pro m2', 'industrieboden kosten pro m2', 'kosten industrieboden'],
    image: '/images/scenes/kosten-bodenbeschichtung.jpg',
    relatedHrefs: ['/beschichtung/', '/industrieboden/', '/garagenboden/'],
  },

  // ============================================================ EP vs PU vs PMMA
  {
    slug: 'epoxidharz-vs-pu-vs-pmma',
    href: '/ratgeber/epoxidharz-vs-pu-vs-pmma/',
    title: 'Epoxidharz vs. PU vs. PMMA — Vergleich der Reaktionsharze',
    metaTitle: 'Epoxidharz vs PU vs PMMA · Vergleich 2026 | IBS',
    metaDescription:
      'Welches Reaktionsharz für welche Anwendung? Epoxidharz (EP), Polyurethan (PU) und Methacrylat (PMMA) im direkten Vergleich: Eigenschaften, Anwendung, Kosten, Aushärtung.',
    publishedAt: '2026-06-04',
    leadParagraph:
      'Epoxidharz (EP) ist starr und günstig, ideal für Innenflächen. Polyurethan (PU) ist elastisch und UV-stabil, ideal für Außenflächen und Bewegungs­anschlüsse. Methacrylat (PMMA) ist nach 45 Minuten begehbar, ideal für Schnellbau-Sanierungen und Balkonsanierung. Jedes System hat eine eigene Stärke.',
    sections: [
      { id: 'ep', heading: 'Epoxidharz (EP) — der robuste Standard', body: 'EP ist ein duroplastisches Reaktionsharz aus Bisphenol-A-Diglycidylether und Polyaminen. Eigenschaften: hohe Druck­festigkeit (typisch 70–100 N/mm²), gute chemische Resistenz, starre Vernetzung — daher keine Rissüberbrückung. Anwendung: Industrieboden innen, Werkstatt, Garage, WHG-Auffangraum. Schwächen: vergilbt unter UV-Licht, ist starr (reißt bei Bewegung), nicht für Außenflächen ohne PU-Versiegelung.' },
      { id: 'pu', heading: 'Polyurethan (PU/PUR) — elastisch und UV-stabil', body: 'PU entsteht aus Polyisocyanaten und Polyolen. Eigenschaften: elastisch (überbrückt Risse), UV-stabil (keine Vergilbung), höhere Temperatur­toleranz. Anwendung: Außenflächen, Parkdecks (OS-11), Kühl- und Tiefkühl­räume, Bereiche mit Temperatur­wechsel. Schwächen: empfindlicher gegen mechanischen Schock als EP, teurer pro m².' },
      { id: 'pmma', heading: 'Methacrylat (PMMA) — Schnellsystem', body: 'PMMA-Reaktionsharz härtet in Minuten aus. Eigenschaften: bei +20 °C nach 45–60 Min. begehbar, voll belastbar nach 2 h, bei niedrigen Temperaturen (bis +5 °C) verarbeitbar. Anwendung: Balkonsanierung, Parkdeck-Reparatur, Sanierung im laufenden Betrieb, Notfall-Sanierung. Schwächen: starker Geruch während Verarbeitung, höhere Material­kosten.' },
      { id: 'matrix', heading: 'Entscheidungs-Matrix', body: 'Innen, normale Belastung → EP. Außen oder Temperatur­wechsel → PU (oder EP + PU-Versiegelung). Schneller Termin oder kühle Witterung → PMMA. Balkon/Terrasse → PMMA-Abdichtung + Steinteppich-Decklage. Parkdeck → OS-11a/b (PU-basiert). Werkstatt/Industrie → EP, bei thermischer Last PU.' },
    ],
    faqs: [
      { q: 'Was ist günstiger: EP, PU oder PMMA?',
        a: 'EP ist am günstigsten (50–80 €/m² für eine 2-schichtige Beschichtung). PU liegt bei 90–140 €/m². PMMA bei 90–180 €/m² (Aufpreis für Schnelltechnik). Genauer Preis nach Aufmaß.' },
      { q: 'Kann ich EP und PU kombinieren?',
        a: 'Ja — ein klassischer Aufbau ist EP-Beschichtung + PU-Versiegelung als UV-Schutz. So bekommen Sie die Robust­heit von EP mit der UV-Stabilität von PU. Häufig im Außen­bereich oder unter Sonnen­einstrahlung im Inneren eingesetzt.' },
      { q: 'Was hält am längsten?',
        a: 'Alle drei Systeme erreichen bei fachgerechter Ausführung 15–25 Jahre Nutzungs­dauer. PU hat auf Außenflächen einen Vorteil wegen UV-Stabilität, EP ist bei chemischer Belastung im Innenraum oft führend.' },
      { q: 'Welches System für meinen Balkon?',
        a: 'Standard ist PMMA-Abdichtung + Decklage (Steinteppich, EP-Beschichtung oder PMMA-Versiegelung). PMMA ist UV-stabil und elastisch — ideal für Balkon­bewegung und Bewitterung.' },
      { q: 'Riecht PMMA während der Arbeit stark?',
        a: 'Ja. Methacrylat hat einen typischen, scharfen Geruch während der Verarbeitung. Wir arbeiten mit Belüftung und der Geruch verschwindet nach Aushärtung vollständig. In bewohnten Mehrfamilien­häusern stimmen wir Belüftungs­wege mit der Haus­verwaltung ab.' },
    ],
    keywords: ['epoxidharz vs pu', 'pu oder epoxidharz', 'pmma vergleich', 'reaktionsharz vergleich', 'bodenbeschichtung pu oder epoxy', 'epoxidharz polyurethan unterschied'],
    image: '/images/scenes/epoxidharz-vs-pu-vs-pmma.jpg',
    relatedHrefs: ['/beschichtung/', '/pu-beschichtung/', '/pmma-beschichtung/'],
  },

  // ============================================================ 2K
  {
    slug: '2k-bodenbeschichtung',
    href: '/ratgeber/2k-bodenbeschichtung/',
    title: '2K-Bodenbeschichtung — was bedeutet das?',
    metaTitle: '2K-Bodenbeschichtung erklärt · 1K vs 2K | IBS',
    metaDescription:
      '2K-Bodenbeschichtung ist ein Zweikomponenten-Reaktionsharz aus Harz und Härter. Aushärtung durch chemische Reaktion, deutlich belastbarer als 1K-Systeme. Erklärt mit Praxis-Beispielen.',
    publishedAt: '2026-06-04',
    leadParagraph:
      '2K-Bodenbeschichtung ist ein Zwei-Komponenten-Reaktionsharz aus Stamm­komponente (Harz) und Härter, die unmittelbar vor der Verarbeitung gemischt werden. Die Aushärtung erfolgt durch chemische Reaktion — das Ergebnis ist deutlich belastbarer als bei 1K-Systemen, die nur trocknen. 2K ist Standard für Industrieböden, Werkstatt und Garage.',
    sections: [
      { id: 'definition', heading: 'Was bedeutet 2K?', body: '„2K" steht für „Zwei-Komponenten". Harz und Härter werden im definierten Mischungs­verhältnis (z. B. 3:1 oder 4:1) gemischt und reagieren chemisch zu einem duroplastischen Polymer. Die Verarbeitungs­zeit (Topf­zeit) liegt typischerweise bei 20–45 Minuten — danach härtet das Material aus.' },
      { id: 'unterschied', heading: '1K vs. 2K — der Unterschied', body: '1K-Beschichtungen härten durch Verdunsten von Wasser oder Lösemittel — physikalisch. Sie sind günstig, einfach zu verarbeiten, aber deutlich weniger belastbar (typisch 5–10 Jahre Lebens­dauer auf Werkstatt­boden). 2K-Beschichtungen härten chemisch — die Vernetzung macht sie deutlich härter, chemikalien­beständiger und langlebiger (15–25 Jahre). Für Industrie, Werkstatt und WHG sind 2K-Systeme der Standard.' },
      { id: 'mischen', heading: 'Wichtig: Mischungs­verhältnis genau einhalten', body: 'Das Mischungs­verhältnis ist hersteller­seitig vorgegeben und muss genau eingehalten werden. Zu viel Härter → spröde, Risse. Zu wenig Härter → klebrig, hartet nicht durch. Wir wiegen jede Charge per Waage statt nach Augenmaß.' },
      { id: 'praxis', heading: 'In der Praxis', body: 'Eine typische 2K-EP-Beschichtung für die Garage: Grundierung (oft 1K oder 2K-EP-Grundierung), Spachtelung bei Bedarf, 2K-EP-Beschichtung in 1 oder 2 Schichten, optional 2K-PU-Versiegelung als UV-Schutz. Verarbeitung in mehreren Tagen wegen Aushärte­zeiten zwischen den Schichten.' },
    ],
    faqs: [
      { q: 'Kann ich 2K-Beschichtung selber verarbeiten?',
        a: 'Technisch ja — Baumärkte verkaufen 2K-Garagenboden-Sets. Wichtig: genaues Mischungs­verhältnis, Verarbeitung in der Topf­zeit, gute Untergrund­vorbereitung. Bei großen Flächen, anspruchsvollem Untergrund oder gewerblicher Nutzung empfehlen wir Profi-Verarbeitung.' },
      { q: 'Wie lange ist die Topf­zeit?',
        a: 'Bei +20 °C typisch 20–45 Minuten, system­abhängig. Höhere Temperatur verkürzt die Topf­zeit, niedrigere verlängert sie. Material­reste nach Topf­zeit-Ablauf nicht mehr verwenden.' },
      { q: 'Warum ist 2K besser als 1K?',
        a: 'Chemische Vernetzung statt physikalischer Trocknung gibt deutlich höhere Härte, chemische Resistenz und Lebens­dauer. Für gewerbliche und industrielle Anwendungen ist 2K Standard.' },
      { q: 'Sind alle 2K-Systeme gleich?',
        a: 'Nein. Es gibt 2K-EP, 2K-PU, 2K-PMMA — jeweils mit verschiedenen Härtern und Eigenschaften. Auch innerhalb einer Familie unterscheiden sich Systeme stark (Schicht­dicke, Härte, R-Klasse, Farb­palette).' },
      { q: 'Ist 2K wirklich teurer als 1K?',
        a: 'Material pro Liter ja, aber pro Quadratmeter und Lebens­dauer-Jahr ist 2K oft günstiger. Eine 1K-Beschichtung im Werkstatt­bereich ist nach 3–5 Jahren abgenutzt — eine 2K-Beschichtung hält 15–25 Jahre.' },
    ],
    keywords: ['2k bodenbeschichtung', 'bodenbeschichtung 2k', '2k epoxidharz bodenbeschichtung', '2k bodenbeschichtung garage', '2k beschichtung erklärt', '1k oder 2k', '2k bodenbeschichtung erfahrung'],
    image: '/images/scenes/2k-bodenbeschichtung.jpg',
    relatedHrefs: ['/beschichtung/', '/garagenboden/', '/werkstattboden/'],
  },

  // ============================================================ R-Klassen
  {
    slug: 'rutschhemmung-r9-r13',
    href: '/ratgeber/rutschhemmung-r9-r13/',
    title: 'Rutschhemmung R9 bis R13 — DIN 51130 erklärt',
    metaTitle: 'Rutschhemmung R9 R10 R11 R12 R13 erklärt | IBS',
    metaDescription:
      'Rutschhemmungsklassen R9, R10, R11, R12 und R13 nach DIN 51130 — Bedeutung, Anwendungsbereiche und Pflicht-Werte je Branche.',
    publishedAt: '2026-06-04',
    leadParagraph:
      'Die R-Klassen R9 bis R13 nach DIN 51130 klassifizieren die Rutschhemmung gewerblich genutzter Böden. R9 ist niedrige Anforderung (Verkauf, Büro), R13 ist höchste Anforderung (Schlachthof, fettige Produktion). Die richtige Klasse je Branche regelt die DGUV-Regel 108-003.',
    sections: [
      { id: 'tabelle', heading: 'R-Klassen Tabelle (DIN 51130)', body: 'R9: Akzeptanz­winkel 6°–10° — Eingangs- und Verkaufs­bereiche, Büros, Krankenhauszimmer. R10: 10°–19° — allg. Werkstatt, Garagen, Sanitär­räume. R11: 19°–27° — Großküchen, Galvanik, Wäschereien, Lebensmittel-Vorbereitung. R12: 27°–35° — Fleisch- und Wurst­verarbeitung, Bäckereien, Schlachterei-Vorraum. R13: über 35° — Schlachthof, Frischfisch­verarbeitung, fettige Produktion, Frittier-Bereich. Mess­verfahren: Schiefe-Ebenen-Test mit Öl als Gleit­mittel.' },
      { id: 'v-klassen', heading: 'V-Klassen (Verdrängungs­raum)', body: 'Ergänzend zur R-Klasse beschreibt die V-Klasse den Verdrängungs­raum unter der Oberfläche — wichtig in Bereichen mit Flüssigkeits­anfall. V4: 4 cm³/dm². V6: 6 cm³/dm². V8: 8 cm³/dm². V10: 10 cm³/dm². Für stark fettige oder nasse Bereiche meist V6, V8 oder V10 gefordert.' },
      { id: 'pflicht', heading: 'Welche Klasse Pflicht ist', body: 'Die DGUV-Regel 108-003 (vormals BGR 181) listet für jeden Arbeitsbereich die Mindest­anforderung. Verstoß = BG-Risiko bei Unfall. Konkrete Klasse besprechen Sie idealerweise mit Ihrer zuständigen BG oder im Vor-Ort-Termin mit uns.' },
      { id: 'umsetzung', heading: 'Wie die R-Klasse erzeugt wird', body: 'Quarz- oder Korund­körner werden in die letzte Beschichtungs­schicht eingestreut. Korngröße und Einstreu­menge bestimmen die Klasse: feiner Quarz (0,1–0,3 mm) → R10. Mittel (0,4–0,7 mm) → R11. Grob (0,7–1,2 mm) → R12. Korund mit Verdrängungs­raum → R13.' },
    ],
    faqs: [
      { q: 'Was bedeutet R9 / R10 / R11 / R12 / R13 konkret?',
        a: 'Es sind Rutschhemmungs-Klassen nach DIN 51130. R9 = niedrigste Anforderung (Büro, Verkauf), R13 = höchste (Schlachthof). Höhere Klasse = mehr Rutsch­hemmung, aber auch schwerer zu reinigen.' },
      { q: 'Welche Klasse für meine Branche?',
        a: 'Die DGUV-Regel 108-003 nennt für jede Tätigkeit die Mindest­klasse. Beispiele: Büro R9, Werkstatt R10, Großküche R11, Schlachthof R13. Wir kennen die typischen Werte je Branche.' },
      { q: 'Was ist der Unterschied zwischen R und A/B/C?',
        a: 'R-Klassen (R9-R13) sind für gewerblich genutzte Böden mit Schuhwerk. A/B/C (DIN 51097) sind für Barfuß­bereiche wie Schwimmbad-Umgang oder Dusch­räume.' },
      { q: 'Wird die R-Klasse mit der Zeit schlechter?',
        a: 'Bei sachkundigem Aufbau (Quarz im Beschichtungs­aufbau, nicht oben aufgestreut) bleibt die Klasse über die Lebens­dauer erhalten. Bei stark abriebs­belasteten Bereichen prüfen wir die Klasse alle 3–5 Jahre.' },
      { q: 'Kann ich R13 in jeder Farbe?',
        a: 'Ja. Die Einstreuung erfolgt in die letzte gefärbte Schicht. Die Oberfläche ist durch die Körnung rauer, behält aber den RAL-Ton.' },
    ],
    keywords: ['rutschhemmung r9 r10 r11 r12 r13', 'din 51130', 'r10 bodenbeschichtung', 'r11 bodenbeschichtung', 'r12 bodenbeschichtung', 'rutschfeste bodenbeschichtung', 'anti rutsch bodenbeschichtung'],
    image: '/images/scenes/r-klassen-rutschhemmung.jpg',
    relatedHrefs: ['/eigenschaften/rutschhemmung-r9-r13/', '/beschichtung/'],
  },

  // ============================================================ WHG 19
  {
    slug: 'whg-19-leitfaden',
    href: '/ratgeber/whg-19-leitfaden/',
    title: 'WHG §19 / §62 AwSV — Leitfaden für Auffangräume',
    metaTitle: 'WHG §19 AwSV §62 Leitfaden · Auffangräume | IBS',
    metaDescription:
      'WHG-Auffangräume: Pflichten nach §62 AwSV / §63 WHG, DIBt-Zulassung, Sachkundenachweis, Dichtheits­prüfung. Was Sie als Betreiber wissen müssen — verständlich erklärt.',
    publishedAt: '2026-06-04',
    leadParagraph:
      'Wer wassergefährdende Stoffe ab bestimmten Mengen lagert oder umschlägt, ist nach §62 AwSV / §63 WHG verpflichtet, einen flüssigkeits­dichten Auffangraum zu errichten. Die Beschichtung muss DIBt-zugelassen sein und sachkundig verarbeitet werden — sonst ist die Anlage nicht WHG-konform.',
    sections: [
      { id: 'rechtsgrundlage', heading: 'Rechtsgrundlage', body: 'WHG (Wasserhaushaltsgesetz) §62 / §63: Schutz von Boden und Grundwasser vor wassergefährdenden Stoffen. AwSV (Verordnung über Anlagen zum Umgang mit wassergefährdenden Stoffen, gültig seit 1. August 2017): konkretisiert die Anforderungen. Die WGK-Stufen 1 (schwach), 2 (deutlich) und 3 (stark) wassergefährdend regeln die Mengen­schwellen.' },
      { id: 'pflicht', heading: 'Wann besteht Pflicht?', body: 'Ab definierten Volumen (je nach WGK und Stoff) ist eine flüssigkeits­dichte Auffangwanne mit zugelassener Beschichtung Pflicht. Heizöl-Lagerung ab 1.000 Liter ist meist anzeige­pflichtig bei der Unteren Wasserbehörde (UWB). Konkrete Schwellen prüfen Sie mit Ihrer UWB.' },
      { id: 'beschichtung', heading: 'Anforderung an die Beschichtung', body: 'Nur Systeme mit DIBt-Zulassung (allgemeine bauaufsichtliche Zulassung, abZ/abP/aBG) dürfen eingesetzt werden. Jede Zulassung listet die zulässigen Medien (z. B. „Mineralöl, Schmieröl bis WGK 2"). Verarbeitung muss sachkundig erfolgen — entweder durch Fachbetrieb nach §62 AwSV oder durch Verarbeiter mit Sachkunde­nachweis.' },
      { id: 'aufbau', heading: 'Aufbau eines WHG-Auffangraums', body: 'Untergrund­vorbereitung (Kugelstrahlen oder Fräsen). Reparatur von Rissen und Hohlstellen. Grundierung. Beschichtung in 2–3 Schichten mit DIBt-Zulassung. Aufgehende Hohlkehlen (typisch 4 cm Radius) an allen Wand­anschlüssen. Dichtheits­prüfung (visuell und ggf. Wasser­standsprobe). Dokumentation für die UWB.' },
      { id: 'wartung', heading: 'Wartung und Prüfung', body: 'Regelmäßige Sicht­prüfung und Dichtheits­prüfung sind Betreiber-Pflicht. Sachverständigen­prüfungen nach AwSV §46 sind je Anlagentyp alle 5 Jahre üblich. Die Nutzungs­dauer einer WHG-Beschichtung ist typischerweise mit 10 Jahren in der DIBt-Zulassung unterstellt — danach prüfen oder erneuern.' },
    ],
    faqs: [
      { q: 'Brauche ich einen WHG-Fachbetrieb?',
        a: 'Für die Errichtung und Instandsetzung von WHG-Anlagen (Tank, Rohrleitungen) kann Fachbetriebs­pflicht nach §62 AwSV gelten — abhängig von Anlagentyp und WGK. Die Verarbeitung der Schutz­beschichtung kann auch durch einen sachkundigen Verarbeiter mit Sachkunde­nachweis erfolgen. Konkrete Pflicht klären Sie mit der UWB.' },
      { q: 'Was unterscheidet abZ, abP und aBG?',
        a: 'abZ = allgemeine bauaufsichtliche Zulassung (klassisch). abP = allgemeines bauaufsichtliches Prüfzeugnis. aBG = allgemeine Bauart­genehmigung (neuere Form seit Bauproduktenverordnung). Alle drei sind vom DIBt erteilte Verwendungs­nachweise.' },
      { q: 'Welches Medium darf ich lagern?',
        a: 'Jede DIBt-Zulassung listet eine Medien­tabelle. Vor Vergabe prüfen wir gemeinsam mit Ihnen, welches System Ihre konkrete Lager­liste abdeckt. „Universal-System" für alle Medien gibt es nicht.' },
      { q: 'Wie hoch ist die Nutzungs­dauer?',
        a: 'Typische DIBt-Zulassungen unterstellen 10 Jahre Nutzungs­dauer bei regelmäßiger Inspektion. Bei sachgerechter Verarbeitung und Pflege sind oft 15+ Jahre realistisch.' },
      { q: 'Ist IBS WHG-Fachbetrieb?',
        a: 'Nein. IBS hat keine Fachbetriebs-Zertifizierung. Wir verfügen aber über einen gültigen Sachkunde­nachweis und verarbeiten DIBt-zugelassene Systeme sachkundig. Für Anlagen mit Fachbetriebs­pflicht arbeiten wir mit einem zertifizierten Fachbetrieb zusammen — sprechen Sie uns an.' },
    ],
    keywords: ['whg 19 leitfaden', 'whg auffangraum', 'whg bodenbeschichtung', 'awsv §62', 'awsv beschichtung', 'wassergefährdende stoffe lagern', 'dibt zulassung beschichtung'],
    image: '/images/scenes/whg-19-leitfaden.jpg',
    relatedHrefs: ['/whg-beschichtung/', '/einsatzbereiche/whg-auffangraeume/'],
  },

  // ============================================================ Lebensdauer
  {
    slug: 'lebensdauer-bodenbeschichtung',
    href: '/ratgeber/lebensdauer-bodenbeschichtung/',
    title: 'Wie lange hält eine Bodenbeschichtung?',
    metaTitle: 'Lebensdauer Bodenbeschichtung · 15-25 Jahre | IBS',
    metaDescription:
      'Wie lange hält eine Bodenbeschichtung? Realistische Spannen: EP 15-25 Jahre, PU 15-20 Jahre, PMMA 10-20 Jahre, Steinteppich 20+ Jahre. Faktoren und Wartungs-Tipps.',
    publishedAt: '2026-06-04',
    leadParagraph:
      'Eine fachgerecht verarbeitete Bodenbeschichtung hält 15 bis 25 Jahre. Epoxidharz erreicht 15–25 Jahre im Innenbereich, Polyurethan 15–20 Jahre auf Außenflächen, PMMA 10–20 Jahre bei Bewitterung, Steinteppich 20+ Jahre im Innenraum. Belastung, Untergrund und Wartung sind die wichtigsten Einflussfaktoren.',
    sections: [
      { id: 'systeme', heading: 'Lebens­dauer pro System (realistisch)', body: 'EP-Versiegelung (1-schichtig, dünn): 8–15 Jahre. EP-Beschichtung (2-schichtig): 15–25 Jahre im Innenbereich. EP-Mörtelbelag (4–6 mm verschleißfest): 20–30 Jahre bei Industrie­belastung. PU-Beschichtung: 15–20 Jahre, auf Außenflächen abhängig von UV-Last und Wartung. PMMA-System: 10–20 Jahre, sehr abhängig von Bewitterung. Steinteppich (EP-gebunden, innen): 20+ Jahre. Designboden (Sichtbeton-Optik): 15–25 Jahre. Werte aus Hersteller-Garantien (typisch 5–10 Jahre), Fachpublikationen und Markt­erfahrung.' },
      { id: 'faktoren', heading: 'Was die Lebens­dauer beeinflusst', body: 'Untergrund­vorbereitung (mechanisch, kraftschlüssig) — wichtigster Faktor. Material­wahl (passend zur Belastung, nicht zu schwach). Schicht­dicke und Aufbau (mehr Schichten = länger). Belastung (Stapler­verkehr, chemische Last, Temperatur­wechsel). UV-Last (Außen vs. Innen). Wartung (regelmäßiges Reinigen, gezielte Reparaturen). Bauwerks­zustand (Setzungen, Risse, Restfeuchte). Verarbeitung (sachkundig vs. unsachkundig).' },
      { id: 'wartung', heading: 'Wartungs-Tipps', body: 'Tägliche Reinigung mit pH-neutralem Reiniger. Aggressive Säuren oder Laugen nur wenn das System dafür ausgelegt ist. Stark belastete Zonen (Stapler-Wege, Eingang) jährlich prüfen. Gezielte Reparaturen statt komplette Erneuerung — Reaktionsharz-Mörtel mit Schnelltechnik macht das einfach. Versiegelungs-Erneuerung im Innenraum alle 8–12 Jahre verlängert die Lebens­dauer der Decklage.' },
      { id: 'verlaengern', heading: 'Lebens­dauer verlängern', body: 'Wenn die Beschichtung anfängt zu altern (Verlust der Glanz­schicht, lokale Abplatzungen), oft genügt eine Versiegelungs-Erneuerung statt komplette Sanierung. Spart 50–70 % der Neubeschichtungs-Kosten. Wir prüfen den Zustand und empfehlen den günstigsten technisch sinnvollen Weg.' },
    ],
    faqs: [
      { q: 'Sind die Hersteller-Garantien die Lebens­dauer?',
        a: 'Nein. Hersteller-Gewährleistungen liegen typisch bei 5–10 Jahren auf das System. Die tatsächliche Nutzungs­dauer bei fachgerechter Ausführung ist oft 2–3× so lang. Wir sprechen über die realistische Nutzungs­dauer, nicht die Garantie­frist.' },
      { q: 'Was bedeutet „Garantie 25 Jahre"?',
        a: 'In der Werbung manchmal genannt, in der Praxis schwer nachweisbar. Unterscheiden Sie: gesetzliche Gewährleistung (5 Jahre bei Bauleistung nach §634a BGB), Hersteller-Gewährleistung (system­spezifisch), tatsächliche Lebens­dauer (Erfahrung). „25-Jahre-Garantie" ist meistens Marketing — fragen Sie nach dem konkreten Gewährleistungs-Dokument.' },
      { q: 'Warum hält PMMA kürzer als EP?',
        a: 'PMMA wird oft im Außen­bereich eingesetzt (Balkon, Parkdeck), wo Bewitterung die Material-Beanspruchung dramatisch erhöht. Innen (z. B. als Schnellbau-Werkstattboden) erreicht PMMA ähnliche Lebens­dauer wie EP. Außen ist die UV-Stabilität von PMMA hervorragend — die Lebens­dauer wird von mechanischer Bewitterung begrenzt.' },
      { q: 'Wann muss ich erneuern?',
        a: 'Wenn die Schutz­funktion verloren geht (Beton durchsichtig, durchgehende Abplatzungen) oder die Hygiene-Anforderung nicht mehr erfüllt wird (z. B. Lebensmittel-Audit). Lokale Reparatur statt komplette Erneuerung ist oft die günstigere Variante.' },
      { q: 'Wie verlängere ich die Lebens­dauer am effektivsten?',
        a: 'Regelmäßige Reinigung, Versiegelungs-Erneuerung alle 8–12 Jahre, gezielte Reparatur von Schäden, sachgerechte Pflege. Die größten Schäden entstehen, wenn kleine Defekte nicht zeitnah behoben werden — sie weiten sich aus.' },
    ],
    keywords: ['lebensdauer bodenbeschichtung', 'wie lange hält bodenbeschichtung', 'bodenbeschichtung haltbarkeit', 'epoxidharz lebensdauer', 'nutzungsdauer bodenbeschichtung'],
    image: '/images/scenes/lebensdauer-bodenbeschichtung.jpg',
    relatedHrefs: ['/beschichtung/', '/pu-beschichtung/', '/pmma-beschichtung/'],
  },

  // ============================================================ Auf Fliesen
  {
    slug: 'bodenbeschichtung-auf-fliesen',
    href: '/ratgeber/bodenbeschichtung-auf-fliesen/',
    title: 'Bodenbeschichtung auf Fliesen — geht das?',
    metaTitle: 'Bodenbeschichtung auf Fliesen · 2K Epoxidharz | IBS',
    metaDescription:
      'Ja, eine 2K-Bodenbeschichtung kann auf alten Fliesen verlegt werden — bei passender Vorbereitung. Voraussetzungen, Vorgehen und Grenzen erklärt.',
    publishedAt: '2026-06-04',
    leadParagraph:
      'Eine Bodenbeschichtung kann auf alten Fliesen aufgebracht werden — wenn die Fliesen fest sitzen, tragfähig sind und nicht durchfeuchtet. Mit passender Haftungs­grundierung haftet 2K-Epoxidharz oder PU dauerhaft. Spart Demontage-Kosten und Schmutz.',
    sections: [
      { id: 'voraussetzungen', heading: 'Voraussetzungen für Beschichtung auf Fliesen', body: 'Fliesen sitzen fest (keine hohlen Stellen — Klang­probe mit Hammer). Tragfähig (keine Risse, keine Lockerung). Trocken (kein aufsteigendes Wasser). Sauber und entfettet. Für glasierte Fliesen: Anrauen mit Schleif­scheibe oder spezielle Haftungs­grundierung. Fugen sind in der Regel kein Problem, werden in der Spachtelschicht aufgenommen.' },
      { id: 'vorgehen', heading: 'Vorgehen Schritt für Schritt', body: '1. Sicht- und Klang­prüfung — lose Fliesen entfernen und ausspachteln. 2. Reinigung mit alkalischem Reiniger zum Entfetten. 3. Anrauen der glasierten Oberfläche (mechanisch oder spezielle Grundierung). 4. Haftungs­grundierung auftragen — speziell für Fliesen geeignete EP-Grundierung. 5. Spachtelung zum Egalisieren der Fugen. 6. 2K-Beschichtung in 1 oder 2 Schichten. 7. Versiegelung mit Quarz­einstreu falls Rutsch­hemmung gewünscht.' },
      { id: 'grenzen', heading: 'Wann es NICHT geht', body: 'Wenn Fliesen hohl klingen oder lose sind — Demontage nötig. Wenn aufsteigendes Wasser vorhanden — Bauwerks­abdichtung erst. Wenn die Fliesen aus Marmor oder Naturstein sind — Spezial-Grundierung nötig, sprechen Sie uns an. Wenn die Beschichtung unter Punkt- oder Stoßlast (Stapler) belastet wird — dann lieber komplette Sanierung, da Fliesen unter Stoßlast brechen.' },
      { id: 'kosten', heading: 'Was kostet Beschichtung auf Fliesen?', body: 'Marktüblich 2026: 60–110 €/m². Etwas teurer als auf Beton, weil Haftungs­grundierung und ggf. Anrauen aufwendiger sind. Trotzdem oft günstiger als Demontage + Neuverlegung.' },
    ],
    faqs: [
      { q: 'Hält die Beschichtung auf glasierten Fliesen?',
        a: 'Ja, mit der richtigen Haftungs­grundierung. Glasierte Fliesen sind oberflächlich glatt — die Grundierung schafft die nötige Haftung. Bei Profi-Verarbeitung sind 15+ Jahre Lebens­dauer realistisch.' },
      { q: 'Sieht man die Fugen durch?',
        a: 'Bei dünnen Beschichtungen (Versiegelung) ja. Bei Standard-Beschichtungen mit Spachtelung (1 mm+) nicht mehr. Wenn die Fuge sichtbar bleibt, kann sie als gestalterisches Element wirken — vorab abstimmen.' },
      { q: 'Was kostet das Entfernen der Fliesen?',
        a: 'Marktüblich 15–40 €/m² Demontage + Entsorgung — abhängig vom Untergrund und Zugang. Bei Garagen-Fliesen ist Demontage oft günstig; bei alten verklebten Industrie-Fliesen kann es teuer werden.' },
      { q: 'Geht das auch im Keller?',
        a: 'Ja, wenn der Untergrund unter den Fliesen trocken ist. Bei aufsteigendem Wasser oder hoher Restfeuchte ist Demontage nötig, dann diffusionsoffene Beschichtung auf den Beton.' },
      { q: 'Auch auf Granit oder Marmor?',
        a: 'Technisch möglich, aber meistens unwirtschaftlich. Naturstein-Böden sind wertvoll — wir empfehlen eine Sanierung des Natursteins selbst (Schleifen, Versiegeln), nicht eine Überdeckung mit Beschichtung.' },
    ],
    keywords: ['bodenbeschichtung auf fliesen', 'bodenbeschichtungen auf fliesen', 'bodenbeschichtung auf alten fliesen', 'epoxidharz auf fliesen', 'bodenbeschichtung fliesen'],
    image: '/images/scenes/auf-fliesen-beschichten.jpg',
    relatedHrefs: ['/garagenboden/', '/kellerboden/', '/beschichtung/'],
  },

  // ============================================================ Diffusionsoffen
  {
    slug: 'diffusionsoffene-bodenbeschichtung',
    href: '/ratgeber/diffusionsoffene-bodenbeschichtung/',
    title: 'Diffusionsoffene Bodenbeschichtung — wann und warum',
    metaTitle: 'Diffusionsoffene Bodenbeschichtung erklärt | IBS',
    metaDescription:
      'Diffusionsoffen heißt: Wasserdampf darf passieren, flüssiges Wasser nicht. Erklärt mit Praxis-Beispielen für Keller, Erdberührung und Bestandsbeton. Mit CM-Messung.',
    publishedAt: '2026-06-04',
    leadParagraph:
      'Eine diffusionsoffene Bodenbeschichtung lässt Wasserdampf passieren — flüssiges Wasser aber nicht. Sie ist notwendig, wenn der Untergrund Restfeuchte hat (typisch im Keller oder bei Erdberührung), weil klassische dichte Beschichtungen sonst durch Wasserdampf­druck von unten abplatzen.',
    sections: [
      { id: 'definition', heading: 'Was bedeutet diffusionsoffen?', body: 'Diffusionsoffenheit beschreibt die Wasserdampf­durchlässigkeit einer Beschichtung. Charakterisiert über den sd-Wert (wasserdampf­äquivalente Luftschichtdicke in Metern). Ein hoher sd-Wert = dampfdicht (klassisches EP). Ein niedriger sd-Wert = diffusionsoffen (mineralische Beschichtung, Spezial-PU). Wasserdampf passiert die Schicht, flüssiges Wasser wird abgewiesen.' },
      { id: 'wann', heading: 'Wann brauche ich diffusionsoffen?', body: 'Im Keller mit Restfeuchte > 4 % CM. Auf erdberührten Bodenplatten ohne intakte Sperrschicht. Bei Bestandsbeton, der trocknet (Neubau noch nicht endgetrocknet, Sanierung nach Wasserschaden). Außen­flächen mit aufsteigender Boden­feuchte. In allen Fällen, wo der Untergrund noch Feuchte abgibt.' },
      { id: 'messung', heading: 'CM-Messung — der erste Schritt', body: 'Die CM-Methode (Calcium-Carbid-Test) ist Standard zur Bestimmung der Restfeuchte. Beton-Probe wird zerkleinert, mit Calcium-Carbid in einem Druckbehälter gemischt — der entstehende Druck (Acetylen) wird gemessen und in CM-% umgerechnet. Werte unter 4 % CM erlauben klassische dichte Beschichtung; höhere Werte verlangen diffusionsoffene Systeme.' },
      { id: 'systeme', heading: 'Diffusionsoffene Systeme', body: 'Mineralische Beschichtungen auf Zement­basis — höchste Diffusionsoffenheit. Spezielle PU-Systeme mit niedrigem sd-Wert. Hybrid-Systeme aus mineralischem Bindemittel und Reaktionsharz. Alle bekannten Hersteller (Remmers, KLB) haben dedizierte diffusionsoffene Produkte für diese Anwendung.' },
      { id: 'praxis', heading: 'Praxis: Wohnkeller-Beispiel', body: 'Typischer Fall: Bestandshaus, Keller-Beton ohne ausreichende Sperrschicht. CM-Wert 6 %. Klassisches EP würde nach Monaten Blasen werfen. Lösung: diffusionsoffenes mineralisches System in 2–3 Schichten, optional mit Steinteppich-Decklage für Wohn-Optik. Wasserdampf entweicht weiterhin nach oben, der Boden bleibt aber wasserabweisend und gut zu reinigen.' },
    ],
    faqs: [
      { q: 'Was ist der sd-Wert?',
        a: 'Der sd-Wert (wasserdampf­äquivalente Luftschichtdicke) beschreibt, wie stark eine Schicht den Wasserdampf-Durchgang bremst. sd = 0,1 m → sehr diffusionsoffen. sd = 5 m → diffusionshemmend. sd > 100 m → dampfdicht. Klassisches EP liegt bei sd > 1500 m, diffusionsoffene Systeme oft bei sd < 2 m.' },
      { q: 'Wie messe ich die Restfeuchte selber?',
        a: 'Verlässlich nur durch CM-Methode (Profi-Messgerät) oder Darrtrocknung (Labor). Foliertest gibt einen groben Hinweis (Folie auf den Boden, mit Klebeband abdichten, nach 24 h auf Kondens­wasser prüfen). Für die Vergabe braucht es CM-Werte.' },
      { q: 'Ist diffusionsoffen wasserdicht?',
        a: 'Nein. Diffusionsoffen heißt: Wasserdampf darf durch, flüssiges Wasser nicht. Bei drückendem Wasser von außen (Grundwasser) braucht es zuerst eine Bauwerks­abdichtung, dann darüber eine diffusionsoffene Beschichtung.' },
      { q: 'Kann ich später ein dichtes System darüberlegen?',
        a: 'Erst nach vollständiger Austrocknung des Bauwerks. Wenn die Ursache der Feuchte gelöst ist (Drainage, Bauwerks­abdichtung) und CM-Werte stimmen, kann eine klassische dichte Beschichtung aufgebaut werden. Vorher würde sie wieder abplatzen.' },
      { q: 'Was kostet diffusionsoffen?',
        a: 'Marktüblich 2026 50–150 €/m² — ähnlich wie klassische Beschichtungen, manchmal etwas teurer wegen Spezial-System. Vor-Ort-Termin mit CM-Messung dauert max. 1 Stunde.' },
    ],
    keywords: ['diffusionsoffene bodenbeschichtung', 'bodenbeschichtung diffusionsoffen', 'sd wert beschichtung', 'feuchter keller beschichten', 'cm messung beton', 'bodenbeschichtung restfeuchte'],
    image: '/images/scenes/diffusionsoffen-hero.jpg',
    relatedHrefs: ['/eigenschaften/diffusionsoffen/', '/kellerboden/'],
  },
]

export const RATGEBER_BY_SLUG: Record<string, Ratgeber> = RATGEBER.reduce(
  (acc, r) => ({ ...acc, [r.slug]: r }),
  {} as Record<string, Ratgeber>,
)
