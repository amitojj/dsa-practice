/** @format */

var maxAlternatingSum = function (nums) {
  let n = nums.length;
  let arr = nums;
  // let dp = new Array(n + 5).fill(-1).map(() => new Array(2).fill(-1));

  return solve(0, true);

  function solve(i, isEven) {
    if (i >= n) return 0;
    let j;
    if (isEven) {
      j = 1;
    } else {
      j = 0;
    }
    if (dp[i][j] != -1) return dp[i][j];
    let val = nums[i];
    let skip = solve(i + 1, isEven);
    if (!isEven) {
      val = -val;
    }
    let take = solve(i + 1, !isEven) + val;
    return (dp[i][j] = Math.max(take, skip));
  }
  function bottomUp(nums){
    let dp = new Array(nums.length).map(() => new Array(2));
    dp[0][1] = nums[0];
    dp[0][0] = 0;
    for(let i = 1; i < nums.length; i++){
      dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - nums[i]);
      dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + nums[i]);
    }
    return Math.max(dp[nums.length-1][0], dp[nums.length-1][1]);
  }

};
let nums = [5, 6, 7, 8];
console.log(maxAlternatingSum(nums));
