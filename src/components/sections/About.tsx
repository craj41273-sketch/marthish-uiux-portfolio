import { site } from '../../data/site'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

const focusAreas = ['Product thinking', 'Interaction design', 'Design systems', 'Hardware-aware UX']

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering discipline. Design empathy."
      description="A short version of the transition from circuits and code to people and products."
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <Reveal>
          <div className="space-y-5 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              I started in Electronics and Communication Engineering, building systems that sense
              their environment and respond to it. That work taught me to respect constraints:
              a noisy signal, a slow loop, a limited display. Every decision had a consequence
              someone could feel.
            </p>
            <p>
              Product design appealed to me for the same reason. The interface is the last stage
              of a long signal chain — and it is the part a person actually touches. I moved into
              UI/UX to work closer to that moment, using research and prototypes to make complex
              systems feel understandable.
            </p>
            <p>
              Today I bring both sides with me. I sketch before I style, I test before I polish,
              and I care as much about the state of a component as I do about the colour of a
              button.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card className="p-6 sm:p-7">
            <p className="mono-label text-muted">Currently</p>
            <p className="mt-3 text-sm leading-relaxed text-ink">{site.availability}</p>
            <div className="mt-6 border-t border-line pt-6">
              <p className="mono-label text-muted">Based in</p>
              <p className="mt-2 text-sm text-ink">{site.location}</p>
            </div>
            <div className="mt-6 border-t border-line pt-6">
              <p className="mono-label text-muted">Focus areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Tag key={area}>{area}</Tag>
                ))}
              </div>
            </div>
            <div className="mt-8 border-t border-line pt-6">
              <Button href={site.resumeUrl} download icon="Download" variant="ghost" className="w-full">
                Download Resume
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
