// Напишите функцию firstNonRepeatingLetter(s), которая принимает строку
// как параметр и возвращает первый символ, который нигде не повторяется в строке.
// Заглавные и строчные буквы считаются одним и тем же символом, но функция
// должна возвращать правильный регистр для начальной буквы.
// Если строка содержит все повторяющиеся символы, она должна возвращать пустую строку.

function firstNonRepeatingLetter(s) {
    let counter = 0;
    for (let a = 0; a < s.length; a++) {
        for (let b = 0; b < s.length; b++) {
            if (String(s[a]).toLowerCase() === String(s[b]).toLowerCase()) {
                counter++;
            }
        }
        if (counter === 1) {
            return s[a];
        }
        counter = 0;
    }
    return ""
}

console.log(firstNonRepeatingLetter('sTreSS'));
