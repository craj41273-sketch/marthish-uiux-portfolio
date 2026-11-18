import { useEffect, useRef, useState } from 'react'

import { Section } from '../layout/Section'
import { Button } from '../ui/Button'

type Chapter = {
  value: string
  label: string
  href: string
  text: string
}

const chapters: Chapter[] = [
  {
    value: 'home',
    label: 'Home',
    href: '#top',
    text: 'The short version: hardware discipline meeting human-centered interfaces.',
  },
  {
    value: 'work',
    label: 'Work',
    href: '#work',
    text: 'Three case studies that start with a constraint and end with an interface.',
  },
  {
    value: 'process',
    label: 'Process',
    href: '#process',
    text: 'How I move from signal and research to a tested, understandable product.',
  },
  {
    value: 'about',
    label: 'About',
    href: '#about',
    text: 'The transition from Electronics & Communication Engineering into design.',
  },
  {
    value: 'contact',
    label: 'Contact',
    href: '#contact',
    text: 'Open to product design roles and collaborations where rigor and empathy meet.',
  },
]

type SakugaChangeDetail = {
  index: number
  value: string
  label: string
}

export function SakugaChapters() {
  const [active, setActive] = useState(0)
  const tabsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = tabsRef.current
    if (!el) return

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<SakugaChangeDetail>).detail
      if (typeof detail?.index === 'number') setActive(detail.index)
    }

    el.addEventListener('change', onChange)
    return () => el.removeEventListener('change', onChange)
  }, [])

  return (
    <Section
      id="chapters"
      eyebrow="Quick chapters"
      title="Pick a lane."
      description="A faster way around the portfolio — the tabs draw themselves; the panel below is ours."
    >
      <div className="max-w-3xl">
        <sakuga-tabs ref={tabsRef} label="Portfolio chapters">
          {chapters.map((chapter) => (
            <option key={chapter.value} value={chapter.value}>
              {chapter.label}
            </option>
          ))}
        </sakuga-tabs>

        <div className="mt-8 min-h-28 rounded-xl border border-line bg-surface/60 p-6">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.value}
              role="tabpanel"
              aria-label={chapter.label}
              hidden={active !== index}
              className="flex flex-wrap items-center justify-between gap-4"
            >
              <p className="max-w-xl text-sm leading-relaxed text-muted">{chapter.text}</p>
              <Button href={chapter.href} variant="ghost" icon="ArrowUpRight">
                Go to {chapter.label}
              </Button>
            </div>
          ))}
        </div>

        <p className="mono-label mt-4 text-muted">
          Selected: {chapters[active]?.label} · {chapters[active]?.value}
        </p>
      </div>
    </Section>
  )
}
