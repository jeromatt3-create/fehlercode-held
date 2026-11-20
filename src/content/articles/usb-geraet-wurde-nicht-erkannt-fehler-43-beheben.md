---
title: 'USB-Gerät wurde nicht erkannt (Fehler 43): Schnelle Windows-Lösung'
description: USB-Gerät wurde nicht erkannt (Fehler 43)? So beheben Sie den Geräte-Manager-Fehler unter Windows 10 & 11 schnell, sicher und ohne teuren PC-Notdienst.
pubDate: '2026-11-20'
updatedDate: '2026-11-20'
category: pc-smartphone
heroImage: /images/articles/usb-geraet-wurde-nicht-erkannt-fehler-43-beheben.svg
keywords:
  - USB-Gerät wurde nicht erkannt Fehler 43
  - Windows dieses Gerät wurde angehalten Code 43
  - USB-Stick wird nicht erkannt Windows 11
  - Externe Festplatte Code 43 beheben
  - USB Anschluss funktioniert plötzlich nicht mehr
  - USB Controller Treiber neu installieren Fehler 43
  - USB Gerät nicht erkannt Deskriptoranforderung fehlgeschlagen
readingTime: 7
keyTakeaways:
  - Fehler 43 bedeutet, dass der Windows-Treiber das USB-Gerät gestoppt hat, weil die Hardware einen Kommunikationsabbruch oder ungültige Deskriptoren gemeldet hat.
  - In über 70 % der Fälle ist das USB-Gerät nicht defekt; stattdessen blockieren korrumpierte Treiber-Caches, Windows-Schnellstart-Reste oder aggressive Stromsparfunktionen den Port.
  - Ein vollständiger Kaltstart mit Reststromentladung sowie das gezielte Deinstallieren des USB-Hostcontrollers im Geräte-Manager beheben die Störung meist dauerhaft.
steps:
  - step: 1
    title: Vollständigen Kaltstart durchführen & Reststrom entladen
    summary: Trennen Sie alle USB-Geräte ab, fahren Sie den Computer herunter, ziehen Sie das Stromkabel (beim Laptop auch den Akku, falls entnehmbar) und halten Sie den Power-Button 30 Sekunden lang gedrückt.
    tip: Der Windows-Schnellstart hält USB-Controller oft im Standby-Cache. Durch das Entladen der Kondensatoren auf dem Mainboard wird der USB-Bus-Chip komplett zurückgesetzt.
  - step: 2
    title: Fehlerhaften USB-Treiber im Geräte-Manager deinstallieren
    summary: Drücken Sie 'Windows-Taste + X', wählen Sie den 'Geräte-Manager', klappen Sie 'USB-Controller' auf, klicken Sie mit der rechten Maustaste auf den Eintrag mit dem gelben Ausrufezeichen und wählen Sie 'Gerät deinstallieren'.
    tip: Setzen Sie keinen Haken bei 'Treibersoftware vom Gerät löschen'. Starten Sie danach einfach den PC neu – Windows bindet den Standardtreiber automatisch sauber neu ein.
  - step: 3
    title: Selektives USB-Energiesparen in Windows deaktivieren
    summary: Gehen Sie in die Windows-Systemsteuerung zu den Energieoptionen, klicken Sie auf 'Energiesparplaneinstellungen ändern' > 'Erweiterte Energieeinstellungen ändern' und stellen Sie 'Einstellung für selektives USB-Energiesparen' auf 'Deaktiviert'.
    tip: Externe 2,5-Zoll-Festplatten und Audio-Interfaces fordern beim Anlaufen kurzzeitig mehr Strom an; die Drosselung durch Windows bricht die Verbindung sonst mit Code 43 ab.
faqs:
  - question: Bedeutet Fehler 43 immer, dass mein USB-Gerät kaputt ist?
    answer: Nein. In den meisten Fällen handelt es sich um ein Software- oder Cache-Problem zwischen dem Windows-USB-Stack und dem Controller. Ein echter Hardwaredefekt liegt meist erst vor, wenn das Gerät auch an zwei anderen, unabhängigen Computern mit identischem Fehler den Dienst verweigert.
  - question: Warum meldet Windows 'Deskriptoranforderung fehlgeschlagen'?
    answer: Dieser Zusatz bei Fehler 43 besagt, dass Windows beim Einstecken versucht hat, grundlegende Geräteinformationen (wie Herstellerkennung und Betriebsmodus) abzufragen, das Gerät daraufhin aber nicht oder nur mit verstümmelten Datenpaketen geantwortet hat. Ursache sind oft Wackelkontakte, verschmutzte Kontakte oder Spannungseinbrüche.
  - question: Hilft ein USB-Hub bei der Beseitigung von Fehler 43?
    answer: Ein passiver Hub (ohne eigenes Netzteil) verschlimmert das Problem häufig, da sich mehrere Geräte die 500 bzw. 900 mA des Ports teilen müssen. Ein aktiver USB-Hub mit eigenem Stromnetzteil kann das Problem hingegen dauerhaft lösen, wenn der USB-Port des Mainboards zu wenig elektrische Spannung liefert.
  - question: Warum tritt der Fehler 43 häufig nach einem Windows-Update auf?
    answer: Funktionsupdates überschreiben gelegentlich herstellerspezifische Chipsatz-Treiber (z. B. von Intel, AMD oder ASMedia) mit generischen Microsoft-Standardtreibern. Eine manuelle Installation des Original-Chipsatztreibers von der Mainboard-Herstellerseite behebt dies in der Regel.
  - question: Kann ein defektes USB-Kabel Fehler 43 auslösen?
    answer: Ja, sehr häufig. Wenn die beiden Datenleitungen (D+ und D-) im USB-Kabel beschädigt oder schlecht geschirmt sind, fließt zwar noch Ladestrom (die Status-LED leuchtet), der digitale Daten-Handshake scheitert jedoch – Windows bricht die Verbindung mit Code 43 ab.
errorCodes:
  - Fehler 43
  - Code 43
brands: Microsoft Windows, Dell, HP, Lenovo, Asus, Acer, Fujitsu
selfFixLevel: 'Grün: In den meisten Fällen rein per Software lösbar'
timeRequired: ca. 10 – 15 Min.
savedCost: ca. 60 – 120 € IT-Support / PC-Werkstatt
---

## Was bedeutet 'USB-Gerät wurde nicht erkannt (Fehler 43)'?

Die Meldung *„Dieses Gerät wurde angehalten, weil es Fehler gemeldet hat. (Code 43)“* gehört zu den häufigsten Fehlermeldungen im Windows-Geräte-Manager. Für Betroffene ist sie besonders frustrierend, weil sie extrem unspezifisch formuliert ist: Ein USB-Stick, eine externe Festplatte, eine Maus oder ein Headset wird eingesteckt, Windows gibt den bekannten Warnton aus, und im Infobereich der Taskleiste erscheint der Hinweis, dass das USB-Gerät nicht richtig funktioniert.

Technisch betrachtet greift hier ein Schutzmechanismus des Windows-Betriebssystems: Das USB-Subsystem versucht nach dem Einstecken den sogenannten **Bus-Enumeration-Prozess**. Dabei fragt der Host-Controller über standardisierte Datenpakete die Identifikationsdaten des Geräts ab (Gerätedeskriptor). Kommt es bei diesem Datenaustausch zu Timeouts, ungültigen Checksummen oder meldet der interne Mikrocontroller des USB-Geräts ein Fehlersignal zurück (Status `STATUS_DEVICE_DATA_ERROR`), zieht Windows die Notbremse: Der entsprechende USB-Port wird logisch deaktiviert, um Hardwareschäden und Systemabstürze (Bluescreens) zu verhindern.

---

## Typische Ursachen & verwandte Fehlermeldungen

Unter Windows 10 und Windows 11 tritt der Fehler 43 in verschiedenen Varianten und Symptomen auf:

* **Deskriptoranforderung fehlgeschlagen (Device Descriptor Request Failed):** Windows konnte nicht einmal auslesen, um welches Gerät es sich handelt. Im Geräte-Manager steht dann meist *„Unbekanntes USB-Gerät“*.
* **Fehler beim Festlegen der Adresse (Set Address Failed):** Das Gerät reagiert zwar elektrisch, kann aber logisch nicht auf den USB-Bus eingebunden werden.
* **Sporadisches Abmelden im Sekundentakt:** Das Gerät wird erkannt, bricht die Verbindung ab, verbindet sich neu und endet schließlich dauerhaft im Code 43.

### Die vier häufigsten Fehlerquellen in der Praxis:
1. **Treiber- und Stack-Blockaden:** Nach Systemabstürzen oder unvollständigen Windows-Updates verbleiben veraltete Treiber-Handles im Arbeitsspeicher.
2. **Aggressives Energiemanagement:** Windows schaltet USB-Ports ab, um Strom zu sparen – insbesondere an Notebooks im Akkubetrieb.
3. **Mangelnde Stromversorgung (Spannungsabfall):** Externe 2,5"-HDDs oder RGB-Peripherie ziehen beim Hochdrehen mehr als die spezifizierten 500 mA (USB 2.0) bzw. 900 mA (USB 3.0), wodurch die Schnittstelle abstürzt.
4. **Physische Kontaktprobleme:** Staub im Port, ausgeleierte Buchsen oder beschädigte Schirmungen in Billigkabeln stören die hochfrequente Datenübertragung.

---

## Systematische Schritt-für-Schritt-Fehlerbehebung

Gehen Sie die folgenden Lösungen der Reihe nach durch. Sie sind nach steigender Komplexität geordnet und erfordern keine teure Spezialsoftware.

### 1. Der Kaltstart mit Reststromentladung (Mainboard-Reset)
Der moderne Windows-Schnellstart (*Fast Startup*) fährt den Rechner nicht wirklich komplett herunter, sondern versetzt den Kernel in einen Ruhezustand (Hibernation). Dadurch bleiben verharrende Fehler im USB-Controller-Chip oft über Tage hinweg bestehen.

1. Trennen Sie **alle** USB-Geräte vom Computer (außer kabelgebundene Tastatur/Maus, falls nötig).
2. Fahren Sie den PC vollständig herunter.
3. Ziehen Sie das Netzkabel aus der Steckdose (bei Laptops: Netzteil abziehen und, sofern vorhanden, den Akku entnehmen).
4. Drücken und halten Sie den **Power-Einschaltknopf für 30 bis 40 Sekunden** durchgehend gedrückt. Dadurch entladen sich die Kondensatoren auf dem Mainboard restlos.
5. Schließen Sie den Strom wieder an und starten Sie Windows neu.
6. Stecken Sie das betroffene USB-Gerät **direkt an einen rückseitigen USB-Port des Mainboards** (nicht an die Gehäusefront oder einen Hub).

### 2. USB-Controller im Geräte-Manager zurücksetzen
Oft reicht es, wenn Windows gezwungen wird, die Hardware-Erkennung von Grund auf neu zu durchlaufen:

1. Drücken Sie die Tastenkombination `Windows-Taste + X` und wählen Sie im Menü den **Geräte-Manager**.
2. Scrollen Sie nach unten zur Kategorie **USB-Controller** und klappen Sie diese auf.
3. Suchen Sie nach Einträgen mit einem gelben Dreieck oder der Bezeichnung *„Unbekanntes USB-Gerät (Fehler beim Anfordern einer Gerätebeschreibung)“*.
4. Führen Sie einen Rechtsklick darauf aus und wählen Sie **Gerät deinstallieren**.
5. *Wichtig:* Deinstallieren Sie nun auch alle Einträge mit dem Namen **USB-Root-Hub** bzw. **Generischer USB-Hub** per Rechtsklick.
6. Starten Sie Ihren Computer neu. Windows erkennt die gelöschten Controller beim Hochfahren automatisch wieder und installiert die Werkstreiber frisch.

### 3. Selektives USB-Energiesparen deaktivieren
Die automatische Stromsparfunktion von Windows trennt inaktive Ports oft zu voreilig. Um das zu unterbinden:

1. Drücken Sie `Windows-Taste + R`, tippen Sie `control` ein und drücken Sie Enter, um die klassische Systemsteuerung zu öffnen.
2. Navigieren Sie zu **Hardware und Sound > Energieoptionen**.
3. Klicken Sie neben Ihrem aktuell ausgewählten Sparplan auf **Energiesparplaneinstellungen ändern**.
4. Wählen Sie **Erweiterte Energieeinstellungen ändern**.
5. Suchen Sie in der Liste den Punkt **USB-Einstellungen > Einstellung für selektives USB-Energiesparen**.
6. Stellen Sie die Optionen (sowohl *Auf Akku* als auch *Netzbetrieb*) auf **Deaktiviert**.
7. Bestätigen Sie mit *Übernehmen* und *OK*.

### 4. Chipsatz- und Host-Controller-Treiber aktualisieren
Wenn Windows nach einem großen Funktionsupdate generische Treiber geladen hat, kann es zu Inkompatibilitäten kommen:

* Bei Desktop-PCs: Besuchen Sie die Support-Seite des Mainboard-Herstellers (z. B. MSI, ASUS, Gigabyte, ASRock) und laden Sie die neuesten **Chipsatz-Treiber (Intel INF / AMD Chipset Driver)** herunter.
* Bei Notebooks: Nutzen Sie die herstellereigenen Tools wie *Dell Command Update*, *Lenovo Vantage* oder *HP Support Assistant*, um System- und BIOS-Updates einzuspielen. Veraltete BIOS-Versionen enthalten häufig bekannte Bugs im USB-Powermanagement.

---

## Wann liegt ein echter Hardwaredefekt vor?

Sollten alle Software-Maßnahmen wirkungslos bleiben, grenzen Sie den Fehler mit einem simplen Ausschlussverfahren ein:

* **Gegentest an einem Zweitgerät:** Schließen Sie den USB-Stick oder die Festplatte an einen anderen PC, ein Notebook oder einen Smart-TV an. Erscheint dort sofort derselbe Fehler oder bleibt das Gerät gänzlich stumm, ist der controller-interne Flash-Speicher, die Lötstelle an der USB-Buchse oder die Platine defekt.
* **Wärmeentwicklung prüfen:** Wird der USB-Stick bereits nach wenigen Sekunden im Port extrem heiß, deutet dies auf einen internen Kurzschluss hin. Ziehen Sie das Gerät sofort ab, um den USB-Port Ihres Mainboards nicht dauerhaft zu beschädigen.
* **Geräuschentwicklung bei Festplatten:** Klackert, piept oder schleift eine externe Festplatte nach dem Einstecken, liegt ein mechanischer Schaden der Schreib-/Leseköpfe vor. In diesem Fall hilft keine Software-Lösung mehr; wichtige Daten können dann nur noch von einem professionellen Datenrettungslabor wiederhergestellt werden.
