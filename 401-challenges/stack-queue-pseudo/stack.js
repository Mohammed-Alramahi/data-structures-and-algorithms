const Node = require("./node");
class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    let tmp = this.top;
    this.top = tmp.next;
    tmp.next = null;
    return tmp.value;
  }
  isEmpty() {
    return !this.top ? true : false;
  }
}
module.exports = Stack;
