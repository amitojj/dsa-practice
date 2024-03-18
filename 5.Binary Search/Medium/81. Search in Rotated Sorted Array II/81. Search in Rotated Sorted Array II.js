//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) return true;
    if (nums[l] === nums[m] && nums[m] === nums[r]) {
      l++;
      r--;
    } else if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (nums[m] < target && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return nums[l] === target;
};
console.log(search([3, 1], 1)); //true
