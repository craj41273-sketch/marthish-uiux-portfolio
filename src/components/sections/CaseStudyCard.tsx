import { getIcon } from '../../lib/icons'
import type { CaseStudy } from '../../types'
import { IconBadge } from '../ui/IconBadge'
import { Tag } from '../ui/Tag'

const ArrowUpRight = getIcon('ArrowUpRight')

type CaseStudyCardProps = {
  project: CaseStudy
}

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  const stack = [...project.hardware.slice(0, 2), ...project.software.slice(0, 1)]

  return (
    <a
      href={`#case-study/${project.slug}`}
      className="group flex h-full w-full flex-col rounded-card border border-line bg-surface p-6 text-left transition duration-300 ease-craft hover:-translate-y-0.5 hover:border-accent/50 sm:p-8"
      aria-label={`Open case study: ${project.title}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <IconBadge name={project.icon} size="md" />
          <div>
            <p className="mb-1.5 font-mono text-[10px] tracking-[0.16em] text-muted">
              {project.index} / {project.year}
            </p>
            <Tag accent>{project.category}</Tag>
          </div>
        </div>
        <ArrowUpRight
          size={18}
          strokeWidth={1.7}
          aria-hidden="true"
          className="shrink-0 text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-accent">{project.subtitle}</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-md border border-line px-2 py-1 font-mono text-[10px] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </a>
  )
}
