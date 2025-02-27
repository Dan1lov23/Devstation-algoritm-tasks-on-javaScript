// Нужно написать функцию squareOrSquareRoot(array), которая будет получать целочисленный массив в
// качестве параметра и обрабатывать каждое число из этого массива.
// Если число является полным квадратом, извлеките его корень, иначе возведите число в квадрат.
// Функция должна вернуть новый массив, с обработанными числами полученного массива.

function task5(array) {
    function isSimpleCheck(num) {
        for (let x = 2; x < num; x++) {
            if (num % x === 0) {
                return 0;
            }
        }
        return 1;
    }

    function checkSquare(number) {
        if (isSimpleCheck(number) === 1) {
            return number * number;
        }
        for (let i = 0; i < number; i++) {
            if (i * i === number) {
                return i;
            }
        }
    }

    let resultArray = [];
    for (let y = 0; y < array.length; y++) {
        resultArray.push(checkSquare(array[y]));
    }
    return resultArray;
}

console.log(task5([4, 3, 9, 7, 2, 1]));
