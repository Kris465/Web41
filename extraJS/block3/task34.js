const readline = require('readline');

let X = true;
let Y = true;
let Z = false;

let result1 = !X && Y; 
let result2 = X || !Y; 
let result3 = X || (Y && Z); 

console.log(result1);
console.log(result2); 
console.log(result3); 