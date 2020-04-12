import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';

const middlewares = [];

const configureStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    applyMiddleware(middlewares)
);

export default configureStore;