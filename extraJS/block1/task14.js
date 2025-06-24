const prompt = require('prompt-sync')();
let n = prompt('введите n:');     
let x = prompt('введите x:');       
let y = prompt('введите y:');       
let alpha = prompt('введите alpha:');   
let beta = prompt('введите beta:');   
let a = prompt('введите :');      
let result1 = 2 * x;
let result2 = Math.sin(x);
let result3 = Math.pow(a, 2);
let result4 = Math.sqrt(x);
let result5 = Math.abs(n);
let result6 = 5 * Math.cos(y)
let result7 = Math.sin(Math.cos(beta) + Math.sin(beta));
let result8 = -7 * 5 * a * Math.pow(x, 2);
let result9 = 3 * Math.sqrt(x + Math.sqrt(y));
let result10 = Math.sin(2 * alpha) * Math.cos(beta);
console.log(result1, result2, result3, result4, result5, result6, result7, result8, result9, result10);