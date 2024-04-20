/** @format */
//top-down approach
var rob = function (nums) {
  let dp = new Array(nums.length).fill(-1);//dp array to store the max amount of money that can be robbed from house i to n
  return f(0); //calling f(0) to find the max amount of money that can be robbed from house 0 to n
  function f(i){
    if (i >= nums.length) return 0;//base case
    if (dp[i] != -1) return dp[i]; //if dp[i] is already calculated, return it
    let take = nums[i] + f(i + 2); //take the house i and go to house i + 2
    let skip = f(i + 1);//skip the house i and go to house i + 1
    return dp[i]=  Math.max(take, skip); //return the maximum of take or skip
  }
};
//time O(n) | space O(n)+stack space O(n) = O(n)