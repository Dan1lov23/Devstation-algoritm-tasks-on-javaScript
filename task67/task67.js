// Реализуйте функцию high(x), которая принимает последовательность слов в виде строки x,
// в которой нужно найти слово с наибольшим баллом.
// Каждая буква английского алфавита набирает очки в соответствии с ее положением:
// a = 1, b = 2, c = 3 и т.д.
// Функция должна вернуть слово, набравшее наибольшее количество баллов, в виде строки.
// Если два слова набрали одинаковое количество очков, нужно вернуть то слово,
// которое появилось раньше в исходной строке.

function high(x) {

    function check(symbol) {
        let checkArray = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
            'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (let a = 0; a < checkArray.length; a++) {
            if (String(symbol).toLowerCase() === String(checkArray[a]).toLowerCase()) {
                return a;
            }
        }
    }

    let string = x.split(" ")
    let resultString = "";
    let sum = 0;
    let sumResult = 0;

    for (let a = 0; a < string.length; a++) {
        sum = 0;
        for (let b = 0 ; b < string[a].length; b++) {
            sum += check(string[a][b])
        }
        if (sum > sumResult) {
            sumResult =  sum;
            resultString = string[a]
        }
    }
    return resultString;
}

console.log(high("as bs m"));
