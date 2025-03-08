const args = process.argv.slice(2);
const a = parseInt(args[0]);
const b = parseInt(args[1]);
const c = parseInt(args[2]);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter three valid numbers.");
} else {
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;

    console.log("Results:");
    console.log("1. a + b * c =", result1);
    console.log("2. a % b + c =", result2);
    console.log("3. c + a / b =", result3);
    console.log("4. a * b + c =", result4);

    const max = Math.max(result1, result2, result3, result4);
    const min = Math.min(result1, result2, result3, result4);

    console.log("\nMaximum Value:", max);
    console.log("Minimum Value:", min);
}
