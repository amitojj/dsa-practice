var findSubstring = function (s, words) {
  // create a freq map from words array
  let freqMap = new Map();
  words.forEach((element) => {
    freqMap.set(element, (freqMap.get(element) || 0) + 1);
  });

  //variables
  const sl = s.length;
  const wal = words.length;
  let result = [];
  const xl = words[0].length;
  let i = 0;
  let tempMap = new Map(freqMap);
  //early exit scenerio
  if (wal === 0 || sl === 0) {
    return [];
  }
  //iterate string 
  while (i <= sl - xl * wal) { /// valid substring size is xl*wal
    let j = i;
    // extract substring
    let ss = s.substr(i, xl);
    //check if substring is in words
    if (tempMap.has(ss)) {
      //iterate over next n words to check if it makes a valid substring
      while (j < i + xl * wal) {
        let ss = s.substr(j, xl);
        if (tempMap.has(ss)) {
          //reduce freq from temp map of the found word and delete key if value =0
          tempMap.set(ss, tempMap.get(ss) - 1);
          if (tempMap.get(ss) === 0) tempMap.delete(ss);
          //move j to start of next word
          j += xl;
          continue;
        } else {
          //if any nextt word doesnt match take exit
          break;
        }
      }
      //check if a valid ssubstring was found and add its index to reesult
      if (tempMap.size === 0) {
        result.push(i);
      }
      //reset temp map
      tempMap = new Map(freqMap);
    }
    i++;
  }
  return result;
};
let s = "wordgoodgoodgoodbestword",
  words = ["word", "good", "best", "good"];
console.log(findSubstring(s, words));
