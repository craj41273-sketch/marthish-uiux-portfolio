import { useEffect, useRef } from 'react'
import { Button as AstryxButton } from '@astryxdesign/core/Button'

import { getIcon } from '../../lib/icons'
import type { CaseStudy } from '../../types'
import { IconBadge } from '../ui/IconBadge'
import { Tag } from '../ui/Tag'
import { CaseStudyContent } from './CaseStudyContent'

const CloseIcon = getIcon('X')

type CaseStudyModalProps = {
  project: CaseStudy | null
  onClose: () => void
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-sm sm:py-12"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="animate-fade-up w-full max-w-3xl rounded-card border border-line bg-surface shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-surface/95 px-6 py-4 backdrop-blur sm:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Case study / {project.index}
          </p>
          <AstryxButton
            ref={closeRef}
            label="Close case study"
            variant="ghost"
            size="sm"
            isIconOnly
            icon={<CloseIcon size={17} strokeWidth={1.8} aria-hidden="true" />}
            onClick={onClose}
          />
        </div>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-wrap items-center gap-4">
            <IconBadge name={project.icon} size="lg" />
            <Tag accent>{project.category}</Tag>
          </div>
          <h2
            id="case-study-title"
            className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {project.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{project.subtitle}</p>

          <CaseStudyContent project={project} />
        </div>
      </div>
    </div>
  )
}
