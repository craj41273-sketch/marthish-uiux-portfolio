import { defineTheme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'

/**
 * Astryx theme derived from the neutral base. The light and dark values are
 * intentionally identical: this portfolio is always a dark, low-glare canvas.
 */
export const portfolioTheme = defineTheme({
  name: 'marthish-portfolio',
  extends: neutralTheme,
  tokens: {
    '--color-accent': ['#06B6D4', '#06B6D4'],
    '--color-on-accent': ['#0B0D10', '#0B0D10'],

    '--color-background-body': ['#0B0D10', '#0B0D10'],
    '--color-background-surface': ['#14181F', '#14181F'],
    '--color-background-card': ['#14181F', '#14181F'],
    '--color-background-muted': ['#11151B', '#11151B'],
    '--color-background-popover': ['#1A2029', '#1A2029'],

    '--color-border': ['#232A35', '#232A35'],
    '--color-border-emphasized': ['#2B3543', '#2B3543'],

    '--color-text-primary': ['#E6EDF3', '#E6EDF3'],
    '--color-text-secondary': ['#8B98A8', '#8B98A8'],

    '--font-family-body': 'Inter, ui-sans-serif, system-ui, sans-serif',
    '--font-family-heading': 'Inter, ui-sans-serif, system-ui, sans-serif',
    '--font-family-code': 'JetBrains Mono, ui-monospace, monospace',

    '--radius-element': '10px',
    '--radius-container': '16px',
  },
})
