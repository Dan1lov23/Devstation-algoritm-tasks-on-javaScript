// Нужно написать функцию removeEverySecondOne(arr), которая получает в качестве параметра массив и обрабатывает его, удаляя каждый второй элемент массива.
//
// Функция должна возвращать массив с удаленными элементами.

function removeEverySecondOne(arr){
    let check = 0;
    let resultArray = [];
    for (let a = 0; a < arr.length; a++) {
        if (check % 2 === 0) {
            resultArray.push(arr[a]);
        }
        check++;
    }
    return resultArray
}

removeEverySecondOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
