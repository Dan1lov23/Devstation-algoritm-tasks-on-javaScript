// Напишите функцию reverseWords(str), которая принимает на вход предложение и возвращает его же,
// но уже с развернутыми словами, разделенными пробелами.
// Примеры вызова функции:

function reverseWords(str) {
    let reverseString = "";
    str = str.split(" ");
    for (let a = 0; a < str.length; a++) {
        if (a === str.length - 1) {
            reverseString += str[a].split("").reverse().join("");
        } else {
            reverseString += str[a].split("").reverse().join("") + " ";
        }
    }
    return reverseString;
}

reverseWords("Не всё должно быть наделено смыслом");