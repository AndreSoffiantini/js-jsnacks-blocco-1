/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. 
Utilizzare un ciclo while. */

let sum = 0,
    counter = 0,
    index = 0;

while (index < 10) {

    let number = parseInt(prompt("Inserisci un numero"));

    index++;

    if (isNaN(number)) {

        alert("Numero non inserito!");
        continue;
    }

    counter++;
    sum += number;

}

console.log(`I numeri inseriti sono ${counter}`);
console.log(`La somma dei numeri inseriti è ${sum}`);