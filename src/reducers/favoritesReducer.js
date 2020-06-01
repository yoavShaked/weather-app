import { set, get } from "lodash/fp";
import * as types from "../actions/types";

const initialState = {
  favorites: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITES.RESOLVED: {
      const { payload, meta } = action;
      const cityName = get("cityName", meta);

      return set(
        ["favorites", cityName],
        {
          cityId: get("cityId", meta),
          cityName,
          ...payload,
        },
        state
      );
    }
    case types.ADD_TO_FAVORITES.ERROR: {
      const { payload } = action;
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
