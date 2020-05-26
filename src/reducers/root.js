import { combineReducers } from 'redux';
import weather from "./weatherReducer";
import forcast from './forcastReducer';

export default combineReducers({ weather, forcast });