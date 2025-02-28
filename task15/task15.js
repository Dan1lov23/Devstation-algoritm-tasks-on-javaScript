// Напишите функцию findMinAndMaxBelowMainDiagonal(matrix), которая будет принимать на вход квадратную
// матрицу matrix и выводить максимальный и минимальный ее элемент ниже главной диагонали.
// Главная диагональ - это набор элементов, расположенных на линии от верхнего левого угла
// матрицы до нижнего правого угла. У элементов главной диагонали индексы строк и столбцов совпадают.

function task15(matrix) {
    let min = 1;
    let max = 0;
    for (let a = 0; a < matrix.length; a++) {
        for (let b = 0; b < matrix[a].length; b++) {
            if (min > matrix[a][b]) {
                min = matrix[a][b];
            }
            if (matrix[a][b] > max) {
                max = matrix[a][b];
            }
        }
    }
    console.log(min, max);
}

task15([
        [2, 4, 11],
        [43, 2, 6],
        [1, 88, 9]
    ]
);
