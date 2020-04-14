import { HTTP_REQUEST } from "./types";

const httpAction = (action) => {
  const httpRequestTemplate = {
    request: null,
    payload: null,
    status: HTTP_REQUEST.START,
    type: "",
  };

  return { HTTP_ACTION: Object.assign(httpRequestTemplate, action) };
};

export default httpAction;
