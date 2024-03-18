let count = 0;
const merge = (arr, start, mid, end) => {
  const temp = new Array(end - start + 1);
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (arr[i] >= arr[j]) {
      temp[k] = arr[j];
      k++, j++;
    } else {
      temp[k] = arr[i];
      k++, i++;
    }
  }
  while (i <= mid) {
    temp[k] = arr[i];
    i++, k++;
  }
  while (j <= end) {
    temp[k] = arr[j];
    j++, k++;
  }
  i = start;
  j = mid + 1;
  while (i <= mid && j <= end) {
    if (arr[i] > arr[j] * 2) {
      count += mid - i + 1;
      j++;
    } else {
      i++;
    }
  }
  for (let x = 0; x < temp.length; x++) {
    arr[x + start] = temp[x];
  }
};

const mergeSort = (arr, start, end) => {
  if (start === end) return;
  const mid = Math.trunc(start + (end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
};

const reversePairs = (nums) => {
  mergeSort(nums, 0, nums.length - 1);
  return count;
};
console.log(reversePairs([2, 4, 3, 5, 1]));