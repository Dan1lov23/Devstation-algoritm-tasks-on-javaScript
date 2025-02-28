// Факториал — это произведение всех натуральных чисел от 1 до некоторого числа n включительно.
// Напишите функцию factorial(n), которая будет возвращать факториал от n.
// Считайте, что факториал от нуля равен единице.

function task16(n) {
    let stringNum = String(n);
    let result = 1;
    for (let a = 0; a < stringNum.length; a++) {
        result *= stringNum[a];
    }
    return result;
}

console.log(task16(165));
