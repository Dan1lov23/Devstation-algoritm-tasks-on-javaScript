// Напишите функцию sortNumbersByDigitSum(numbers), которая будет принимать массив
// целых чисел numbers и возвращать отсортированный массив чисел в порядке возрастания суммы их цифр.
// Если сумма цифр у нескольких чисел одинакова, то такие числа должны быть отсортированы
// в порядке возрастания самих чисел.

function check(stringNumber) {
    let sum = 0;
    for (let a = 0; a < stringNumber.length; a++) {
        sum += Number(stringNumber[a]);
    }
    return sum;
}

function sortNumbersByDigitSum(numbers) {
    return numbers.sort((a, b) => {
        const sumA = check(String(a));
        const sumB = check(String(b));
        if (sumA === sumB) {
            return a - b;
        }
        return sumA - sumB;
    });
}

console.log(sortNumbersByDigitSum([321, 101, 432, 222, 342, 23]));
