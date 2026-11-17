import { site } from '../../data/site'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

const signalRows = [
  { index: '01', label: 'Input', value: 'Sensors, constraints, real behaviour' },
  { index: '02', label: 'Translate', value: 'Research, flows, wireframes' },
  { index: '03', label: 'Output', value: 'Interfaces people can trust' },
]

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="container-content grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <Reveal>
          <p className="mono-label mb-6 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {site.role}
          </p>
          <h1 className="max-w-3xl text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.2rem]">
            I bridge embedded systems and{' '}
            <span className="text-accent">human-centered interfaces.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m an Electronics and Communication Engineering graduate moving into Product
            &amp; UI/UX Design. I bring hardware discipline — signal flow, constraints, testing —
            to the design of software that feels clear and dependable.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#work" icon="ArrowUpRight">
              Explore Case Studies
            </Button>
            <Button href={site.resumeUrl} download variant="ghost" icon="Download">
              Resume
            </Button>
          </div>
          <p className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {site.availability}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Card className="p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-line pb-5">
              <span className="mono-label text-muted">Signal path / interface</span>
              <span className="font-mono text-[10px] text-muted">REV 01</span>
            </div>
            <div className="mt-2 border-l border-line pl-6">
              {signalRows.map((row) => (
                <div key={row.index} className="relative py-6">
                  <span className="absolute -left-[30px] top-7 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {row.index} / {row.label}
                  </p>
                  <p className="mt-2 text-sm text-ink">{row.value}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-line pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                Hardware discipline → design empathy
              </span>
              <span className="h-2 w-2 rounded-full border border-accent" aria-hidden="true" />
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
