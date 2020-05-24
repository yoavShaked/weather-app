import { apiKey, url } from "../constants/apiDetails";

const getLocationAutocomplete = (locationQuery) => () => {
  const _url = `${url}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${locationQuery}`;
  return fetch(_url).then((response) => response.json());
};

export default getLocationAutocomplete;
