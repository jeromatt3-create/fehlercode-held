---
title: 'Drucker im Fehlerstatus beheben: Windows-Spooler & Sofort-Lösung'
description: Drucker im Fehlerstatus unter Windows 11 oder 10? So lösen Sie blockierte Druckaufträge, reparieren den Spooler und drucken sofort wieder fehlerfrei.
pubDate: '2026-11-16'
updatedDate: '2026-11-16'
category: pc-smartphone
heroImage: /images/articles/drucker-im-fehlerstatus-windows-beheben.svg
keywords:
  - drucker im fehlerstatus beheben
  - warum zeigt mein drucker fehlerstatus an
  - drucker druckt nicht fehler status windows 11
  - print spooler neustarten befehl
  - druckerwarteschlange hängt lässt sich nicht löschen
  - drucker fehlerstatus wlan umgehen
  - hp drucker im fehlerstatus was tun
readingTime: 7
keyTakeaways:
  - Die Meldung 'Drucker im Fehlerstatus' ist eine generische Windows-Meldung – in über 80 % der Fälle liegt kein Gerätedefekt vor, sondern ein korrupter Druckauftrag im Windows-Spooler.
  - Das bloße Aus- und Einschalten reicht oft nicht, da Windows fehlerhafte Aufträge im Verzeichnis 'System32\spool\PRINTERS' zwischenspeichert; dieser Cache muss manuell bereinigt werden.
  - Bei WLAN- und Netzwerkdruckern verursacht das Windows-Standardprotokoll 'WSD' häufig stumme Verbindungsabbrüche; eine Umstellung auf einen festen Standard-TCP/IP-Port verhindert den Fehler dauerhaft.
steps:
  - step: 1
    title: Druckerspooler anhalten und Auftrags-Cache leeren
    summary: Öffnen Sie über 'Ausführen' (Windows-Taste + R) den Dienstemanager 'services.msc'. Suchen Sie den Dienst 'Druckerwarteschlange', klicken Sie auf 'Beenden'. Navigieren Sie anschließend im Explorer zu 'C:\Windows\System32\spool\PRINTERS' und löschen Sie alle darin befindlichen temporären Dateien (.SHD und .SPL). Starten Sie den Dienst danach wieder.
    tip: Sollte sich eine Datei nicht löschen lassen, blockiert Windows sie noch. Starten Sie den PC neu und löschen Sie den Ordnerinhalt vor dem Starten anderer Programme.
  - step: 2
    title: Port-Konfiguration von WSD auf TCP/IP umstellen
    summary: Öffnen Sie die klassische Systemsteuerung unter 'Geräte und Drucker'. Klicken Sie mit der rechten Maustaste auf Ihren Drucker, wählen Sie 'Druckereigenschaften' und wechseln Sie auf den Reiter 'Anschlüsse'. Ist dort ein 'WSD-Port' angehakt, erstellen Sie über 'Hinzufügen' einen 'Standard TCP/IP Port' mit der festen IP-Adresse Ihres Druckers.
    tip: Die IP-Adresse Ihres Druckers finden Sie im Router-Menü (z. B. FRITZ!Box) oder über den Ausdruck eines Netzwerkkonfigurationsberichts direkt am Druckerpanel.
  - step: 3
    title: Physische Verbindung und Stromreset durchführen
    summary: Trennen Sie das USB- oder LAN-Kabel sowie das Stromkabel des Druckers bei eingeschaltetem Zustand direkt an der Geräterückseite. Warten Sie mindestens 60 Sekunden, damit sich die Puffer-Kondensatoren vollständig entladen. Schließen Sie den Strom wieder an und verbinden Sie das Signalkabel erst nach dem vollständigen Hochfahren des Geräts.
    tip: Vermeiden Sie passive USB-Hubs oder überlange Verlängerungen; verbinden Sie den Drucker für Diagnosen direkt mit einem USB-Port an der PC-Rückseite.
faqs:
  - question: Warum steht mein Drucker plötzlich auf 'Fehlerstatus', obwohl nichts geändert wurde?
    answer: Dies passiert meist durch einen fehlerhaft formatierten Druckauftrag (z. B. aus einem Browser oder einer komplexen PDF-Datei), der den internen Windows-Spooler zum Absturz bringt. Ebenso führen automatische Router-Neuverbindungen (dynamische IP-Vergabe im WLAN) oder kürzlich installierte Windows-Sicherheitsupdates dazu, dass Windows die Rückmeldung des Druckers falsch interpretiert.
  - question: Wie kann ich hängende Druckaufträge löschen, die sich nicht abbrechen lassen?
    answer: Wenn der Klick auf 'Abbrechen' in der Warteschlange nichts bewirkt, müssen Sie die Eingabeaufforderung (cmd) als Administrator öffnen. Geben Sie 'net stop spooler' ein, bestätigen Sie mit Enter, tippen Sie anschließend 'del /Q /F /S "%systemroot%\System32\Spool\Printers\*.*"' ein und starten Sie den Dienst mit 'net start spooler' wieder.
  - question: Was bedeutet der Fehlerstatus bei HP-, Canon- oder Brother-Druckern speziell?
    answer: 'Herstellerspezifisch meldet der Windows-Treiber diesen Status oft, wenn eine Geräteabfrage fehlschlägt: Bei Brother und Canon ist es häufig ein inaktiver Schlafmodus (Deep Sleep), aus dem das Gerät per Netzwerk nicht aufwacht. Bei HP-Druckern wird der Fehlerstatus nicht selten durch die HP-Smart-Software oder blockierte Patronen-Chips (z. B. bei Firmware-Updates) getriggert.'
  - question: Hilft die Windows-Problembehandlung bei einem Drucker im Fehlerstatus?
    answer: Die integrierte Windows-Problembehandlung ('Einstellungen' > 'System' > 'Problembehandlung' > 'Andere Problembehandlungen' > 'Drucker') kann einfache Fehler wie gestoppte Hintergrunddienste oder falsche Standarddrucker-Zuweisungen automatisch reparieren. Bei korrupten Spooler-Dateien oder Port-Konflikten schlägt sie jedoch häufig fehl und erfordert manuelle Schritte.
  - question: Kann ein Windows-Update für den Drucker-Fehlerstatus verantwortlich sein?
    answer: Ja. In der Vergangenheit haben kumulative Windows-Sicherheitsupdates (bekannt geworden unter anderem durch Fehler wie 0x0000011b oder RPC-Verbindungsfehler) wiederholt Druckertreiber lahmgelegt oder die Freigabekommunikation blockiert. In solchen Fällen hilft die Installation des neuesten herstellerspezifischen Type-4- oder PCL6-Treibers bzw. ein Patch-Update von Microsoft.
errorCodes:
  - Fehlerstatus
  - '0x0000011b'
  - Warteschlange blockiert
  - 'Status: Fehler'
brands: HP, Canon, Brother, Epson, Kyocera
selfFixLevel: 'Grün: Zu 95 % softwareseitig ohne Vorkenntnisse lösbar'
timeRequired: ca. 10 – 15 Min.
savedCost: ca. 80 – 150 € IT-Vor-Ort-Service
---

## Das Phänomen: Wenn Windows den Dienst quittiert

Sie möchten ein dringendes Dokument drucken, doch nichts geschieht. Ein Blick in die Windows-Einstellungen oder auf das Druckersymbol in der Taskleiste offenbart die lapidare Meldung: **„Drucker im Fehlerstatus“** (englisch: *Printer in error state*). Weder spuckt das Gerät Papier aus, noch blinkt am Drucker selbst zwangsläufig eine rote Warnleuchte. 

Für Betroffene ist dieser Zustand extrem frustrierend, weil Windows keine detaillierte Diagnose liefert. Doch die Entwarnung vorweg: In den allermeisten Fällen liegt weder ein kapitaler Hardwareschaden noch ein teurer Elektronikdefekt vor. Meist handelt es sich um ein rein softwareseitiges Kommunikationsproblem zwischen dem Windows-Drucksubsystem und dem Endgerät. Mit den folgenden Handgriffen bringen Sie HP-, Canon-, Brother-, Epson- oder Kyocera-Drucker binnen weniger Minuten wieder zum Laufen.

---

## Typische Ursachen für den „Fehlerstatus“

Windows fasst unter dem Begriff „Fehlerstatus“ dutzende verschiedene Auslöser zusammen. Um das Problem gezielt anzugehen, hilft ein Blick auf die häufigsten Störquellen:

* **Blockierter Windows Print Spooler:** Ein beschädigter Druckauftrag hängt in der Warteschlange fest. Nachfolgende Dokumente stauen sich an, der Dienst blockiert komplett.
* **Das WSD-Port-Problem:** Windows richtet Netzwerk- und WLAN-Drucker standardmäßig über *WSD (Web Services for Devices)* ein. Dieses Protokoll verliert nach IP-Wechseln oder Standby-Phasen oft den Kontakt zur Hardware.
* **Veraltete oder generische Treiber:** Nach großen Windows-Feature-Updates ersetzt das Betriebssystem Herstellertreiber gelegentlich durch Microsoft-Standardtreiber, die bidirektionale Statusmeldungen (z. B. Tintenstand, Klappenstatus) fehlerhaft verarbeiten.
* **Tiefschlaf- und Energiesparmodi:** Viele moderne Multifunktionsgeräte schalten in einen stromsparenden Ruhezustand (*Deep Sleep*). Antwortet der Drucker nicht innerhalb von Millisekunden auf das Wecksignal von Windows, stuft das Betriebssystem ihn sofort als fehlerhaft ein.
* **Physische Barrieren:** Nahezu unsichtbare Papierreste im Transportpfad, nicht eingerastete Patronen oder offene Wartungsklappen.

---

## Sofort-Reparatur: Die Windows-Druckerwarteschlange leeren (Spooler-Fix)

Wenn ein Dokument fehlerhaften PostScript-Code enthält oder mitten im Sendevorgang unterbrochen wurde, verbleiben Dateifragmente im Cache. Ein einfacher Klick auf „Druckauftrag abbrechen“ im Druckermenü friert in diesem Stadium meist ein. Hier hilft nur der manuelle Spooler-Reset.

### Methode A: Über die Windows-Diensteoberfläche

1. Drücken Sie die Tastenkombination `Windows-Taste + R`, um den Ausführen-Dialog zu öffnen.
2. Tippen Sie `services.msc` ein und drücken Sie Enter.
3. Scrollen Sie in der alphabetischen Liste bis zum Eintrag **Druckerwarteschlange** (Print Spooler).
4. Klicken Sie mit der rechten Maustaste auf den Dienst und wählen Sie **Beenden**.
5. Öffnen Sie den Windows-Explorer und navigieren Sie zu folgendem Pfad:  
   `C:\Windows\System32\spool\PRINTERS`  
   *(Hinweis: Windows fordert eventuell Administratorrechte an – bestätigen Sie mit „Fortfahren“).*
6. Markieren Sie alle Dateien in diesem Ordner (Endungen `.SPL` und `.SHD`) und **löschen Sie diese vollständig**.
7. Wechseln Sie zurück in das Dienste-Fenster, klicken Sie erneut mit der rechten Maustaste auf **Druckerwarteschlange** und wählen Sie **Starten**.

### Methode B: Schnellbefehl via Eingabeaufforderung (CMD)

Für Fortgeschrittene geht es per Konsole in Sekunden:

```cmd
net stop spooler
del /Q /F /S "%systemroot%\System32\Spool\Printers\*.*"
net start spooler
```

Starten Sie danach das Drucken der Testseite. In rund 70 % der Fälle ist das Problem damit bereits gelöst.

---

## Netzwerk- und WLAN-Drucker: Die WSD-Falle umgehen

Tritt der Fehlerstatus bei einem Drucker auf, der per WLAN oder LAN-Kabel mit Ihrem Router verbunden ist, liegt die Ursache fast immer im WSD-Port. Windows fragt den Status über eine dynamische Geräte-ID ab. Wechselt der Drucker im Router seine IP-Adresse oder wechselt in den Standby, bricht die Verbindung ab.

### So stellen Sie auf einen stabilen TCP/IP-Port um:

1. Öffnen Sie die klassische **Systemsteuerung** (einfach im Windows-Startmenü nach „Systemsteuerung“ suchen) und wählen Sie **Geräte und Drucker anzeigen**.
2. Klicken Sie mit der rechten Maustaste auf das betroffene Gerät und wählen Sie **Druckereigenschaften** (nicht bloß „Eigenschaften“).
3. Wechseln Sie zum Reiter **Anschlüsse**.
4. Prüfen Sie, welcher Anschluss markiert ist. Steht dort ein Haken bei `WSD-...`, klicken Sie darunter auf **Hinzufügen...**.
5. Wählen Sie **Standard TCP/IP Port** und klicken Sie auf **Neuer Anschluss...**.
6. Geben Sie im folgenden Assistenten die lokale IP-Adresse Ihres Druckers ein (z. B. `192.168.178.50`).
7. Schließen Sie die Konfiguration ab. Setzen Sie den Haken beim neu erstellten TCP/IP-Port und bestätigen Sie mit **Übernehmen**.

> **Tipp:** Vergeben Sie in den Einstellungen Ihres Internet-Routers (z. B. in der AVM FRITZ!Box unter *Heimnetz > Netzwerk*) für den Drucker die Option *„Diesem Netzwerkgerät immer die gleiche IPv4-Adresse zuweisen“*. Dadurch verhindern Sie zukünftige Adresskonflikte dauerhaft.

---

## Treiber sauber erneuern: Microsoft-Standard vs. Hersteller-Paket

Wenn Windows nach einem Update meldet, dass sich der Drucker im Fehlerstatus befindet, ist oft eine veraltete oder fehlerhafte Schnittstellendatei schuld.

1. **Treiber deinstallieren:** Gehen Sie in Windows 11/10 auf *Einstellungen > Bluetooth und Geräte > Drucker und Scanner*. Wählen Sie Ihr Gerät aus und klicken Sie auf **Entfernen**.
2. **Druckserver-Eigenschaften bereinigen:** Drücken Sie `Windows-Taste + R`, geben Sie `printui /s /t2` ein und bestätigen Sie. Suchen Sie in der Liste den Treiber Ihres Druckers, markieren Sie ihn und wählen Sie **Treiber und Treiberpaket entfernen**.
3. **Hersteller-Originaltreiber installieren:** Besuchen Sie die offizielle Support-Webseite Ihres Herstellers (Brother Solutions Center, HP Kundensupport, Canon Support etc.). Laden Sie nicht nur die vereinfachte App herunter, sondern das vollwertige **Treiber- und Softwarepaket** (oft als *Full Feature Driver* oder *PCL6-Treiber* bezeichnet).
4. Installieren Sie das Paket und verbinden Sie den Drucker erst dann wieder, wenn das Installationsprogramm dazu auffordert.

---

## Physische Checkliste: Klemmt es an der Hardware?

Lässt sich der Status trotz Spooler-Reset und Treibertausch nicht zurücksetzen, meldet die interne Firmware des Druckers ein mechanisches Problem an Windows weiter:

* **Mikro-Papierstau:** Öffnen Sie alle Klappen und leuchten Sie den Papierweg mit einer Taschenlampe ab. Selbst ein winziger Papierschnipsel von wenigen Millimetern an den Einzugswalzen oder dem optischen Sensor genügt, um die Fehlermeldung auszulösen.
* **Patronen- & Toner-Erkennung:** Entnehmen Sie die Tintenpatronen bzw. Tonerkartuschen. Reinigen Sie die goldenen Chip-Kontakte vorsichtig mit einem trockenen, fusselfreien Mikrofasertuch und setzen Sie sie mit festem Druck wieder ein.
* **Hard-Reset des Geräts:** Schalten Sie den Drucker ein. Ziehen Sie das Stromkabel direkt an der Rückseite des Druckers ab (nicht an der Steckdose ausschalten). Trennen Sie alle Datenkabel (USB/LAN). Warten Sie mindestens 60 Sekunden, damit sich die internen Speicherbausteine und Kondensatoren entladen. Stecken Sie das Stromkabel wieder ein und schalten Sie das Gerät ein.

Mit dieser Vorgehensweise lösen Sie den Fehlerstatus in nahezu allen Fällen eigenhändig auf, ohne teure Dienstleister oder Neuanschaffungen in Anspruch nehmen zu müssen.
