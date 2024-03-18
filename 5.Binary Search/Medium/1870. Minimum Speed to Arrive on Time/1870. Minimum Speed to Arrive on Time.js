var minSpeedOnTime = function (dist, hour) {
  let l = 1;
  let r = 10 ** 7;
  let n = dist.length;
  if (n -1 >= hour) return -1;
  while(l<r){
    let mid = Math.floor((l+r)/2);
    if (canReach(dist, hour, mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

function canReach(dist, hour, speed) {
  let time = 0;
  for (let i = 0; i < dist.length - 1; i++) {
    time += Math.ceil(dist[i] / speed);
  }
  time += dist[dist.length - 1] / speed;
  return time <= hour;
}
let dist = [1, 1],
hour = 1.0;
console.log(minSpeedOnTime(dist, hour)); 