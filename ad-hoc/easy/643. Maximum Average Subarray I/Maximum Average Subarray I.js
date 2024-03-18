var findMaxAverage = function (nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let max = sum;
    for (let i = k,j=0; i < nums.length; i++,j++) {
        sum = sum - nums[j] + nums[i];
        max = max > sum ? max : sum
    }
    return max / k
};
