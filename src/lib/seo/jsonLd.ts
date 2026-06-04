import { SITE } from '@/data/site'

/**
 * LocalBusiness mit AggregateRating (aus echtem Google Business Profile),
 * areaServed-Liste, sameAs für Google-Business-Verknüpfung.
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}#organization`,
    name: SITE.legalName,
    legalName: SITE.legalName,
    url: SITE.url,
    image: `${SITE.url}/logo.svg`,
    logo: `${SITE.url}/logo.svg`,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    foundingDate: String(SITE.founded),
    founder: {
      '@type': 'Person',
      name: SITE.owner,
    },
    vatID: SITE.vatId,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Bocholt, Kreuzstr. 5 — ungefähre Koordinaten
      latitude: 51.838,
      longitude: 6.615,
    },
    areaServed: SITE.serviceArea.map((name) => ({ '@type': 'AdministrativeArea', name })),
    sameAs: [
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.googleBusinessProfileUrl,
    ],
    priceRange: '€€',
    description: SITE.defaultDescription,
    // Echtes AggregateRating aus dem Google Business Profile
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.reviews.ratingValue,
      reviewCount: SITE.reviews.reviewCount,
      bestRating: SITE.reviews.bestRating,
      worstRating: 1,
    },
    knowsAbout: [
      'Industriebodensanierung',
      'Epoxidharz-Bodenbeschichtung',
      'PU-Bodenbeschichtung',
      'PMMA-Beschichtung',
      'WHG-Schutzbeschichtung',
      'Parkhausbeschichtung OS-11a',
      'Parkhausbeschichtung OS-11b',
      'Steinteppich',
      'Designboden Betonoptik',
      'Balkonsanierung',
      'Reaktionsharzestrich',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bodensysteme & Beschichtungen',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industriebodensanierung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Epoxidharz-Bodenbeschichtung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PU-Bodenbeschichtung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PMMA-Schnellbeschichtung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WHG-Schutzbeschichtung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parkhausbeschichtung (OS-11a/b)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Steinteppich' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Designboden / Betonoptik' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Balkonsanierung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reaktionsharzestrich' } },
      ],
    },
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.shortName,
    description: SITE.defaultDescription,
    inLanguage: 'de-DE',
    publisher: { '@id': `${SITE.url}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.href.startsWith('http') ? it.href : `${SITE.url}${it.href}`,
    })),
  }
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function serviceJsonLd(args: {
  name: string
  description: string
  href: string
  image?: string
  serviceType?: string
  audience?: 'B2B' | 'B2C' | 'B2B+B2C'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${args.href}#service`,
    name: args.name,
    serviceType: args.serviceType ?? args.name,
    description: args.description,
    url: `${SITE.url}${args.href}`,
    provider: { '@id': `${SITE.url}#organization` },
    areaServed: SITE.serviceArea.map((name) => ({ '@type': 'AdministrativeArea', name })),
    image: args.image ? `${SITE.url}${args.image}` : undefined,
    audience: args.audience
      ? {
          '@type': 'Audience',
          audienceType: args.audience === 'B2B' ? 'Business' : args.audience === 'B2C' ? 'Consumer' : 'Business and Consumer',
        }
      : undefined,
  }
}

/**
 * HowTo-Schema für Ablauf-Sektionen.
 * AI-Overview-tauglich + Google Rich Result.
 */
export function howToJsonLd(args: {
  name: string
  description: string
  steps: { name: string; text: string }[]
  totalTimeISO?: string  // z. B. "P3D" für 3 Tage
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: args.name,
    description: args.description,
    totalTime: args.totalTimeISO,
    step: args.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

/**
 * Article + Person (Author) für Ratgeber-Seiten.
 */
export function articleJsonLd(args: {
  headline: string
  description: string
  href: string
  image?: string
  datePublished: string  // ISO Datum
  dateModified?: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE.url}${args.href}#article`,
    headline: args.headline,
    description: args.description,
    url: `${SITE.url}${args.href}`,
    image: args.image ? `${SITE.url}${args.image}` : `${SITE.url}/og/og-default.jpg`,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: {
      '@type': 'Person',
      name: args.author ?? SITE.owner,
      jobTitle: 'Inhaber & Sachkundiger Verarbeiter',
      worksFor: { '@id': `${SITE.url}#organization` },
    },
    publisher: { '@id': `${SITE.url}#organization` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}${args.href}`,
    },
  }
}

/**
 * DefinedTerm-Schema für Glossar-Einträge (z. B. OS-Klassen, WHG, ESD, R-Klassen).
 * Macht das Glossar zitierbar für AI Overviews und Knowledge Panels.
 */
export function definedTermJsonLd(args: {
  name: string
  description: string
  href: string
  inDefinedTermSet?: string
  termCode?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${SITE.url}${args.href}#term`,
    name: args.name,
    description: args.description,
    url: `${SITE.url}${args.href}`,
    inDefinedTermSet: args.inDefinedTermSet
      ? { '@type': 'DefinedTermSet', name: args.inDefinedTermSet }
      : undefined,
    termCode: args.termCode,
  }
}

/**
 * Reviews-Liste als zusätzliche Bestätigung — nur einsetzen wenn Reviewer-
 * Einwilligung vorliegt. AggregateRating ist im organizationJsonLd bereits gesetzt.
 */
export function reviewJsonLd(args: {
  reviewBody: string
  ratingValue: number
  author: string
  datePublished?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: args.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: args.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    author: { '@type': 'Person', name: args.author },
    datePublished: args.datePublished,
    itemReviewed: { '@id': `${SITE.url}#organization` },
  }
}
