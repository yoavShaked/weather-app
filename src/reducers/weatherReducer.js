import { set, flow, get } from "lodash/fp";

import * as types from "../actions/types";
import { mock_locationAutocomplete } from "../apiRequests";

const initialState = {
  isLoading: false,
  suggestedLocations: [],
  errorMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOCATION_AUTOCOMPLETE.START: {
      const newState = flow([set('isLoading', true), set('errorMessage', '')])(state);
      return newState;
    }
    case types.GET_LOCATION_AUTOCOMPLETE.RESOLVED: {
      const newState = flow([
        set("isLoading", false),
        set('errorMessage', ''),
        set("suggestedLocations", action.payload),
      ])(state);
       return newState;
    }
    case types.GET_LOCATION_AUTOCOMPLETE.ERROR: {
      return flow([
        set("isLoading", false),
        set("errorMessage", get("errorMessage", action)),
      ])(state);
    }
    default:
      return state;
  }
};
