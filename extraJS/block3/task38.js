let X = false;  
let Y = true;   
let Z = false;  
let result1 = X && !(Z || Y) || !Z;  
let result2 = !X || (X && (Y || Z)); 
let result3 = (X || (Y && !Z)) && Z; 

console.log(result1);
console.log(result2); 
console.log(result3); 