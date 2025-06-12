const prompt = require('prompt-sync')(); 
const targetFactorial = parseInt(prompt("Введите известный факториал:"));

// Функция для поиска n по факториалу
function findNumberByFactorial(fact) {
    if (fact < 1) {
        return fact === 1 ? 0 : -1; // 0! = 1, 1! = 1
    }
    let n = 1;
    let currentFactorial = 1;
    while (currentFactorial < fact) {
        n++;
        currentFactorial *= n;
        if (currentFactorial === fact) {
            return n;
        }
    }
    // Если не нашли точное совпадение
    return -1;
}

const n = findNumberByFactorial(targetFactorial);

if (n !== -1) {
    alert(`Число, факториал которого равен ${targetFactorial}, равно ${n}.`);
} else {
    alert(`Факториал числа ${n} не найден или значение некорректно.`);
}