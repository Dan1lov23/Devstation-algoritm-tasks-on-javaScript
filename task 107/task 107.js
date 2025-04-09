// Напишите функцию isIsomorphic(str1, str2), принимающую две строки и определяющую,
// являются ли они изоморфными.
// Количество и порядок символов при этом необходимо учитывать.
// Изоморфными называются строки, между символами которых можно установить однозначное соответствие.
// Например, dgg и add изоморфны (d = a, g = d, g = d).

function check(symbol, string) {
    let counter = 0;
    for (let a = 0; a < string.length; a++) {
        if (symbol === string[a]) {
            counter++;
        }
    }
    return counter;
}

function isIsomorphic(str1, str2) {
    let array1 = [];
    let array2 = [];
    for (let a = 0; a < str1.length; a++) {
        array1.push(check(str1[a], str1));
    }
    for (let b = 0; b < str2.length; b++) {
        array2.push(check(str2[b], str2));
    }
    array1 = array1.sort((a, b) => a - b);
    array2 = array2.sort((a, b) => a - b);
    for (let c = 0; c < array1.length; c++) {
        if (array1[c] !== array2[c]) {
            return false;
        }
    }
    return true;
}

console.log(isIsomorphic('pink', 'loot'))
//