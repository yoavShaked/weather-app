import * as types from "./types";
import httpAction from "./httpRquest";
import * as weatherRequestsApi from "../apiRequests";

export const getDailyForcast = (locationId, meta = {}) =>
  httpAction({
    type: types.GET_DAILY_FORCAST,
    endpoint: weatherRequestsApi.getDailyForcast(locationId),
    meta,
  });

export const getLocationCurrentWeather = (locationId, meta = {}) =>
  httpAction({
    type: types.GET_CURRENT_WEATHER,
    endpoint: weatherRequestsApi.getLocationCurrentWeather(locationId),
    meta,
  });

export const getLocationAutocomplete = (locationQuery, meta = {}) =>
  httpAction({
    type: types.GET_LOCATION_AUTOCOMPLETE,
    endpoint: weatherRequestsApi.getLocationAutocomplete(locationQuery),
    meta,
  });

export const setInitialForcast = (meta = {}) =>
  httpAction({
    type: types.SET_INITIAL_FORCAST,
    endpoint: weatherRequestsApi.getLocationAutocomplete("Tel Aviv"),
    meta,
  });

  export const setUnitType = (source, dest) => ({
    type: types.SET_DEGREE_UNIT_TYPE,
    payload: {
      sourceUnitType: source,
      destUnitType: dest
    }
  });