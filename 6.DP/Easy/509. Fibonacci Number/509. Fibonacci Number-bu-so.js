/** @format */

//Bottom - up space optimised
var fib = function (n) {
  if (n <= 1) return n;
  p2 = 0;
  p1 = 1;
  for (let i = 2; i <= n; i++) {
    ci = p1+p2;
    p2 = p1;
    p1 = ci;
  }
  return p1;
};

//;time O(n) | space O(1)
