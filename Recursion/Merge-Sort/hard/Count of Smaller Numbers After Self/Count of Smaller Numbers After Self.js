// This function takes an array of numbers and returns the count of smaller numbers on the right side of each number
/**
 * Counts the number of elements smaller than the current element in the given array
 * @param {number[]} nums - The input array of numbers
 * @return {number[]} - An array of counts of smaller elements for each element in the input array
 */
const countSmaller = (nums) => {
  // Initialize an array to store the result
  const result = new Array(nums.length).fill(0);
  // Create a new array of objects with the value and index of each number
  const arr = nums.map((val, index) => ({ val, index }));
  // Call the helper function to perform the count
  countHelper(arr, 0, arr.length - 1, result);
  // Return the result
  return result;
};

// Recursive helper function to perform the counting
function countHelper(arr, start, end, result) {
  // Base case: if start and end are the same, return an array with the element at the start index
  if (start === end) {
    return [arr[start]];
  }
  // Find the middle index
  const mid = Math.floor((start + end) / 2);
  // Recursively call countHelper on the left and right halves of the array
  const left = countHelper(arr, start, mid, result);
  const right = countHelper(arr, mid + 1, end, result);
  // Call mergeSortCount to sort and count the smaller numbers
  return mergeSortCount(left, right, result);
}

// Function to merge and count the smaller numbers
function mergeSortCount(left, right, result) {
  // Initialize variables and arrays
  const sorted = [];
  let i = 0,
    j = 0,
    k = 0;
  const n = left.length,
    m = right.length;
  let count = 0;
  // Loop through the left and right arrays to merge and count the smaller numbers
  while (i < n && j < m) {
    // If the left element is less than or equal to the right element
    if (left[i].val <= right[j].val) {
      // Increment the result at the index of the current left element by the count
      result[left[i].index] += count;
      // Add the left element to the sorted array
      sorted[k++] = left[i++];
    } else {
      // Increment the count and add the right element to the sorted array
      count++;
      // Add the right element to the sorted array
      sorted[k++] = right[j++];
    }
  }
  // Add remaining elements from the left array to the sorted array
  while (i < n) {
    // Increment the result at the index of the current left element by the count
    result[left[i].index] += count;
    // Add the left element to the sorted array
    sorted[k++] = left[i++];
  }
  // Add remaining elements from the right array to the sorted array
  while (j < m) {
    // Add the right element to the sorted array
    sorted[k++] = right[j++];
  }
  // Return the sorted array
  return sorted;
}
console.log(countSmaller([5,2,6,1,2,0]));
