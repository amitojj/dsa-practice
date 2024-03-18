class Solution {
  inversionCount(arr, N) {
    let count = 0;
    inversionCountHelper(arr, 0, N - 1, count);
    return count;
    function inversionCountHelper(arr, start, end) {
      if (start === end) {
        return [arr[start]];
      }
      let mid = Math.floor((start + end) / 2);
      let left = inversionCountHelper(arr, start, mid);
      let right = inversionCountHelper(arr, mid + 1, end);
      return mergeAndCount(left, right);
    }

    function mergeAndCount(left, right) {
      let result = [],
        i = 0,
        j = 0,
        k = 0,
        n = left.length,
        m = right.length;
      while (i < n && j < m) {
        if (left[i] <= right[j]) {
          result[k++] = left[i++];
        } else {
          result[k++] = right[j++];
          count += n - i;
        }
      }
      while (i < n) {
        result[k++] = left[i++];
      }
      while (j < m) {
        result[k++] = right[j++];
      }
      return result;
    }
  }
}

const solution = new Solution();
console.log(solution.inversionCount([ 2, 3, 8, 6, 1], 5));
