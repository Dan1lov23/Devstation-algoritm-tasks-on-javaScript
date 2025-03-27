// Напишите функцию getLengthOfMissingArray(arrayOfArrays), которая возвращает длину
// отсутствующего массива на основе длины получаемых массивов.
// При сортировке массивов по их длине будет заметно, что их значения длин являются
// последовательными. При этом один массив будет отсутствовать. Нужно найти этот массив.
// Если массив array равен null или является пустым, функция должна возвращать 0.

function getLengthOfMissingArray(arrayOfArrays) {

    let resultString = [];

    let lengthArray = [];

    for (let a = 0; a < arrayOfArrays.length; a++) {
        resultString.push(arrayOfArrays[a]);
        lengthArray.push(arrayOfArrays[a].length);
    }

    resultString.sort((a, b) => a.length - b.length)
    lengthArray.sort((a,b) => a - b);

    let pass = 0;

    for (let a = 0; a < lengthArray.length; a++) {
        if (Number(lengthArray[a]) + 1 !== Number(lengthArray[a + 1]) && a + 1 < lengthArray.length) {
            pass = Number(resultString[a].length + 1);
        }
    }
    return pass;
}

console.log(getLengthOfMissingArray([[ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ));
