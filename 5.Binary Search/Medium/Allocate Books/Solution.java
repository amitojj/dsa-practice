public class Solution {

  public int books(int[] A, int B) {
    if (B > A.length) {
      return -1;
    }
    int maxVal = 0;
    int sum = 0;

    for (int i = 0; i < A.length; i++) {
      maxVal = Math.max(maxVal, A[i]);
      sum += A[i];
    }
    int low = maxVal;
    int high = sum;
    while (low < high) {
      int mid = low + (high - low) / 2;
      if (isPossible(A, B, mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  public boolean isPossible(int[] A, int B, int max) {
    int students = 1;
    int sum = 0;
    for (int i = 0; i < A.length; i++) {
      if (A[i] > max) {
        return false;
      }
      if (sum + A[i] > max) {
        students++;
        sum = A[i];
        if (students > B) {
          return false;
        }
      } else {
        sum += A[i];
      }
    }
    return true;
  }

  public static void main(String[] args) {
    Solution s = new Solution();
    int[] A = { 5, 7, 100, 11 };
    int B = 4;
    System.out.println(s.books(A, B));
  }
}
