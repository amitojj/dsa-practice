
var buildArray = function (target, n) {

  let arr = [];
  let x =0
  for (let i = 1; i <= n && x < target.length; i++) {
    if (target[x] == i) {
      x++;
      arr.push("Push");
    } else {
      arr.push("Push");
      arr.push("Pop");
    }
  }
  return arr   
}
