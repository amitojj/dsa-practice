var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    let mapped = new Set();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false;
        }
        else {
            map.set(s[i], t[i]);
            if (mapped.has(t[i])) return false;
            mapped.add(t[i]);
        }
    }
    return true;
};
