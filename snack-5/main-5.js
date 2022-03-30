/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

const oddsArray = [];
let arrayPosition = 0;

for (let i = 0; i < 6; i++) {

    let userNumber = parseInt(prompt("Inserisci un numero"));

    if (userNumber % 2 != 0) {

        oddsArray[arrayPosition] = userNumber;
        arrayPosition++;

    }

}

console.log(`I numeri dispari sono: ${oddsArray}`);