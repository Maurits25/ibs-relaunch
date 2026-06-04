# URL-Mapping IBS Industriebodensanierung — Relaunch

> Grundregel: **Bestehende URL = Neue URL**.
> Nur bei zwingend notwendiger Änderung wird ein **301-Redirect** angelegt.
> Quelle: `src/data/url-mapping.ts`, technische Umsetzung: `public/_redirects` und `next.config.mjs`.

| Bestehende URL | Neue URL | Aktion | Hinweis |
|---|---|---|---|
| `/` | `/` | keep | Startseite – komplett neu gestaltet, URL identisch. |
| `/leistungen/` | `/leistungen/` | keep | Übersichtsseite aller Leistungen. |
| `/beschichtung/` | `/beschichtung/` | keep | Epoxidharzbeschichtung – **Haupt-Ranking-URL**, bleibt. |
| `/versiegelungen/` | `/versiegelungen/` | keep | Sanierung & Versiegelung – URL bleibt. |
| `/ep-estrich/` | `/ep-estrich/` | keep | Epoxidharzestrich – URL bleibt. |
| `/dekorbelaege/` | `/dekorbelaege/` | keep | Steinteppich & Dekorbeläge – URL bleibt. |
| `/betonoptik/` | `/betonoptik/` | keep | Designböden / Betonoptik – URL bleibt. |
| `/balkon/` | `/balkon/` | keep | Balkonsanierung – URL bleibt. |
| `/referenzen/` | `/referenzen/` | keep | Referenzen / Projektgalerie. |
| `/ueber-uns/` | `/ueber-uns/` | keep | Über uns – URL bleibt. |
| `/service/` | `/service/` | keep | Service – URL bleibt. |
| `/kontakt/` | `/kontakt/` | keep | Kontakt – URL bleibt. |
| `/impressum/` | `/impressum/` | keep | Impressum – URL bleibt. |
| `/datenschutz/` | `/datenschutz/` | keep | Datenschutz – URL bleibt, Inhalte werden überarbeitet (Tracking entfernt). |

## Neu ergänzte SEO-Seiten

| Neue URL | Zweck |
|---|---|
| `/ablauf/` | Conversion-Stärkung — strukturierter Ablauf vom Kontakt zur Übergabe. |
| `/faq/` | Häufige Fragen mit FAQPage-Schema. |
| `/einsatzbereiche/` | Hub für Branchen & Anwendungs­bereiche (Industrie, Werkstatt, Garage, Balkon, WHG, Showroom). |
| `/anfrage/` | Anfrage-Seite mit Upload, sticky-CTA-Ziel. |

## 301 Redirects (Synonyme / Schreibweisen)

| Quelle | Ziel | Grund |
|---|---|---|
| `/epoxidharzbeschichtung` | `/beschichtung/` | Häufige Schreibweise. |
| `/sanierung`, `/sanierungen` | `/versiegelungen/` | Synonym. |
| `/steinteppich` | `/dekorbelaege/` | Synonym. |
| `/designboden`, `/designboeden` | `/betonoptik/` | Synonym. |
| `/balkonsanierung`, `/balkonsanierungen` | `/balkon/` | Synonym. |
| `/index.php`, `/index.html`, `/home`, `/startseite` | `/` | Legacy / WordPress-Reste. |
| `/wp-admin/*`, `/wp-login.php` | `410 Gone` | Keine WordPress-Site mehr. |

## Sicherheitsnetze

- **404** `/not-found` mit hilfreichen Verlinkungen zu Hauptleistungen & Kontakt.
- **Trailing-Slash** ist global aktiviert (`trailingSlash: true`) — entspricht der bestehenden Struktur.
- **Sitemap** `/sitemap.xml` enthält alle indexierbaren Routen.
- **Canonicals** werden über `metadataBase` + page-spezifische `alternates.canonical` gesetzt.
