/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1,l2){
    let rettangolo = l1 * l2;
    console.log("Area:" + rettangolo);

}

area(5,4);

console.log("****************")
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1,n2){
    if (n1 === n2){
        medesimo = (n1+n2) * 3;
        console.log("Medesimo: " + medesimo);
    } else {
        somma = n1 + n2; 
        console.log("Somma:" + somma);
    }

    

}

crazySum(5,5);

console.log("****************")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n){
    if(n>19){
        diff = (n - 19) * 3;
        console.log("Differenza(*3): " + diff);
    } else{
        diff2 = 19 - n;
        console.log("Differenza: " + diff2);

    }
    

}

crazyDiff(40);

console.log("****************")

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (n) {
    if(n<=100 && n>=20 || n ==400)
    console.log(true);
}

boundary(24);

console.log("****************")

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
    if (stringa.startsWith("EPICODE")){
        console.log(stringa);
    } else console.log("EPICODE " + stringa);

}

epify("NOT EPICODE");
epify("EPICODE");
console.log("****************")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    if(n % 3 === 0 && n % 7 ===0){
        console.log("Multiplo di 3 e Multiplo di 7")
    }
    else if(n % 3 === 0){
        console.log("Multiplo di 3")
    } else if (n % 7 ===0){
        console.log("Multiplo di 7")
    } else console.log("Not multiplo di 3 ne 7")

}

check3and7(21);
console.log("****************")

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa){
    var reverse = stringa.split("").reduce((acc,char)=> char + acc, "");
    console.log(reverse);
}

reverseString("stringa");
console.log("****************")

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(parola, parole) {
    var upperLetter = [];
        for(let i = 0; arguments.length>i; i++){
            upperLetter[i] += arguments[i].charAt(0).toUpperCase()
            
        }
        console.log(upperLetter)

}
upperFirst("parola","ciao","salve");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa){
    nuovaStringa = stringa.slice(1,-1);
    console.log(nuovaStringa)
}

cutString("stringa");
console.log("****************")
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
        var array = [];
        for(let i=0; i<n; i++){
            array[i] = Math.floor(Math.random()*11)
        }
        console.log(array)
}

giveMeRandom(4);

