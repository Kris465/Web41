function calculateLogicalExpression(a, b, c, expression) {
    switch (expression) {
        case 'a':
            return (!a || !b) && !c;
        case 'b':
            return (!a || !b) && (a || b);
        case 'c':
            return (a && b) || (a && c) || !c;
        default:
            return "Неверное выражение";
    }
}

function getBooleanInput(prompt) {
    while (true) {
        const input = prompt(prompt + " (true/false): ").toLowerCase();
        if (input === "true") {
            return true;
        } else if (input === "false") {
            return false;
        } else {
            console.log("Неверный ввод. Пожалуйста, введите 'true' или 'false'.");
        }
    }
}

const A = getBooleanInput("Введите значение A");
const B = getBooleanInput("Введите значение B");
const C = true;

console.log("Значения: A = " + A + ", B = " + B + ", C = " + C);
console.log("а) (не А или не В) и не С: " + calculateLogicalExpression(A, B, C, 'a'));
console.log("б) (не А или не В) и (А или В): " + calculateLogicalExpression(A, B, C, 'b'));
console.log("в) А и В или А и С или не С: " + calculateLogicalExpression(A, B, C, 'c'));