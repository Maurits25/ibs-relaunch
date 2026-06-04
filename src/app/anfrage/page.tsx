import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { InquiryForm } from '@/components/forms/InquiryForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { Icon } from '@/components/ui/Icon'
import { SITE } from '@/data/site'

export const metadata: Metadata = buildMetadata({
  path: '/anfrage/',
  title: 'Projekt anfragen – mit Foto-Upload',
  description:
    'Beschreiben Sie Ihr Projekt in wenigen Sätzen oder laden Sie Fotos und Pläne hoch. Wir melden uns kurzfristig zur Abstimmung – kostenfrei und unverbindlich.',
})

export default function AnfragePage() {
  return (
    <>
      <PageHero
        eyebrow="Projekt anfragen"
        title="Sagen Sie uns, worum es geht. Wir melden uns – kostenfrei."
        description="Drei Schritte: Projekt beschreiben, Fotos hochladen, Kontaktdaten. Wir prüfen Ihre Anfrage und melden uns kurzfristig zur Abstimmung."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Anfrage', href: '/anfrage/' }]}
        image="/images/projects/industrie-1.jpg"
      />

      <Section variant="paper">
        <div className="container max-w-screen-2xl">
          <div className="grid gap-fluid-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
            <aside className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-fluid-4 ring-1 ring-ibs-line shadow-soft">
                <p className="eyebrow">So geht es weiter</p>
                <ol className="mt-4 grid gap-4">
                  {[
                    { n: '01', t: 'Anfrage prüfen', d: 'Wir sichten Ihre Beschreibung und Bilder.' },
                    { n: '02', t: 'Kurz zurückmelden', d: 'Telefonisch oder per E-Mail – meistens innerhalb 24 h.' },
                    { n: '03', t: 'Vor-Ort-Termin', d: 'Kostenfreie Besichtigung und Bestandsaufnahme.' },
                    { n: '04', t: 'Konzept & Angebot', d: 'Schriftliches Konzept mit Material, Aufbau, Preis und Termin.' },
                  ].map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span className="font-display text-fluid-2xl font-extrabold text-ibs-accent/70">{s.n}</span>
                      <div>
                        <p className="font-semibold text-ibs-ink">{s.t}</p>
                        <p className="text-fluid-sm text-ibs-steel">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 rounded-2xl bg-ibs-ink p-fluid-4 text-white">
                <p className="eyebrow text-ibs-signal">Lieber direkt sprechen?</p>
                <h3 className="mt-2 heading-3 text-white">Wir sind erreichbar.</h3>
                <ul className="mt-4 space-y-3 text-fluid-sm">
                  <li className="flex items-center gap-3">
                    <Icon name="phone" size={18} className="text-ibs-accent" />
                    <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="hover:underline">{SITE.contact.phoneDisplay}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="mail" size={18} className="text-ibs-accent" />
                    <a href={`mailto:${SITE.contact.email}`} className="hover:underline break-all">{SITE.contact.email}</a>
                  </li>
                </ul>
                <p className="mt-4 text-fluid-xs text-ibs-fog">
                  Antwortzeit werktags i. d. R. innerhalb 24 Stunden.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Anfrage', href: '/anfrage/' },
      ])} />
    </>
  )
}
