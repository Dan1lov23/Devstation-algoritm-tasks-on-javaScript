// Палиндром — слово, предложение или последовательность символов,
// которая абсолютно одинаково читается как в привычном направлении, так и в обратном.
// К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Дана строка str. Нужно написать функцию isPalindrome(str), которая позволяет вернуть значение true,
// если строка является палиндромом, и false — если нет.
// Алгоритм не должен быть зависимым от регистра символов.

function isPalindrome(str) {
    let reverseStr = str.split("").reverse().join("")
    let strResult = "";
    for (let b = 0; b < str.length; b++) {
        strResult += str[b].toLowerCase();
    }
    let reverseStrResult = "";
    for (let b = 0; b < reverseStr.length; b++) {
        reverseStrResult += reverseStr[b].toLowerCase();
    }
    return strResult === reverseStrResult;
}

isPalindrome("Шалаш");
