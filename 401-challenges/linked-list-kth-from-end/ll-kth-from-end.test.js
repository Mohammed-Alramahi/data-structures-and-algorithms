const LL = require("./ll-kth-from-end");
describe("LINKED LIST KTH TEST", () => {
  it("should throw an error when k is greater than length of linked list", () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(() => list.kthFromEnd(4)).toThrow("K is greater than the size");
  });

  it("should throw an error when k and the length of linked list are the same", () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(() => list.kthFromEnd(3)).toThrow("K should be less than the size");
  });

  it("should throw an error when k is not a positive integer", () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(() => list.kthFromEnd(-3)).toThrow(
      "K sould be equal to or greater than zero"
    );
  });

  it("should work for linked list with size of 1", () => {
    let list = new LL();
    list.append(1);
    expect(() => list.kthFromEnd(1)).toThrow("K should be less than the size");
    expect(list.kthFromEnd(0)).toEqual(1);
  });

  it("should return kth value from end of linked list", () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.append(7);
    expect(list.kthFromEnd(3)).toEqual(4);
  });
});
