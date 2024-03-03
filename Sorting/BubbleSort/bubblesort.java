

public class bubblesort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for(int i = n-1; i > 0; i--) {
            boolean isSwapped = false;
            for(int j = 0; j < i; j++) {
                if(arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwapped = true;
                }
            }
            if(isSwapped == false) return;
        }
    }
    public static void bubbleSortRecursion(int[] arr) {
      int n = arr.length;
      solve(arr, n - 1, 0, false);

    }
    public static void solve(int[] arr, int i, int j, boolean isSwapped) {
      if (i == 1) {
        return;
      }
      if (j == i) {
        if (isSwapped == false) {
        return;
      }
        i--;
        j = 0;
        isSwapped = false;
      }
      if (arr[j] > arr[j+1]) {
        int temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        isSwapped = true;
      }
      solve(arr, i, j+1, isSwapped);
      return;
    }

    public static void main(String[] args) {
    int[] arr = {3,2,1,5,6,4,-2,44,0,0,1,99};
    bubbleSortRecursion(arr);
      for (int i : arr) {
          System.out.print(i + " ");
      }
    }
}
