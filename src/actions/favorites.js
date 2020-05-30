import * as types from "./types";

export const addToFavorites = ({ cityId, cityName }) => ({
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
