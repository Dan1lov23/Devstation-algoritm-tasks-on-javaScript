// Транспонированная матрица — это матрица, полученная из исходной матрицы заменой строк на столбцы.
// Напишите функцию transpose(matrix), которая принимает массив данных в виде матрицы
// и возвращает её транспонированную версию.

function task18(matrix) {
    let mainMatrix = [];
    for (let a = 0; a < matrix.length; a++) {
        for (let b = 0; b < matrix[a].length; b++) {
            mainMatrix.push(matrix[a][b]);
        }
    }
    for (let c = 0; c < mainMatrix.length; c++) {
        if (c % 2 === 0) {
            console.log(mainMatrix[c], mainMatrix[c + 1]);
        }
    }
}

task18([
    [1, 2, 3], [4, 5, 6]
]);
