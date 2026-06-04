import Link from 'next/link'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'

type BaseProps = {
  children: React.ReactNode
  variant?: Variant
  className?: string
  size?: 'md' | 'lg'
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  'outline-light': 'btn-outline-light',
}

const SIZE_CLASSES = {
  md: 'text-fluid-sm',
  lg: 'text-fluid-base px-7 py-4',
} as const

type LinkProps = BaseProps & { href: string; type?: never }
type ButtonProps = BaseProps & {
  href?: never
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

export function Button(props: LinkProps | ButtonProps) {
  const { children, variant = 'primary', size = 'md', className } = props
  const cls = cn(VARIANT_CLASSES[variant], SIZE_CLASSES[size], className)

  if ('href' in props && props.href) {
    const isExternal = props.href.startsWith('http')
    if (isExternal) {
      return (
        <a href={props.href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonProps
  return (
    <button
      type={buttonProps.type ?? 'button'}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={cn(cls, buttonProps.disabled && 'opacity-60 cursor-not-allowed')}
    >
      {children}
    </button>
  )
}
