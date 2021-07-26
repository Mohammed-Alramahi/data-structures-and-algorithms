const Stack = require("./stack");

xdescribe("STACK", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("Can successfully push onto a stack", () => {
    stack.push(5);
    expect(stack.peek()).toEqual(5);
  });
  it("Can successfully push multiple values onto a stack", () => {
    stack.push(5);
    stack.push(6);
    stack.push(7);
    expect(stack.peek()).toEqual(7);
  });
  it("Can successfully pop off the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
  it("Can successfully peek the next item on the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });
  it("Can successfully instantiate an empty stack", () => {
    expect(stack.top).toBeNull();
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    expect(() => stack.pop()).toThrow("EmptyStack");
    expect(() => stack.peek()).toThrow("EmptyStack");
  });
});
