// Пусть дан некоторый список целых чисел numbers.
// Напишите функцию findPairSum(numbers, targetSum), которая вернёт такую пару
// индексов из списка numbers, что сумма соответствующих чисел из списка будет равна значению targetSum.
// Индексы требуется выводить в возрастающем порядке. Также гарантируется, что все массивы отсортированы.
// Если таких пар будет несколько, то верните такую, первый элемент которой будет наименьшим.
// Если же пар не будет вовсе, то верните список [-1, -1].

function findPairSum(numbers, targetSum) {
    for (let a = 0; a < numbers.length; a++) {
        for (let b = 0; b < numbers.length; b++) {
            if (numbers[a] + numbers[b] === targetSum && numbers[a] !== numbers[b]) {
                return [a, b];
            }
        }
    }
    return [-1, -1];
}

console.log(findPairSum([40, 50, 100, 200, 300], 600));
