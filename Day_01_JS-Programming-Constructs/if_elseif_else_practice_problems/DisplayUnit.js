const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (isNaN(num) || num < 1 || !/^(10*|1)$/.test(args[0])) {
    console.log("Please enter a valid number like 1, 10, 100, 1000, etc.");
} else {
    if (num === 1) {
        console.log("Unit");
    } else if (num === 10) {
        console.log("Ten");
    } else if (num === 100) {
        console.log("Hundred");
    } else if (num === 1000) {
        console.log("Thousand");
    } else if (num === 10000) {
        console.log("Ten Thousand");
    } else if (num === 100000) {
        console.log("Lakh");
    } else if (num === 1000000) {
        console.log("Ten Lakh");
    } else if (num === 10000000) {
        console.log("Crore");
    } else if (num === 100000000) {
        console.log("Ten Crore");
    } else {
        console.log("Number is too large to handle.");
    }
}
