import Image from 'next/image'
import { SITE } from '@/data/site'

/**
 * Hersteller-Partner-Strip: tatsächlich verarbeitete Material-Marken.
 * Datenquelle: SITE.partners (zentral in `src/data/site.ts`).
 */
export function PartnerStrip() {
  return (
    <div className="border-y border-ibs-line bg-white">
      <div className="container max-w-screen-2xl py-fluid-4">
        <div className="grid items-center gap-fluid-4 md:grid-cols-12">
          <p className="text-fluid-xs font-semibold uppercase tracking-[0.18em] text-ibs-steel md:col-span-3">
            Wir verarbeiten zertifizierte<br className="hidden md:block" /> Markenmaterialien
          </p>
          <ul className="grid grid-cols-3 items-center justify-items-center gap-fluid-3 md:col-span-9">
            {SITE.partners.map((p) => (
              <li
                key={p.name}
                className="group relative flex h-14 w-full items-center justify-center"
                aria-label={p.name}
                title={p.note}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={240}
                  height={60}
                  className="max-h-12 w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
