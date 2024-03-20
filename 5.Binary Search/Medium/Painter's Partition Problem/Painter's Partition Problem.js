/** @format */

module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of integers
  //return an integer
  paint: function (A, B, C) {
    if (C.length === 0) return 0;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < C.length; i++) {
      max = Math.max(max, C[i]);
      sum += C[i];
    }
    if(A>=C.length){
      return max * B % 10000003;
    }
    if(A===1){
      return sum * B % 10000003;
    }
    let low = max;
    let high = sum;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      let requiredPainters = this.requiredPainters(C, mid);
      if (requiredPainters <= A) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return (low * B) % 10000003;
  },
  requiredPainters: function (C, max) {
    let total = 0;
    let painters = 1;
    for (let i = 0; i < C.length; i++) {
      total += C[i];
      if (total > max) {
        total = C[i];
        painters++;
      }
    }
    return painters;
  },
};
