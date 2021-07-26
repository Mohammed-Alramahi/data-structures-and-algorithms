const binarySearch = require("./array-binary-search");
xdescribe("testing binary search", () => {
  test("it should apply the binary search algorithm", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });
});
