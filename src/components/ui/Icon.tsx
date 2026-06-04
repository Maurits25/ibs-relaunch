// Eigene, schlanke SVG-Icons — kein zusätzliches Library-Gewicht.

type Props = React.SVGProps<SVGSVGElement> & { name: IconName; size?: number }

export type IconName =
  | 'arrow-right' | 'arrow-up-right' | 'check' | 'chevron-down' | 'phone' | 'mail'
  | 'map-pin' | 'clock' | 'shield' | 'sparkles' | 'wrench' | 'warehouse' | 'car'
  | 'sun' | 'upload' | 'x' | 'menu' | 'star' | 'play' | 'plus' | 'minus'
  | 'instagram' | 'facebook' | 'paint' | 'layers' | 'hammer' | 'droplet'

export function Icon({ name, size = 20, ...rest }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...rest,
  }
  switch (name) {
    case 'arrow-right':       return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    case 'arrow-up-right':    return <svg {...common}><path d="M7 17 17 7M9 7h8v8" /></svg>
    case 'check':             return <svg {...common}><path d="M4 12.5 9 17.5 20 6.5" /></svg>
    case 'chevron-down':      return <svg {...common}><path d="m6 9 6 6 6-6" /></svg>
    case 'phone':             return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.17 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
    case 'mail':              return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
    case 'map-pin':           return <svg {...common}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    case 'clock':             return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
    case 'shield':            return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
    case 'sparkles':          return <svg {...common}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>
    case 'wrench':            return <svg {...common}><path d="M14.7 6.3a4 4 0 0 1 5 5l-2.6-1.5-2 2-1.5-2.6Zm-1.4 1.4-7.6 7.6a2 2 0 1 0 2.8 2.8l7.6-7.6" /></svg>
    case 'warehouse':         return <svg {...common}><path d="M3 21V8l9-4 9 4v13" /><path d="M7 21V12h10v9" /><path d="M9 21v-5h6v5" /></svg>
    case 'car':               return <svg {...common}><path d="M5 17h14M5 17v3M19 17v3M3 13l2-6h14l2 6M3 13h18v4H3v-4Z" /><circle cx="7" cy="17" r="1" /><circle cx="17" cy="17" r="1" /></svg>
    case 'sun':               return <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></svg>
    case 'upload':            return <svg {...common}><path d="M12 16V4M6 10l6-6 6 6M4 20h16" /></svg>
    case 'x':                 return <svg {...common}><path d="M6 6 18 18M18 6 6 18" /></svg>
    case 'menu':              return <svg {...common}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
    case 'star':              return <svg {...common}><path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7L12 3Z" /></svg>
    case 'play':              return <svg {...common}><path d="M6 4v16l14-8L6 4Z" /></svg>
    case 'plus':              return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>
    case 'minus':             return <svg {...common}><path d="M5 12h14" /></svg>
    case 'instagram':         return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></svg>
    case 'facebook':          return <svg {...common}><path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V3Z" /></svg>
    case 'paint':             return <svg {...common}><path d="M19 3H8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h6a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 0-2 2v3" /></svg>
    case 'layers':            return <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 14 9 5 9-5" /></svg>
    case 'hammer':            return <svg {...common}><path d="m14 6 6 6-2 2-6-6M7 13l-3 3a2 2 0 0 0 3 3l3-3M11 9l4-4 3 3-4 4" /></svg>
    case 'droplet':           return <svg {...common}><path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12Z" /></svg>
    default:                  return null
  }
}
