// Напишите функцию findDiophantinePairs(n), которая принимает на вход число n.
// Для заданного числа n нужно найти все пары натуральных чисел a и b, удовлетворяющие уравнению:
// 1/a + 1/b = 1/n

function findDiophantinePairs(n) {
    let repeatArray = [];
    let resultArray = [];
    for (let a = 0; a < 100; a++) {
        for (let b = 0; b < 100; b++) {
            if ((1/a + 1/b).toFixed(16) === (1/n).toFixed(16) && repeatArray.includes(String([a, b]).split(",").reverse().join("")) === false) {
                resultArray.push([a, b]);
                repeatArray.push(String([a, b]).split(",").join(""));
            }
        }
    }
    return resultArray;
}

console.log(findDiophantinePairs(6));

