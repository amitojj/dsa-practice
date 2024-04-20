/** @format */

var maxProfit = function (k, prices) {
 return f(0,1,prices,k);
  
 function f(i,buy,prices,k){
    if(i===prices.length || k===0) return 0;
    let profit = 0;
    if (buy){
      let ans = -prices[i] + f(i+1,0,prices,k - 1);
      let skip = f(i+1,1,prices,k );
      profit = Math.max(ans,skip);
    }else{
      let ans = prices[i] + f(i+1,1,prices,k - 1);
      let skip = f(i+1,0,prices,k);
      profit = Math.max(ans,skip);
    }
    return profit ;
  };
};
