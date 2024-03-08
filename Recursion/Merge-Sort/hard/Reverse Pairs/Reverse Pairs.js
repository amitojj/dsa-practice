var reversePairs = function (nums) {
  let n = nums.length; // Get the length of the input array
  let count = 0; // Initialize a variable to keep track of the count of reverse pairs
  helper(0, n - 1); // Call the helper function to perform merge sort
  return count; // Return the count of reverse pairs

  function helper(left, right) {
    if (left >= right) return; // Base case: if the left index is greater than or equal to the right index, return
    const mid = Math.floor((left + right) / 2); // Calculate the middle index
    helper(left, mid); // Recursively call the helper function for the left half of the array
    helper(mid + 1, right); // Recursively call the helper function for the right half of the array
    let i = left; // Initialize a pointer for the left half of the array
    let j = mid + 1; // Initialize a pointer for the right half of the array
    while (i <= mid && j <= right) { // Iterate until both pointers reach their respective ends
      if (nums[i] > 2 * nums[j]) { // If the current element in the left half is greater than twice the current element in the right half
        count += mid - i + 1; // Increment the count by the number of elements remaining in the left half
        j++; // Move the pointer in the right half to the next element
      } else {
        i++; // Move the pointer in the left half to the next element
      }
    }
    let sorted = []; // Create an empty array to store the sorted elements
    let p1 = left; // Initialize a pointer for the left half of the array
    let p2 = mid + 1; // Initialize a pointer for the right half of the array
    let p = 0; // Initialize a pointer for the sorted array
    while (p1 <= mid || p2 <= right) { // Iterate until either pointer reaches its end
      if (p1 > mid) { // If the pointer for the left half has reached its end
        sorted[p++] = nums[p2++]; // Add the remaining elements from the right half to the sorted array
      } else if (p2 > right) { // If the pointer for the right half has reached its end
        sorted[p++] = nums[p1++]; // Add the remaining elements from the left half to the sorted array
      } else {
        if (nums[p1] < nums[p2]) { // If the current element in the left half is smaller than the current element in the right half
          sorted[p++] = nums[p1++]; // Add the current element from the left half to the sorted array
        } else {
          sorted[p++] = nums[p2++]; // Add the current element from the right half to the sorted array
        }
      }
    }
    for (let i = left; i <= right; i++) { // Copy the sorted array back to the original array
      nums[i] = sorted[i - left];
    }
  }
};
console.log(reversePairs([1, 3, 2, 3, 1])); // Output: 2
