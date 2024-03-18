/**
 * Finds the indices of the two numbers that add up to the target.
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - The indices of the two numbers that add up to the target.
 */
var twoSum = function (nums, target) {
  // Create a map to store the difference and index of each number
  let hash = new Map();
  for (let i = 0, n = nums.length; i < n; i++) {
    let diff = target - nums[i];
    // If the difference is in the map, return the indices
    if (hash.has(diff)) {
      return [hash.get(diff), i];
    }
    // Otherwise, store the number and its index in the map
    hash.set(nums[i], i);
  }
};
console.log(twoSum([11, 5, 2, 7, 11, 15], 9));
