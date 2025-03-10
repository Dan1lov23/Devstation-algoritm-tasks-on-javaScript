// Расстояние Хэмминга — число позиций, в которых соответствующие символы двух слов
// одинаковой длины различны.
// Напишите функцию hammingDistance(str1, str2), принимающую на вход две строки одинаковой длины.
// Функция должна возвращать число - расстояние Хэмминга.
// Если строки имеют разную длину, то функция должна возвращать: "Строки должны быть одинаковой длины".

function hammingDistance(str1, str2) {
    let indexOne = 0;
    let indexTwo = 0;
    let counter = 0;
    let winCounter = 0;
    if (str1.length !== str2.length) {
        return "Строки должны быть одинаковой длины"
    }
    while (counter !== str1.length) {
        if (str1[indexOne] !== str2[indexTwo]) {
            winCounter++;
        }
        indexOne++;
        indexTwo++;
        counter++;
    }
    return winCounter;
}

hammingDistance('Hello', 'Hallo');
