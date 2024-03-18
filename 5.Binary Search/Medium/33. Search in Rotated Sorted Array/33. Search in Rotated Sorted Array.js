//https://leetcode.com/problems/search-in-rotated-sorted-array/description/
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let pivot = findMinimum(nums);

  if (nums[pivot] === target) return pivot;
  if (nums[pivot] < target && target <= nums[right]) {
    left = pivot + 1;
    right = nums.length - 1;
  } else {
    left = 0;
    right = pivot - 1;
  }
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
    else return mid;
  }

  function findMinimum(nums) {
    let left = 0,
      right = nums.length - 1;
    if (nums[left] < nums[right]) return nums[left];
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) left = mid + 1;
      else right = mid;
    }
    return left;
  }

  return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); //4
// Time Complexity: O(logn)
// Space Complexity: O(1)
