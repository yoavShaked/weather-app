import { get, set } from "lodash/fp";
import {UNIT_TYPE, DAY_TIME} from '../constants/titles';
import * as types from "../actions/types";

const initialState = {
  unitType: UNIT_TYPE.CELSIUS
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DEGREE_UNIT_TYPE: {
      return set("unitType", get("unitType", action.payload), state);
    }
    default: {
      return state;
    }
  }
};
