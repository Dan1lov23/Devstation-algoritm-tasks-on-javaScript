// Двоякое число — это число, в десятичной записи которого встречается не более двух различных цифр.
// Например, числа 1122, 1001, 199 — двоякие числа, а числа 123, 987, 5567 — нет.
// Напишите функцию doubleNumber(n), которая принимает на вход натуральное число,
// и выводит ближайшее к нему двоякое число. Если таких чисел несколько, то нужно вывести наименьшее.
// Если введенное число само является двояким, то функция просто возвращает это число.

function doubleNumber(n) {
    let array = [];
    for (let a = 0; a < String(n).length; a++) {
        array.push(String(n)[a]);
    }
    console.log(array);
    for (let a = 0; a < array.length; a++) {
        const count = array.filter(item => item === array[a]).length;
        console.log(count);
        if (count <= 1) {
            return false;
        }
    }
    return true
}

console.log(doubleNumber(10130));
