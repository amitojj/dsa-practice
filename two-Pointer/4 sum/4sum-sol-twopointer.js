var fourSum = function (nums, target) {
  const nm = nums.sort((a, b) => a - b);
  const n = nm.length;
  arr = [];
  for (let a = 0; a < n - 3; a++) {
    if (a > 0 && nm[a] === nm[a - 1]) continue;
    for (let b = a + 1; b < n - 2; b++) {
      if (b > a+1 && nm[b] === nm[b - 1]) continue;
      let c = b + 1;
      let d = n - 1;
        while (c < d) {
        let sum = nm[a]+nm[b]+nm[c]+nm[d];
        if (sum>target){
            d--;
        }else if (sum<target){
            c++;
        }else{
            arr.push([nm[a], nm[b], nm[c], nm[d]]);
            do {
                c++
            } while (nm[c]===nm[c-1]);
             do {
               d--;
             } while (nm[d] === nm[d + 1]);
        }

      }
    }
  }
  return arr;
};
console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
