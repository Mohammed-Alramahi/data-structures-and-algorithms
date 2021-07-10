const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }
  dequeue() {
    let node = this.front;
    if (this.isEmpty()) {
      throw new Error("EmptyQueue");
    }
    this.front = this.front.next;
    if (this.isEmpty()) {
      this.back = null;
    }
    return node.value;
  }
  isEmpty() {
    return !this.front ? true : false;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("EmptyQueue");
    } else {
      return this.front.value;
    }
  }
}
module.exports = Queue;
