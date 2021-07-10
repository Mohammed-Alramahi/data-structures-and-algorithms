const Node = require("./node");
class Stack {
  constructor() {
    this.top = null;
  }
  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (!this.top) {
      throw new Error("EmptyStack");
    }
    let tmp = this.top;
    this.top = tmp.next;
    tmp.next = null;
    return tmp.value;
  }
  peek() {
    if (!this.top) {
      throw new Error("EmptyStack");
    }
    return this.top.value;
  }
  isEmpty() {
    return !this.top ? true : false;
  }
}
module.exports = Stack;
