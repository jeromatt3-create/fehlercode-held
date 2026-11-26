---
title: 'FritzBox PPPoE-Fehler Zeitüberschreitung lösen: Schnelle Hilfe'
description: FritzBox meldet PPPoE-Fehler Zeitüberschreitung? Ursachen schnell erkennen, DSL- & Glasfaser-Probleme lösen und die Internetverbindung wiederherstellen.
pubDate: '2026-11-26'
updatedDate: '2026-11-26'
category: router-wlan
heroImage: /images/articles/fritzbox-pppoe-fehler-zeitueberschreitung-beheben.svg
keywords:
  - fritzbox pppoe fehler zeitüberschreitung
  - fritzbox internet zeitüberschreitung
  - pppoe fehler zeitüberschreitung telekom 1und1
  - fritzbox dsl verbunden aber kein internet pppoe
  - fritz box blinkt power dsl pppoe fehler
  - fritzbox pppoe zeitüberschreitung glasfaser
  - router meldet pppoe zeitüberschreitung was tun
readingTime: 6
keyTakeaways:
  - Bei einer Zeitüberschreitung antwortet die Gegenstelle (BNG/Server) des Providers gar nicht – das unterscheidet den Fehler von falschen Anmeldedaten.
  - Oft steht die physikalische DSL-Verbindung bereits ('DSL synchron'), aber die Session-Aushandlung scheitert an einem hängenden Port, Wartungsarbeiten oder falscher VLAN-Konfiguration.
  - Ein kompletter Kaltstart der Fritz!Box (15 Minuten stromlos, um die Provider-Session zu clearen) löst das Problem in rund der Hälfte aller Fälle.
steps:
  - step: 1
    title: Kaltstart durchführen & Leitungs-Sync prüfen
    summary: Prüfe in der Fritz!Box-Oberfläche unter 'Internet > DSL-Informationen', ob die physikalische DSL-Verbindung synchron ist. Trenne die Fritz!Box danach für mindestens 10 bis 15 Minuten komplett vom Stromnetz (Netzteil ziehen), damit der Einwahlserver des Anbieters (BNG) eine verwaiste Sitzung sicher verwirft.
    tip: 'Wichtig: Nicht sofort wieder einstecken! Viele DSL-Einwahlknoten brauchen bis zu 15 Minuten Inaktivität, um einen blockierten Port freizugeben.'
  - step: 2
    title: Zugangsprofil, VLAN-ID & Verkabelung kontrollieren
    summary: Öffne 'Internet > Zugangsdaten'. Wähle deinen korrekten Provider aus der Dropdown-Liste (nicht 'Anderer Internetanbieter', falls dein Anbieter gelistet ist). Bei Glasfaseranschlüssen (ONT) oder FTTH muss häufig eine spezifische VLAN-ID (z. B. VLAN 7 bei Telekom/1&1) hinterlegt sein. Prüfe zeitgleich das DSL-Kabel auf feste Arretierung.
    tip: Nutze stets das originale graue Fritz!Box-DSL-Kabel. Alte Telefonverlängerungskabel oder TAE-Zwischenstecker verursachen massive Paketverluste beim Handshake.
  - step: 3
    title: Großstörung prüfen & Port-Reset anfordern
    summary: Besteht der Fehler nach Neustart fort, liegt die Ursache fast immer auf Provider-Seite (Netzausfall, Linecard-Defekt im DSLAM oder blockierter BNG-Port). Prüfe Störungsportale und kontaktiere die Hotline deines Anbieters mit der Bitte um einen gezielten 'Line-Reset' bzw. 'Port-Reset'.
    tip: 'Sage dem Hotline-Mitarbeiter direkt: ''DSL synchronisiert erfolgreich, aber der PPPoE-Handshake läuft ins Timeout. Bitte führen Sie einen Port-Reset durch.'' Das spart endlose Standard-Fragen.'
faqs:
  - question: 'Was ist der Unterschied zwischen ''PPPoE-Fehler: Zeitüberschreitung'' und ''Anmeldung fehlgeschlagen''?'
    answer: Bei 'Anmeldung fehlgeschlagen' antwortet der Einwahlserver deines Anbieters, weist jedoch Benutzername oder Kennwort ab. Bei 'Zeitüberschreitung' (Timeout) reagiert die Gegenstelle (Broadband Network Gateway / BNG) überhaupt nicht auf die Anrufanfrage (PADI-Paket) deiner Fritz!Box – die Anfrage verpufft im Netz.
  - question: Warum tritt der PPPoE-Fehler oft mitten in der Nacht auf?
    answer: Provider führen Wartungsarbeiten an den Vermittlungsstellen (DSLAM/MSAN) und Servern typischerweise zwischen 02:00 und 06:00 Uhr durch. Dabei werden Linecards neu gestartet oder Software-Updates eingespielt. Der Fehler verschwindet am frühen Morgen meist automatisch.
  - question: Kann ein defektes DSL-Kabel einen PPPoE-Fehler verursachen?
    answer: Ja. Wenn das Kabel beschädigt ist oder Wackelkontakte aufweist, reicht das Signal zwar gelegentlich für eine grundlegende Synchronisation, doch die Datenübertragung bricht zusammen, sobald der Router die digitalen Anmeldepakete austauschen möchte.
  - question: Was bedeutet der Fehler bei einem Glasfaseranschluss (FTTH)?
    answer: Bei Glasfaser mit externem Modem (ONT) bedeutet der Timeout fast immer, dass entweder das LAN-Kabel zwischen ONT und Fritz!Box (WAN/LAN 1) fehlerhaft ist, das Glasfasermodem noch keine Freigabe hat oder in den Zugangsdaten die erforderliche VLAN-ID (meist VLAN 7) fehlt.
  - question: Hilft ein Zurücksetzen der Fritz!Box auf Werkseinstellungen?
    answer: In seltenen Fällen kann eine veraltete oder fehlerhafte Konfigurationsdatei nach einem Fritz!OS-Update die Ursache sein. Bevor du den Router zurücksetzt, solltest du jedoch zwingend ein Backup deiner Einstellungen erstellen und erst alle externen Ursachen (Provider-Störung, Kabel) ausschließen.
errorCodes:
  - 'PPPoE-Fehler: Zeitüberschreitung'
  - 'PPPoE-Fehler: Zeitüberschreitung (PADI)'
  - Internetverbindung ist fehlgeschlagen
brands: AVM (Fritz!Box), Deutsche Telekom, 1&1, Vodafone, o2 Telefónica
selfFixLevel: 'Grün: Meist selbst lösbar / Provider-Prüfung'
timeRequired: ca. 10 – 20 Min.
savedCost: ca. 80 – 150 € Technikerpauschale
---

## Was bedeutet „PPPoE-Fehler: Zeitüberschreitung“ in der Fritz!Box?

Wer in das Ereignisprotokoll seiner Fritz!Box blickt (`System > Ereignisse > Internetverbindung`) und dort die Meldung **„PPPoE-Fehler: Zeitüberschreitung“** vorfindet, steht vor einem weit verbreiteten Internet-Problem. Die Power/DSL-Leuchte leuchtet oder blinkt unruhig, WLAN funktioniert zwar lokal, aber keine Website lässt sich aufrufen. In der Übersicht meldet die Box schlicht: *„Nicht verbunden“*.

Das Kürzel **PPPoE** steht für *Point-to-Point Protocol over Ethernet*. Es handelt sich um das Standard-Verfahren, mit dem Router über DSL- oder Glasfaseranschlüsse (z. B. Deutsche Telekom, 1&1, Vodafone DSL oder o2) eine gesicherte Sitzung zum Internet-Knotenpunkt des Providers aufbauen.

Technisch passiert Folgendes:
1. Deine Fritz!Box synchronisiert zunächst die physikalische Leitung mit der Vermittlungsstelle (DSL-Synchronisation).
2. Anschließend sendet der Router ein Rundrufsignal (ein sogenanntes **PADI-Paket** = *PPPoE Active Discovery Initiation*) an den Einwahlserver des Anbieters (BNG – *Broadband Network Gateway*).
3. Reagiert dieser Server innerhalb eines definierten Zeitfensters (meist wenige Sekunden) überhaupt nicht, bricht die Fritz!Box den Vorgang ab und protokolliert: **PPPoE-Fehler: Zeitüberschreitung**.

---

## Der entscheidende Unterschied: Zeitüberschreitung vs. Falsche Anmeldedaten

Viele Nutzer vermuten sofort einen Tippfehler in den Zugangsdaten. Das ist bei diesem spezifischen Fehlercode jedoch ein Trugschluss:

* **„Anmeldung beim Internetanbieter ist fehlgeschlagen“:** Hier antwortet der Server des Providers, lehnt deine Zugangsdaten (Benutzername/Passwort) jedoch als ungültig ab.
* **„PPPoE-Fehler: Zeitüberschreitung“:** Der Server antwortet gar nicht. Die Datenpakete deiner Fritz!Box kommen entweder nicht an, oder die Antwort des Anbieters findet den Weg zurück zum Router nicht. Die Zugangsdaten wurden zu diesem Zeitpunkt meist noch nicht einmal ausgewertet.

Umgangssprachlich suchen Betroffene häufig nach *„FritzBox DSL synchron aber kein Internet“*, *„FritzBox Einwahl hängt“* oder *„Internet bricht ab Zeitüberschreitung“*. Es handelt sich dabei exakt um dieses Phänomen.

---

## Die häufigsten Ursachen im Überblick

1. **Wartungsarbeiten oder Flächenstörung beim Anbieter:** In der Praxis der mit Abstand häufigste Grund. Wenn Netzknoten modernisiert werden oder Glasfaser-Trassen beschädigt sind, schlägt die Einwahl fehl.
2. **Hängende Session am BNG (Broadband Network Gateway):** Nach einem kurzen Stromausfall oder einer Leitungsunterbrechung „glaubt“ der Einwahlserver oft noch, deine alte Sitzung sei aktiv. Er blockiert neue Verbindungsversuche.
3. **Linecard-Fehler in der Vermittlungsstelle:** Die Hardware-Baugruppe im grauen Straßenverteiler (DSLAM) hat sich aufgehängt und verarbeitet keine PPPoE-Pakete mehr.
4. **Falsche VLAN-Konfiguration (besonders Glasfaser/FTTH):** In Deutschland fordern DSL- und viele Glasfasernetze zwingend ein sogenanntes VLAN-Tagging (typischerweise **VLAN-ID 7** bei Telekom und 1&1). Fehlt dieser Wert, werden die Datenpakete im Providernetz verworfen.
5. **Leitungsmängel & Wackelkontakte:** Ein geknicktes DSL-Kabel oder oxidierte Kontakte in der TAE-Telefondose können das Hochfrequenzsignal so stark dämpfen, dass Steuerpakete verloren gehen.

---

## Schritt-für-Schritt zur Lösung: Sofortmaßnahmen

### 1. DSL-Status im Menü analysieren
Melde dich im Browser unter `fritz.box` an und wechsle zu:
`Internet > DSL-Informationen > Übersicht`.

* **Steht dort „DSL aus“ oder „Training“?** Das Problem liegt auf physikalischer Ebene. Prüfe das DSL-Kabel und warte ab, bis der Sync steht.
* **Steht dort „DSL bereit“ (mit grüner Markierung und Geschwindigkeitsanzeige)?** Die Leitung an sich funktioniert perfekt. Die Störung liegt rein in der logischen Einwahl auf Anbieterseite.

### 2. Der 15-Minuten-Kaltstart (Power-Cycle)
Ein einfaches Aus- und sofortiges Wiedereinschalten reicht oft nicht aus. Gehe planvoll vor:
* Ziehe das Netzteil der Fritz!Box aus der Steckdose.
* Trenne das DSL-Kabel von der TAE-Dose.
* **Warte volle 15 Minuten.** Viele Einwahlknoten der Telekommunikationsanbieter haben einen Timeout-Timer. Erst nach etwa 10–15 Minuten Inaktivität wird eine verwaiste IP-Sitzung im Rechenzentrum automatisch geschlossen.
* Stecke zuerst das DSL-Kabel wieder fest ein, danach den Netzstecker.

### 3. Zugangsprofil & VLAN-Einstellungen überprüfen
Überprüfe die hinterlegten Zugangsdaten unter `Internet > Zugangsdaten`:
* **Anbieter-Auswahl:** Achte darauf, dass dein exakter Provider ausgewählt ist (z. B. *Telekom*, *1&1*, *Vodafone*, *o2*). Verwende nicht die Option *„Anderer Internetanbieter“*, es sei denn, du nutzt einen regionalen City-Carrier (wie bspw. M-net, NetCologne oder wilhelm.tel).
* **VLAN-Einstellungen:** Klicke unten auf *„Verbindungseinstellungen ändern“*. Vergewissere dich, dass bei Anschlüssen, die auf dem Telekom-Vorleistungsnetz basieren, der Haken bei *„VLAN für den Internetzugang verwenden“* aktiv ist und die ID **7** eingetragen ist.

---

## Sonderfall: Glasfaseranschluss (FTTH) & externes Glasfasermodem

Wenn du eine Fritz!Box an einem Glasfaser-Modem (ONT) betreibst (z. B. Fritz!Box 7590 an einem Telekom-Glasfasermodem 2 über WAN / LAN 1):

* **Status-LEDs am ONT prüfen:** Am Glasfasermodem muss die „Glasfaser“- oder „PON“-LED dauerhaft grün leuchten. Blinkt sie oder leuchtet rot, hat das Modem keinen Lichtwellen-Kontakt – die Fritz!Box kann folglich keine PPPoE-Verbindung aufbauen.
* **Kabelverbindung:** Das Netzwerkkabel muss fest in der blauen WAN-Buchse (bzw. LAN 1) der Fritz!Box und dem LAN-Port des Modems stecken.
* **Glasfaser-Einrichtungslink:** Bei Neubereitstellungen verlangt die Telekom oft eine einmalige Aktivierung über die sogenannte Einrichtungs-ID im Registrierungsportal.

---

## Leitfaden für die Provider-Hotline: So sparst du Zeit

Wenn die Schritte 1 bis 3 das Problem nicht lösen, liegt der Fehler zu 95 % im Verantwortungsbereich des Netzbetreibers. Statt lange in Warteschleifen Zeit zu verlieren, solltest du beim Anruf direkt die richtigen Fachbegriffe verwenden:

> *„Guten Tag, meine Fritz!Box synchronisiert das DSL-Signal einwandfrei mit voller Bandbreite, allerdings scheitert der PPPoE-Handshake mit einem Timeout ('PPPoE-Fehler: Zeitüberschreitung'). Ich habe den Router bereits 15 Minuten stromlos gemacht, um Geister-Sessions auszuschließen. Bitte führen Sie einen Port-Reset an der Linecard durch oder prüfen Sie, ob auf meinem BNG-Einwahlknoten eine Störung vorliegt.“*

Dieser Hinweis signalisiert dem Support-Mitarbeiter sofort, dass keine Endgeräte-Prüfung mehr nötig ist. Der Mitarbeiter kann daraufhin direkt den Port im Verteilerkasten softwareseitig neustarten – was den PPPoE-Fehler in den allermeisten Fällen innerhalb von fünf Minuten dauerhaft behebt.
