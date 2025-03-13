const readline = require('readline');

let A = true;
let B = false;
let C = false;

let result1 = A || (B && !C); 
let result2 = A && !B || C;   
let result3 = !A && !B;       
let result4 = !(A && C) || B; 
let result5 = A && (!B || C); 
let result6 = A || (! (B && C)); 

console.log(result1); 
console.log(result2); 
console.log(result3); 
console.log(result4); 
console.log(result5); 
console.log(result6); 