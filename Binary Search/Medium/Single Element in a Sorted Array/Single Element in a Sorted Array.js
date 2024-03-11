var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (
      (nums[mid] === nums[mid + 1] && mid % 2 === 1) ||
      (nums[mid] === nums[mid - 1] && mid % 2 === 0)
    ) {
      right = mid - 1;
    } else if (
      (nums[mid] === nums[mid + 1] && mid % 2 === 0) ||
      (nums[mid] === nums[mid - 1] && mid % 2 === 1)
    ) {
      left = mid + 1;
    } else {
      return nums[mid];
    }
  }
  return nums[left];
};

//time complexity: O(logn)
//space complexity: O(1)