const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  console.log("prev state", store.getState());
  return next(action);
};
export default logger;