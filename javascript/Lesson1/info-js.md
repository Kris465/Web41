# Операторы в JavaScript

## Арифметические операторы

▎1. Сложение (+)

Используется для сложения двух чисел или конкатенации строк.

```javascript
let a = 5;
let b = 3;
let sum = a + b; // 8
console.log(sum);

let str1 = "Hello, ";
let str2 = "world!";
let greeting = str1 + str2; // "Hello, world!"
console.log(greeting);
```

▎2. Вычитание (-)

Используется для вычитания одного числа из другого.

```javascript
let a = 10;
let b = 4;
let difference = a - b; // 6
console.log(difference);
```

▎3. Умножение (*)

Используется для умножения двух чисел.

```javascript
let a = 7;
let b = 3;
let product = a * b; // 21
console.log(product);
```

▎4. Деление (/)

Используется для деления одного числа на другое.

```javascript
let a = 15;
let b = 3;
let quotient = a / b; // 5
console.log(quotient);
```

▎5. Остаток от деления (%)

Возвращает остаток от деления одного числа на другое.

```javascript
let a = 10;
let b = 3;
let remainder = a % b; // 1
console.log(remainder);
```
▎6. Унарный плюс (+)

Преобразует операнд в число. Если операнд уже является числом, то он остается без изменений.

```javascript
let strNumber = "42";
let number = +strNumber; // 42
console.log(number); // 42
```

▎7. Унарный минус (-)

Преобразует операнд в число и меняет его знак на противоположный.

```javascript
let a = 5;
let negativeA = -a; // -5
console.log(negativeA);
```
▎Пример использования всех операторов вместе

```javascript
let x = 10;
let y = 3;

console.log("Сложение:", x + y);        // 13
console.log("Вычитание:", x - y);       // 7
console.log("Умножение:", x * y);       // 30
console.log("Деление:", x / y);         // 3.333...
console.log("Остаток от деления:", x % y); // 1
```

## Операторы сравнения

    Операторы сравнения в JavaScript используются для сравнения значений и возвращают булевый результат (true или false). Вот основные операторы сравнения и их примеры:

▎1. Равно (==)

Проверяет, равны ли два значения, не учитывая тип.
```javascript
console.log(5 == '5'); // true (число и строка приводятся к одному типу)
```
▎2. Строгое равно (===)

Проверяет, равны ли два значения с учетом типа.
```javascript
console.log(5 === '5'); // false (разные типы)
console.log(5 === 5);   // true (одинаковые типы и значения)
```
▎3. Не равно (!=)

Проверяет, не равны ли два значения, не учитывая тип.
```javascript
console.log(5 != '5'); // false (число и строка приводятся к одному типу)
```

▎4. Строгое не равно (!==)

Проверяет, не равны ли два значения с учетом типа.
```javascript
console.log(5 !== '5'); // true (разные типы)
console.log(5 !== 5);   // false (одинаковые типы и значения)
```

▎5. Больше (>)

Проверяет, больше ли одно значение другого.
```javascript
console.log(10 > 5); // true
console.log(5 > 10); // false
```
▎6. Меньше (<)

Проверяет, меньше ли одно значение другого.
```javascript
console.log(5 < 10); // true
console.log(10 < 5); // false
```

▎7. Больше или равно (>=)

Проверяет, больше ли одно значение другого или равно ему.

```javascript
console.log(10 >= 10); // true
console.log(5 >= 10);  // false
```
▎8. Меньше или равно (<=)

Проверяет, меньше ли одно значение другого или равно ему.
```javascript
console.log(5 <= 5);   // true
console.log(10 <= 5);  // false
```
▎Примеры использования операторов сравнения

```javascript
let a = 5;
let b = '5';
let c = 10;

console.log(a == b);   // true (равно, не учитывая тип)
console.log(a === b);  // false (строгое равно, разные типы)
console.log(a != c);   // true (не равно)
console.log(a !== c);  // true (строгое не равно)

console.log(a < c);    // true (a меньше c)
console.log(a > c);    // false (a не больше c)
console.log(a <= b);   // true (a меньше или равно b)
console.log(a >= c);   // false (a не больше или равно c)
```

## Операторы присваивания

    Операторы присваивания в JavaScript используются для присвоения значений переменным. Основной оператор присваивания — это знак равенства (=), но существует и множество других операторов, которые комбинируют операции присваивания с арифметическими или побитовыми операциями. Давайте рассмотрим их подробнее.

▎1. Оператор присваивания (=)

Присваивает значение переменной.

```javascript
let x = 10; // x теперь равно 10
```

▎2. Оператор присваивания с добавлением (+=)

Сначала прибавляет значение к переменной, а затем присваивает результат.

```javascript
let a = 5;
a += 3; // эквивалентно a = a + 3; теперь a равно 8
```

▎3. Оператор присваивания с вычитанием (-=)

Сначала вычитает значение из переменной, а затем присваивает результат.

```javascript
let b = 10;
b -= 2; // эквивалентно b = b - 2; теперь b равно 8
```

▎4. Оператор присваивания с умножением (*=)

Сначала умножает значение переменной на указанное, а затем присваивает результат.

```javascript
let c = 4;
c *= 2; // эквивалентно c = c * 2; теперь c равно 8
```

▎5. Оператор присваивания с делением (/=)

Сначала делит значение переменной на указанное, а затем присваивает результат.
```javascript
let d = 20;
d /= 4; // эквивалентно d = d / 4; теперь d равно 5
```
▎6. Оператор присваивания с остатком от деления (%=)

Сначала вычисляет остаток от деления переменной на указанное значение, а затем присваивает результат.

```javascript
let e = 10;
e %= 3; // эквивалентно e = e % 3; теперь e равно 1 (остаток от деления 10 на 3)
```
▎7. Оператор присваивания с побитовым И (&=)

Сначала выполняет побитовое И между переменной и указанным значением, а затем присваивает результат.
```javascript
let f = 5; // двоичное представление: 0101
f &= 3;    // двоичное представление: 0011
// f теперь равно 1 (двоичное представление: 0001)
```
▎8. Оператор присваивания с побитовым ИЛИ (|=)

Сначала выполняет побитовое ИЛИ между переменной и указанным значением, а затем присваивает результат.
```javascript
let g = 5; // двоичное представление: 0101
g |= 3;    // двоичное представление: 0011
// g теперь равно 7 (двоичное представление: 0111)
```
▎9. Оператор присваивания с побитовым исключающим ИЛИ (^=)

Сначала выполняет побитовое исключающее ИЛИ между переменной и указанным значением, а затем присваивает результат.
```javascript
let h = 5; // двоичное представление: 0101
h ^= 3;    // двоичное представление: 0011
// h теперь равно 6 (двоичное представление: 0110)
```
▎Примеры использования
```javascript
let num = 10;
num += 5;   // num теперь равно 15
num -= 2;   // num теперь равно 13
num *= 2;   // num теперь равно 26
num /= 13;  // num теперь равно примерно 2 (точное значение будет зависеть от точности)
num %= 2;   // num теперь равно 0 (остаток от деления)
```

## Условные операторы
    Условные операторы в JavaScript позволяют выполнять различные действия в зависимости от выполнения определенных условий. Основные условные операторы включают if, else if, else, а также оператор switch. 

▎1. Оператор if

Оператор if используется для выполнения блока кода, если условие истинно.

```javascript
let age = 18;

if (age >= 18) {
    console.log("Вы совершеннолетний.");
}
```

▎2. Оператор else

Оператор else используется вместе с if и выполняет блок кода, если условие ложно.

```javascript
let age = 16;

if (age >= 18) {
    console.log("Вы совершеннолетний.");
} else {
    console.log("Вы еще несовершеннолетний.");
}
```
▎3. Оператор else if

Оператор else if позволяет проверять несколько условий последовательно.

```javascript
let score = 85;

if (score >= 90) {
    console.log("Отлично!");
} else if (score >= 75) {
    console.log("Хорошо!");
} else if (score >= 60) {
    console.log("Удовлетворительно.");
} else {
    console.log("Неудовлетворительно.");
}
```
▎4. Оператор switch

Оператор switch позволяет выполнять разные блоки кода в зависимости от значения выражения. Это удобно, когда нужно проверить одно значение на соответствие нескольким возможным вариантам.

```javascript
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Это банан.");
        break;
    case "apple":
        console.log("Это яблоко.");
        break;
    case "orange":
        console.log("Это апельсин.");
        break;
    default:
        console.log("Неизвестный фрукт.");
}
```

▎Пример с использованием всех операторов

Вот более сложный пример, который объединяет все вышеперечисленные операторы:

```javascript
let temperature = 25;

if (temperature > 30) {
    console.log("На улице жарко.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("На улице тепло.");
} else if (temperature >= 10 && temperature < 20) {
    console.log("На улице прохладно.");
} else {
    console.log("На улице холодно.");
}
```
▎Вложенные условные операторы

Условные операторы могут быть вложенными, что позволяет создавать более сложные логические конструкции.
```javascript
let num = 10;

if (num > 0) {
    console.log("Число положительное.");
    if (num % 2 === 0) {
        console.log("И оно четное.");
    } else {
        console.log("И оно нечетное.");
    }
} else if (num < 0) {
    console.log("Число отрицательное.");
} else {
    console.log("Число равно нулю.");
}
```
## Циклы

    Циклы в JavaScript позволяют выполнять блоки кода многократно, пока выполняется определенное условие. Основные виды циклов — это for, while и do...while. 

▎1. Цикл for

Цикл for используется, когда известно количество итераций. Он состоит из трех частей: инициализации, условия и шага.

Синтаксис:
```javascript
for (инициализация; условие; шаг) {
    // код, который будет выполняться
}
```

Пример:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Итерация номер: " + i);
}
```
В этом примере цикл for выполнится 5 раз, и на каждой итерации будет выводиться номер текущей итерации.

▎2. Цикл while

Цикл while выполняет блок кода, пока условие истинно. Важно следить за тем, чтобы условие когда-нибудь стало ложным, иначе цикл может стать бесконечным.

Синтаксис:
```javascript
while (условие) {
    // код, который будет выполняться
}
```
Пример:
```javascript
let count = 0;

while (count < 5) {
    console.log("Счетчик: " + count);
    count++; // увеличиваем значение счетчика
}
```

В этом примере цикл while будет выполняться до тех пор, пока переменная count меньше 5.

▎3. Цикл do...while

Цикл do...while похож на цикл while, но он гарантирует выполнение блока кода хотя бы один раз, даже если условие ложно, поскольку проверка условия происходит после выполнения блока кода.

Синтаксис:
```javascript
do {
    // код, который будет выполняться
} while (условие);
```
Пример:
```javascript
let num = 0;

do {
    console.log("Число: " + num);
    num++;
} while (num < 5);
```
В этом примере блок кода выполнится 5 раз, аналогично циклу while, но даже если num изначально был равен 5 или больше, он все равно выполнится один раз.

▎Сравнение циклов

• for: Используется, когда известно количество итераций. Удобен для перебора массивов.

• while: Используется, когда количество итераций заранее неизвестно и зависит от условия.

• do...while: Гарантирует выполнение блока кода хотя бы один раз.

▎Пример использования всех трех циклов для перебора массива

```javascript
let fruits = ["яблоко", "банан", "апельсин", "киви"];

// Цикл for
console.log("Цикл for:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Цикл while
console.log("nЦикл while:");
let j = 0;
while (j < fruits.length) {
    console.log(fruits[j]);
    j++;
}

// Цикл do...while
console.log("nЦикл do...while:");
let k = 0;
do {
    console.log(fruits[k]);
    k++;
} while (k < fruits.length);
```

## Задачи

▎Задача 1: Проверка четности числа

Условие: Напишите функцию, которая принимает число и возвращает true, если оно четное, и false, если нечетное.

```javascript
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(5)); // false
```

```javascript
let num = prompt("Введите число:");
num = Number(num);
if (num % 2 === 0) {
    console.log(num + " является четным числом.");
} else {
    console.log(num + " является нечетным числом.");
}
```


▎Задача 2: Сумма чисел от 1 до N

Условие: Напишите функцию, которая принимает число N и возвращает сумму всех чисел от 1 до N.

▎Задача 3: Факториал числа

Условие: Напишите функцию, которая принимает число N и возвращает его факториал.

▎Задача 4: Поиск максимального числа в массиве

Условие: Напишите функцию, которая принимает массив чисел и возвращает максимальное число.

▎Задача 5: Обратный порядок массива

Условие: Напишите функцию, которая принимает массив и возвращает новый массив с элементами в обратном порядке.

▎Задача 6: Проверка на палиндром

Условие: Напишите функцию, которая принимает строку и проверяет, является ли она палиндромом (читается одинаково слева направо и справа налево).

▎Задача 7: Числа Фибоначчи

Условие: Напишите функцию, которая возвращает массив первых N чисел Фибоначчи.

▎Задача 8: Удаление дубликатов из массива

Условие: Напишите функцию, которая принимает массив и возвращает новый массив без дубликатов.

▎Задача 9: Сравнение двух строк

Условие: Напишите функцию, которая принимает две строки и возвращает true, если они являются анаграммами (содержат одни и те же буквы в разном порядке).

▎Задача 10: Найти среднее значение массива

Условие: Напишите функцию, которая принимает массив чисел и возвращает среднее значение.