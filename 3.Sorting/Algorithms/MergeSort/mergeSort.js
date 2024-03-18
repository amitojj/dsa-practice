// This function is the entry point for the merge sort algorithm. It takes an array as input and returns the sorted array using the merge sort algorithm.
const mergeSort = function (arr) {
  return mergeSortHelper(arr, 0, arr.length - 1);
};

// This function is a helper function for mergeSort. It recursively divides the array into smaller subarrays, sorts them, and then merges them back together.
function mergeSortHelper(arr, start, end) {
  // Base case: If the start and end pointers are the same, return an array with a single element (the element at the start index).
  if (start === end) {
    return [arr[start]];
  }
  // Calculate the mid index of the array.
  let mid = Math.floor((start + end) / 2);
  // Recursively call mergeSortHelper on the left and right halves of the array.
  let left = mergeSortHelper(arr, start, mid);
  let right = mergeSortHelper(arr, mid + 1, end);
  // Call the mergeSorted function to merge the sorted left and right subarrays.
  return mergeSorted(left, right);
}

// This function takes two sorted arrays as input and merges them into a single sorted array.
function mergeSorted(left, right) {
  let result = [], // Initialize an empty array to store the merged result.
    i = 0, // Initialize pointers for the left array.
    j = 0, // Initialize pointers for the right array.
    k = 0, // Initialize a pointer for the result array.
    n = left.length, // Get the length of the left array.
    m = right.length; // Get the length of the right array.

  // Iterate through both arrays and merge them into the result array in sorted order.
  while (i < n && j < m) {
    if (left[i] < right[j]) result[k++] = left[i++]; // If the element in the left array is smaller, add it to the result and move the left pointer.
    else result[k++] = right[j++]; // If the element in the right array is smaller, add it to the result and move the right pointer.
  }
  // Add any remaining elements from the left array to the result.
  while (i < n) result[k++] = left[i++];
  // Add any remaining elements from the right array to the result.
  while (j < m) result[k++] = right[j++];
  // Return the merged and sorted result array.
  return result;
}
console.log(
  mergeSort([-1, 5, -4, -9, 0, 1, 2, -5, -5, 3, 4, -6, 6, -7, -8, 8, 9])
);
