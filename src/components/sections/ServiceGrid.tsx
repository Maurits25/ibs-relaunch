import Link from 'next/link'
import Image from 'next/image'
import { Icon, type IconName } from '@/components/ui/Icon'
import { SERVICES } from '@/data/services'

const ICON_MAP: Record<string, IconName> = {
  beschichtung: 'layers',
  versiegelungen: 'wrench',
  'ep-estrich': 'hammer',
  dekorbelaege: 'sparkles',
  betonoptik: 'paint',
  balkon: 'sun',
}

export function ServiceGrid() {
  return (
    <div className="grid gap-fluid-4 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <Link
          key={s.slug}
          href={s.href}
          className="reveal group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ibs-line shadow-soft transition-all duration-300 ease-snappy hover:-translate-y-1 hover:shadow-card"
        >
          <span className="absolute inset-x-0 top-0 h-1 z-10 bg-gradient-to-r from-ibs-accent via-ibs-signal to-ibs-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative aspect-[3/2] overflow-hidden bg-ibs-mist">
            <Image
              src={s.image}
              alt={s.shortTitle}
              fill
              sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-snappy group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ibs-ink/55 via-ibs-ink/0 to-transparent" />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-fluid-xs font-semibold text-ibs-ink ring-1 ring-white/20 shadow-sm backdrop-blur">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-ibs-ink text-white">
                <Icon name={ICON_MAP[s.slug] ?? 'layers'} size={12} />
              </span>
              {s.hero.eyebrow}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-fluid-4">
            <h3 className="font-display text-fluid-xl font-bold leading-tight text-ibs-ink">
              {s.shortTitle}
            </h3>
            <p className="mt-3 line-clamp-3 text-fluid-sm text-ibs-steel">
              {s.metaDescription}
            </p>
            <span className="mt-auto pt-5 inline-flex items-center gap-1 text-fluid-sm font-semibold text-ibs-ink transition-colors group-hover:text-ibs-accent">
              Mehr erfahren
              <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
