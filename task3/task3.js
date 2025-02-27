// Напишите функцию tripledouble(num1, num2), которая принимает числа num1 и num2.
// Функция должна возвращать 1, если в числе num1 есть три одинаковые цифры подряд,
// а в числе num2 есть две одинаковые цифры подряд.
// В противном случае функция должна вернуть 0.

function task3(num1, num2) {
    num1 = String(num1).split("");
    let checkOne = 0;
    let checkTwo = 0;
    for (let a = 0; a < num1.length; a++) {
        if (num1[a] === num1[a + 1] || num1[a] === num1[a - 1]) {
            checkOne++;
        }
    }
    num2 = String(num2).split("")
    for (let b = 0; b < num2.length; b++) {
        if (num2[b] === num2[b + 1] || (num2[b] === num2[b - 1])) {
            checkTwo++;
        }
    }
    if (checkOne >= 3 && checkTwo >= 2) {
        return 1;
    } else {
        return 0;
    }
}

console.log(task3(122234, 12234));
