let X = false; 
let Y = false; 
let Z = true;  

let result1 = X || (Y && !Z); 
let result2 = (X && !Y) || Z;  
let result3 = !X && !Y;       
let result4 = !(X && Z) || Y; 
let result5 = X && (!Y || Z);  
let result6 = X || !(Y || Z);   

console.log(result1); 
console.log(result2);
console.log(result3); 
console.log(result4); 
console.log(result5); 
console.log(result6);