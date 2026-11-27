# HEDRA – Homepage

Statische Website der HEDRA 28 GmbH (Auftritt: **HEDRA**). Layout angelehnt an polpi.ch.

## Struktur
- `index.html` – Startbildschirm: Vollbild-Hintergrund, oben mittig **HEDRA**
- `ueber.html` – zentrales Bild mit Text darunter (analog polpi)
- `momente.html` – Bildraster
- `css/style.css` – Gestaltung (Schrift: Avenir Book)
- `js/main.js` – Menu (links) und Kontakt (rechts) als einblendende Panels
- `images/` – Platzhalterbilder

## Anpassen
- **Hintergrundbild:** Foto als `images/hero.jpg` ablegen und in `css/style.css` bei `.hero` die URL ersetzen.
- **Bild Über:** `images/about-placeholder.svg` in `ueber.html` durch ein echtes Foto ersetzen.
- **Kontaktdaten:** In allen drei HTML-Dateien im Block `<aside id="kontakt">` die Platzhalter (Musterstrasse, Telefon, E-Mail) ersetzen.
- **Schrift Avenir Book:** Avenir ist lizenzpflichtig. Lizenzierte Webfonts als `fonts/AvenirLTStd-Book.woff2` / `.woff` ablegen. Ohne diese Dateien wird ein lokal installiertes Avenir verwendet (macOS/iOS), sonst die ähnliche Ersatzschrift Nunito Sans.

## Lokal ansehen
`index.html` im Browser öffnen – kein Build nötig.
