const arr = new Array(100000).fill(new Array(100000).fill(0));
console.time("index");
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j];
  }
}
console.timeEnd("index");

console.time("shift");
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i].shift();
  }
}
console.timeEnd("shift");
