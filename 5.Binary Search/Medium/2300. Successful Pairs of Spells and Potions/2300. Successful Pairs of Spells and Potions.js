
var successfulPairs = function (spells, potions, success) {
  let pairs = [];
  mergeSort(potions, 0, potions.length - 1);
  for (let spell of spells) {
    let left = 0;
    let right = potions.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (spell * potions[mid] < success) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    pairs.push(potions.length - left);
  }
  return pairs;
};

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  let mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;
  let L = new Array(n1);
  let R = new Array(n2);
  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }
  let i = 0;
  let j = 0;
  let k = left;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

console.log(successfulPairs([2, 1, 3], [3, 2, 1], 3)); // [3, 3, 3]
