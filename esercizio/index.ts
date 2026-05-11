// 1) Quali sono i tipi primitivi principali in TypeScript?
//  i tipi primitivi sono gli stessi dei JS ma in più c'è any
// che "rompe" la tipizzazione di TS per rendere una variabile non tipizzata
// in grado cioè di poter cambiare il suo tipo di primitivo
// - string
// - number
// - boolean
// - undefined
// - null
// - any

const nome: string = "Gianni"
const età: number = 32
const studiando: boolean = true

const greet = (name: string) => {
  return "Ciao " + name
}

const sum = (a: number, b: number): number => {
  return a + b
}
console.log(sum(10, 20))

const prezzoIva = (noiva: number, iva = 22) => {
  return ((noiva / 100) * iva + noiva).toString().slice(0, 5) + "€"
}

console.log(prezzoIva(53.75))

const stringLength = (a: string, b: string) => {
  return (a + b).length
}

console.log(stringLength("Ciao", " Mondo!"))

// Type Union
// rappresenta una variabile che può contenere più di un tipo di dato primitivo o complesso
// i vari tipi si dividono tramite la barra verticale |

let mixedType: number | null | undefined

type WeekDay = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica"

const numbersOne: number[] = [1, 2, 3]
const numbersTwo: Array<number> = [1, 2, 3]

const tuplaExample: readonly [string, string, string, number, number] = [
  "Mi",
  "chiamo",
  "Gianni",
  32,
  1994,
]
// Qual è la differenza tra type e interface?
// il type definisce il tipo di singola variabile dichiarata, che può essere primitiva come numeri o lettere
// la interface crea degli oggetti con al suo interno delle variabili tipizzate

interface Person {
  firstname: string
  lastname: string
  age: number
}

interface FormEmail {
  email: string
  tel?: number
}

interface SingleStudent {
  studente: string
  voto: 5 | 6 | 7 | 8 | 9 | 10
}

const schoolStudents: Array<SingleStudent> = [
  {
    studente: "Gianni",
    voto: 10,
  },
  {
    studente: "Francesco",
    voto: 8,
  },
]

interface Veicolo {
  ruote: number
  motore: boolean
  assistenzaParcheggio: boolean
  ariaCondizionata: boolean
}

interface Auto extends Veicolo {
  casaMadre: string
  targa: string
  prezzo: number
  assicurata: boolean
}

// Cosa sono i Generics in TypeScript?
//È possibile avere più tipi generici in un'interfaccia?

// I Generics sono dei placeholder che si usano nelle interfacce quando non si è sicuri
// di quale tipo la variabile riceverà e si possono essere molteplici in una stessa interfaccia

interface SinglePost {
  userId: number
  id: number
  title: string
  body: string
}
