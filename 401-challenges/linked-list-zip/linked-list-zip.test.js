const LL = require("./linked-list");
const zipLists = require("./linked-list-zip");
describe("Linked Lists Zip", () => {
  it("should zip two linked lists of equal size", () => {
    let list1 = new LL();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    let list2 = new LL();
    list2.append(9);
    list2.append(8);
    list2.append(7);
    const zippedList = zipLists(list1, list2);
    expect(zippedList.toString()).toEqual(
      "{ 1 } -> { 9 } -> { 2 } -> { 8 } -> { 3 } -> { 7 } -> NULL"
    );
  });

  it("should zip two linked lists of different size", () => {
    let list1 = new LL();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    let list2 = new LL();
    list2.append(9);
    list2.append(8);
    const zippedList = zipLists(list1, list2);
    expect(zippedList.toString()).toEqual(
      "{ 1 } -> { 9 } -> { 2 } -> { 8 } -> { 3 } -> NULL"
    );
  });

  it("should zip two linked lists of size 1", () => {
    let list1 = new LL();
    list1.append(1);
    let list2 = new LL();
    list2.append(9);
    const zippedList = zipLists(list1, list2);
    expect(zippedList.toString()).toEqual("{ 1 } -> { 9 } -> NULL");
  });
});
