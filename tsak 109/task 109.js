// Двоякое число — это число, в десятичной записи которого встречается не более двух различных цифр.
// Например, числа 1122, 1001, 199 — двоякие числа, а числа 123, 987, 5567 — нет.
// Напишите функцию doubleNumber(n), которая принимает на вход натуральное число,
// и выводит ближайшее к нему двоякое число. Если таких чисел несколько, то нужно вывести наименьшее.
// Если введенное число само является двояким, то функция просто возвращает это число.

function check(num) {
    num = String(num);
    let uniqueDigits = new Set(num);
    return uniqueDigits.size <= 2;
}

function doubleNumber(n) {
    if (check(n)) {
        return n;
    }

    let lower = n - 1;
    let upper = n + 1;

    while (true) {
        if (check(lower)) {
            return lower;
        }
        if (check(upper)) {
            return upper;
        }
        lower--;
        upper++;
    }
}

console.log(doubleNumber(31122)); // 31111
console.log(doubleNumber(123));   // 112
console.log(doubleNumber(199));   // 199
console.log(doubleNumber(1001));  // 1001