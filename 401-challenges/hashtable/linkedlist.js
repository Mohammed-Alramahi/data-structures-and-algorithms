const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    getLinkedList() {
        if (!this.head) return 'there is no list';
        let current = this.head;
        let list = [];
        while (current) {
            list.push(current.val);
            current = current.next;
        }
        return list;
    }

}
module.exports = LinkedList;