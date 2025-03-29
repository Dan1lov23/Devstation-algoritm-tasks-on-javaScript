// Нужно написать функцию twoSum(numbers, target), которая принимает массив чисел и число target.
// Функция должна найти в массиве два разных элемента, которые при сложении дают значение target.
// Функция должна вернуть индексы найденных элементов в виде массива.

function twoSum(numbers, target) {
    let sum = 0;
    for (let a = 0; a < numbers.length; a++) {
        for (let b = a + 1; b < numbers.length; b++) {
            if (numbers[a] + numbers[b] === target) {
                return [a, b]
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4));

