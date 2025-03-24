// Напишите функцию formatText(text, size), которая принимает два аргумента:
// текст text и максимальное количество символов в строке size.
// Функция должна форматировать текст так, чтобы в каждой строке было не более
// указанного количества символов. При этом слова не должны разбиваться между строками.
// Разбивка по строкам должна происходить за счет добавления \n.

function formatText(text, size) {
    let words = text.split(' '); // Разбиваем текст на слова
    let resultString = '';
    let currentLine = '';

    for (let word of words) {
        // Проверяем, если добавление следующего слова не превышает размер строки
        if (currentLine.length + word.length + 1 <= size) {
            // Если текущая строка не пустая, добавляем пробел перед словом
            if (currentLine) {
                currentLine += ' ';
            }
            currentLine += word; // Добавляем слово в текущую строку
        } else {
            // Если текущая строка не пустая, добавляем её в результат
            if (currentLine) {
                resultString += currentLine + '\n';
            }
            currentLine = word; // Начинаем новую строку с текущего слова
        }
    }

    // Добавляем последнюю строку, если она не пустая
    if (currentLine) {
        resultString += currentLine;
    }

    return resultString;
}

console.log(formatText('У лукоморья дуб зеленый златая цепь на дубе том', 15));
