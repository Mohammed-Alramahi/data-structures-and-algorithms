const LinkedList = require("../ll");
describe("Linked List", () => {
  it("Creates an empty Linked List upon instantiation", () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it("Appends a node to the list", () => {
    let list = new LinkedList();
    let first = 1;
    let second = 2;

    list.append(first);
    expect(list.head.value).toEqual(1);

    list.append(second);
    list.append(3);
    list.append(4);
  });

  it("Inserts a node to the list", () => {
    let list = new LinkedList();
    let first = 1;
    let second = 2;

    list.append(first);
    list.insert(second);
    expect(list.head.value).toEqual(2);
  });
  it("Inserts a multiple nodes to the list", () => {
    let list = new LinkedList();
    let first = 1;
    let second = 2;

    list.insert(first);
    list.insert(second);
    expect(list.head.value).toEqual(2);
  });
  it("Return trues when searching for a value in the linked list that exists", () => {
    let list = new LinkedList();

    expect(list.includes(13)).toEqual(false);

    list.insert(13);

    expect(list.includes(13)).toEqual(true);
  });

  it("Return false when searching for a value in the linked list that does not exist", () => {
    let list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);

    expect(list.includes("Something ain't there")).toEqual(false);
  });

  it("Returns the correct string representation of linked list", () => {
    let list = new LinkedList();
    expect(list.toString()).toEqual("Empty!");

    list.append(7);
    expect(list.toString()).toEqual("{ 7 } -> NULL");

    list.append(17);
    expect(list.toString()).toEqual("{ 7 } -> { 17 } -> NULL");
  });
});
