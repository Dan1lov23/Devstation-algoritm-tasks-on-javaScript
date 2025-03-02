// Нужно написать функцию twoSum(numbers, target), которая принимает массив чисел и число target.
// Функция должна найти в массиве два разных элемента, которые при сложении дают значение target.
// Функция должна вернуть индексы найденных элементов в виде массива.
// Примеры вызова функции:

function task24(numbers, target) {
    let resultArray = [];
    let num = 0;
    while (num <= target) {
        for (let a = num + 1; a < numbers.length; a++) {
            if (numbers[num] + numbers[a] === target) {
                resultArray.push(num, a)
                return resultArray;
            }
        }
        num++;
    }
}

console.log(task24([1, 2, 3], 4));
