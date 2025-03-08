let n = parseInt(process.argv[2]);

if (isNaN(n) || n <= 1) {
    console.log("Please enter a valid number greater than 1.");
    process.exit(1); 
}

let primeFactors = []; 

for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        primeFactors.push(i); 
        n = n / i;
    }
}

if (n > 2) {
    primeFactors.push(n);
}

console.log("Prime Factors:", primeFactors);
