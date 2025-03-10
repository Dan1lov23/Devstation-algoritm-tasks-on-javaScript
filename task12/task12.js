// Напишите функцию frequentSymbol(text), принимающую на вход текст,
// в котором нужно найти самый часто используемый символ и вывести его.
// Если же в тексте одинаковое количество символов встречается одинаковое количество раз,
// то функция будет выводить тот символ, который находится первым в тексте.
// Строчная и прописная буква - это разные символы.

function frequentSymbol(text) {
    const frequency = {};

    for (let char of text) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    let maxCount = 0;
    let resultSymbol = '';

    for (let char in frequency) {
        if (frequency[char] > maxCount) {
            maxCount = frequency[char];
            resultSymbol = char;
        } else if (frequency[char] === maxCount && resultSymbol === '') {
            resultSymbol = char;
        }
    }
    return resultSymbol;
}

frequentSymbol('tic tac');
