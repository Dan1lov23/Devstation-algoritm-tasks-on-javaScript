// CamelCase — это способ записи фраз без пробелов, при котором первая буква каждого слова,
// кроме первого, пишется с большой буквы, напоминая горбы верблюда.
// Реализуйте функцию toCamelCase(str), чтобы она преобразовала разделенные
// слова в camelCase (верблюжий регистр).
// В роли разделителя выступают символы -, _ и пробел.
// Первая буква, в зависимости от входной строки, не обязательно должна быть написана с заглавной.
// Функция должна вернуть преобразованную строку.

function check(symbol) {
    const checkArray = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const checkArray2 = [
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
        'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
    ];
    for (let a = 0; a < checkArray.length; a++) {
        if (checkArray[a] === symbol) {
            return true;
        }
    }
    for (let a = 0; a < checkArray2.length; a++) {
        if (checkArray2[a] === symbol) {
            return true;
        }
    }
    return false;
}

function toCamelCase(str) {
    let resultString = "";
    for (let a = 0; a < str.length; a++) {
        if (check(str[a]) === true) {
            resultString += String(str[a]);
        } else {
            resultString += String(str[a + 1]).toUpperCase();
            a++;
        }
    }
    return resultString;
}

console.log(toCamelCase("всемПривет"));
