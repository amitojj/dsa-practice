import java.util.Arrays;
import java.util.Scanner;

public class AggressiveCows {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int t = scanner.nextInt(); // number of test cases

    while (t-- > 0) {
      int n = scanner.nextInt(); // number of stalls
      int c = scanner.nextInt(); // number of cows

      int[] stalls = new int[n];
      for (int i = 0; i < n; i++) {
        stalls[i] = scanner.nextInt();
      }

      Arrays.sort(stalls); // sort the stalls in ascending order

      int result = findLargestMinimumDistance(stalls, c);
      System.out.println(result);
    }

    scanner.close();
  }

  private static int findLargestMinimumDistance(int[] stalls, int c) {
    int n = stalls.length;
    int left = 0;
    int right = stalls[n - 1] - stalls[0];
    int result = 0;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (isValidDistance(stalls, c, mid)) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  private static boolean isValidDistance(int[] stalls, int c, int distance) {
    int count = 1;
    int prev = stalls[0];

    for (int i = 1; i < stalls.length; i++) {
      if (stalls[i] - prev >= distance) {
        count++;
        prev = stalls[i];
      }
    }

    return count >= c;
  }
}