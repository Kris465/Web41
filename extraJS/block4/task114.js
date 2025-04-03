const prompt = require('prompt-sync')();

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2 && isLeapYear(year)) {
        return daysInMonth[month - 1] + 1;
    }
    
    return daysInMonth[month - 1];
}

function getPreviousDate(g, m, n) {
    if (m < 1 || m > 12 || n < 1 || n > getDaysInMonth(m, g)) {
        return "Некорректная дата.";
    }

    if (n > 1) {
        return `${g}-${m}-${n - 1}`; 
    } else {
        if (m === 1) {
            return `${g - 1}-12-${31}`; 
        } else {
            const previousMonth = m - 1;
            const previousDay = getDaysInMonth(previousMonth, g);
            return `${g}-${previousMonth}-${previousDay}`;
        }
    }
}

function getNextDate(g, m, n) {
    if (m < 1 || m > 12 || n < 1 || n > getDaysInMonth(m, g)) {
        return "Некорректная дата.";
    }

    if (n < getDaysInMonth(m, g)) {
        return `${g}-${m}-${n + 1}`; 
    } else {
        if (m === 12) {
            return `${g + 1}-1-1`; 
        } else {
            const nextMonth = m + 1;
            return `${g}-${nextMonth}-1`; 
        }
    }
}

const g = parseInt(prompt("Введите год:"), 10);
const m = parseInt(prompt("Введите номер месяца (1-12):"), 10);
const n = parseInt(prompt("Введите число (день):"), 10);

const previousDate = getPreviousDate(g, m, n);
const nextDate = getNextDate(g, m, n);

console.log(`Предыдущая дата: ${previousDate}`);
console.log(`Следующая дата: ${nextDate}`);