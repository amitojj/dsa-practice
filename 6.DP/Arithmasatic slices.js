/** @format */

var numberOfArithmeticSlices = function (nums) {
  const dp = new Array(nums.length).fill(0);
  return f(0);
  
  function f(i) {
    if (i >= nums.length-2) return 0;
    if (dp[i] !== 0) return dp[i];
    
    let count = 0;
    let diff = nums[i + 1] - nums[i];
    for (let j = i + 2; j < nums.length; j++) {
      if (nums[j] - nums[j - 1] === diff) count++;
      else break;
    }
    
    dp[i] = count + f(i + 1);
    return dp[i];
  }
};
