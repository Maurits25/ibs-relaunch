import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/sections/CTASection'
import { PartnerStrip } from '@/components/sections/PartnerStrip'
import { ReferenceCustomers } from '@/components/sections/ReferenceCustomers'
import { TrustBar } from '@/components/sections/TrustBar'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { Icon } from '@/components/ui/Icon'
import { SITE } from '@/data/site'

export const metadata: Metadata = buildMetadata({
  path: '/ueber-uns/',
  title: 'Über uns – Fachbetrieb für Industriebodensanierung aus Bocholt',
  description:
    `IBS Schmäing aus Bocholt — seit ${SITE.founded} als Fachbetrieb am Markt, mit über ${SITE.ownerExperienceYears} Jahren persönlicher Erfahrung des Inhabers ${SITE.owner}. Sachkundige Verarbeitung, eigenes Team, zertifizierte Materialien.`,
})

const VALUES = [
  { icon: 'sparkles', t: 'Individuelle Beratung', d: 'Wir besuchen Sie kostenfrei, analysieren den Schaden vor Ort und besprechen Maßnahmen sowie Zeitplan.' },
  { icon: 'star',     t: 'Preis-Leistung',        d: 'Wir versprechen Ihnen vollste Zufriedenheit und ein ausgezeichnetes Preis-Leistungs-Verhältnis.' },
  { icon: 'shield',   t: 'Termin­treue',         d: 'Als Spezialdienstleister passen wir uns Ihren Unternehmens­zyklen an — auch nachts und am Wochenende.' },
  { icon: 'wrench',   t: 'Staubarme Ausführung',  d: 'Wir sanieren Industrieböden im laufenden Betrieb – dank staub­reduzierender Maschinen.' },
] as const

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Wir machen Böden. Seit 2011 als IBS."
        description={`IBS Schmäing ist seit ${SITE.founded} Ihr Fachbetrieb für Industriebodensanierung — inhabergeführt aus Bocholt am Niederrhein. Mit über ${SITE.ownerExperienceYears} Jahren persönlicher Branchenerfahrung des Inhabers ${SITE.owner}, eigenem Team, eigenen Maschinen und sachkundiger Verarbeitung zertifizierter Material­systeme.`}
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Über uns', href: '/ueber-uns/' }]}
        image="/images/scenes/wide-industrial-corridor.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <div className="grid gap-fluid-5 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <p className="eyebrow">Unsere Geschichte</p>
              <h2 className="mt-3 heading-2 text-balance">Spezialisten – kein Generalist.</h2>
              <div className="prose mt-5 max-w-none text-fluid-base leading-relaxed text-ibs-steel space-y-4">
                <p>
                  Bodensanierung ist Fachhandwerk. Wer Industrieböden, Beschichtungen, Versiegelungen
                  und Designbeläge professionell ausführen will, braucht Erfahrung mit Material,
                  Untergrund und Belastung. Inhaber {SITE.owner} bringt über {SITE.ownerExperienceYears} Jahre persönliche
                  Erfahrung mit — seit {SITE.founded} unter dem Namen IBS Industriebodensanierung Schmäing,
                  aus Bocholt am Niederrhein.
                </p>
                <p>
                  Wir verarbeiten zertifizierte Markenmaterialien von <strong>Remmers</strong>, <strong>KLB Kötztal</strong>
                  {' '}und <strong>Korodur</strong> — als geschulter Verarbeiter mit Sachkundenachweis
                  und Schulungs­zertifikaten von Remmers. Versprechen, die wir nicht halten können, machen wir nicht.
                  Jedes Projekt wird planbar, sauber und im vereinbarten Termin abgeschlossen.
                </p>
                <p>
                  Unser Anspruch: absolute Zuverlässigkeit, akkurate Sauberkeit, uneingeschränkte
                  Qualität und zukunftsweisende Technik – ohne Schaufenster­versprechen. Dafür
                  vertrauen uns namhafte Industrie­betriebe wie <strong>Siemens</strong>, <strong>Honeywell</strong>,
                  <strong> KHS</strong>, <strong>RKW</strong>, <strong>TÜV Nord</strong> und <strong>Hörmann</strong>
                  {' '}— ebenso wie Hausverwaltungen und Privatkunden in NRW, im Münsterland und an der niederländischen Grenze.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-ibs-line shadow-card">
                <Image
                  src="/images/scenes/factory-window-light-on-floor.jpg"
                  alt="Industrieboden — beschichtete Halle"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 backdrop-blur">
                  <p className="font-display text-fluid-3xl font-extrabold text-ibs-ink">Seit {SITE.founded}</p>
                  <p className="text-fluid-sm text-ibs-steel">Inhabergeführter Fachbetrieb — mit über {SITE.ownerExperienceYears} Jahren persönlicher Erfahrung.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <TrustBar />

      <Section variant="paper">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Werte"
            title="Was uns auszeichnet."
          />
          <ul className="grid gap-fluid-3 sm:grid-cols-2">
            {VALUES.map((v) => (
              <li key={v.t} className="reveal flex gap-4 rounded-2xl bg-white p-fluid-4 ring-1 ring-ibs-line shadow-soft">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ibs-ink text-white">
                  <Icon name={v.icon as any} />
                </span>
                <div>
                  <p className="font-display text-fluid-lg font-bold text-ibs-ink">{v.t}</p>
                  <p className="mt-1 text-fluid-sm text-ibs-steel">{v.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <PartnerStrip />
      <ReferenceCustomers />
      <CTASection />

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Über uns', href: '/ueber-uns/' },
      ])} />
    </>
  )
}
