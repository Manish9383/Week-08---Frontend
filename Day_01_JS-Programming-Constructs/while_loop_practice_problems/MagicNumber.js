const prompt = require('prompt-sync')();  

let low = 1;
let high = 100;

console.log("Think of a number between 1 and 100.");
console.log("I will try to guess it.");

let guessedNumber;
let response;

while (low <= high) {
    guessedNumber = Math.floor((low + high) / 2); 

    response = prompt(`Is your number ${guessedNumber}? (Enter 'l' for less, 'g' for greater, 'c' for correct): `).toLowerCase();

    if (response === 'c') {
        console.log(`I guessed it! The magic number is ${guessedNumber}.`);
        break;
    } else if (response === 'l') {
        low = guessedNumber + 1; 
    } else if (response === 'g') {
        high = guessedNumber - 1; 
    } else {
        console.log("Please enter a valid response ('l', 'g', or 'c').");
    }
}
