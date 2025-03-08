// Двумерный массив - массив, элементами которого являются другие массивы.
// Он формирует таблицу с рядами и столбцами, где каждый элемент имеет два индекса: для строки и столбца.
// Напишите функцию checkSquare(square), которая принимает двумерный массив
// и проверяет уникальность каждого элемента массива - числа.
// Функция возвращает true, если каждое число является уникальным, и false - в противном случае.

function checkSquare(square) {
    let resultArray = [];
    for (let a = 0; a < square.length; a++) {
        for (let b = 0; b < square[a].length; b++) {
            resultArray.push(square[a][b]);
        }
    }
    for (let c = 0; c < resultArray.length; c++) {
        let count = resultArray.filter(element => element === resultArray[c]).length;
        if (count > 1) {
            return false;
        }
    }
    return true;
}

checkSquare([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]);
