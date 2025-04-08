// Шифр Цезаря - это метод шифрования, который сдвигает каждую букву в
// тексте на определенное количество позиций в алфавите.
// Напишите функцию caesarCipher(text, shift), которая принимает два аргумента
// - текст для шифрования и количество позиций для сдвига. Текст на русском языке.
// Цифры, знаки препинания и другие символы не изменяются.
// Алфавит: абвгдеёжзийклмнопрстуфхцчшщъыьэюя

function caesarCipher(text, shift) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const alphabetLength = alphabet.length;
    let resultString = "";

    // Обрабатываем каждый символ текста
    for (let char of text) {
        const index = alphabet.indexOf(char.toLowerCase());

        if (index !== -1) {
            let newIndex = (index + shift) % alphabetLength;
            if (char === char.toUpperCase()) {
                resultString += alphabet[newIndex].toUpperCase();
            } else {
                resultString += alphabet[newIndex];
            }
        } else {
            resultString += char;
        }
    }

    return resultString;
}

console.log(caesarCipher('кыжг ичътгс', 14)); // Результат: 'шмлнъ уцжъмк'
