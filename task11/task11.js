// Напишите функцию calculateCoins(amount), принимающую на вход сумму денег amount.
// Функция должна возвращать минимальное количество монет разных номиналов для набора определенной суммы денег.
// Имеются монеты номиналом: 1, 2, 5, 10 рублей.

function calculateCoins(amount) {
    const coins = [10, 5, 2, 1];
    const result = {};

    for (let coin of coins) {
        if (amount >= coin) {
            const count = Math.floor(amount / coin);
            result[coin] = count;
            amount -= count * coin;
        }
    }
    return result;
}

calculateCoins(123);
