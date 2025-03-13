// Реализуйте функцию divide(str), которая принимает строку и разделяет её на пары из двух символов.
//
// Если строка содержит нечетное количество символов, то к последней паре следует добавить символ _ для четности.
//
// Функция должна вернуть массив строк разделённых пар.

function divide(str) {
    let resultArray = [];
    for (let a = 0; a < str.length; a += 2) {
        if (str[a + 1] === undefined) {
            resultArray.push(str[a] + "_");
            break;
        }
        resultArray.push(str[a] + str[a + 1]);
    }
    return resultArray;
}

console.log(divide("abcdefg"));
