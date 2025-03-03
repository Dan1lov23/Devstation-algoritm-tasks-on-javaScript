// Дружественные числа - это пары натуральных чисел, для которых сумма делителей одного
// числа равна другому числу и наоборот.
// Напишите функцию friendlyNumbers(start, end), которая принимает два числа.
// Первое число start - начало диапазона, end - конец диапазона.

function task27(start, end) {
    function check(number1, number2) {
        number1 = String(number1);
        number2 = String(number2);

        let digitSumOne = 0 ;
        let digitSumTwo = 0;
        for (let a = 1; a < number1; a++) {
            if (number1 % a === 0) {
                digitSumOne += a;
            }
        }
        for (let b = 0; b < number2; b++) {
            if (number2 % b === 0) {
                digitSumTwo += b;
            }
        }
        if (digitSumOne === Number(number2) && digitSumTwo === Number(number1)) {
            return 1;
        }
        return 0;
    }
    let num1 = start;
    let num2 = start;
    let resultArray = [];
    while (num1 < end) {
        num1++;
        num2 = 0;
        while (num2 < end) {
            console.log(num1, num2);
            if (check(num1, num2) === 1) {
                resultArray.push(num1, num2);
                return resultArray;
            }
            num2++;
        }
    }
}

console.log(task27(100, 300));
