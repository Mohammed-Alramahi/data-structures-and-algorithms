const Stack = require('./stack');
class Queue {
    constructor() {
        this.innerStack = new Stack();
        this.outerStack = new Stack();
    }
    isEmpty() {
        return (this.innerStack.isEmpty() && this.outerStack.isEmpty());
    }
    enqueue(value) {
        this.innerStack.push(value);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("EmptyQueue");
        }
        while (this.innerStack.top) {
            this.outerStack.push(this.innerStack.pop());
        }
        return this.outerStack.pop();
    }

}
module.exports = Queue;
