var threeSum = function (nums) {
  let n = nums.length;
  let sorted = nums.sort((x, y) => x - y);
  let c = 0;

  let arr = [];
  for (let c = 0; c < n - 2; c++) {
    if (sorted[c] === sorted[c - 1]) continue; // Skip duplicates
    let i = c + 1;
    let j = n - 1;
    while (i < j) {
      if (sorted[i] + sorted[j] > -sorted[c]) {
        j--;
      } else if (sorted[i] + sorted[j] == -sorted[c]) {
        arr.push([sorted[i], sorted[j], sorted[c]]);
        do {
          i++; // Move pointer j to the right
        } while (sorted[i] === sorted[i - 1]); // Skip duplicates
      } else if (sorted[i] + sorted[j] < -sorted[c]) {
        i++;
      }
    }
  }
  return arr;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
