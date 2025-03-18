// Напишите функцию decimalToBinary(digit),
// которая принимает на вход десятичное число digit и возвращает его же в двоичном представлении.
// Возвращаемое значение должно быть строкой.
// Если на вход подается некорректное значение, функция должна вернуть пустую строку.

function decimalToBinary(digit) {
    let result = [];
    while (digit >= 0.9) {
        result.push(digit % 2 | 0);
        digit = digit / 2;
    }
    result = result.reverse();
    let resultString = "";
    for (let a = 0; a < result.length; a++) {
        resultString += result[a];
    }
    return resultString;
}

console.log(decimalToBinary(8));
