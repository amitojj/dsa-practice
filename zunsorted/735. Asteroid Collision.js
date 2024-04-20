/**
 * @format
 * @param {number[]} asteroids
 * @return {number[]}
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
var asteroidCollision = function (asteroids) {
  let st = new Stack();
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] < 0) {
      while (!st.isempty() && st.top() > 0 && st.top() < -asteroids[i]) {
        st.pop();
      }
      if (st.isempty() || st.top() < 0) {
        st.push(asteroids[i]);
      } else if (st.top() === -asteroids[i]) {
        st.pop();
      }
    } else {
      st.push(asteroids[i]);
    }
  }
  let ans = [];
  while (!st.isempty()) {
    ans.push(st.top());
    st.pop();
  }
  return ans.reverse();
};
