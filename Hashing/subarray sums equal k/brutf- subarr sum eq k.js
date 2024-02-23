var subarraySum = function (nums, k) {
  let n = nums.length;
  
  let result = 0;
  for (let i = 0; i < n; i++) {
    let sum = nums[i];
    if (sum === k) {
      sum=0;
      result++;
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      sum += nums[j];
      if (sum === k) {
        result++;
        sum=0;
        break;
      }
    }
  }
  return result;
};
console.log(subarraySum([1, -1, 0], 0));
