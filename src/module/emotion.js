const smiley = (array) => {
  const eyes = [":", ";"];
  const noses = ["~", "-"];
  const mouths = ["D", ")"];

  if (array.length === 2) {
    if (eyes.includes(array[0]) && mouths.includes(array[1])) {
      return 1;
    }
  } else if (array.length === 3) {
    if (
      eyes.includes(array[0]) &&
      noses.includes(array[1]) &&
      mouths.includes(array[2])
    ) {
      return 1;
    }
  }
};

const emotion = (array) => {
  let result = 0;

  for (let index in array) {
    if (smiley(array[index])) {
      result = result + 1;
    }
  }

  return result;
};

module.exports = {
  emotion,
};
