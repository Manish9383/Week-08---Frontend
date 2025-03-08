let numbers = [];
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
    numbers.push(randomNum);
}

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Random Numbers: " + numbers.join(", "));
console.log("Minimum Value: " + min);
console.log("Maximum Value: " + max);
