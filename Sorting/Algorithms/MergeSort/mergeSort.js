const mergeSort = function (arr) {
  return mergeSortHelper(arr, 0, arr.length - 1);
};

function mergeSortHelper(arr, start, end) {
  if (start === end) {
    return [arr[start]];
  }
  let mid = Math.floor((start + end) / 2);
  let left = mergeSortHelper(arr, start, mid);
  let right = mergeSortHelper(arr, mid + 1, end);
  return mergeSorted(left, right);
}
function mergeSorted(left, right) {
  let result = [],
    i = 0,
    j = 0,
    k = 0,
    n = left.length,
    m = right.length;

  while (i < n && j < m) {
    if (left[i] < right[j]) result[k++] = left[i++];
    else result[k++] = right[j++];
  }
  while (i < n) result[k++] = left[i++];
  while (j < m) result[k++] = right[j++];
  return result;
}

console.log(
  mergeSort([-1, 5, -4, -9, 0, 1, 2, -5, -5, 3, 4, -6, 6, -7, -8, 8, 9])
);
