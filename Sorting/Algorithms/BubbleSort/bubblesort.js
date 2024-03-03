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
  if (i == 1) return;
  if (j == i) {
    if (isSwapped == false) return;
    i--;
    j = 0;
    isSwapped = false;
  }
  if (arr[j] > arr[j + 1]) {
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    isSwapped = true;
  }
  solve(arr, i, j + 1, isSwapped);
};
let arr = [3,2,1,5,6,4,-2,44,0,0,1,99];

console.log(bubbleSortRecursion(arr));
