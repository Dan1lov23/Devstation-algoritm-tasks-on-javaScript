// Напишите функцию decodeRLE(str), которая принимает на вход упакованную
// строку и возвращает уже распакованную строку.
// Функция должна распаковывать строку, учитывая количество повторений символов,
// указанных перед каждым символом в упакованной строке.
// Например, функция принимает строку вида "3X4Y5Z" и возвращает "XXXYYYYZZZZZ".

function check(symbol) {
    let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for (let a = 0; a < numberArray.length; a++) {
        if (symbol === numberArray[a]) {
            return true;
        }
    }
    return false;
}

function decodeRLE(str) {
    let resultString = "";
    for (let a = 0; a < str.length; a++) {
        if (check(str[a]) === true && str[a + 1] === undefined) {
            break;
        } else if (check(str[a]) === true && check(str[a + 1]) === true) {
            let counter = 0;
            while (counter < Number(str[a]) + str[a + 1]) {
                resultString += str[a + 2];
                counter++;
            }
        } else if (check(str[a]) === true) {
            let counter = 0;
            while (counter < Number(str[a])) {
                resultString += str[a + 1];
                counter++;
            }
        } else if (check(str[a]) === false && check(str[a + 1]) === false && check(str[a - 1]) === false) {
            resultString += str[a];
        }
    }
    return resultString;
}

console.log(decodeRLE("10a3b1"));
