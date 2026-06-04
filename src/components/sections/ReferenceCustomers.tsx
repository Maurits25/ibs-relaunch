import Image from 'next/image'
import { SITE } from '@/data/site'
import { SectionIntro } from '@/components/sections/SectionIntro'

/**
 * Referenz-Kunden-Strip: namentlich freigegebene Marken.
 * Datenquelle: SITE.referenceCustomers (zentral in `src/data/site.ts`).
 */
export function ReferenceCustomers({
  compact = false,
  showIntro = true,
}: {
  compact?: boolean
  showIntro?: boolean
}) {
  if (compact) {
    return (
      <div className="bg-ibs-paper">
        <div className="container max-w-screen-2xl py-fluid-4">
          <p className="mb-fluid-3 text-center text-fluid-xs font-semibold uppercase tracking-[0.18em] text-ibs-steel">
            Vertrauen aus Industrie, Technologie und Prüfwesen
          </p>
          <ul className="grid grid-cols-2 items-center justify-items-center gap-fluid-3 sm:grid-cols-3 lg:grid-cols-6">
            {SITE.referenceCustomers.map((c) => (
              <li
                key={c.name}
                className="group relative flex h-14 w-full items-center justify-center"
                title={c.industry}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={240}
                  height={60}
                  className="max-h-10 w-auto object-contain opacity-65 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-white py-section">
      <div className="container max-w-screen-2xl">
        {showIntro && (
          <SectionIntro
            eyebrow="Auswahl unserer Kunden"
            title="Industriebetriebe, die uns vertrauen."
            description="Mit freundlicher Freigabe namentlich genannt — eine Auswahl realisierter Projekte aus Automatisierung, Klimatechnik, Anlagenbau, Kunststoff­verarbeitung, Prüfwesen und Tortechnik."
            centered
          />
        )}
        <ul className="grid grid-cols-2 items-center justify-items-center gap-fluid-4 sm:grid-cols-3 lg:grid-cols-6">
          {SITE.referenceCustomers.map((c) => (
            <li
              key={c.name}
              className="reveal group flex h-20 w-full items-center justify-center rounded-2xl bg-ibs-paper p-fluid-3 ring-1 ring-ibs-line transition-all duration-300 hover:bg-white hover:shadow-soft"
              title={c.industry}
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={240}
                height={60}
                className="max-h-12 w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                unoptimized
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
