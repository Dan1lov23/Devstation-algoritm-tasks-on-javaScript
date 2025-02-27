// Напишите функцию с именем squareSum, которая принимает массив чисел numbers,
// и возводит каждое число в квадрат и затем складывает все полученные значения вместе.
// Функция должна вернуть сумму квадратов всех чисел из массива.

function task2(array) {
    let resultArray = [];
    for (let a = 0; a < array.length; a++) {
        resultArray.push(array[a] ** 2);
    }
    return resultArray;
}

console.log(task2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
