import {combineReducers} from 'redux';
import Weather from './Weather';

const rootReducer = combineReducers({
  weather: Weather,
});

export default rootReducer;
