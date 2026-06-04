import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/sections/CTASection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { GLOBAL_FAQS } from '@/data/faqs'
import { SERVICES } from '@/data/services'

export const metadata: Metadata = buildMetadata({
  path: '/faq/',
  title: 'FAQ – Häufige Fragen zur Industriebodensanierung',
  description:
    'Antworten zu Ablauf, Material, Belastbarkeit, WHG, Rutschhemmung, Schnellsanierung im laufenden Betrieb und mehr. Direkt vom Fachbetrieb aus Bocholt.',
})

const ALL_FAQS = [
  ...GLOBAL_FAQS,
  ...SERVICES.flatMap((s) => s.faqs),
]

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Häufig gestellte Fragen."
        description="Die wichtigsten Fragen rund um Bodensanierung, Beschichtungen, Versiegelungen und Steinteppich – mit klaren, verständlichen Antworten."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'FAQ', href: '/faq/' }]}
        image="/images/projects/industrie-2.jpg"
      />

      <Section variant="light">
        <div className="container max-w-5xl">
          <SectionIntro
            eyebrow="Allgemein"
            title="Grundsätzliches zur Zusammenarbeit."
          />
          <FAQAccordion faqs={GLOBAL_FAQS} defaultOpenIndex={0} />
        </div>
      </Section>

      {SERVICES.map((s, i) => (
        <Section key={s.slug} variant={i % 2 === 0 ? 'paper' : 'light'}>
          <div className="container max-w-5xl">
            <SectionIntro eyebrow={s.shortTitle} title={`Fragen zu ${s.shortTitle}`} />
            <FAQAccordion faqs={s.faqs} />
          </div>
        </Section>
      ))}

      <CTASection
        eyebrow="Ihre Frage nicht dabei?"
        title="Rufen Sie uns kurz an — wir antworten direkt."
      />

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'FAQ', href: '/faq/' },
      ])} />
      <JsonLd data={faqJsonLd(ALL_FAQS)} />
    </>
  )
}
