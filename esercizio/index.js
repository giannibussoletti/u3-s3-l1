"use strict";
// 1) Quali sono i tipi primitivi principali in TypeScript?
//  i tipi primi  tivi sono gli stessi dei JS ma in più c'è any
// che "rompe" la tipizzazione di TS per rendere una variabile non tipizzata
// in grado cioè di poter cambiare il suo tipo di primitivo
// - string
// - number
// - boolean
// - undefined
// - null
// - any
const nome = "Gianni";
const età = 32;
const studiando = true;
const greet = (name) => {
    return "Ciao " + name;
};
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 20));
const prezzoIva = (noiva, iva = 22) => {
    return ((noiva / 100) * iva + noiva).toString().slice(0, 5) + "€";
};
console.log(prezzoIva(53.75));
const stringLength = (a, b) => {
    return (a + b).length;
};
console.log(stringLength("Ciao", " Mondo!"));
// Type Union
// rappresenta una variabile che può contenere più di un tipo di dato primitivo o complesso
// i vari tipi si dividono tramite la barra verticale |
let mixedType;
const numbersOne = [1, 2, 3];
const numbersTwo = [1, 2, 3];
const tuplaExample = [
    "Mi",
    "chiamo",
    "Gianni",
    32,
    1994,
];
const schoolStudents = [
    {
        studente: "Gianni",
        voto: 10,
    },
    {
        studente: "Francesco",
        voto: 8,
    },
];
