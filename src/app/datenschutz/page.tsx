import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { SITE } from '@/data/site'

export const metadata: Metadata = buildMetadata({
  path: '/datenschutz/',
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von IBS Industriebodensanierung Schmäing — DSGVO-konform, ohne Tracking-Standardlasten.',
})

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz­erklärung."
        description="Informationen gemäß Art. 13 DSGVO."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Datenschutz', href: '/datenschutz/' }]}
      />
      <Section variant="light">
        <div className="container max-w-3xl prose prose-neutral">
          <p className="text-fluid-xs text-ibs-steel">
            <em>Hinweis: Dieser Text ist eine technisch passende Vorlage für die im Code aktuell verwendeten Komponenten. Bitte vor Veröffentlichung anwaltlich prüfen lassen.</em>
          </p>

          <h2 className="heading-3">1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Daten­verarbeitung auf dieser Website ist:<br />
            <strong>{SITE.legalName}</strong>, Inhaber {SITE.owner}<br />
            {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}<br />
            Telefon: {SITE.contact.phoneDisplay}<br />
            E-Mail: <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
          </p>

          <h2 className="heading-3 mt-fluid-4">2. Erhebung allgemeiner Informationen beim Aufruf</h2>
          <p>
            Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur
            erfasst (Server-Logfiles): Browsertyp, verwendetes Betriebssystem, Domainname des
            Internet­service-Providers, IP-Adresse, Datum und Uhrzeit des Zugriffs sowie aufgerufene
            URL. Die Verarbeitung erfolgt zur Wahrung unserer berechtigten Interessen am sicheren
            Betrieb dieser Website (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nach kurzer Zeit
            anonymisiert oder gelöscht.
          </p>

          <h2 className="heading-3 mt-fluid-4">3. Kontaktformular & Datei-Upload</h2>
          <p>
            Wenn Sie uns über das Anfrage­formular Anfragen zukommen lassen, werden die von Ihnen
            gemachten Angaben (Name, Firma, E-Mail, Telefon, Ort, Projekt­art, Fläche, Bodenzustand,
            Nachricht) sowie optional hochgeladene Dateien zur Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO,
            soweit es um vor­vertragliche Maßnahmen geht, im Übrigen Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Bearbeitung von Anfragen). Eine Weitergabe an Dritte
            erfolgt nicht ohne Ihre Einwilligung. Wir löschen die Anfragen, sobald sie nicht mehr
            erforderlich sind.
          </p>

          <h2 className="heading-3 mt-fluid-4">4. Hosting</h2>
          <p>
            Diese Website wird bei einem Hosting-Dienstleister in der Europäischen Union betrieben.
            Es werden Server-Logfiles erhoben (siehe Ziffer 2). Mit dem Hosting-Anbieter besteht ein
            Vertrag zur Auftrags­verarbeitung gemäß Art. 28 DSGVO.
          </p>

          <h2 className="heading-3 mt-fluid-4">5. Cookies</h2>
          <p>
            Diese Website setzt im Standardbetrieb <strong>keine</strong> Tracking- oder Marketing-Cookies. Es werden ausschließlich technisch notwendige Daten verarbeitet, die für den
            Betrieb der Seite erforderlich sind.
          </p>

          <h2 className="heading-3 mt-fluid-4">6. Karten­darstellung</h2>
          <p>
            Auf der Kontaktseite kann eine Karte über Google Maps eingebettet sein. Beim Aufruf der
            Karte werden Daten an Google übermittelt. Anbieter ist Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Irland. Weitere Informationen entnehmen Sie der
            Datenschutz­erklärung von Google.
          </p>

          <h2 className="heading-3 mt-fluid-4">7. Schriftarten</h2>
          <p>
            Die Schriftart „Inter“ wird über next/font selbst gehostet. Es findet keine Verbindung zu
            einem externen Schriftartenanbieter statt.
          </p>

          <h2 className="heading-3 mt-fluid-4">8. Social-Media-Verlinkungen</h2>
          <p>
            Wir verlinken im Footer auf unsere Profile bei Facebook und Instagram. Beim Anklicken
            werden Sie zum jeweiligen Anbieter weitergeleitet. Erst beim Aufruf der Profile
            verarbeiten die Anbieter Daten gemäß ihrer eigenen Datenschutz­erklärungen.
          </p>

          <h2 className="heading-3 mt-fluid-4">9. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung
            (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit
            (Art. 20 DSGVO) sowie Widerspruch (Art. 21 DSGVO). Sie können sich zudem bei einer
            Aufsichtsbehörde beschweren (Art. 77 DSGVO).
          </p>

          <h2 className="heading-3 mt-fluid-4">10. SSL/TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt eine Transport­verschlüsselung (TLS), um die Übertragung
            vertraulicher Inhalte – wie z. B. Anfragen – abzusichern.
          </p>

          <p className="mt-fluid-5 text-fluid-xs text-ibs-steel">
            Stand der Erklärung: 2026.
          </p>
        </div>
      </Section>

      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Datenschutz', href: '/datenschutz/' },
      ])} />
    </>
  )
}
