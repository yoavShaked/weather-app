import { get } from "lodash/fp";
import * as types from "../actions/types";
import { getDailyForcast } from "../actions/weather";

const initialForcast = (store) => (next) => (action) => {
  const actionType = get("type", action);
  if (actionType !== types.SET_INITIAL_FORCAST.RESOLVED) {
    return next(action);
  }
  const cityId = get(["payload", "0", "Key"], action);
  store.dispatch(getDailyForcast(cityId));
};

export default initialForcast;
