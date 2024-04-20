/** @format */
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(-1);
  
  return f(nums, target);
  
  function f(nums, target) {
    if (target === 0) {
      return 1;
    }

    if (target < 0) {
      return 0;
    }

    if (dp[target] !== -1) {
      return dp[target];
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += f(nums, target - nums[i]);
    }

    dp[target] = count;
    return count;
  }
};