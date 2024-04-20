/** @format */
class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}
var MyLinkedList = function () {
  this.head= null;
  this.length= 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let current = this.head
  for (let i = 0; i < index; i++) {
    if (current == null) {
      return -1
    }
    current = current.next
  }
  return current.val
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

  let node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if(this.head == null){
    this.addAtHead(val);
    return;
  }
  let node = new Node(val);
  let current = this.head;
  while(current.next){
    current = current.next
  }
  current.next = node

};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
 

  let node = new Node(val)
  let current = this.head
  for (let i = 0; i < index-1||current!=null; i++) {
    current = current.next
  }
  node.next = current.next
  current.next = node
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if(index<0||index>=this.getLength()) return
  if(index==0){
    this.head = this.head.next
    return
  }
  let current = this.head
  for (let i = 0; i < index-1; i++) {
    current = current.next
  }
  current.next = current.next.next
  
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
