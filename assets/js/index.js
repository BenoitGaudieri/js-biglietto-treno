// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
// Mostrare a schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto.

// Var declaration
var priceToKm;
var reduction;
var age;
var kmToTravel;
var result;

// Var assignment
age = parseInt(prompt("How old are you?"));
kmToTravel = parseInt(prompt("How many km?"));
priceToKm = 0.21;

// Logic
if (age < 18) {
    reduction = 20 / 100;
} else if (age > 65) {
    reduction = 40 / 100;
}

if (reduction) {
    result = kmToTravel * priceToKm;
    result = result - result * reduction;
    console.log("reduction of " + reduction);
    document.getElementById(
        "js-price"
    ).innerHTML = `You are going to pay ${result}€ for your travel.`;
    document.getElementById(
        "js-sale"
    ).innerHTML = `A reduction of the ${reduction *
        100}% was applied because you are ${age} years old!`;
} else {
    result = kmToTravel * priceToKm;
    document.getElementById(
        "js-price"
    ).innerHTML = `You are going to pay ${result}€ for your travel.`;
    console.log("no reduction");
}

console.log(result);
