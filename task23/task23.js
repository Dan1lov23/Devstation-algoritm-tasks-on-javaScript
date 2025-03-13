// Напишите функцию number(array), которая принимает массив строк и возвращает пронумерованные
// элементы этого массива.
// Нумерация начинается с 1.
// Формат n: string.
// Обратите внимание на двоеточие и пробел между ними.

function number(array) {
    let num = 1;
    let resultArray = [];
    for (let a = 0; a < array.length; a++) {
        resultArray.push(`${num}: ${array[a]}`);
        num++;
    }
    return resultArray;
}

number(["a", "b", "c"]);
