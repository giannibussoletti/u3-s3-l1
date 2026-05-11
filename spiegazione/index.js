"use strict";
// tsc index.ts -w watch mode modifiche in tempo reale
console.log("hello :)");
// quali sono le principali novità a livello sintattico e di concetto di TS?
// TS introduce 1a TIPIZZAZIONE FORTE delle variabili!
// 1
// TIPI PRIMITIVI IN TS!
// string
// - number
// - boolean
// - undefined
// - null
// - in più aggiunge --> any
// una delle novità principali di TS è l'operatore di assegnazione di TIPO --> ":" i due punti
let x = 10; //JS assegnazione di valore
let y = 10; // assegnazione di tipo + valore, facendo questa cosa a questa variabile si potranno assegnare solo tipo assegnato (in questo caso numeri)
let z = "stefano";
let a = "roberto"; // TS capisce implicitamente il tipo a cui viene assegnato in base al valore assegnato
// questa DEDUZIONE AUT0MATICA di TS ha un nome: "TYPE INFERENCE"
let variabile = 50;
variabile = "stefano";
// il tipo any spegna qualsiasi controllo di tipo in typescript
//... meglio da evitare, altrimenti vale la pena rimanere in JS
// in un progetto serio in TS  NON ESISTONO variabili di tipo ANY!
// a differenza del valore il tipo non si può riassegnare
const diceCiao = function () {
    return "Ciao!";
};
console.log(diceCiao().length);
const lanciaDado = function () {
    const lancio = Math.ceil(Math.random() * 6);
    return lancio;
};
const n = lanciaDado();
const sum = function (n1, n2) {
    return n1 + n2;
};
sum(5, 4); // 11
// sum("5", "4") // 54
// sum(5, undefined) // 11
const sumWithOneNumber = function (n1, n2) {
    // il punto interrogativo specifica a TS che il secondo numero potrebbe non arrivare
    if (!n2) {
        return n1;
    }
    else {
        return n1 + n2;
    }
};
const sumWithDefault = function (n1, n2 = 0) {
    //   In questo caso il secondo numero ha un numero fisso e quindi il risultato addizionerà sempre i due numeri nel caso il secondo non venga
    //   chiamato esplicitamente
    return n1 + n2;
};
// UNIONE DI TIPI - TYPE UNION
let mixed; // <-- singola barra verticale dichiarazione di vari tipi
let personal; //<-- questa variabile può essere sia numero che stringa perché abbiamo creato un tipo personalizzato,
const giorno = "Lunedì"; //<-- questa variabile accetta solo le parole dichiarate nel suo type
// TIPI COMPLESSI
// ARRAY
// Come si assegna un tipo di array?
const arrayOfString = []; // Accetta solo valore di stringa
const arrayOfString2 = []; // Maniera alternativa per dichiarare un array
const mixedArray = [10, "gianni"]; //accetta sia numeri che stringhe
const mixedArray2 = [10, "gianni"]; //accetta sia numeri che stringhe
const arrayOfNumber = [10, 20]; // accetta solo numeri come array
// TUPLE
// una TUPLA è un particolare array in cui possiamo definire il tipo per ogni singolo elemento
const tuple = ["gianni", "rossi", 10, 20]; // questo array acceterà solo 4 elementi e solo ordinati per il tipo dichiarato
// questa tupla puà essere modificata, ma non c'è molto senso nel farlo quindi
// per rendere una tupla immutabile si può mettere readonly prima dell'array con i tipi da dichiarare
const tupleImmutable = ["gianni", "rossi", 10, 20];
const dog2 = {
    name: "Gian",
    age: 2,
    breed: "maremmano",
};
const dog3 = {
    name: "ciccio",
    age: 2,
    breed: "chihuahua",
    pedigree: "National",
};
// qui C sarà un number perché civicNumber è un numero
const add1 = {
    city: "Rome",
    street: "Via Dei Magazzini Generali",
    civicNumber: 16,
    zipCode: " 00154",
};
const add2 = {
    city: "Rome",
    street: "Via Dei Magazzini Generali",
    civicNumber: "25/C",
    zipCode: " 00154",
};
// Grazie all 'utilizzo di un GENERIC ("C") invece di un tipo statico per 1a proprietà "civicNumber", sono
// in grado di adattare l'interfaccia Address in diverse situazioni; posso utilizzarla per tipizzare un
// oggetto nel quale civicNumber è un numero, ma anche per un oggetto in cui civicNumber è una stringa,
// con una soluzione elegante che mi permette di evitare type unions, casting a stringa per tutti i valori
