// Есть массив из n элементов, содержащий неповторяющиеся числа из диапазона [0, n].
// Нужно написать функцию missingNumber(nums), которая вернет единственное число в диапазоне,
// отсутствующее в массиве.

function task20(array) {
    let result = [];
    array = array.sort((a, b) => a - b);
    for (let a = 0; a < array.length; a++) {
        result.push(array[a]);
        if (array[a] + 1 !== array[a + 1] && array[a] < array.length - 1) {
            result.push(array[a] + 1);
        }
    }
    return result;
}

console.log(task20([1, 3, 4]));
