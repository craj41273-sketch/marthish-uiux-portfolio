import type { ReactNode } from 'react'
import { Badge } from '@astryxdesign/core/Badge'

import { cn } from '../../lib/cn'

type TagProps = {
  children: ReactNode
  accent?: boolean
  className?: string
}

/** Category tag backed by the Astryx Badge primitive. */
export function Tag({ children, accent = false, className }: TagProps) {
  return (
    <Badge
      label={children}
      variant={accent ? 'cyan' : 'neutral'}
      className={cn(
        'rounded-full font-mono text-[10px] uppercase tracking-[0.14em]',
        accent ? 'border-accent/40 bg-accent-soft text-accent' : 'border-line text-muted',
        className,
      )}
    />
  )
}
