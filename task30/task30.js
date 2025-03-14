// Уродливыми называются числа, делителями которых могут быть только простые числа 2, 3 и 5.
// Нужно написать функцию isUgly(num), которая проверит, является ли число уродливым.

function isUgly(num) {
    if (num <= 0) return false;
    const primeFactors = [2, 3, 5];

    for (let factor of primeFactors) {
        while (num % factor === 0) {
            num /= factor;
        }
    }
    return num === 1;
}

isUgly(123);

