import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

type TagProps = {
  children: ReactNode
  accent?: boolean
  className?: string
}

export function Tag({ children, accent = false, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]',
        accent ? 'border-accent/40 bg-accent-soft text-accent' : 'border-line text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
