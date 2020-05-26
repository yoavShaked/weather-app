const createAsyncActionType = (type) => ({
  START: `${type}_START`,
  RESOLVED: `${type}_RESOLVED`,
  ERROR: `${type}_ERROR`,
});

export const GET_DAILY_FORCAST = createAsyncActionType("GET_DAILY_FORCAST");
export const GET_CURRENT_WEATHER = createAsyncActionType("GET_CURRENT_WEATHER");
export const GET_LOCATION_AUTOCOMPLETE = createAsyncActionType("GET_LOCATION_AUTOCOMPLETE");
export const SET_INITIAL_FORCAST = createAsyncActionType("SET_INITIAL_FORCAST");
