//https://leetcode.com/problems/search-a-2d-matrix-ii/description/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let col = matrix[0].length - 1;
  while (col >= 0 && matrix.length > 0) {
    const row = matrix.shift();
    let low = 0;
    let high = col;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (row[mid] === target) {
        return true;
      }
      if (row[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
      col = mid;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
