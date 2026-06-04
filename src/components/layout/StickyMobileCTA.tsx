'use client'

import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { SITE } from '@/data/site'

export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 pointer-events-none pb-[env(safe-area-inset-bottom)]">
      <div className="mx-3 mb-3 grid grid-cols-2 gap-2 rounded-2xl bg-ibs-ink/95 p-2 shadow-card ring-1 ring-white/10 backdrop-blur-md pointer-events-auto">
        <a
          href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-3 text-fluid-sm font-semibold text-white hover:bg-white/15"
        >
          <Icon name="phone" size={16} /> Anrufen
        </a>
        <Link
          href="/anfrage/"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-ibs-accent px-3 py-3 text-fluid-sm font-semibold text-white hover:bg-ibs-accentDark"
        >
          <Icon name="upload" size={16} /> Anfrage
        </Link>
      </div>
    </div>
  )
}
