import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

type SectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  description?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn('section-pad scroll-mt-24', className)}>
      <div className="container-content">
        <div className="mb-12 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] md:items-end">
          <div>
            <p className="mono-label mb-4 text-accent">{eyebrow}</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-md text-sm leading-relaxed text-muted md:justify-self-end md:pb-1">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
