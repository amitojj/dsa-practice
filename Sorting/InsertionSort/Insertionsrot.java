public class Insertionsrot {
    public static void insertionsort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int element = arr[i];
            int j;
            for (j = i - 1; j >= 0; j--) {
                if (arr[j] > element) {
                    arr[j + 1] = arr[j];
                }
                else {
                    break;
                }
            }
            arr[j + 1] = element;
        }
    }
    public static void main(String[] args) {
        int[] arr = {4,5,-1,2,-8,3};
        insertionsort(arr);
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
    
}
