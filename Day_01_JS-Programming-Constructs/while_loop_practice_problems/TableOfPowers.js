const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative number.");
    process.exit(1); 
}

let power = 1;
let i = 0;

console.log(`Table of powers of 2 less than or equal to 2^${n}:`);

while (power <= 256 && i <= n) {
    console.log(`2^${i} = ${power}`);
    i++;
    power = Math.pow(2, i); 
}
