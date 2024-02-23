var twoSum = function (nums, target) {
  let hash = new Map();
  for (let i = 0, n = nums.length; i < n; i++) {
    let diff = target - nums[i];
    if (hash.has(diff)) {
      return [hash.get(diff), i];
    }
    hash.set(nums[i], i);
  }

  
};
console.log(twoSum([11,5,2, 7, 11, 15], 9));