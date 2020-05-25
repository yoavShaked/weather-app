import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import asyncMiddleware from './middlewares/asyncMiddleware';
import loggerMiddelware from './middlewares/loggerMiddleware';

const configureStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(asyncMiddleware, loggerMiddelware)
  );

export default configureStore;