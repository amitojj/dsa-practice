var splitArray = function (nums, k) {
 let maxVal = 0;
 let sum = 0;

 for (let i = 0; i < nums.length; i++) {
   maxVal = Math.max(maxVal, nums[i]);
   sum += nums[i];
 }

 let left = maxVal;
 let right = sum;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canSplit(nums, k, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
function canSplit(nums, k, max) {
  let count = 1;
  let sum = 0;
  for (let num of nums) {
    sum += num;
    if (sum > max) {
      count++;
      sum = num;
    }
  }
  return count <= k;
}