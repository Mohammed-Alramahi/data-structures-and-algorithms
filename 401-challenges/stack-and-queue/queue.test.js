const Queue = require("./queue");
xdescribe("QUEUE", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  it("Can successfully enqueue into a queue", () => {
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    queue.enqueue("a");
    expect(queue.peek()).toEqual("a");
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
    expect(queue.front).toBeNull();
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    expect(() => queue.dequeue()).toThrow("EmptyQueue");
    expect(() => queue.peek()).toThrow("EmptyQueue");
  });
});
