import { z } from 'zod'

export const PROJECT_TYPES = [
  'Industriebodensanierung',
  'Epoxidharzbeschichtung',
  'WHG-Beschichtung',
  'Versiegelung',
  'Fugensanierung',
  'Steinteppich',
  'Designboden / Betonoptik',
  'Balkon',
  'Terrasse',
  'Garage',
  'Keller',
  'Reparatur',
  'Sonstiges',
] as const

export const FLOOR_CONDITIONS = [
  'Risse',
  'Löcher / Ausbrüche',
  'Verschmutzt',
  'Uneben',
  'Alte Beschichtung vorhanden',
  'Feuchtigkeit',
  'Nicht bekannt',
] as const

export const ALLOWED_FILE_TYPES = [
  'image/jpeg', 'image/jpg', 'image/png', 'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
]
export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024 // 10 MB
export const MAX_FILES = 10

// React-Hook-Form-tauglich (FileList → File[] auf Client-Seite)
const phoneRegex = /^[+0-9 ()\/.\-]{4,30}$/

export const inquirySchema = z.object({
  name:        z.string().min(2, 'Bitte geben Sie Ihren Namen an.').max(120),
  company:     z.string().max(160).optional().or(z.literal('')),
  email:       z.string().email('Bitte eine gültige E-Mail-Adresse angeben.'),
  phone:       z.string().regex(phoneRegex, 'Bitte gültige Telefonnummer angeben.').optional().or(z.literal('')),
  location:    z.string().max(160).optional().or(z.literal('')),
  projectType: z.enum(PROJECT_TYPES, { errorMap: () => ({ message: 'Bitte Projektart auswählen.' }) }),
  areaSize:    z.string().max(40).optional().or(z.literal('')),
  floorCondition: z.array(z.enum(FLOOR_CONDITIONS)).optional().default([]),
  message:     z.string().min(10, 'Eine kurze Beschreibung hilft uns sehr.').max(4000),
  consent:     z.literal(true, { errorMap: () => ({ message: 'Ohne Ihre Einwilligung können wir Ihre Anfrage nicht entgegennehmen.' }) }),
  // Honeypot — versteckt im Formular; muss leer sein
  website:     z.string().max(0).optional().default(''),
})

export type InquiryFormData = z.infer<typeof inquirySchema>
