import type { CaseStudy } from '../types'

/**
 * The single source of truth for case studies.
 * Add, remove or edit an object here and both the bento grid and the
 * case study modal update automatically. `slug` drives the URL hash.
 */
export const projects: CaseStudy[] = [
  {
    slug: 'smart-iot-energy-dashboard',
    index: '01',
    title: 'Smart IoT Energy Dashboard',
    subtitle: 'From raw telemetry to a calm, decision-ready view of household energy.',
    category: 'IoT',
    year: '2025',
    span: 'wide',
    icon: 'Zap',
    summary:
      'A companion dashboard for an ESP32-based energy monitor. I translated noisy sensor data into a clear hierarchy: live draw, daily trend and the one action worth taking.',
    hardware: ['ESP32', 'CT current sensor', 'OLED readout'],
    software: ['Figma', 'React', 'Usability testing'],
    role: 'Product design & frontend prototype',
    timeline: '6 weeks · individual project',
    challenge:
      'The embedded prototype produced a reading every two seconds, but the first interface exposed every sample. People could see numbers without understanding whether anything needed attention.',
    approach: [
      'Mapped the signal path from CT sensor to dashboard and marked where raw data failed to become meaning.',
      'Sketched three information hierarchies and tested paper prototypes with five peers.',
      'Built a restrained React prototype where cyan marks only readings that need a decision.',
    ],
    decisions: [
      {
        title: 'One primary number',
        body: 'Live wattage sits alone at the top. Trend and history move into secondary rows so the eye lands on the current state first.',
      },
      {
        title: 'Exceptions, not alarms',
        body: 'Cyan is reserved for thresholds that warrant action. Normal readings stay neutral to avoid alert fatigue.',
      },
      {
        title: 'Latency made visible',
        body: 'A mono “last sync” label keeps the hardware loop honest instead of implying precision the sensor cannot deliver.',
      },
    ],
    outcome:
      'The result reads like an instrument panel rather than a debug console. Test participants could answer “is anything wrong?” in under five seconds without coaching.',
    metrics: [
      { value: '5', label: 'usability sessions' },
      { value: '3', label: 'hierarchies tested' },
      { value: '<5s', label: 'time to first insight' },
    ],
  },
  {
    slug: 'wearable-health-monitor-app',
    index: '02',
    title: 'Wearable Health Monitor App',
    subtitle: 'Making pulse and SpO₂ readings legible on a very small screen.',
    category: 'Wearable',
    year: '2025',
    span: 'standard',
    icon: 'Activity',
    summary:
      'A mobile companion concept for a pulse and oxygen sensor. The challenge was not collecting data — it was presenting two fluctuating signals without making the interface feel anxious.',
    hardware: ['Pulse sensor', 'ESP32', 'Li-ion cell'],
    software: ['Figma', 'Mobile prototype', 'Accessibility check'],
    role: 'UX research & interface design',
    timeline: '4 weeks · studio exercise',
    challenge:
      'Early concepts treated every fluctuation as an event. The screen felt noisy, and the accent colour was doing so much work that it stopped meaning anything.',
    approach: [
      'Reviewed clinical-style monitors to learn how they separate signal from noise.',
      'Defined three states — stable, drifting, attention — before drawing screens.',
      'Run a contrast and tap-target pass on the final prototype.',
    ],
    decisions: [
      {
        title: 'Calm by default',
        body: 'The resting state uses neutral text. Colour appears only when a reading leaves its expected band.',
      },
      {
        title: 'Trend over instant',
        body: 'A tiny sparkline carries direction, so a single outlier does not hijack attention.',
      },
      {
        title: 'Mono units',
        body: 'Units and timestamps use JetBrains Mono to echo the technical origin of the data.',
      },
    ],
    outcome:
      'A compact interface that communicates reassurance first and detail on demand — the same discipline I learned reading sensor output, applied to a person reading a screen.',
    metrics: [
      { value: '3', label: 'states defined' },
      { value: '44px', label: 'minimum tap target' },
      { value: 'AA', label: 'contrast target' },
    ],
  },
  {
    slug: 'embedded-diagnostic-ui',
    index: '03',
    title: 'Embedded Diagnostic UI',
    subtitle: 'A field tool that turns UART logs into a clear fault story.',
    category: 'Diagnostics',
    year: '2024',
    span: 'standard',
    icon: 'Cpu',
    summary:
      'An interface concept for technicians debugging STM32 boards in the field. It groups raw serial output into events, likely causes and a next step.',
    hardware: ['STM32', 'UART', 'OLED'],
    software: ['Figma', 'React', 'Design tokens'],
    role: 'Interaction design & design system',
    timeline: '5 weeks · self-initiated',
    challenge:
      'Technicians were scrolling hundreds of unformatted lines to find the one error that mattered. The data was all there; the structure was not.',
    approach: [
      'Sat with two repair workflows and catalogued the questions people asked while troubleshooting.',
      'Built a token set for severity, spacing and monospace labels so logs stayed scannable.',
      'Prototyped a filterable event list with an expandable detail pane.',
    ],
    decisions: [
      {
        title: 'Group before styling',
        body: 'Events are clustered by subsystem first. Severity colour is applied only after grouping, which keeps the list readable.',
      },
      {
        title: 'Detail on demand',
        body: 'Raw UART lines stay one click away. The summary is the default, not the exception.',
      },
      {
        title: 'Shared tokens',
        body: 'A small token file keeps the React prototype and the Figma components in agreement.',
      },
    ],
    outcome:
      'A diagnostic view that respects the technician’s expertise: fast to scan, honest about uncertainty, and never hiding the raw signal when it is needed.',
    metrics: [
      { value: '2', label: 'workflows observed' },
      { value: '18', label: 'design tokens' },
      { value: '1 click', label: 'to raw log' },
    ],
  },
]
