import type { Metadata } from 'next'
import { ServicePage } from '@/components/pages/ServicePage'
import { PROPERTY_BY_SLUG } from '@/data/properties'
import { buildMetadata } from '@/lib/seo/meta'

const SLUG = 'rutschhemmung-r9-r13'
const p = PROPERTY_BY_SLUG[SLUG]

export const metadata: Metadata = buildMetadata({
  path: p.href,
  title: p.metaTitle.replace(' | IBS', '').replace(' | IBS Schmäing', ''),
  description: p.metaDescription,
  keywords: p.keywords,
})

export default function Page() {
  return <ServicePage service={p} />
}
