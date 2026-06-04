import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/sections/CTASection'
import { PartnerStrip } from '@/components/sections/PartnerStrip'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'
import { SERVICES } from '@/data/services'

export const metadata: Metadata = buildMetadata({
  path: '/leistungen/',
  title: 'Leistungen – Bodenbeschichtung, Sanierung, Steinteppich, Designböden',
  description:
    'Alle Leistungen von IBS Schmäing: Epoxidharzbeschichtungen, WHG-Versiegelung, Sanierungen, EP-Estrich, Steinteppich, Designböden, Balkonsanierung — Bocholt · Niederrhein · NRW.',
})

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Alle Leistungen"
        title="Bodenlösungen mit System – vom Industrieboden bis zum Designbelag."
        description="Sechs Kern­leistungen, ein Anspruch: hochwertige, langlebige Böden, sauber geplant und ausgeführt. Wir konfigurieren das System exakt nach Belastung, Auflagen und Optik."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Leistungen', href: '/leistungen/' }]}
        image="/images/projects/industrie-3.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Übersicht"
            title="Unsere sechs Kernleistungen."
            description="Jede Leistung ist eigenständig und kombinierbar — wir empfehlen Ihnen ein System, das exakt zu Ihrer Fläche passt."
          />
          <ul className="grid gap-fluid-3 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="reveal group block overflow-hidden rounded-2xl bg-white ring-1 ring-ibs-line shadow-soft transition-all duration-300 ease-snappy hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.shortTitle}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ibs-ink/70 via-transparent" />
                    <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-fluid-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                      {s.hero.eyebrow}
                    </span>
                  </div>
                  <div className="p-fluid-4">
                    <h3 className="font-display text-fluid-xl font-bold text-ibs-ink leading-tight">{s.shortTitle}</h3>
                    <p className="mt-2 text-fluid-sm text-ibs-steel">{s.metaDescription}</p>
                    <ul className="mt-3 grid gap-1.5 text-fluid-xs text-ibs-steel">
                      {s.hero.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ibs-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center gap-1 text-fluid-sm font-semibold text-ibs-ink group-hover:text-ibs-accent">
                      Mehr erfahren <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-fluid-6 grid gap-fluid-3 rounded-3xl bg-ibs-ink p-fluid-5 text-white lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow text-ibs-signal">Beratung</p>
              <h2 className="mt-3 heading-3 text-white text-balance">
                Sie sind unsicher, welches System passt? Wir kommen kostenfrei zu Ihnen.
              </h2>
              <p className="mt-3 text-ibs-fog lede max-w-2xl">
                Bei einer kostenlosen Vor-Ort-Beratung bewerten wir Untergrund, Belastung, Auflagen und Termine — und schlagen das passende System schriftlich vor.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Button href="/anfrage/" variant="primary" size="lg" className="w-full">
                Projekt anfragen <Icon name="arrow-right" size={16} />
              </Button>
              <Button href="/ablauf/" variant="outline-light" size="lg" className="w-full">
                Ablauf ansehen
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <PartnerStrip />
      <CTASection />

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Leistungen', href: '/leistungen/' },
      ])} />
    </>
  )
}
