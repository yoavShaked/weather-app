import { set, flow, get } from "lodash/fp";

import * as types from "../actions/types";
import { mock_locationAutocomplete } from "../apiRequests";

const initialState = {
  isLoading: false,
  weatherForcast: [],
  cityName: "",
  description: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DAILY_FORCAST.START: {
      const newState = set("isLoading", true, state);
      return newState;
    }
    case types.GET_DAILY_FORCAST.RESOLVED: {
      const { meta, payload } = action;
      const newState = flow([
        set("isLoading", false),
        set("weatherForcast", get("DailyForecasts", payload)),
        set("cityName", get("cityName", meta)),
        set("description", get(["Headline", "Text"], payload))
      ])(state);
      return newState;
    }
    default: {
      return state;
    }
  }
};
