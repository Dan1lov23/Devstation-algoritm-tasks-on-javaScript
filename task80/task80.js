// Напишите функцию findMinAndMaxBelowMainDiagonal(matrix), которая будет принимать
// на вход квадратную матрицу matrix и выводить максимальный
// и минимальный ее элементниже главной диагонали.
// Главная диагональ - это набор элементов, расположенных на линии от
// верхнего левого угла матрицы до нижнего правого угла.
// У элементов главной диагонали индексы строк и столбцов совпадают.

function findMinAndMaxBelowMainDiagonal(matrix) {
    // Проверяем, что матрица квадратная
    if (matrix.length === 0 || matrix.length !== matrix[0].length) {
        throw new Error("Matrix must be square and non-empty");
    }

    let min = Infinity; // Инициализируем min как бесконечность
    let max = -Infinity; // Инициализируем max как минус бесконечность

    for (let i = 1; i < matrix.length; i++) { // Начинаем с 1, чтобы пропустить первую строку
        for (let j = 0; j < i; j++) { // Проходим только по элементам ниже главной диагонали
            if (matrix[i][j] < min) {
                min = matrix[i][j]; // Обновляем min
            }
            if (matrix[i][j] > max) {
                max = matrix[i][j]; // Обновляем max
            }
        }
    }

    return {"min": min, "max": max}; // Возвращаем объект с min и max
}
