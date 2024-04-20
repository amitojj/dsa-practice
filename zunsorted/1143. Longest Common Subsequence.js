/** @format */

var longestCommonSubsequence = function (text1, text2) {
  let s1 = text1;
  let s2 = text2;
  let n = s1.length;
  let m = s2.length;
  let dp = new Array(n + 1).fill(-1).map(() => new Array(m + 1).fill(-1));
  return f(n-1, m-1);
  function f(i, j) {
    if (i === -1 || j === -1) return 0;
    if (dp[i][j] !== -1) return dp[i][j];
    if (s1[i] === s2[j]) {
      return dp[i][j] = 1 + f(i - 1, j - 1);
    } else {
      return dp[i][j] = Math.max(f(i - 1, j), f(i, j - 1));
    }
  }
};
//bottom up
var longestCommonSubsequence = function (text1, text2) {
 let n = text1.length;
 let m = text2.length;
 let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
 for (let i = 0; i <= n; i++) {
   for (let j = 0; j <= m; j++) {
     if (i === 0 || j === 0) {
       dp[i][j] = 0;
     } else if (text1[i - 1] === text2[j - 1]) {
       dp[i][j] = 1 + dp[i - 1][j - 1];
     } else {
       dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
     }
   }
 }
 return dp[n][m];
};