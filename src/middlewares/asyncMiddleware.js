import { get } from "lodash/fp";

const asyncMiddleware = (store) => (next) => (action) => {
  const httpAction = get("HTTP_ACTION", action);
  
  if (!httpAction) {
    return next(action);
  }

  const { endpoint } = httpAction;

  next({ type: httpAction.type.START});

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      store.dispatch({
        type: httpAction.type.RESOLVED,
        payload: data,
      });
    })
    .catch((err) => {
      store.dispatch({
        type: httpAction.type.ERROR,
      });
    });
};

export default asyncMiddleware;
