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
  path: '/kontakt/',
  title: 'Kontakt – Beratung, Vor-Ort-Termin, Angebot',
  description:
    'Sprechen Sie direkt mit IBS Schmäing: Telefon, E-Mail oder Anfrage mit Foto-Upload. Wir kommen kostenfrei zu Ihnen und beraten Sie individuell.',
})

export default function KontaktPage() {
  const tel = SITE.contact.phone.replace(/\s/g, '')
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen Sie direkt mit dem Fachbetrieb."
        description="Stellen Sie uns Ihre Fragen oder Anfrage. Wir versprechen Ihnen schon jetzt, schnellstmöglich zu reagieren – kostenfrei, unverbindlich und ohne Vertriebs­getöse."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Kontakt', href: '/kontakt/' }]}
        image="/images/projects/heiligenhaus-hohlkehle.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <div className="grid gap-fluid-5 lg:grid-cols-12">
            <aside className="lg:col-span-5">
              <p className="eyebrow">So erreichen Sie uns</p>
              <h2 className="mt-3 heading-2 text-balance">Direkter Draht.</h2>
              <p className="mt-3 lede">Am schnellsten geht es per Telefon. Für eine fundierte Einschätzung helfen Fotos oder Pläne — Sie können sie gerne über das Formular hochladen.</p>

              <ul className="mt-fluid-4 grid gap-3">
                <ContactRow icon="phone" label="Zentrale" href={`tel:${tel}`} text={SITE.contact.phoneDisplay} note={`Inhaber: ${SITE.owner}`} />
                <ContactRow icon="phone" label="Daniel Schmäing" href={`tel:${SITE.contact.mobileOwner.replace(/\s/g, '')}`} text={SITE.contact.mobileOwnerDisplay} note="Geschäftsführung" />
                <ContactRow icon="phone" label="Michael Schmäing" href={`tel:${SITE.contact.mobileSales.replace(/\s/g, '')}`} text={SITE.contact.mobileSalesDisplay} note="Projektleitung / Verkauf" />
                <ContactRow icon="mail" label="E-Mail" href={`mailto:${SITE.contact.email}`} text={SITE.contact.email} note="Antwort werktags innerhalb 24 h" />
                <ContactRow icon="map-pin" label="Adresse" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`)}`} text={`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`} note="In Google Maps öffnen" />
              </ul>

              <div className="mt-fluid-5 overflow-hidden rounded-2xl ring-1 ring-ibs-line">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`)}&output=embed`}
                  title="Standort auf Karte"
                  width="100%"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </aside>

            <div className="lg:col-span-7">
              <p className="eyebrow">Anfrage stellen</p>
              <h2 className="mt-3 heading-2 text-balance">Foto-Upload möglich.</h2>
              <p className="mt-3 lede">Senden Sie uns Fotos, Pläne oder Skizzen – das hilft uns, bereits vor dem Termin die richtige Lösung anzudenken.</p>
              <div className="mt-fluid-4">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Kontakt', href: '/kontakt/' },
      ])} />
    </>
  )
}

function ContactRow({
  icon, label, text, href, note,
}: { icon: 'phone' | 'mail' | 'map-pin'; label: string; text: string; href: string; note?: string }) {
  return (
    <li>
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
         className="group flex items-start gap-3 rounded-2xl bg-ibs-paper p-fluid-3 ring-1 ring-ibs-line transition hover:bg-white hover:shadow-soft">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ibs-ink text-white">
          <Icon name={icon} size={18} />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-fluid-xs uppercase tracking-wider text-ibs-steel">{label}</span>
          <span className="block font-semibold text-ibs-ink break-words">{text}</span>
          {note && <span className="block text-fluid-xs text-ibs-steel">{note}</span>}
        </span>
        <Icon name="arrow-up-right" className="text-ibs-concrete transition group-hover:text-ibs-accent" size={18} />
      </a>
    </li>
  )
}
