var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;


  let lo = 1,
    hi = x/2;
  let ans = 0;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (mid * mid <= x) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
 return ans;
};
console.log(mySqrt(1)); // 2
//time complexity : O(log n)
//space complexity : O(1)