---
image: ../../images/projects/fdb-converter.png
title: FDB Converter
updatedAt: 2025-02-06
githubRepository: IAmMajo/FDB-Converter
---

Diese Website ist in meiner Freizeit ursprünglich während meiner Ausbildung
entstanden und dient dazu FDB-Datenbank-Dateien des Spiels
[LEGO Universe](https://en.wikipedia.org/wiki/Lego_Universe) zu konvertieren.
Es können FDB-Dateien in SQLite-Dateien, SQLite-Dateien in FDB-Dateien und
XML-Dateien in FDB-Dateien konvertiert werden. Die Konvertierung findet komplett
clientseitig statt. Im Hintergrund wird eine für den Umgang mit FDB-Dateien
entwickelte und in Rust geschriebene Bibliothek verwendet, die zu WebAssembly
kompiliert wurde. Als UI-Bibliothek wird
[Material Web](https://github.com/material-components/material-web) verwendet.
