import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionIntro } from '@/components/sections/SectionIntro'
import { CTASection } from '@/components/sections/CTASection'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { SITE } from '@/data/site'

export const metadata: Metadata = buildMetadata({
  path: '/regionen/',
  title: 'Regionen & Einzugsgebiet — Bocholt · Niederrhein · NRW',
  description:
    'IBS Schmäing arbeitet im gesamten Niederrhein, Münsterland, Ruhrgebiet, Raum Düsseldorf und Osnabrück. Hier eine Übersicht der häufigsten Einsatz­städte und unsere Service-Area.',
})

const REGIONS = [
  {
    name: 'Niederrhein & Münsterland',
    description: 'Kernmarkt direkt um Bocholt — von Borken bis Wesel, Coesfeld, Stadtlohn, Vreden, Hamminkeln und Münster.',
    cities: ['Bocholt', 'Rhede', 'Borken', 'Coesfeld', 'Stadtlohn', 'Vreden', 'Wesel', 'Hamminkeln', 'Münster', 'Ahaus'],
  },
  {
    name: 'Ruhrgebiet',
    description: 'Industrieller Schwerpunkt: Dorsten, Gelsenkirchen, Oberhausen, Essen, Duisburg, Bottrop — Hallen, Logistik, Werkstatt.',
    cities: ['Dorsten', 'Gelsenkirchen', 'Oberhausen', 'Essen', 'Duisburg', 'Bottrop', 'Recklinghausen', 'Marl'],
  },
  {
    name: 'Raum Düsseldorf',
    description: 'Großraum Düsseldorf inkl. Krefeld, Mönchengladbach, Neuss — gewerbliche und repräsentative Projekte.',
    cities: ['Düsseldorf', 'Krefeld', 'Mönchengladbach', 'Neuss', 'Kreis Kleve', 'Viersen'],
  },
  {
    name: 'Raum Osnabrück',
    description: 'Niedersächsische Grenzregion: Osnabrück, Lingen, Rheine, Nordhorn — Industrie, Logistik und gewerbliche Bauten.',
    cities: ['Osnabrück', 'Lingen', 'Rheine', 'Nordhorn', 'Steinfurt'],
  },
  {
    name: 'Niederlande Grenzregion',
    description: 'Nach Absprache übernehmen wir auch Projekte jenseits der deutschen Grenze in der Provinz Gelderland.',
    cities: ['Enschede', 'Winterswijk', 'Doetinchem', 'Aalten'],
  },
]

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Region & Einzugsgebiet"
        title="Aus Bocholt heraus — in ganz NRW und darüber hinaus."
        description="IBS Schmäing arbeitet vom Niederrhein bis ins Ruhrgebiet, in den Raum Düsseldorf und Osnabrück. Hier eine Übersicht der häufigsten Einsatz­städte."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Regionen', href: '/regionen/' }]}
        image="/images/scenes/regionen-hero.jpg"
      />

      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <SectionIntro
            eyebrow="Service-Areas"
            title="Wo wir arbeiten."
            description="Fünf Regionen, die wir regelmäßig betreuen. In Sonderfällen auch außerhalb — sprechen Sie uns einfach an."
          />
          <ul className="grid gap-fluid-3 md:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <li key={r.name} className="reveal rounded-2xl bg-ibs-paper p-fluid-4 ring-1 ring-ibs-line">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ibs-ink text-white">
                    <Icon name="map-pin" size={18} />
                  </span>
                  <h3 className="font-display text-fluid-lg font-bold text-ibs-ink">{r.name}</h3>
                </div>
                <p className="text-fluid-sm text-ibs-steel">{r.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {r.cities.map((c) => (
                    <li key={c} className="rounded-full bg-white px-3 py-1 text-fluid-xs font-medium text-ibs-ink ring-1 ring-ibs-line">
                      {c}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-fluid-6 rounded-2xl bg-ibs-ink p-fluid-5 text-white">
            <p className="eyebrow text-ibs-signal">Außerhalb dieser Regionen?</p>
            <h3 className="mt-3 heading-3 text-white">Auch da sind wir oft unterwegs.</h3>
            <p className="mt-3 lede text-ibs-fog max-w-2xl">
              Bei größeren Aufträgen oder Sonder­projekten arbeiten wir auch deutschlandweit. Rufen Sie uns kurz an — wir prüfen, ob Ihr Standort für uns sinnvoll ist.
            </p>
            <p className="mt-fluid-4 text-fluid-sm text-ibs-fog">
              📞 <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="hover:text-white underline">{SITE.contact.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </Section>

      <CTASection />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Regionen', href: '/regionen/' },
      ])} />
    </>
  )
}
