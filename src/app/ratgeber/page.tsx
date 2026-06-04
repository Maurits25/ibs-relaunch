import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { CTASection } from '@/components/sections/CTASection'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { RATGEBER } from '@/data/ratgeber'

export const metadata: Metadata = buildMetadata({
  path: '/ratgeber/',
  title: 'Ratgeber — Bodenbeschichtung verstehen',
  description:
    'Verifizierter Ratgeber für Bodenbeschichtung: Kosten, Material-Vergleich, R-Klassen, WHG, Lebens­dauer, Beschichtung auf Fliesen, diffusionsoffene Systeme. Mit Quellen aus DIN, AwSV und Fach­praxis.',
})

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Ratgeber"
        title="Wissen, das Sie vor der Auftrags­vergabe brauchen."
        description="Acht Ratgeber-Artikel zu den wichtigsten Themen: Kosten, Material-Vergleich, Norm-Klassen, WHG, Lebens­dauer. Verifiziert, ehrlich und ohne Verkaufs-Geschwurbel."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Ratgeber', href: '/ratgeber/' }]}
        image="/images/projects/projekt-2019-2.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Acht Themen im Detail"
            title="Welche Frage haben Sie?"
            description="Die Artikel beantworten genau das, was Bauleiter, Hausverwaltungen und Privatkunden uns am häufigsten fragen."
          />
          <ul className="grid gap-fluid-3 md:grid-cols-2 lg:grid-cols-3">
            {RATGEBER.map((r) => (
              <li key={r.slug}>
                <Link
                  href={r.href}
                  className="reveal group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ibs-line shadow-soft transition-all duration-300 ease-snappy hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-fluid-xs font-semibold text-ibs-ink ring-1 ring-white/20 backdrop-blur">
                      Ratgeber
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-fluid-4">
                    <h3 className="font-display text-fluid-lg font-bold leading-tight text-ibs-ink">{r.title.split(' — ')[0]}</h3>
                    <p className="mt-2 line-clamp-3 text-fluid-sm text-ibs-steel">{r.metaDescription}</p>
                    <span className="mt-auto pt-4 inline-flex items-center gap-1 text-fluid-sm font-semibold text-ibs-ink group-hover:text-ibs-accent">
                      Lesen <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Ratgeber', href: '/ratgeber/' },
      ])} />
    </>
  )
}
