const { compile } = require("ejs")

console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.
console.log
class Wuerfel{
    constructor(){
        this.Wuerfelseite
        this.Wuerfelseite2
    }
}

let wuerfel = new Wuerfel()
wuerfel.Wuerfelseite = "3cm"
wuerfel.Wuerfelseite2 = "3cm"

console.log("Die Würfelseite beträgt 3cm")



// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

class Wuerfel2{
    constructor(){
        this.Wuerfelseite3
        this.Wuerfelseite4
    }
}
let wuerfel2 = new Wuerfel2()
wuerfel2.Wuerfelseite3 = "1000cm"
wuerfel2.Wuerfelseite4 = "1000cm"

console.log("Wuerfel2:" + Wuerfelseite2 = + "1000")



// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.



console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 

// 2a)
// Definieren Sie die class
class Zeugnis{
    constructor(){
        this.Deutsch
        this.Mathe
        this.Englisch
        this.Sport
        this.Wi 
        this.Bwl
        this.Economics
        this.Vwl
    }
}


// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.

let zeugnis = new Zeugnis()
zeugnis.Deutsch = "3"
zeugnis.Mathe = "2"
zeugnis.Englisch = "1"
zeugnis.Sport = "2"
zeugnis.Wi = "6"
zeugnis.Bwl = "4"
zeugnis.Economics = "3"
zeugnis.Vwl "3"


// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.

console.log("Zeugnis:" + zeugnis.Deutsch = + "3")

// 2d) NUR KLAUSURSCHREIBER
// Berechnen Sie die Durchnittsnote Ihres Objekts. Geben Sie die Durchschnittsnote auf der Konsole aus.




// 2e) NUR KLAUSURSCHREIBER
// Lisa hat die Durchsnittsnote 3, Tom hat die Durschnittsnote 4, Max hat die Durschnittsnote 5
// Vergleichen Sie Ihre Zeugnis-Objekt-Durchschnittsnote aus 2d) mit den Zeugnisdurchschnittsnoten von Lisa, Tom und Max.
// Wenn Ihre Zeugnis-Objekt-Durschnittsnote besser ist als die der anderen, dann soll das auf der Konsole entsprechend
// ausgegeben werden. Wenn die Note schlechter ist als die aller anderen, soll das ebenfalls ausgegeben werden.
// Ergänzen Sie die Eigenschaft "Klassenbeste" in Ihrem Zeugnisobjekt. 
// Setzen Sie die Eigenschaft entsprechend der Zeugnisnote auf true oder false
// Es hilft Ihnen dabei die Funktion Math.min() aus der Math-Bibliothek.
// Beispiel der Anwendung von Math.min():
// let x = Math.min(5, 10); --> Es werden 5 und 10 verglichen. x nimmt jetzt den Wert 5 an, da 5 der niedrigste der kommaseparierten Werte ist.






console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 

class Abrechnung {
    constructor(){
        this.Rabatt
        this.Netto-Rechnungsbetrag
        this.MwSt
        this.Brutto-Rechnungsbetrag
        this.Skonto
        this.Zahlungsbetrag
        this.Listenpreis
    }
}


// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.

let abrechnung = new abrechnung ()
abrechnung.Rabatt = "15%"
abrechnung.Netto-Rechnungsbetrag =  "1000"
abrechnung.MwSt = "19%"
abrechnung.Brutto-Rechnungsbetrag =  "3000"
abrechnung.Skonto = "2"
abrechnung.Zahlungsbetrag = "100"
abrechnung.Listenpreis = "200"
abrechnung.Rabat-Prozentsatz "5%"

// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
console.log("Listenpreis"* "Rabatt-Prozentsatz"/"100%")





// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.





// 3e) NUR KLAUSURSCHREIBER
// Das Skonto ist gestaffelt abhängig vom Brutto-Rechnungsbetrags.
// Brutto-Rechnungsbetrag kleiner als   |     Skonto
//                                  100 | 1
//                                  200 | 1,1
//                                  300 | 1,4
//                                  400 | 1,5
//                                  500 | 1,6
//                                  500 | 1,7
//                                  500 | 1,8
//                                  500 | 1,9
//                                  500 | 2

// Berechnen Sie das Skonto und geben Sie das Ergebnis auf der Konsole aus.

console.log("Aufgabe 4") // NUR KLAUSURSCHREIBER

// Sie wollen Ihre Auto-Kaufentscheidung mit einem Programm stützen.

// 4a) // NUR KLAUSURSCHREIBER
// Erstellen Sie zwei Auto-Objekte mit den Eigenschaften Name, Leistung, Geschwindigkeit, Preis, Verbrauch
// Initialisieren Sie mit realsitischen Werten.




// 4b) // NUR KLAUSURSCHREIBER
// Vergleichen Sie die beiden Autos:
// Wenn eines der Autos in Preis und Verbrauch besser ist, dann soll es das Auto werden.
// Wenn Preis und Verbrauch gleich sind, dann entscheidet die Geschwindigkeit.
// Wenn auch die Geschwindigkeit gleich ist, entscheidet die Leistung.
// Geben Sie entsprechende Antworten auf der Kosnole aus.