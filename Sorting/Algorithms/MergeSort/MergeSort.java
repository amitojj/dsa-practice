public class MergeSort {

  public static int[] mergeSort(int[] arr) {
    return mergeSortHelper(arr, 0, arr.length - 1);
  }

  public static int[] mergeSortHelper(int[] arr, int start, int end) {
    if (start == end) {
      return new int[] { arr[start] };
    }
    int mid = (start + end) / 2;
    int[] left = mergeSortHelper(arr, start, mid);
    int[] right = mergeSortHelper(arr, mid + 1, end);
    return merge(left, right);
  }

  public static int[] merge(int[] left, int[] right) {
    int i = 0;
    int j = 0;
    int k = 0;
    int m = left.length;
    int n = right.length;
    int[] result = new int[m + n];
    while (i < m && j < n) {
      if (left[i] < right[j]) {
        result[k] = left[i];
        i++;
      } else {
        result[k] = right[j];
        j++;
      }
      k++;
    }
    while (i < m) {
      result[k] = left[i];
      i++;
      k++;
    }
    while (j < n) {
      result[k] = right[j];
      j++;
      k++;
    }
    return result;
  }

  public static void main(String[] args) {
    int[] arr = { 4, 5, -1, 2, -8, 3 };
    mergeSort(arr);
    for (int i : arr) {
      System.out.print(i + " ");
    }
  }
}
