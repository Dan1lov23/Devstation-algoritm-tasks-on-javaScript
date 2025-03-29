// Напишите функцию largest(n, array), которая принимает два параметра n и arr.
// Функция должна возвращать массив наибольших n элементов из массива arr.
// Наибольшие элементы должны возвращаться в порядке возрастания.

function largest(n, array) {
    let newArray = array.sort((a, b) => b - a);
    let resultArray = [];
    for (let a = 0; a < n; a++) {
        resultArray.push(newArray[a]);
    }
    return resultArray.sort((a, b) => a - b);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
