/**
 * Farmer John has built a new long barn, with N (2 <= N <= 100,000) stalls. The stalls are located along a straight line at positions x1 ... xN (0 <= xi <= 1,000,000,000).

His C (2 <= C <= N) cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, FJ wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?
Input
t – the number of test cases, then t test cases follows.
* Line 1: Two space-separated integers: N and C
* Lines 2..N+1: Line i+1 contains an integer stall location, xi
Output
For each test case output one integer: the largest minimum distance.
 */

function aggressiveCows(t, arr) {
  let result = [];
  for (let i = 0; i < t; i++) {
    let [n, c] = arr[i][0];
    let stalls = arr[i].slice(1).sort((a, b) => a - b);
    let start = 0;
    let end = stalls[n - 1] - stalls[0];
    let max = 0;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isValid(stalls, c, mid)) {
        max = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    result.push(max);
  }
  return result;
}
function isValid(stalls, c, mid) {
  let count = 1;
  let prev = stalls[0];
  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - prev >= mid) {
      count++;
      prev = stalls[i];
    }
  }
  return count >= c;
}




