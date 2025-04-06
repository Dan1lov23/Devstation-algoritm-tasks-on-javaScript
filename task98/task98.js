// Дана некоторая строка, обязательно содержащая хотя бы один символ.
// Требуется написать функцию findUniqueSubstring(str), находящую самую длинную подстроку,
// которая не содержит в себе повторяющихся символов.
// Если будет несколько самых длинных подстрок с одинаковой длиной, то возвращать следует первую.
// Примеры вызова функции:

function repeatCheck(string) {
    const charSet = new Set();
    for (let char of string) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

function findUniqueSubstring(str) {
    let result = "";

    for (let a = 0; a < str.length; a++) {
        let subString = "";

        for (let b = a; b < str.length; b++) {
            subString += str[b];
            if (repeatCheck(subString)) {
                if (subString.length > result.length) {
                    result = subString;
                }
            } else {
                break; 
            }
        }
    }

    return result;
}

console.log(findUniqueSubstring("абзацы крепки"));