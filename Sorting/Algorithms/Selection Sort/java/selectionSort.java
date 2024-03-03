package java;
public class selectionSort {

    public static void selectionsort(int[] arr){
        int n = arr.length;
        for(int i = 0; i<n-1 ; i++){
            int min_idx = findSmallestElement(arr, i);  
            if(min_idx != i){
                int temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;
            }  
        }
    }
    
    public static int findSmallestElement(int[] arr, int i){
        int n = arr.length;
        int min_idx = i;
        for(int j = i+1; j<n ; j++){
            if(arr[j]<arr[min_idx]){
                min_idx = j;
            }
        }
        return min_idx;
    }

    public static void selectionSortRecursion(int[] arr) {
        solve(arr, 0);
    }

    public static void solve(int[] arr, int i) {
        if(i == arr.length) {
            return;
        }
        int min_idx =  smallestElement(arr, i,i+1);
        if (min_idx != i) {
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
        solve(arr, i+1);
    }

    public static int smallestElement(int[] arr, int min,int j){
        if(j == arr.length){
            return min;
        }
        if (arr[j]<arr[min]){
            min = j;
        }
        return smallestElement(arr, min, j+1);
    }








    public static void main(String[] args){
        int[] arr = {2,1,3,8,7,5,0,-2,4};
        selectionSortRecursion(arr);
        for(int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }  
    }
}