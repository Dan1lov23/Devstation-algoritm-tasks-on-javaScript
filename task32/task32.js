// Задан массив, содержащий целые числа и имеющий длину не менее 3.
// Массив либо полностью состоит из нечетных чисел, либо полностью состоит из четных чисел,
// за исключением одного целого числа N.
// Напишите функцию findOutlier(integers), который принимает массив в качестве аргумента и возвращает N.

function task32(array) {
    let arrayEven = [];
    let arrayNotEven = [];
    for (let a = 0; a < array.length; a++) {
        if (array[a] % 2 === 0) {
            arrayEven.push(array[a]);
        } else {
            arrayNotEven.push(array[a]);
        }
    }
    if (arrayEven.length === 1) {
        return arrayEven[0];
    } else {
        return arrayNotEven[0];
    }
}

console.log(task32([2, 3, 383]));
