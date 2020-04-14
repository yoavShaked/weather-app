import * as types from "../actions/types";

function handleResponse(response, next, action) {
  const { error } = response;
  if (error) {
    next({
      type: action.type.ERROR,
    });
  } else {
    next({
      type: action.type.RESOLVED,
      payload: response.data,
    });
  }
}
const asyncMiddleware = (store) => (next) => (action) => {
  const httpAction = action["HTTP_ACTION"];

  if (httpAction) {
    const { request } = httpAction;

    next({
      type: httpAction.type.START
    });

    request()
      .then((data) => {
        handleResponse(data, next, httpAction);
        console.log("data resolved:", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  } else {
    return next(action);
  }
};

export default asyncMiddleware;
