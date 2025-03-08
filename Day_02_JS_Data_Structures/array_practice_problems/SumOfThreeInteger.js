let numbers = process.argv.slice(2).map(Number);

if (numbers.length < 3) {
    console.log("Please enter at least 3 numbers.");
    process.exit(1);  
}

let found = false;  

console.log("Triplets that sum to ZERO are:");

for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[j] + numbers[k] === 0) {
                console.log(`(${numbers[i]}, ${numbers[j]}, ${numbers[k]})`);
                found = true;
            }
        }
    }
}

if (!found) {
    console.log("No triplets found that sum to ZERO.");
}
