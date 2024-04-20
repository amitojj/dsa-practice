/** @format */

var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length)
    .fill(-1)
    .map(() => new Array(nums.length).fill(0));
  dp[0][0] = 1;
  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
     let skip = dp[i - 1][j];
     let take = 0;
     if (nums[i] > nums[j]) {
       take = 1+ dp[i - 1][i];
     }
     dp[i][j] = Math.max(skip, take);
    }
  }
  return dp[nums.length - 1][nums.length - 1];
  
};
