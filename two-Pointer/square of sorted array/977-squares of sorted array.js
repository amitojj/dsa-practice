//easy
(() => {
  var sortedSquares = function (nums) {
    let sqsum = nums.map((num) => num * num);
    sqsum.sort((a, b) => a - b);
    return sqsum;
  };
})();

//two-pointer
var sortedSquares = function (nums) {
  let n = nums.length;
  let arr = [];
  let i = 0;
  let j = n - 1;
  let p = n - 1;

  while (i <= j) {
    if (nums[i] ** 2 < nums[j] ** 2) {
      arr[p] = nums[j] ** 2;
      j--;
      p--;
    } else {
      arr[p] = nums[i] ** 2;
      i++;
      p--;
    }
  }
  return arr;
};

let nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); //16 vs 100,
