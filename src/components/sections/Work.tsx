import { projects } from '../../data/projects'
import { Section } from '../layout/Section'
import { Reveal } from '../ui/Reveal'
import { CaseStudyCard } from './CaseStudyCard'

export function Work() {
  return (
    <Section
      id="work"
      eyebrow={`Selected work / ${String(projects.length).padStart(2, '0')} case studies`}
      title="Interfaces shaped by the hardware behind them."
      description="Three projects where an engineering understanding of sensors, limits and feedback became the foundation for a clearer user experience."
      className="border-t border-line bg-surface/20"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            delay={index * 90}
            className={project.span === 'wide' ? 'lg:col-span-2' : undefined}
          >
            <CaseStudyCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
