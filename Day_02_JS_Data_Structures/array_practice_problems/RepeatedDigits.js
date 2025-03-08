let repeatedDigits = [];  

for (let i = 10; i < 100; i++) {
    let tens = Math.floor(i / 10);   
    let units = i % 10;              

    if (tens === units) {
        repeatedDigits.push(i);     
    }
}

console.log("Numbers with repeated digits between 0 and 100:");
console.log(repeatedDigits);
