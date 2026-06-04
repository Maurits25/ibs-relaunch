import { Icon } from '@/components/ui/Icon'
import { SITE } from '@/data/site'
import type { IconName } from '@/components/ui/Icon'

type Item = { icon: IconName; title: string; subtitle: string }

const ITEMS: Item[] = [
  { icon: 'shield',    title: `Seit ${SITE.founded}`, subtitle: 'Fachbetrieb mit Sachkundenachweis' },
  { icon: 'sparkles',  title: 'Staubarme Ausführung', subtitle: 'Auch im laufenden Betrieb' },
  { icon: 'clock',     title: '45-Min-Technik',       subtitle: 'Reaktionsharz – schnell befahrbar' },
  { icon: 'star',      title: 'Markenmaterial',       subtitle: 'Remmers · KLB · SIKA · Triflex' },
  { icon: 'map-pin',   title: 'Bocholt · NRW',        subtitle: 'Bis weit ins Münsterland & Ruhrgebiet' },
]

export function TrustBar({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const dark = variant === 'dark'
  return (
    <div
      className={
        dark
          ? 'border-y border-white/10 bg-ibs-ink py-fluid-4 text-white'
          : 'border-y border-ibs-line bg-ibs-paper py-fluid-4'
      }
    >
      <div className="container max-w-screen-2xl">
        <ul className="grid grid-cols-2 gap-fluid-4 sm:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map((it) => (
            <li key={it.title} className="flex items-start gap-3">
              <span
                className={
                  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ' +
                  (dark ? 'bg-white/10 text-ibs-accent' : 'bg-ibs-ink text-white')
                }
              >
                <Icon name={it.icon} size={18} />
              </span>
              <div>
                <p className={'font-semibold leading-tight ' + (dark ? 'text-white' : 'text-ibs-ink')}>
                  {it.title}
                </p>
                <p className={'text-fluid-xs ' + (dark ? 'text-ibs-fog' : 'text-ibs-steel')}>
                  {it.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
