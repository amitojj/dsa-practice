import java.util.Arrays;

public class Solution {
  public static int aggressiveCows(int[] stalls, int k) {
    Arrays.sort(stalls);
    int left = 1;
    int right = stalls[stalls.length - 1] - stalls[0];
    int result = 0;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (canPlaceCows(stalls, k, mid)) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  private static boolean canPlaceCows(int[] stalls, int k, int distance) {
    int count = 1;
    int lastPosition = stalls[0];

    for (int i = 1; i < stalls.length; i++) {
      if (stalls[i] - lastPosition >= distance) {
        count++;
        lastPosition = stalls[i];
      }
    }

    return count >= k;
  }
}