import { apiKey, url } from "../constants/apiDetails";

const getLocationCurrentWeather = (locationId) => () => {
  const _url = `${url}/currentconditions/v1/${locationId}?apikey=${apiKey}&details=true`;
  return fetch(_url).then((response) => response.json());
};

export default getLocationCurrentWeather;