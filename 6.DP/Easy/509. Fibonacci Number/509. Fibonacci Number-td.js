/** @format */
//Top down approach
var fib = function (n) {
  let dp = new Array(n + 1).fill(0);
  return f(n);
  function f(n) {
    if (n <= 1) return n;
    if (dp[n]) return dp[n];
    dp[n] = f(n - 1) + f(n - 2);
    return dp[n];
  }

};

//;time O(n) | space O(n) + stack space O(n)
