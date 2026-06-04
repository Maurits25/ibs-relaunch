import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { SITE } from '@/data/site'

export const metadata: Metadata = buildMetadata({
  path: '/impressum/',
  title: 'Impressum',
  description: 'Impressum und gesetzliche Anbieterkennzeichnung von IBS Industriebodensanierung Schmäing aus Bocholt.',
  noIndex: false,
})

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum."
        description="Anbieterkennzeichnung nach § 5 TMG."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Impressum', href: '/impressum/' }]}
      />
      <Section variant="light">
        <div className="container max-w-3xl prose prose-neutral">
          <p className="text-fluid-xs text-ibs-steel">
            <em>Hinweis: Bitte vor Veröffentlichung rechtlich prüfen lassen. Diese Vorlage basiert auf den derzeit bekannten Daten der bestehenden Website.</em>
          </p>

          <h2 className="heading-3">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>{SITE.legalName}</strong><br />
            Inhaber: {SITE.owner}<br />
            {SITE.address.street}<br />
            {SITE.address.postalCode} {SITE.address.city}<br />
            {SITE.address.country}
          </p>

          <h2 className="heading-3 mt-fluid-4">Kontakt</h2>
          <p>
            Telefon: {SITE.contact.phoneDisplay}<br />
            Telefax: {SITE.contact.faxDisplay}<br />
            E-Mail: <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
          </p>

          <h2 className="heading-3 mt-fluid-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikations­nummer gemäß § 27a UStG:<br />
            <strong>{SITE.vatId}</strong>
          </p>

          <h2 className="heading-3 mt-fluid-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            {SITE.owner}<br />
            {SITE.address.street}<br />
            {SITE.address.postalCode} {SITE.address.city}
          </p>

          <h2 className="heading-3 mt-fluid-4">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" rel="noopener noreferrer" target="_blank">https://ec.europa.eu/consumers/odr/</a>.
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="heading-3 mt-fluid-4">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungs­verfahren vor einer
            Verbraucher­schlichtungs­stelle teilzunehmen.
          </p>

          <h2 className="heading-3 mt-fluid-4">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>

          <h2 className="heading-3 mt-fluid-4">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber der Seiten verantwortlich.
          </p>

          <h2 className="heading-3 mt-fluid-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </Section>

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Impressum', href: '/impressum/' },
      ])} />
    </>
  )
}
