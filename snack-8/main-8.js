/* SNACK 8 
Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero
*/

const userInput = prompt("Inserisci un numero di 4 cifre");
const userNumber = parseInt(userInput);

// Controllare se il valore inserito è un numero
if (isNaN(userNumber)) {

    alert("Non hai inserito un numero!");

}

// Controllare se il valore inserito è un numero
else if (userInput.length != 4) {

    alert("Il numero inserito non ha 4 cifre!");

}

// Se i check sono superati leggere l'input cifra per cifra e restituirne la somma
else {

    let sum = 0;

    for (let i = 0; i < userInput.length; i++) {

        let digit = parseInt(userInput.charAt(i));

        sum += digit;

    }

    console.log(`La somma delle cifre del numero inserito è ${sum}`);

}