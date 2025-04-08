// Напишите функцию permutation(str), которая принимает строку,
// состоящую из попарно различных символов.
// Функция должна вывести все перестановки символов этой строки в виде массива строк.

function permutation(str) {
    let resultPromArray = [];
    for (let a = 0; a < str.length; a++) {
        for (let b = 0; b < str.length; b++) {
            resultPromArray.push(str[a] + str[b]);
        }
    }
    return([...new Set(resultPromArray)]);
}

console.log(permutation('ab'));
