function isPalindrome(number) {
    let numStr = number.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
}

function areBothPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        return true; 
    } else {
        return false;
    }
}

const prompt = require("prompt-sync")(); 

let number1 = parseInt(prompt("Enter the first number: "));
let number2 = parseInt(prompt("Enter the second number: "));

if (areBothPalindromes(number1, number2)) {
    console.log("Both numbers are palindromes.");
} else {
    console.log("Both numbers are not palindromes.");
}
