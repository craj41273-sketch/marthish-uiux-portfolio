import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-line bg-surface',
        interactive &&
          'transition duration-300 ease-craft hover:-translate-y-0.5 hover:border-accent/40',
        className,
      )}
    >
      {children}
    </div>
  )
}
