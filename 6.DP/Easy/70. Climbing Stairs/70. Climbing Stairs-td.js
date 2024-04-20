/** @format */

var climbStairs = function (n) {
  let dp = Array(n + 1).fill(0);
  return f(n);
  function f(n) {
    if (n < 3) return n;
    if (dp[n] !== 0) return dp[n];
    else {
      return (dp[n] = f(n - 1) + f(n - 2));
    }
  }
};
