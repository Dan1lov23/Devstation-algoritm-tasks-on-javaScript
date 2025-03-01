// Напишите функцию sortNumbersByDigitSum(numbers), которая будет принимать массив
// целых чисел numbers и возвращать отсортированный массив чисел в порядке возрастания суммы их цифр.
// Если сумма цифр у нескольких чисел одинакова, то такие числа должны быть отсортированы
// в порядке возрастания самих чисел.

function task19(array) {
    let sum = 0;
    let resultArray = [];
    for (let a = 0; a < array.length; a++) {
       let stringNumber = String(array[a]);
       sum = 0;
       for (let b = 0; b < stringNumber.length; b++) {
           sum += Number(stringNumber[b]);
       }
        resultArray.push(sum);
    }
    return(resultArray.sort((a, b) => a - b));
}

console.log(task19([13, 23, 45, 15, 68, 3]));