import { cn } from '@/lib/cn'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  invert?: boolean
}

export function SectionIntro({ eyebrow, title, description, centered, invert }: Props) {
  return (
    <div className={cn('mb-fluid-5 max-w-3xl', centered && 'mx-auto text-center')}>
      {eyebrow && (
        <p className={cn('eyebrow', invert ? 'text-ibs-signal' : undefined)}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mt-3 heading-2 text-balance',
          invert ? 'text-white' : 'text-ibs-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 lede', invert && 'text-ibs-fog')}>{description}</p>
      )}
    </div>
  )
}
