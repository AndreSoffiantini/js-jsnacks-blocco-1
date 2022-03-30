/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let sum = 0;
let counter = 0;

for (let i = 1; i <= 10; i++) {

    let number = parseInt(prompt("Inserisci un numero"));

    if (isNaN(number)) {

        alert("Numero non inserito!");
        continue;
    }

    counter++;
    sum += number;

}

console.log(`I numeri inseriti sono ${counter}`);
console.log(`La somma dei numeri inseriti è ${sum}`);