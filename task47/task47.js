// Напишите функцию isStrongPassword(password), которая проверяет надежность введенного пароля.
// Функция принимает строковое значение пароля password и возвращает значение true,
// если пароль является надежным и false в противном случае.
// Пароль является надежным, если:
// - длина пароля не менее 8 символов
// - содержит хотя бы одну строчную букву
// - содержит хотя бы одну заглавную. букву
// - содержит хотя бы одну цифру

function isStrongPassword(password) {

    if (password.length < 8) {
        return false
    }

    const upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z',];

    function upperCaseCheck(password) {
        for (let a = 0; a < password.length; a++) {
            if (upperCaseArray.includes(password[a]) === true) {
                return true;
            }
        }
        return false;
    }

    if (upperCaseCheck(password) === false) {
        return false;
    }

    const lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z'];

    function lowerCaseCheck(password) {
        for (let a = 0; a < password.length; a++) {
            if (lowerCaseArray.includes(password[a]) === true) {
                return true;
            }
        }
        return false;
    }

    const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    function numberCheck(password) {
        for (let a = 0; a < password.length; a++) {
            if (numberArray.includes(password[a]) === true) {
                return true;
            }
        }
        return false;
    }

    return true;

}

console.log(isStrongPassword("Qwerty123"));

