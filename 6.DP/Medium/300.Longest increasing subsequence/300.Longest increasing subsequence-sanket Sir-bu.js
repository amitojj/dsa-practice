/**
 * @format
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  let ans = 1; //its the minimum lis that is possible
  let dp = new Array(nums.length).fill(1); //dp[i] stores the length of lis ending at ith index
  for (let i = 1; i < nums.length; i++) { //start from 1 as for 0th index lis is  always 1
    for (let j = 0; j < i; j++) { //check for all previous elements
      if (nums[j] < nums[i]) { //if the previous element is smaller than the current element
        if (dp[j] + 1 > dp[i]) { //if the length of lis ending at jth index + 1 is greater than the length of lis ending at ith index
          dp[i] = dp[j] + 1; // then update the length of lis ending at ith index as we can append the current element to the lis ending at jth index and increase the length of lis ending at ith index by 1
        }
      }
    }
    ans = Math.max(ans, dp[i]); // at each index we check if lis at that index is maximum or not
  }
  return ans;
};
