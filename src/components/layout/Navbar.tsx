import { useEffect, useState } from 'react'

import { site } from '../../data/site'
import { cn } from '../../lib/cn'
import { getIcon } from '../../lib/icons'
import { Button } from '../ui/Button'
import { IconBadge } from '../ui/IconBadge'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(site.nav[0]?.href ?? '')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    site.nav.forEach((item) => {
      const element = document.getElementById(item.href.slice(1))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const MenuIcon = getIcon(open ? 'X' : 'Menu')

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-line bg-canvas/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-canvas/50',
      )}
    >
      <div className="container-content flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} — top`}>
          <IconBadge name="Cpu" size="sm" />
          <span className="text-sm font-semibold tracking-tight text-ink">
            {site.name}
            <span className="ml-1.5 font-mono text-[11px] font-normal text-muted">
              / {site.initials}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? 'location' : undefined}
              className={cn(
                'rounded-lg px-3 py-2 text-sm transition duration-200',
                active === item.href ? 'text-accent' : 'text-muted hover:text-ink',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={site.resumeUrl} download icon="Download" variant="ghost">
            Download Resume
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon size={18} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="animate-fade-in border-t border-line bg-canvas/95 px-5 pb-6 pt-3 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'border-b border-line/70 py-3 text-sm',
                  active === item.href ? 'text-accent' : 'text-muted',
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-5">
            <Button href={site.resumeUrl} download icon="Download" className="w-full">
              Download Resume
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
