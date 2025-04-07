// Напишите функцию rotateMatrix(matrix), которая принимает квадратную матрицу в виде двумерного массива,
// и поворачивает её на 90 градусов по часовой стрелке.

function rotateMatrix(matrix) {
    let n = matrix.length;
    let resultMatrix = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            resultMatrix[j][n - 1 - i] = matrix[i][j];
        }
    }

    return resultMatrix;
}

console.log(rotateMatrix([[1, 2], [3, 4]]));