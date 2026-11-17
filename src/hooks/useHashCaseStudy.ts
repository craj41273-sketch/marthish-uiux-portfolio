import { useCallback, useEffect, useState } from 'react'

const PREFIX = '#case-study/'

function readSlug(): string | null {
  const { hash } = window.location
  if (!hash.startsWith(PREFIX)) return null
  try {
    return decodeURIComponent(hash.slice(PREFIX.length)) || null
  } catch {
    return null
  }
}

/**
 * Keeps the case study modal in sync with the URL hash so a case study can be
 * linked, bookmarked and closed with the browser back button.
 */
export function useHashCaseStudy() {
  const [slug, setSlug] = useState<string | null>(readSlug)

  useEffect(() => {
    const sync = () => setSlug(readSlug())
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [])

  const close = useCallback(() => {
    if (!window.location.hash.startsWith(PREFIX)) return
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}`,
    )
    setSlug(null)
  }, [])

  return { slug, close }
}
