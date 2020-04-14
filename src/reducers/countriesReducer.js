import * as types from "../actions/types";

const initialState = {};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CUNTRIES.START:
      return Object.assign(state, { isLoading: true });
    case types.GET_CUNTRIES.ERROR:
      return Object.assign(state, { isLoading: false });
    case types.GET_CUNTRIES.RESOLVED:
      return Object.assign(state, {
        isLoading: false,
        contries: action.payload,
      });
      default: return state;
  }
};

export default countriesReducer;
