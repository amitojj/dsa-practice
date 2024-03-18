function quickSort(arr){
  let n = arr.length;
  helper(arr, 0, n-1);
  return arr;
}
function helper(arr, low, high){
  if(low < high){
    let pi = partition(arr, low, high);
    helper(arr, low, pi-1);
    helper(arr, pi+1, high);
  }
}
function partition(arr, low, high){
  let pivot = Math.floor(Math.random() * (high - low + 1)) + low;
  [arr[pivot], arr[high]] = [arr[high], arr[pivot]];
  let i = low, j = low;
  while(j < high){
    if(arr[j] < arr[high]){
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
    j++;
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

console.log(quickSort([5, 3, 8, 4, 2, 7, 1, 10])); // [1, 2, 3, 4, 5, 7, 8, 10]