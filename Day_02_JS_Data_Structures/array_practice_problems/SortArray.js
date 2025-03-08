let numbers = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100; // Generates a 3-digit number (100-999)
    numbers.push(randomNum);
}

console.log("Generated Numbers:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);

let secondSmallest = numbers[1];
let secondLargest = numbers[numbers.length - 2];

console.log("2nd Smallest Number:", secondSmallest);
console.log("2nd Largest Number:", secondLargest);
