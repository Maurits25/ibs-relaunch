import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { SERVICES } from '@/data/services'

export default function NotFound() {
  return (
    <Section variant="ink" className="min-h-[60vh]">
      <div className="container max-w-3xl text-center">
        <p className="font-display text-fluid-6xl font-extrabold text-ibs-accent">404</p>
        <h1 className="mt-3 heading-2 text-white">Diese Seite konnten wir leider nicht finden.</h1>
        <p className="mt-3 lede text-ibs-fog">
          Vielleicht ist die Adresse veraltet — oder ein Tippfehler. Suchen Sie weiter:
        </p>

        <div className="mt-fluid-5 grid gap-3 sm:grid-cols-2">
          <Button href="/" size="lg" className="w-full">
            <Icon name="arrow-right" size={16} /> Zur Startseite
          </Button>
          <Button href="/leistungen/" variant="outline-light" size="lg" className="w-full">
            Alle Leistungen
          </Button>
        </div>

        <div className="mt-fluid-6">
          <p className="eyebrow text-ibs-signal">Direkt zu unseren Bodensystemen</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-left text-fluid-sm text-white ring-1 ring-white/10 hover:bg-white/10"
                >
                  <span>{s.shortTitle}</span>
                  <Icon name="arrow-up-right" size={16} className="text-ibs-fog" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
