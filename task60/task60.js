// Задан массив, содержащий целые числа и имеющий длину не менее 3.
// Массив либо полностью состоит из нечетных чисел, либо полностью состоит из четных чисел,
// за исключением одного целого числа N.
// Напишите функцию findOutlier(integers), который принимает массив в качестве аргумента и возвращает N.

function check(num) {
    if (num % 2 === 0) {
        return true
    }
    return false;
}

function findOutlier(integers){
    for (let a = 0; a < integers.length; a++) {
        if (check(integers[a]) !== check(integers[a + 1])) {
            if (check(integers[a]) === check(integers[a - 1]) || check(integers[a]) === check(integers[a + 2])) {
                return integers[a + 1];
            } else {
                return integers[a];
            }
        }
    }
}

console.log(findOutlier([2,6,8,10,3]));
