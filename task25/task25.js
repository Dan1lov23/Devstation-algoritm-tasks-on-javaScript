// Двоякое число — это число, в десятичной записи которого встречается не более двух различных цифр.
// Например, числа 1122, 1001, 199 — двоякие числа, а числа 123, 987, 5567 — нет.
// Напишите функцию doubleNumber(n), которая принимает на вход натуральное число,
// и выводит ближайшее к нему двоякое число. Если таких чисел несколько, то нужно вывести наименьшее.
// Если введенное число само является двояким, то функция просто возвращает это число.

function task25(number) {
    number = String(number);
    for (let a = 0; a < number.length; a++) {
        if (Number(number[a]) === Number(number[a + 1])) {
        } else {
            number = number.replace(number[a + 1], number[a]);
            return number;
        }
    }

}

console.log(task25("213"));
