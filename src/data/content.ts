import type { ProcessStep, SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'design',
    eyebrow: 'Discipline 01',
    title: 'UI/UX Design & Research',
    description:
      'Turning ambiguous needs into interfaces people can actually use — with evidence, not guesswork.',
    accent: 'design',
    skills: [
      { name: 'Figma', note: 'Wireframes, components, prototypes', icon: 'Figma' },
      { name: 'Wireframing', note: 'Flows before pixels', icon: 'PenTool' },
      { name: 'Usability Testing', note: 'Moderated and lightweight', icon: 'Users' },
      { name: 'Design Systems', note: 'Tokens, states, documentation', icon: 'LayoutTemplate' },
    ],
  },
  {
    id: 'engineering',
    eyebrow: 'Discipline 02',
    title: 'ECE & Prototyping',
    description:
      'The hardware foundation that shapes how I think about constraints, signals and feedback.',
    accent: 'engineering',
    skills: [
      { name: 'IoT', note: 'ESP32, Wi-Fi telemetry', icon: 'Radio' },
      { name: 'Embedded C', note: 'Microcontroller logic', icon: 'Code2' },
      { name: 'Sensors', note: 'Signal conditioning', icon: 'Gauge' },
      { name: 'Signal Processing', note: 'Filtering and thresholds', icon: 'Waves' },
      { name: 'Circuit Prototyping', note: 'Schematic to breadboard', icon: 'CircuitBoard' },
      { name: 'Frontend Code', note: 'React, TypeScript, Tailwind', icon: 'Code2' },
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Research & Frame',
    description: 'Understand the person, the constraint and the real question behind the request.',
    icon: 'Search',
  },
  {
    index: '02',
    title: 'Prototype',
    description: 'Sketch flows and build the smallest clickable version that can be tested.',
    icon: 'PenTool',
  },
  {
    index: '03',
    title: 'Validate',
    description: 'Watch people use it, measure confusion and revise before styling details.',
    icon: 'FlaskConical',
  },
  {
    index: '04',
    title: 'Systematise',
    description: 'Document tokens, states and components so the design survives handoff.',
    icon: 'Boxes',
  },
]
