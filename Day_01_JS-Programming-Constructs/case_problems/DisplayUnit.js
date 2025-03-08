const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (isNaN(num) || num <= 0) {
    console.log("Please enter a valid positive number (1, 10, 100, 1000, etc.).");
} else {
    switch (num) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("Hundred");
            break;
        case 1000:
            console.log("Thousand");
            break;
        case 10000:
            console.log("Ten Thousand");
            break;
        case 100000:
            console.log("Lakh");
            break;
        case 1000000:
            console.log("Ten Lakh");
            break;
        case 10000000:
            console.log("Crore");
            break;
        default:
            console.log("Please enter a valid number like 1, 10, 100, 1000, etc.");
    }
}
