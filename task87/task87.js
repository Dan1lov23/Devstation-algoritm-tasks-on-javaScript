// Atoi - функция стандартной библиотеки C++, которая конвертирует строки в числа int32
// (целые 32-битные числа со знаком).
// Напишите функцию myAtoi(s), которая принимает строку s и возвращает полученное из неё числовое значение.
// Правила считывания числового значения в переданной строке:
// 1. Читайте символы строки по одному, слева-направо.
// 2. Игнорируйте пробелы в начале строки.
// 3. Определите знак числа, проверяя наличие символов "-" или "+".
// Если этих символов нет, считайте, что знак положительный.
// 4. Остановите конверсию при обнаружении нецифрового символа.Если цифр не было найдено, возвращайте 0.
// Обратите внимание, что символы "+" и "-" также останавливают конверсию после повторного обнаружения.
// 5. Если результат выходит за пределы диапазона [-2^31, 2^31 - 1], округлите число, чтобы оно оставалось в диапазоне.

function checkNum(symbol) {
    const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numArray.includes(symbol) === true) {
        return true;
    }
    return false;
}

function mathOper(symbol, string) {
    if (string[0] !== "-" && string[0] !== "+" && symbol === "-" && symbol === "+") {
        return false;
    } else if (string[0] === "-") {
        return "-"
    }
}

function myAtoi(s) {
    let checkCounter = 0;
    let string = "";
    for (let a = 0; a < s.length; a++) {
        if (s[a] !== " ") {
            string += s[a];
        }
    }
    s = string;
    for (let a = 0; a < s.length; a++) {
        if (checkNum(s[a]) === true) {
            checkCounter++;
        }
    }
    if (checkCounter <= 0) {
        return 0
    }
    let minCheckCounter = 0;
    let plusCheckCounter = 0;
    for (let a = 0; a < s.length; a++) {
        if (s[a] === "-") {
            minCheckCounter++;
        } else if (s[a] === "+") {
            plusCheckCounter++;
        }
    }
    if (minCheckCounter > 1) {
        return 0;
    }
    if (plusCheckCounter > 1) {
        return 0;
    }

    let resultString = "";

    if (s[0] === "+" || s[0] === "-") {
        for (let a = 1; a < s.length; a++) {
            if (checkNum(s[a]) === true) {
                resultString += s[a];
            } else {
                return Number(s[0] + resultString);
            }
        }
    } else {
        for (let a = 0; a < s.length; a++) {
            if (checkNum(s[a]) === true) {
                resultString += s[a];
            } else {
                return Number(resultString);
            }
        }
    }

    if (s[0] === "-") {
        resultString = ("-" + resultString);
    }
    if (Number(resultString) > 2147483647) {
        return 2147483647;
    } else if (Number(resultString) < -2147483648) {
        return -2147483648
    }
    return(Number(resultString));
}

console.log(myAtoi("-11e70"));
