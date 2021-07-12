const Node = require("./node");
//test
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
    this.top = tmp.next ;
  }
}
module.exports = Stack;
