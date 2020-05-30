import * as types from "./types";

export const setUnitType = (source, dest) => ({
  type: types.SET_DEGREE_UNIT_TYPE,
  payload: {
    sourceUnitType: source,
    destUnitType: dest,
  },
});

export const setDayTime = (dayTime) => ({
  type: types.SET_DAY_TIME,
  payload: {
    dayTime,
  },
});
