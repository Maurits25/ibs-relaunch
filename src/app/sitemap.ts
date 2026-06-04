import type { MetadataRoute } from 'next'
import { SITE } from '@/data/site'
import { SERVICES } from '@/data/services'
import { TOPIC_PAGES } from '@/data/topics'
import { MATERIAL_PAGES } from '@/data/materials'
import { PROPERTY_PAGES } from '@/data/properties'
import { EINSATZBEREICH_PAGES } from '@/data/einsatzbereiche-pages'
import { RATGEBER } from '@/data/ratgeber'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-04')

  const staticRoutes: { path: string; priority: number; freq: 'monthly' | 'yearly' | 'weekly' }[] = [
    { path: '/',                  priority: 1.0, freq: 'monthly' },
    { path: '/leistungen/',       priority: 0.9, freq: 'monthly' },
    { path: '/referenzen/',       priority: 0.8, freq: 'monthly' },
    { path: '/einsatzbereiche/',  priority: 0.8, freq: 'monthly' },
    { path: '/eigenschaften/',    priority: 0.8, freq: 'monthly' },
    { path: '/ratgeber/',         priority: 0.8, freq: 'weekly'  },
    { path: '/regionen/',         priority: 0.7, freq: 'monthly' },
    { path: '/ablauf/',           priority: 0.7, freq: 'monthly' },
    { path: '/ueber-uns/',        priority: 0.7, freq: 'yearly' },
    { path: '/service/',          priority: 0.7, freq: 'yearly' },
    { path: '/faq/',              priority: 0.7, freq: 'monthly' },
    { path: '/kontakt/',          priority: 0.8, freq: 'yearly' },
    { path: '/anfrage/',          priority: 0.9, freq: 'monthly' },
    { path: '/impressum/',        priority: 0.3, freq: 'yearly' },
    { path: '/datenschutz/',      priority: 0.3, freq: 'yearly' },
  ]

  const collect = (arr: { href: string }[], prio: number, freq: 'monthly' | 'yearly' = 'monthly') =>
    arr.map((x) => ({ path: x.href, priority: prio, freq }))

  return [
    ...staticRoutes,
    // Bestehende Leistungs-Seiten
    ...collect(SERVICES, 0.85),
    // Tier-1 Conversion Hubs
    ...collect(TOPIC_PAGES, 0.9),
    // Material-Pages
    ...collect(MATERIAL_PAGES, 0.85),
    // Eigenschafts-Pages
    ...collect(PROPERTY_PAGES, 0.8),
    // Einsatzbereich-Pages
    ...collect(EINSATZBEREICH_PAGES, 0.8),
    // OS-11 Vergleich (Sub-Page)
    { path: '/einsatzbereiche/parkhaus-tiefgarage/os-11a-vs-os-11b/', priority: 0.7, freq: 'monthly' as const },
    // Ratgeber
    ...collect(RATGEBER, 0.75),
  ].map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
