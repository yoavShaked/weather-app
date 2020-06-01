import { get } from "lodash/fp";

const asyncMiddleware = (store) => (next) => (action) => {
  const httpAction = get("HTTP_ACTION", action);
  
  if (!httpAction) {
    return next(action);
  }

  const { endpoint, meta } = httpAction;

  next({ type: httpAction.type.START});

  endpoint()
    .then((data) => {
      store.dispatch({
        type: httpAction.type.RESOLVED,
        payload: data,
        meta
      });
    })
    .catch((err) => {
      store.dispatch({
        type: httpAction.type.ERROR,
        errorMessage: httpAction.errorMessage
      });
    });
};

export default asyncMiddleware;
