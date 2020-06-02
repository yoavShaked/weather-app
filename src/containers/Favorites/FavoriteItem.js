import React from "react";
import {get} from 'lodash/fp';

import { Typography, Tooltip } from "@material-ui/core";
import { UNIT_TYPE } from "../../constants/titles";
import Icon from "../../components/Icon";

import { WeatherItemContainer, WeatherItemRow } from "./styled-components";

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

const FavoriteItem = ({ weather, unitType }) => {
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
      <Typography className="title">{cityName}</Typography>
      <WeatherItemRow>
        <Tooltip title={title}>
          <Typography>{title}</Typography>
        </Tooltip>
        <Icon img={iconId} />
      </WeatherItemRow>
      <WeatherItemRow>
        <Tooltip title={`Feels like ${currentTemperature}`}>
          <Typography>Feels like</Typography>
          <Typography>{currentTemperature}</Typography>
        </Tooltip>
      </WeatherItemRow>
      <WeatherItemRow>
        <Tooltip title={`Temperatures temperatureSummary`}>
          <Typography>Temperatures</Typography>
          <Typography>{temperatureSummary}</Typography>
        </Tooltip>
      </WeatherItemRow>
      <WeatherItemRow className="wind-row">
        <Icon width="57px" height="58px" img="wind" />
        <Tooltip title={`Wind Speed ${windSpeed}`}>
          <Typography>{windSpeed}</Typography>
        </Tooltip>
        <Tooltip title={`Direction ${windDircection}`}>
          <Typography>{windDircection}</Typography>
        </Tooltip>
      </WeatherItemRow>
      <WeatherItemRow>
        <Tooltip title={`Visibily ${visibilty}`}>
          <Typography>Visibily</Typography>
          <Typography>{visibilty}</Typography>
        </Tooltip>
      </WeatherItemRow>
    </WeatherItemContainer>
  );
};

export default FavoriteItem;
