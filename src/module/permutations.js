const Permutations = (text) => {
  const array = [...text];

  if (array.length === 0) return;

  if (array.length === 1) {
    return array;
  }

  const list_array = [];

  array.forEach((value, index) => {
    const char = array.slice(0, index).concat(array.slice(index + 1));
    const return_data_permutations = Permutations(char);

    for (let data of return_data_permutations) {
      list_array.push(value + data);
    }
  });

  const result = [...new Set(list_array)];
  
  return result;
};

module.exports = {
  Permutations,
};
