import Link from 'next/link'
import { Icon, type IconName } from '@/components/ui/Icon'
import { INDUSTRIES } from '@/data/industries'

const ICONS: Record<string, IconName> = {
  warehouse: 'warehouse',
  wrench: 'wrench',
  car: 'car',
  sun: 'sun',
  shield: 'shield',
  sparkles: 'sparkles',
}

export function IndustryCards() {
  return (
    <div className="grid gap-fluid-3 sm:grid-cols-2 lg:grid-cols-3">
      {INDUSTRIES.map((ind) => (
        <Link
          key={ind.id}
          href={`/einsatzbereiche/#${ind.id}`}
          className="reveal group relative overflow-hidden rounded-2xl bg-ibs-paper p-fluid-4 ring-1 ring-ibs-line transition-all duration-300 ease-snappy hover:bg-white hover:shadow-card"
        >
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-ibs-line text-ibs-ink group-hover:bg-ibs-ink group-hover:text-white transition-colors">
            <Icon name={ICONS[ind.icon] ?? 'layers'} size={20} />
          </div>
          <h3 className="font-display text-fluid-lg font-bold text-ibs-ink">{ind.title}</h3>
          <p className="mt-1 text-fluid-sm text-ibs-steel">{ind.subtitle}</p>
          <ul className="mt-3 grid gap-1.5 text-fluid-xs text-ibs-steel">
            {ind.needs.slice(0, 3).map((n) => (
              <li key={n} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ibs-accent" />
                {n}
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  )
}
