var numberOfPairs = function (nums1, nums2, diff) {
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = nums1[i] - nums2[i];
  }
  let result = 0;
  mergeSort(nums1, 0, nums1.length - 1);
  return result;
  function mergeSort(arr, start, end) {
    if (start === end) {
      return [arr[start]];
    }
    let mid = Math.floor((start + end) / 2);
    let left = mergeSort(arr, start, mid);
    let right = mergeSort(arr, mid + 1, end);
    return countSort(left, right);
  }
  function countSort(left, right) {
    let i = 0;
    let j = 0;
    let n = left.length;
    let m = right.length;
    for (let i = 0; i < n; i++) {
      while (j < m && left[i] > right[j] + diff) j++;
      result += m - j;
    }

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
    return resultArr;
  }
};
