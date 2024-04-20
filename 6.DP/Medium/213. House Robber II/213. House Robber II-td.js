var rob = function(nums) {
   let n = nums.length;
   if (n === 1) return nums[0];
   let dp = new Array(n).fill(-1);
   let ans1 = f(0, n - 2);
   dp.fill(-1);
   let ans2 = f(1, n - 1);
   return Math.max(ans1, ans2);
   function f(i, x) {
      if(i>x) return 0;
      if (dp[i] != -1) return dp[i];
      let take = nums[i] + f(i + 2, x);
      let skip = f(i + 1, x);
      return (dp[i] = Math.max(take, skip));
   }
}