const convertToF = (value) => (9 / 5) * value + 32;

const convertToC = (value) => (value - 32) * 5/ 9;

export const convertDegreeValue = (dest, value) => {
  switch (dest) {
    case "F":
      return convertToF(value);
    case "C":
      return convertToC(value);
    default: return value;
  }
};
