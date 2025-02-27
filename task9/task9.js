// Арифметическая прогрессия - это последовательность чисел,
// в которой разность между любыми двумяпоследовательными членами одинакова.
// Напишите функцию isArithmeticProgression(arr),которая принимает массив чисел arr и возвращает true
// - если эта последовательность чисел в массиве является
// арифметической прогрессией, и false - в противном случае.

function task9(arr) {
    let check = 0;
    for (let a = 0; a < arr.length; a++) {
        check = arr[a + 1] - arr[a]
        console.log(check, arr[a + 2] - arr[a + 1]);
        if (a === arr.length - 2 && arr[arr.length - 1] - arr[arr.length - 2] === check) {
            return 1;
        } else if (check !== arr[a + 2] - arr[a + 1]) {
            return 0;
        }
    }
    return 1;
}

console.log(task9([3, 6, 9, 12, 15, 18]));
