import { apiKey, url } from "../constants/apiDetails";

const getForcast = (cityId, metric) => () => {
  const _url = `${url}/forecasts/v1/daily/5day/${cityId}?apikey=${apiKey}&details=true&metric=${metric}`;
  return fetch(_url).then((res) => res.json());
}

export default getForcast;