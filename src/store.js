import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import asyncMiddleware from './middlewares/asyncMiddleware';
import loggerMiddelware from './middlewares/loggerMiddleware';

const middlewares = [loggerMiddelware, asyncMiddleware];

const configureStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default configureStore;