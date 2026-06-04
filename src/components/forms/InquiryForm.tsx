'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  inquirySchema,
  type InquiryFormData,
  PROJECT_TYPES,
  FLOOR_CONDITIONS,
} from '@/lib/forms/schema'
import { FileUpload } from '@/components/forms/FileUpload'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'
import { SITE } from '@/data/site'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const STEPS = [
  { id: 'projekt', label: 'Projekt', fields: ['projectType', 'location', 'areaSize', 'floorCondition'] as const },
  { id: 'uploads', label: 'Fotos & Pläne', fields: [] as const },
  { id: 'kontakt', label: 'Kontakt', fields: ['name', 'company', 'email', 'phone', 'message', 'consent'] as const },
]

export function InquiryForm() {
  const [step, setStep] = useState(0)
  const [files, setFiles] = useState<File[]>([])
  const [status, setStatus] = useState<Status>('idle')
  const [serverMsg, setServerMsg] = useState<string | null>(null)

  const {
    register, handleSubmit, control, trigger,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    mode: 'onTouched',
    defaultValues: {
      name: '', company: '', email: '', phone: '',
      location: '', projectType: 'Industriebodensanierung' as InquiryFormData['projectType'],
      areaSize: '', floorCondition: [], message: '',
      consent: undefined as unknown as true,
      website: '',
    },
  })

  const onSubmit = async (data: InquiryFormData) => {
    setStatus('submitting')
    setServerMsg(null)
    try {
      const fd = new FormData()
      Object.entries(data).forEach(([k, v]) => {
        if (Array.isArray(v)) v.forEach((vv) => fd.append(k, vv))
        else if (v !== undefined && v !== null) fd.append(k, String(v))
      })
      files.forEach((f) => fd.append('files', f, f.name))

      const res = await fetch('/api/inquiry', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Network')
      setStatus('success')
      setServerMsg('Wir haben Ihre Anfrage erhalten und melden uns kurzfristig.')
    } catch {
      setStatus('error')
      setServerMsg(
        `Die Anfrage konnte gerade nicht zugestellt werden. Bitte rufen Sie uns kurz an: ${SITE.contact.phoneDisplay}.`,
      )
    }
  }

  const next = async () => {
    const f = STEPS[step].fields
    const ok = f.length === 0 ? true : await trigger(f as Parameters<typeof trigger>[0])
    if (ok) setStep((s) => Math.min(STEPS.length - 1, s + 1))
  }
  const prev = () => setStep((s) => Math.max(0, s - 1))

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-white p-fluid-5 ring-1 ring-ibs-line shadow-card text-center">
        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ibs-accent/15 text-ibs-accent">
          <Icon name="check" size={28} />
        </div>
        <h2 className="heading-3 text-ibs-ink">Vielen Dank für Ihre Anfrage!</h2>
        <p className="mt-3 lede mx-auto max-w-md">{serverMsg}</p>
        <p className="mt-4 text-fluid-sm text-ibs-steel">
          Direkter Kontakt: <a className="underline" href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`}>{SITE.contact.phoneDisplay}</a>
          {' · '}
          <a className="underline" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl bg-white p-fluid-4 lg:p-fluid-5 ring-1 ring-ibs-line shadow-card">
      {/* Honeypot */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] -top-[9999px]" {...register('website')} />

      {/* Stepper */}
      <ol className="mb-fluid-4 flex items-center gap-2 text-fluid-xs">
        {STEPS.map((s, i) => {
          const active = i === step
          const done = i < step
          return (
            <li key={s.id} className="flex flex-1 items-center gap-2">
              <span
                className={cn(
                  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-semibold ring-1',
                  active ? 'bg-ibs-ink text-white ring-ibs-ink' : done ? 'bg-ibs-accent text-white ring-ibs-accent' : 'bg-white text-ibs-steel ring-ibs-line',
                )}
              >
                {done ? <Icon name="check" size={14} /> : i + 1}
              </span>
              <span className={cn('hidden sm:inline-block font-medium', active ? 'text-ibs-ink' : 'text-ibs-steel')}>
                {s.label}
              </span>
              {i < STEPS.length - 1 && <span className="h-px flex-1 bg-ibs-line" />}
            </li>
          )
        })}
      </ol>

      {step === 0 && (
        <div className="grid gap-fluid-3 md:grid-cols-2">
          <Field label="Art des Projekts *" error={errors.projectType?.message}>
            <select
              {...register('projectType')}
              className="input"
              aria-invalid={!!errors.projectType}
            >
              {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </Field>
          <Field label="Fläche in m²" error={errors.areaSize?.message}>
            <input {...register('areaSize')} placeholder="z. B. 250" className="input" />
          </Field>
          <Field label="Ort / Projektstandort" error={errors.location?.message} className="md:col-span-2">
            <input {...register('location')} placeholder="z. B. Bocholt, Coesfeld, Wesel …" className="input" />
          </Field>
          <Field label="Zustand des Bodens" className="md:col-span-2">
            <Controller
              control={control}
              name="floorCondition"
              render={({ field }) => (
                <div className="flex flex-wrap gap-2">
                  {FLOOR_CONDITIONS.map((c) => {
                    const checked = field.value?.includes(c)
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => {
                          const set = new Set(field.value ?? [])
                          if (set.has(c)) set.delete(c)
                          else set.add(c)
                          field.onChange(Array.from(set))
                        }}
                        className={cn(
                          'rounded-full px-4 py-2 text-fluid-sm font-medium ring-1 transition',
                          checked
                            ? 'bg-ibs-ink text-white ring-ibs-ink'
                            : 'bg-white text-ibs-ink ring-ibs-line hover:bg-ibs-mist',
                        )}
                      >
                        {checked && <Icon name="check" size={14} className="-ml-1 mr-1 inline" />}
                        {c}
                      </button>
                    )
                  })}
                </div>
              )}
            />
          </Field>
        </div>
      )}

      {step === 1 && (
        <Controller
          control={control}
          name="website"  // unused trick – wir nutzen lokalen state für files
          render={() => (
            <FileUpload files={files} onChange={setFiles} />
          )}
        />
      )}

      {step === 2 && (
        <div className="grid gap-fluid-3 md:grid-cols-2">
          <Field label="Name *" error={errors.name?.message}>
            <input {...register('name')} autoComplete="name" className="input" placeholder="Vor- und Nachname" />
          </Field>
          <Field label="Firma" error={errors.company?.message}>
            <input {...register('company')} autoComplete="organization" className="input" />
          </Field>
          <Field label="E-Mail *" error={errors.email?.message}>
            <input {...register('email')} type="email" autoComplete="email" className="input" placeholder="ihre@firma.de" />
          </Field>
          <Field label="Telefon" error={errors.phone?.message}>
            <input {...register('phone')} type="tel" autoComplete="tel" className="input" placeholder="z. B. 02871 / 234 53 00" />
          </Field>
          <Field label="Beschreibung *" error={errors.message?.message} className="md:col-span-2">
            <textarea
              {...register('message')}
              rows={5}
              placeholder="Was ist der Plan? Welche Fläche, welche Nutzung, welche Auflagen? Wann darf gearbeitet werden?"
              className="input min-h-36"
            />
          </Field>

          <Field label="" error={errors.consent?.message} className="md:col-span-2">
            <label className="flex items-start gap-3 rounded-xl bg-ibs-paper p-3 ring-1 ring-ibs-line">
              <input
                {...register('consent')}
                type="checkbox"
                className="mt-1 h-5 w-5 rounded border-ibs-line text-ibs-accent focus:ring-ibs-accent"
              />
              <span className="text-fluid-sm text-ibs-steel">
                Ich willige ein, dass meine Angaben zur Beantwortung der Anfrage gespeichert und verarbeitet werden. Weitere Informationen in der{' '}
                <a href="/datenschutz/" className="underline">Datenschutzerklärung</a>.
              </span>
            </label>
          </Field>
        </div>
      )}

      {/* Footer */}
      <div className="mt-fluid-4 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {step > 0 && (
            <button type="button" onClick={prev} className="btn-ghost">
              Zurück
            </button>
          )}
          <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="btn-ghost">
            <Icon name="phone" size={16} /> {SITE.contact.phoneDisplay}
          </a>
        </div>
        <div className="flex gap-2">
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={next} className="btn-primary">
              Weiter <Icon name="arrow-right" size={16} />
            </button>
          ) : (
            <button type="submit" disabled={status === 'submitting'} className="btn-primary">
              {status === 'submitting' ? 'Senden …' : 'Anfrage absenden'}
              <Icon name="arrow-right" size={16} />
            </button>
          )}
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-fluid-sm text-red-700 ring-1 ring-red-100">
          {serverMsg}
        </p>
      )}

      <p className="mt-4 text-fluid-xs text-ibs-steel">
        Ihre Anfrage wird vertraulich behandelt. Fotos oder Pläne helfen bei der ersten Einschätzung. Wir melden uns zur Abstimmung der nächsten Schritte.
      </p>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.75rem;
          background: white;
          border: 1px solid #E3E7EA;
          padding: 0.75rem 0.9rem;
          font-size: 1rem;
          color: #0E1417;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.input:focus) {
          outline: none;
          border-color: #E87722;
          box-shadow: 0 0 0 3px rgba(232,119,34,0.15);
        }
        :global(.input[aria-invalid="true"]) {
          border-color: #dc2626;
        }
      `}</style>
    </form>
  )
}

function Field({
  label, error, className, children,
}: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={cn('block', className)}>
      {label && <span className="mb-1.5 inline-block text-fluid-sm font-semibold text-ibs-ink">{label}</span>}
      {children}
      {error && <span className="mt-1 inline-block text-fluid-xs text-red-600">{error}</span>}
    </label>
  )
}
