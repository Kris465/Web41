const prompt = require('prompt-sync')(); 

const sequence = [];
for (let i = 0; i < 15; i++) {
    const input = prompt(`Введите вещественное число ${i + 1} из 15:`);
    const num = parseFloat(input);
    if (isNaN(num)) {
        alert("Некорректный ввод, попробуйте снова.");
        i--;
    } else {
        sequence.push(num);
    }
}

let isOrdered = true;
let violationIndex = -1;

for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] > sequence[i + 1]) {
        isOrdered = false;
        violationIndex = i + 1;
        break;
    }
}

if (isOrdered) {
    console.log("Последовательность упорядочена по возрастанию.");
} else {
    console.log(`Последовательность не упорядочена. Нарушение в позиции ${violationIndex}.`);
}