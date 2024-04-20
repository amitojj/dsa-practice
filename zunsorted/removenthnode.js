/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @format
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let start = new ListNode(0);
  start.next = head;
  let i = start;
  let j = start;
  for (let k = 0; k <= n; k++) {
    i = i.next;
  }
  while (i) {
    i = i.next;
    j = j.next;
  }
  j.next = j.next.next;
  return start.next;
};

