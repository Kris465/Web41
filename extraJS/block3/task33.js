function checkPointInShadedArea(x, y) {
    const inRectangle = (x >= 0 && x <= 5 && y >= 0 && y <= 5);
    const inCircle = ((x - 3) ** 2 + (y - 3) ** 2 <= 2 ** 2);

    return {
        inRectangle: inRectangle,
        inCircle: inCircle,
        inShadedArea: inRectangle || inCircle 
    };
}

const prompt = require('prompt-sync')();
const x = parseFloat(prompt('Введите координату x: '));
const y = parseFloat(prompt('Введите координату y: '));

const results = checkPointInShadedArea(x, y);
console.log(results);