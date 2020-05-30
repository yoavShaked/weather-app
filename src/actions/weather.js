import * as types from "./types";
import httpAction from "./httpRquest";
import * as weatherRequestsApi from "../apiRequests";

export const getDailyForcast = ({ cityId, metric }, meta = {}) =>
  httpAction({
    type: types.GET_DAILY_FORCAST,
    endpoint: weatherRequestsApi.getDailyForcast(cityId, metric),
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
