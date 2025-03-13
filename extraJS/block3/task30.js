const prompt = require('prompt-sync')();

function checkConditions(X, Y, Z) {
    return {
        conditionA: (X % 2 !== 0 && Y % 2 !== 0), // а)
        conditionB: (X < 20 && Y >= 20) || (X >= 20 && Y < 20), // б)
        conditionC: (X === 0 || Y === 0), // в)
        conditionD: (X < 0 && Y < 0 && Z < 0), // г)
        conditionE: (X % 5 === 0 && Y % 5 !== 0 && Z % 5 !== 0) ||
                    (X % 5 !== 0 && Y % 5 === 0 && Z % 5 !== 0) ||
                    (X % 5 !== 0 && Y % 5 !== 0 && Z % 5 === 0), // д)
        conditionF: (X > 100 || Y > 100 || Z > 100) // е)
    };
}

const X = parseInt(prompt("Введите целое значение X:"));
const Y = parseInt(prompt("Введите целое значение Y:"));
const Z = parseInt(prompt("Введите целое значение Z:"));

const results = checkConditions(X, Y, Z);
console.log(results);

checkConditions();