const inches = 42;
const inchesToFeet = inches / 12;
console.log("42 inches = " + inchesToFeet.toFixed(2) + " feet");

const lengthFeet = 60;
const widthFeet = 40;
const feetToMeter = 0.3048; 

const lengthMeters = lengthFeet * feetToMeter;
const widthMeters = widthFeet * feetToMeter;
const plotAreaMeters = lengthMeters * widthMeters;

console.log("Plot of 60ft x 40ft = " + plotAreaMeters.toFixed(2) + " square meters");

const plots = 25;
const squareMetersToAcre = 0.000247105; 

const totalAreaMeters = plotAreaMeters * plots;
const totalAreaAcres = totalAreaMeters * squareMetersToAcre;

console.log("Area of 25 plots = " + totalAreaAcres.toFixed(4) + " acres");
