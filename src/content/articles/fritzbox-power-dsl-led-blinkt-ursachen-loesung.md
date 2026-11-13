---
title: 'FritzBox Power DSL blinkt: Ursachen & Soforthilfe bei Störung'
description: Blinkt die Power/DSL-LED an Ihrer FritzBox? Erkennen Sie DSL-Verbindungsabbrüche sofort und lösen Sie das Problem mit dieser geprüften Schritt-für-Schritt-Anleitung.
pubDate: '2026-11-13'
updatedDate: '2026-11-13'
category: router-wlan
heroImage: /images/articles/fritzbox-power-dsl-led-blinkt-ursachen-loesung.svg
keywords:
  - FritzBox Power DSL blinkt
  - FritzBox kein Internet
  - DSL Synchronisation fehlgeschlagen
  - FritzBox DSL antwortet nicht
  - Power DSL Leuchte blinkt grün
readingTime: 6
keyTakeaways:
  - Blinkt die Power/DSL-LED gleichmäßig grün, versucht das interne DSL-Modem vergeblich, eine stabile Trägerfrequenz zur Vermittlungsstelle (DSLAM) aufzubauen.
  - Häufige lokale Ursachen sind fehlerhafte TAE-Verkabelungen, Störungen durch Powerline-Adapter (PLC) oder alternde Router-Netzteile.
  - Gibt das FRITZ!OS-Ereignisprotokoll die Meldung 'DSL antwortet nicht' aus, liegt die Ursache oft außerhalb des Hauses direkt im Netz des Providers (Telekom, Vodafone, 1&1, o2).
steps:
  - step: 1
    title: Kabel- und Steckverbindungen akkurat kontrollieren
    summary: Überprüfen Sie das graue DSL-Kabel zwischen der FRITZ!Box (Buchse 'DSL') und der Telefondose (mittlerer Anschluss 'F' der TAE-Dose).
    tip: Verzichten Sie vollständig auf TAE-Verlängerungskabel, Adapterstücke oder zwischengeschaltete Splitter (bei modernen IP-Anschlüssen überflüssig). Stecken Sie das Kabel einmal komplett aus und wieder fest ein, bis es hörbar einrastet.
  - step: 2
    title: FRITZ!Box für 5 Minuten vollständig stromlos schalten
    summary: Trennen Sie das Netzteil der FRITZ!Box direkt an der Steckdose ab und warten Sie mindestens 3 bis 5 Minuten ab, bevor Sie den Stecker wieder einstecken.
    tip: Diese Wartezeit entlädt die internen Kondensatoren der FRITZ!Box und signalisiert dem Port in der Vermittlungsstelle (Linecard) einen sauberen Verbindungsneustart, anstatt eines abrupten Leitungsabrisses.
  - step: 3
    title: Ereignisanzeige auf fritz.box prüfen & Störsicherheit anpassen
    summary: Öffnen Sie im Browser http://fritz.box, navigieren Sie zu 'System > Ereignisse' und prüfen Sie die Kategorie 'Internetverbindung'.
    tip: 'Bei wiederkehrenden Abbrüchen hilft oft der Pfad ''Internet > DSL-Informationen > Störsicherheit'': Schieben Sie dort die Regler schrittweise von ''Maximale Performance'' in Richtung ''Maximale Stabilität''.'
faqs:
  - question: Wie lange dauert es normalerweise, bis die Power/DSL-LED dauerhaft leuchtet?
    answer: Nach einem Neustart oder dem Anstecken des DSL-Kabels benötigt die FRITZ!Box im Regelfall zwischen 90 Sekunden und 3 Minuten für den Trainings- und Synchronisationsprozess mit dem DSLAM. Erst wenn das Signal stabil steht, wechselt das Blinken in ein dauerhaftes grünes Leuchten.
  - question: Blinkt die LED schnell oder langsam – macht das einen Unterschied?
    answer: Ja. Ein langsames, regelmäßiges Blinken bedeutet, dass die FRITZ!Box die DSL-Leitung prüft und die Trägerfrequenzen synchronisiert. Blinkt die LED hingegen gemeinsam mit anderen Leuchten rhythmisch oder unregelmäßig, deutet dies häufig auf einen Neustart-Loop der Box (Firmware-Crash) oder ein defektes Netzteil hin.
  - question: Kann ein Powerline-/dLAN-Adapter das Blinken der DSL-Leuchte verursachen?
    answer: Ja, absolut. Powerline-Adapter nutzen das Stromnetz im Frequenzbereich von 2 bis 86 MHz. VDSL2 (insbesondere mit Supervectoring Profil 35b bis 35 MHz) nutzt denselben Frequenzbereich. Unzureichend geschirmte Strom- oder Telefonleitungen koppeln Störungen ein, die zum kompletten Synchronisationsverlust führen können.
  - question: Wann muss ich meinen Internetanbieter kontaktieren?
    answer: Wenn Sie die Verkabelung geprüft, den Router für 5 Minuten neugestartet haben und im Ereignisprotokoll weiterhin dauerhaft 'DSL antwortet nicht' vermerkt ist, liegt die Störung mit sehr hoher Wahrscheinlichkeit an der Leitung oder dem Port der Vermittlungsstelle. Melden Sie dann ein Ticket bei Telekom, Vodafone, 1&1 oder o2.
errorCodes:
  - Power/DSL blinkt
  - DSL antwortet nicht (Keine DSL-Synchronisierung)
  - 'PPPoE-Fehler: Zeitüberschreitung'
brands: AVM (FRITZ!Box 7590, 7530, 7690, 7490 u. a.)
selfFixLevel: 'Grün: Ohne Werkzeug und Vorkenntnisse selbst lösbar'
timeRequired: ca. 10 – 15 Min.
savedCost: ca. 60 – 120 € (Kosten für unberechtigte Techniker-Einsätze)
---

## Was bedeutet es, wenn an der FRITZ!Box die Power/DSL-LED blinkt?

Die Power/DSL-Leuchte ist die wichtigste Statusanzeige an modernen AVM-FRITZ!Box-Modellen für VDSL-, ADSL- und Glasfaser-Konfigurationen (wie der FRITZ!Box 7590 AX, 7530 AX, 7690 oder 7490). 

Im fehlerfreien Normalbetrieb leuchtet diese LED **durchgehend grün**. Das signalisiert: Die FRITZ!Box hat eine physikalische Verbindung zur Gegenstelle des Anbieters (dem sogenannten DSLAM bzw. MSAN am Straßenrand oder im Hauptverteiler) hergestellt und der Datenaustausch funktioniert.

Blinkt die Power/DSL-LED hingegen, befindet sich das integrierte Modem im sogenannten **DSL-Training**. Die Box versucht, ein hochfrequentes Signal auf der Kupfer-Doppelader aufzubauen, Datenraten auszuhandeln und die Leitung zu kalibrieren. Gelingt dies nach 2 bis 3 Minuten nicht, bricht der Versuch ab und beginnt von vorn. Für Sie als Nutzer bedeutet das: **Kein Internetzugang und keine IP-Telefonie**.

---

## Häufige Ursachen für den Verbindungsabbruch

Ein Scheitern der DSL-Synchronisation kann an unterschiedlichen Punkten der Übertragungskette entstehen:

1. **Physische Unterbrechung oder Leitungsdämpfung:** Ein lockerer Stecker, ein geknicktes DSL-Kabel oder oxidierte Kontakte in einer veralteten TAE-Dose verhindern, dass das Hochfrequenzsignal die FRITZ!Box mit ausreichendem Signal-Rausch-Verhältnis erreicht.
2. **Störquellen im Heimnetz (VDSL-Interferenzen):** Powerline- bzw. PLC-Adapter (dLAN) übertragen Daten über das 230V-Hausstromnetz. Da ungeschirmte Stromkabel wie Antennen wirken, strahlen sie hochfrequente Oberwellen direkt in parallel verlaufende Telefonleitungen ein. Das bringt VDSL-Vectoring und Supervectoring (Profil 35b) reproduzierbar zum Absturz.
3. **Schaltarbeiten oder Großraumstörung des Providers:** Wartungsarbeiten, Baggerarbeiten an Glasfasertrassen oder Defekte an der Linecard in der Vermittlungsstelle Ihres Netzbetreibers (Deutsche Telekom, 1&1, Vodafone, o2).
4. **Defekt des FRITZ!Box-Netzteils:** Ein bekanntes Phänomen bei älteren Routern: Das Netzteil liefert unter Last nicht mehr die volle Spannung. Während WLAN und Prozessor noch laufen, bricht die Spannungsversorgung des internen DSL-Frontends bei Verbindungsaufbau zusammen.

---

## Schritt-für-Schritt-Diagnose: So beheben Sie das Problem

Gehen Sie methodisch vor, um die Fehlerquelle systematisch einzugrenzen:

### 1. Verkabelung und Anschluss prüfen
* **Direktanschluss:** Das DSL-Kabel muss ohne Zwischenstecker direkt vom Router in den **mittleren Steckplatz (mit 'F' markiert)** der TAE-Dose führen. 
* **Keine Splitter verwenden:** Haben Sie noch einen alten DSL-Splitter zwischen Dose und FRITZ!Box? Entfernen Sie diesen restlos. Moderne IP-basierte Anschlüsse verlangen eine Direktverbindung.
* **Kabeltausch:** Falls zur Hand, tauschen Sie das graue DSL-Anschlusskabel gegen das Original-Kabel von AVM aus. Beschädigungen der dünnen Litzen im Kabelinneren sind von außen oft unsichtbar.

### 2. Kaltstart durchführen (Power-Cycle)
Ein einfaches Aus- und Einschalten reicht oft nicht aus. Gehen Sie wie folgt vor:
1. Ziehen Sie das Netzteil der FRITZ!Box aus der Steckdose.
2. Ziehen Sie das DSL-Kabel an der Box ab.
3. Warten Sie volle **5 Minuten**. Dies stellt sicher, dass der Port auf Anbieterseite den Verbindungsabbruch registriert und sich zurücksetzt.
4. Stecken Sie zuerst das DSL-Kabel wieder fest ein (achten Sie auf das Klick-Geräusch).
5. Stecken Sie das Netzteil wieder ein und beobachten Sie die LED ca. 3 Minuten lang.

### 3. Diagnose über die FRITZ!OS-Benutzeroberfläche
Können Sie sich per WLAN oder LAN-Kabel mit der FRITZ!Box verbinden, liefert das System exakte Protokolldaten:
1. Öffnen Sie den Browser und rufen Sie `http://fritz.box` oder die Notfall-IP `http://169.254.1.1` auf.
2. Melden Sie sich mit Ihrem FRITZ!Box-Kennwort an (steht meist auf der Geräteunterseite).
3. Klicken Sie links im Menü auf **System > Ereignisse** und wählen Sie im Dropdown den Filter **Internetverbindung**.

#### Typische Meldungen im Protokoll entschlüsseln:
* **„DSL antwortet nicht (Keine DSL-Synchronisierung)“:** Die FRITZ!Box empfängt überhaupt kein physikalisches Trägersignal. Entweder ist das Kabel defekt, die TAE-Dose nicht beschaltet oder die Leitung zur Vermittlungsstelle ist unterbrochen.
* **„DSL-Synchronisierung beginnt (Training)“:** Die Box sieht das Signal und verhandelt Parameter. Bricht der Vorgang immer hier ab, ist die Leitungsdämpfung zu hoch oder es liegt eine massive Einstreuung vor.
* **„PPPoE-Fehler: Zeitüberschreitung“:** Das DSL-Signal steht bereits (LED leuchtet dauerhaft), aber die Einwahl mit Ihren Zugangsdaten scheitert. Hier liegt das Problem auf den Authentifizierungsservern des Anbieters.

---

## Geheime Stellschraube: Störsicherheit anpassen

Wenn die Synchronisation zwar gelegentlich klappt, aber mehrmals täglich abbricht und die Power/DSL-LED erneut blinkt, ist Ihre Leitung instabil. In FRITZ!OS gibt es dafür ein mächtiges Bordmittel:

1. Aktivieren Sie in der FRITZ!Box-Oberfläche unten links die **Erweiterte Ansicht** (sofern noch nicht aktiv).
2. Navigieren Sie zu **Internet > DSL-Informationen > Störsicherheit**.
3. Klicken Sie unten auf **Einstellungen zur Störsicherheit**.
4. Setzen Sie die Regler für:
   * *Angestrebte Störabstandsmarge*
   * *Impulsstörfestigkeit (INP)*
   * *Erkennung von Funkstörungen (RFI)*
   jeweils um eine Stufe nach links in Richtung **„Maximale Stabilität“**.
5. Klicken Sie auf **Übernehmen**. Die FRITZ!Box synchronisiert sich neu. Dies kostet geringfügig Bandbreite (z. B. 2 bis 5 MBit/s weniger), stabilisiert grenzwertige Leitungen aber oft dauerhaft.

---

## Wann Sie den Entstördienst des Providers kontaktieren müssen

Wenn alle lokalen Prüfungen erfolglos blieben und das Ereignisprotokoll permanent *„DSL antwortet nicht“* meldet, liegt die Ursache im Zuständigkeitsbereich des Anbieters. 

**Wichtig vor dem Anruf:**
* Lassen Sie die FRITZ!Box am Stromnetz und an der TAE-Dose angeschlossen. Nur so kann der Servicemitarbeiter eine automatisierte Leitungsmessung bis zu Ihrem Modem durchführen.
* Halten Sie Ihre Vertrags- oder Kundennummer bereit.
* Weisen Sie ausdrücklich darauf hin, dass Sie Router-Neustart, Originalkabel und TAE-Sitz bereits geprüft haben. Das verhindert zeitraubende Standardabfragen und beschleunigt die Entstörung durch einen Außendiensttechniker.
