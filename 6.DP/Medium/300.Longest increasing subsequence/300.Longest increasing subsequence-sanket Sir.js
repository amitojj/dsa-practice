/**
 * @format
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
   let ans= 0;
   let dp = new Array(nums.length).fill(0);
   for (let i = 0; i < nums.length; i++) {
     ans= Math.max(ans, f(i))
   }
   return ans;
    function f(i) {
      if (i == 0) return 1;
      if (dp[i] != 0) return dp[i];
      result = 1;
      for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) {
          result = Math.max(result, 1 + f(j));
        }
      }
      return dp[i] = result;
    }
      
};
