// Напишите функцию countBits(n), которая принимает целое число в качестве входных
// данных и возвращает количество битов, равных единицам в двоичном представлении этого числа.
// Гарантировано, что входные данные не будут отрицательными.

function countBits(n) {
    let stringNum = "";
    let counter = 0;
    while (n >= 1) {
        let num = String(n % 2);
        stringNum += num[0];
        n = n / 2;
    }
    stringNum = stringNum.split("").reverse().join("");
    for (let a = 0; a < stringNum.length; a++) {
        if (stringNum[a] === "1") {
            counter++;
        }
    }
    return counter;
}

console.log(countBits(1234));
