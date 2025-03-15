// Напишите функцию filterBySubstring(input, dictionary), которая принимает входную строку input
// и массив dictionary и возвращает те значения из массива,
// которые начинаются с входной строки,в виде массива строк.
// Функция должна возвращать все результаты в порядке, указанном в массиве.
// Алгоритм не должен зависеть от регистра, но регистр слова должен быть сохранен при его возврате.


function filterBySubstring(input, dictionary) {
    let result = [];
    let string = String(dictionary).split(",");
    for (let a = 0;a < string.length; a++) {
        if (input === string[a].slice(0, input.length)) {
            result.push(string[a]);
        }
    }
    return result;
}

filterBySubstring('ai', ['airplane', 'airport', 'apple', 'ball'])
