import type { Metadata } from 'next'
import { SITE } from '@/data/site'

type Options = {
  title?: string
  description?: string
  path?: string         // mit führendem /
  image?: string
  noIndex?: boolean
  keywords?: string[]
}

export function buildMetadata(o: Options = {}): Metadata {
  const url = o.path ? `${SITE.url}${o.path}` : SITE.url
  const title = o.title
    ? `${o.title} | ${SITE.shortName}`
    : SITE.defaultTitle
  const description = o.description ?? SITE.defaultDescription
  const image = o.image ?? '/og/og-default.jpg'

  return {
    metadataBase: new URL(SITE.url),
    title,
    description,
    keywords: o.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE.shortName,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: o.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    icons: {
      icon: '/favicon.ico',
      apple: '/icons/apple-touch-icon.png',
    },
  }
}
