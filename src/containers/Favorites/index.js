import React, {useState} from "react";
import { connect } from "react-redux";

import { get, map } from "lodash/fp";
import { Redirect } from "react-router-dom";

import { UNIT_TYPE } from "../../constants/titles";
import * as weatherActions from "../../actions/weather";

import {
  Container,
} from "./styled-components";
import FavoriteItem from "./FavoriteItem";

const Favorites = ({ favorites, unitType, getDailyForcast }) => {
    const [isRedirect, setRedircet] = useState(false);

  const onClickFavorite = (cityId, isMetric, meta = {}) => () => {
      getDailyForcast({ cityId, metric: isMetric }, meta);
      setRedircet(true);
  }

  const mapFavorite = (favoriteWeather) => {
    const cityName = get("cityName", favoriteWeather);
    const cityId = get("cityId", favoriteWeather);
    const isMetric = unitType === UNIT_TYPE.CELSIUS;

    return (
      <div
        onClick={onClickFavorite(cityId, isMetric, {
          cityName,
        })}
        key={cityName}
      >
        <FavoriteItem weather={favoriteWeather} unitType={unitType} />
      </div>
    );
  };

  if (isRedirect)  return <Redirect to='/'/>
  return <Container>{map(mapFavorite, favorites)}</Container>;
};

const mapStateToProps = (state) => ({
  favorites: get(["favorites", "favorites"], state),
  unitType: get(["config", "unitType"], state),
});

export default connect(mapStateToProps, {
  getDailyForcast: weatherActions.getDailyForcast,
})(Favorites);
