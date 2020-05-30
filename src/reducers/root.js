import { combineReducers } from 'redux';
import weather from "./weatherReducer";
import forcast from './forcastReducer';
import config from './configReducer';
import favorites from './favoritesReducer';

export default combineReducers({ weather, forcast, config, favorites });