const convertToF = (source, value) => {
  switch (source) {
    case "C":
      return (9 / 5) * value + 32;
    case "K":
      return (9 / 5) * value - 459.67;
    case "R":
      return value - 459.67;
    default:
      return value;
  }
};

const convertToC = (source, value) => {
  switch (source) {
    case "F":
      return ((value - 32) * 5) / 9;
    case "K":
      return value - 273.15;
    case "R":
      return ((value - 491.67) * 5) / 9;
    default:
      return value;
  }
};

export const convertDegreeValue = (source, dest, value) => {
  switch (dest) {
    case "F":
      return convertToF(source, value);
    case "C":
      return convertToC(source, value);
    default: return value;
  }
};

export const getSourceDestUnitType = (changedUnitType, source, dest) => {
  switch (changedUnitType) {
    case source:
      return { source: dest, dest: source };
    case dest:
      return { source, dest };
  }
};