# IBS Industriebodensanierung — Relaunch

Production-ready Relaunch-Projekt für **IBS Industriebodensanierung Schmäing** (Bocholt, Niederrhein).
Modernes Next.js 15 / TypeScript / Tailwind CSS Setup — relaunch-sicher, SEO-stark, conversion­optimiert.

> **Ranking-Schutz:** Sämtliche bestehende URLs der alten WordPress-Site (`/beschichtung/`,
> `/versiegelungen/`, `/ep-estrich/`, `/dekorbelaege/`, `/betonoptik/`, `/balkon/`,
> `/referenzen/`, `/leistungen/`, `/ueber-uns/`, `/service/`, `/kontakt/`, `/impressum/`,
> `/datenschutz/`) bleiben **exakt erhalten** (`trailingSlash: true`).
> Synonym-URLs werden per **301** weitergeleitet. Siehe `content/url-mapping.md`.

---

## Inhaltsverzeichnis

1. [Projektbeschreibung](#projektbeschreibung)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Lokale Entwicklung](#lokale-entwicklung)
5. [Build & Start](#build--start)
6. [Netlify Deployment](#netlify-deployment)
7. [Environment Variablen](#environment-variablen)
8. [Anfrageformular & Datei-Upload](#anfrageformular--datei-upload)
9. [Supabase-Vorbereitung (optional, später)](#supabase-vorbereitung-optional-später)
10. [URL-Struktur & Redirects](#url-struktur--redirects)
11. [SEO-Hinweise](#seo-hinweise)
12. [Assets](#assets)
13. [Platzhalter & offene Punkte](#platzhalter--offene-punkte)
14. [Datenschutz-Hinweis](#datenschutz-hinweis)

---

## Projektbeschreibung

- **Marke:** IBS Industriebodensanierung Schmäing
- **Standort:** Hochfeldstraße 55, 46397 Bocholt
- **Inhaber:** Daniel Schmäing
- **Tätigkeit:** Industriebodensanierung, Epoxidharzbeschichtungen (inkl. WHG),
  Versiegelungen, Fugensanierung, Steinteppich/Dekorbeläge, Designböden in
  Betonoptik, Balkon- und Terrassensanierung — am Niederrhein und in NRW.
- **Erfahrung:** über 20 Jahre.
- **Marken-Materialien:** Remmers, KLB, SIKA, Triflex.

Ziele dieses Relaunches:

- bestehende Google-Rankings zu 100 % erhalten (URL-stabil),
- deutlich modernere Optik (industriell-Premium, Anthrazit/Orange-Akzent),
- bessere Conversion (Sticky CTA, mehrstufiges Anfrageformular, Foto-Upload),
- vollständige technische SEO-Basis (Metadata, JSON-LD, Sitemap, Canonicals, Redirects),
- hochwertige UX auf jedem Gerät (Fluid Typography, kein Layout-Bruch).

---

## Tech Stack

- **Next.js 15** (App Router) — SSR/SSG, statische Optimierung, Image Optimization
- **React 19**
- **TypeScript 5** (strict)
- **Tailwind CSS 3** mit projekt­spezifischem Design-System (`tailwind.config.ts`)
- **React Hook Form + Zod** für Formular-Validierung
- **next/font** (Inter) — selbst gehostet, keine externen Google-Font-Requests
- **Eigenes Icon-Set** als Inline-SVG (kein Library-Gewicht)

---

## Installation

Voraussetzungen: **Node 20+** (lokal Node 24 getestet), npm 10+.

```bash
npm install
```

## Lokale Entwicklung

```bash
npm run dev
# http://localhost:3000
```

## Build & Start

```bash
npm run build
npm start
```

Type-Check separat:

```bash
npm run typecheck
```

---

## Netlify Deployment

`netlify.toml` ist mitgeliefert. Im Netlify-Dashboard:

1. Repository verbinden.
2. Build-Command: `npm run build`, Publish: `.next`.
3. Plugin `@netlify/plugin-nextjs` wird automatisch via `netlify.toml` aktiviert.
4. Environment Variablen setzen (siehe unten).
5. Domain `ibs-industriebodensanierung.de` zuweisen — **www → root** als 301.

`public/_redirects` enthält bewusst zusätzliche Redirects für Legacy- und Synonym-URLs
(`/sanierung → /versiegelungen/`, `/steinteppich → /dekorbelaege/`, …).

---

## Environment Variablen

`.env.example` ist mitgeliefert:

```dotenv
NEXT_PUBLIC_SITE_URL=https://ibs-industriebodensanierung.de

# Für spätere Backend-Aktivierung (aktuell NICHT verwendet):
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Optional für Versand per Resend o. ä.:
# RESEND_API_KEY=
# FORM_MAIL_TO=info@ibs-industriebodensanierung.de
# FORM_MAIL_FROM=anfrage@ibs-industriebodensanierung.de
```

Datei kopieren zu `.env.local` und Werte ergänzen, sobald das Backend angebunden wird.

---

## Anfrageformular & Datei-Upload

- Mehrstufiges Formular (Projekt → Fotos → Kontakt) mit React Hook Form + Zod.
- Drag-&-Drop-Upload, Datei-Vorschau, Entfernen einzelner Dateien.
- **Limits:** 10 Dateien pro Anfrage, max. 10 MB pro Datei.
  Erlaubt: `jpg`, `jpeg`, `png`, `webp`, `pdf`, `doc`, `docx`, `xls`, `xlsx`.
- Honeypot-Feld + serverseitige Zod-Validierung.
- Endpoint: `POST /api/inquiry` (siehe `src/app/api/inquiry/route.ts`).
  Aktuell ohne persistente Speicherung – nimmt die Anfrage entgegen, validiert und
  bestätigt. Backend (Supabase/Resend/Netlify Forms) lässt sich mit wenigen Zeilen
  ergänzen (siehe Kommentare in `route.ts`).

---

## Supabase-Vorbereitung (optional, später)

Wenn das Backend aktiviert werden soll, kann eine Supabase-Instanz eingebunden werden.
Empfohlenes Schema:

### Tabelle `inquiries`

| Spalte             | Typ                       |
|--------------------|---------------------------|
| `id`               | `uuid` PK default `uuid_generate_v4()` |
| `created_at`       | `timestamptz` default `now()` |
| `name`             | `text` not null           |
| `company`          | `text`                    |
| `email`            | `text` not null           |
| `phone`            | `text`                    |
| `location`         | `text`                    |
| `project_type`     | `text` not null           |
| `area_size`        | `text`                    |
| `floor_condition`  | `text[]`                  |
| `message`          | `text` not null           |
| `consent_privacy`  | `boolean` not null        |
| `status`           | `text` default `'new'`    |
| `source_url`       | `text`                    |
| `user_agent`       | `text`                    |

### Tabelle `inquiry_files`

| Spalte         | Typ           |
|----------------|---------------|
| `id`           | `uuid` PK     |
| `inquiry_id`   | `uuid` FK → `inquiries.id` |
| `created_at`   | `timestamptz` default `now()` |
| `file_name`    | `text` not null |
| `file_path`    | `text` not null |
| `file_type`    | `text` not null |
| `file_size`    | `integer` not null |

### Storage Bucket

- Bucket-Name: `inquiry-files`
- **Private** (nur Service Role kann lesen/schreiben).
- Größenlimit pro Datei: 10 MB.

### Row Level Security

- **Beide Tabellen mit RLS aktiviert.**
- Schreibender Zugriff ausschließlich serverseitig über den **Service Role Key**.
- Der Anon Key wird im Browser **niemals** für Anfrage-Inserts benötigt.

> Hinweise zur Aktivierung sind als Kommentar in `src/app/api/inquiry/route.ts` hinterlegt.

---

## URL-Struktur & Redirects

- Alle existierenden URLs bleiben **identisch** erhalten — siehe `content/url-mapping.md`.
- 301-Redirects für Synonyme und WordPress-Reste laufen über `public/_redirects`
  (Netlify) sowie `next.config.mjs` (für lokale `next start`-Sessions).
- `trailingSlash: true` ist global gesetzt, damit alle bestehenden Slash-URLs
  ohne Umweg ausgeliefert werden.
- Sitemap: dynamisch generiert in `src/app/sitemap.ts`. Aufruf: `/sitemap.xml`.
- robots: dynamisch in `src/app/robots.ts`. Aufruf: `/robots.txt`.
- 404: `src/app/not-found.tsx` – hilfreich, verlinkt auf alle Hauptleistungen.

---

## SEO-Hinweise

- **Metadata API:** zentrale Helper in `src/lib/seo/meta.ts` (Titles, Descriptions, Open Graph,
  Canonicals).
- **JSON-LD:** `src/lib/seo/jsonLd.ts` liefert `LocalBusiness`, `WebSite`, `BreadcrumbList`,
  `FAQPage`, `Service`.
- **Pro Seite:** individueller Title, individuelle Meta-Description, exakt eine `<h1>`,
  logische H2/H3, Breadcrumbs, FAQ wo sinnvoll.
- **Fluid Typography** verhindert Layout-Brüche bei langen Zusammensetzungen wie
  „Industriebodensanierung“ und „Epoxidharzbeschichtung“.
- Keyword-Cluster sind in jeder Service-Datei unter `keywords` hinterlegt.

---

## Assets

Alle bestehenden Bilder der alten Website wurden in das Projekt übernommen:

- `/public/images/projects/*` — Referenzbilder & Service-Hero-Bilder
- `/public/images/services/*` — Vorgesehen für Service-spezifische Bilder (verlinkt aus
  `src/data/services.ts`); aktuell nutzen die Service-Hero-Sektionen die Projektbilder.
  Beim Hochladen neuer Service-Bilder die Pfade dort entsprechend ergänzen.
- `/public/images/logos/*` — Logo (`ibs-logo-original.jpg`) und Partner-Logos (Remmers, KLB)

> **Logo:** Das Original-IBS-Logo (`ibs-logo-original.jpg`) liegt unter `/public/images/logos/`.
> Die `Logo`-Komponente (`src/components/ui/Logo.tsx`) nutzt aktuell einen
> hochwertigen Wortmarke-/Logomark-Platzhalter im exakten Markenstil. Sobald eine
> SVG-Version des Logos vorliegt, kann sie als `/public/logo.svg` ergänzt und die
> Komponente entsprechend umgestellt werden.

Optimierungen:
- `next/image` mit automatischen WebP/AVIF-Konvertierungen.
- Lazy Loading außerhalb von Hero-Bildern.
- Responsive `sizes`-Hints in jeder Image-Komponente.

---

## Platzhalter & offene Punkte

| Bereich          | Status                                              |
|------------------|-----------------------------------------------------|
| Logo SVG          | Original liegt als JPG vor — SVG/Vektor optional ergänzen. |
| OG-Image          | Standard-OG (`/og/og-default.jpg`) noch ergänzen.   |
| Favicon-Set       | `/favicon.ico` und `/icons/icon-192.png`, `/icons/icon-512.png` ersetzen. |
| Datenschutz       | Vorlage — vor Veröffentlichung anwaltlich prüfen.   |
| Impressum         | Vorlage — vor Veröffentlichung anwaltlich prüfen.   |
| Backend Anfrage   | `/api/inquiry` ist Stub — Versand / DB anbinden.    |

---

## Datenschutz-Hinweis

- Die Datenschutzerklärung ist eine technisch passende **Vorlage** für die aktuell
  im Code verwendeten Funktionen.
- Es wird im Standardbetrieb **kein Tracking** gesetzt (keine Analytics, kein
  Pixel, kein Cookie-Banner nötig).
- Die Kontakt-Karte verwendet ein Google-Maps-Embed — bei strikteren Anforderungen
  durch ein statisches Karten-Bild ersetzen (Two-Click-Variante).
- Bitte vor Live-Gang durch eine fach­kundige Stelle prüfen lassen.

---

## Lokaler Startbefehl & Build-Befehl

- **Lokal:** `npm run dev` (http://localhost:3000)
- **Build:** `npm run build && npm start`
- **Type-Check:** `npm run typecheck`
