var shipWithinDays = function (weights, days) {
  let maxVal = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    maxVal = Math.max(maxVal, nums[i]);
    sum += nums[i];
  }

  let left = maxVal;
  let right = sum;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canShip(weights, days, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
function canShip(weights, days, capacity) {
  let count = 1;
  let sum = 0;
  for (let weight of weights) {
    sum += weight;
    if (sum > capacity) {
      count++;
      sum = weight;
    }
  }
  return count <= days;
}
