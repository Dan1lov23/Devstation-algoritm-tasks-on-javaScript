// Панграмма - это предложение, содержащее все буквы английского алфавита.
// Напишите функцию isPangram(text), которая проверяет, является ли переданная ей строка панграммой.
// Функция возвращает значение true, если текст содержит все буквы английского алфавита,
// в противном случае - false.

function isPangram(text) {
    let checkArray = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z'];
    for (let a = 0; a < checkArray.length; a++) {
        if (text.includes((checkArray[a].toLowerCase())) === false && text.includes((checkArray[a].toUpperCase())) === false) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));


