// Реализуйте функцию catMouse(x), которая будет принимать строку x. Строка содержит символы кошки "К" и мышки "м".
// Остальная часть состоит из точек.
// Нужно выяснить, сможет ли кошка поймать мышь из её текущего положения в строке.
// Максимальный прыжок кошки составляет три точки.
// Итак:
// "К.....м" возвращает "Сбежала!". <-- между ними более трех точек.
// "К...м" возвращает "Поймана!". <-- между ними три точки, кошка достаёт.

function catMouse(x) {
    let resultString = "";
    let string = "";
    let efect = false;
    let pet = "";
    for (let a = 0; a < x.length; a++) {
        if (x[a] === "м" || x[a] === "К") {
            efect = true;
            if (x[a] === "м") {
                pet = "К";
            } else {
                pet = "м";
            }
        }
        if (efect === true) {
            resultString += x[a];
        }
        if (x[a + 1] === pet) {
            resultString += x[a + 1];
            efect = false;
            string = resultString;
        }
    }
    let counter = 0;
    let newEfect = false;
    for (let a = 0; a < string.length; a++) {
        if (string[a] === "м" || string[a] === "К") {
            newEfect = true;
            a++;
        }
        if (newEfect === true) {
            counter++;
        }
        if (string[a + 1] === "К" || string[a + 1] === "м") {
            counter--;
            newEfect = false;
        }
    }
    if (counter <= 3) {
        return "Поймана!"
    } else {
        return "Сбежала!"
    }
}

console.log(catMouse('К.....м'));
