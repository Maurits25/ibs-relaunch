'use client'

import { useEffect } from 'react'

/**
 * ScrollReveal aktiviert die Einblend-Animation für `.reveal`-Elemente,
 * sobald sie in den Viewport scrollen. Wichtig: Das CSS versteckt Reveal-Elemente
 * NUR wenn `data-js-ready="true"` auf <html> gesetzt ist — diese Komponente
 * setzt das Flag erst, NACHDEM der IntersectionObserver registriert wurde.
 *
 * Wenn diese Komponente nie läuft (z. B. JS deaktiviert, Hydration-Fehler),
 * bleibt der Content sichtbar — kein Content-Blocker.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    // Wenn IntersectionObserver fehlt: alles sofort sichtbar, kein Flag setzen.
    if (typeof IntersectionObserver === 'undefined' || els.length === 0) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    // Elemente, die beim Mount bereits im Viewport sind, sofort markieren —
    // verhindert sichtbares Flackern.
    const initiallyVisible = new Set<HTMLElement>()
    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
        el.classList.add('is-visible')
        initiallyVisible.add(el)
      }
    })

    // Erst jetzt das Flag setzen — Default-Zustand bleibt für SSR/no-JS sichtbar.
    root.setAttribute('data-js-ready', 'true')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    els.forEach((el) => {
      if (!initiallyVisible.has(el)) io.observe(el)
    })

    // Sicherheits-Fallback: nach 4 s alle verbliebenen einblenden.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible')
      })
    }, 4000)

    return () => {
      io.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  return null
}
