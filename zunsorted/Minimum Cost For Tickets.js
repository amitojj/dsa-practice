/** @format */

function mincostTickets(days, costs) {
  let dp = new Array(366).fill(0);

  function f(i) {
    if (i > days[days.length - 1]) {
      return 0;
    }
    if (dp[i]) {
      return dp[i];
    }
    if (days.includes(i)) {
      dp[i] = Math.min(
        f(i + 1) + costs[0],
        f(i + 7) + costs[1],
        f(i + 30) + costs[2]
      );
    } else {
      dp[i] = f(i + 1);
    }
    return dp[i];
  }

  return f(1);
}
