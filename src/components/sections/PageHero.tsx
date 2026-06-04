import Image from 'next/image'
import { Breadcrumbs, type Crumb } from '@/components/layout/Breadcrumbs'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  bullets?: string[]
  image?: string
  imageAlt?: string
  crumbs?: Crumb[]
}

export function PageHero({ eyebrow, title, description, bullets, image, imageAlt, crumbs }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ibs-ink text-white">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ibs-ink/95 via-ibs-ink/70 to-ibs-ink/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-ibs-ink/80 via-transparent to-ibs-ink/40" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]" />
        </div>
      )}

      <div className="container max-w-screen-2xl py-fluid-7 lg:py-fluid-8">
        {crumbs && (
          <div className="mb-6 text-white/70 [&_*]:!text-white/80">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        {eyebrow && (
          <p className="eyebrow text-ibs-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-ibs-signal" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 heading-1 max-w-4xl text-balance">{title}</h1>
        {description && (
          <p className="mt-5 lede max-w-3xl text-ibs-fog">{description}</p>
        )}
        {bullets && bullets.length > 0 && (
          <ul className="mt-fluid-5 grid max-w-3xl gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-fluid-sm text-ibs-fog">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ibs-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
