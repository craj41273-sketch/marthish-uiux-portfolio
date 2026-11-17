import type { SiteContent } from '../types'

/**
 * Site-wide content. Replace the email, social links and resume path with
 * real values before publishing. The resume file lives in /public/resume.pdf.
 */
export const site: SiteContent = {
  name: 'Marthish DN',
  initials: 'MD',
  role: 'ECE → Product & UI/UX Design',
  email: 'hello@example.com',
  location: 'Chintamani, Karnataka, India',
  availability: 'Available for product design internships & collaborations',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'Linkedin' },
    { label: 'GitHub', href: 'https://github.com/', icon: 'Github' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'Mail' },
  ],
}
