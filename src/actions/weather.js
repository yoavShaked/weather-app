import { set } from "lodash/fp";
import * as types from "./types";
import httpAction from "./httpRquest";
import * as weatherRequestsApi from "../apiRequests";

export const getDailyForcast = ({ cityId, metric }, meta = {}) =>
  httpAction({
    type: types.GET_DAILY_FORCAST,
    endpoint: weatherRequestsApi.getDailyForcast(cityId, metric),
    meta: set("cityId", cityId, meta),
    errorMessage: "Faild to fetch daily forcast.",
  });

export const getLocationCurrentWeather = (locationId, meta = {}) =>
  httpAction({
    type: types.GET_CURRENT_WEATHER,
    endpoint: weatherRequestsApi.getLocationCurrentWeather(locationId),
    meta,
    errorMessage: "Faild to fetch weather info.",
  });

export const getLocationAutocomplete = (locationQuery, meta = {}) =>
  httpAction({
    type: types.GET_LOCATION_AUTOCOMPLETE,
    endpoint: weatherRequestsApi.getLocationAutocomplete(locationQuery),
    meta,
    errorMessage: "Faild to fetch location options.",
  });

export const setInitialForcast = (meta = {}) =>
  httpAction({
    type: types.SET_INITIAL_FORCAST,
    endpoint: weatherRequestsApi.getLocationAutocomplete("Tel Aviv"),
    meta,
    errorMessage: "Faild to location options.",
  });
