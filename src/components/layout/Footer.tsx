import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Icon } from '@/components/ui/Icon'
import { SITE } from '@/data/site'
import { FOOTER_NAV } from '@/data/navigation'

export function Footer() {
  const year = 2026
  return (
    <footer className="bg-ibs-ink text-white">
      <div className="container max-w-screen-2xl py-fluid-7">
        <div className="grid gap-fluid-5 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-5 text-fluid-sm text-ibs-fog max-w-md">
              Fachbetrieb für Industriebodensanierung aus {SITE.address.city} – Bodenbeschichtung, WHG-Versiegelung, Steinteppich, Designböden und Balkon­sanierung am Niederrhein und in NRW. Seit {SITE.founded} — über {SITE.ownerExperienceYears} Jahre persönliche Erfahrung.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-fluid-sm">
              <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-ibs-accent">
                <Icon name="phone" size={16} /> {SITE.contact.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.contact.email}`} className="inline-flex items-center gap-2 hover:text-ibs-accent">
                <Icon name="mail" size={16} /> {SITE.contact.email}
              </a>
              <span className="inline-flex items-start gap-2 text-ibs-fog">
                <Icon name="map-pin" size={16} className="mt-0.5" />
                {SITE.address.street} · {SITE.address.postalCode} {SITE.address.city}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.socials.facebook}
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:text-ibs-accent"
              ><Icon name="facebook" size={18} /></a>
              <a
                href={SITE.socials.instagram}
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:text-ibs-accent"
              ><Icon name="instagram" size={18} /></a>
            </div>
          </div>

          <FooterCol title="Leistungen" items={FOOTER_NAV.leistungen} />
          <FooterCol title="Einsatzbereiche" items={FOOTER_NAV.einsatz} />
          <FooterCol title="Unternehmen" items={FOOTER_NAV.unternehmen} />

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-fluid-sm font-semibold uppercase tracking-[0.12em] text-white/60">Rechtliches</h3>
            <ul className="space-y-2 text-fluid-sm">
              {FOOTER_NAV.legal.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="text-ibs-fog hover:text-white">
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 mb-4 text-fluid-sm font-semibold uppercase tracking-[0.12em] text-white/60">Partner</h3>
            <ul className="space-y-1 text-fluid-sm text-ibs-fog">
              {SITE.partners.map((p) => <li key={p.name}>· {p.name}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-fluid-6 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-fluid-xs text-ibs-fog">
          <p>© {year} {SITE.legalName}. Alle Rechte vorbehalten.</p>
          <p>USt-ID: {SITE.vatId} · Inhaber {SITE.owner}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <h3 className="mb-4 text-fluid-sm font-semibold uppercase tracking-[0.12em] text-white/60">{title}</h3>
      <ul className="space-y-2 text-fluid-sm">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-ibs-fog hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
