var moveZeroes = function (nums) {
  for (let i = 0, j = 1, n = nums.length; j < n; j++) {
    if (nums[i] !== 0) {
      i++;
      continue;
    }
    if (nums[i] === 0 && nums[j] !== 0) {
      nums[i] = nums[j];
      nums[j] = 0;
      i++;
    }
  }
  return nums;
};
console.log(moveZeroes([2, 1]));
