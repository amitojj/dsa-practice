/** @format */

var minimumTotal = function (triangle) {
  let n = triangle.length;
  if (n === 1) return triangle[0][0];
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  function f(i,j){
    if (i===n-1) return triangle[i][j];
    return triangle[i][j] + Math.min(f(i+1,j),f(i+1,j+1));
  }
  function f_bu(i,j){
  for (let i=0 ;i<n;i++){
    dp[n-1][i] = triangle[n-1][i]
   }
   for (let i=n-2;i>=0;i--){
    for (let j=0;j<=i;j++){
      dp[i][j] = triangle[i][j] + Math.min(dp[i+1][j],dp[i+1][j+1])
    }
   }
  }

  return f(0,0)
};
