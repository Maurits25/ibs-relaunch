# Logos

## Aktueller Stand

Alle Logos in diesem Verzeichnis sind **stilisierte SVG-Wortmarken** in den jeweiligen
Marken-Farben (verifiziert über öffentliche Brand-Guidelines). Sie funktionieren als
sofortige Platzhalter und sind visuell hochwertig.

## Echte Trademark-Logos einsetzen (empfohlen für Produktion)

IBS hat die Freigaben für die Referenz-Logos. Sobald die Original-Dateien vorliegen
(SVG bevorzugt, PNG mit transparentem Hintergrund als Alternative), einfach an die
unten genannten Pfade ablegen — die Komponenten greifen automatisch zu, da die
Dateinamen identisch sind.

### Partner (Materialien-Hersteller)

| Datei | Bezugsquelle für Original |
|---|---|
| `partner-remmers.svg` | https://www.remmers.com → Pressecenter / Brand Portal |
| `partner-klb.svg` | https://www.klb-koetztal.de → Presse / Kontakt |
| `partner-korodur.svg` | https://korodur.de → Pressekontakt |

### Referenz-Kunden (mit ausdrücklicher Freigabe von IBS)

| Datei | Bezugsquelle für Original |
|---|---|
| `referenzen/siemens.svg` | https://press.siemens.com → Brand & Logos |
| `referenzen/honeywell.svg` | https://www.honeywell.com → Newsroom |
| `referenzen/khs.svg` | https://www.khs.com → Press / Mediathek |
| `referenzen/rkw.svg` | https://www.rkw-group.com → Press / Newsroom |
| `referenzen/tuev-nord.svg` | https://www.tuev-nord-group.com → Press |
| `referenzen/hoermann.svg` | https://www.hoermann.com → Presse |

### Format-Empfehlung

- **SVG bevorzugt** (skaliert verlustfrei, kleine Dateigröße)
- Bei PNG: mindestens 480px Höhe, transparenter Hintergrund
- Bei Vorgabe „nur PNG ohne Transparenz" mit weißem Hintergrund: in der jeweiligen
  Sektion über CSS `mix-blend-mode: multiply` einsetzbar

## Hauptlogo IBS

- `/logo.svg` (in `/public/`) — wird inline in `<Logo>` rendert; SVG-basierte
  Wortmarke (siehe `src/components/ui/Logo.tsx`). Original-JPG liegt als Referenz
  unter `/images/logos/ibs-logo-original.jpg`.
