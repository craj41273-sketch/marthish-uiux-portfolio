import { site } from '../../data/site'
import { getIcon } from '../../lib/icons'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { Button } from '../ui/Button'

const ArrowUp = getIcon('ArrowUp')

export function Footer() {
  const { copied, copy } = useCopyToClipboard()

  return (
    <>
      <section id="contact" className="section-pad scroll-mt-24 border-t border-line bg-surface/30">
        <div className="container-content grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mono-label mb-5 text-accent">Contact</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Let&apos;s build something people understand.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
              I&apos;m looking for product design roles and collaborations where engineering rigor
              and human-centered thinking belong in the same conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={`mailto:${site.email}`} icon="Mail">
                Email me
              </Button>
              <Button
                variant="ghost"
                icon={copied ? 'Check' : 'Copy'}
                onClick={() => copy(site.email)}
              >
                {copied ? 'Copied' : 'Copy email'}
              </Button>
            </div>
          </div>

          <div className="rounded-card border border-line bg-surface p-6">
            <p className="mono-label text-muted">Direct line</p>
            <p className="mt-3 break-all font-mono text-sm text-ink">{site.email}</p>
            <div className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-muted">
              <p>{site.location}</p>
              <p className="text-accent">{site.availability}</p>
            </div>
            <div className="mt-6 flex gap-2">
              {site.socials.map((social) => {
                const Icon = getIcon(social.icon)
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition duration-200 hover:border-accent/50 hover:text-accent"
                  >
                    <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="container-content flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. Hardware discipline, design empathy.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 transition hover:text-accent"
            >
              Back to top
              <ArrowUp size={13} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
