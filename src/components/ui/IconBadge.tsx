import { cn } from '../../lib/cn'
import { getIcon } from '../../lib/icons'
import type { IconName } from '../../types'

type IconBadgeProps = {
  name: IconName
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-8 w-8 rounded-lg',
  md: 'h-11 w-11 rounded-xl',
  lg: 'h-12 w-12 rounded-xl',
}

const iconSizes = { sm: 15, md: 19, lg: 21 }

export function IconBadge({ name, size = 'md', className }: IconBadgeProps) {
  const Icon = getIcon(name)

  return (
    <span
      className={cn(
        'inline-grid shrink-0 place-items-center border border-line bg-surface-raised text-accent',
        sizes[size],
        className,
      )}
      aria-hidden="true"
    >
      <Icon size={iconSizes[size]} strokeWidth={1.6} />
    </span>
  )
}
