import * as types from "./types";
import httpAction from "./httpRquest";
import * as weatherRequestsApi from "../apiRequests";

export const getDailyForcast = (locationId) =>
  httpAction({
    type: types.GET_DAILY_FORCAST,
    request: weatherRequestsApi.getDailyForcast(locationId),
  });

export const getLocationCurrentWeather = (locationId) =>
  httpAction({
    type: types.GET_CURRENT_WEATHER,
    request: weatherRequestsApi.getLocationCurrentWeather(locationId),
  });

export const getLocationAutocomplete = (locationQuery) =>
  httpAction({
    type: types.GET_LOCATION_AUTOCOMPLETE,
    request: weatherRequestsApi.getLocationAutocomplete(locationQuery),
  });
