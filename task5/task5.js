// Дано натуральное число number.
// Нужно написать функцию sumDigits(number), которая будет считывать все цифры
// числа number и возвращать их сумму.
// Возвращаемое значение должно быть числом.

function sumDigits(number) {
    let sum = 0;
    let stringNumber = String(number);
    for (let a = 0; a < stringNumber.length; a++) {
        sum += Number(stringNumber[a]);
    }
    return sum;
}

sumDigits(212);
