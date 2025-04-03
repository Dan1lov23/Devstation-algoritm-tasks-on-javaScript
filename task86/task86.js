// Kebab-case — это способ соединения слов в одну строку, при котором слова разделяются дефисом.
// Напишите функцию kebabize(str), которая принимает строку в формате camelCase и возвращает
// её в формате kebab-case. В формате kebab-case слова разделяются символом дефиса
// - и все символы приводятся к нижнему регистру.
// Функция должна игнорировать все символы, не являющиеся буквами при преобразовании в kebab-case.

function check(symbol) {
    const checkArray = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж',
        'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О',
        'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х',
        'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь',
        'Э', 'Ю', 'Я', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'];
    for (let a = 0; a < checkArray.length; a++) {
        if (symbol === checkArray[a]) {
            return true;
        }
    }
    return false;
}

function mainCheck(symbol) {
    let checkArray = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж',
        'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О',
        'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х',
        'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь',
        'Э', 'Ю', 'Я', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z']
    if (checkArray.includes(symbol.toUpperCase())) {
        return true;
    } else {
        return false;
    }
}

function kebabize(str) {
    let resultString = "";
    for (let a = 0; a < str.length; a++) {
        if (check(str[a]) === true && check(str[a + 1]) === false && mainCheck(str[a]) === true && a === 0) {
            resultString += str[a].toLowerCase();
        } else if (check(str[a]) === true && check(str[a + 1]) === true && mainCheck(str[a]) === true) {
            resultString += "-" + str[a].toLowerCase() + "-";
        } else if (check(str[a]) === true && check(str[a + 1]) === true && check(str[a - 1]) === false && mainCheck(str[a]) === true) {
            resultString += str[a].toLowerCase() + "-";
        } else if (check(str[a]) === true && check(str[a - 1]) === true && mainCheck(str[a]) === true) {
            resultString += str[a].toLowerCase();
        } else if (check(str[a]) === true && check(str[a + 1]) === false && check(str[a - 1]) === false && mainCheck(str[a]) === true) {
            resultString += "-" + str[a].toLowerCase();
        } else if (check(str[a]) === false && mainCheck(str[a]) === true) {
            resultString += str[a];
        }
    }
    let string = "";
    for (let a = 0; a < resultString.length; a++) {
        if (resultString[a] !== "-") {
            string += resultString[a];
        } else if (resultString[a] === "-" && resultString[a + 1] !== "-" && a !== 0) {
            string += resultString[a];
        }
    }
    return string;
}

console.log(kebabize("ВЕРБЛЮД"));
