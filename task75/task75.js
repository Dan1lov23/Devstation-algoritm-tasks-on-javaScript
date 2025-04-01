// Транспонированная матрица — это матрица, полученная из исходной матрицы заменой строк на столбцы.
// Напишите функцию transpose(matrix), которая принимает массив данных в виде матрицы
// и возвращает её транспонированную версию.

function transpose(matrix) {

    let indexOne = 0;
    let indexTwo = 0;

    let resultArray = [];
    let subArray = [];

    while (indexOne < matrix[0].length && indexTwo < matrix[1].length) {
        subArray.push(matrix[0][indexOne], matrix[1][indexTwo]);
        resultArray.push(subArray);
        subArray =  [];
        indexOne++;
        indexTwo++;
    }
    return resultArray;
}

console.log(transpose([[1, 2, 3], [4, 5, 6]]));
