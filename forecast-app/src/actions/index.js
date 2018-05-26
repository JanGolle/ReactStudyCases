import axios from 'axios';
import Config from '../../config.json';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${Config.API_ENDPOINT}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
