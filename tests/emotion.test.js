const fun = require("../src/module/emotion");

describe(`test function emotion`, () => {
  test(`With Input : [":)", ";(", ";}", ":-D"]`, () => {
    const result = fun.emotion([":)", ";(", ";}", ":-D"]);
    expect(result).toEqual(2);
  });
  test(`With Input : [";D", ":-(", ":-)", ";~)"]`, () => {
    const result = fun.emotion([";D", ":-(", ":-)", ";~)"]);
    expect(result).toEqual(3);
  });
  test(`With Input : [";]", ":[", ";*", ":$", ";-D"]`, () => {
    const result = fun.emotion([";]", ":[", ";*", ":$", ";-D"]);
    expect(result).toEqual(1);
  });
});
