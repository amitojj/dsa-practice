var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0, n = nums.length; i < n; i++) {
    let diff = target - [nums[i]];
    if (diff in hash) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
};
console.log(twoSum([11, 5, 2, 7, 11, 15], 9));
