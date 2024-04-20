/** @format */
//Bottom - up approach
var rob = function (nums) {
  let dp = new Array(nums.length).fill(0);//dp array to store the max amount of money that can be robbed till house i
  dp[0] = nums[0];//max that can be robbed from house 0 is nums[0]
  dp[1] = Math.max(nums[0], nums[1]); //max that can be robbed from house 1 is nums[0] or nums[1]
  for (let i = 2; i < nums.length; i++) { //loop through the houses from 2 to n
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]); //max that can be robbed from house i is nums[i] + max that can be robbed from house i - 2 or max that can be robbed from house i - 1
  }
  return dp[nums.length - 1];//  return max that can be robbed till last house
};
//time O(n) | space O(n)
