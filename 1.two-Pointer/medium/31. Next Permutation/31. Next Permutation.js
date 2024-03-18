var nextPermutation = function (nums) {
  let i = nums.length - 1;
  let j = nums.length - 1;
  //find break point it is the largest number from decreasing subsequence
  while (i > 0 && nums[i - 1] >= nums[i]) {
    i--;
  }
  console.log(i);
  //no break point->it is the last permutation
  if (i === 0) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
    return;
  }
  //finding swap target it is the smallest number in the decreasing subsequence that is greater than nums[i-1]
  if (i > 0) {
    while (nums[j] <= nums[i - 1]) {
      j--;
    }
  }
  //swap elements
  [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
  //reverse the subsequence
  j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
};
let nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums);