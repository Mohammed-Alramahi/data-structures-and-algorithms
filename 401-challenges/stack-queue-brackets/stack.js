const Node = require('./node');
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
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        }
        let tmp = this.top;
        this.top = tmp.next;
        tmp.next = null;
        return tmp.value;
    }

    isEmpty() {
        return !this.top ? true : false;
    }
    peek() {
        return this.top.value;
    }

}
module.exports = Stack;