// Напишите функцию sumIntervals(intervals),  которая принимает массив интервалов чисел и возвращает сумму длин этих интервалов. Перекрывающиеся интервалы должны подсчитываться только один раз.
//
// Интервалы представлены парой целых чисел в виде массива. Первое значение интервала всегда будет меньше второго значения.
//
// Пример интервала: [1, 5] - это интервал от 1 до 5. Длина этого интервала равна 4.
//
// Ниже представлен массив, содержащий перекрывающиеся интервалы.

function task39(array) {
    let sum = 0;
    for (let a = 0; a < array.length; a++) {
        for (let b = 0; b < array[a].length; b++) {
            sum += array[a][b + 1] - array[a][b];
            break;
        }
    }
    return sum;
}

console.log(task39([
    [1, 2],
    [6, 10],
    [11, 15]]
));
