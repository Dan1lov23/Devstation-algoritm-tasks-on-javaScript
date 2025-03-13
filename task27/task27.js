// Напишите функцию tripledouble(num1, num2), которая принимает числа num1 и num2.
// Функция должна возвращать 1, если в числе num1 есть три одинаковые цифры подряд,
// а в числе num2 есть две одинаковые цифры подряд.
// В противном случае функция должна вернуть 0.

function tripledouble(num1, num2) {
    let result1 = 0;
    let result2 = 0;
    let stringNum1 = String(num1);
    let stringNum2 = String(num2);
    for (let a = 0; a < stringNum1.length; a++) {
        if (Number(stringNum1[a]) === Number(stringNum1[a + 1]) && Number(stringNum1[a]) ===  Number(stringNum1[a + 2])) {
            result1 = 1;
        }
    }
    for (let b = 0; b < stringNum2.length; b++) {
        if (Number(stringNum2[b]) === Number(stringNum2[b + 1])) {
            result2 = 1;
        }
    }
    if (result1 === result2) {
        return 1;
    }
    return 0;
}

tripledouble(10560002, 100);