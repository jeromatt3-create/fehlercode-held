---
title: 'Miele Waschmaschine Fehler F20 beheben: Ursachen & Soforthilfe'
description: Miele Fehler F20 im Display? Das bedeutet der Heizungsfehler, so führen Sie den 2-Minuten-Reset durch und prüfen Heizstab sowie NTC-Sensor Schritt für Schritt.
pubDate: '2026-11-26'
updatedDate: '2026-11-26'
category: waschmaschine-trockner
heroImage: /images/articles/miele-waschmaschine-fehler-f20-beheben.svg
keywords:
  - Miele Waschmaschine Fehler F20
  - Miele F20 Heizungsfehler beheben
  - Miele Waschmaschine heizt nicht mehr
  - Miele Waschmaschine Thermostopp Fehler
  - Miele Fehlercode F20 resetten
  - Waschmaschine bricht ab Wasser bleibt kalt
  - Miele W1 Fehler F20
  - Miele Heizstab prüfen Multimeter
readingTime: 6
keyTakeaways:
  - 'Fehler F20 signalisiert eine Heizzeitüberschreitung: Das Waschwasser erreicht innerhalb der vom System vorgegebenen Zeitspanne nicht die Solltemperatur.'
  - Häufigste Auslöser sind ein durchgebrannter oder stark verkalkter Heizstab, ein defekter NTC-Temperaturfühler oder ein hängendes Heizrelais.
  - Ein kompletter 2-minütiger Netz-Reset behebt Software-Glitches; läuft ein Kaltwaschgang fehlerfrei durch, liegt das Problem garantiert im Heizkreislauf.
steps:
  - step: 1
    title: Vollständigen Netz-Reset (Power-Cycle) durchführen
    summary: Schalten Sie das Gerät am Ein/Aus-Schalter aus und ziehen Sie zwingend den Netzstecker aus der Steckdose (oder deaktivieren Sie die Sicherung). Warten Sie mindestens 2 bis 5 Minuten, damit sich alle Kondensatoren der Steuerungselektronik vollständig entladen können. Stecken Sie die Maschine wieder ein und schalten Sie sie ein.
    tip: Ein einfaches Ausschalten an der Blende genügt bei Miele-Geräten nicht, um den Fehlerspeicher der Heizüberwachung zurückzusetzen.
  - step: 2
    title: Ausschluss-Test mit Kaltwaschprogramm starten
    summary: Wählen Sie ein Programm ohne Beheizung (z. B. 'Express 20' oder 'Pflegeleicht' auf 'Kalt' bzw. 20 °C eingestellt). Beobachten Sie, ob das Programm ohne F20-Meldung durchläuft und abpumpt.
    tip: Läuft der Kaltwaschgang reibungslos bis zum Ende durch, ist die Mechanik, Pumpe und Wasserzufuhr intakt – der Fehler liegt isoliert im Heizsystem (Heizelement, NTC oder Relais).
  - step: 3
    title: Sicht- und Widerstandsprüfung an Heizung & NTC vornehmen
    summary: 'Trennen Sie das Gerät absolut spannungsfrei! Nach Abnehmen der Vorder- oder Rückwand (modellabhängig, z. B. Miele W1) werden die Flachstecker des Heizelements abgezogen. Messen Sie mit einem Multimeter den Durchgangswiderstand des Heizstabs (Sollwert: ca. 20 bis 30 Ohm) sowie den Isolationswiderstand gegen Gehäusemasse.'
    tip: Zeigt das Multimeter am Heizstab unendlichen Widerstand ('OL'), ist die Heizwendel durchgebrannt und das Heizelement muss ersetzt werden.
faqs:
  - question: Kann ich mit dem Fehler F20 trotzdem weiter waschen?
    answer: Ja, reine Kaltwaschgänge (z. B. 20 °C oder 'Kalt') lassen sich in den meisten Fällen problemlos starten und beenden, da das Heizelement dabei gar nicht angesteuert wird. Für hygienische Wäsche (z. B. Bettwäsche oder Handtücher bei 60 °C) ist die Reparatur jedoch unerlässlich.
  - question: Warum bricht die Maschine erst nach 20 bis 40 Minuten mit F20 ab?
    answer: Miele-Maschinen nutzen eine Sicherheitsfunktion namens Thermostopp. Zu Beginn der Waschphase wird geheizt. Die Steuerung wartet eine programmierte Höchstzeit ab. Steigt die Temperatur laut Sensor nicht um einen definierten Wert an, greift der Timeout-Schutz und die Maschine bricht mit F20 ab.
  - question: Was kostet der Austausch eines Miele-Heizstabs in Eigenregie?
    answer: Ein originaler Miele-Heizstab samt passender Dichtung kostet im Fachhandel ca. 45 bis 85 Euro. Führen Sie den Tausch selbst durch, sparen Sie die teuren Anfahrts- und Arbeitskosten des Werkskundendienstes von rund 150 bis 250 Euro.
  - question: Wie prüfe ich den NTC-Temperatursensor bei Miele?
    answer: 'Der NTC-Sensor sitzt direkt im Flansch des Heizelements. Ziehen Sie den Stecker ab und messen Sie den Widerstand: Bei Zimmertemperatur (ca. 20 °C) sollte er typischerweise zwischen 10 und 15 kOhm liegen. Sinkt der Wert bei Erwärmung (z. B. durch Handwärme), arbeitet der NTC korrekt.'
  - question: Kann auch zu geringer Wasserdruck den Fehler F20 auslösen?
    answer: Indirekt ja. Wenn zu wenig Wasser in der Trommel steht oder das Zulaufventil permanent tropft und ständig kaltes Frischwasser nachströmt, kann das Wasser nicht planmäßig auf Temperatur gebracht werden. In der Praxis ist jedoch in über 80 % der Fälle der Heizstab defekt.
errorCodes:
  - F20
  - F020
brands: Miele
selfFixLevel: 'Gelb: Äußere Prüfung & Reset selbst machbar – Bauteiltausch für Geübte'
timeRequired: ca. 20 – 40 Min.
savedCost: ca. 150 – 260 € Kundendienst
---

## Hintergrund & Grundlagen: Was bedeutet Fehler F20?

Der Fehlercode **F20** (bei manchen Modellen im Klartext als **„Heizungsfehler“** oder **„Störung Heizung“** dargestellt) ist eine Schutzfunktion moderner Miele-Waschmaschinen (darunter beliebte Baureihen wie die W1 Classic, Softtronic oder Novotronic).

Sobald ein Waschprogramm mit Temperaturvorwahl (z. B. 40 °C, 60 °C oder Kochwäsche) gestartet wird, aktiviert die Steuerplatine nach dem Wasserzulauf das Heizelement. Parallel dazu überwacht ein NTC-Temperatursensor (Heißleiter) fortlaufend den Anstieg der Laugentemperatur. 

Miele-Geräte sind mit einer sogenannten **Thermostopp-Logik** ausgestattet: Erreicht die Waschlauge innerhalb eines fest hinterlegten Zeitfensters (meist zwischen 15 und 35 Minuten) nicht die geforderte Temperaturkurve, stoppt die Elektronik das Programm sicherheitshalber ab. Dies verhindert Dauerschleifen, unnötigen Stromverbrauch und Folgeschäden an der Wäsche oder der Elektronik.

---

## Typische Symptome bei Fehler F20 im Alltag

Nutzer bemerken das Problem meist nicht sofort beim Start, sondern anhand typischer Begleiterscheinungen:

* **Programmabbruch mitten im Waschgang:** Die Maschine wäscht anfangs normal, bleibt dann aber nach ca. 20 Minuten stehen, piept und zeigt F20 an.
* **Bullauge bleibt kalt:** Bei einem 60-Grad-Programm fühlt sich das Glas des Bullauges nach einer halben Stunde vollkommen kalt an.
* **Verlängerte Restlaufzeit:** Die Restzeitanzeige bleibt über viele Minuten auf demselben Wert stehen (Thermostopp pausiert die Zeit).
* **Schlechte Waschwirkung:** Fette, Flecken und Gerüche werden nicht zuverlässig entfernt, Waschpulver löst sich unvollständig auf.
* **FI-Schutzschalter fliegt gelegentlich:** Hat der Heizstab einen Isolationsfehler gegen Erde, löst im Moment des Zuschaltens der Heizung der Fehlerstrom-Schutzschalter (RCD) im Sicherungskasten aus.

---

## Die häufigsten Ursachen im Detail

### 1. Unterbrechung oder Defekt am Heizelement (Heizstab)
Die mit Abstand häufigste Ursache (über 70 % aller Fälle) ist ein durchgebrannter Heizstab. Durch jahrelange thermische Belastung, Korrosion und Ausdehnung reißt die interne Glühwendel. Es fließt kein Strom mehr, das Wasser bleibt eiskalt.

### 2. Extreme Verkalkung des Heizkörpers
In Regionen mit hartem Leitungswasser legt sich bei mangelnder Dosierung oder seltenen Kochwaschgängen eine dicke Kalkschicht um das Heizelement. Kalk wirkt als Wärmeisolator. Die Wärme wird nicht schnell genug an das Wasser abgegeben, wodurch der Heizvorgang die Maximalzeit überschreitet und der Heizstab durch thermischen Hitzestau vorzeitig stirbt.

### 3. Defekter NTC-Temperaturfühler
Der Sensor sitzt zentral in der Dichtung des Heizelements. Liefert er falsche oder gar keine Werte (Kabelbruch, Wackelkontakt oder interner Sensordefekt), registriert die Steuerung keinen Temperaturanstieg, selbst wenn der Heizstab warm werden würde.

### 4. Hängendes oder verbranntes Heizrelais auf der Elektronik
Die Ansteuerung der Heizung erfolgt über ein Relais auf der Leistungselektronik (ELP). Brennen die Kontakte des Relais ab oder verkleben sie, wird die Heizung nicht mit der erforderlichen 230-V-Netzspannung versorgt.

### 5. Ständiger Kaltwasserzulauf (Einlassventil undicht)
Schließt das Magnetventil für den Kaltwasserzulauf nicht vollständig, strömt kontinuierlich eiskaltes Wasser in den Bottich. Die Heizung kommt gegen diesen permanenten Zulauf nicht an und das Zeitfenster läuft ab.

---

## Systematische Diagnose & Soforthilfe: Schritt für Schritt

> ⚠️ **WICHTIGER SICHERHEITSHINWEIS:**
> Bevor Sie Verkleidungen öffnen oder elektrische Bauteile berühren, trennen Sie die Waschmaschine IMMER vollständig vom Stromnetz (Netzstecker ziehen!). Lebensgefahr durch 230 Volt Wechselspannung!

### Schritt 1: Der Miele-Hard-Reset
Oft blockiert eine temporäre Schutzschaltung die weitere Ausführung:
1. Schalten Sie das Gerät aus.
2. **Ziehen Sie den Netzstecker für mindestens 2 bis 5 Minuten.** Ein reines Betätigen der Taste reicht nicht aus.
3. Stecken Sie den Stecker wieder ein und wählen Sie ein kurzes Abpump-/Schleuderprogramm, um eventuell stehendes Restwasser zu entfernen.

### Schritt 2: Kaltwaschtest zur Fehlerisolierung
Starten Sie ein normales Waschprogramm, stellen Sie die Temperatur jedoch manuell auf **„Kalt“** bzw. 20 °C:
* Läuft das Programm ohne Fehler F20 durch? Dann arbeiten Antrieb, Pumpe, Türverriegelung und Niveausensor einwandfrei. Der Defekt ist zu 100 % auf den Heizstromkreis eingegrenzt.

### Schritt 3: Heizstab und NTC-Sensor mit dem Multimeter durchmessen
Für handwerklich versierte Nutzer lässt sich das Heizelement einfach prüfen:
1. Gerät stromlos machen und Front öffnen (bei Miele meist über die Scharnierbolzen oder die Wartungsblende zugänglich).
2. Die beiden Zuleitungen (Flachstecker) am Heizstab vorsichtig abziehen.
3. **Widerstandsprüfung (Ohmmeter):** Messspitzen an beide Pole des Heizstabs halten. Ein intakter Heizstab hat bei 2.000–2.500 Watt Nennleistung einen Widerstand von ca. **20 bis 30 Ohm**.
   * Messwert ca. 25 Ω: Heizstab elektrisch in Ordnung.
   * Messwert unendlich / 'OL' / Megaohm: Heizstab durchgebrannt → Austausch erforderlich.
4. **Isolationsprüfung:** Eine Messspitze an einen Pol, die andere an den Schutzleiter / das Gehäuse halten. Der Wert muss unendlich hoch sein. Gibt es hier einen Durchgang, fliegt der FI-Schalter.
5. **NTC-Fühler messen:** Stecker abziehen. Bei Raumtemperatur (~20 °C) sollte der Widerstand ca. **10 bis 15 kΩ** betragen.

---

## Anleitung: Miele Heizstab selbst wechseln

Ist der Heizstab defekt, lässt er sich mit Standardwerkzeug (Steckschlüssel 10 mm) austauschen:
1. Restwasser über die Flusensiebentleerung komplett in ein flaches Gefäß ablassen.
2. Die zentrale Mutter in der Mitte des Heizflansches einige Umdrehungen lösen (nicht ganz abschrauben!).
3. Die Schraube vorsichtig nach innen drücken – dadurch entspannt sich die dahinterliegende Gummidichtung.
4. Den alten Heizstab behutsam mit leichten Hebelbewegungen aus dem Laugenbehälter herausziehen.
5. Den Einbauschacht auf Flusen und Kalkreste kontrollieren und reinigen.
6. Den neuen Original-Heizstab mit etwas Spülmittel an der Gummidichtung einsetzen, ganz einschieben (auf Führungsschiene im Bottich achten!) und die zentrale Mutter wieder handfest anziehen, sodass sich die Dichtung gleichmäßig verpresst.
7. Anschlüsse und Massekabel wieder fest aufstecken, Probelauf auf Dichtigkeit durchführen.

---

## Prävention: Wie Sie den Fehler F20 in Zukunft verhindern

* **Regelmäßige 60°C- und 90°C-Zyklen:** Wer ausschließlich bei 30 °C oder 40 °C wäscht, riskiert Fett- und Biofilmbildung an den Heizelementen. Mindestens einmal im Monat sollte Kochwäsche mit pulverförmigem Vollwaschmittel (enthält Bleichmittel) laufen.
* **Kalkschutz beachten:** Bei mittlerem bis hartem Wasser ab ca. 14 °dH die Waschmitteldosierung exakt an die Härte anpassen oder separaten Enthärter nutzen.
* **Halbjährliche Maschinenpflege:** Eine Heißwäsche mit spezieller Zitronensäure-Maschinenpflege löst beginnende Kalkbeläge vom Heizstab ab, bevor es zur Überhitzung kommt.
