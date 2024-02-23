//https://leetcode.com/problems/sort-colors/description/
/**
 * 
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
 */


var sortColors = function (nums) {
  let l =0,
  m=0,
  r= nums.length-1;
  while (m<=r){
    if (nums[m]===0){
      [nums[l],nums[m]] = [nums[m],nums[l]];
      l++
      m++
    }else if (nums[m] === 1) {
      m++;
    } else {
      [nums[m], nums[r]] = [nums[r], nums[m]];
      r--;
    }
  }
  return nums;
};

console.log(sortColors([1, 2, 0]));
