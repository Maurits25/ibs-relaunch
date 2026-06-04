type Step = { title: string; text: string }

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-fluid-3 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="reveal relative rounded-2xl bg-white p-fluid-4 ring-1 ring-ibs-line shadow-soft"
        >
          <span className="font-display text-fluid-4xl font-extrabold leading-none text-ibs-accent/25">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-3 font-display text-fluid-lg font-bold text-ibs-ink">{s.title.replace(/^\d+\s*·\s*/, '')}</h3>
          <p className="mt-2 text-fluid-sm text-ibs-steel">{s.text}</p>

          {/* Verbindungslinie zwischen Karten (nur Desktop) */}
          {i < steps.length - 1 && (
            <span aria-hidden className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-ibs-line lg:block" />
          )}
        </li>
      ))}
    </ol>
  )
}
