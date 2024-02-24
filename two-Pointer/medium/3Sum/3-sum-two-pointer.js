/**
 * Finds all unique triplets in the array that sum up to zero.
 * @param {number[]} nums - The input array of numbers.
 * @return {number[][]} - An array of unique triplets that sum up to zero.
 */
var threeSum = function (nums) {
  const nm = nums.sort((a, b) => a - b); // Sort the input array
  const arr = []; // Initialize an empty array to store the result
  for (let i = 0, n = nm.length; i < n - 2; i++) { // Loop through the array
    if (nm[i] === nm[i - 1]) continue; // Skip duplicates
    let j = i + 1, // Initialize pointer j
      k = n - 1, // Initialize pointer k
      target = -nm[i]; // Calculate the target sum
    while (j < k) { // Loop through the subarray
      if (nm[j] + nm[k] < target) { // If the sum is less than target
         j++; // Move pointer j to the right
      }else if(nm[j] + nm[k] > target){ // If the sum is greater than target
        k--; // Move pointer k to the left
      }else{ // If the sum is equal to target
        arr.push([nm[i],nm[j],nm[k]]) // Add the triplet to the result
        do {
            j++; // Move pointer j to the right
        }while(nm[j]===nm[j-1]); // Skip duplicates
      }
    }
  }
  return arr; // Return the result
};
console.log(threeSum([0,0,0,0,0]));
