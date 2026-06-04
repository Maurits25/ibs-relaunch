import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { Icon } from '@/components/ui/Icon'
import { PROPERTY_PAGES } from '@/data/properties'

export const metadata: Metadata = buildMetadata({
  path: '/eigenschaften/',
  title: 'Eigenschaften & Norm-Klassen — Rutschhemmung, ESD, Diffusionsoffen',
  description:
    'Transversale Eigenschaften für Bodenbeschichtungen: Rutschhemmung R9 bis R13 nach DIN 51130, ESD nach DIN EN 61340, diffusionsoffene Systeme. Verifizierte Norm-Erklärung — IBS Schmäing, Bocholt.',
})

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Eigenschaften & Norm-Klassen"
        title="Welche Eigenschaft braucht Ihr Boden?"
        description="Drei Eigenschaften entscheiden bei vielen Projekten über System und Aufbau: Rutschhemmung, ESD-Ableitfähigkeit, Diffusionsoffenheit. Verifizierte Norm-Grundlage, sachkundige Verarbeitung."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Eigenschaften', href: '/eigenschaften/' }]}
        image="/images/projects/industrie-3.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Drei Eigenschafts-Klassen im Detail"
            title="Welche Anforderung gilt für Ihre Fläche?"
            description="Pro Eigenschaft: Norm-Grundlage, Klassen, typische Anwendung, technische Umsetzung."
          />
          <ul className="grid gap-fluid-3 md:grid-cols-3">
            {PROPERTY_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.href}
                  className="reveal group block overflow-hidden rounded-2xl bg-white ring-1 ring-ibs-line shadow-soft transition-all duration-300 ease-snappy hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.shortTitle}
                      fill
                      sizes="(min-width:1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ibs-ink/70 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-fluid-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                      {p.hero.eyebrow}
                    </span>
                  </div>
                  <div className="p-fluid-4">
                    <h3 className="font-display text-fluid-xl font-bold text-ibs-ink">{p.shortTitle}</h3>
                    <p className="mt-2 text-fluid-sm text-ibs-steel">{p.metaDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-fluid-sm font-semibold text-ibs-ink group-hover:text-ibs-accent">
                      Klassen ansehen <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
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
        { name: 'Eigenschaften', href: '/eigenschaften/' },
      ])} />
    </>
  )
}
