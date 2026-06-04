import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'

export type Crumb = { name: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Brotkrumen" className="text-fluid-xs text-ibs-steel">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.href} className="inline-flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-ibs-ink font-medium">{it.name}</span>
              ) : (
                <Link href={it.href} className="hover:text-ibs-accent">{it.name}</Link>
              )}
              {!last && <Icon name="chevron-down" size={12} className="-rotate-90 text-ibs-concrete" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
