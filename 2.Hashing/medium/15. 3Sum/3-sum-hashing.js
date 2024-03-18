var threeSum = function (nums) {
  let result = []; // Initialize an empty array to store the results
  let hash = new Map(); // Initialize a Map to store the numbers
  let duplicateMap = new Map(); // Initialize a Map to store duplicate triplets
  for (let i = 0, n = nums.length; i < n - 2; i++) { // Loop through the array
    hash.clear(); // Clear the Map for each new number
    let target = 0 - nums[i]; // Calculate the target sum
    for (let j = i + 1; j < n; j++) { // Loop through the array for the second number
      let diff = target - nums[j]; // Calculate the difference
      if (hash.has(diff)) { // Check if the difference exists in the Map
        let triplet = [nums[i], diff, nums[j]].sort((a, b) => a - b).toString(); // Create a sorted string representation of the triplet
        if (!duplicateMap.has(triplet)) { // Check if the triplet is not a duplicate
          result.push([nums[i], diff, nums[j]]); // Add the triplet to the result array
          duplicateMap.set(triplet, true); // Mark the triplet as a duplicate
          hash.delete(diff); // Remove the difference from the Map
        }
      } else {
        hash.set(nums[j], true); // Add the number to the Map
      }
    }
  }
  return result; // Return the array of unique triplets
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
