/** @format */

var findNumberOfLIS = function (nums) {
  let ans = 1; //its the minimum lis that is possible
  let dp = new Array(nums.length).fill(1); //dp[i] stores the length of lis ending at ith index. and minimum at any index is always 1
  let count = new Array(nums.length).fill(1); // count[i] stores the number of longest increasing subsequence with length i
  for (let i = 1; i < nums.length; i++) { //start from 1 as for 0th index lis is  always 1
    for (let j = 0; j < i; j++) { // check for all previous elements
      if (nums[j] < nums[i]) { //if the previous element is smaller than the current element
        if (dp[j] + 1 > dp[i]) { //if the length of lis ending at jth index + 1 is greater than the length of lis ending at ith index. This means we can append the current element to the lis ending at jth index and increase the length of lis ending at ith index by 1. here it also means that this is the first time  we have found the lis with length dp[j]+1 at ith index
          dp[i] = dp[j] + 1; // then update the length of lis ending at ith index as we can append the current element to the lis ending at jth index and increase the length of lis ending at ith index by 1
          count[i] = count[j]; // count[i] stores the number of longest increasing subsequence with length i. so it is equal to count[j] as we have appended the current element to the lis ending at jth index if there were n number of lis with length j ending at jth index then on appending the current element to the lis ending at jth index there will be n+1 number of lis with length i ending at ith index
        } else if (dp[j] + 1 == dp[i]) { // means we alreadsy have previously seen a lis with length dp[j]+1 at ith index. thats why dp[i] is already equal to dp[j]+1.  rest of logic is same as above. we increment the count[i] by count[j] as we have found another lis with length dp[j]+1 at ith index
          count[i] += count[j];
        }
      }
    }
    ans = Math.max(ans, dp[i]); // at each index we check if lis at that index is maximum or not
      
    // console.log(ans,dp, count);
  }
  // by this point we have a count array where count[i] stores the number of longest increasing subsequence with length i. and ans stores the maximum length of lis and now we have to just add up all the count[i] that are equal to ans
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (dp[i] == ans) res += count[i]; 
  }
  return res;
};


console.log(findNumberOfLIS([1,3,5,4,7])); // 2