const Node = require("./node");
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.size++;
    }
  }
  append(data) {
    let current;
    let node = new Node(data);
    if (!this.head) {
      this.head = new Node(data);
      this.size++;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
  toString() {
    let current = this.head;
    let str = "";
    while (current.next) {
      str += `{${current.value}}=>`;
      current = current.next;
    }
    str += `{${current.value}}=>Null`;
    return str;
  }
  kthFromEnd(k) {
    let current = this.head;
    if (k > this.size) {
      throw new Error("K is greater than the size");
    } else if (k < 0) {
      throw new Error("K sould be equal to or greater than zero");
    } else if (k == this.size) {
      throw new Error("K should be less than the size");
    } else {
      for (let i = 1; i < this.size - k; i++) {
        current = current.next;
      }
      return current.value;
    }
  }
}
module.exports = LinkedList;
