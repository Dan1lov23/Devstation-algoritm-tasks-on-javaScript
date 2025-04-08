// Реализуйте функцию countSymbols(string), которая принимает строку и возвращает
// количество всех встречающихся символов в строке в виде словаря.
// Если строка пуста, тогда функция должна вернуть {}

function countSymbols(string) {
    let result = {};

    if (string.length === 0) {
        return result;
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

    return result;
}

console.log(countSymbols('задачу')); // { 'з': 1, 'а': 2, 'д': 1, 'у': 1, 'ч': 1 }
