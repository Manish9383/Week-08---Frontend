const number = parseInt(process.argv[2]);

if (isNaN(number) || number < 0) {
    console.log("Please provide a valid non-negative number.");
    process.exit(1); 
}

let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i; 
}

console.log(`${number}! = ${factorial}`);
