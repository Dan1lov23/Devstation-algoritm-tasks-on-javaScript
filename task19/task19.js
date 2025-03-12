// Реализуйте функцию moveZeros(arr), которая принимает массив и перемещает все нули в конец,
// сохраняя порядок расположения остальных элементов.
// Функция должна вернуть массив с нулями в конце.

function moveZeros(arr) {
    let newArray = [];
    let zeroArray = [];
    let resultArray = [];
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] !== 0) {
            newArray.push(arr[a]);
        } else {
            zeroArray.push(arr[a]);
        }
    }
    for (let b = 0; b < newArray.length; b++) {
        resultArray.push(newArray[b]);
    }
    for (let c = 0; c < zeroArray.length; c++) {
        resultArray.push(zeroArray[c]);
    }
    return resultArray;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])

