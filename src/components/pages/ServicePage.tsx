import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { PartnerStrip } from '@/components/sections/PartnerStrip'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo/jsonLd'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'
import { SERVICES, type Service } from '@/data/services'

export function ServicePage({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.headline}
        description={service.hero.sub}
        bullets={service.hero.bullets}
        image={service.image}
        imageAlt={service.title}
        crumbs={[
          { name: 'Start', href: '/' },
          { name: 'Leistungen', href: '/leistungen/' },
          { name: service.shortTitle, href: service.href },
        ]}
      />

      {/* Intro + Eignung */}
      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <div className="grid gap-fluid-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">Im Überblick</p>
              <h2 className="mt-3 heading-2 text-balance">{service.title}</h2>
              <p className="mt-4 lede">{service.intro}</p>
            </div>
            <aside className="lg:col-span-5">
              <div className="rounded-2xl bg-ibs-paper p-fluid-4 ring-1 ring-ibs-line">
                <p className="eyebrow">Für welche Flächen geeignet</p>
                <ul className="mt-3 grid gap-2 text-fluid-sm">
                  {service.suitableFor.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-ibs-ink">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ibs-accent/15 text-ibs-accent">
                        <Icon name="check" size={13} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      {/* Problem -> Lösung */}
      <Section variant="paper">
        <div className="container max-w-screen-2xl">
          <ProblemSolution problems={service.problems} solution={service.solution} />
        </div>
      </Section>

      {/* Ablauf */}
      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Ablauf"
            title="So gehen wir vor."
            description="Klar strukturiert vom ersten Vor-Ort-Termin bis zur Übergabe — sauber dokumentiert, mit verlässlichen Terminen und transparenter Preisaufstellung."
          />
          <ProcessSteps steps={service.process} />
        </div>
      </Section>

      {/* Vorteile + Materialien */}
      <Section variant="ink">
        <div className="container max-w-screen-2xl">
          <div className="grid gap-fluid-5 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow text-ibs-signal">Ihre Vorteile</p>
              <h2 className="mt-3 heading-2 text-white text-balance">Was Sie bei dieser Leistung gewinnen.</h2>
              <ul className="mt-fluid-4 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="reveal flex items-start gap-2 text-ibs-fog text-fluid-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ibs-accent/20 text-ibs-accent">
                      <Icon name="check" size={13} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow text-ibs-signal">Materialien & Systeme</p>
              <h2 className="mt-3 heading-2 text-white text-balance">Mit zertifizierten Markenmaterialien.</h2>
              <div className="mt-fluid-4 grid gap-3">
                {service.materials.map((m) => (
                  <div key={m.title} className="rounded-2xl bg-white/5 p-fluid-3 ring-1 ring-white/10">
                    <p className="font-semibold text-white">{m.title}</p>
                    <p className="mt-1 text-fluid-sm text-ibs-fog">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Branchen / Einsatzorte */}
      <Section variant="paper">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Branchen & Einsatzorte"
            title="Wo diese Leistung am häufigsten zum Einsatz kommt."
          />
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {service.industries.map((b) => (
              <li
                key={b}
                className="reveal flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-ibs-line"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ibs-ink text-white">
                  <Icon name="warehouse" size={16} />
                </span>
                <span className="font-medium text-ibs-ink">{b}</span>
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
            title="Häufig gestellte Fragen."
            description="Sie haben eine andere Frage? Rufen Sie uns kurz an – wir beraten Sie gerne."
          />
          <FAQAccordion faqs={service.faqs} defaultOpenIndex={0} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        eyebrow="Bereit für Ihr Projekt?"
        title="Vor-Ort-Termin & Angebot – kostenfrei und unverbindlich."
        description="Beschreiben Sie uns Ihr Projekt in wenigen Sätzen oder laden Sie Fotos und Pläne hoch. Wir melden uns kurzfristig zur Abstimmung."
      />

      {/* Weitere Leistungen */}
      <Section variant="paper">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Weitere Leistungen"
            title="Das könnte ebenfalls relevant sein."
          />
          <div className="grid gap-fluid-3 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={o.href}
                className="reveal group block overflow-hidden rounded-2xl bg-white ring-1 ring-ibs-line shadow-soft hover:shadow-card transition-all"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={o.image} alt={o.shortTitle} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, 100vw" />
                </div>
                <div className="p-fluid-3">
                  <p className="font-display text-fluid-lg font-bold text-ibs-ink">{o.shortTitle}</p>
                  <p className="mt-1 text-fluid-sm text-ibs-steel">{o.metaDescription}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-fluid-sm font-semibold text-ibs-ink group-hover:text-ibs-accent">
                    Mehr erfahren <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <PartnerStrip />

      {/* JSON-LD */}
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Leistungen', href: '/leistungen/' },
        { name: service.shortTitle, href: service.href },
      ])} />
      <JsonLd data={serviceJsonLd({
        name: service.title,
        description: service.metaDescription,
        href: service.href,
        image: service.image,
      })} />
      <JsonLd data={faqJsonLd(service.faqs)} />
    </>
  )
}
