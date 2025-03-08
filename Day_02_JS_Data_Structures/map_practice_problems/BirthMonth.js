let birthMonths = {
    1: [], 2: [], 3: [], 4: [], 5: [], 6: [],
    7: [], 8: [], 9: [], 10: [], 11: [], 12: []
};

for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;  // Random month (1 to 12)
    birthMonths[month].push(i);  
}

console.log("Birth Month Distribution:");
for (let month in birthMonths) {
    console.log(`Month ${month}: Individuals ${birthMonths[month].join(", ") || "None"}`);
}
