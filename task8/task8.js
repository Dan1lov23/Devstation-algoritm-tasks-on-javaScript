// Арифметическая прогрессия - это последовательность чисел,
// в которой разность между любыми двумяпоследовательными членами одинакова.
// Напишите функцию isArithmeticProgression(arr),которая принимает массив чисел arr и возвращает
// true - если эта последовательность чисел в массиве является арифметической прогрессией,
// и false - в противном случае.

function isArithmeticProgression(arr) {
    for (let a = 0; a < arr.length; a++) {
        if (a === arr.length - 2) {
            return true
        } else if (arr[a + 1] - arr[a] !== arr[a + 2] - arr[a + 1]) {
            return false;
        }
    }
    return true;
}

isArithmeticProgression([3, 6, 9, 12, 15])
