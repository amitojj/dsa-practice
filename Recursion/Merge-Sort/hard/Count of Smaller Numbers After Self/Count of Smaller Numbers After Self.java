import java.util.List;
import java.util.ArrayList;
class Solution {
    public static int[] count;
    public List<Integer> countSmaller(int[] nums) { 
        List<Integer> result = new ArrayList<>(); //results list
        count = new int[nums.length];  //count array  
        int[] idx = new int[nums.length]; //index array

        for(int i=0; i<nums.length; i++){
            idx[i] = i;
        } // for 5,2,6,1 idx = 0,1,2,3
        sort(nums, idx, 0, nums.length-1);

        for(int i=0; i<nums.length; i++){
            result.add(count[i]);
        }
        return result;
    }

    public static void sort (int[] arr, int[] idx, int l, int r){
        if(l<r){
            int mid = (l+r) /2;
            sort(arr, idx, l, mid); // left
            sort(arr, idx, mid+1, r); // right
            merge(arr, idx,l,mid, r); //
        }
    }

    public static void merge(int[] arr, int[] idx, int left, int mid, int right){
        int m = mid -left +1; // left array size
        int n = right - mid;  //right array size

        int[] lArr = new int[m]; //
        int[] rArr = new int[n];

        for(int i=0; i<m; i++){
            lArr[i] = idx[left+i];
        }
        for(int i=0; i<n; i++){
            rArr[i] = idx[i+mid+1];
        }

        int i=0,j=0,k=left, rightCount=0;
        while(i<m && j<n){
            if(arr[lArr[i]] <= arr[rArr[j]]){
                idx[k] = lArr[i];
                count[lArr[i]] += rightCount;
                i++;
            }else{
                idx[k] = rArr[j];
                rightCount++;
                j++;
            }
            k++;
        }
        while(i<m){
            idx[k] = lArr[i];
            count[lArr[i]] += rightCount;
            i++;
            k++;
        }
        while(j<n){
            idx[k] = rArr[j];
            j++;
            k++;
        }
    }
    public static void main(String[] args) {
        Solution s = new Solution();
        int[] nums = {5,2,6,1};
        System.out.println(s.countSmaller(nums));
    }
}