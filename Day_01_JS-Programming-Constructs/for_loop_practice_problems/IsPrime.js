const number = parseInt(process.argv[2]);

if (isNaN(number) || number <= 1) {
    console.log("Please provide a valid number greater than 1.");
    process.exit(1); 
}

let isPrime = true;

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break; 
    }
}

if (isPrime) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}
