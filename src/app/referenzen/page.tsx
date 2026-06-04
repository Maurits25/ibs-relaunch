import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { buildMetadata } from '@/lib/seo/meta'

export const metadata: Metadata = buildMetadata({
  path: '/referenzen/',
  title: 'Referenzen & Projekte – Industrieböden, Werkstatt, Showroom',
  description:
    'Eine Auswahl realisierter Projekte: Industriehallen, Werkstätten, Logistikflächen, WHG-Auffangräume, Steinteppich, Designböden. Aus dem Tagesgeschäft von IBS Schmäing.',
})

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Projekte, die für sich sprechen."
        description="Diese und viele weitere Projekte durften wir bereits realisieren — vom kleinen Garagenboden bis zur mehrere tausend Quadratmeter großen Industriehalle."
        crumbs={[{ name: 'Start', href: '/' }, { name: 'Referenzen', href: '/referenzen/' }]}
        image="/images/projects/projekt-2019-1.jpg"
      />
      <Section variant="light">
        <div className="container max-w-screen-2xl">
          <ProjectGallery />
        </div>
      </Section>
      <CTASection />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Start', href: '/' },
        { name: 'Referenzen', href: '/referenzen/' },
      ])} />
    </>
  )
}
