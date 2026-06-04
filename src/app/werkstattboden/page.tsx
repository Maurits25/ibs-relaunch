import type { Metadata } from 'next'
import { ServicePage } from '@/components/pages/ServicePage'
import { TOPIC_BY_SLUG } from '@/data/topics'
import { buildMetadata } from '@/lib/seo/meta'

const SLUG = 'werkstattboden'
const t = TOPIC_BY_SLUG[SLUG]

export const metadata: Metadata = buildMetadata({
  path: t.href,
  title: t.metaTitle.replace(' | IBS', '').replace(' | IBS Schmäing', ''),
  description: t.metaDescription,
  keywords: t.keywords,
})

export default function Page() {
  return <ServicePage service={t} />
}
