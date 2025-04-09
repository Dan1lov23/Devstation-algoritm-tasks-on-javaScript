// Реализуйте функцию isValidCoordinates(coordinates), которая будет проверять, являются ли
// заданные параметры действительными географическими координатами. Функция принимает
// пару чисел в виде одной строки.
// Если передаваемые значения являются координатами, функция должна вернуть true, иначе false.
// Широта (первая плавающая точка) включает числа от 0 до 90, положительные или отрицательные.
// Долгота (вторая плавающая точка) включает числа от 0 до 180, положительные или отрицательные.
// Между знаком минус и следующей за ним цифрой не должно быть пробела.

function isValidCoordinates(coordinates) {
    let len = "";
    let lon = "";
    const checkArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "."];
    let effect = false;
    for (let a = 0; a < coordinates.length; a++) {
        if (coordinates[a] !== "," && effect === false) {
            len += coordinates[a];
        } else {
            effect = true;
        }
        if (effect === true && checkArray.includes(coordinates[a])) {
            lon += coordinates[a];
        }

    }
    let counter = 0;

    for (let a = 0; a < len.length; a++) {
        if (len[a] === ".") {
            counter++;
        }
    }

    if (counter > 1) {
        return false;
    }

    counter = 0;

    for (let a = 0; a < lon.length; a++) {
        if (lon[a] === ".") {
            counter++;
        }
    }
    if (counter > 1) {
        return false;
    }

    if (-90.0000000000 < Number(len) && Number(len) < 90.00000000000000 && -90.000000000000 < Number(len) && Number(len) < 90.00000000000) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidCoordinates('612'));
