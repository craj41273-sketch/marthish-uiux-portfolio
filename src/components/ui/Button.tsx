import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'
import { getIcon } from '../../lib/icons'
import type { IconName } from '../../types'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  icon?: IconName
  iconPosition?: 'left' | 'right'
  type?: 'button' | 'submit'
  className?: string
  download?: boolean
  ariaLabel?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition duration-200 ease-craft'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-accent text-canvas hover:bg-accent/90',
  ghost: 'border border-line bg-surface/40 text-ink hover:border-accent/50 hover:text-white',
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  type = 'button',
  className,
  download,
  ariaLabel,
}: ButtonProps) {
  const Icon = icon ? getIcon(icon) : null
  const classes = cn(base, variants[variant], className)

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={1.8} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={1.8} aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <a href={href} download={download} aria-label={ariaLabel} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {content}
    </button>
  )
}
