//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/1203827051/
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  let l = 0,
    n = nums.length,
    r = n - 1;

  if (nums[l] < nums[r]) return nums[l];

  while (l < r) {
    m = Math.floor((l + r) / 2);

    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }

  return nums[l];
};
