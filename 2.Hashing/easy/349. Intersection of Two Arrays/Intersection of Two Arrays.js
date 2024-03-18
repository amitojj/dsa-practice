var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];
  for (let item of set1) {
    if (set2.has(item)) {
      result.push(item);
    }
  }
  return result;
};
//time complexity: O(n+m)
//space complexity: O(n+m)

let nums1 = [1, 2, 2,3, 1],
  nums2 = [2, 2,3];
console.log(intersection(nums1, nums2)); //[2]