import React from "react";
import {connect} from 'react-redux';

import styled from "styled-components";
import { get, map } from "lodash/fp";
import { Typography } from "@material-ui/core";

import Flexbox from "../components/common/Flexbox";

const WeeklyForcast = ({ weatherForcast, dayTime }) => {
  const mapWeather = (weather) => {
    const minTemperature = get(["temperature", "min"], weather);
    const maxTemperature = get(["temperature", "max"], weather);
    const description = get([dayTime, "IconPhrase"], weather);
    return (
      <WeatherItemContainer
        flexDirection="column"
        key={`${minTemperature} / ${maxTemperature}`}
      >
        <Typography>{description}</Typography>
        <Typography>{`${minTemperature} / ${maxTemperature}`}</Typography>
      </WeatherItemContainer>
    );
  };

  return <Flexbox>{map(mapWeather, weatherForcast)}</Flexbox>;
};

const WeatherItemContainer = styled(Flexbox)`
  margin: 20px;
`;

const mapStateToProps = (state) => ({
  weatherForcast: get(["forcast", "weatherForcast"], state),
  isLoading: get(['forcst', 'isLoading'], state),
});

export default connect(mapStateToProps)(WeeklyForcast);