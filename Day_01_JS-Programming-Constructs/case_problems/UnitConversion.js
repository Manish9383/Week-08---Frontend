const choice = parseInt(process.argv[2]);
const length = parseFloat(process.argv[3]);

if (isNaN(choice) || isNaN(length)) {
    console.log("Please provide valid inputs: <choice> <length>");
    process.exit(1);  
}

switch (choice) {
    case 1:
        console.log(length + " Feet = " + (length * 12) + " Inches");
        break;
    case 2:
        console.log(length + " Feet = " + (length * 0.3048) + " Meters");
        break;
    case 3:
        console.log(length + " Inches = " + (length / 12) + " Feet");
        break;
    case 4:
        console.log(length + " Meters = " + (length / 0.3048) + " Feet");
        break;
    default:
        console.log("Invalid choice! Choose between 1 and 4.");
}
