import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/sections/CTASection'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { Icon, type IconName } from '@/components/ui/Icon'
import { INDUSTRIES } from '@/data/industries'
import { SERVICE_BY_SLUG } from '@/data/services'

const ICONS: Record<string, IconName> = {
  warehouse: 'warehouse', wrench: 'wrench', car: 'car', sun: 'sun', shield: 'shield', sparkles: 'sparkles',
}

export const metadata: Metadata = buildMetadata({
  path: '/einsatzbereiche/',
  title: 'Einsatzbereiche – Industrie, Werkstatt, Garage, Balkon, WHG, Showroom',
  description:
    'Bodensysteme nach Einsatzbereich: Industriehallen, Werkstätten, Garagen, Keller, Balkone, WHG-Auffangräume, Showrooms und Praxen. Vom Fachbetrieb aus Bocholt.',
})

export default function EinsatzbereichePage() {
  return (
    <>
      <PageHero
        eyebrow="Einsatzbereiche"
        title="Für jeden Boden die richtige Lösung."
        description="Welcher Aufbau passt zu welcher Belastung, Hygiene­anforderung oder Optik? Hier finden Sie die typischen Einsatz­bereiche – inkl. unserer Empfehlung."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Einsatzbereiche', href: '/einsatzbereiche/' }]}
        image="/images/projects/projekt-2019-2.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Im Überblick"
            title="Diese Bereiche bedienen wir am häufigsten."
          />
          <div className="grid gap-fluid-3 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="reveal group rounded-2xl bg-ibs-paper p-fluid-4 ring-1 ring-ibs-line transition-all hover:bg-white hover:shadow-soft"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ibs-ink text-white">
                  <Icon name={ICONS[ind.icon] ?? 'layers'} size={20} />
                </span>
                <p className="mt-4 font-display text-fluid-lg font-bold text-ibs-ink">{ind.title}</p>
                <p className="mt-1 text-fluid-sm text-ibs-steel">{ind.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {INDUSTRIES.map((ind, i) => (
        <Section
          key={ind.id}
          variant={i % 2 === 0 ? 'paper' : 'light'}
          className="scroll-mt-24"
        >
          <a id={ind.id} className="sr-only">{ind.title}</a>
          <div className="container max-w-screen-2xl">
            <div className="grid gap-fluid-5 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="eyebrow">Einsatzbereich</p>
                <h2 className="mt-3 heading-2 text-balance">{ind.title}</h2>
                <p className="mt-3 lede">{ind.description}</p>

                <h3 className="mt-fluid-4 text-fluid-lg font-semibold text-ibs-ink">Typische Anforderungen</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {ind.needs.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-fluid-sm text-ibs-steel">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ibs-accent/15 text-ibs-accent">
                        <Icon name="check" size={13} />
                      </span>{n}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:col-span-5">
                <p className="eyebrow">Unsere Empfehlung</p>
                <h3 className="mt-3 heading-3">Passende Bodensysteme</h3>
                <ul className="mt-4 grid gap-2">
                  {ind.recommended.map((slug) => {
                    const s = SERVICE_BY_SLUG[slug]
                    return (
                      <li key={slug}>
                        <Link
                          href={s.href}
                          className="group flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-ibs-line transition hover:bg-ibs-mist"
                        >
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ibs-ink text-white"><Icon name="layers" size={16} /></span>
                          <span className="flex-1 min-w-0">
                            <span className="block font-semibold text-ibs-ink">{s.shortTitle}</span>
                            <span className="block text-fluid-xs text-ibs-steel truncate">{s.metaDescription}</span>
                          </span>
                          <Icon name="arrow-up-right" size={16} className="text-ibs-concrete group-hover:text-ibs-accent" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </aside>
            </div>
          </div>
        </Section>
      ))}

      <CTASection />

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Einsatzbereiche', href: '/einsatzbereiche/' },
      ])} />
    </>
  )
}
