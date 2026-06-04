import Link from 'next/link'
import { cn } from '@/lib/cn'

type Props = {
  variant?: 'light' | 'dark'
  className?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_PX: Record<NonNullable<Props['size']>, number> = {
  sm: 36,
  md: 44,
  lg: 60,
}

/**
 * IBS-Logo als Inline-SVG. Übernimmt die Farbe per `currentColor`,
 * funktioniert dadurch sowohl auf hellem (Header) als auch dunklem
 * (Footer) Hintergrund ohne separate Asset-Versionen.
 */
export function Logo({ variant = 'light', className, href = '/', size = 'md' }: Props) {
  const color = variant === 'dark' ? 'text-white' : 'text-ibs-ink'
  const accent = variant === 'dark' ? '#E87722' : '#E87722'
  const height = SIZE_PX[size]

  return (
    <Link
      href={href}
      aria-label="IBS Industriebodensanierung Schmäing — Startseite"
      className={cn('inline-flex shrink-0 items-center', color, className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 240"
        height={height}
        width={(height * 600) / 240}
        role="img"
        aria-hidden="true"
        focusable="false"
        className="block"
      >
        {/* IBS-Wortmarke */}
        <g fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight={900} letterSpacing="-6" fill="currentColor">
          <text x="0" y="148" fontSize={170}>IBS</text>
        </g>

        {/* Punkt-Gradient rechts (Marken-Detail) */}
        <g fill="currentColor">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => {
              const sizeFactor = (row + 1) / 5
              const cx = 320 + col * 38
              const cy = 38 + row * 33
              const rx = 3.5 + sizeFactor * 7 - col * 0.8
              const ry = rx * 1.25
              return (
                <ellipse
                  key={`${row}-${col}`}
                  cx={cx}
                  cy={cy}
                  rx={Math.max(2.5, rx)}
                  ry={Math.max(3, ry)}
                  opacity={0.55 + sizeFactor * 0.4 - col * 0.05}
                />
              )
            }),
          )}
        </g>

        {/* Akzent-Linie unter "IBS" (Marken-Touch) */}
        <rect x="0" y="162" width="290" height="6" fill={accent} rx="3" />

        {/* Untertitel */}
        <g fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight={700} fill="currentColor">
          <text x="0" y="220" fontSize={34} letterSpacing="-0.6">Industriebodensanierung Schmäing</text>
        </g>
      </svg>
    </Link>
  )
}
