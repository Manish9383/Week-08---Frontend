let dieCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

let maxReached = false;
while (!maxReached) {
    let roll = Math.floor(Math.random() * 6) + 1;  // Roll the die (1 to 6)
    dieCounts[roll]++; 

    if (dieCounts[roll] === 10) {
        maxReached = true;
    }
}

console.log("Die roll counts:");
console.log(dieCounts);

let maxCount = 0, minCount = 10;
let maxNum = 0, minNum = 0;

for (let num in dieCounts) {
    if (dieCounts[num] > maxCount) {
        maxCount = dieCounts[num];
        maxNum = num;
    }
    if (dieCounts[num] < minCount) {
        minCount = dieCounts[num];
        minNum = num;
    }
}

console.log(`Number ${maxNum} reached maximum times: ${maxCount}`);
console.log(`Number ${minNum} reached minimum times: ${minCount}`);
