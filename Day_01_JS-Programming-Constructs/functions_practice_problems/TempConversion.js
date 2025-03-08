const prompt = require("prompt-sync")(); 

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertTemperature(choice, temperature) {
    let result;
    switch (choice) {
        case 1: 
            result = celsiusToFahrenheit(temperature);
            console.log(`${temperature}°C is equal to ${result}°F`);
            break;
        case 2: 
            result = fahrenheitToCelsius(temperature);
            console.log(`${temperature}°F is equal to ${result}°C`);
            break;
        default:
            console.log("Invalid choice. Please enter 1 or 2.");
            break;
    }
}

let conversionChoice = parseInt(prompt("Enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius: "));
let temperature = parseFloat(prompt("Enter the temperature: "));

if (temperature < 0 || temperature > 100) {
    console.log("Please enter a temperature within the valid range: 0°C/32°F to 100°C/212°F.");
} else {
    convertTemperature(conversionChoice, temperature);
}
