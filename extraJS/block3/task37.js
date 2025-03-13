let A = true;  
let B = false; 
let C = false; 

let result1 = A || !(A && B) || C;  
let result2 = !A || (A && (B || C));
let result3 = (A || (B && !C)) && C;

console.log(result1); 
console.log(result2); 
console.log(result3); 