import { apiKey, url } from "../constants/apiDetails";

const getWeatherByLocation = (locationId) =>
  `${url}/forecasts/v1/daily/5day/${locationId}?apikey=${apiKey}&details=false`;

export default getWeatherByLocation;