'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'

type FAQ = { q: string; a: string }

export function FAQAccordion({ faqs, defaultOpenIndex }: { faqs: FAQ[]; defaultOpenIndex?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpenIndex ?? null)

  return (
    <div className="rounded-2xl bg-white ring-1 ring-ibs-line shadow-soft divide-y divide-ibs-line">
      {faqs.map((f, i) => {
        const isOpen = i === open
        return (
          <div key={f.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-fluid-3 text-left transition-colors hover:bg-ibs-mist/60"
            >
              <span className="font-semibold text-ibs-ink">{f.q}</span>
              <span
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 ring-ibs-line transition-transform duration-300',
                  isOpen ? 'rotate-180 bg-ibs-accent text-white ring-ibs-accent' : 'bg-white text-ibs-steel',
                )}
              >
                <Icon name="chevron-down" size={16} />
              </span>
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-300 ease-snappy',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-fluid-3 pb-fluid-3 text-fluid-sm leading-relaxed text-ibs-steel">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
