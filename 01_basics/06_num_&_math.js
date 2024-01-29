const score = 600
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Precision value

const otherNumber = 23.689234

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));




//+++++++++++++++++++++  Maths  ++++++++++++++++++++++++++//

console.log(Math.abs(-9));
console.log(Math.round(4.7));
console.log(Math.ceil(4.7));
console.log(Math.floor(4.7));
console.log(Math.min(4,5,67,84));
console.log(Math.max(4,5,67,84));

console.log(Math.random()); // Gives value between 0 and 1
console.log((Math.random()*10) + 1); // Min 1 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10 
const max = 20


console.log(Math.floor(Math.random() * (max-min +1)) +min); // Min value shhould be 10