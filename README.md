# Marthish DN — Product & UI/UX Portfolio

A responsive, dark-mode portfolio for an ECE graduate transitioning into Product & UI/UX Design. Built with Vite, React, TypeScript, Tailwind CSS and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run typecheck   # TypeScript only
npm run build       # typecheck + production build into dist/
npm run preview     # preview the production build
```

## Where to edit things

| What | File |
| --- | --- |
| Case studies (title, copy, stack, decisions, metrics) | `src/data/projects.ts` |
| Name, email, social links, resume path, nav links | `src/data/site.ts` |
| Skills matrix + process steps | `src/data/content.ts` |
| Hero, Work, Skills, Process, About copy/layout | `src/components/sections/*` |
| Navbar + contact footer | `src/components/layout/*` |
| Colours, fonts, radii, motion tokens | `tailwind.config.ts` |
| Global base styles | `src/index.css` |

### Adding a case study

Append an object to the `projects` array in `src/data/projects.ts`. The bento card and the modal both render from that object. `slug` becomes the shareable hash, e.g. `#case-study/my-new-project`.

## Placeholder checklist before publishing

- [ ] Replace `email` and the `mailto:` social link in `src/data/site.ts`
- [ ] Replace social URLs with real profiles
- [ ] Replace `public/resume.pdf` with the real resume
- [ ] Update case study copy with real projects and outcomes
- [ ] Update `index.html` meta/OG description if needed

## Design system

- Canvas `#0B0D10`, elevated cards `#14181F`, raised surfaces `#1A2029`, 1px borders `#232A35`
- Accent `#06B6D4` used sparingly for tags, focus rings and hover states — no gradients
- Inter for UI, JetBrains Mono for technical labels and specs (self-hosted via `@fontsource`)
- 1200px content width, generous section padding, 16px card radius

## Structure

```text
src/
├─ components/
│  ├─ case-study/   # modal + typed content renderer
│  ├─ layout/       # navbar, section wrapper, contact footer
│  ├─ sections/     # hero, work, skills, process, about
│  └─ ui/           # button, card, tag, icon badge, reveal
├─ data/            # projects, site config, skills/process content
├─ hooks/           # hash-linked modal, clipboard
├─ lib/             # classname helper, icon map
├─ types/           # shared TypeScript types
├─ App.tsx
└─ main.tsx
```

## Deploying to GitHub Pages

If you deploy under a subpath, set `base` in `vite.config.ts` to the repository path (for example `base: '/portfolio/'`) before building.

## Accessibility notes

Semantic landmarks, visible focus rings, keyboard-operable bento cards, a dialog with focus trap + Esc + scroll lock, reduced-motion support and AA-minded colour contrast.
