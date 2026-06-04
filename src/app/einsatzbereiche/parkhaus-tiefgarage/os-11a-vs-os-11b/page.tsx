import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { CTASection } from '@/components/sections/CTASection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  articleJsonLd,
  definedTermJsonLd,
} from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'

const META = {
  href: '/einsatzbereiche/parkhaus-tiefgarage/os-11a-vs-os-11b/',
  title: 'OS-11a vs. OS-11b — Vergleich der Parkhaus-Beschichtungs­systeme',
  metaTitle: 'OS-11a vs OS-11b · Unterschied erklärt | IBS Schmäing',
  metaDescription:
    'OS-11a und OS-11b im Vergleich nach DAfStb-Richtlinie Instandhaltung 2020: Aufbau, Schichtdicke, Anwendung, Verschleißfestigkeit. Faktencheck für Parkhaus- und Tiefgaragen-Beschichtung.',
}

export const metadata: Metadata = buildMetadata({
  path: META.href,
  title: META.metaTitle.replace(' | IBS Schmäing', ''),
  description: META.metaDescription,
  keywords: ['os 11a', 'os 11b', 'os 11a vs os 11b', 'os 11 unterschied', 'os-11 parkhaus', 'os-11b tiefgarage', 'rissüberbrückende beschichtung', 'rili sib parkhaus'],
})

const COMPARISON_ROWS = [
  { label: 'Anwendung', a: 'Zwischendecks Parkhaus (geschützt vor Bewitterung)', b: 'Topdecks und freibewitterte Decks' },
  { label: 'Bewitterung', a: 'Keine direkte UV-/Frost-Last', b: 'Vollständig frei­bewittert (UV, Frost-Tau)' },
  { label: 'Rissüberbrückung', a: 'Dynamisch (Verkehr) — niedrigere Klasse', b: 'Dynamisch — höhere Klasse' },
  { label: 'Verschleißschicht', a: 'Dünner — Standard-Quarzeinstreu', b: 'Höhere Verschleißfestigkeit (Quarz/Korund)' },
  { label: 'Typischer Aufbau', a: 'Grundierung + 2 Schichten + Versiegelung', b: 'Grundierung + 2–3 Schichten + Verschleiß­schicht + Versiegelung' },
  { label: 'Schichtdicke gesamt', a: 'Ca. 3,5–4,5 mm', b: 'Ca. 5–7 mm' },
  { label: 'Rutsch­hemmung', a: 'R10–R11 typisch', b: 'R11–R12 typisch' },
  { label: 'Geprüft nach', a: 'DAfStb RL Instandhaltung 2020 / Rili-SIB', b: 'DAfStb RL Instandhaltung 2020 / Rili-SIB' },
  { label: 'Erwartete Lebens­dauer', a: '10–15 Jahre (innen, geschützt)', b: '10–15 Jahre (außen, UV-Last)' },
] as const

const FAQ = [
  { q: 'Was ist der Hauptunterschied zwischen OS-11a und OS-11b?',
    a: 'OS-11a ist ein rissüberbrückendes System für Zwischendecks (geschützt, kein Frost-Tau-Wechsel, weniger UV-Last). OS-11b hat eine höhere Verschleiß­schicht und ist für freibewitterte Top-Decks ausgelegt, die direkter Bewitterung, Frost-Tau und höherem Reifenabrieb ausgesetzt sind. Beide haben dynamische Rissüberbrückung — der Unterschied liegt in der Verschleißfestigkeit der Decklage.' },
  { q: 'Wann brauche ich OS-11b statt OS-11a?',
    a: 'Auf freibewitterten Top-Decks (oberste Park-Ebene ohne Dach) ist OS-11b Standard. Sobald das Deck überdacht oder im Tiefgaragen-Bereich liegt, reicht OS-11a aus.' },
  { q: 'Kann ich OS-11b unter OS-11a-Bedingungen einbauen?',
    a: 'Technisch ja — OS-11b ist „mehr" und schadet nicht. Wirtschaftlich nein: OS-11b ist deutlich teurer pro m² als OS-11a. Wir empfehlen OS-11a wo es ausreicht.' },
  { q: 'Was ist OS-11c?',
    a: 'OS-11c existiert nicht als eigene Klasse in der aktuellen DAfStb-Richtlinie Instandhaltung 2020. Es gibt OS-11a und OS-11b. OS-12 ist eine ältere Bezeichnung, die in der neuen Richtlinie teils umstrukturiert ist.' },
  { q: 'Wie wird die Rissüberbrückung gemessen?',
    a: 'Nach DIN EN 1062-7 (Rissüberbrückung) wird die Beschichtung über einen Riss mit definierter Aufweitung gespannt. Die OS-Klasse legt fest, welche Riss­bewegung (Aufweitung in mm bei -20 °C) das System aushalten muss. Genaue Werte stehen in der DAfStb-Richtlinie Instandhaltung 2020.' },
  { q: 'Hält OS-11 dauerhaft auf Asphalt?',
    a: 'Beide OS-11-Systeme werden auf Beton oder Reaktionsharz-Estrich aufgebaut, nicht direkt auf Asphalt. Für Asphalt­untergründe sind andere Aufbau­systeme erforderlich (typisch OS-10 als Brücken­abdichtung unter weiterer Nutzschicht).' },
]

const PROCESS_STEPS = [
  { title: 'Bauteil-Position klären', text: 'Top-Deck freibewittert oder Zwischendeck — Frost-Tau und UV-Last sind entscheidend.' },
  { title: 'Beton-Diagnose', text: 'Karbonatisierungs-Tiefe, Riss­breite, Bewehrungs-Beurteilung — Voraussetzung für jede OS-Klasse.' },
  { title: 'Aufbau wählen', text: 'OS-11a für geschützte Bereiche, OS-11b für volle Bewitterung. Schichten­zahl nach Belastung.' },
  { title: 'Verarbeitung', text: 'Sachkundige Verarbeitung der zugelassenen Systeme (Remmers, KLB) mit dokumentiertem Aufbau.' },
]

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="OS-Klassen Vergleich"
        title="OS-11a vs. OS-11b — der Unterschied auf einen Blick."
        description="Zwei OS-Klassen, ein gemeinsames Ziel: dynamische Rissüberbrückung in Parkbauten. Hier ist der direkte Vergleich nach DAfStb-Richtlinie Instandhaltung 2020 (vormals Rili-SIB) — mit den verifizierten technischen Eigenschaften."
        crumbs={[
          { name: 'Start', href: '/' },
          { name: 'Einsatzbereiche', href: '/einsatzbereiche/' },
          { name: 'Parkhaus & Tiefgarage', href: '/einsatzbereiche/parkhaus-tiefgarage/' },
          { name: 'OS-11a vs. OS-11b', href: META.href },
        ]}
        image="/images/scenes/os-11a-vs-os-11b-hero.jpg"
      />

      {/* Featured Snippet Tabelle */}
      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Direktvergleich"
            title="OS-11a und OS-11b im Detail."
            description="Beide nach DAfStb-Richtlinie Instandhaltung 2020. Der Unterschied liegt in der Bewitterung und damit in der Verschleißschicht."
          />
          <div className="overflow-x-auto rounded-2xl ring-1 ring-ibs-line shadow-soft">
            <table className="w-full border-collapse text-left">
              <thead className="bg-ibs-ink text-white">
                <tr>
                  <th className="px-fluid-3 py-fluid-3 text-fluid-sm font-semibold">Eigenschaft</th>
                  <th className="px-fluid-3 py-fluid-3 text-fluid-sm font-semibold">OS-11a</th>
                  <th className="px-fluid-3 py-fluid-3 text-fluid-sm font-semibold">OS-11b</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ibs-line">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-ibs-paper'}>
                    <td className="px-fluid-3 py-fluid-2 text-fluid-sm font-semibold text-ibs-ink">{row.label}</td>
                    <td className="px-fluid-3 py-fluid-2 text-fluid-sm text-ibs-steel">{row.a}</td>
                    <td className="px-fluid-3 py-fluid-2 text-fluid-sm text-ibs-steel">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Quick Decision Guide */}
      <Section variant="paper">
        <div className="container max-w-5xl">
          <SectionIntro
            eyebrow="Schnell-Entscheidung"
            title="Welche Klasse für welches Deck?"
            centered
          />
          <div className="grid gap-fluid-3 sm:grid-cols-2">
            <div className="reveal rounded-2xl bg-white p-fluid-4 ring-1 ring-ibs-line shadow-soft">
              <p className="font-display text-fluid-2xl font-bold text-ibs-ink">OS-11a</p>
              <p className="mt-2 text-fluid-sm text-ibs-steel">Für Zwischendecks, Tiefgaragen-Etagen, geschützte Park-Ebenen — überall ohne direkte Bewitterung und Frost-Tau-Wechsel.</p>
              <ul className="mt-4 space-y-2 text-fluid-sm">
                <li className="flex gap-2"><Icon name="check" size={14} className="mt-0.5 text-ibs-accent" /> PKW-Verkehr ohne UV-Last</li>
                <li className="flex gap-2"><Icon name="check" size={14} className="mt-0.5 text-ibs-accent" /> Geschütztes Zwischendeck</li>
                <li className="flex gap-2"><Icon name="check" size={14} className="mt-0.5 text-ibs-accent" /> Tiefgaragen-Bodenplatte</li>
              </ul>
            </div>
            <div className="reveal rounded-2xl bg-ibs-ink p-fluid-4 text-white shadow-soft">
              <p className="font-display text-fluid-2xl font-bold">OS-11b</p>
              <p className="mt-2 text-fluid-sm text-ibs-fog">Für Top-Decks und freibewitterte Park-Ebenen — überall mit voller Bewitterung, Frost-Tau-Wechsel und stärkerem Reifenabrieb.</p>
              <ul className="mt-4 space-y-2 text-fluid-sm">
                <li className="flex gap-2"><Icon name="check" size={14} className="mt-0.5 text-ibs-accent" /> Freibewittertes Top-Deck</li>
                <li className="flex gap-2"><Icon name="check" size={14} className="mt-0.5 text-ibs-accent" /> UV- und Frost-Tau-Last</li>
                <li className="flex gap-2"><Icon name="check" size={14} className="mt-0.5 text-ibs-accent" /> Höhere Verkehrs­last</li>
              </ul>
            </div>
          </div>
          <div className="mt-fluid-5 flex justify-center">
            <Button href="/einsatzbereiche/parkhaus-tiefgarage/" variant="ghost">
              Zur Parkhaus-Übersicht <Icon name="arrow-right" size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <div className="container max-w-5xl">
          <SectionIntro
            eyebrow="Fragen & Antworten"
            title="Häufige Fragen zu OS-11a und OS-11b."
          />
          <FAQAccordion faqs={FAQ} defaultOpenIndex={0} />
        </div>
      </Section>

      <CTASection
        eyebrow="Welche Klasse braucht Ihr Parkhaus?"
        title="Wir prüfen die Bauteil-Lage und schlagen die passende Klasse vor."
        description="Kostenfreie Vor-Ort-Diagnose, schriftliches Konzept mit OS-Klasse und Schicht­aufbau."
      />

      {/* SEO JSON-LD: Breadcrumb + FAQ + Article + DefinedTerm */}
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Einsatzbereiche', href: '/einsatzbereiche/' },
        { name: 'Parkhaus & Tiefgarage', href: '/einsatzbereiche/parkhaus-tiefgarage/' },
        { name: 'OS-11a vs. OS-11b', href: META.href },
      ])} />
      <JsonLd data={faqJsonLd(FAQ)} />
      <JsonLd data={articleJsonLd({
        headline: META.title,
        description: META.metaDescription,
        href: META.href,
        image: '/images/scenes/os-11a-vs-os-11b-hero.jpg',
        datePublished: '2026-06-04',
      })} />
      <JsonLd data={definedTermJsonLd({
        name: 'OS-11a',
        description: 'Rissüberbrückende Beschichtung (dynamisch) für geschützte Zwischendecks in Parkbauten nach DAfStb-Richtlinie Instandhaltung 2020.',
        href: META.href + '#os-11a',
        inDefinedTermSet: 'DAfStb Oberflächenschutzsysteme',
        termCode: 'OS-11a',
      })} />
      <JsonLd data={definedTermJsonLd({
        name: 'OS-11b',
        description: 'Rissüberbrückende Beschichtung (dynamisch) für freibewitterte Top-Decks in Parkbauten — mit erhöhter Verschleißschicht nach DAfStb-Richtlinie Instandhaltung 2020.',
        href: META.href + '#os-11b',
        inDefinedTermSet: 'DAfStb Oberflächenschutzsysteme',
        termCode: 'OS-11b',
      })} />
    </>
  )
}
