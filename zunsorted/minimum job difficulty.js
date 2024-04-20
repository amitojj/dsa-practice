var minDifficulty = function(jd, d) {
    let n = jd.length;
    if (d>n) return -1
    return solve(jd,d,0)

    function solve(jd, d,idx){
        if(d===1){
          let max = 0;
          for(let i=idx;i<n;i++){
              max = Math.max(max,jd[i])
          }
          return max;
        }
        let max = 0;
        let res = Infinity;
        for(let i=idx;i<=n-d;i++){
            max = Math.max(max,jd[i]);
            res = Math.min(res,max+solve(jd,d-1,i+1))
        }
        return res;
     
    }
    
};