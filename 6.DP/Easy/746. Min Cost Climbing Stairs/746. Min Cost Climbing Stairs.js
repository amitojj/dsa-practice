/** @format */
//top-down approach
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length + 1).fill(0);// dp[i] means the cost to reach the i-th stair
  return Math.min(f(0), f(1));
  function f(i) {
    if (i >= cost.length) return 0;
    if (dp[i] > 0) return dp[i];
    dp[i] = cost[i] + Math.min(f(i + 1), f(i + 2));
    return dp[i];
  }
};
//bottom-up approach
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length + 1).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};


