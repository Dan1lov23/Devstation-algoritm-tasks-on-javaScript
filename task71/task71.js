// Реализуйте функцию scramble(str1, str2),  которая принимает две строки и возвращает true,
// если символы первой строки str1 могут быть переставлены так, чтобы получить вторую строку str2,
// иначе возвращает false.

function scramble(str1, str2) {
    let counter = 0;
    for (let a = 0; a < str2.length; a++) {
        for (let b = 0; b < str1.length; b++) {
            if (str2[a] === str1[b]) {
                counter++;
                break;
            }
        }
    }
    if (counter === str2.length) {
        return true;
    } else {
        return false;
    }
}

console.log(scramble('rkqodlw', 'world'));
