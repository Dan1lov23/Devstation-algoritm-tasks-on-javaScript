// Дан массив из n целых чисел, где n > 2 и числа по модулю не превосходят 10^5.
// Напишите функцию getMinimalProduct(nums), которая принимает массив целых чисел nums
// и возвращает минимально возможное значение

function getMinimalProduct(nums) {
    let min = nums[0] * nums[1];
    for (let a = 0; a < nums.length; a++) {
        for (let b = 0; b < nums.length; b++) {
            if (nums[a] * nums[b] < min && a !== b) {
                min = nums[a] * nums[b];
            }
        }
    }
    return min;
}

console.log(getMinimalProduct([0, 2, 3, 4]));
