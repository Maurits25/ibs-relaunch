import { NextResponse, type NextRequest } from 'next/server'
import {
  inquirySchema, ALLOWED_FILE_TYPES, MAX_FILE_SIZE_BYTES, MAX_FILES,
} from '@/lib/forms/schema'

/**
 * Anfrage-Endpoint.
 *
 * Aktuell: Stub-Implementierung. Validiert eingehende Daten (inkl. Honeypot &
 * Datei-Limits) und bestätigt den Empfang an den Client.
 *
 * Vorbereitet für Aktivierung mit Supabase / Resend / Netlify Forms:
 *
 * 1) Supabase
 *    - In `inquiries` einfügen (siehe README für Schema).
 *    - Dateien in Bucket `inquiry-files` ablegen, `inquiry_files` verlinken.
 *
 * 2) Resend / SMTP
 *    - Mit RESEND_API_KEY, FORM_MAIL_TO und FORM_MAIL_FROM versenden.
 *
 * 3) Netlify Forms
 *    - Hidden Field `form-name` und URL-encoded POST an `/__forms.html`.
 */
export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()

    // Felder einsammeln
    const obj: Record<string, unknown> = {}
    const files: File[] = []
    const floorCondition: string[] = []

    for (const [k, v] of form.entries()) {
      if (v instanceof File) {
        files.push(v)
      } else if (k === 'floorCondition') {
        floorCondition.push(String(v))
      } else if (k === 'consent') {
        obj[k] = v === 'true'
      } else {
        obj[k] = v
      }
    }
    obj.floorCondition = floorCondition

    // Honeypot
    if (typeof obj.website === 'string' && obj.website.length > 0) {
      return NextResponse.json({ ok: true }, { status: 202 })
    }

    // Validieren
    const parsed = inquirySchema.safeParse(obj)
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 400 },
      )
    }

    // Datei-Limits prüfen
    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { ok: false, message: `Maximal ${MAX_FILES} Dateien.` },
        { status: 413 },
      )
    }
    for (const f of files) {
      if (!ALLOWED_FILE_TYPES.includes(f.type)) {
        return NextResponse.json(
          { ok: false, message: `Dateityp nicht erlaubt: ${f.name}` },
          { status: 415 },
        )
      }
      if (f.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { ok: false, message: `Datei zu groß: ${f.name}` },
          { status: 413 },
        )
      }
    }

    // --- Anbindung an Backend / E-Mail: HIER ergänzen ---
    // Aktuell: erfolgreiches Empfangs-Echo (keine Speicherung).
    if (process.env.NODE_ENV !== 'production') {
      // Hilfreich beim lokalen Testen
      console.info('[inquiry] received', {
        name: parsed.data.name,
        email: parsed.data.email,
        projectType: parsed.data.projectType,
        files: files.map((f) => ({ name: f.name, size: f.size, type: f.type })),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[inquiry] error', e)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

export const runtime = 'nodejs'
