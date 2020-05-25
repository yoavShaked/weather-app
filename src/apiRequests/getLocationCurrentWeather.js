import { apiKey, url } from "../constants/apiDetails";

const getLocationCurrentWeather = (locationId) =>
  `${url}/currentconditions/v1/${locationId}?apikey=${apiKey}&details=true`;

export default getLocationCurrentWeather;