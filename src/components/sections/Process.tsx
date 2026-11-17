import { processSteps } from '../../data/content'
import { Section } from '../layout/Section'
import { IconBadge } from '../ui/IconBadge'
import { Reveal } from '../ui/Reveal'

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="A loop borrowed from engineering, refined by design."
      description="I treat an interface like a system: define the signal, build the smallest working version, test it with people, then document it so it survives handoff."
      className="border-t border-line bg-surface/20"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step.index} delay={index * 80}>
            <div className="group h-full border-t border-line pt-6 transition duration-300 group-hover:border-accent">
              <div className="flex items-center justify-between">
                <IconBadge name={step.icon} size="sm" />
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                  {step.index}
                </span>
              </div>
              <h3 className="mt-6 text-base font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
