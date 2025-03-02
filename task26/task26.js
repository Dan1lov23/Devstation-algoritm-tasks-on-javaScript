// Напишите функцию decimalToBinary(digit), которая принимает на вход десятичное число digit
// и возвращает его же в двоичном представлении.
// Возвращаемое значение должно быть строкой.
// Если на вход подается некорректное значение, функция должна вернуть пустую строку.

function task27(digit) {
    let result = "";
    while (digit > 1) {
        result += Math.trunc(digit % 2)
        digit = digit / 2;
    }
    result = result.split("").reverse().join("");
    return result;
}

console.log(task27(1000));
