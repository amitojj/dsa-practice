var threeSum = function (nums) {
  const nm = nums.sort((a, b) => a - b);
  const arr = [];
  for (let i = 0, n = nm.length; i < n - 2; i++) {
    if (nm[i] === nm[i - 1]) continue;
    let j = i + 1,
      k = n - 1,
      target = -nm[i];
    while (j < k) {
      if (nm[j] + nm[k] < target) {
         j++;
      }else if(nm[j] + nm[k] > target){
        k--;
      }else{
        arr.push([nm[i],nm[j],nm[k]])
        do {
            j++;
        }while(nm[j]===nm[j-1]);
      }
    }
  }
  return arr;
};
console.log(threeSum([0,0,0,0,0]));
