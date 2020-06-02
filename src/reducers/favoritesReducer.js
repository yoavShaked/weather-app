import { set, get, isArray } from "lodash/fp";
import * as types from "../actions/types";

const initialState = {
  favorites: null,
};

const mapFavoriteWeather = (recivedWeather) => ({
    iconId: get("WeatherIcon", recivedWeather),
    currentTemperature: get("ApparentTemperature", recivedWeather),
    windSpeed: `${get(
      ["Wind", "Speed", "Metric", "Value"],
      recivedWeather
    )} ${get(["Wind", "Speed", "Metric", "Unit"], recivedWeather)}`,
    windDirction: get(["Wind", "Direction", "Localized"], recivedWeather),
    weatherTitle: get("WeatherText", recivedWeather),
    tempratureSummary: {
      min: get(
        ["TemperatureSummary", "Past24HourRange", "Minimum"],
        recivedWeather
      ),
      max: get(
        ["TemperatureSummary", "Past24HourRange", "Maximum"],
        recivedWeather
      ),
    },
    visibilty: `${get(["Visibility", "Metric", "Value"], recivedWeather)} ${get(
      ["Visibility", "Metric", 'Unit'],
      recivedWeather
    )}`,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITES.RESOLVED: {
      const { payload, meta } = action;
      const cityName = get("cityName", meta);

      if(typeof cityName === 'string') {
        return set(
          ["favorites", cityName],
          {
            cityId: get("cityId", meta),
            cityName,
            ...mapFavoriteWeather(isArray(payload) ? payload[0] : payload),
          },
          state
        );
      }
      return state;
    }
    case types.ADD_TO_FAVORITES.ERROR: {
      return state;
    }
    case types.REMOVE_FROM_FAVORITES: {
      const { cityName } = action.payload;
      const { favorites } = state;
      delete favorites[cityName];

      const newState = set("favorites", { ...favorites }, state);
      return newState;
    }
    default:
      return state;
  }
};
