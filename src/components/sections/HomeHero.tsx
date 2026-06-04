import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { SITE } from '@/data/site'

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ibs-ink text-white">
      {/* Hintergrund: bestehendes Original-Bild + Gradient-Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/scenes/wide-empty-production-hall.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ibs-ink via-ibs-ink/85 to-ibs-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ibs-ink/95 via-ibs-ink/30 to-ibs-ink/60" />
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]" />
      </div>

      <div className="container max-w-screen-2xl pt-fluid-7 pb-fluid-8 lg:pt-fluid-8 lg:pb-fluid-9">
        <div className="grid items-center gap-fluid-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow text-ibs-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-ibs-signal" />
              Fachbetrieb für Industrie­bodensanierung · Bocholt
            </span>

            <h1 className="mt-5 heading-1 text-balance text-white">
              Industrieböden{' '}
              <span className="relative inline-block">
                <span className="relative z-10">sanieren,&nbsp;beschichten,&nbsp;schützen.</span>
                <span aria-hidden className="absolute -inset-x-1 bottom-1 h-3 -z-0 bg-ibs-accent/40 blur-sm rounded-full" />
              </span>
            </h1>

            <p className="mt-6 lede max-w-2xl text-ibs-fog">
              {SITE.legalName} ist Ihr Fachbetrieb für Bodensanierung, Epoxidharz­beschichtungen nach WHG,
              Versiegelungen, Parkhausbeschichtungen nach OS-11a/b, Steinteppich und Designböden. Aus Bocholt am Niederrhein — seit {SITE.founded}, mit über {SITE.ownerExperienceYears} Jahren persönlicher Erfahrung.
            </p>

            <div className="mt-fluid-5 flex flex-wrap gap-3">
              <Button href="/anfrage/" size="lg">
                Projekt anfragen
                <Icon name="arrow-right" size={18} />
              </Button>
              <Button href="/anfrage/" variant="outline-light" size="lg">
                <Icon name="upload" size={18} />
                Fotos hochladen
              </Button>
              <Button href="/leistungen/" variant="outline-light" size="lg">
                Leistungen ansehen
              </Button>
            </div>

            <ul className="mt-fluid-5 grid max-w-2xl gap-2 sm:grid-cols-2">
              {[
                'Vor-Ort-Beratung kostenfrei',
                'Auch im laufenden Betrieb',
                'Reaktionsharz – schnell befahrbar',
                'WHG · ESD · R9–R13',
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-fluid-sm text-ibs-fog">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ibs-accent/20 text-ibs-accent">
                    <Icon name="check" size={14} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Schnellanfrage-Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/95 p-fluid-4 text-ibs-ink shadow-card backdrop-blur ring-1 ring-white/20">
              <div className="absolute -top-3 left-5 inline-flex items-center gap-2 rounded-full bg-ibs-accent px-3 py-1 text-fluid-xs font-semibold text-white shadow-sm">
                <Icon name="sparkles" size={14} /> Schnellanfrage
              </div>
              <h2 className="heading-3 text-balance">Schicken Sie uns Fotos – wir geben eine erste Einschätzung.</h2>
              <p className="mt-2 text-fluid-sm text-ibs-steel">
                Beschreiben Sie Ihr Projekt in ein paar Sätzen oder laden Sie Fotos und Pläne hoch. Wir melden uns kurzfristig zur Abstimmung.
              </p>
              <div className="mt-5 grid gap-2">
                <Link
                  href="/anfrage/"
                  className="group flex items-center gap-3 rounded-xl bg-ibs-mist p-3 hover:bg-ibs-fog/60 transition"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ibs-accent text-white"><Icon name="upload" size={18} /></span>
                  <span className="flex-1">
                    <span className="block font-semibold">Anfrage mit Foto-Upload</span>
                    <span className="block text-fluid-xs text-ibs-steel">Sicher, ohne Registrierung</span>
                  </span>
                  <Icon name="arrow-up-right" size={18} className="text-ibs-steel transition group-hover:text-ibs-accent" />
                </Link>
                <a
                  href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-3 rounded-xl bg-ibs-mist p-3 hover:bg-ibs-fog/60 transition"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ibs-ink text-white"><Icon name="phone" size={18} /></span>
                  <span className="flex-1">
                    <span className="block font-semibold">{SITE.contact.phoneDisplay}</span>
                    <span className="block text-fluid-xs text-ibs-steel">Direkt sprechen – {SITE.owner}</span>
                  </span>
                  <Icon name="arrow-up-right" size={18} className="text-ibs-steel transition group-hover:text-ibs-accent" />
                </a>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="group flex items-center gap-3 rounded-xl bg-ibs-mist p-3 hover:bg-ibs-fog/60 transition"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ibs-steel text-white"><Icon name="mail" size={18} /></span>
                  <span className="flex-1">
                    <span className="block font-semibold break-all">{SITE.contact.email}</span>
                    <span className="block text-fluid-xs text-ibs-steel">Schreiben Sie uns direkt</span>
                  </span>
                  <Icon name="arrow-up-right" size={18} className="text-ibs-steel transition group-hover:text-ibs-accent" />
                </a>
              </div>
              <p className="mt-4 text-fluid-xs text-ibs-steel">
                Ihre Anfrage wird vertraulich behandelt. Vor-Ort-Termin und Kostenvoranschlag sind kostenfrei.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorative untere Trennung */}
      <div aria-hidden className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  )
}
