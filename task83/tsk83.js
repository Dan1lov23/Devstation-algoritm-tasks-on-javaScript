// Напишите функцию dashatize(num), которая принимает строку с цифрами и возвращает новую,
// в которой каждая нечетная цифра окружена символом тире - (перед и после).
// Тире не должно добавляться в начале или в конце строки.

function dashatize(num) {
    let resultString = "";
    let stringNum = String(num);
    for (let a = 0; a < stringNum.length; a++) {
        if (Number(stringNum[a]) % 2 === 0) {
            resultString += stringNum[a];
        } else if (Number(stringNum[a - 1]) % 2 !== 0) {
            resultString += stringNum[a] + "-";
        } else {
            resultString += "-" + stringNum[a] + "-";
        }
    }
    let string = "";
    for (let a = 0; a < resultString.length; a++) {
        if (a + 1 === resultString.length && resultString[a] === "-") {
            break;
        } else {
            string += resultString[a];
        }
    }
    return string;
}

console.log(dashatize(68153))