const fun = require("../src/module/findoddint");

describe("test function findOddInt", () => {
  test("With Input : [7]", () => {
    const result = fun.findOddInt([7]);
    expect(result).toEqual(7);
  });
  test("With Input : [0]", () => {
    const result = fun.findOddInt([0]);
    expect(result).toEqual(0);
  });
  test("With Input : [1, 1, 2]", () => {
    const result = fun.findOddInt([1, 1, 2]);
    expect(result).toEqual(2);
  });
  test("With Input : [0, 1, 0, 1, 0]", () => {
    const result = fun.findOddInt([0, 1, 0, 1, 0]);
    expect(result).toEqual(0);
  });
  test("With Input : [0]", () => {
    const result = fun.findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
    expect(result).toEqual(4);
  });
});
