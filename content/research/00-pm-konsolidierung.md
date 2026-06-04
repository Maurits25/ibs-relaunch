# PM-Konsolidierung — Research-Phase

> Stand: 2026-06-04
> Quellen: `01-materialien-eigenschaften.md`, `02-einsatzbereiche.md`, `03-tier1-conversion-hubs.md`, `04-ratgeber-ai-crawlability.md`

## Status

| Dossier | Seiten | Größe | Qualität | Sources |
|---|---|---|---|---|
| Materialien & Eigenschaften | 6 | 50 KB / 703 Z | ⭐⭐⭐⭐⭐ | DIN, EN, AGI, DAfStb, DIBt, DGUV mit konkreten Norm-Bezeichnungen |
| Einsatzbereiche (B2B) | 8 | 65 KB / 897 Z | ⭐⭐⭐⭐⭐ | DGUV, AGI, EU 852/2004, AwSV, ASR, HACCP, IFS, TA Luft |
| Tier-1 Conversion-Hubs | 5 | 69 KB / 1183 Z | ⭐⭐⭐⭐⭐ | DIN 18560-7, Marktpreis-Quellen, baunormenlexikon |
| Ratgeber + AI/Crawlability | 8 + Infra | 53 KB / 972 Z | ⭐⭐⭐⭐⭐ | OpenAI/Anthropic/Perplexity/Google-Dokus, schema.org, llmstxt.org |

→ **27 Seiten** mit verifiziertem Fakten-Backbone bereit. Alle Annahmen markiert.

---

## KRITISCHE OFFENE PUNKTE — vor Veröffentlichung mit IBS klären

Diese Fragen MUSS IBS beantworten, sonst riskieren wir falsche Aussagen oder rechtliche Probleme:

### 1. Rechtsstatus / Zertifikate
- [ ] **WHG-Fachbetriebs-Zertifikat nach §62 AwSV** — Liegt vor? Welcher Aussteller (DIBt, ÜGPU, IHK)? Gültigkeit?
  Falls ja: Wir können sagen „Fachbetrieb nach §62 WHG / AwSV".
  Falls nein: Wir müssen sagen „Verarbeitung WHG-zugelassener Systeme" — anders formuliert.

- [ ] **Gründungsjahr** der Firma (für `foundingDate` im LocalBusiness-Schema und Texte)

- [ ] **TÜV/SKZ/Sachkundige-Planer-Zertifikate** vorhanden? Wenn ja welche?

### 2. Hersteller-Beziehungen
- [ ] **Remmers, KLB, SIKA, Triflex** — was darf IBS sagen?
  - Offizieller Verarbeitungspartner mit Vertrag?
  - „Wird verarbeitet" (kein offizieller Partnerstatus)?
  - Schulungs-Zertifikate von einem Hersteller?

### 3. Referenzen / Reviews
- [ ] Liegen **echte, schriftlich freigegebene Kunden-Reviews** vor? (Anzahl, Schnitt)
  - Falls ≥5 freigegebene Reviews → AggregateRating-Schema möglich
  - Falls nein → KEIN AggregateRating-Schema (sonst Spam-Risiko)
- [ ] Welche Branchen-/Firmenreferenzen sind **namentlich freigegeben** (für Case-Studies/Logos)?

### 4. Markt-Preis-Kommunikation
- Empfehlung der Researcher: **Keine fixen IBS-€/m²-Preise auf Website** — stattdessen Marktspannen mit Hinweis „Endpreis nach Aufmaß".
- Soll der Kosten-Ratgeber Marktspannen zeigen oder lieber komplett ohne Preise arbeiten?

### 5. Service-Scope-Bestätigung
- [ ] Macht IBS **OS-Beschichtungen für Parkhaus/Tiefgarage** aktiv (OS-8, OS-11a/b)?
  → Wenn nein: Parkhaus-Cluster bleibt aber wir sagen „auf Anfrage" oder verlinken nur thematisch
- [ ] Macht IBS **Landwirtschafts-Anwendungen** (Stall, Silo, JGS)?
  → Wenn nein: Seite weglassen
- [ ] Macht IBS **Lebensmittel-/Pharma-Anwendungen** (HACCP, IFS)?
  → Wenn ja: brauchen wir Hersteller-Freigaben fürs Texten
- [ ] Macht IBS **WHG-Auffangräume**?
  → Wenn nein: Seite weglassen
- [ ] Macht IBS **PMMA-Systeme** (Triflex, Schnellbau)?
  → Wenn nein: /pmma-beschichtung/ weglassen, ggf. in /balkon/ integrieren

### 6. Kontakt / LocalBusiness
- [ ] Sind die Adress-/Telefon-Daten in `src/data/site.ts` korrekt und aktuell?

---

## DON'T-CLAIMS (gilt für ALLE Seiten, hart durchsetzen)

1. **„Lebensmittelecht"** — falsch. Stattdessen: „für den Lebensmittelbereich freigegebene Systeme (Hersteller-Freigabe)".
2. **„TÜV-zertifiziert"** — nur wenn echtes TÜV-Zertifikat vorliegt + Ausstellungs-Nr.
3. **„Marktführer / weltbeste / einzigartig"** — UWG-Risiko, vermeiden.
4. **„Garantie 25 Jahre"** — Gewährleistung ≠ Garantie. Hersteller-Gewährleistungen typisch 5-10 Jahre.
5. **„WHG-zugelassen" (IBS als Firma)** — falsch. Korrekt: „verarbeitet WHG-zugelassene Systeme" oder „Fachbetrieb nach §62 AwSV" (wenn vorhanden).
6. **„DIBt-zertifiziert"** — IBS ist nicht DIBt-zertifiziert, die SYSTEME sind es.
7. **„Brandschutzklasse A1"** — nur mit konkretem System + CE-Kennzeichnung.
8. **Konkrete €/m²-Preise** auf den allgemeinen Seiten — nur in Ratgeber als Marktspanne, mit Quelle.
9. **„Schnellsystem in 1 Stunde"** — herstellerspezifisch (Triflex/Silikal). Nicht als IBS-Standard.
10. **Fremde Logos ohne Freigabe** (Hersteller, Kunden) — Markenrecht.

---

## CONTENT-PATTERNS — gemeinsame Struktur (aus den Dossiers extrahiert)

Jede neue Seite folgt diesem Muster (Google-2026 + AI-Overview-tauglich):

```
1. Hero
   - Eyebrow (Kategorie)
   - H1 (Primärkeyword vorne, max 60 Z)
   - Subheadline (40-80 Wörter — Featured-Snippet-Definition!)
   - 3-4 Trust-Bullets
   - Twin-CTA

2. Definitions-Box (40-60 Wörter, Subjekt-Verb-Objekt, AI-Overview-zitationsfähig)
   - "Eine X-Beschichtung ist..."

3. Eigenschaften / Specs (Tabelle wo möglich)

4. Anwendungsbereiche / Branchen (mit Links)

5. Aufbau & Ablauf (HowTo-Schema-fähig)

6. Materialien / Systeme (Hersteller-Partner, keine konkrete Markenwerbung)

7. FAQ (5-8 Fragen mit FAQPage-Schema)

8. Cross-Links (interner Themen-Cluster)

9. CTA (Anfrage, Telefon)

10. JSON-LD: BreadcrumbList + (Service|Article|HowTo) + FAQPage
```

---

## SCHEMA.ORG-PATTERNS (verifiziert, validierbar)

### Pro Page-Typ:

**Leistungs-Seite** (Tier-1/Tier-2):
```jsonld
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "{URL}#service",
  "name": "{H1}",
  "serviceType": "{Primärkeyword}",
  "provider": {"@id": "{SITE_URL}#organization"},
  "areaServed": [...],
  "description": "...",
  "offers": {"@type": "Offer", "availability": "https://schema.org/InStock"}
}
```

**Einsatzbereich-Seite**:
- Wie Service, aber mit `audience` (B2B/B2C) und `serviceOutput`

**Ratgeber-Seite**:
```jsonld
{
  "@type": "Article",
  "headline": "...",
  "author": {"@type": "Organization", "@id": "{SITE_URL}#organization"},
  "datePublished": "2026-06-04",
  "dateModified": "...",
  "publisher": {"@id": "..."}
}
```

**OS-Klassen / Eigenschafts-Seite**:
- `DefinedTerm` + `DefinedTermSet` für Glossar-Charakter
- `Article` für Erklärungs-Kontext

**FAQ-Sektionen** (jede Seite mit FAQ):
- `FAQPage` mit `mainEntity` Array von `Question`+`Answer`

**Ablauf-Sektionen**:
- `HowTo` mit `step` Array von `HowToStep`

**NICHT verwenden ohne IBS-Bestätigung:**
- `AggregateRating` — nur wenn ≥5 echte Reviews schriftlich vorliegen
- `Review` — nur mit Einwilligung der Reviewer

---

## AI-CRAWLABILITY — robots.txt (verifiziert)

Aus Dossier 4 verifizierte AI-Bot-Liste 2026 (offizielle Doku-Belege jeweils geprüft):

**Klare Doku, sicher:**
- `GPTBot`, `ChatGPT-User`, `OAI-SearchBot` (OpenAI)
- `ClaudeBot` (Anthropic — neuer Standard)
- `PerplexityBot`, `Perplexity-User` (Perplexity)
- `Google-Extended` (Google AI training opt-in/out)
- `Applebot-Extended` (Apple Intelligence)
- `meta-externalagent` (Meta)
- `Bingbot` (Microsoft Copilot indirekt)
- `Amazonbot` (Amazon AI)
- `cohere-ai`
- `Diffbot` (Knowledge Graph)
- `DuckAssistBot` (DuckDuckGo AI)
- `YouBot` (You.com)

**Mit Vorbehalt (in Liste lassen, ist günstig):**
- `anthropic-ai` (Legacy-Token)
- `Claude-Web` (Legacy)
- `Bytespider` (chinesischer Markt, irrelevant aber kostet nichts)

**Weglassen:**
- `TimpiBot` (keine konsistente Doku-Spur 2026)
- erfundene/unverifizierte Bots

---

## llms.txt — Best Practice (Stand 2026)

Standard `/llms.txt` mit:
1. Site name + 1-Satz-Beschreibung
2. Liste der wichtigsten URLs gegliedert nach: Leistungen, Einsatzbereiche, Ratgeber, Kontakt
3. Optional: `/llms-full.txt` mit komprimierter Vollkopie

---

## EMPFOHLENE UMSETZUNGS-REIHENFOLGE

**Phase A — Crawlability-Foundation (~30 min Code)**
1. robots.txt um verifizierte AI-Bots erweitern
2. `/llms.txt` anlegen (statische Datei in `/public/`)
3. Schema-Stack erweitern (`src/lib/seo/jsonLd.ts`): FAQPage, HowTo, DefinedTerm, Article+Author, Service mit areaServed

**Phase B — Bestehende Pages absichern (~1h Code)**
4. Title-Tags + Meta Descriptions optimieren (Tier-1-Pages mit den verifizierten Patterns)
5. FAQ-Schema + HowTo-Schema auf existierenden Service-Seiten
6. Definitions-Box (40-60 Wörter) ganz oben auf jeder bestehenden Service-Seite

**Phase C — Neue Tier-1-Pages (~3-4h Code)**
7. `/industrieboden/` (höchstes Volumen!)
8. `/garagenboden/`
9. `/werkstattboden/`
10. `/kellerboden/`
11. `/industriebodensanierung/`

**Phase D — Material-Pages**
12. `/pu-beschichtung/`
13. `/pmma-beschichtung/`
14. `/whg-beschichtung/`

**Phase E — Eigenschaften-Pages**
15. `/eigenschaften/rutschhemmung-r9-r13/`
16. `/eigenschaften/esd-ableitfaehig/`
17. `/eigenschaften/diffusionsoffen/`

**Phase F — Einsatzbereiche**
18-24. Lagerhalle, Werkstatt-Produktion, Parkhaus-Tiefgarage (+ 3 OS-Subs), Lebensmittel-Pharma, WHG-Auffangräume, Showroom-Praxis, Landwirtschaft

**Phase G — Ratgeber (AI-Overview-Anker)**
25-32. 8 Ratgeber-Pages

**Phase H — Regionen-Hub**
33. `/regionen/`

**Phase I — QA**
34. Build, Lighthouse, Schema-Validator, AI-Sichtbarkeitstest

---

## WAS ICH JETZT BRAUCHE — Antworten von IBS (Kunde)

Ich habe oben 6 Cluster offener Punkte aufgeführt. **Mindestens diese** sind blocker für eine ehrliche Website:

1. **Welche der genannten Anwendungsbereiche macht IBS aktiv?**
   (Parkhaus/OS, Landwirtschaft, Lebensmittel, Pharma, PMMA)
2. **Welcher Zertifikats-Status?** (WHG-Fachbetrieb §62 AwSV ja/nein? Gründungsjahr?)
3. **Welche Hersteller-Beziehung?** (offiziell oder „wird verarbeitet"?)
4. **Echte Reviews vorhanden?** (wenn ja Anzahl, wenn nein → keine Rating-Schemas)
5. **Soll Markt-Preisspanne im Kosten-Ratgeber stehen?**

Solange diese Punkte unklar sind, baue ich Texte mit **konservativer Formulierung** („verarbeitet zugelassene Systeme", „mehr als 20 Jahre Erfahrung", keine Garantie-Versprechen) und markiere alle TODO-Stellen im Code als Kommentare.
