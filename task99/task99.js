// Квадратное уравнение — это уравнение вида ax^2 + bx + c = 0,
// где a, b, c — некоторые вещественные аргументы.
// Напишите функцию solveQuadraticEquation(a, b, c),
// которая по заданным коэффициентам вернёт корни данного уравнения следующим образом:
//  * Если корней два, то вернуть их через пробел в возрастающем порядке;
//  * Если корень один, то просто вернуть его единожды;
//  * Если корней нет, то вывести "Нет корней".
// Выводите корни с округлением до 4 знаков после запятой.

function solveQuadraticEquation(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let squareD = Math.sqrt(D);
    if (D < 0) {
        return "Нет корней";
    } else if (D === 0) {
        return -b / 2 * a;
    } else {
        let counter = 0;
        let state = false;
        let x1 = ((-b) - squareD) / (2 * a);
        for (let a = 0; a < String(x1).length; a++) {
            if (String(x1)[a] === ".") {
                state = true;
            }
            if (state === true) {
                counter++;
            }
            if (counter >= 4) {
                console.log(x1);
                x1 = parseFloat(x1.toFixed(4));
            }
        }
        counter = 0;
        state = false;
        let x2 = ((-b) + squareD) / (2 * a);
        for (let a = 0; a < String(x2).length; a++) {
            if (String(x2)[a] === ".") {
                state = true;
            }
            if (state === true) {
                counter++;
            }
            if (counter >= 4) {
                console.log(x1);
                x2 = parseFloat(x2.toFixed(4));
            }
        }
        if (x1 < x2) {
            return `${x1} ${x2}`
        } else {
            return `${x2} ${x1}`
        }
    }
}

console.log(solveQuadraticEquation(-4, 9, -2));
