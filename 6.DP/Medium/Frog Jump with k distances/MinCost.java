import java.util.Arrays;

public class MinCost {
    public static int minimizeCost(int n, int k, int []height){
      int []dp = new int[n+1];
      Arrays.fill(dp, -1);
      return f(n, k, height,1, dp);
    }
    public static int f(int n, int k, int []height, int i, int []dp){
      if(i == n){
        return 0;
      }
      if(dp[i] != -1){
        return dp[i];
      }
      int min = Integer.MAX_VALUE;
      for(int j = 1; j <= k; j++){
        if(i+j <= n){
          min = Math.min(min, Math.abs(height[i+j-1] - height[i-1]) + f(n, k, height, i+j, dp));
        }
      }
      return dp[i]= min;
    }
    public static int f_bu(int n, int k, int []height){
      int []dp = new int[n+1];
      dp[1] = 0;
      dp[2] = Math.abs(height[1] - height[0]);
      for(int i = 3; i <= n; i++){
        int min = Integer.MAX_VALUE;
        for(int j = 1; j <= k; j++){
          if(i-j >= 1){
            min = Math.min(min, Math.abs(height[i-1] - height[i-j-1]) + dp[i-j]);
          }
        }
        dp[i] = min;
      }
      return dp[n];
    }
}