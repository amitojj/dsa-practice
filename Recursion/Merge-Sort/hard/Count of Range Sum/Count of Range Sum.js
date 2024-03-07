/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  const sum = [0];
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  return mergeSortCount(sum, 0, sum.length, lower, upper);
};
function mergeSortCount(sum, left, right, lower, upper) {
  if (right - left <= 1) {
    return 0;
  }
  const mid = Math.floor((left + right) / 2);
  let sle=sum[left],sre=sum[right],sme=sum[mid];
  let leftcount = mergeSortCount(sum, left, mid, lower, upper);
  let rightcount = mergeSortCount(sum, mid, right, lower, upper);
  let count = leftcount + rightcount;
  let j = mid, // Pointer for the right half
    k = mid, // Pointer for counting the number of elements in the range
    t = mid; // Pointer for merging the two halves
  
  const cache = new Array(right - left);
  
  for (let i = left, s = 0; i < mid; i++, s++) {
    // Iterate over the left half of the array
    // Initialize a pointer s to keep track of the cache index
    let sie=sum[i],sje=sum[j],ske=sum[k],ste=sum[t];
    while (k < right && sum[k] - sum[i] < lower) k++;
    // Move the pointer k to the right until the difference between sum[k] and sum[i] is greater than or equal to the lower bound

    while (j < right && sum[j] - sum[i] <= upper) j++;
    // Move the pointer j to the right until the difference between sum[j] and sum[i] is greater than the upper bound

    while (t < right && sum[t] < sum[i]) cache[s++] = sum[t++];
    // Move the pointer t to the right until sum[t] is greater than or equal to sum[i]
    // Store the value of sum[t] in the cache array at index s
    // Increment the pointer s

    cache[s] = sum[i];
    // Store the value of sum[i] in the cache array at index s

    count += j - k;
    // Increment the count by the difference between the pointers j and k
    // This represents the number of elements in the range [lower, upper]
  }
  
  for (let i = 0; i < t - left; i++) {
    sum[left + i] = cache[i];
  }
  
  return count;
}

let nums = [-2,5,-1],
lower = -2,
upper = 2;

let count = countRangeSum(nums, lower, upper);

console.log(count);