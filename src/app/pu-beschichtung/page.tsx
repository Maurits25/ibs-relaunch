import type { Metadata } from 'next'
import { ServicePage } from '@/components/pages/ServicePage'
import { MATERIAL_BY_SLUG } from '@/data/materials'
import { buildMetadata } from '@/lib/seo/meta'

const SLUG = 'pu-beschichtung'
const m = MATERIAL_BY_SLUG[SLUG]

export const metadata: Metadata = buildMetadata({
  path: m.href,
  title: m.metaTitle.replace(' | IBS', '').replace(' | IBS Schmäing', ''),
  description: m.metaDescription,
  keywords: m.keywords,
})

export default function Page() {
  return <ServicePage service={m} />
}
