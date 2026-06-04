import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = buildMetadata()

export const viewport: Viewport = {
  themeColor: '#0E1417',
  width: 'device-width',
  initialScale: 1,
  // KEIN maximumScale (WCAG 2.1 AA 1.4.4 — Pinch-Zoom unbeschränkt erlauben)
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-ibs-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main" className="flex-1 pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <ScrollReveal />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  )
}
