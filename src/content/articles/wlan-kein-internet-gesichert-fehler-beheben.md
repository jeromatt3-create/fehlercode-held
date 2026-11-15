---
title: 'Kein Internet, gesichert: WLAN-Fehler unter Windows schnell lösen'
description: WLAN meldet 'Kein Internet, gesichert'? Ursachen wie IP-Konflikte, DNS-Fehler & Router-Störungen erkennen und das Problem unter Windows 10 & 11 beheben.
pubDate: '2026-11-15'
updatedDate: '2026-11-15'
category: router-wlan
heroImage: /images/articles/wlan-kein-internet-gesichert-fehler-beheben.svg
keywords:
  - kein internet gesichert
  - wlan verbunden aber kein internet
  - kein internet gesichert windows 11
  - wlan zeigt kein internet gesichert an was tun
  - laptop hat wlan aber keine verbindung
  - gelbes ausrufezeichen wlan windows
  - wlan status kein internet gesichert beheben
readingTime: 7
keyTakeaways:
  - 'Die Meldung bedeutet: Die Funkverbindung zum Router steht und ist verschlüsselt (WPA2/WPA3), aber Windows kann keine Daten ins weltweite Netz senden oder empfangen.'
  - Häufigste interne Ursachen sind fehlerhafte DNS-Cache-Einträge, blockierende VPN-Software, veraltete Netzwerkadapter-Treiber oder eine fehlgeschlagene IP-Zuweisung per DHCP (APIPA-Adresse 169.254.x.x).
  - 'Prüfen Sie zuerst andere Geräte: Haben Smartphone oder Tablet im selben WLAN Internet, liegt das Problem fast immer lokal an Windows oder dessen Netzwerkeinstellungen, nicht an der DSL-, Kabel- oder Glasfaser-Leitung.'
steps:
  - step: 1
    title: Ausschluss-Test & Router-Neustart durchführen
    summary: Prüfen Sie, ob ein Smartphone im selben WLAN Internetzugriff hat. Trennen Sie danach den Router für ca. 30 Sekunden vom Stromnetz und starten Sie Windows neu.
    tip: Warten Sie nach dem Wiedereinstecken des Routers etwa 3 bis 5 Minuten, bis alle Status-LEDs (Power, DSL/Cable, WLAN) wieder dauerhaft grün oder weiß leuchten.
  - step: 2
    title: Windows-Netzwerkstack und DNS-Cache per CMD zurücksetzen
    summary: Öffnen Sie die Eingabeaufforderung als Administrator und führen Sie nacheinander 'netsh winsock reset', 'netsh int ip reset' sowie 'ipconfig /flushdns' aus.
    tip: Geben Sie anschließend 'ipconfig /renew' ein, um vom Router sofort eine frische, gültige lokale IP-Adresse anzufordern, und starten Sie den PC neu.
  - step: 3
    title: IPv4-Einstellungen auf 'Automatisch beziehen' prüfen & VPN deaktivieren
    summary: Kontrollieren Sie in den Windows-Netzwerkadapter-Eigenschaften, ob IP-Adresse und DNS-Serveradresse auf 'Automatisch (DHCP)' stehen. Schalten Sie aktive VPN-Clients oder Drittanbieter-Firewalls testweise ab.
    tip: Häufig hinterlassen deinstallierte oder abgestürzte VPN-Programme sogenannte 'Virtual Adapter' oder geänderte DNS-Einträge, die den regulären Datenverkehr blockieren.
faqs:
  - question: Warum steht bei mir 'Kein Internet, gesichert', obwohl mein Smartphone im selben WLAN surfen kann?
    answer: Wenn andere Endgeräte problemlos online sind, ist der Internetanschluss intakt. Das Problem liegt dann ausschließlich auf Ihrem Windows-Rechner – typischerweise an einem fehlerhaften DNS-Cache, einem veralteten WLAN-Treiber, einer blockierenden Sicherheitssoftware (VPN, Firewall) oder einer ungültigen manuellen IP-Konfiguration.
  - question: Was bedeutet eine IP-Adresse, die mit 169.254 beginnt?
    answer: Dabei handelt es sich um eine sogenannte APIPA-Adresse (Automatic Private IP Addressing). Sie zeigt an, dass Windows zwar eine WLAN-Funkverbindung zum Router hergestellt hat, der Router dem PC aber keine gültige IP-Adresse über DHCP zuweisen konnte. Ein Router-Neustart oder das Zurücksetzen des Netzwerkadapters behebt dies meist.
  - question: Kann ein Antivirenprogramm oder VPN den Status 'Kein Internet, gesichert' auslösen?
    answer: Ja, sehr häufig. VPN-Tunnel (z. B. NordVPN, Proton, ExpressVPN) oder tief im System verankerte Web-Schutzmodule von Drittanbieter-Antivirenprogrammen klinken sich in den Netzwerkstack ein. Kommt es zu einem Verbindungsabbruch oder fehlerhaften Update, wird jeglicher Internetverkehr blockiert, während die WLAN-Verbindung aktiv bleibt.
  - question: Was bewirkt die Option 'Netzwerk zurücksetzen' in den Windows-Einstellungen?
    answer: Diese Funktion deinstalliert alle Netzwerkadapter und installiert sie nach einem automatischen Systemneustart mit den Werkseinstellungen neu. Sämtliche benutzerdefinierten Einstellungen, VPN-Profile und gespeicherten WLAN-Passwörter werden dabei bereinigt. Es ist die effektivste Methode, wenn manuelle Konsolenbefehle scheitern.
  - question: Wann liegt die Störung sicher beim Internetanbieter?
    answer: Wenn keines Ihrer Geräte im Haushalt (weder Laptop noch Smartphone oder Smart-TV) Internetzugriff hat und an Ihrem Router die Kontrollleuchte für Internet/DSL/Fiber rot blinkt oder erloschen ist, liegt eine externe Leitungsstörung Ihres Providers (z. B. Telekom, Vodafone, o2) vor.
errorCodes:
  - Kein Internet, gesichert
  - DNS_PROBE_FINISHED_NO_INTERNET
  - 169.254.x.x (APIPA-Adresse)
  - Drahtlosnetzwerkverbindung eingeschränkt
brands: Microsoft Windows 10/11, AVM FRITZ!Box, Telekom Speedport, Vodafone Station
selfFixLevel: 'Grün: Ohne Werkzeug komplett selbst lösbar'
timeRequired: ca. 10 – 20 Min.
savedCost: ca. 80 – 150 € Vor-Ort-IT-Service
---

## Was bedeutet die Meldung „Kein Internet, gesichert“?

Die Statusmeldung **„Kein Internet, gesichert“** (unter Windows 10 und Windows 11) gehört zu den häufigsten und frustrierendsten Netzwerkfehlern im Alltag. Viele Nutzer interpretieren die Meldung falsch: Sie glauben, der Router sei komplett ausgefallen oder die WLAN-Verschlüsselung fehle.

Das Gegenteil ist der Fall:
* **„Gesichert“** bedeutet: Ihr Windows-PC ist erfolgreich per Funk mit dem Router verbunden, das WLAN-Passwort war korrekt und die Funkstrecke ist mit moderner Verschlüsselung (WPA2 oder WPA3) abgesichert.
* **„Kein Internet“** bedeutet: Ihr Rechner kann trotz bestehender Verbindung zum Router keine Datenpakete in das weltweite Netz (WAN) senden oder Antwortpakete empfangen.

Umgangssprachlich wird das Problem oft als *„WLAN verbunden, aber keine Verbindung“*, *„Laptop hat gelbes Ausrufezeichen beim WLAN“* oder *„WLAN geht nicht trotz vollem Empfang“* gesucht. Die Ursache kann entweder direkt auf dem Windows-Computer oder am Router bzw. Anschluss liegen.

---

## Schnelldiagnose: Liegt es am Rechner oder am Anschluss?

Bevor Sie tief in die Windows-Systemeinstellungen eingreifen, grenzen Sie die Fehlerquelle in weniger als einer Minute ein:

1. **Zweitgerät testen:** Nehmen Sie Ihr Smartphone oder Tablet, schalten Sie die mobilen Daten aus und verbinden Sie sich mit demselben WLAN. 
   * *Surft das Smartphone normal?* Der Internetanschluss und der Router funktionieren einwandfrei. Der Fehler liegt zu 100 % lokal auf Ihrem Windows-Rechner.
   * *Hat auch das Smartphone kein Internet?* Die Störung liegt am Router oder Ihrem Internetanbieter (Telekom, Vodafone, o2, 1&1 etc.).
2. **LED-Status am Router prüfen:** Werfen Sie einen Blick auf Ihre FRITZ!Box, Ihren Speedport oder Ihre Vodafone Station. Blinkt die Leuchte für „Power/DSL“, „Online“ oder „Internet“ rot oder erlischt sie, liegt eine Leitungsstörung vor.

---

## Schritt-für-Schritt-Lösungen unter Windows 10 und 11

Wenn der Anschluss intakt ist, lösen die folgenden Maßnahmen den Fehler in über 90 Prozent der Fälle.

### 1. Schneller Neustart von Router und Computer
Oft blockiert ein veralteter Adresskonflikt im Arbeitsspeicher des Routers oder des PCs die Kommunikation.
* Ziehen Sie das Netzteil des Routers aus der Steckdose, warten Sie ca. **30 Sekunden** und stecken Sie es wieder ein.
* Starten Sie Ihren PC neu (wählen Sie im Startmenü zwingend **„Neu starten“**, nicht „Herunterfahren“, da Windows beim normalen Herunterfahren oft den Schnellstart-Zwischenspeicher nutzt).

### 2. Windows-Netzwerkstack und DNS-Cache zurücksetzen
Fehlerhafte DNS-Einträge oder ein korrupter TCP/IP-Stack verhindern, dass Webseiten-Namen in IP-Adressen aufgelöst werden. Die Fehlerbehebung über die Konsole ist die verlässlichste Reparaturmethode:

1. Drücken Sie die Windows-Taste, tippen Sie **cmd** ein.
2. Klicken Sie mit der rechten Maustaste auf die **Eingabeaufforderung** und wählen Sie **„Als Administrator ausführen“**.
3. Geben Sie folgende Befehle nacheinander ein und bestätigen Sie jeweils mit der Eingabetaste:
   ```cmd
   netsh winsock reset
   netsh int ip reset
   ipconfig /release
   ipconfig /flushdns
   ipconfig /renew
   ```
4. Starten Sie den Rechner anschließend neu.

### 3. IP- und DNS-Zuweisung kontrollieren (DHCP aktivieren)
Manchmal sind versehentlich feste IP-Adressen oder fehlerhafte alternative DNS-Server hinterlegt, die nach einem Router-Wechsel nicht mehr erreichbar sind:

1. Drücken Sie **Windows-Taste + R**, geben Sie `ncpa.cpl` ein und drücken Sie Enter. Dies öffnet direkt die Netzwerkverbindungen.
2. Klicken Sie mit der rechten Maustaste auf Ihren **WLAN-Adapter** und wählen Sie **Eigenschaften**.
3. Doppelklicken Sie auf den Eintrag **Internetprotokoll, Version 4 (TCP/IPv4)**.
4. Vergewissern Sie sich, dass beide Optionen auf **„IP-Adresse automatisch beziehen“** und **„DNS-Serveradresse automatisch beziehen“** stehen.
5. *Experten-Tipp bei anhaltenden DNS-Problemen:* Sollte der automatische DNS Ihres Routers streiken, wählen Sie „Folgende DNS-Serveradressen verwenden“ und tragen Sie als bevorzugten DNS `1.1.1.1` (Cloudflare) oder `8.8.8.8` (Google) ein.

### 4. Gespeichertes WLAN entfernen und neu ankoppeln
Wenn Verschlüsselungs-Tokens oder Sicherheitsschlüssel nicht mehr synchron sind, hilft das Löschen des Profils:

* **Windows 11:** Öffnen Sie *Einstellungen > Netzwerk und Internet > WLAN > Bekannte Netzwerke verwalten*. Suchen Sie Ihr WLAN-Netzwerk und klicken Sie auf **„Nicht speichern“**.
* **Windows 10:** Unter *Einstellungen > Netzwerk und Internet > WLAN > Bekannte Netzwerke verwalten* das Netzwerk anklicken und auf **„Nicht speichern“** tippen.
* Klicken Sie danach in der Taskleiste auf das WLAN-Symbol, wählen Sie Ihr Netzwerk aus und geben Sie den WLAN-Netzwerkschlüssel erneut ein.

### 5. Störende VPNs und aggressive Sicherheitssoftware abschalten
Virtuelle private Netzwerke (VPNs) installieren virtuelle Netzwerk-Filtertreiber. Bricht die VPN-Verbindung unbemerkt ab, aktiviert der sogenannte „Kill Switch“ eine Blockade für den gesamten normalen Internetverkehr:

* Beenden Sie alle VPN-Programme vollständig über den Task-Manager.
* Deaktivieren Sie testweise Drittanbieter-Virenscanner (z. B. Avast, Bitdefender, Norton), um zu prüfen, ob deren Web-Filter den Datenverkehr blockieren. Der integrierte Microsoft Defender reicht als Schutz vollständig aus.

### 6. Netzwerkadapter-Treiber aktualisieren oder neu installieren
Ein veralteter Treiber für den verbauten Intel-, Realtek- oder MediaTek-WLAN-Chip kann nach Windows-Updates die Verbindung verlieren:

1. Drücken Sie **Windows-Taste + X** und wählen Sie den **Geräte-Manager**.
2. Klappen Sie den Bereich **Netzwerkadapter** auf.
3. Klicken Sie mit der rechten Maustaste auf Ihren WLAN-Adapter (oft erkennbar an Begriffen wie *Wi-Fi*, *Wireless-AC*, *AX200/AX210* oder *802.11ax/ac*).
4. Wählen Sie **Gerät deinstallieren** (Setzen Sie **keinen** Haken bei Treibersoftware vom Gerät löschen!).
5. Starten Sie Windows neu. Beim Hochfahren erkennt das Betriebssystem den Adapter automatisch und bindet ihn frisch ein.

---

## Häufige Spezialfälle & verwandte Fehlerbilder

### Die APIPA-Falle: Adresse 169.254.x.x
Wenn Sie in der Eingabeaufforderung `ipconfig` eingeben und Ihre WLAN-IPv4-Adresse mit `169.254.` beginnt, liegt ein DHCP-Fehler vor. Windows konnte keine IP-Adresse vom Router empfangen und hat sich selbst eine sogenannte APIPA-Notfalladresse zugewiesen. Das Internet bleibt damit gesperrt. Typische Ursache: Ein aktiver MAC-Filter im Router, der neue Geräte blockiert, oder ein voller DHCP-IP-Adressbereich in den Router-Einstellungen.

### Browser-Meldung: DNS_PROBE_FINISHED_NO_INTERNET
Öffnet sich bei der Meldung „Kein Internet, gesichert“ der Browser und meldet `DNS_PROBE_FINISHED_NO_INTERNET` oder `ERR_NAME_NOT_RESOLVED`, funktioniert die IP-Verbindung zwar auf physikalischer Ebene, aber Windows kann Servernamen (wie www.google.de) nicht in Zahlen auflösen. Hier hilft fast immer das Leeren des DNS-Caches (`ipconfig /flushdns`) oder das manuelle Eintragen des Google- oder Cloudflare-DNS-Servers.

### Zufällige Hardwareadressen (MAC-Adress-Randomisierung)
In Windows 10 und 11 ist standardmäßig oft die Option **„Zufällige Hardwareadressen“** aktiv. Dadurch wechselt Ihr Laptop bei jeder Verbindung scheinbar seine Identität. Manche Router (wie ältere Speedports oder restriktive Unternehmensnetzwerke) werten dies als fremdes Gerät und verweigern den Internetzugriff. Schalten Sie die Option unter *Einstellungen > Netzwerk und Internet > WLAN* versuchsweise ab.

---

## Fazit: Letzter Ausweg „Netzwerk zurücksetzen“

Sollte keiner der manuellen Schritte fruchten, bietet Windows eine eingebaute Radikalkur: Gehen Sie in die **Einstellungen > Netzwerk und Internet > Erweiterte Netzwerkeinstellungen > Netzwerk zurücksetzen**. Windows setzt alle Schnittstellen und Protokolle auf den Auslieferungszustand zurück. Nach dem anschließenden Neustart müssen Sie lediglich Ihr WLAN-Passwort neu eingeben – in den allermeisten Fällen surfen Sie danach wieder mit voller Bandbreite.
