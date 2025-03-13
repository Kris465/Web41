let X = true;  
let Y = false;   
let Z = false;  

let result1 = !X || !Y || !Z;                     
let result2 = (!X || !Y) && (X || Y);              
let result3 = (X && Y) || (X && Z) || !Z; 

console.log(result1);
console.log(result2); 
console.log(result3); 