/**
 * @format
 * @param {number} n
 * @return {number}
 */

var numSquares = function (n) {
  const dp = new Array(n + 1).fill(-1); //dp array to store the minimum number of perfect squares that sum to i

  function f(num) {
    if (num === 0) { //base case when remaining number is 0 
      return 0;
    }
    if (dp[num] !== -1) { //if dp[num] is already calculated, return it
      return dp[num];
    }
    let minSquares = Infinity;
    for (let i = 1; i * i <= num; i++) {
      const squares = 1 + f(num - i * i); //number of perfect squares that sum to num - i^2
      minSquares = Math.min(minSquares, squares);
    }
    dp[num] = minSquares;
    return minSquares;
  }

  return f(n);
};
