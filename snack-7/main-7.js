/* SNACK 7
Stampa le potenze di 2 fino a 1000
*/

let powersOfTwo = [];
let powerOfTwo = 0,
    exponent = 0;


while (powerOfTwo < 1000) {

    powerOfTwo = Math.pow(2, exponent);

    if (powerOfTwo < 1000) {

        powersOfTwo[exponent] = powerOfTwo;

        exponent++;

    }

}

console.log(`Potenze di 2 fino a 1000: ${powersOfTwo}`);