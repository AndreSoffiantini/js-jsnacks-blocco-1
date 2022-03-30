/* SNACK 6
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.
*/

// Chiedere all'utente di inserire un numero

const N = parseInt(prompt("Inserisci un numero"));

// Creare un array contenente i primi N numeri elevati al cubo

const cubicNumbersArray = [];

for (let i = 1; i <= N; i++) {

    cubicNumbersArray[i - 1] = Math.pow(i, 3);

}

console.log(`Lista dei primi ${N} numeri elevati al cubo: ${cubicNumbersArray}`);