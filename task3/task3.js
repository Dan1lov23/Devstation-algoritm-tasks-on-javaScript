// Напишите функцию getVowelsCount(str), принимающую строку в качестве аргумента
// и возвращающую количество гласных, которые содержатся в этой строке.
// Гласными являются А, Е, Ё, О, У, Ы, Э, И, Ю, Я.
// Функция должна подсчитывать гласные любого регистра, то-есть работать независимо от регистра.

function getVowelsCount(str) {
    let counter = 0
    function check(symbol) {
        let array = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
        for (let a = 0; a < array.length; a++) {
            if (symbol === array[a]) {
                return 1;
            }
        }
        return 0;
    }
    for (let b = 0; b < str.length; b++) {
        if (check(str[b]) === 1) {
            counter++;
        }
    }
    return counter;
}

getVowelsCount("еуе");