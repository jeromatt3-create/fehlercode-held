---
title: 'FritzBox Info-LED blinkt rot: Ursachen & Fehler schnell beheben'
description: Ihre FritzBox Info-LED blinkt rot? Erfahren Sie hier die häufigsten Ursachen vom Update-Fehler bis zur Überhitzung und wie Sie den Router schnell retten.
pubDate: '2026-11-24'
updatedDate: '2026-11-24'
category: router-wlan
heroImage: /images/articles/fritzbox-info-led-blinkt-rot-beheben.svg
keywords:
  - fritzbox info led blinkt rot
  - fritzbox leuchtet rot info
  - fritz box rotes licht info lampe
  - fritzbox update fehlgeschlagen rot
  - fritzbox wiederherstellen recovery tool
  - fritzbox blinkt rot kein internet
  - fritzbox sturm überspannung info rot
readingTime: 6
keyTakeaways:
  - Ein rotes Blinken der Info-LED signalisiert bei FRITZ!Box-Modellen fast immer ein fehlgeschlagenes oder abgebrochenes FRITZ!OS-Update bzw. einen schwerwiegenden Systemfehler.
  - Trennen Sie das Gerät bei rotem Blinken niemals hektisch im Sekundentakt vom Strom; warten Sie zunächst ab, ob das System einen internen Neustart versucht.
  - Bleibt der Fehler nach einem Kaltstart bestehen, lässt sich der Router in den meisten Fällen über das offizielle AVM-Wiederherstellungsprogramm (Recovery-Tool) am PC per LAN-Kabel retten.
steps:
  - step: 1
    title: Geduld bewahren & Kaltstart durchführen
    summary: Trennen Sie das Netzteil der FRITZ!Box für mindestens 60 bis 120 Sekunden vollständig von der Steckdose, damit sich interne Kondensatoren entladen und der Cache geleert wird.
    tip: Ziehen Sie den Stecker niemals mitten während eines regulären Firmware-Schreibvorgangs, es sei denn, die LED blinkt bereits seit über 15 Minuten ununterbrochen rot.
  - step: 2
    title: Geräteumgebung & Hitzeentwicklung prüfen
    summary: Fühlen Sie vorsichtig am Gehäuse, ob das Gerät ungewöhnlich heiß ist, und stellen Sie sicher, dass die Lüftungsschlitze frei von Staub und Wärmestau sind.
    tip: Betreiben Sie Router niemals in geschlossenen Schränken oder direkt neben Heizkörpern; lassen Sie das Gerät bei Überhitzung 20 Minuten abkühlen.
  - step: 3
    title: Benutzeroberfläche oder Notfall-IP aufrufen
    summary: Verbinden Sie Ihren Computer direkt per LAN-Kabel mit LAN-Port 1 oder 2 und versuchen Sie den Aufruf über 'http://fritz.box' oder die feste Notfall-IP '169.254.1.1'.
    tip: Falls die Weboberfläche nicht reagiert, laden Sie das modellspezifische AVM Recovery-Tool für Windows herunter, um das FRITZ!OS sauber neu aufzuspielen.
faqs:
  - question: Was bedeutet es, wenn die Info-LED der FRITZ!Box rot blinkt?
    answer: Bei den meisten AVM FRITZ!Box-Modellen signalisiert ein rot blinkendes Info-Lämpchen einen kritischen Systemfehler. Häufigste Ursache ist ein fehlgeschlagenes oder unterbrochenes automatisches FRITZ!OS-Update. Seltener liegt eine thermische Überlastung oder eine fehlerhafte Konfiguration vor.
  - question: Kann ich die FRITZ!Box noch retten, wenn die Info-LED dauerhaft rot blinkt?
    answer: Ja, in den allermeisten Fällen schon. Wenn ein normaler Neustart durch Ziehen des Netzteils nicht hilft, kann das kostenlose AVM Recovery-Tool über einen per LAN-Kabel verbundenen Windows-PC das Betriebssystem der FRITZ!Box komplett neu schreiben und den Bootloop beenden.
  - question: Was ist der Unterschied zwischen rotem Blinken und rotem Dauerlicht?
    answer: Ein rotes Dauerlicht der Info-LED deutet meist auf eine gezielte Signalisierung hin, die im Menü unter 'System > Tasten und LEDs' konfiguriert wurde (z. B. aufgebrauchtes Online-Budget oder Anrufbeantworter-Fehler). Rotes Blinken hingegen ist herstellerseitig als Warnung für Systemabstürze oder Update-Fehler reserviert.
  - question: Wie erreiche ich die FRITZ!Box, wenn 'fritz.box' nicht mehr im Browser lädt?
    answer: Trennen Sie alle WLAN-Verbindungen am PC und schließen Sie ihn direkt mit einem Netzwerkkabel an LAN-Port 2 oder 3 an. Geben Sie im Webbrowser die Notfall-IP 'http://169.254.1.1' ein. Diese Adresse bleibt auch bei gestörtem DHCP-Dienst der Box erreichbar.
  - question: Lohnt sich die Reparatur, wenn das AVM Recovery-Tool die Box nicht mehr findet?
    answer: Wenn das AVM Recovery-Tool die FRITZ!Box im FTP-Bootloader-Modus nicht mehr ansprechen kann und alle LEDs zyklisch aufleuchten, liegt meist ein Hardwaredefekt (z. B. defekter Flash-Speicher oder Überspannungsschaden nach Gewitter) vor. Innerhalb der 5-jährigen AVM-Herstellergarantie tauscht der Support das Gerät in der Regel anstandslos aus.
errorCodes:
  - Info-LED rot
  - Update-Abbruch
  - Notfall-IP 169.254.1.1
brands: AVM / FRITZ!Box
selfFixLevel: 'Grün: Ohne Werkzeug selbst lösbar'
timeRequired: ca. 10 – 25 Min.
savedCost: ca. 80 – 140 € Vor-Ort-Techniker
---

## Warum blinkt die Info-LED der FRITZ!Box plötzlich rot?

Die Router von AVM gelten im deutschsprachigen Raum als Inbegriff von Zuverlässigkeit. Wenn an der FRITZ!Box jedoch statt der gewohnten grünen Lämpchen plötzlich die **Info-LED rot blinkt**, bricht bei vielen Anwendern Hektik aus: Das WLAN bricht ab, Smart-Home-Komponenten sind offline und das Internet funktioniert nicht mehr.

Grundsätzlich dient die Info-Leuchte dazu, individuelle Ereignisse anzuzeigen – etwa das Überschreiten eines Datenvolumens, neue Nachrichten auf dem internen Anrufbeantworter oder die Aktivität von DECT-Geräten. Solche Statusanzeigen erfolgen im Normalbetrieb allerdings in **grüner Farbe**. Sobald die Info-LED rot blinkt, greift eine herstellerseitige Schutz- und Warnroutine. In über 90 Prozent aller Fälle ist die Ursache ein **fehlgeschlagenes oder abgebrochenes FRITZ!OS-Update**, ein beschädigtes Firmware-Image im internen Flash-Speicher oder eine Notabschaltung wegen thermischer Überlastung.

---

## Typische Fehlerquellen und Ursachen im Überblick

Bevor Sie voreilige Schlüsse ziehen oder ein neues Gerät kaufen, lohnt sich eine systematische Ursachenforschung. Folgende Faktoren lösen das rote Signal am häufigsten aus:

* **Unterbrochenes Firmware-Update (Auto-Update):** Viele Router aktualisieren sich nachts automatisch. Kommt es dabei zu einem kurzen Stromausfall, einem Ausfall des Breitbandnetzes oder wird das Netzteil während des Schreibens gezogen, bleibt das System in einem unvollständigen Zustand hängen.
* **Speicherfehler oder Bootloop:** Nach einem Update kann es vorkommen, dass Konfigurationsdaten inkompatibel sind und die Box in einer ständigen Neustart-Schleife feststeckt.
* **Überhitzung (Hitzestau):** Befindet sich der Router in einem geschlossenen TV-Board, in einem unbelüfteten Verteilerkasten oder liegt direkte Sonneneinstrahlung vor, schützt sich die Hardware durch ein Drosseln bzw. Abschalten der HF-Module, signalisiert durch rotes Blinken.
* **Überspannung oder Defekt des externen Netzteils:** Nach einem Gewitter oder Netzschwankungen liefert das 12V-Steckernetzteil oft nicht mehr die nötige stabile Spannung unter Last. Das führt zu unkontrollierten Abstürzen der Router-Elektronik.
* **Konflikt bei geänderter LED-Belegung:** Wurde die Info-Taste im FRITZ!OS-Menü so konfiguriert, dass sie bei bestimmten Ereignissen warnt (z. B. unbemerktes Festnetz-Roaming oder Online-Zeit-Limit), kann dies fälschlich wie ein Systemabsturz wirken.

---

## Schritt-für-Schritt-Anleitung: So beheben Sie den Fehler selbst

Gehen Sie die folgenden Schritte der Reihe nach durch. In den meisten Fällen lässt sich das Gerät ohne teuren Techniker-Einsatz wieder in Betrieb nehmen.

### 1. Ruhig bleiben und den Status beobachten
Wenn das rote Blinken gerade erst begonnen hat, trennen Sie das Gerät **nicht sofort** vom Strom. Manche Update-Routinen älterer oder stark ausgelasteter Boxen (wie FRITZ!Box 7490, 7530 oder 7590) benötigen einige Minuten für interne Aufräumarbeiten. Warten Sie rund **5 bis 10 Minuten**. Geht die Box von alleine in einen geregelten Neustart über (alle LEDs erlöschen kurz und Power/DSL beginnt grün zu blinken), läuft der normale Synchronisationsprozess an.

### 2. Der kontrollierte Kaltstart (Power-Cycle)
Blinkt die Info-LED nach 15 Minuten ununterbrochen weiter rot:
1. Ziehen Sie das Netzteil direkt aus der Steckdose (nicht das kleine Kabel an der Box abknicken).
2. Ziehen Sie vorübergehend alle angeschlossenen LAN-Kabel und USB-Speichermedien ab.
3. Warten Sie mindestens **60 bis 120 Sekunden**. Dies stellt sicher, dass sich die internen Pufferkondensatoren vollständig entleeren.
4. Stecken Sie ausschließlich das Netzteil wieder ein und beobachten Sie die Boot-Sequenz.

### 3. Zugriff über die Notfall-IP testen
Reagiert der Router nach dem Kaltstart nicht und ist über `http://fritz.box` nicht erreichbar, greifen Sie zur herstellereigenen Notfall-IP:
1. Verbinden Sie Ihren Laptop oder PC per LAN-Kabel mit **LAN-Port 2** des Routers.
2. Deaktivieren Sie kurzzeitig das WLAN an Ihrem PC, um Routing-Konflikte zu vermeiden.
3. Öffnen Sie Ihren Browser und tippen Sie in die Adresszeile: `http://169.254.1.1` ein.
4. Wird die Anmeldemaske geladen, loggen Sie sich ein. Navigieren Sie zu **System > Ereignisse**, um die genaue Fehlerursache auszulesen, oder installieren Sie unter **System > Update** die Firmware manuell neu.

### 4. Die Rettung mit dem AVM Recovery-Tool
Lässt sich die Weboberfläche auch über die Notfall-IP nicht öffnen und die Info-LED blinkt weiterhin rot, befindet sich die FRITZ!Box im Bootloader-Modus. Hier hilft das offizielle **AVM Wiederherstellungsprogramm**:

* Laden Sie an einem internetfähigen PC die Recovery-Datei für Ihr exaktes Modell vom offiziellen AVM-Server (im Bereich Service/Downloads) herunter (Dateiendung `.exe`).
* Verbinden Sie den PC über ein Netzwerkkabel direkt mit LAN-Port 1 der Box.
* Deaktivieren Sie für die Dauer der Wiederherstellung temporär die Windows-Firewall und eventuelle Antivirenprogramme von Drittanbietern, da diese die TFTP-Kommunikation mit dem Router blockieren können.
* Starten Sie das Programm mit Administratorrechten und folgen Sie präzise den Bildschirmanweisungen. Das Tool erkennt die Box beim Einstecken der Stromversorgung und flasht ein frisches FRITZ!OS auf das System.

*Wichtiger Hinweis:* Bei der Nutzung des Recovery-Tools werden alle individuellen Zugangsdaten und Einstellungen gelöscht. Halten Sie daher Ihre Zugangsdaten des Internetanbieters (Telekom, Vodafone, 1&1, O2 etc.) bereit.

---

## Verwandte Problemvarianten & LED-Kombinationen

Nicht jedes Leuchten bedeutet das Gleiche. Achten Sie auf die Kombination der Signale:

* **Power/DSL blinkt grün, Info blinkt rot:** Die Internetverbindung wird aufgebaut, aber ein kritischer Systemdienst scheitert oder das WLAN-Modul meldet einen Initialisierungsfehler.
* **Alle LEDs blinken synchron rot oder leuchten einmal kurz rot auf:** Typisches Anzeichen für eine kurzzeitige Überlastung der Spannungsversorgung oder den automatischen Neustart nach einem internen Watchdog-Reset.
* **Info-LED leuchtet dauerhaft rot:** Meistens liegt hier kein technischer Defekt vor, sondern ein im Routermenü hinterlegter Grenzwert wurde erreicht (z. B. Datenvolumen aufgebraucht oder Online-Budget der Kindersicherung überschritten).

---

## Wann liegt ein echter Hardware-Defekt vor?

Sollte das AVM Recovery-Tool die Fehlermeldung ausgeben, dass die FRITZ!Box an keiner IP-Adresse gefunden wird, und die Info-LED sofort nach dem Einstecken ohne jegliches vorheriges Blinken rot leuchten, liegt mit hoher Wahrscheinlichkeit ein **elektronischer Defekt** vor. Typische Auslöser sind gealterte Netzteile oder Überspannungen über die Telefonleitung nach einem Sommergewitter.

Prüfen Sie in diesem Fall zunächst das Netzteil: Weist es Schmauchspuren oder ein hochfrequentes Pfeifen auf? Falls Sie ein baugleiches Original-Netzteil mit identischer Spannung (Volt) und mindestens gleicher Stromstärke (Ampere) zur Hand haben, lohnt sich ein Gegentest. Bringt auch das keine Besserung, greift oft die **fünfjährige Herstellergarantie** von AVM. Mit dem Kaufbeleg können Sie sich direkt an den Support wenden, um einen unkomplizierten Austausch des Routers zu veranlassen.
