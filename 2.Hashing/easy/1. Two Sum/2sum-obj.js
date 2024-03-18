/**
 * Finds two numbers in the array that add up to the target.
 * @param {number[]} nums - The array of numbers to search.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers.
 */
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0, n = nums.length; i < n; i++) {
    let diff = target - [nums[i]]; // calculate the difference between the target and the current number
    if (diff in hash) {
      return [hash[diff], i]; // return the indices of the two numbers that add up to the target
    }
    hash[nums[i]] = i; // store the current number and its index in the hash table
  }
};
console.log(twoSum([11, 5, 2, 7, 11, 15], 9));
