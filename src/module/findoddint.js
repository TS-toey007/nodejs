const findOddInt = (array) => {
  const list_object = {};

  for (const value of array) {
    list_object[value] = (list_object[value] || 0) + 1;
  }

  for (const value in list_object) {
    if ((list_object[value] % 2) !== 0) {
      return Number(value);
    }
  }
};

module.exports = { findOddInt };
