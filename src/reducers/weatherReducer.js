import { set, flow } from "lodash/fp";

import * as types from "../actions/types";
import { mock_locationAutocomplete } from "../apiRequests";

const initialState = {
  isLoading: false,
  suggestedLocations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOCATION_AUTOCOMPLETE.START: {
      const newState = set("isLoading", true, state);
      return newState;
    }
    case types.GET_LOCATION_AUTOCOMPLETE.RESOLVED: {
      const newState = flow([
        set("isLoading", false),
        set("suggestedLocations", action.payload),
      ])(state);
       return newState;
    }
    case types.GET_LOCATION_AUTOCOMPLETE.ERROR: {
      return Object.assign(
        state,
        {},
        {
          isLoading: false,
          suggestedLocations: [...mock_locationAutocomplete],
          error: true,
        }
      );
    }
    default:
      return state;
  }
};
