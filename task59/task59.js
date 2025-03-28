// Напишите функцию mergeArrays(a, b), которая принимает два массива a и b в качестве входных данных.
// Функция должна возвращать новый массив, содержащий все элементы двух исходных массивов,
// чередующиеся между собой.

function mergeArrays(a, b) {
    let indexOne  = 0;
    let resultArray = [];
    while (indexOne < a.length) {
        if (a[indexOne] === undefined && b[indexOne] !== undefined) {
            resultArray.push(b[indexOne]);
        } else if (a[indexOne] !== undefined && b[indexOne] === undefined) {
            resultArray.push(a[indexOne]);
        } else {
            resultArray.push(a[indexOne], b[indexOne]);
        }
        indexOne++;
    }
    return resultArray;
}

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'] , [1, 2, 3, 4, 5]))
