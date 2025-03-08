const number = parseInt(process.argv[2]);

if (isNaN(number) || number <= 1) {
    console.log("Please provide a valid number greater than 1.");
    process.exit(1);
}

let n = number;

console.log(`Prime factors of ${n}:`);

for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}

if (n > 2) {
    console.log(n);
}
