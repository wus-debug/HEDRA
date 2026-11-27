# HEDRA – Homepage

Statische Website der HEDRA 28 GmbH (Auftritt: **HEDRA**). Layout angelehnt an polpi.ch.

## Struktur
- `index.html` – Startseite: zentrales Bild auf hellem Beige, oben mittig **HEDRA** (analog polpi)
- `ueber.html` – zentrales Bild mit Text darunter (analog polpi)
- `momente.html` – Bildraster
- `impressum.html` – Impressum (in der Fusszeile unter © HEDRA verlinkt)
- `css/style.css` – Gestaltung (Schrift: Avenir Book)
- `js/main.js` – Menu (links) und Kontakt (rechts) als einblendende Panels
- `images/` – Platzhalterbilder

## Anpassen
- **Bild Startseite:** Foto als `images/hero.jpg` ablegen und in `index.html` `images/hero-placeholder.svg` durch `images/hero.jpg` ersetzen (Querformat 4:3).
- **Bild Über:** `images/about-placeholder.svg` in `ueber.html` durch ein echtes Foto ersetzen.
- **Impressum:** Führt HEDRA 28 GmbH und HEDRA 27 GmbH. Noch zu ersetzen in `impressum.html`: Handelsregisteramt, UID und MWST-Nr. je Firma.
- **Kontaktdaten:** Stehen in allen HTML-Dateien im Block `<aside id="kontakt">` (HEDRA 28 GmbH und HEDRA 27 GmbH).
- **Schrift Avenir Book:** Die ganze Seite verwendet ausschliesslich Avenir Book. Avenir ist lizenzpflichtig (Monotype/Linotype). Damit sie auf allen Geräten erscheint, die lizenzierten Webfonts als `fonts/AvenirLTStd-Book.woff2` und `fonts/AvenirLTStd-Book.woff` ablegen. Ohne diese Dateien wird Avenir Book nur angezeigt, wo die Schrift installiert ist (z. B. Mac/iPhone); sonst erscheint die Ersatzschrift Nunito Sans.

## Lokal ansehen
`index.html` im Browser öffnen – kein Build nötig.
