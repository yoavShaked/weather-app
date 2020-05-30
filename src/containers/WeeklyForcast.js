import React from "react";
import {connect} from 'react-redux';

import styled from "styled-components";
import { get } from "lodash/fp";
import { Typography } from "@material-ui/core";

import Flexbox from "../components/common/Flexbox";

const WeeklyForcast = ({ weatherForcast, dayTime }) => {
  const mapWeather = (weather, index) => {
    const minTemperature = get(["temperature", "min"], weather);
    const maxTemperature = get(["temperature", "max"], weather);
    const description = get([dayTime, "IconPhrase"], weather);
    return (
      <WeatherItemContainer
        flexDirection="column"
        key={`${index}-${minTemperature}-${maxTemperature}`}
      >
        <Typography>{description}</Typography>
        <Typography>{`${minTemperature} / ${maxTemperature}`}</Typography>
      </WeatherItemContainer>
    );
  };

  return <Flexbox>{weatherForcast.map(mapWeather)}</Flexbox>;
};

const WeatherItemContainer = styled(Flexbox)`
  margin: 20px;
`;

const mapStateToProps = (state) => ({
  weatherForcast: get(["forcast", "weatherForcast"], state),
  isLoading: get(['forcst', 'isLoading'], state),
});

export default connect(mapStateToProps)(WeeklyForcast);