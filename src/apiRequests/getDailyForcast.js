import { apiKey, url } from "../constants/apiDetails";

const getForcast = (cityId, metric) =>
  `${url}/forecasts/v1/daily/5day/${cityId}?apikey=${apiKey}&details=false&metric=${metric}`;

export default getForcast;