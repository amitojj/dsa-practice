var countRangeSum = function (nums, lower, upper) {
  let count = 0; // Initialize count variable
  const n = nums.length; // Get the length of the input array
  const sum = new Array(n + 1).fill(0); // Create a new array to store the cumulative sum of elements
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i]; // Calculate the cumulative sum of elements
  }
  console.log(sum);
  count = helper(0, n); // Call the helper function with initial left and right pointers
  function helper(left, right) {
    // Define a helper function for recursion
    if (left === right) return 0; // Base case: if left and right pointers are the same, return 0
    const mid = Math.floor((left + right) / 2); // Calculate the middle index
    let leftCount = helper(left, mid); // Recursively call the helper function for the left half
    let rightCount = helper(mid + 1, right); // Recursively call the helper function for the right half
    let result = leftCount + rightCount; // Add the results from the left and right halves
    let i = left; // Initialize a pointer for the left half
    let l = mid + 1; // Initialize a pointer for the lower bound
    let r = mid + 1; // Initialize a pointer for the upper bound
    while (i <= mid) {
      // Iterate through the left half
      while (l <= right && sum[l] - sum[i] < lower) l++; // Move the lower bound pointer until the sum is greater than or equal to the lower bound
      while (r <= right && sum[r] - sum[i] <= upper) r++; // Move the upper bound pointer until the sum is greater than the upper bound
      result += r - l; // Add the count of valid ranges to the result
      i++; // Move the pointer for the left half
    }
    let sorted = new Array(right - left + 1); // Create a new array to store the sorted values
    let p1 = left; // Initialize a pointer for the left half
    let p2 = mid + 1; // Initialize a pointer for the right half
    let p = 0; // Initialize a pointer for the sorted array
    while (p1 <= mid || p2 <= right) {
      // Merge the left and right halves
      if (p1 > mid) {
        sorted[p++] = sum[p2++]; // If the left half is exhausted, add elements from the right half to the sorted array
      } else if (p2 > right) {
        sorted[p++] = sum[p1++]; // If the right half is exhausted, add elements from the left half to the sorted array
      } else {
        if (sum[p1] < sum[p2]) {
          sorted[p++] = sum[p1++]; // If the element in the left half is smaller, add it to the sorted array
        } else {
          sorted[p++] = sum[p2++]; // If the element in the right half is smaller, add it to the sorted array
        }
      }
    }
    for (let i = left; i <= right; i++) {
      sum[i] = sorted[i - left]; // Copy the sorted array back to the original array
    }
    return result; // Return the result
  }

  return count; // Return the final count
};
countRangeSum([-2, 5, -1], -2, 2);
