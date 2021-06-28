const insertShiftArray = require("../array-shift/array-shift");
describe("shift array test", () => {
  test("The second parameter should be properly inserted at the middle of the array ", () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
    expect(insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
  });
});
