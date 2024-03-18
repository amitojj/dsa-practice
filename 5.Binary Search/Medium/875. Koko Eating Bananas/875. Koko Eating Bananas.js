//https://leetcode.com/problems/koko-eating-bananas/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let l = 0,
    r = Math.max(...piles);
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (isFeasible(piles, h, m)) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  function isFeasible(piles, h, m) {
    let hrs = 0;
    for (let pile of piles) {
      hrs += Math.ceil(pile / m);
    }
    return hrs <= h;
  }
  return l;
};
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
