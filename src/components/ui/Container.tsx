import type { ElementType } from 'react'
import { cn } from '@/lib/cn'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'tight' | 'default' | 'wide'
  as?: ElementType
}

export function Container({ size = 'default', as: Tag = 'div', className, ...rest }: Props) {
  const sizes = {
    tight: 'container max-w-5xl',
    default: 'container max-w-6xl',
    wide: 'container max-w-screen-2xl',
  } as const
  return <Tag className={cn(sizes[size], className)} {...rest} />
}
