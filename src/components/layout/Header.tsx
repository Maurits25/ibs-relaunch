'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { MAIN_NAV } from '@/data/navigation'
import { SITE } from '@/data/site'
import { cn } from '@/lib/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Welches Mega-Menü ist offen? Wert = item.href des offenen Menüs, sonst null.
  // Mehrere Menüs werden so NIE gleichzeitig sichtbar.
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Esc schließt offene Dropdowns
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300',
        // Scrolled = vollständig deckend Weiß. Top-of-Page = subtile dunkle
        // Gradient-Schicht mit Backdrop-Blur, damit weißer Text auch über
        // hellen Hero-Bildbereichen lesbar bleibt.
        scrolled
          ? 'bg-white text-ibs-ink ring-1 ring-ibs-line shadow-soft'
          : 'bg-gradient-to-b from-ibs-ink/65 via-ibs-ink/35 to-transparent backdrop-blur-[2px] text-white',
      )}
    >
      {/* Schmaler dunkler Kontakt-Streifen — immer sichtbar (vermeidet Layout-Sprung). */}
      <div className="bg-ibs-ink text-white hidden lg:block">
        <div className="container max-w-screen-2xl flex h-9 items-center justify-between text-fluid-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-ibs-accent">
              <Icon name="phone" size={14} /> {SITE.contact.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.contact.email}`} className="inline-flex items-center gap-2 hover:text-ibs-accent">
              <Icon name="mail" size={14} /> {SITE.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-5 text-white/80">
            <span className="inline-flex items-center gap-2"><Icon name="map-pin" size={14} /> Bocholt · Niederrhein · NRW</span>
            <span className="inline-flex items-center gap-2"><Icon name="shield" size={14} /> Seit 2011 · Sachkundige Verarbeitung</span>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-2xl flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo variant={scrolled ? 'light' : 'dark'} />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
          {MAIN_NAV.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={() => setOpenMenu((m) => (m === item.href ? null : m))}
              >
                <Link
                  href={item.href}
                  aria-expanded={openMenu === item.href}
                  aria-haspopup="true"
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md px-3 py-2 text-fluid-sm font-medium transition-colors',
                    scrolled ? 'text-ibs-ink hover:bg-ibs-mist' : 'text-white hover:bg-white/15',
                  )}
                >
                  {item.label}
                  <Icon
                    name="chevron-down"
                    size={14}
                    className={cn('transition-transform duration-200', openMenu === item.href && 'rotate-180')}
                  />
                </Link>
                <div
                  className={cn(
                    'absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200',
                    openMenu === item.href ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
                  )}
                  role="menu"
                >
                  <div className="min-w-[28rem] rounded-2xl bg-white p-3 ring-1 ring-ibs-line shadow-card">
                    <div className="grid grid-cols-1 gap-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          role="menuitem"
                          onClick={() => setOpenMenu(null)}
                          className="group flex items-start gap-3 rounded-xl p-3 hover:bg-ibs-mist"
                        >
                          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ibs-ink text-white">
                            <Icon name="layers" size={16} />
                          </span>
                          <span>
                            <span className="block font-semibold text-ibs-ink">{c.label}</span>
                            {c.description && (
                              <span className="block text-fluid-xs text-ibs-steel">{c.description}</span>
                            )}
                          </span>
                          <Icon name="arrow-up-right" size={16} className="ml-auto mt-1 text-ibs-concrete opacity-0 transition group-hover:opacity-100 group-hover:text-ibs-accent" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setOpenMenu(null)}
                className={cn(
                  'rounded-md px-3 py-2 text-fluid-sm font-medium transition-colors',
                  scrolled ? 'text-ibs-ink hover:bg-ibs-mist' : 'text-white hover:bg-white/15',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant={scrolled ? 'ghost' : 'outline-light'}
            href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`}
          >
            <Icon name="phone" size={16} /> Anrufen
          </Button>
          <Button variant="primary" href="/anfrage/">
            Projekt anfragen <Icon name="arrow-right" size={16} />
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 lg:hidden transition-colors',
            scrolled ? 'bg-white text-ibs-ink ring-ibs-line' : 'bg-white/10 text-white ring-white/30',
          )}
        >
          <Icon name={open ? 'x' : 'menu'} />
        </button>
      </div>

      {/* Mobile Offcanvas */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Menü schließen"
          className="absolute inset-0 bg-ibs-ink/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            'absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl transition-transform duration-300',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <Logo />
            <button
              type="button"
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-ibs-line"
            >
              <Icon name="x" />
            </button>
          </div>
          <nav className="flex flex-col" aria-label="Mobile Hauptnavigation">
            {MAIN_NAV.map((item) => (
              <div key={item.href} className="border-b border-ibs-line">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-semibold text-ibs-ink"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pb-3 pl-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-fluid-sm text-ibs-steel hover:text-ibs-accent"
                      >
                        — {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 grid gap-3">
            <Button href="/anfrage/" size="lg" className="w-full">
              Projekt anfragen <Icon name="arrow-right" size={16} />
            </Button>
            <Button href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} variant="secondary" size="lg" className="w-full">
              <Icon name="phone" size={16} /> {SITE.contact.phoneDisplay}
            </Button>
          </div>
        </aside>
      </div>
    </header>
  )
}
