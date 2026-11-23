---
title: 'Bosch Spülmaschine Fehler E19 beheben: Ursachen & Anleitung'
description: Bosch Spülmaschine zeigt Fehler E19? Ursachen am Ablaufventil & Dosiereinheit verstehen und das Problem Schritt für Schritt selbst lösen. Jetzt reparieren!
pubDate: '2026-11-23'
updatedDate: '2026-11-23'
category: spuelmaschine-kueche
heroImage: /images/articles/bosch-spuelmaschine-fehler-e19-beheben.svg
keywords:
  - Bosch Spülmaschine Fehler E19
  - Bosch Geschirrspüler E19 beheben
  - Fehlercode E19 Bosch Siemens
  - Spülmaschine bricht ab Fehler 19
  - Bosch Ablaufventil Wärmetauscher tauschen
  - Geschirrspüler Dosierkammer öffnet nicht E19
  - Bosch Spülmaschine Fehler E19 Reset
readingTime: 6
keyTakeaways:
  - In über 85 % aller Fälle wird Fehler E19 durch eine durchgebrannte Spule am Ablaufventil des Wärmetauschers (Wassertasche links) verursacht.
  - Zweithäufigste Ursache ist ein Defekt der Magnetspule in der Dosiereinheit (Spülmittelfach) oder ein Kabelbruch im Türkabelbaum.
  - 'Ein einfacher Reset hilft bei echtem Hardware-Defekt selten: Die Elektronik misst den Widerstand der Magnetventile beim Einschalten und sperrt das Programm bei Abweichungen sofort.'
steps:
  - step: 1
    title: Sicherheitsabschaltung & Elektronik-Reset (Kaltstart)
    summary: Trennen Sie den Geschirrspüler vollständig vom Stromnetz (Sicherung raus oder Netzstecker ziehen) und schließen Sie den Wasserhahn. Warten Sie 15 Minuten, um Restspannung in den Kondensatoren abzubauen, und schalten Sie das Gerät erneut ein.
    tip: Verschwindet der Fehler nach dem Kaltstart kurzzeitig, kehrt aber beim Einlaufen oder Abpumpen zurück, liegt definitiv ein elektromechanischer Komponentenfehler vor.
  - step: 2
    title: Linke Seitenwand abnehmen und Ablaufventil lokalisieren
    summary: Bauen Sie den Geschirrspüler vorsichtig aus der Küchenzeile aus. Schrauben Sie nach Entfernen der oberen Abdeckung die linke Seitenwand (Torx T20) ab. Dahinter liegt die große transparente Kunststoff-Wassertasche (Wärmetauscher). Unten links sitzt das elektrische Ablaufventil.
    tip: Legen Sie saugfähige Handtücher unter den Ventilsitz, da beim Herausziehen des Ventils etwas Restwasser aus der Wassertasche austreten kann.
  - step: 3
    title: Widerstandsmessung & Bauteiltausch durchführen
    summary: Ziehen Sie den zweipoligen Stecker vom Ablaufventil ab und messen Sie mit einem Multimeter den Spulenwiderstand. Liegt kein Messwert vor (unendlicher Widerstand / OL) oder misst das Gerät nahe 0 Ohm, ist das Ventil defekt. Drehen Sie das Ventil um 90 Grad gegen den Uhrzeigersinn heraus und setzen Sie ein passendes Original-Ersatzteil ein.
    tip: Der Soll-Widerstand einer intakten BSH-Ventilspule liegt in der Regel zwischen ca. 1,0 und 1,5 kΩ. Ist der Wert in Ordnung, liegt das Problem meist an der Tür-Dosiereinheit.
faqs:
  - question: Kann ich trotz Fehler E19 das Spülprogramm erzwingen?
    answer: Nein. Fehler E19 ist eine sicherheitsrelevante Schutzabschaltung der BSH-Steuerelektronik. Das Gerät verweigert den Programmstart oder bricht den laufenden Zyklus ab, um Folgeschäden an der Steuerplatine (wie durchgebrannte Leistungstriacs) zu verhindern.
  - question: Wo genau befindet sich das betroffene Ventil?
    answer: Das typischerweise fehlerhafte Ablaufventil sitzt auf der linken Seite des Geschirrspülers, am unteren Auslass des transparenten Wärmetauschers (der sogenannten Wassertasche). Um heranzukommen, muss das Gerät aus der Einbaunische gezogen und die linke Gehäusewand abgenommen werden.
  - question: Was kostet die Reparatur des E19-Fehlers in Eigenregie?
    answer: Das gängige Ersatzventil (BSH-Teilenummer meist 00631199 oder modellspezifisch ähnlich) kostet im freien Ersatzteilhandel etwa 15 bis 35 Euro. Wenn Sie den Austausch selbst durchführen, sparen Sie gegenüber einem Technikerbesuch rund 140 bis 220 Euro.
  - question: Warum erscheint der Fehler E19 sofort nach dem Einschalten?
    answer: Moderne Bosch-Geschirrspüler führen beim Einschalten eine Selbstdiagnose (Widerstandsmessung der Magnetspulen) durch. Erkennt das Steuermodul eine unterbrochene Leitung oder einen Kurzschluss am Ablaufventil bzw. an der Zugabevorrichtung, sperrt die Elektronik die Maschine sofort, noch bevor Wasser einfließt.
  - question: Was bedeutet der Fehlercode E69-00 im Vergleich zu E19?
    answer: E69-00 (oder E6900) ist bei neueren Bosch- und Siemens-Modellreihen mit Klartext- oder Segmentdisplays der exakt identische Diagnosecode für Fehler E19. Beide verweisen unmittelbar auf eine Störung der Dosiereinheit oder des Auslassventils am Wärmetauscher.
errorCodes:
  - E19
  - F19
  - E69-00
  - E6900
brands: Bosch, Siemens, Neff, Constructa, Balay
selfFixLevel: 'Gelb: Mittelschwer – Bauteiltausch mit Werkzeug machbar'
timeRequired: ca. 30 – 45 Min.
savedCost: ca. 140 – 220 € Kundendienstkosten
---

## Hintergrund & Grundlagen zum Fehlercode E19

Wenn Ihre Bosch Spülmaschine mitten im Betrieb abbricht, laut piept oder direkt nach dem Einschalten **Fehler E19** (oder variantenabhängig **F19** bzw. **E69-00**) im Display anzeigt, ist der Ärger groß. Das Geschirr bleibt nass und schmutzig, und die Maschine verweigert beharrlich jeden weiteren Dienst. Viele Nutzer befürchten in diesem Moment einen teuren Totalschaden der Elektronik.

Die gute Nachricht vorweg: Der Fehler E19 ist einer der am besten dokumentierten Standardfehler im gesamten BSH-Konzern (Bosch, Siemens, Neff, Constructa). Er weist präzise darauf hin, dass die Steuerungselektronik einen unplausiblen elektrischen Widerstand an einem internen Aktor gemessen hat. Konkret betrifft dies in der überwältigenden Mehrheit aller Fälle entweder das **Ablaufventil am Wärmetauscher** oder das **Magnetventil der automatischen Dosierkammer** in der Gerätetür.

Mit etwas handwerklichem Grundwissen, einem Torx-Schraubendreher und einem einfachen Multimeter lässt sich dieser Defekt in etwa 30 bis 45 Minuten eigenständig diagnostizieren und für einen Bruchteil der Kundendienstkosten beheben.

---

## Typische Ursachen für den Fehler E19 im Detail

Das Selbsterkennungssystem moderner Geschirrspüler überwacht die elektrischen Verbraucher permanent über definierte Messströme. Kommt es zu Abweichungen, blockiert das System das Gerät. Folgende vier Ursachen stecken hinter E19:

### 1. Defekt am Ablaufventil des Wärmetauschers (Häufigkeit: ca. 85 %)
Der Wärmetauscher – auch als Wassertasche bekannt – ist ein flaches, transparentes Kunststofflabyrinth an der linken Geräteseite. Am unteren Ende sitzt ein elektromagnetisches Ventil (Ablaufventil / Auslassventil). Es sorgt dafür, dass das im Wärmetauscher vorgewärmte Wasser zum passenden Zeitpunkt in den Spülbehälter nachfließt. Durch ständige thermische Belastung und Feuchtigkeit brennt die feine Wicklung der Magnetspule im Inneren des Ventils nach einigen Betriebsjahren durch. Die Steuerung misst keinen Durchgang mehr und meldet E19.

### 2. Defekte Magnetspule der Dosiereinheit in der Tür
In der Innentür befindet sich die Zugabevorrichtung für Spültabs und Klarspüler. Das Öffnen der Klappe erfolgt über einen kleinen elektromagnetischen Hubmagneten oder Wachsmotor. Weist diese Spule einen internen Kurzschluss oder eine Unterbrechung auf, setzt die Elektronik denselben Fehlercode.

### 3. Kabelbruch im Knickbereich der Tür
Jedes Mal, wenn Sie die Spülmaschinentür öffnen und schließen, wird der Kabelbaum im unteren Scharnierbereich mechanisch gebogen. Nach mehreren tausend Spülgängen kann eine der Zuleitungen zur Dosiereinheit brechen. Das Ergebnis: Die Verbindung zur Steuerung ist unterbrochen, und Fehler E19 erscheint, obwohl das Ventil selbst intakt wäre.

### 4. Folgeschaden auf der Leistungselektronik (Triac-Defekt)
Hatte das Ablaufventil vor seinem Ausfall einen satten Kurzschluss, kann der auf der Steuerplatine zuständige Halbleiterschalter (Triac) überlastet und zerstört worden sein. In diesem Fall hilft selbst ein neues Ventil nicht mehr, da die Steuerung den Aktor nicht mehr ansteuern kann.

---

## Erste Soforthilfe & Diagnose vor dem Werkzeugeinsatz

Bevor Sie die Spülmaschine ausbauen und Gehäuseteile abschrauben, sollten Sie eine systematische Eingrenzung vornehmen:

1. **Kaltstart durchführen (Hard-Reset):** Schalten Sie das Gerät nicht nur am Power-Knopf aus. Nehmen Sie die Spülmaschine für mindestens 15 bis 20 Minuten komplett vom Netz (Sicherung im Verteilerkasten umlegen). Dadurch entladen sich alle Kondensatoren der Steuerungselektronik. Schalten Sie das Gerät wieder ein. Tritt der Fehler unverzüglich wieder auf, handelt es sich definitiv um einen permanenten Hardwaredefekt.
2. **Auftrittszeitpunkt beobachten:** 
   - Tritt E19 *sofort* beim Einschalten auf? -> Starker Verdacht auf unterbrochene Wicklung am Ablaufventil oder Kabelbruch.
   - Tritt E19 *während des Klarspülens/Trocknens* auf? -> Oft hängt das Ventil mechanisch oder die Dosiereinheit klemmt.

---

## Schritt-für-Schritt Reparaturanleitung: Ablaufventil tauschen

### Benötigtes Werkzeug & Ersatzteile:
- Torx-Schraubendreher (Größe T20)
- Schlitzschraubendreher oder flache Zange
- Digitalmultimeter (zur Widerstandsmessung)
- Handtücher und flache Auffangschale
- Neues Ablaufventil (Original BSH-Ersatzteil, z. B. Teilenummer 00631199 für gängige Baureihen)

### Sicherheitswarnung:
> **Lebensgefahr durch elektrischen Strom!** Trennen Sie die Spülmaschine vor Beginn sämtlicher Arbeiten zwingend allpolig vom Stromnetz (Netzstecker ziehen oder Leitungsschutzschalter im Sicherungskasten ausschalten). Schließen Sie zusätzlich das Eckventil der Wasserzuleitung.

### Schritt 1: Gerät vorbereiten und ausbauen
1. Lösen Sie die Befestigungsschrauben, mit denen der Geschirrspüler an der Unterseite der Küchenarbeitsplatte fixiert ist.
2. Ziehen Sie das Gerät vorsichtig etwa 30 bis 50 Zentimeter aus der Nische hervor. Achten Sie darauf, die Schläuche für Zu- und Ablauf nicht einzuklemmen oder übermäßig zu knicken.

### Schritt 2: Linke Seitenwand demontieren
1. Lösen Sie die Schrauben an der Frontkante und Rückseite der linken Gehäusewand (in der Regel zwei Torx-Schrauben vorne und zwei hinten).
2. Hängen Sie das Seitenblech nach oben bzw. hinten aus. Nun haben Sie freien Blick auf die große Kunststoff-Wassertasche.

### Schritt 3: Ablaufventil prüfen und messen
1. Suchen Sie das Ablaufventil: Es sitzt im unteren Drittel auf der rechten Seite der Wassertasche (Richtung Maschinenmitte).
2. Ziehen Sie den zweipoligen Stecker vorsichtig nach oben ab.
3. Schalten Sie Ihr Multimeter in den Widerstandsmessbereich (Ohm / Ω, Messbereich bis 20 kΩ).
4. Halten Sie die beiden Messspitzen an die Kontakte des Ventils:
   - **Sollwert:** Ein intaktes Ventil liefert ca. **1,0 bis 1,5 kΩ** (1000 bis 1500 Ohm).
   - **Fehlerhaft:** Zeigt das Messgerät „OL“, „1“ (unendlich hoher Widerstand) oder exakt „0 Ohm“ (Kurzschluss), ist die Spule durchgebrannt.

### Schritt 4: Ventil ausbauen und erneuern
1. Legen Sie saugfähige Handtücher unter das Ventil, um heraustropfendes Restwasser aufzufangen.
2. Greifen Sie das Kunststoffgehäuse des Ventils und drehen Sie es um eine Vierteldrehung (ca. 90 Grad) gegen den Uhrzeigersinn.
3. Ziehen Sie das Ventil vorsichtig gerade nach vorne heraus. Achten Sie darauf, die Dichtung an der Wassertasche nicht zu beschädigen.
4. Setzen Sie das neue Ventil ein, drücken Sie es fest in die Öffnung und verriegeln Sie es durch eine Drehung um 90 Grad im Uhrzeigersinn.
5. Stecken Sie den Kabelstecker wieder fest auf die Kontakte.

### Schritt 5: Probelauf und Montage
1. Schließen Sie Wasser und Strom provisorisch an.
2. Starten Sie ein kurzes Spül- oder Vorspülprogramm.
3. Beobachten Sie die Dichtigkeit am neuen Ventil: Es darf kein Tropfwasser austreten, und der Fehler E19 darf nicht mehr erscheinen.
4. Nach erfolgreichem Testlauf schalten Sie das Gerät wieder stromlos, montieren das Seitenblech und schieben den Geschirrspüler wieder zurück in die Einbauzeile.

---

## Alternative Prüfung: Dosiereinheit & Türkabelbaum

Sollte die Messung am Ablaufventil des Wärmetauschers überraschenderweise einen korrekten Wert um 1,2 kΩ ergeben, liegt der Fehler fast ausnahmslos an der Zugabevorrichtung in der Gerätetür:

1. Lösen Sie die inneren Torx-Schrauben der Edelstahltür, um die äußere Dekorfront abzunehmen.
2. Begutachten Sie den Kabelbaum, der im Scharnierbereich nach oben führt. Häufig sieht man bereits Scheuerstellen oder durchtrennte Einzellitzen.
3. Ziehen Sie den Stecker an der Dosiereinheit ab und messen Sie auch dort den Spulenwiderstand. Eine defekte Dosierkammer muss als komplette Baugruppe gewechselt werden.

---

## Wann lohnt sich der Fachbetrieb?

In seltenen Fällen bleibt der Fehlercode E19 selbst nach dem Einbau eines neuen Original-Ventils bestehen. Ursache hierfür ist in fast allen Fällen ein Folgeschaden auf dem Leistungsmodul (Steuerplatine am Gerätesockel):

- Ist auf der Platine ein kleiner Triac (elektronisches Schaltrelais) geplatzt oder zeigt Brandspuren, erfordert dies Lötarbeiten auf Chiplevel-Ebene oder den kompletten Tausch des Steuermoduls.
- Liegt Ihr Gerät noch innerhalb der zweijährigen gesetzlichen Gewährleistung oder einer Garantieverlängerung, sollten Sie auf keinen Fall selbst schrauben, sondern direkt den BSH-Werkskundendienst kontaktieren.
- Für alle Geräte außerhalb der Garantie gilt: Der Tausch des Ablaufventils ist eine der dankbarsten DIY-Reparaturen im Haushalt, die mit minimalem Geldeinsatz viel Elektroschrott vermeidet.
