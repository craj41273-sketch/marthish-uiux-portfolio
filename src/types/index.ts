export type IconName =
  | 'Activity'
  | 'ArrowUp'
  | 'ArrowUpRight'
  | 'Boxes'
  | 'Check'
  | 'CircuitBoard'
  | 'Code2'
  | 'Copy'
  | 'Cpu'
  | 'Download'
  | 'Figma'
  | 'FlaskConical'
  | 'Gauge'
  | 'Github'
  | 'LayoutTemplate'
  | 'Linkedin'
  | 'Mail'
  | 'Menu'
  | 'PenTool'
  | 'Radio'
  | 'Search'
  | 'Users'
  | 'Waves'
  | 'X'
  | 'Zap'

export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: IconName
}

export type SiteContent = {
  name: string
  initials: string
  role: string
  email: string
  location: string
  availability: string
  resumeUrl: string
  nav: NavItem[]
  socials: SocialLink[]
}

export type CaseStudyCategory = 'IoT' | 'Wearable' | 'Diagnostics'

export type CaseStudy = {
  slug: string
  index: string
  title: string
  subtitle: string
  category: CaseStudyCategory
  year: string
  span: 'wide' | 'standard'
  icon: IconName
  summary: string
  hardware: string[]
  software: string[]
  role: string
  timeline: string
  challenge: string
  approach: string[]
  decisions: { title: string; body: string }[]
  outcome: string
  metrics: { value: string; label: string }[]
}

export type Skill = {
  name: string
  note: string
  icon: IconName
}

export type SkillGroup = {
  id: string
  eyebrow: string
  title: string
  description: string
  accent: 'design' | 'engineering'
  skills: Skill[]
}

export type ProcessStep = {
  index: string
  title: string
  description: string
  icon: IconName
}
