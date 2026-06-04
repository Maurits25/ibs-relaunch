import type { Metadata } from 'next'
import { RatgeberPage } from '@/components/pages/RatgeberPage'
import { RATGEBER_BY_SLUG } from '@/data/ratgeber'
import { buildMetadata } from '@/lib/seo/meta'

const SLUG = 'kosten-bodenbeschichtung-pro-m2'
const r = RATGEBER_BY_SLUG[SLUG]

export const metadata: Metadata = buildMetadata({
  path: r.href,
  title: r.metaTitle.replace(' | IBS', '').replace(' | IBS Schmäing', ''),
  description: r.metaDescription,
  keywords: r.keywords,
})

export default function Page() {
  return <RatgeberPage ratgeber={r} />
}
