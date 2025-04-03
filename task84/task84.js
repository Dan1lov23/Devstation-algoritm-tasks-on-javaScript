// Напишите функции square(), cube(), average(), sum(), even() и odd(),
// которые будут преобразовывать переданные им массивы.
// square() должна возвращать копию массива, содержащего все значения возведенный в квадрат.
// cube() должна возвращать копию массива, содержащего все значения возведенные в куб.
// average() должна возвращать среднее значение переданных значений массива;
// для пустого массива должна возвращать значение 0.
// sum() должна возвращать сумму всех значений массива.
// even() должна возвращать массив всех четных чисел.
// odd() должна возвращать массив всех нечетных чисел.

function square(arr) {
    let resultArray = [];
    for (let a = 0; a < arr.length; a++) {
        resultArray.push(arr[a] ** 2);
    }
    return resultArray;
}

square([1, 2, 3, 4, 5]);

function cube(arr) {
    let resultArray = [];
    for (let a = 0; a < arr.length; a++) {
        resultArray.push(arr[a] ** 3);
    }
    return resultArray;
}

cube([1, 2, 3, 4, 5])

function average(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let result = 0;
    let sum = 0;
    for (let a = 0; a < arr.length; a++) {
        sum += arr[a];
    }
    result = sum / arr.length;
    return result;
}

average([1, 2, 3, 4, 5])

function sum(arr) {
    let result = 0;
    for (let a = 0; a < arr.length; a++) {
        result += arr[a];
    }
    return result;
}

sum([1, 2, 3, 4, 5]);


function even(arr) {
    let resultArray = [];
    for (let a = 0; a < arr.length; a++ ) {
        if (arr[a] % 2 === 0) {
            resultArray.push(arr[a]);
        }
    }
    return resultArray;
}

even([1, 2, 3, 4, 5]);

function odd(arr) {
    let resultArray = [];
    for (let a = 0; a < arr.length; a++ ) {
        if (arr[a] % 2 !== 0) {
            resultArray.push(arr[a]);
        }
    }
    return resultArray;
}

odd([1, 2, 3, 4, 5]);
