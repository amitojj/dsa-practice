var threeSum = function (nums) {
  let result = [];
  let hash = new Map();
  let duplicateMap = new Map();
  for (let i = 0, n = nums.length; i < n - 1; i++) {
    hash.clear();
    let target = 0 - nums[i];
    for (let j = i + 1; j < n; j++) {
      let diff = target - nums[j];
      if (hash.has(diff)) {
        x = [nums[i], diff, nums[j]].sort((a, b) => a - b).toString();
        if (!duplicateMap.has(x)) {
          result.push([nums[i], diff, nums[j]]);
          duplicateMap.set(
            [nums[i], diff, nums[j]].sort((a, b) => a - b).toString(),
            true
          );
          hash.delete(diff);
        }
      } else {
        hash.set(nums[j], true);
      }
    }
  }
  return result;
};

// let nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums));

var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }

  nums.length = i + 1; 
};

let nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
removeDuplicates(nums);
console.log(nums);
