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
    while (current.next) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }
    if (current.value == value) {
      return true;
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
  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;

    while (current.next.value !== value) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;

    return this;
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;

    while (current.value !== value) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;

    return this;
  }

}

module.exports = LinkedList;
