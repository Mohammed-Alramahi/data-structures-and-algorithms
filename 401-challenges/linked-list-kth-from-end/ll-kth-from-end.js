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
  delKFromEnd(k) {
    let current = this.head;
    let tmp = this.head;
    for (let i = 1; i < this.size - k; i++) {
      current = current.next;
    }
    console.log(current.value);
    while (tmp.next) {
      if (tmp.next.value == current.value) {
        tmp.next = tmp.next.next;
      }
      else {
        tmp = tmp.next;
      }

    }
  }
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  isSorted() {
    let current = this.head;
    let asc = false;
    let des = false;
    while (current.next) {
      if (current.value < current.next.value) {
        asc = true;
        current = current.next;
      }
      else {
        asc = false;
        break;
      }
    }
    current = this.head;
    while (current.next) {
      if (current.value > current.next.value) {
        des = true;
        current = current.next;
      }
      else {
        des = false;
        break;
      }
    }
    return asc || des || false;
  }
}
module.exports = LinkedList;
