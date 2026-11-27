---
title: 'DNS-Server antwortet nicht: So behebst du die Störung sofort'
description: Die Meldung „DNS-Server antwortet nicht“ blockiert dein Internet? Mit unserer Schritt-für-Schritt-Anleitung behebst du die Störung an PC und Router sofort.
pubDate: '2026-11-27'
updatedDate: '2026-11-27'
category: router-wlan
heroImage: /images/articles/dns-server-antwortet-nicht-beheben.svg
keywords:
  - DNS-Server antwortet nicht
  - warum geht mein internet trotz wlan nicht
  - DNS_PROBE_FINISHED_NXDOMAIN beheben
  - ERR_NAME_NOT_RESOLVED fritzbox
  - dns server ändern windows 11
  - kein internet dns server nicht erreichbar
  - dns cache leeren cmd flushdns
readingTime: 6
keyTakeaways:
  - Die Meldung bedeutet meist nicht, dass die Internetleitung physisch getrennt ist, sondern dass Domainnamen (z. B. fehlercodeheld.de) nicht in numerische IP-Adressen übersetzt werden können.
  - Ein kompletter Neustart des Routers und das Leeren des internen DNS-Caches (ipconfig /flushdns) beheben den Fehler in den allermeisten Alltagsszenarien sofort.
  - Temporäre DNS-Ausfälle beim Provider (Telekom, Vodafone, o2) lassen sich durch das Hinterlegen freier DNS-Server (z. B. 1.1.1.1 oder 8.8.8.8) zuverlässig umgehen.
steps:
  - step: 1
    title: Router- und Geräte-Neustart durchführen
    summary: Trenne deinen WLAN-Router (z. B. FRITZ!Box oder Speedport) für mindestens 30 Sekunden komplett vom Stromnetz. Starte währenddessen auch deinen PC, Mac oder das Smartphone neu.
    tip: Ziehe wirklich das Netzkabel und schalte nicht bloß das WLAN am Gerät aus, damit sich der Router-eigene Zwischenspeicher und die Verbindung zur Vermittlungsstelle neu initialisieren.
  - step: 2
    title: Lokalen DNS-Cache auf dem Rechner leeren
    summary: Auf Windows-Geräten sammelt das Betriebssystem veraltete Namensauflösungen. Öffne die Eingabeaufforderung (cmd) als Administrator und führe den Befehl 'ipconfig /flushdns' aus.
    tip: Gib anschließend zusätzlich 'ipconfig /renew' ein, um die IP-Konfiguration direkt vom Router neu anzufordern.
  - step: 3
    title: DNS-Server manuell auf zuverlässige Adressen umstellen
    summary: Trage in den Netzwerkeinstellungen deines Betriebssystems oder direkt im Router alternative DNS-Server ein, um den meist langsameren oder gestörten Provider-DNS zu umgehen.
    tip: Nutze primär '1.1.1.1' (Cloudflare) oder '8.8.8.8' (Google) für IPv4 bzw. '2606:4700:4700::1111' für IPv6. Diese Server bieten maximale Ausfallsicherheit.
faqs:
  - question: Was bedeutet die Fehlermeldung „DNS-Server antwortet nicht“ genau?
    answer: 'Das Domain Name System (DNS) fungiert als Telefonbuch des Internets: Es übersetzt Namen wie www.spiegel.de in maschinenlesbare IP-Adressen (z. B. 172.217.16.206). Antwortet der Server nicht, weiß der Browser schlicht nicht, unter welcher IP-Adresse die Website erreichbar ist – obwohl die physische Verbindung zum Netz oft steht.'
  - question: Warum habe ich vollen WLAN-Empfang, aber trotzdem kein Internet?
    answer: WLAN ist lediglich die lokale Funkverbindung zwischen deinem Gerät und dem Router. Steht die Funkverbindung, bedeutet das noch nicht, dass der Router Daten ins weltweite Internet weiterleiten kann oder der Namensserver erreichbar ist. Ein volles WLAN-Symbol zeigt daher nur den lokalen Funkkontakt an.
  - question: Welche alternativen DNS-Server sind sicher und empfehlenswert?
    answer: Besonders schnell und etabliert sind Cloudflare (1.1.1.1 / 1.0.0.1) sowie Google Public DNS (8.8.8.8 / 8.8.4.4). Für Nutzer mit hohem Datenschutzfokus empfiehlt sich Quad9 (9.9.9.9), da hier zusätzlich bösartige Phishing- und Malware-Domains blockiert werden und keine Nutzerprofile angelegt werden.
  - question: Wie leere ich den DNS-Cache auf einem Mac?
    answer: Öffne das Terminal (über Spotlight-Suche) und gib je nach macOS-Version den Befehl 'sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder' ein. Bestätige mit deinem Admin-Passwort. Danach ist der Cache geleert.
  - question: Was kann ich tun, wenn das Problem nur auf einem einzigen Gerät auftritt?
    answer: Wenn Handy und Fernseher problemlos surfen, liegt der Fehler nicht am Provider oder Router, sondern am Endgerät. Deaktiviere testweise VPN-Software, Drittanbieter-Antivirenprogramme mit Webschutz (z. B. Avast, Bitdefender) und setze den Netzwerkadapter in den Systemeinstellungen zurück.
errorCodes:
  - DNS_PROBE_FINISHED_NXDOMAIN
  - ERR_NAME_NOT_RESOLVED
  - DNS_PROBE_FINISHED_NO_INTERNET
  - DNS-Server antwortet nicht
brands: AVM FRITZ!Box, Telekom Speedport, Vodafone Station, Windows, Apple macOS
selfFixLevel: 'Grün: Zu 95 % ohne Werkzeug selbst lösbar'
timeRequired: ca. 10 – 15 Min.
savedCost: ca. 80 – 140 € Techniker-Einsatz
---

## Das Wichtigste auf einen Blick: Warum streikt das Internet?

Es ist eines der frustrierendsten Szenarien am Schreibtisch: Die WLAN-Anzeige deines Laptops zeigt vollen Empfang, die Power-LED am Router leuchtet ruhig vor sich hin – doch beim Aufrufen einer Webseite meldet der Browser beharrlich: **„DNS-Server antwortet nicht“** (oder englisch: *„DNS server not responding“*).

Das Domain Name System (DNS) ist das zentrale Adressbuch des weltweiten Datenverkehrs. Wenn du eine Domain in die Adresszeile eingibst, fragt dein Computer beim hinterlegten DNS-Server nach der zugehörigen IP-Adresse. Bleibt diese Antwort aus, scheitert der Seitenaufbau. Das bedeutet erfreulicherweise fast nie einen Hardwareschaden: In über 95 Prozent aller Fälle lässt sich die Störung innerhalb weniger Minuten mit gezielten Handgriffen selbst beheben.

---

## Typische Symptome und verwandte Fehlercodes

Je nachdem, welchen Browser oder welches Betriebssystem du nutzt, tritt der Fehler unter verschiedenen Namen auf. Alle folgenden Meldungen teilen sich dieselbe Kernursache:

* **Google Chrome:** `DNS_PROBE_FINISHED_NXDOMAIN`, `DNS_PROBE_FINISHED_BAD_CONFIG` oder `ERR_NAME_NOT_RESOLVED`.
* **Mozilla Firefox:** „Server nicht gefunden“ oder „Fehler: Serveradresse konnte nicht aufgelöst werden“.
* **Windows-Netzwerkdiagnose:** „Der DNS-Server antwortet nicht“ bzw. „Die Verbindung wird vom Remotegerät oder der Ressource nicht akzeptiert“.
* **macOS / Safari:** „Safari kann die Seite nicht öffnen, da der Server nicht gefunden werden kann“.
* **Umgangssprachliche Phänomene:** Messenger (wie WhatsApp) oder Games funktionieren noch, aber keine normalen Websites lassen sich im Browser aufrufen.

---

## Die 4 Hauptursachen für DNS-Ausfälle

Bevor du Einstellungen veränderst, lohnt sich ein kurzer Blick auf den Auslöser:

1. **Temporäre Störung beim Internetanbieter:** Standardmäßig vergibt dein Provider (Telekom, Vodafone, o2, 1&1) automatisch seine eigenen DNS-Server. Sind diese überlastet oder fehlerhaft konfiguriert, bricht die Namensauflösung für alle Kunden in einer Region ab.
2. **Überfüllter oder fehlerhafter DNS-Cache:** Windows und macOS speichern einmal aufgelöste Adressen zwischen. Ändert sich eine Adresse oder ist ein Eintrag korrupt, läuft jede Anfrage ins Leere.
3. **Router-Fehlzustand:** Auch in FRITZ!Box, Speedport oder Vodafone Station laufen kleine Hintergrunddienste, die sich im Dauerbetrieb aufhängen können.
4. **Blockade durch Sicherheitssoftware:** Aggressive Firewalls, Drittanbieter-Virenscanner oder fehlerhafte VPN-Adapter klinken sich in den Netzwerk-Stack ein und blockieren Port 53 (den Standard-DNS-Port).

---

## Sofort-Anleitung: So löst du das Problem Schritt für Schritt

Gehe die folgenden Schritte der Reihe nach durch. Sie sind nach Erfolgswahrscheinlichkeit und Einfachheit sortiert.

### 1. Router und Endgerät neu starten

Schalte den PC oder Mac aus. Ziehe anschließend das Netzteil deines Routers aus der Steckdose. Warte **mindestens 30 Sekunden**, bevor du ihn wieder einsteckst. Dadurch entladen sich die internen Kondensatoren, temporäre Caches werden gelöscht und der Router synchronisiert sich neu mit der Vermittlungsstelle deines Anbieters.

### 2. Den lokalen DNS-Cache leeren (DNS-Flush)

Auf Windows sammelt sich über Monate veralteter Datenmüll an. So säuberst du den Zwischenspeicher:

1. Drücke die Tastenkombination `Windows-Taste + R`.
2. Tippe `cmd` ein und drücke `Strg + Umschalt + Enter`, um die Eingabeaufforderung mit Administratorrechten zu starten.
3. Gib folgenden Befehl ein und bestätige mit Enter:
   ```text
   ipconfig /flushdns
   ```
4. Wenn die Erfolgsmeldung („Der DNS-Auflösungscache wurde erfolgreich geleert“) erscheint, setze das Netzwerk-Subsystem zurück:
   ```text
   netsh winsock reset
   ```
5. Starte deinen Computer neu.

### 3. DNS-Server manuell auf freie Anbieter umstellen

Wenn der Server deines Providers streikt, weichst du auf globale, extrem zuverlässige Hochleistungsserver aus. 

**Empfohlene Adressen:**
* **Cloudflare:** `1.1.1.1` (Alternativ: `1.0.0.1`)
* **Google:** `8.8.8.8` (Alternativ: `8.8.4.4`)
* **Quad9 (mit Malwareschutz):** `9.9.9.9`

#### Einrichtung unter Windows 11 / Windows 10:
1. Öffne die **Einstellungen** (`Windows-Taste + I`) > **Netzwerk und Internet**.
2. Klicke auf deine aktive Verbindung (**WLAN** oder **Ethernet**).
3. Suche den Bereich **DNS-Serverzuweisung** und klicke auf **Bearbeiten**.
4. Stelle von „Automatisch (DHCP)“ auf **Manuell** um und aktiviere den Schieberegler bei **IPv4**.
5. Trage bei *Bevorzugter DNS* `1.1.1.1` und bei *Alternativer DNS* `8.8.8.8` ein.
6. Bestätige mit **Speichern**.

#### Einrichtung auf dem Mac (macOS):
1. Öffne die **Systemeinstellungen** > **Netzwerk**.
2. Wähle deine aktive Verbindung (WLAN/Ethernet) und klicke auf **Details** > Reiter **DNS**.
3. Klicke unten links auf das **Plus-Zeichen (+)** und füge `1.1.1.1` sowie `8.8.8.8` hinzu.
4. Klicke auf **OK** und danach auf **Anwenden**.

### 4. VPNs und Drittanbieter-Virenscanner prüfen

Hast du eine VPN-Software installiert (z. B. NordVPN, Proton, ExpressVPN)? Deaktiviere sie probeweise oder deinstalliere den virtuellen Netzwerkadapter. Manche Programme hinterlassen nach einem Absturz ungültige Routen. Deaktiviere außerdem testweise externe Antiviren-Suiten wie Norton, Avast oder Kaspersky – der in Windows integrierte Microsoft Defender reicht als Schutz vollkommen aus und verursacht selten DNS-Blockaden.

---

## Wann liegt ein echter Leitungsschaden vor?

Leuchten an deinem Router die LEDs für „Power/DSL“ oder „Internet“ rot oder blinken ununterbrochen, liegt keine reine DNS-Konfigurationsstörung vor, sondern ein Synchronisationsverlust mit der Vermittlungsstelle. Prüfe in diesem Fall über mobile Daten auf Portalen wie *allestörungen.de*, ob eine Großraumstörung deines Anbieters gemeldet ist, bevor du die Service-Hotline anrufst.
