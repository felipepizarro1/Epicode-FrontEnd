/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num1 = prompt("Inserisci il primo num");
const num2 = prompt("Inserisci il secondo num");

const solution = num1 < num2 ? "Il numero " + num2 + "è il più grande" : "Il numero " + num1 + "è il più grande";
console.log(solution);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const notcinque = prompt("Inserisci un numero che magari sia 5");

const solution2 = notcinque != 5 ? "not equal" : "Grazie per il 5!";

console.log(solution2);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const divisibile = prompt("Inserisci un numero");
const solution3 = divisibile % 5 == 0 ? "Divisibile per 5!!" : "not divisibile";

console.log(solution3);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numero1 = 5;
const numero2 = 3;

const solution4 = numero1 + numero2 == 8 || numero1 - numero2 == 8 || numero1 == 8 || numero2 == 8   ? "la addizione|sottrazione o il valore di uno di essi è 8!!" : "nope";

console.log(solution4);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 37;
const differenza = 50 - totalShoppingCart;

const solution5 = totalShoppingCart >= 50 ? "Spedizione gratuita!" : ("Aggiunge " + differenza + "al carrello per la spedizione gratuita. Costo de spedizione : 10");

console.log(solution5);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const discount = totalShoppingCart - (totalShoppingCart * 0.2);
const differenza2 = 50 - discount;
const solution6 = discount >= 50 ? "Spedizione gratuita!" : ("Aggiunge " + differenza2 + "al carrello per la spedizione gratuita. Costo de spedizione : 10");

console.log(solution6);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prima = 2;
const seconda = 3;
const terza = 5;

if (prima<seconda<terza){
  console.log("Ordine: " + prima, seconda, terza);
} else if (seconda<terza<prima){
  console.log("Ordine: "+ seconda, terza, prima)
} else if (terza<seconda<prima){
  console.log("Ordine:" + terza, seconda, prima);
} else if (prima<terza<seconda){
  console.log("Ordine: " + prima, terza, seconda);
} else if (seconda<terza<prima){
  console.log("Ordine : " + seconda, terza, prima);
} else if (terza<prima<seconda){
  console.log("Ordine : " + terza, prima, seconda);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const valore = 12;

const solution7 = typeof valore == "number" ? "È un numero!!" : "non è un numero";
console.log(solution7);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const pariono = 11;
const solution8 = pariono % 2 == 0 ? "È pari!" : "non è pari";
console.log(solution8);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val <=10 ){
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me[1];

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const senzaCss = me.skills.splice(2,1);
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
var newArray = [];
newArray = [0,1,2,3,4,5,6,7,8,9,10];


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
newArray.pop();

newArray[10] = 100;

console.log(newArray);
/* SCRIVI QUI LA TUA RISPOSTA */
