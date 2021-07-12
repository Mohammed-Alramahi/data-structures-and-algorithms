const Queue = require("./queue");
describe("QUEUE", () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
    });
    it("Can successfully enqueue into a queue", () => {
        queue.enqueue(1);
        expect(queue.innerStack).toBeTruthy();
    });
    it("Can successfully enqueue multiple values into a queue", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.innerStack).toBeTruthy();
    });
    it("Can successfully dequeue out of a queue the expected value", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(1);
    });
    it("Can successfully empty a queue after multiple dequeues", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
    });
    it("Can successfully instantiate an empty queue", () => {
        expect(queue.innerStack.top).toBeNull();
    });
    it("Calling dequeue or peek on empty queue raises exception", () => {
        expect(() => queue.dequeue()).toThrow("EmptyQueue");
    });
});
