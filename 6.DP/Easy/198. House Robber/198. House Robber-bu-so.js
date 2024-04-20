/** @format */
//space optimised
var rob = function (nums) {
  let p2=nums[0];
  let p1=Math.max(nums[0],nums[1]);
  if(nums.length===1) return p2;
  if(nums.length===2) return Math.max(p1,p2);
  for(let i=2;i<nums.length;i++){
    let curr = Math.max(nums[i]+p2,p1);
    p2=p1;
    p1=curr;
  }
  return p1;
};
//time O(n) | space O(1)