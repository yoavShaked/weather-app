import * as coronaApiPropperties from '../contants/coronaApi';

function fetchContries() {
  return fetch(coronaApiPropperties.URL, {
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": coronaApiPropperties.RAPID_HOST,
      "x-rapidapi-key": coronaApiPropperties.API_KEY,
    }
  }).then((response) => {
    return response.json();
  });
}

export default fetchContries;
