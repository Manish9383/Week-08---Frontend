let balance = 100; 
let goal = 200; 
let betAmount = 1;
let wins = 0; 
let betsMade = 0; 

while (balance > 0 && balance < goal) {
    let result = Math.random() < 0.5 ? "win" : "lose";

    if (result === "win") {
        balance += betAmount; 
        wins++; 
    } else {
        balance -= betAmount; 
    }

    betsMade++; 

    console.log(`Bet #${betsMade}: ${result.toUpperCase()} - Current balance: Rs ${balance}`);
}

if (balance >= goal) {
    console.log(`Goal reached! Gambler won Rs 200 after ${betsMade} bets with ${wins} wins.`);
} else {
    console.log(`Gambler went broke after ${betsMade} bets with ${wins} wins.`);
}
