import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import asyncMiddleware from './middlewares/asyncMiddleware';
import loggerMiddelware from './middlewares/loggerMiddleware';
import initialForcasrMiddleware from './middlewares/initialForcastMiddleware';

const configureStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(loggerMiddelware, asyncMiddleware, initialForcasrMiddleware)
  );

export default configureStore;