import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/sections/CTASection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  articleJsonLd,
} from '@/lib/seo/jsonLd'
import type { Ratgeber } from '@/data/ratgeber'

export function RatgeberPage({ ratgeber }: { ratgeber: Ratgeber }) {
  return (
    <>
      <PageHero
        eyebrow="Ratgeber"
        title={ratgeber.title}
        description={ratgeber.leadParagraph}
        crumbs={[
          { name: 'Start', href: '/' },
          { name: 'Ratgeber', href: '/ratgeber/' },
          { name: ratgeber.title.split(' — ')[0], href: ratgeber.href },
        ]}
        image={ratgeber.image}
      />

      {/* Inhaltsverzeichnis */}
      <Section variant="paper">
        <div className="container max-w-4xl">
          <div className="rounded-2xl bg-white p-fluid-4 ring-1 ring-ibs-line shadow-soft">
            <p className="eyebrow">Inhalt</p>
            <ol className="mt-3 grid gap-2">
              {ratgeber.sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-3 text-fluid-sm text-ibs-ink hover:text-ibs-accent"
                  >
                    <span className="font-mono text-fluid-xs text-ibs-concrete">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-medium group-hover:underline underline-offset-4">{s.heading}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="group flex items-baseline gap-3 text-fluid-sm text-ibs-ink hover:text-ibs-accent">
                  <span className="font-mono text-fluid-xs text-ibs-concrete">{String(ratgeber.sections.length + 1).padStart(2, '0')}</span>
                  <span className="font-medium group-hover:underline underline-offset-4">Fragen & Antworten</span>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Sections */}
      <Section variant="light">
        <div className="container max-w-4xl">
          <article className="prose prose-neutral max-w-none">
            {ratgeber.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 mb-fluid-5">
                <h2 className="heading-3 text-balance">{s.heading}</h2>
                <p className="mt-3 text-fluid-base leading-relaxed text-ibs-steel">{s.body}</p>
              </section>
            ))}
          </article>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="paper" className="scroll-mt-24" id="faq-section">
        <div className="container max-w-4xl">
          <a id="faq" className="sr-only">FAQ</a>
          <p className="eyebrow">Fragen & Antworten</p>
          <h2 className="mt-3 heading-2 text-balance">Häufige Fragen.</h2>
          <div className="mt-fluid-4">
            <FAQAccordion faqs={ratgeber.faqs} defaultOpenIndex={0} />
          </div>
        </div>
      </Section>

      {/* Verwandte Themen */}
      {ratgeber.relatedHrefs.length > 0 && (
        <Section variant="light">
          <div className="container max-w-4xl">
            <p className="eyebrow">Verwandte Themen</p>
            <h2 className="mt-3 heading-3">Lesen Sie weiter.</h2>
            <ul className="mt-fluid-4 grid gap-2">
              {ratgeber.relatedHrefs.map((href) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center justify-between rounded-xl bg-ibs-paper p-fluid-3 ring-1 ring-ibs-line transition hover:bg-white hover:shadow-soft"
                  >
                    <span className="font-medium text-ibs-ink">{href}</span>
                    <Icon name="arrow-up-right" size={16} className="text-ibs-concrete" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <CTASection />

      {/* JSON-LD */}
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Ratgeber', href: '/ratgeber/' },
        { name: ratgeber.title.split(' — ')[0], href: ratgeber.href },
      ])} />
      <JsonLd data={faqJsonLd(ratgeber.faqs)} />
      <JsonLd data={articleJsonLd({
        headline: ratgeber.title,
        description: ratgeber.metaDescription,
        href: ratgeber.href,
        image: ratgeber.image,
        datePublished: ratgeber.publishedAt,
      })} />
    </>
  )
}
