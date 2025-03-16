// Анаграмма - это слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// Нужно написать функцию isAnagram(a, b), которая проверяет, являются ли две строки анаграммами.
// Регистр букв не имеет значения.
// Пробелы или знаки препинания в расчет не берутся.

function isAnagram(a, b) {
    let stringA = "";
    for (let x = 0; x < a.length; x++) {
        stringA += a[x].toLowerCase();
    }
    let stringB = "";
    for (let y = 0; y < b.length; y++) {
        stringB += b[y].toLowerCase();
    }
    console.log(stringA, stringB);
    for (let s = 0; s < stringA.length; s++) {
        if (stringB.includes(stringA[s]) === false) {
            return false;
        }
    }
    return true;
}

isAnagram('Гора', 'РоГа');
