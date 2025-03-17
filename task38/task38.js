// Реализуйте функцию sarcasmify(s), которая превращает предложение в саркастичное,
// чередуя прописные и строчные буквы.
// Буквы каждого слова должны чередоваться через одну: "нАпРиМеР".
// Первая буква каждого слова должна оставаться без изменений.
// Между словами всегда будет один пробел. Слова не будут содержать цифры или символы
// (за исключением пунктуации). Пробелов в начале строки не будет никогда.

function sarcasmify(s) {
    return s.split(' ').map(word => {
        let result = word[0];
        let isUpperCase = false;

        for (let i = 1; i < word.length; i++) {
            if (/[A-Za-zА-Яа-яЁё]/.test(word[i])) {
                result += isUpperCase ? word[i].toUpperCase() : word[i].toLowerCase();
                isUpperCase = !isUpperCase;
            } else {
                result += word[i];
            }
        }

        return result;
    }).join(' ');
}

console.log(sarcasmify("Скажи, Ванька, как жизнь?"));

console.log(sarcasmify("Скажи, Ванька, как жизнь?"));

sarcasmify("Скажи, Ванька, как жизнь?");
