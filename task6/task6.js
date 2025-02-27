// Уродливыми называются числа, делителями которых могут быть только простые числа 2, 3 и 5.
// Нужно написать функцию isUgly(num), которая проверит, является ли число уродливым.

function task6(num) {
    if (num <= 0) return false;
    while (num % 2 === 0) {
        num /= 2;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 5 === 0) {
        num /= 5;
    }
    return num === 1;
}

console.log(tas6(5));
