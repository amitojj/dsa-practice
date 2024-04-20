/** @format */

var longestPalindromeSubseq = function (s) {
  let n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(-1));

  const f = (i, j) => {
    if (i > j) {
      return 0;
    }

    if (i === j) {
      return 1;
    }

    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    if (s[i] === s[j]) {
      dp[i][j] = 2 + f(i + 1, j - 1);
    } else {
      dp[i][j] = Math.max(f(i + 1, j), f(i, j - 1));
    }

    return dp[i][j];
  };

  return f(0, n - 1);
};


//bottom up
