// Напишите функцию solveSorting(arr), которая сортирует элементы
// в массиве по убыванию частоты их встречаемости.
// Если два элемента имеют одинаковую частоту, отсортируйте их по возрастанию значения чисел массива.
// Функция должна вернуть отсортированный массив.

function repeat(arr) {
    let symbol = "";
    let max = 0;
    let counter = 0;
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (arr[a] === arr[b]) {
                counter++;
            }
        }
        if (counter > max) {
            max = counter;
            symbol = arr[a];
        }
        counter = 0;
    }
    return symbol;
}

function solveSorting(arr) {
    arr = arr.sort((a, b) => a - b);
    let counter = 0;
    let newArray = [];
    while (arr.length > 0) {
        let mostRepeatedSymbol = repeat(arr);
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === mostRepeatedSymbol) {
                arr.splice(i, 1);
                counter++;
            }
        }
        for (let c = counter; c > 0; c--) {
            newArray.push(mostRepeatedSymbol);
        }
        counter = 0;
    }
    return newArray;
}

console.log(solveSorting([2, 3, 5, 3, 7, 9, 5, 3, 7]));
