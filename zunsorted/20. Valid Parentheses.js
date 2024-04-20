/**
 * @format
 * @param {string} s
 * @return {boolean}
 */
class Stack {
  // private properties
  #arr;

  constructor() {
    this.#arr = [];
  }

  push(element) {
    this.#arr.push(element);
  }

  pop() {
    this.#arr.pop();
  }

  top() {
    return this.#arr[this.#arr.length - 1]; // element present at the last index is the top most element
  }
  isempty() {
    return this.#arr.length === 0;
  }
}
var isValid = function (s) {
  let st = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      st.push(s[i]);
    } else if (
      (s[i] === ")" && st.top() === "(") ||
      (s[i] === "}" && st.top() === "{") ||
      (s[i] === "]" && st.top() === "[")
    ) {
      st.pop();
    } else {
      return false;
    }
  }
  if (st.isempty()) {
    return true;
  } else {
    return false;
  }

};
