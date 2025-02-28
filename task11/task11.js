// Дано натуральное число number.
// Нужно написать функцию sumDigits(number),
// которая будет считывать все цифры числа number и возвращать их сумму.
// Возвращаемое значение должно быть числом.

function task11(number) {
    let num = String(number);
    let sum = 0;
    for (let a = 0; a < num.length; a++) {
        sum += Number(num[a]);
    }
    return sum;
}

console.log(task11(1234567));
