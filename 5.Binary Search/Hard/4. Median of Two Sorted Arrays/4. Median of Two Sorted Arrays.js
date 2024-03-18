/**
 * URL: https://leetcode.com/problems/median-of-two-sorted-arrays/description/

4. Median of Two Sorted Arrays

AmazonAdobeGoldman SachsMicrosoftAppleGiven two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Example 3:
Input: nums1 = [1,3,5], nums2 = [2,4,6]
Output: 3.50000
Explanation: merged array = [1,2,3,4,5,6] and median is (3 + 4) / 2 = 3.5.

Input: nums1 = [1,2,3,4], nums2 = [5,6,7,8]
Output: 4.50000
Explanation: merged array = [1,2,3,4,5,6,7,8] and median is (4 + 5) / 2 = 4.5.

Input: nums1 = [1,3,5,7,9], nums2 = [2,4,6,8,10]
Output: 5.50000
Explanation: merged array = [1,2,3,4,5,6,7,8,9,10] and median is (5 + 6) / 2 = 5.5.

Constraints:

	nums1.length == m
	nums2.length == n
	0 <= m <= 1000
	0 <= n <= 1000
	1 <= m + n <= 2000
	-106 <= nums1[i], nums2[i] <= 106
 */

// Solution 1 - (O(n+m))
  const findMedianSortedArrays2 = (nums1, nums2) => {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        merged.push(nums1[i]);
        i++;
      } else {
        merged.push(nums2[j]);
        j++;
      }
    }

    while (i < nums1.length) {
      merged.push(nums1[i]);
      i++;
    }

    while (j < nums2.length) {
      merged.push(nums2[j]);
      j++;
    }

    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  };
//time: O(n+m)

// Solution 2 - O(min(n,m)log(n+m))
var findMedianSortedArrays1 = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let nums = [];
  if(m === 0 || n === 0){
    nums = m === 0 ? nums2 : nums1;
  }else{
    if (m > n) {
      for (let i = 0; i < n; i++) {
        nums1.push(nums2[i]);
        nums = nums1;
      }
    } else {
      for (let i = 0; i < m; i++) {
        nums2.push(nums1[i]);
        nums = nums2;
      }
    }
  }
  
  
  nums.sort((a, b) => a - b);
 
  if (nums.length % 2 === 0) {
    return (nums[(nums.length / 2) - 1] + nums[nums.length / 2]) / 2;
  } else {
    return nums[Math.floor(nums.length / 2)];
  }
    
};
//time: O(min(n,m)log(n+m))

// Solution 3 - O(log(min(n,m)))
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let t = m + n;
  let h = Math.floor(t / 2);


  if (m > n) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let l = 0;
  let r = m-1;
  while (true) {
    let i = Math.floor((l + r) / 2);
    let j = h - i - 2; // -2 because 0 based index and 1 based length
    let nums1Left = i >= 0 ? nums1[i] : -Infinity;
    let nums1Right = i + 1 < m ? nums1[i + 1] : Infinity;
    let nums2Left = j >= 0 ? nums2[j] : -Infinity;
    let nums2Right = j + 1 < n ? nums2[j + 1] : Infinity;
    nums1Left;
    nums1Right;
    nums2Left;
    nums2Right;
    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if (t % 2 === 0) {
        return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
      } else {
        return Math.min(nums1Right, nums2Right);
      }
    } else if (nums1Left > nums2Right) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
}
let nums1 = [1, 3],
nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));

// 2.00000

function median(a, b) {
    let n1 = a.length, n2 = b.length;
    // if n1 is bigger swap the arrays:
    if (n1 > n2) return median(b, a);

    let n = n1 + n2; // total length
    let left = Math.floor((n1 + n2 + 1) / 2); // length of left half
    // apply binary search:
    let low = 0, high = n1;
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;
        // calculate l1, l2, r1, and r2
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
        if (mid1 < n1) r1 = a[mid1];
        if (mid2 < n2) r2 = b[mid2];
        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            if (n % 2 === 1) return Math.max(l1, l2);
            else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        }

        // eliminate the halves:
        else if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }
    return 0; // dummy statement
}

let a = [1, 4, 7, 10, 12];
let b = [2, 3, 6, 15];
console.log("The median of two sorted arrays is " + median(a, b).toFixed(1));