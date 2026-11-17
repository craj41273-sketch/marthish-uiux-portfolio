import type { CaseStudy } from '../../types'
import { IconBadge } from '../ui/IconBadge'

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="mt-2 text-sm text-ink">{value}</p>
    </div>
  )
}

function StackColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-line bg-canvas/60 p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{label}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-line px-2 py-1 font-mono text-[10px] text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CaseStudyContent({ project }: { project: CaseStudy }) {
  return (
    <div className="mt-10 space-y-10">
      <div className="grid gap-5 border-y border-line py-5 sm:grid-cols-3">
        <Meta label="Role" value={project.role} />
        <Meta label="Timeline" value={project.timeline} />
        <Meta label="Year" value={project.year} />
      </div>

      <section>
        <h3 className="text-lg font-semibold tracking-tight text-ink">Overview</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold tracking-tight text-ink">The challenge</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.challenge}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold tracking-tight text-ink">Approach</h3>
        <ol className="mt-4 space-y-4">
          {project.approach.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="mt-0.5 font-mono text-[11px] text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-lg font-semibold tracking-tight text-ink">Key decisions</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.decisions.map((decision) => (
            <div key={decision.title} className="rounded-xl border border-line bg-canvas/60 p-5">
              <p className="text-sm font-medium text-ink">{decision.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{decision.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold tracking-tight text-ink">Outcome</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.outcome}</p>
        <div className="mt-6 grid grid-cols-3 gap-4 border-y border-line py-5">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-mono text-lg text-accent">{metric.value}</p>
              <p className="mt-1 text-[11px] leading-snug text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold tracking-tight text-ink">Stack</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <StackColumn label="Hardware" items={project.hardware} />
          <StackColumn label="Software & process" items={project.software} />
        </div>
      </section>

      <div className="flex items-center gap-3 border-t border-line pt-6">
        <IconBadge name={project.icon} size="sm" />
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          {project.index} / {project.category} / {project.year}
        </p>
      </div>
    </div>
  )
}
