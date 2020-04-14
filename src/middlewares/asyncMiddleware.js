import * as types from "../actions/types";

const asyncMiddleware = (store) => (next) => (action) => {
  const httpAction = action["HTTP_ACTION"];

  if (httpAction) {
    const { request } = httpAction;

    next({ type: `${action.type}_${action.status}` });

    request().then((data) => {
      console.log("data resolved:", data);
    }).catch((err) => {
      console.log('err', err)
    });
  } else {
    return next(action);
  }
};

export default asyncMiddleware;
