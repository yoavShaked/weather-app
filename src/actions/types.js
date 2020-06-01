const createAsyncActionType = (type) => ({
  START: `${type}_START`,
  RESOLVED: `${type}_RESOLVED`,
  ERROR: `${type}_ERROR`,
});

//weather
export const GET_DAILY_FORCAST = createAsyncActionType("GET_DAILY_FORCAST");
export const GET_CURRENT_WEATHER = createAsyncActionType("GET_CURRENT_WEATHER");
export const GET_LOCATION_AUTOCOMPLETE = createAsyncActionType("GET_LOCATION_AUTOCOMPLETE");
export const SET_INITIAL_FORCAST = createAsyncActionType("SET_INITIAL_FORCAST");

//config
export const SET_DEGREE_UNIT_TYPE = "SET_DEGREE_UNIT_TYPE";
export const SET_DAY_TIME = "SET_DAY_TIME";

//favorites
export const ADD_TO_FAVORITES = createAsyncActionType("ADD_TO_FAVORITES");
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

