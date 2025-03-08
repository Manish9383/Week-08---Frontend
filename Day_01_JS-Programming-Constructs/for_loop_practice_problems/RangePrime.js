const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);

if (isNaN(start) || isNaN(end) || start <= 1 || end <= 1 || start > end) {
    console.log("Please provide valid numbers for the range where start and end are greater than 1, and start <= end.");
    process.exit(1);
}

function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return number > 1;
}

console.log(`Prime numbers between ${start} and ${end}:`);
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
