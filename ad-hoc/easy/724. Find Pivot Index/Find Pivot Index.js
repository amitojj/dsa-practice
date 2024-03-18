//[Find Pivot Index](https://leetcode.com/problems/find-pivot-index)
var pivotIndex = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum + nums[i] === sum - leftSum ) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

let nums = [-1, -1, -1, -1, -1, 0];
console.log(pivotIndex(nums));
