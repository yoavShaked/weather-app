import {UNIT_TYPE} from '../constants/titles';

const convertToF = (value) => (9 / 5) * value + 32;

const convertToC = (value) => (value - 32) * 5/ 9;

export const convertDegreeValue = (dest, value) => {
  switch (dest) {
    case UNIT_TYPE.FAHRENHEIT:
      return convertToF(value);
    case UNIT_TYPE.CELSIUS:
      return convertToC(value);
    default: return value;
  }
};
