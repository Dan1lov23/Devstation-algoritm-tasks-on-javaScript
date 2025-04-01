// Есть массив из n элементов, содержащий неповторяющиеся числа из диапазона [0, n].
// Нужно написать функцию missingNumber(nums), которая вернет единственное число в диапазоне,
// отсутствующее в массиве.

function missingNumber(nums) {
    nums = nums.sort((a, b) => a - b);
    for (let a = 0; a < nums.length; a++) {
        if (nums[a] + 1 !== nums[a + 1]) {
            return a + 1;
        }
    }
}

console.log(missingNumber([3, 0, 1]));
