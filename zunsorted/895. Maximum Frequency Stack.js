/**
 * Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:

FreqStack() constructs an empty frequency stack.
void push(int val) pushes an integer val onto the top of the stack.
int pop() removes and returns the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
 

Example 1:

Input
["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]
Output
[null, null, null, null, null, null, null, 5, 7, 5, 4]

Explanation
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
 */


var FreqStack = function() {
  this.maxfreq = 0;
  this.freq = new Map();
  this.elmap = new Map();
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
     let freq = this.freq.get(val) || 0;
     this.freq.set(val, freq + 1);
     if (freq + 1 > this.maxfreq) {
       this.maxfreq = freq + 1;
     }
     let arr = this.elmap.get(freq + 1) || [];
     arr.push(val);
     this.elmap.set(freq + 1, arr);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
 let frqarr = this.elmap.get(this.maxfreq); 
 if (!frqarr) {
   return null; 
 }
 let val = frqarr.pop();
 let freq = this.freq.get(val);
 this.freq.set(val, freq - 1);
 if (frqarr.length === 0) {
   this.maxfreq--;
 }
 return val;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */