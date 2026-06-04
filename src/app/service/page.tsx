import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/sections/CTASection'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { Icon, type IconName } from '@/components/ui/Icon'

export const metadata: Metadata = buildMetadata({
  path: '/service/',
  title: 'Service – Beratung, Konzept, Ausführung, Pflegehinweise',
  description:
    'Service-Versprechen von IBS Schmäing: kostenloser Vor-Ort-Termin, durchgeplante Bodensanierung, staubarme Ausführung, klare Pflegehinweise. Aus Bocholt am Niederrhein.',
})

const ITEMS: { icon: IconName; t: string; d: string }[] = [
  { icon: 'map-pin', t: 'Kostenloser Vor-Ort-Termin', d: 'Wir kommen zu Ihnen, analysieren den Bestand und sprechen über Belastung, Auflagen und Termine.' },
  { icon: 'layers',  t: 'Konzept mit Schichtaufbau', d: 'Schriftliche Empfehlung mit Materialien, Aufbau, Optik, Rutschhemmung und Preis.' },
  { icon: 'wrench',  t: 'Staubarme Ausführung',      d: 'Saubere Vor- und Nacharbeiten – auch im laufenden Betrieb. Mit staub­reduzierenden Maschinen.' },
  { icon: 'clock',   t: 'Termin­treue',              d: 'Wir richten uns nach Ihren Zyklen — auch nachts und am Wochenende, wenn nötig.' },
  { icon: 'shield',  t: 'Geprüfte Materialien',      d: 'Markensysteme von Remmers, KLB, SIKA, Triflex – mit Allgemeiner Bauaufsichtlicher Zulassung wenn relevant.' },
  { icon: 'check',   t: 'Übergabe & Pflege',         d: 'Begehung mit Ihnen, Übergabe, schriftliche Pflege- und Reinigungs­hinweise.' },
]

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Unser Service-Versprechen — von der Beratung bis zur Übergabe."
        description="Bodensanierung gelingt, wenn die Bedingungen vorher geklärt sind: Beratung, Konzept, Termin, Ausführung, Pflege. Diesen Pfad gehen wir mit Ihnen."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Service', href: '/service/' }]}
        image="/images/projects/projekt-2019-3.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Was Sie bekommen"
            title="Sechs konkrete Service-Bausteine."
            description="Beratung bringt am meisten, wenn Problemstellung und Ziele klar sind. Genau dafür sind wir da."
          />
          <ul className="grid gap-fluid-3 md:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map((it) => (
              <li
                key={it.t}
                className="reveal rounded-2xl bg-ibs-paper p-fluid-4 ring-1 ring-ibs-line transition-all hover:bg-white hover:shadow-soft"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ibs-ink text-white">
                  <Icon name={it.icon} size={20} />
                </span>
                <p className="mt-4 font-display text-fluid-lg font-bold text-ibs-ink">{it.t}</p>
                <p className="mt-2 text-fluid-sm text-ibs-steel">{it.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection />

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Service', href: '/service/' },
      ])} />
    </>
  )
}
