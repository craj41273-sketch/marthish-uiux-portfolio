import { isValidElement, type ReactNode } from 'react'
import { Button as AstryxButton } from '@astryxdesign/core/Button'

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

function nodeToText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(nodeToText).join(' ')
  if (isValidElement<{ children?: ReactNode }>(node)) return nodeToText(node.props.children)
  return ''
}

/**
 * Thin adapter over Astryx Button so existing call sites keep their simple
 * icon-name API while the actual control comes from the design system.
 */
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
  const iconNode = Icon ? <Icon size={16} strokeWidth={1.8} aria-hidden="true" /> : undefined
  const label = ariaLabel || nodeToText(children) || 'Action'
  const fullWidth = className?.split(/\s+/).includes('w-full') ?? false
  const downloadProps = download ? ({ download: '' } as Record<string, unknown>) : {}

  return (
    <AstryxButton
      label={label}
      href={href}
      variant={variant === 'ghost' ? 'ghost' : 'primary'}
      size="md"
      type={type}
      onClick={onClick}
      icon={iconPosition === 'left' ? iconNode : undefined}
      endContent={iconPosition === 'right' ? iconNode : undefined}
      width={fullWidth ? '100%' : undefined}
      className={className}
      {...downloadProps}
    >
      {children}
    </AstryxButton>
  )
}
