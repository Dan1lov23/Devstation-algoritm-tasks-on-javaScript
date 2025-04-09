// Напишите функцию oddElimination(str), принимающую строку и выводящую один символ.
// Функция удаляет из строки символы с нечетными индексами до тех пор,
// пока в строке не останется только один символ.
// Пробел - это тоже символ.

function oddElimination(str) {
    while (str.length > 1) {
        let newString = "";
        for (let a = 0; a < str.length; a++) {
            if (a % 2 !== 0) {
                newString += str[a];
            }
        }
        str = newString;
    }
    return str;
}

console.log(oddElimination('123456789'));
