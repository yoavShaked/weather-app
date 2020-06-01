import * as types from "./types";
import httpAction from "./httpRquest";
import * as weatherRequestsApi from "../apiRequests";

export const addToFavorites = ({ cityId, cityName }) =>
  httpAction({
    type: types.ADD_TO_FAVORITES,
    endpoint: weatherRequestsApi.getLocationCurrentWeather(cityId),
    meta: {
      cityId,
      cityName,
    },
  });

export const removeFromFavorites = (cityName) => ({
  type: types.REMOVE_FROM_FAVORITES,
  payload: {
    cityName,
  },
});
