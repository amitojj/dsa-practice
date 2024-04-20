/** @format */

var lengthOfLIS = function (nums) {
   let dp = new Array(nums.length)
     .fill(-1)
     .map(() => new Array(nums.length).fill(-1));
   return f(0, -1);

   function f(i, p) {
      if (i >= nums.length) return 0;
      if (dp[i][p] != -1) return dp[i][p];
      let skip = f(i + 1, p);
      let take = 0;
      if(p == -1 || nums[i] > nums[p]) {
        take = f(i + 1, i) + 1;
      }
      return dp[i][p] = Math.max(take, skip);
   }
};
