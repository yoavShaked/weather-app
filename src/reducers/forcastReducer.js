import { set, flow, get, forEach, map } from "lodash/fp";

import { convertDegreeValue } from "../utils/degrees";
import * as types from "../actions/types";
import {UNIT_TYPE} from '../constants/titles';
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
        set("weatherForcast", map(({Date, Day, Night, Temperature}) => ({
          date: Date, Day, Night,
          temperature: {
            max: {
              unit: get(['Maximum', 'Unit'], Temperature) === 'C' ? UNIT_TYPE.CELSIUS : UNIT_TYPE.FAHRENHEIT,
              value: get(['Maximum', 'Value'], Temperature)
            },
            min: {
              unit: get(['Minimum', 'Unit'], Temperature) === 'C' ? UNIT_TYPE.CELSIUS : UNIT_TYPE.FAHRENHEIT,
              value: get(['Minimum', 'Value'], Temperature)
            }
          }
        }), get("DailyForecasts", payload))),
        set("cityName", get("cityName", meta)),
        set("description", get(["Headline", "Text"], payload))
      ])(state);
      return newState;
    }
    case types.SET_DEGREE_UNIT_TYPE: {
      // const unitType = get("unitType", action.payload);
      // const weatherForcast = forEach((weatherItem) => flow([set])(weatherItem), state.weatherForcast);
    }
    default: {
      return state;
    }
  }
};
