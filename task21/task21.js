// Напишите функцию с именем squareSum, которая принимает массив чисел numbers,
// и возводит каждое число в квадрат и затем складывает все полученные значения вместе.
// Функция должна вернуть сумму квадратов всех чисел из массива.

function squareSum(numbers) {
    let result = 0;
    for (let a = 0; a < numbers.length; a++) {
        result += numbers[a] ** 2;
    }
    return result;
}

squareSum([1, 2, 2]);
