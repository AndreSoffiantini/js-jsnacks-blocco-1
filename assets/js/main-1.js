const firstNumber = prompt("Inserisci il primo numero");
const secondNumber = prompt("Inserisci il secondo numero");

if (firstNumber > secondNumber) {

    console.log(`${firstNumber}`);

} else if (secondNumber > firstNumber) {

    console.log(`${secondNumber}`);

} else {

    console.log("I numeri sono uguali");

}