# HEDRA – Homepage

Statische Website der HEDRA 28 GmbH (Auftritt: **HEDRA**). Layout angelehnt an polpi.ch.

## Struktur
- `index.html` – Startseite: zentrales Bild auf hellem Beige, oben mittig **HEDRA** (analog polpi)
- `ueber.html` – zentrales Bild mit Text darunter (analog polpi)
- `momente.html` – drei Bilder nebeneinander, zusammen so breit wie das Startbild; Klick auf Bild oder Unterzeile öffnet die Detailseite
- `moment-01.html` … `moment-06.html` – Detailseiten (analog polpi Produktseite): Gesamtbreite und Position wie das Startbild: links grosses Bild mit drei Vorschaubildern darunter (Klick zeigt das Bild gross), rechts Titel, Text und Ort/Jahr, oben rechts ein unterstrichenes x zurück zur Übersicht; bei wenig Breite steht der Text darunter
- `impressum.html` – Impressum (in der Fusszeile unter © HEDRA verlinkt)
- `css/style.css` – Gestaltung (Schrift: Avenir Book)
- `js/main.js` – Menu (links) und Kontakt (rechts) als einblendende Panels
- `images/` – Platzhalterbilder

## Anpassen
- **Bild Startseite:** Foto als `images/hero.jpg` ablegen und in `index.html` `images/hero-placeholder.svg` durch `images/hero.jpg` ersetzen (Querformat 4:3).
- **Bild Über:** `images/about-placeholder.svg` in `ueber.html` durch ein echtes Foto ersetzen.
- **Momente:** Bilder als z. B. `images/moment-01-1.jpg` ablegen und in der jeweiligen `moment-XX.html` die Platzhalter `images/moment-detail-1.svg` usw. ersetzen (grosses Bild, `data-full` und Vorschaubild). Das erste Bild erscheint auch in der Übersicht `momente.html`. Titel, Text und Ort/Jahr ebenfalls dort anpassen.
- **Impressum:** Führt HEDRA 28 GmbH und HEDRA 27 GmbH mit Angaben gemäss Handelsregister (zefix.ch).
- **Kontaktdaten:** Stehen in allen HTML-Dateien im Block `<aside id="kontakt">` (HEDRA 28 GmbH und HEDRA 27 GmbH).
- **Schrift Avenir Book:** Die ganze Seite verwendet ausschliesslich Avenir Book. Avenir ist lizenzpflichtig (Monotype/Linotype). Damit sie auf allen Geräten erscheint, die lizenzierten Webfonts als `fonts/AvenirLTStd-Book.woff2` und `fonts/AvenirLTStd-Book.woff` ablegen. Ohne diese Dateien wird Avenir Book nur angezeigt, wo die Schrift installiert ist (z. B. Mac/iPhone); sonst erscheint die Ersatzschrift Nunito Sans.

## Lokal ansehen
`index.html` im Browser öffnen – kein Build nötig.
