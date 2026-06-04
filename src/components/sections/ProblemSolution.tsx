import { Icon } from '@/components/ui/Icon'

type Item = { title: string; text: string }

export function ProblemSolution({
  problems,
  solution,
}: {
  problems: Item[]
  solution: { title: string; text: string; bullets: string[] }
}) {
  return (
    <div className="grid gap-fluid-5 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow">Das Problem</p>
        <h2 className="mt-3 heading-2 text-ibs-ink">Diese Schäden bringen Stillstand und Kosten.</h2>
        <ul className="mt-fluid-4 space-y-3">
          {problems.map((p) => (
            <li
              key={p.title}
              className="reveal flex gap-3 rounded-xl bg-white p-4 ring-1 ring-ibs-line shadow-soft"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <Icon name="x" size={16} />
              </span>
              <div>
                <p className="font-semibold text-ibs-ink">{p.title}</p>
                <p className="text-fluid-sm text-ibs-steel">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-7">
        <p className="eyebrow">Unsere Lösung</p>
        <h2 className="mt-3 heading-2 text-ibs-ink">{solution.title}</h2>
        <p className="mt-3 lede max-w-2xl">{solution.text}</p>
        <ul className="mt-fluid-4 grid gap-3 sm:grid-cols-2">
          {solution.bullets.map((b) => (
            <li
              key={b}
              className="reveal flex items-start gap-3 rounded-xl bg-ibs-paper p-4 ring-1 ring-ibs-line"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ibs-accent/15 text-ibs-accent">
                <Icon name="check" size={14} />
              </span>
              <p className="text-fluid-sm text-ibs-ink font-medium">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
