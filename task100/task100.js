// Напишите функцию frequentSymbol(text), принимающую на вход текст,
// в котором нужно найти самый часто используемый символ и вывести его.
// Если же в тексте одинаковое количество символов встречается одинаковое количество раз,
// то функция будет выводить тот символ, который находится первым в тексте.
// Строчная и прописная буква - это разные символы.

function frequentSymbol(text) {
    let resultArray = ["", 0];
    for (let a = 0; a < text.length; a++) {
        let symbol = text[a];
        let counter = 0;
        for (let b = 0; b < text.length; b++) {
            if (symbol === text[b]) {
                counter++;
            }
        }
        if (counter > resultArray[1]) {
            resultArray = [symbol, counter];
        }
    }
    return resultArray[0];
}

frequentSymbol('Show Shawn Sharons shabby shoes')
