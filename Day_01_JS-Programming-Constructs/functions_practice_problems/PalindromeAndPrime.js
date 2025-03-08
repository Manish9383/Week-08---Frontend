const prompt = require("prompt-sync")(); 

function isPrime(number) {
    if (number <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}

function getPalindrome(number) {
    let numStr = number.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return parseInt(reversedStr); 
}

function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        let palindrome = getPalindrome(num);
        console.log(`The palindrome of ${num} is ${palindrome}.`);
        if (isPrime(palindrome)) {
            console.log(`The palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindrome} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

let number = parseInt(prompt("Enter a number: "));
checkPrimeAndPalindrome(number);
