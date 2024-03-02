const bubbleSort = function (arr) {
  let n = arr.length;
  let isSwapped = false;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (isSwapped == false) return;
  }
  return arr;
};
// console.log(bubbleSort(arr))

// using recursion

const bubbleSortRecursion = function (arr) {
  let n = arr.length;
  solve(arr, n - 1, 0, false);
  return arr;
};

const solve = function (arr, i, j, isSwapped) {
  if (i == 0) return;
  if (j == i) {
    if (isSwapped == false) return;
    solve(arr, i - 1, 0,false);
    return;
  }
  if (arr[j] > arr[j + 1]) {
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    isSwapped = true;
  }
  solve(arr, i, j + 1, isSwapped);
  return;
};
let arr = [3,2,1];

console.log(bubbleSortRecursion(arr));
