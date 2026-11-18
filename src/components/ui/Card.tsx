import type { ReactNode } from 'react'
import { Card as AstryxCard } from '@astryxdesign/core/Card'

import { cn } from '../../lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
  interactive?: boolean
}

/** Astryx Card with the portfolio's optional hover treatment. */
export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <AstryxCard
      variant="default"
      elevation="none"
      className={cn(
        'rounded-card border border-line bg-surface',
        interactive &&
          'transition duration-300 ease-craft hover:-translate-y-0.5 hover:border-accent/40',
        className,
      )}
    >
      {children}
    </AstryxCard>
  )
}
