import * as types from "./types";

export const setUnitType = (unitType) => ({
  type: types.SET_DEGREE_UNIT_TYPE,
  payload: {
    unitType,
  },
});

export const setDayTime = (dayTime) => ({
  type: types.SET_DAY_TIME,
  payload: {
    dayTime,
  },
});
