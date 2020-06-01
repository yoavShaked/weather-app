import * as types from "./types";
import httpAction from "./httpRquest";
import * as weatherRequestsApi from "../apiRequests";

export const addToFavorites = ({ cityId, cityName }) =>
  httpAction({
    type: types.ADD_TO_FAVORITES,
    payload: {
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

export const fetchFavoritesWeather = (favorites, meta = {}) =>
  httpAction({
    type: types.GET_FAVORITES_WEATHER,
    endpoint: weatherRequestsApi.getFavoritesWeather(favorites),
    meta,
    errorMessage: "Faild to fetch favorites locations weather.",
  });
