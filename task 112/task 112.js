// Мультипликативная устойчивость - это характеристика числа, показывающая количество раз,
// которое нужно умножить цифры в заданном числе, чтобы получить одну цифру.
// Напишите функцию persistence(num),  которая принимает положительное число num и
// возвращает его мультипликативную устойчивость.
// Функция должна вернуть число, равное количеству раз, которое нужно умножить цифры num,
// чтобы получить единственную цифру.
// Если num уже является цифрой, функция должна вернуть 0.

function persistence(num) {
    let newNum = 1;
    let counter = 0 ;
    if (String(num).length === 1) {
        return 0;
    }
    while (true) {
        counter++;
        for (let a = 0; a < String(num).length; a++) {
            newNum *= Number((String(num)[a]));
        }
        num = newNum;
        if (newNum < 10) {
            return counter;
        }
        newNum = 1;
    }
}

console.log(persistence(39));
