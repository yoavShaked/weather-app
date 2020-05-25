import { apiKey, url } from "../constants/apiDetails";

const getLocationAutocomplete = (locationQuery) => 
  `${url}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${locationQuery}`;

export default getLocationAutocomplete;
