const fun = require("../src/module/permutations");

describe("test function Permutations", () => {
  test("With Input : 'a'", () => {
    const result = fun.Permutations("a");
    expect(result).toEqual(["a"]);
  });
  test("With Input : 'ab'", () => {
    const result = fun.Permutations("ab");
    expect(result).toEqual(["ab", "ba"]);
  });
  test("With Input : 'abc'", () => {
    const result = fun.Permutations("abc");
    expect(result).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"]);
  });
  test("With Input : 'aabb'", () => {
    const result = fun.Permutations("aabb");
    expect(result).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
});
