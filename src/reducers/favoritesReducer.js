import { filter, set } from "lodash/fp";
import * as types from "../actions/types";

const initialState = {
  favorites: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITES: {
      const { cityId, cityName } = action.payload;

      const newState = set(
        ["favorites", cityName],
        { cityId, cityName },
        state
      );

      return newState;
    }
    case types.REMOVE_FROM_FAVORITES: {
      const { cityName } = action.payload;
      const { favorites } = state;
      delete favorites[cityName];

      const newState = set("favorites", {...favorites}, state);
      return newState;
    }
    default:
      return state;
  }
};
