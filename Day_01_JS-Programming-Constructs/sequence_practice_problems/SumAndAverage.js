let numbers = [];

for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 90) + 10; 
    numbers.push(randomNum);
}

let sum = numbers.reduce((acc, num) => acc + num, 0);

let average = sum / numbers.length;

console.log("Random Numbers: " + numbers.join(", "));
console.log("Sum: " + sum);
console.log("Average: " + average.toFixed(2)); 
