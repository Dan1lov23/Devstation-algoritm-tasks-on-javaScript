// Напишите функцию generateHashtag(str), которая получает строку и возвращает новую строку
// в виде хэштега.
// Первая буква каждого слова должна быть заглавной.
// Если приходящие данные являются пустой строкой, то функция должна возвращать значение false.

function generateHashtag (str) {
    let resultString = '';
    if (str === "") {
        return false;
    }
    resultString += "#";
    for (let a = 0; a < str.length; a++) {
        if (str[a] === " ") {
            resultString += str[a + 1].toUpperCase();
            a++;
        } else {
            resultString += str[a];
        }
    }
    return resultString;
}

console.log(generateHashtag("Hello there thanks for trying"));
