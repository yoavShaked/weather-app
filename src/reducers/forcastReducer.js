import { set, flow, get } from "lodash/fp";

import * as types from "../actions/types";
import { mock_locationAutocomplete } from "../apiRequests";

const initialState = {
  isLoading: false,
  dailyForcast: null,
  cityName: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DAILY_FORCAST.START: {
      const newState = set("isLoading", true, state);
      console.log("next state", newState);
      return newState;
    }
    case types.GET_DAILY_FORCAST.RESOLVED: {
      const { meta, payload } = action;

      const newState = flow([
        set("isLoading", false),
        set("dailyForcast", payload),
        set("cityName", get("cityName", meta)),
      ])(state);
      console.log("next state", newState);
      return newState;
    }
    default:
      return state;
  }
};
