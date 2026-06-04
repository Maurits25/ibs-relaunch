import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { SITE } from '@/data/site'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  variant?: 'dark' | 'accent'
}

export function CTASection({
  eyebrow = 'Bereit für saubere, langlebige Böden?',
  title = 'Lassen Sie uns gemeinsam Ihre Fläche planen.',
  description = 'Beschreiben Sie uns Ihr Projekt in wenigen Sätzen oder schicken Sie uns Fotos und Pläne hoch. Wir melden uns kurzfristig zur Abstimmung – kostenfrei und unverbindlich.',
  variant = 'dark',
}: Props) {
  const isAccent = variant === 'accent'
  return (
    <section
      className={
        'relative overflow-hidden ' +
        (isAccent ? 'bg-ibs-accent text-white' : 'bg-ibs-ink text-white')
      }
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(50%_60%_at_50%_50%,#000,transparent)]" />
      <div className="container max-w-screen-2xl relative py-fluid-7">
        <div className="grid items-center gap-fluid-5 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className={'eyebrow ' + (isAccent ? 'text-white/90' : 'text-ibs-signal')}>{eyebrow}</p>
            <h2 className="mt-3 heading-2 text-white text-balance">{title}</h2>
            <p className="mt-3 lede max-w-2xl text-white/80">{description}</p>
          </div>
          <div className="lg:col-span-4 grid gap-3">
            <Button href="/anfrage/" variant="primary" size="lg" className="w-full">
              <Icon name="upload" size={18} /> Projekt anfragen
            </Button>
            <Button
              href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`}
              variant="outline-light"
              size="lg"
              className="w-full"
            >
              <Icon name="phone" size={18} /> {SITE.contact.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
