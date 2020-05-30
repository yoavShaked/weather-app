import { get, set, flow, includes } from "lodash/fp";
import * as types from "../actions/types";

const initialState = {
  sourceUnitType: "F",
  destUnitType: "C",
  dayTime: "Day",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DEGREE_UNIT_TYPE: {
      return flow([
        set("sourceUnitType", get("sourceUnitType", action.payload)),
        set("destUnitType", get("destUnitType", action.payload)),
      ])(state);
    }
    case types.SET_DAY_TIME: {
      return set("dayTime", get("dayTime", action.payload), state);
    }
    default: {
      return state;
    }
  }
};
