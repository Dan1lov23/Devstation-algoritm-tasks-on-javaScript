// Необходимо написать функцию reverseVowels(s), которая меняет порядок гласных букв в строкена обратный.

function check(symbol) {
    let checkArray = ['А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я', 'A', 'E', 'I', 'O', 'U'];
    for (let a = 0; a < checkArray.length; a++) {
        if  (symbol === String(checkArray[a]).toLowerCase()) {
            return true;
        }
    }
}

function reverseVowels(s) {
    let array = [];
    let checkArray = ['А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я', 'A', 'E', 'I', 'O', 'U']
    for (let a = 0; a < s.length; a++) {
        for (let b   = 0; b < checkArray.length; b++) {
            if (String(s[a]).toLowerCase() === String(checkArray[b]).toLowerCase()) {
                array.push(s[a]);
            }
        }
    }
    let stringForSymbols = "";
    for (let a = 0; a < array.length; a++) {
        stringForSymbols += array[a];
    }

    let index = 0;
    stringForSymbols = stringForSymbols.split("").reverse().join("");
    let resultString = "";
    for (let a = 0; a < s.length; a++) {
        if (check(s[a]) === true) {
            resultString += stringForSymbols[index];
            index++;
        } else {
            resultString += s[a];
        }
    }
    return resultString;
}

console.log(reverseVowels("reverse vowels"));
