# IBS Relaunch — Abschluss-Audit

> Bewertung durch die 19 internen Expertenrollen.
> Stand: Initial Release Build.

---

## 1. Projektleitung
- **Anforderungen:** alle 32 Punkte des Briefings adressiert. Einschränkung gemäß Brief: kein
  aktives Supabase-Backend (lediglich Vorbereitung).
- **Build:** `next build` ✓, `tsc --noEmit` ✓, 24 statisch prerenderte Routen.

## 2. Senior Next.js Architektur
- App Router (Next.js 15), strikte Trennung Daten/UI/Logik, `trailingSlash: true`,
  `metadataBase`, dynamische Sitemap + robots, Image Optimization aktiviert.

## 3. Senior TypeScript
- `strict: true`, alle Typen explizit, zentrale Schema-Datei für Formular (`zod`).

## 4. Frontend Engineering
- Reusable UI (Button, Logo, Icon, Section, Container, ScrollReveal).
- Sections (HomeHero, PageHero, ProblemSolution, ProcessSteps, IndustryCards,
  ServiceGrid, ProjectGallery, FAQAccordion, CTASection, TrustBar, PartnerStrip,
  SectionIntro, BeforeAfter).
- Forms (InquiryForm mit Multi-Step + FileUpload + Drag/Drop + Preview).

## 5. UI-Design
- Premium Industrial Look: Anthrazit (`#0E1417`), Beton-Grau, Orange-Akzent (`#E87722`).
- Konsistentes Spacing-System mit Fluid-Werten, Card-Schatten, abgestimmte Border-Radien.
- Bestehende Markenfarbwelt erhalten — modernisiert, nicht ersetzt.

## 6. UX-Design
- Sticky Header, Offcanvas-Navigation auf Mobile, sticky CTA-Leiste unten.
- Klare Pfade: jeder Bereich endet mit CTA. Kontakt + Anfrage in 1 Klick erreichbar.
- ScrollReveal-Animationen, dezent, mit Reduced-Motion-Fallback.

## 7. Conversion-Optimierung
- Hero mit Twin-CTA + Schnellanfrage-Card (Anrufen/Mail/Upload).
- 4 prominente Kontaktpfade in jeder Sektion.
- Multi-Step-Formular: weniger Reibung, klare Fortschrittsanzeige.

## 8. Technisches SEO
- Pro Seite: individueller Title + Meta Description + Canonical + OpenGraph + Twitter.
- JSON-LD: LocalBusiness, WebSite, BreadcrumbList, FAQPage, Service.
- Sitemap + robots dynamisch generiert.
- 404 vorhanden, Redirect-Datei mitgeliefert (Netlify + next.config).

## 9. Local-SEO
- Strukturierte LocalBusiness-Daten (Adresse, USt-ID, Telefon, areaServed: Bocholt,
  Kreis Borken, Kreis Wesel, Münsterland, Niederrhein, Ruhrgebiet, NRW, NL-Grenze).
- Region-Block auf Startseite mit 14 lokalen Einsatzbereichen.
- Lokale Keywords in jeder Service-Datei hinterlegt.

## 10. Content-SEO
- Jede Service-Seite folgt der vollen 11-Schritt-Struktur (Hero, Intro, Eignung,
  Probleme, Lösung, Ablauf, Vorteile, Materialien, Branchen, FAQ, CTA).
- Keywords sauber im Content (kein Stuffing), Titles unter 70 Zeichen.

## 11. Informationsarchitektur
- Klare Hierarchie: Startseite → Leistungen → Einzelleistung → Einsatzbereiche → Referenzen.
- Crosslinks: jede Service-Seite verweist auf 3 verwandte Services + Einsatzbereiche.

## 12. Performance
- First Load JS ≈ 102 KB shared, 120 KB auf Service-Seiten, 151 KB auf Anfrage/Kontakt
  (mit RHF + Zod). Keine externen Font-CDN-Requests (Inter via next/font).
- Images: AVIF/WebP, Lazy-Loading, korrekte `sizes`-Hints.
- 24 statisch prerenderte Routen, Server-Rendering nur für `/api/inquiry`.

## 13. Accessibility
- Tastatur­navigation, sichtbare Focus-States, ARIA für Menü, sr-only Skiplink.
- Semantisches HTML (header, main, footer, section, nav, ol, ul).
- Reduced-Motion-Respekt in CSS.
- Fluid Typography vermeidet harte Umbrüche bei Composita.

## 14. Supabase-Integration
- **Aktuell deaktiviert (gemäß Brief).**
- Schema, RLS-Hinweise, Storage-Bucket-Empfehlung dokumentiert in `README.md`.
- `/api/inquiry` Stub validiert serverseitig, bereit für Anbindung.

## 15. Formular & Upload
- Multi-Step, Drag&Drop, 10 Dateien × 10 MB, MIME-Whitelist, Größencheck.
- Honeypot, Server-Validierung mit Zod, klare Fehlermeldungen.

## 16. Datenschutz / DSGVO
- Keine Tracker, kein Cookie-Banner nötig (technisch keine Cookies gesetzt).
- Google-Maps-Embed nur auf Kontaktseite, mit Hinweis in Datenschutz.
- Datenschutz + Impressum als rechtlich zu prüfende Vorlagen gekennzeichnet.

## 17. Relaunch & URL-Migration
- **Alle 14 bestehenden URLs identisch übernommen.**
- 8 sinnvolle 301-Redirects für Synonyme (`/sanierung → /versiegelungen/` etc.).
- WP-Reste werden auf 410 gesetzt (`/wp-admin/*`).
- Mapping dokumentiert in `content/url-mapping.md`.

## 18. Asset-Migration
- 26 von 27 Bildern aus Original-WordPress (`wp-content/uploads`) übernommen.
- Sauber organisiert in `/public/images/{projects,logos}/`.
- 1 Bild (`SIC-COLOR-TOP-RHEDE-scaled.jpg`) konnte serverseitig nicht geladen werden
  (Umlaut/URL-Encoding der alten Site) — Projekt-Eintrag nutzt Ersatzbild gleichen Typs.
- Logo: Original-JPG verfügbar; UI nutzt aktuell Premium-Wortmarke als saubere
  Platzhalter-Komponente (siehe README zur Logo-Ersetzung durch SVG).

## 19. Qualitätsprüfung
- `tsc --noEmit` ✓
- `next build` ✓ — 24 Routen, kein Compile-Fehler.
- `next-env.d.ts` automatisch von Next aktualisiert (Standard-Verhalten).
- Lockfile-Warnung durch `outputFileTracingRoot` behoben.
