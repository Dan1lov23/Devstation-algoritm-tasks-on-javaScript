// Арифметическая прогрессия - это последовательность чисел, каждый член которой,
// начиная со второго, равен предыдущему члену, сложенному с одним и тем же числом.
// Реализуйте функцию findMissing(list), которая принимает массив чисел list,
// высчитывает недостающее число арифметической прогрессии и возвращает его.
// В наборе чисел массива list пропущен ровно один член исходной арифметической прогрессии.
// Количество элементов в поступающем массиве составляет не менее 3.
// Пропущенный член никогда не будет первым или последним.

function task4(list) {
    const differences = [];
    for (let i = 0; i < list.length - 1; i++) {
        differences.push(list[i + 1] - list[i]);
    }
    const expectedDifference = differences[0] === differences[1] ? differences[0] : differences[1];
    for (let i = 0; i < differences.length; i++) {
        if (differences[i] !== expectedDifference) {
            return list[i] + expectedDifference;
        }
    }
    return null;
}

const missingNumber = task4([1, 3, 5, 9, 11]);
console.log(missingNumber); // Вывод: 7