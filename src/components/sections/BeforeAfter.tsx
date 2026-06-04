'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

type Props = {
  before: string
  after: string
  beforeAlt?: string
  afterAlt?: string
  caption?: string
  className?: string
}

export function BeforeAfter({ before, after, beforeAlt = 'Zustand vor der Sanierung', afterAlt = 'Zustand nach der Sanierung', caption, className }: Props) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)

  const move = (clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, x)))
  }

  return (
    <figure className={cn('group select-none', className)}>
      <div
        ref={ref}
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-ibs-line shadow-card touch-none"
        role="group"
        aria-label="Vorher-Nachher-Vergleich"
      >
        <Image src={after} alt={afterAlt} fill className="object-cover" sizes="(min-width:1024px) 60vw, 100vw" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <Image src={before} alt={beforeAlt} fill className="object-cover" sizes="(min-width:1024px) 60vw, 100vw" />
        </div>
        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-full bg-ibs-ink/85 px-3 py-1 text-fluid-xs font-semibold uppercase tracking-wider text-white">vorher</span>
        <span className="absolute right-3 top-3 rounded-full bg-ibs-accent px-3 py-1 text-fluid-xs font-semibold uppercase tracking-wider text-white">nachher</span>
        {/* Slider handle */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(parseInt(e.target.value, 10))}
          aria-label="Vergleich verschieben"
          className="absolute inset-0 z-20 w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 z-10"
          style={{ left: `calc(${pos}% - 1px)` }}
        >
          <div className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ibs-ink shadow-md ring-1 ring-black/10">
            <span className="text-fluid-base font-bold">↔</span>
          </div>
        </div>
      </div>
      {caption && <figcaption className="mt-3 text-fluid-sm text-ibs-steel">{caption}</figcaption>}
    </figure>
  )
}
