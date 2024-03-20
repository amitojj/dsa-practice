/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, diff) {
  //we need to find the number of pairs that
  //satisfy the condition that the absolute difference
  //between the corresponding elements in nums1 and nums2 is at most diff
  // (nums1[i] - nums2[i]) <= (nums1[j] - nums2[j]) + diff 
  //we'll do this by first subtracting the corresponding elements in nums2
  //from the elements in nums1, then mergesorting the resulting array

  //we'll use the mergeSort function to sort the array, and the countSort
  //function to count the number of pairs that satisfy the condition

  //we'll return the number of pairs that satisfy the condition

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = nums1[i] - nums2[i];
  }
  let result = 0;
  mergeSort(nums1, 0, nums1.length - 1);
  return result;

  function mergeSort(arr, start, end) {
    //base case: if we have a single element, just return it
    if (start === end) {
      return [arr[start]];
    }

    //otherwise, split the array in half and recursively sort each half
    let mid = Math.floor((start + end) / 2);
    let left = mergeSort(arr, start, mid);
    let right = mergeSort(arr, mid + 1, end);

    //then we merge the two sorted halves using the countSort function
    return countSort(left, right);
  }

  function countSort(left, right) {
    //we'll maintain two indices, i and j, to keep track of the elements in left and right
    let i = 0;
    let j = 0;

    //we'll also keep track of the lengths of left and right, n and m
    let n = left.length;
    let m = right.length;

    //we'll iterate through left, and for each element in left,
    //we'll iterate through right to find the number of pairs in right
    //that satisfy the condition
    for (let i = 0; i < n; i++) {
      while (j < m && left[i] > right[j] + diff) j++;
      result += m - j;
    }

    //then we'll merge the two sorted arrays, using a new array resultArr
    //to store the merged array
    let resultArr = [];
    i = 0;
    j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        resultArr.push(left[i]);
        i++;
      } else {
        resultArr.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      resultArr.push(left[i]);
      i++;
    }
    while (j < right.length) {
      resultArr.push(right[j]);
      j++;
    }

    //and finally, we'll return the merged array
    return resultArr;
  }
};

//time complexity: O(nlogn)
//space complexity: O(n)