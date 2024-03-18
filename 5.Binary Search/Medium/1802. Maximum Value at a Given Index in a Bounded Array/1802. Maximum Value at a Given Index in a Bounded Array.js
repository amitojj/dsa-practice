/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  let left = 1;
  let right = maxSum;
  let result = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canPlace(n, index, mid, maxSum)) {
      left = mid + 1;
      result = Math.max(result, mid);
    } else {
      right = mid - 1;
    }
  }
  return result;
};
function canPlace(n, index, mid, maxSum) {
  let leftcount = Math.min(index, mid - 1);
  let leftsum = leftcount * mid - (leftcount * (leftcount + 1)) / 2;
  leftsum += Math.max(0, index - mid + 1);
  let rightcount = Math.min(n - index - 1, mid - 1);
  let rightsum = rightcount * mid - (rightcount * (rightcount + 1)) / 2;
  rightsum += Math.max(0, n - index - mid);
  return leftsum + rightsum + mid <= maxSum;
}
let n = 4,
  index = 0,
  maxSum = 4;
console.log(maxValue(n, index, maxSum)); // 7
//time: O(log(maxSum)), space: O(1)
