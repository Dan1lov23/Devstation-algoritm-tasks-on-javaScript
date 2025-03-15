// Напишите функцию alphanumeric(string), которая проверяет,
// является ли полученная строка буквенно-цифровой.
// Строка является буквенно-цифровой при соблюдении условий ниже.
// Строка содержит хотя бы один символ (пустая строка "" недопустима).
// Допустимыми символами являются заглавные/строчные латинские буквы и цифры от 0 до 9.
// Строка не содержит пробелов/подчеркивания.

function check(symbol) {
    let checkArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for (let a = 0; a < checkArray.length; a++) {
        if (checkArray[a] === symbol) {
            return 1;
        }
    }
    return 0;
}

function alphanumeric(string) {
    string = string.split("");
    for (let a = 0; a < string.length; a++) {
        if (check(string[a]) === 0) {
            return false;
        }
    }
    return true;
}

alphanumeric("Mazinkaiser")
