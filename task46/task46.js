// Напишите функцию findUniqueElement(arr), которая находит уникальный элемент в массиве чисел,
// где все числа повторяются дважды, за исключением одного.
// В случае, если элемент не найден, функция должна вернуть null.
// В случае, если в массиве несколько уникальных элементов, функция должна вернуть первый.

function findUniqueElement(arr) {
    let counter = 0;
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (arr[a] === arr[b]) {
                counter++;
            }
        }
        if (counter === 1) {
            return arr[a];
        }
        counter = 0;
    }
    return null;
}

console.log(findUniqueElement([2,2,2,52,12,2849,481924,5]));
