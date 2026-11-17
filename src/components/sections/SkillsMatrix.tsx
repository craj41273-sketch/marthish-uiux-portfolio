import { skillGroups } from '../../data/content'
import { cn } from '../../lib/cn'
import { Section } from '../layout/Section'
import { IconBadge } from '../ui/IconBadge'
import { Reveal } from '../ui/Reveal'

export function SkillsMatrix() {
  return (
    <Section
      id="skills"
      eyebrow="Dual discipline"
      title="Two toolkits. One way of thinking."
      description="Design gives me the language for people. Engineering gives me the language for systems. Most of my work happens where those two meet."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            delay={index * 100}
            className={index === 0 ? 'lg:border-r lg:border-line lg:pr-12' : 'lg:pl-12'}
          >
            <p className="mono-label text-muted">{group.eyebrow}</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{group.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{group.description}</p>

            <div className="mt-8 border-y border-line">
              {group.skills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-4 border-b border-line/70 py-4 last:border-b-0">
                  <IconBadge name={skill.icon} size="sm" />
                  <div>
                    <p className="text-sm font-medium text-ink">{skill.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{skill.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p
              className={cn(
                'mt-6 font-mono text-[10px] uppercase tracking-[0.14em]',
                group.accent === 'design' ? 'text-accent' : 'text-muted',
              )}
            >
              {group.accent === 'design' ? 'Research → prototype → system' : 'Signal → logic → feedback'}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
