// Периодические кольца — это числа, у которых последовательность цифр повторяется в последовательности деления.
// Напишите функцию recurringCycles(numerator, denominator), выводящую массив остатков,
// которые появляются при последовательном делении числителя на знаменатель.
// Если какой-либо остаток повторяется, это означает, что начался периодический цикл.
// Функция принимает на вход два числа - числитель numerator и знаменатель denominator.
// Например, рассмотрим деление числа 1 на 7 и опишем, как функция будет работать для этого случая:
// - Первый остаток будет равен остатку от деления числителя на знаменатель: 1 % 7 = 1
// - Затем мы умножаем полученный остаток на 10 (1 * 10 = 10) и берем остаток от деления на знаменатель: 10 % 7 = 3
// - Последующие остатки будут получены аналогично
// - Процесс будет продолжаться, пока не будет получен повторяющийся остаток или остаток равный нул
// В результате получаем массив остатков, которые появляются при последовательных делениях. Если какой-то остаток повторяется, то процесс останавливается.
// Решением этого примера будет является массив: [1, 3, 2, 6, 4, 5]

function check(stringNumber) {
    const checkArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for (let a = 0; a < stringNumber.length; a++) {
        if (checkArray.includes(stringNumber[a]) === false) {
            return false;
        }
    }
    return true;
}

function recurringCycles(numerator, denominator) {
    let resultArray = [];
    let dev = numerator % denominator;
    const checkArray = [];
    numerator = numerator * 10;
    resultArray.push(dev);
    checkArray.push(dev);
    while (true) {
        dev = numerator % denominator;
        numerator = numerator * 10;
        if (checkArray.includes(dev) === false) {
            resultArray.push(dev);
            checkArray.push(dev);
        } else {
            break;
        }
    }
    return resultArray;
}

console.log(recurringCycles(2, 13));

