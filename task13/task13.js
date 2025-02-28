// Напишите функцию dashatize(num), которая принимает строку с цифрами и возвращает новую,
// в которой каждая нечетная цифра окружена символом тире - (перед и после).
// Тире не должно добавляться в начале или в конце строки.

function task13(num) {
    let stringNum = String(num);
    let resultString = "";
    for (let i = 0; i < stringNum.length; i++) {
        if (Number(stringNum[i]) % 2 !== 0) {
            resultString += "-" + stringNum[i] + "|";
        } else {
            resultString += stringNum[i];
        }
    }
    return resultString;
}

console.log(task13(12345));
