var searchMatrix = function (matrix, target) {
  let i = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let lo = 0;
  let hi = m * n - 1;
  let row = Math.floor(matrix[i] / n);
  let col = Math.floor(matrix[i] % n);
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (mid === target) {
      return true;
    } else if (mid < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
};
