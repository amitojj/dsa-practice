/** @format */

var climbStairs = function (n) {
  let dp = Array(n + 1).fill(0);
  for (let i = 0; i < dp.length; i++) {
    if (i < 3) {
      dp[i] = i;
    } else {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }
  return dp[n];
};
