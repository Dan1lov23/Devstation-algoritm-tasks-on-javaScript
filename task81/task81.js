// Напишите функцию validPass(password), которая принимает пароль в виде строки и проверяет,
// удовлетворяет ли полученный пароль всем требованиям.
// Пароли должны быть длиной от 4 до 20 символов и содержать как буквы, так и цифры.
// Пароли не должны включать других символов помимо букв и цифр.
// Если пароль соответcтвует требованиям, функция должна вернуть строку 'VALID',
// в противном случае вернуть 'INVALID'.

function validPass(password) {
    if (password.length < 4 || password.length > 20) {
        return "INVALID"
    }

    const checkArray = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4',
        '5', '6', '7', '8', '9'
    ]

    const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const lettersArray = [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',];


    for (let a = 0; a < password.length; a++) {
        for (let b = 0; b < checkArray.length; b++) {
            if (checkArray.includes(password[a]) === false) {
                return "INVALID"
            }
        }
    }


    let checkLetters = 0;
    let checkNums = 0;

    for (let a = 0; a < password.length; a++) {
        for (let b = 0; b < lettersArray.length; b++) {
            if (password[a] === lettersArray[b]) {
                checkLetters++;
                break;
            }
        }
    }

    for (let a = 0; a < password.length; a++) {
        for (let b = 0; b < numbersArray.length; b++) {
            if (password[a] === numbersArray[b]) {
                checkNums++;
                break;
            }
        }
    }

    if (checkLetters > 0 && checkNums > 0) {
        return "VALID";
    } else {
        return "INVALID";
    }
}


console.log(validPass('1Username'));

//
