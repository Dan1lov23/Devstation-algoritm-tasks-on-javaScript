// Геометрическая прогрессия - это последовательность чисел, где каждый последующий элемент
// получается умножением предыдущего на одно и то же число,
// называемое знаменателем или коэффициентом прогрессии.
// Напишите функцию isGeometricProgression(arr), которая принимает массив чисел arr и возвращает true
// - если эта последовательность чисел в массиве является геометрической прогрессией,
// и false - в противном случае.

function isGeometricProgression(arr) {
    let div = arr[1] - arr[0];
    for (let a = 0; a < arr.length; a++) {
        if (a === arr.length - 2) {
            return true
        } else if (arr[a] * arr[a] !== arr[a + 1]) {
            return false;
        }
    }
}

isGeometricProgression([3, 9, 27]);
