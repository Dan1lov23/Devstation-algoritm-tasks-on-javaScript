// Нужно написать функцию highAndLow(numbers), которая будет получать
// строку чисел numbers, разделенных пробелом.
// Функция должна вернуть строку с наибольшим и наименьшим числом из полученной строки.

function highAndLow(number) {
    let string = number.split(" ");
    let max = Number(string[0]);
    let min = Number(string[0]);
    for (let a = 0; a < string.length; a++) {
        if (Number(string[a]) > max) {
            max = string[a];
        } else if (Number(string[a]) < min) {
            min = string[a];
        }
    }
    return `${max} ${min}`
}

highAndLow("1 2 9 3 4 -3 5 7 1");
