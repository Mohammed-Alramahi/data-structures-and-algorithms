const Node = require("./node");
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    this.head = new Node(value, this.head);
  }
  append(value) {
    let current;
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  includes(value) {
    if (!this.head) {
      return false;
    }
    let current = this.head;
    while (current) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString() {
    if (!this.head) {
      return "Empty!";
    }
    let strRepr = "";
    let current = this.head;
    while (current.next) {
      strRepr += `{ ${current.value} } -> `;
      current = current.next;
    }
    strRepr += `{ ${current.value} } -> NULL`;
    return strRepr;
  }
}
module.exports = LinkedList;
