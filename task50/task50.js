// Дружественные числа - это пары натуральных чисел, для которых сумма делителей
// одного числа равна другому числу и наоборот.
// Напишите функцию friendlyNumbers(start, end), которая принимает два числа.
// Первое число start - начало диапазона, end - конец диапазона.


function sumOfDiv(number) {
    let sum = 0;
    for (let a = 0; a < number; a++) {
        if (number % a === 0) {
            sum += a;
        }
    }
    return sum;
}

function friendlyNumbers(start, end) {

    console.time("MyFunctionTime");
    let resultArray = [];
    for (let a = start; a < end; a++) {
        for (let b = a + 1; b < end; b++) {
            if (sumOfDiv(a) === b && sumOfDiv(b) === a) {
                let subArray = [a, b];
                resultArray.push(subArray);
            }
        }
    }
    console.timeEnd("MyFunctionTime");
    return resultArray;
}

console.log(friendlyNumbers(1, 5000));
