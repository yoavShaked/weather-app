import React, {useState} from "react";
import { connect } from "react-redux";

import { get, map } from "lodash/fp";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";

import { UNIT_TYPE } from "../constants/titles";
import * as weatherActions from "../actions/weather";

import Flexbox from "../components/Flexbox";
import Icon from "../components/Icon";

const getWeatherData = (weatherObject, unitType = UNIT_TYPE.CELSIUS) => {
  const _unitType = unitType === UNIT_TYPE.CELSIUS ? "Metric" : "Imperial";
  const unit = unitType === UNIT_TYPE.CELSIUS ? "C" : "F";
  const minTempreature = get(
    ["tempratureSummary", "min", _unitType, "Value"],
    weatherObject
  );
  const maxTemperature = get(
    ["tempratureSummary", "max", _unitType, "Value"],
    weatherObject
  );
  const currentTemperatureValue = get(
    ["currentTemperature", _unitType, "Value"],
    weatherObject
  );

  return {
    cityName: get("cityName", weatherObject),
    iconId: get("iconId", weatherObject),
    title: get("weatherTitle", weatherObject),
    windSpeed: get("windSpeed", weatherObject),
    windDircection: get("windDirction", weatherObject),
    visibilty: get("visibilty", weatherObject),
    currentTemperature: `${currentTemperatureValue} ${unit}`,
    temperatureSummary: `${minTempreature} / ${maxTemperature}`,
  };
};

const WeatherItem = ({ weather, unitType }) => {
  const {
    cityName,
    visibilty,
    iconId,
    title,
    windDircection,
    windSpeed,
    currentTemperature,
    temperatureSummary,
  } = getWeatherData(weather, unitType);

  return (
    <WeatherItemContainer flexDirection="column">
      <WeatherItemHeader>
        <Typography>{cityName}</Typography>
        <Typography>{title}</Typography>
        <Icon img={iconId} />
        <Typography>Feel like</Typography>
        <Typography>{currentTemperature}</Typography>
      </WeatherItemHeader>
      <Flexbox>
        <Typography>Past Day Temperatures</Typography>
        <Typography>{temperatureSummary}</Typography>
      </Flexbox>
      <Flexbox>
        <Icon img="wind" />
        <Flexbox flexDirection="column">
          <Typography>Wind Speed</Typography>
          <Typography>{windSpeed}</Typography>
        </Flexbox>
        <Flexbox flexDirection="column">
          <Typography>Wind Direction</Typography>
          <Typography>{windDircection}</Typography>
        </Flexbox>
      </Flexbox>
      <Flexbox>
        <Typography>Visibily</Typography>
        <Typography>{visibilty}</Typography>
      </Flexbox>
    </WeatherItemContainer>
  );
};

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
        <WeatherItem weather={favoriteWeather} unitType={unitType} />
      </div>
    );
  };

  if (isRedirect)  return <Redirect to='/'/>
  return <Container>{map(mapFavorite, favorites)}</Container>;
};

const WeatherItemContainer = styled(Flexbox)``;

const WeatherItemHeader = styled(Flexbox)``;

const Container = styled(Flexbox)``;

const mapStateToProps = (state) => ({
  favorites: get(["favorites", "favorites"], state),
  unitType: get(["config", "unitType"], state),
});

export default connect(mapStateToProps, {
  getDailyForcast: weatherActions.getDailyForcast,
})(Favorites);
