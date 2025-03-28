// Реализуйте функцию uniqueInOrder(iterable), которая принимает последовательность
// (либо строку, либо массив) в качестве аргумента и возвращаетмассив со всеми элементами
// в исходном порядке, но без двух или более последовательных элементов, имеющих одинаковое значение.
// Функция должна вернуть массив с исходными значениями без повторяющихся элементов.

function uniqueInOrder(iterable) {
    let resultArray = [];
    for (let a = 0; a < iterable.length; a++) {
        if (iterable[a] === iterable[a - 1] && iterable[a] !== iterable[a + 1] || iterable[a] !== iterable[a - 1] && iterable[a] !== iterable[a + 1]) {
            resultArray.push(iterable[a]);
        }
    }
    return resultArray;
}

uniqueInOrder('AAAABBBCCDAABBB')
