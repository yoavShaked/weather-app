import { apiKey, url } from "../constants/apiDetails";

const getWeatherByLocation = (locationId) => () => {
  const _url = `${url}/forecasts/v1/daily/5day/${locationId}?apikey=${apiKey}&details=false`;
  return fetch(_url).then((response) => response.json());
};

export default getWeatherByLocation;
