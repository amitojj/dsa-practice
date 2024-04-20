/** @format */

var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let maxLen = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};
