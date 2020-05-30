import { get } from "lodash/fp";
import * as types from "../actions/types";
import { getDailyForcast } from "../actions/weather";

const initialForcast = (store) => (next) => (action) => {
  const actionType = get("type", action);
  if (actionType !== types.SET_INITIAL_FORCAST.RESOLVED) {
    return next(action);
  }
  const cityId = get(["payload", "0", "Key"], action);
  const { meta } = action;

  store.dispatch(
    getDailyForcast(
      { cityId, metric: get("metric", meta) },
      get("meta", action)
    )
  );
};

export default initialForcast;
