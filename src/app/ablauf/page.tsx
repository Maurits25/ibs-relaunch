import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { CTASection } from '@/components/sections/CTASection'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { Icon } from '@/components/ui/Icon'

export const metadata: Metadata = buildMetadata({
  path: '/ablauf/',
  title: 'Ablauf – So sanieren wir Ihren Boden',
  description:
    'Vom kostenlosen Vor-Ort-Termin bis zur Übergabe: So läuft ein Bodensanierungs-Projekt mit IBS Schmäing ab. Planbar, sauber, dokumentiert.',
})

const STEPS = [
  { title: 'Anfrage', text: 'Per Telefon, E-Mail oder Anfrage­formular. Erste Beschreibung des Projekts – Bilder helfen sehr.' },
  { title: 'Vor-Ort-Termin', text: 'Wir kommen kostenfrei zu Ihnen, bewerten Untergrund und Belastung, klären Auflagen und Termine.' },
  { title: 'Konzept', text: 'Schriftliches Konzept mit Schichtaufbau, Materialien, Rutschhemmung, Optik, Termin und Festpreis.' },
  { title: 'Vorbereitung', text: 'Schleifen, Fräsen oder Strahlen — staubarm. Risse und Löcher werden bauteilgerecht repariert.' },
  { title: 'Ausführung', text: 'Beschichtung in Schichten, sauber gearbeitet, zonenweise, auch nachts oder am Wochenende.' },
  { title: 'Übergabe', text: 'Gemeinsame Begehung, schriftliche Pflege- und Reinigungs­hinweise — Sie sind voll im Betrieb.' },
]

const PROMISES = [
  { icon: 'sparkles', t: 'Klare Kommunikation', d: 'Sie haben einen festen Ansprech­partner und wissen jederzeit, wo Ihr Projekt steht.' },
  { icon: 'shield',   t: 'Schriftlicher Festpreis', d: 'Keine Überraschungen — Material, Aufwand, Optik sind vorab definiert und kalkuliert.' },
  { icon: 'wrench',   t: 'Staubarme Ausführung',   d: 'Mit staubreduzierenden Maschinen und sauberer Bauleitung – auch im laufenden Betrieb.' },
  { icon: 'clock',    t: 'Verbindliche Termine',  d: 'Wir richten uns nach Ihren Zyklen und halten zugesagte Termine ein – auch nachts und am Wochenende.' },
] as const

export default function AblaufPage() {
  return (
    <>
      <PageHero
        eyebrow="Ablauf"
        title="So läuft ein Bodensanierungs-Projekt bei IBS ab."
        description="Sechs klare Schritte vom Erstkontakt bis zur Übergabe — planbar, sauber, schriftlich dokumentiert."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Ablauf', href: '/ablauf/' }]}
        image="/images/projects/projekt-2019-4.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Prozess"
            title="Sechs Schritte. Ein Ergebnis."
          />
          <div className="grid gap-fluid-3 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title} className="reveal rounded-2xl bg-ibs-paper p-fluid-4 ring-1 ring-ibs-line">
                <span className="font-display text-fluid-4xl font-extrabold leading-none text-ibs-accent/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 font-display text-fluid-lg font-bold text-ibs-ink">{s.title}</p>
                <p className="mt-2 text-fluid-sm text-ibs-steel">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="ink">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Unsere Versprechen"
            title="Vier Garantien, die das Projekt einfach machen."
            invert
          />
          <ul className="grid gap-fluid-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((p) => (
              <li key={p.t} className="reveal rounded-2xl bg-white/5 p-fluid-4 ring-1 ring-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ibs-accent text-white">
                  <Icon name={p.icon as any} />
                </span>
                <p className="mt-4 font-display text-fluid-lg font-bold text-white">{p.t}</p>
                <p className="mt-2 text-fluid-sm text-ibs-fog">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection />

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Ablauf', href: '/ablauf/' },
      ])} />
    </>
  )
}
