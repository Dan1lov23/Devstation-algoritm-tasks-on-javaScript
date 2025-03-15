// Дана строка, состоящая из больших и маленьких букв латинского алфавита.
// Необходимо написать функцию longestPalindrome(s), которая принимает такую строку единственным параметром и вычисляет длину максимально возможного палиндрома, который можно составить из букв этой строки, и возвращает его длину.
// Например, из символов строки "abccccdde" можно построить палиндром "ccdadcc", чья
// длина равняется семи символам.
// То-есть результат вызова longestPalindrome("abccccdde") будет 7.


function longestPalindrome(s) {
    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let length = 0;
    let hasOdd = false;

    for (const count of Object.values(charCount)) {
        length += Math.floor(count / 2) * 2;

        if (count % 2 === 1) {
            hasOdd = true;
        }
    }

    if (hasOdd) {
        length += 1;
    }

    return length;
}

longestPalindrome("abccccdde")
