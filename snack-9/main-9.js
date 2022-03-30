/* SNACK 9
Calcola la somma e la media dei primi 10 numeri
*/

let sum = 0;

for (let i = 1; i <= 10; i++) {

    sum += i;

}

const average = sum / 10;

console.log(`Somma primi 10 numeri: ${sum}`);
console.log(`Media primi 10 numeri: ${average}`);