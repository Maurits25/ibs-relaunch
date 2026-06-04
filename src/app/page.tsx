import Image from 'next/image'
import Link from 'next/link'
import { HomeHero } from '@/components/sections/HomeHero'
import { TrustBar } from '@/components/sections/TrustBar'
import { PartnerStrip } from '@/components/sections/PartnerStrip'
import { ReferenceCustomers } from '@/components/sections/ReferenceCustomers'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { IndustryCards } from '@/components/sections/IndustryCards'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo/jsonLd'
import { GLOBAL_FAQS } from '@/data/faqs'
import { SITE } from '@/data/site'
import { buildMetadata } from '@/lib/seo/meta'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  path: '/',
  // Default Title/Description (Site-weite Defaults nutzen)
})

const HOME_PROCESS = [
  { title: 'Beratung', text: 'Kostenloser Vor-Ort-Termin. Wir hören zu, schauen, messen und klären Auflagen.' },
  { title: 'Konzept', text: 'Konkretes System mit Schichtaufbau, Materialien, Optik und Termin – schriftlich.' },
  { title: 'Vorbereitung', text: 'Untergrund staubarm vorbereiten – Schleifen, Fräsen, Strahlen je nach Bedarf.' },
  { title: 'Ausführung', text: 'Schichtweise sauber gearbeitet, in Zonen, auch nachts oder am Wochenende.' },
  { title: 'Übergabe', text: 'Begehung, Pflege- und Reinigungs­hinweise – Sie sind wieder voll im Betrieb.' },
]

const PROBLEMS = [
  { title: 'Staubender Beton', icon: 'droplet', text: 'Offene Zementflächen geben Feinstaub ab – schlecht für Anlagen, Produkte und Mitarbeiter.' },
  { title: 'Risse & Ausbrüche', icon: 'hammer', text: 'Jeder Riss kostet Reifen, Achsen, Bauteile – und steigert das Unfallrisiko.' },
  { title: 'Rutschgefahr', icon: 'shield', text: 'Glatte Beton- oder Fliesenflächen werden bei Nässe zum Haftungsrisiko.' },
  { title: 'Öl und Chemie', icon: 'paint', text: 'Ungeschützte Böden saugen Schmierstoffe und Säuren auf – die Substanz leidet.' },
  { title: 'WHG-Auflagen', icon: 'check', text: 'Auffangräume verlangen geprüfte Systeme. Standardböden reichen nicht aus.' },
  { title: 'Hoher Stillstand', icon: 'clock', text: 'Klassische Sanierung legt Bereiche tagelang lahm. Geht es nicht schneller? Doch.' },
] as const

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <ReferenceCustomers compact />

      <TrustBar />

      {/* Leistungsübersicht */}
      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Leistungen"
            title="Eine Lösung für jeden Boden."
            description="Wir planen und realisieren Bodensysteme nach Maß – industriell belastbar, optisch hochwertig, dauerhaft. Vom WHG-Auffangraum bis zum Designboden in Betonoptik."
          />
          <ServiceGrid />
          <div className="mt-fluid-5 flex justify-center">
            <Button href="/leistungen/" variant="ghost">
              Alle Leistungen ansehen <Icon name="arrow-right" size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* Probleme */}
      <Section variant="paper">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Typische Bodenprobleme"
            title="Diese Schäden bringen Kosten, Stillstand und Risiken."
            description="Wir sehen sie jeden Tag — und beheben sie planbar. Mit dem richtigen System für Ihre Belastung."
          />
          <div className="grid gap-fluid-3 md:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="reveal rounded-2xl bg-white p-fluid-4 ring-1 ring-ibs-line shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ibs-ink text-white">
                  <Icon name={p.icon as any} size={20} />
                </div>
                <h3 className="mt-4 font-display text-fluid-lg font-bold text-ibs-ink">{p.title}</h3>
                <p className="mt-2 text-fluid-sm text-ibs-steel">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Hero-Bild Block — Sanierungslösungen mit System */}
      <Section variant="ink" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/projects/industrie-2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ibs-ink via-ibs-ink/85 to-ibs-ink/40" />
        </div>
        <div className="container max-w-screen-2xl relative">
          <div className="grid items-center gap-fluid-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-ibs-signal">Sanierungslösungen mit System</p>
              <h2 className="mt-3 heading-2 text-white text-balance">
                Wir reparieren nicht nur. Wir bauen Ihre Fläche neu auf — kalkulierbar und sauber.
              </h2>
              <p className="mt-4 lede text-ibs-fog max-w-2xl">
                Jede Fläche bekommt das System, das sie braucht: vom Reaktionsharz­mörtel für schnelle
                Reparaturen über fugenlose Industrie­beschichtungen bis zur abgestimmten WHG-Lösung.
                Wir arbeiten mit zertifizierten Materialien von Remmers, KLB, SIKA und Triflex —
                staubarm, planbar, im laufenden Betrieb.
              </p>
              <div className="mt-fluid-5 flex flex-wrap gap-3">
                <Button href="/anfrage/" variant="primary" size="lg">
                  Projekt anfragen <Icon name="arrow-right" size={16} />
                </Button>
                <Button href="/referenzen/" variant="outline-light" size="lg">
                  Referenzen ansehen
                </Button>
              </div>
            </div>
            <ul className="lg:col-span-5 grid gap-3">
              {[
                ['97 N/mm²', 'Druckfestigkeit Epoxidharz'],
                ['45 Min.', 'Reaktionsharz – voll belastbar'],
                ['R9–R13', 'Rutschhemmung wählbar'],
                ['Seit 2011', 'als Fachbetrieb am Niederrhein'],
              ].map(([n, l]) => (
                <li key={n} className="reveal flex items-center justify-between rounded-2xl bg-white/5 p-fluid-3 ring-1 ring-white/10">
                  <span className="font-display text-fluid-3xl font-extrabold text-white">{n}</span>
                  <span className="text-fluid-sm text-ibs-fog">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <PartnerStrip />

      {/* Referenzen */}
      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Referenzen"
            title="Projekte, die für sich sprechen."
            description="Eine Auswahl aus realisierten Projekten in Industrie, Werkstatt, Lager, Showroom und Privatumfeld."
          />
          <ProjectGallery limit={6} showFilter={false} />
          <div className="mt-fluid-5 flex justify-center">
            <Button href="/referenzen/" variant="ghost">
              Alle Referenzen <Icon name="arrow-right" size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* Branchen */}
      <Section variant="paper">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Einsatzbereiche"
            title="Für Industrie, Gewerbe und Privat."
            description="Wir kennen die Anforderungen jedes Einsatzbereichs — vom Stapler­verkehr in der Halle bis zur Optik im Showroom."
          />
          <IndustryCards />
        </div>
      </Section>

      {/* Ablauf */}
      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Ablauf"
            title="So arbeiten wir – planbar von Anfang bis Ende."
            description="Vom kostenlosen Vor-Ort-Termin über das schriftliche Konzept bis zur Übergabe — Sie wissen jederzeit, wo Ihr Projekt steht."
          />
          <ProcessSteps steps={HOME_PROCESS} />
        </div>
      </Section>

      {/* Warum IBS? */}
      <Section variant="ink">
        <div className="container max-w-screen-2xl">
          <div className="grid gap-fluid-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-ibs-signal">Warum IBS Schmäing</p>
              <h2 className="mt-3 heading-2 text-white text-balance">Fachbetrieb. Kein Generalist.</h2>
              <p className="mt-4 lede text-ibs-fog">
                Bodensanierung ist Spezialisten­arbeit. Seit 2011 als IBS am Markt — mit über 20 Jahren persönlicher Erfahrung von Inhaber {SITE.owner}. Eigenes Team, eigene Maschinen, eigene Materialien.
              </p>
            </div>
            <ul className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
              {[
                { t: 'Individuelle Beratung', d: 'Wir kommen kostenfrei zu Ihnen, analysieren den Schaden vor Ort und schlagen ein konkretes System vor.' },
                { t: 'Preis-Leistung', d: 'Transparente Kalkulation, faire Preise und nachvollziehbare Schicht­aufbauten.' },
                { t: 'Staubarm im Betrieb', d: 'Wir setzen staub­reduzierende Maschinen ein und arbeiten zonenweise – auch nachts und am Wochenende.' },
                { t: 'Termin­treue', d: 'Wir passen uns Ihren Zyklen an. Aussagen halten wir ein – schriftlich.' },
              ].map((b) => (
                <li key={b.t} className="reveal rounded-2xl bg-white/5 p-fluid-3 ring-1 ring-white/10">
                  <p className="font-semibold text-white">{b.t}</p>
                  <p className="mt-1 text-fluid-sm text-ibs-fog">{b.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Regionale Einsatzbereiche */}
      <Section variant="paper">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Region"
            title="Tätig am Niederrhein, im Münsterland, Ruhrgebiet, Raum Düsseldorf & Osnabrück."
            description="Aus Bocholt heraus betreuen wir Projekte im Kreis Borken, Kreis Wesel, im gesamten Münsterland, Ruhrgebiet, im Raum Düsseldorf, im Raum Osnabrück und nach Absprache in der niederländischen Grenzregion."
          />
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              'Bocholt', 'Rhede', 'Borken', 'Coesfeld', 'Stadtlohn',
              'Vreden', 'Wesel', 'Hamminkeln', 'Kreis Kleve', 'Münster',
              'Osnabrück', 'Lingen', 'Rheine', 'Nordhorn',
              'Dorsten', 'Gelsenkirchen', 'Oberhausen', 'Essen', 'Duisburg', 'Bottrop',
              'Düsseldorf', 'Krefeld', 'Mönchengladbach', 'Neuss',
              'Niederlande Grenzregion',
            ].map((c) => (
              <li
                key={c}
                className="rounded-xl bg-white p-3 text-fluid-sm font-medium text-ibs-ink ring-1 ring-ibs-line"
              >
                <Icon name="map-pin" size={14} className="-mt-0.5 mr-1 inline text-ibs-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <div className="container max-w-5xl">
          <SectionIntro
            eyebrow="Fragen & Antworten"
            title="Wir geben Ihnen direkte Antworten."
            description="Hier sind die Fragen, die wir am häufigsten hören. Sie haben Ihre eigene Frage? Ein Anruf reicht."
          />
          <FAQAccordion faqs={GLOBAL_FAQS} defaultOpenIndex={0} />
          <div className="mt-fluid-4 flex justify-center">
            <Button href="/faq/" variant="ghost">
              Zur kompletten FAQ <Icon name="arrow-right" size={16} />
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />

      {/* SEO JSON-LD */}
      <JsonLd data={breadcrumbJsonLd([{ name: 'Start', href: '/' }])} />
      <JsonLd data={faqJsonLd(GLOBAL_FAQS)} />
    </>
  )
}
