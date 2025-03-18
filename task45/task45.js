// Дан массив array и размер фрагмента size.
// Напишите функцию chunkArray(array, size), которая будет разделять массив
// на части заданного размера и возвращать новый массив, состоящий из этих частей.

function chunkArray(array, size) {
    let counter = 0;
    let subArray = []
    let index = 0;
    let result = []
    while (index < array.length) {
        while (counter < size) {
            subArray.push(array[index])
            counter++;
            index++;
        }
        result.push(subArray);
        counter = 0;
        subArray = [];
    }
    return result;
}

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
