const args = process.argv.slice(2);
const day = parseInt(args[0]);
const month = parseInt(args[1]);

if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
    console.log("false");
} else {
    const isValid =
        (month === 3 && day >= 20 && day <= 31) || // March 20–31
        (month === 4 && day >= 1 && day <= 30) ||  // April 1–30
        (month === 5 && day >= 1 && day <= 31) ||  // May 1–31
        (month === 6 && day >= 1 && day <= 20);    // June 1–20

    console.log(isValid);
}
