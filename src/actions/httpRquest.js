const httpAction = (action) => {
  const httpRequestTemplate = {
    endpoint: null,
    payload: null,
    type: "",
  };

  return { HTTP_ACTION: Object.assign(httpRequestTemplate, action) };
};

export default httpAction;
