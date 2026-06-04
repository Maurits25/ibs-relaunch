import type { Metadata } from 'next'
import { ServicePage } from '@/components/pages/ServicePage'
import { EINSATZBEREICH_BY_SLUG } from '@/data/einsatzbereiche-pages'
import { buildMetadata } from '@/lib/seo/meta'

const SLUG = 'showroom-praxis'
const e = EINSATZBEREICH_BY_SLUG[SLUG]

export const metadata: Metadata = buildMetadata({
  path: e.href,
  title: e.metaTitle.replace(' | IBS', '').replace(' | IBS Schmäing', ''),
  description: e.metaDescription,
  keywords: e.keywords,
})

export default function Page() {
  return <ServicePage service={e} />
}
