// Реализуйте функцию sarcasmify(s), которая превращает предложение
// в саркастичное, чередуя прописные и строчные буквы.
// Буквы каждого слова должны чередоваться через одну: "нАпРиМеР".
// Первая буква каждого слова должна оставаться без изменений.
// Между словами всегда будет один пробел. Слова не будут содержать
// цифры или символы (за исключением пунктуации). Пробелов в начале строки не будет никогда.

function sarcasmify(s) {
    let resultString = "";
    let isUpperCase = true;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            resultString += ' ';
            continue;
        }

        if (i === 0 || s[i - 1] === ' ') {
            resultString += s[i];
            isUpperCase = false;
        } else {
            resultString += isUpperCase ? s[i].toUpperCase() : s[i].toLowerCase();
            isUpperCase = !isUpperCase;
        }
    }

    return resultString;
}

console.log(sarcasmify("Скажи, Ванька, как жизнь?"));
