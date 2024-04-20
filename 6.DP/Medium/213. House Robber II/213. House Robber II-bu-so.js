/** @format */

var rob = function (nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  let ans1 = f(0, n - 2);
  let ans2 = f(1, n - 1);
  return Math.max(ans1, ans2);
  function f(i, x) {
    p2 = nums[i];
    if (x == i) return p2;
    p1 = Math.max(nums[i], nums[i + 1]);
    if (x == i + 1) return p1;
    for (let j = i + 2; j <= x; j++) {
      let cur = Math.max(nums[j] + p2, p1);
      p2 = p1;
      p1 = cur;
    }
    return p1;
  }
};
