/**
 * 3Sum Closest
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let nm = nums.sort((a, b) => a - b);
  let result;
  let min_diff = Infinity;
  for (let i = 0, n = nm.length; i < n - 2; i++) {
    let j = i + 1,
      k = n - 1;
    while (j < k) {
      let sum = nm[i] + nm[j] + nm[k];
      let diff = Math.abs(sum - target);
      if (diff < min_diff) {
        min_diff = diff;
        result = sum;
      }
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

let nums = [1, 1, 1, 0],
  target = -100;
console.log(threeSumClosest(nums, target));
