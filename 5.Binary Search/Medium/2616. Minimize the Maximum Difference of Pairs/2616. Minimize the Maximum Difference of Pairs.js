var minimizeMax = function (nums, p) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums[nums.length - 1] - nums[0];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canPair(nums, p, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

function canPair(nums, p, max) {
  let count = 0;
  for (let i = 0; i < nums.length - 1 && count < p; ) {
    if (nums[i + 1] - nums[i] <= max) {
      count++;
      i += 2;
    } else {
      i++;
    }
  }
  return count >= p;
}
