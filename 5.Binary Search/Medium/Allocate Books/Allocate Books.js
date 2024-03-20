/** @format */

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  books: function (A, B) {
      if (B > A.length) return -1;
      let maxVal = 0;
      let sum = 0;
      for (let i = 0; i < A.length; i++) {
        maxVal = Math.max(maxVal, A[i]);
        sum += A[i];
      }
      let left = maxVal;
      let right = sum;
      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (this.canAllocate(A, B, mid)) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      return left;
  },
  canAllocate: function (A, B, max) {
      let count = 1;
      let sum = 0;
      for (let i = 0; i < A.length; ) {
        if (sum + A[i] <= max) {
          sum += A[i];
          i++;
        } else {
          count++;
          sum = 0;
        }
      }
      return count <= B;
  },
};
