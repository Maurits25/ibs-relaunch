import { cn } from '@/lib/cn'

type Props = React.HTMLAttributes<HTMLElement> & {
  variant?: 'light' | 'paper' | 'mist' | 'dark' | 'ink'
}

export function Section({ variant = 'light', className, children, ...rest }: Props) {
  const bg = {
    light: 'bg-white text-ibs-ink',
    paper: 'bg-ibs-paper text-ibs-ink',
    mist: 'bg-ibs-mist text-ibs-ink',
    dark: 'bg-ibs-graphite text-white',
    ink: 'bg-ibs-ink text-white',
  }[variant]

  return (
    <section className={cn('section relative', bg, className)} {...rest}>
      {children}
    </section>
  )
}
