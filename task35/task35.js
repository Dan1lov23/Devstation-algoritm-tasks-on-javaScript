// Тринадцатеричная система счисления использует цифры 0-9,
// а также латинские буквы A (10), B (11) и С (12).
// Реализуйте функцию B13toB10(s), которая принимает строку, содержащую тринадцатеричное число,
// и возвращает полученное из этой строки число в десятичной системе счисления.
// Если строка s не является валидным тринадцатеричным числом, функция должна вернуть null.
// Обратите внимание, что буквы А-С могут быть как прописными, так и строчными.
// Присутствие любого другого символа, включая пробелы и знак "+", делает строку невалидной.
// Исключение: первый символ строки может содержать знак "-".

function check(string) {
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    for (let i = 0; i < numArray.length; i++) {
        if (Number(string) === numArray[i]) {
            return Number(string);
        }
    }
    if (string === "A") {
        return 10;
    } else if (string === "B") {
        return 11;
    } else if (string === "C") {
        return 12;
    } else {
        return false;
    }
}

function task35(string) {
    let result = 0;
    let factor = string.length - 1;
    for (let a = 0; a < string.length; a++) {
        result += check(string[a]) * 13 ** factor;
        factor--;
    }
    return result;
}

console.log(task35('BAC'));
