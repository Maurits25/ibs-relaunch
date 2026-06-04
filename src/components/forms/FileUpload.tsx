'use client'

import { useCallback, useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE_BYTES, MAX_FILES } from '@/lib/forms/schema'
import { cn } from '@/lib/cn'

type Props = {
  files: File[]
  onChange: (files: File[]) => void
  className?: string
}

function formatSize(b: number) {
  if (b < 1024) return `${b} B`
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(0)} KB`
  return `${(b / 1024 / 1024).toFixed(1)} MB`
}

export function FileUpload({ files, onChange, className }: Props) {
  const [drag, setDrag] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [previews, setPreviews] = useState<Record<string, string>>({})

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      setError(null)
      const newFiles = Array.from(incoming)
      const next: File[] = [...files]

      for (const f of newFiles) {
        if (next.length >= MAX_FILES) {
          setError(`Maximal ${MAX_FILES} Dateien pro Anfrage.`)
          break
        }
        if (!ALLOWED_FILE_TYPES.includes(f.type)) {
          setError(`Dateityp nicht erlaubt: ${f.name}. Erlaubt sind Bilder, PDF und Office-Dokumente.`)
          continue
        }
        if (f.size > MAX_FILE_SIZE_BYTES) {
          setError(`Datei zu groß: ${f.name}. Maximal 10 MB pro Datei.`)
          continue
        }
        // Duplikate vermeiden
        if (next.some((x) => x.name === f.name && x.size === f.size)) continue
        next.push(f)
      }

      onChange(next)
    },
    [files, onChange],
  )

  useEffect(() => {
    const map: Record<string, string> = {}
    files.forEach((f) => {
      if (f.type.startsWith('image/')) {
        map[`${f.name}-${f.size}`] = URL.createObjectURL(f)
      }
    })
    setPreviews(map)
    return () => {
      Object.values(map).forEach((url) => URL.revokeObjectURL(url))
    }
  }, [files])

  return (
    <div className={className}>
      <label
        htmlFor="file-input"
        onDragEnter={(e) => { e.preventDefault(); setDrag(true) }}
        onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDrag(false)
          if (e.dataTransfer.files) addFiles(e.dataTransfer.files)
        }}
        className={cn(
          'relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-fluid-4 text-center transition-colors',
          drag
            ? 'border-ibs-accent bg-ibs-accent/5'
            : 'border-ibs-line bg-ibs-paper hover:border-ibs-concrete hover:bg-ibs-mist',
        )}
      >
        <input
          id="file-input"
          type="file"
          multiple
          accept={ALLOWED_FILE_TYPES.join(',')}
          className="sr-only"
          onChange={(e) => { if (e.target.files) addFiles(e.target.files) }}
        />
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ibs-ink text-white">
          <Icon name="upload" />
        </span>
        <p className="font-semibold text-ibs-ink">Fotos, Pläne oder PDFs hochladen</p>
        <p className="text-fluid-xs text-ibs-steel">
          Drag &amp; Drop oder klicken — max. {MAX_FILES} Dateien, je 10 MB.
          <br />Erlaubt: JPG, PNG, WebP, PDF, DOC, DOCX, XLS, XLSX
        </p>
      </label>

      {error && (
        <p role="alert" className="mt-3 text-fluid-sm text-red-600">
          {error}
        </p>
      )}

      {files.length > 0 && (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {files.map((f, i) => {
            const previewUrl = previews[`${f.name}-${f.size}`]
            return (
              <li key={`${f.name}-${i}`} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-ibs-line">
                {previewUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={previewUrl} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
                ) : (
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ibs-mist text-ibs-steel font-semibold uppercase text-fluid-xs">
                    {f.name.split('.').pop()}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-fluid-sm text-ibs-ink">{f.name}</p>
                  <p className="text-fluid-xs text-ibs-steel">{formatSize(f.size)}</p>
                </div>
                <button
                  type="button"
                  aria-label={`${f.name} entfernen`}
                  onClick={() => onChange(files.filter((_, idx) => idx !== i))}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ibs-steel hover:bg-ibs-mist hover:text-red-600"
                >
                  <Icon name="x" size={16} />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
