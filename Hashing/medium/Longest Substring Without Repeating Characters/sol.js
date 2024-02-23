var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let max = 0;
  for (let i = 0, n = s.length; i < n; i++) {
    if (set.has(s[i])) {
      if (max < set.size) max = set.size;
      for (const c of set) {
        set.delete(c);
        if (c === s[i]) {
          break;
        }
      }
      set.add(s[i]);
    } else {
      set.add(s[i]);
    }
  }
  if (max < set.size) max = set.size;
  return max;
};
console.log(lengthOfLongestSubstring("jbpnbwwd"));
