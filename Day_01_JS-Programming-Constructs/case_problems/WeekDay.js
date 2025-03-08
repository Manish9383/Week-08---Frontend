const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (isNaN(num) || num < 1 || num > 7) {
    console.log("Please enter a valid number between 1 and 7.");
} else {
    switch (num) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid input.");
    }
}
