'use strict';

const LinkedList = require('./linkedlist');


class HashMap {

    constructor(size) {
        this.storage = new Array(size);
        this.size = size;
    }

    hash(key) {
        return key.split('').reduce((acc, cur) => {
            return acc + cur.charCodeAt(0);
        }, 0) * 19 % this.size;
    }

    add(key, val) {
        let hash = this.hash(key);

        if (!this.storage[hash]) {
            let ll = new LinkedList();
            ll.add([key, val]);
            this.storage[hash] = ll;
        } else {
            this.storage[hash].add([key, val]);
        }
    }

    contains(key) {
        let hash = this.hash(key);
        if (!this.storage[hash]) return false;
        let ll = this.storage[hash];
        if (!ll.head) {
            return false;
        } else {
            let current = ll.head;
            if (current.val[0] === key) return true;

            while (current.next) {
                current = current.next;
                if (current.val[0] === key) return true;
            }

            if (current.next && current.next.val[0] === key) return true;
        }
        return false;
    }

    get(key) {
        if (!this.contains(key)) return null;

        let hash = this.hash(key);
        let linkedList = this.storage[hash];
        let current = linkedList.head;

        const results = linkedList.getLinkedList().filter(pair => pair[0] === key);

        if (results.length > 1) {
            return results.map(pair => pair[1]);
        }

        if (current.val[0] === key) return current.val[1];

        while (current.next) {
            current = current.next;
            if (current.val[0] === key) return current.val[1];
        }

        if (current.next.val[0] === key) return current.val[1];

    }

}

module.exports = HashMap;