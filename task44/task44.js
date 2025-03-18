// Необходимо реализовать функцию rle(str), принимающую в аргументах строку,
// состоящую из букв и возвращающую новую строку, в которой повторяющиеся
// буквы заменены количеством повторений.
// Функция должна быть чувствительна к регистру символов.
// Символ, повторяющийся один раз, в итоговой строке должен быть без цифры.

function rle(str) {
    let resultString = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            if (count > 1) {
                resultString += count;
            }
            resultString += str[i];
            count = 1;
        }
    }
    return resultString;
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
