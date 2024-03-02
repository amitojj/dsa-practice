const selectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = findMin(arr, i);
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};
const findMin = (arr, i) => {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  return min;
};

const selectionSortRecursion = function (arr) {
  solve(arr, 0);
  return arr;
};
function solve(arr, i) {
  if (i === arr.length - 1) {
    return;
  }
  let min = minElement(arr, i, i + 1);
  if (min != i) {
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  solve(arr, i + 1);
}

function minElement(arr, min, j) {
  if (j >= arr.length) {
    return min;
  }
  if (arr[j] < arr[min]) {
    min = j;
  }
  return minElement(arr, min, j + 1);
}

console.log(selectionSortRecursion([2, 4, 1, 5, 3]));
