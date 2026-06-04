'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/data/projects'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'

const FILTERS = [
  { id: 'all',          label: 'Alle' },
  { id: 'industrie',    label: 'Industrie' },
  { id: 'werkstatt',    label: 'Werkstatt' },
  { id: 'gewerbe',      label: 'Gewerbe' },
  { id: 'balkon',       label: 'Balkon & Terrasse' },
  { id: 'wohnen',       label: 'Wohnen' },
  { id: 'sonderloesung',label: 'Sonderlösungen' },
] as const

export function ProjectGallery({ limit, showFilter = true }: { limit?: number; showFilter?: boolean }) {
  const [filter, setFilter] = useState<typeof FILTERS[number]['id']>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const items = PROJECTS.filter((p) => (filter === 'all' ? true : p.category === filter)).slice(
    0,
    limit ?? PROJECTS.length,
  )

  return (
    <div>
      {showFilter && (
        <div className="mb-fluid-4 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                'rounded-full px-4 py-2 text-fluid-sm font-medium transition-colors',
                filter === f.id
                  ? 'bg-ibs-ink text-white'
                  : 'bg-ibs-mist text-ibs-ink ring-1 ring-ibs-line hover:bg-ibs-fog/60',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <ul className="grid gap-fluid-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <li key={p.id} className="reveal">
            <button
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-ibs-line bg-ibs-paper"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-snappy group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ibs-ink/85 via-ibs-ink/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 text-left text-white">
                  <span className="inline-flex rounded-full bg-white/15 px-2.5 py-0.5 text-fluid-xs font-semibold uppercase tracking-wider ring-1 ring-white/20 backdrop-blur">
                    {FILTERS.find((f) => f.id === p.category)?.label}
                  </span>
                  <p className="mt-2 font-semibold leading-tight">{p.title}</p>
                </div>
                <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-ibs-ink opacity-0 transition group-hover:opacity-100">
                  <Icon name="arrow-up-right" size={16} />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ibs-ink/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
          >
            <Icon name="x" />
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={items[lightbox].image}
                alt={items[lightbox].title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">{items[lightbox].title}</p>
                <p className="text-fluid-sm text-white/70">{items[lightbox].description}</p>
              </div>
              <Link
                href="/anfrage/"
                onClick={() => setLightbox(null)}
                className="btn-primary"
              >
                Ähnliches Projekt anfragen <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
