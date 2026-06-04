import type { Metadata } from 'next'
import { ServicePage } from '@/components/pages/ServicePage'
import { SERVICE_BY_SLUG } from '@/data/services'
import { buildMetadata } from '@/lib/seo/meta'

const SLUG = 'versiegelungen'
const s = SERVICE_BY_SLUG[SLUG]

export const metadata: Metadata = buildMetadata({
  path: s.href,
  title: s.metaTitle.replace(' | IBS Schmäing', ''),
  description: s.metaDescription,
  keywords: s.keywords,
})

export default function Page() {
  return <ServicePage service={s} />
}
