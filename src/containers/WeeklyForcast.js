import React from "react";
import {connect} from 'react-redux';

import styled from "styled-components";
import { get } from "lodash/fp";
import { Typography } from "@material-ui/core";

import Flexbox from "../components/common/Flexbox";
import Icon from '../components/common/Icon';

const WeeklyForcast = ({ weatherForcast, dayTime }) => {
  const mapWeather = (weather, index) => {
    const minTemperature = get(["temperature", "min"], weather);
    const maxTemperature = get(["temperature", "max"], weather);
    const description = get([dayTime, "IconPhrase"], weather);
    const iconId = get([dayTime, "Icon"], weather);

    return (
      <WeatherItemContainer
        flexDirection="column"
        key={`${index}-${minTemperature}-${maxTemperature}`}
      >
        <Icon img={iconId} />
        <Typography>{description}</Typography>
        <Typography>{`${minTemperature} / ${maxTemperature}`}</Typography>
      </WeatherItemContainer>
    );
  };

  return <Container>{weatherForcast.map(mapWeather)}</Container>;
};

const WeatherItemContainer = styled(Flexbox)`
  margin: 20px;
  flex-wrap: wrap;
`;

const Container = styled(Flexbox)`
    border: 1px solid;
    border-radius: 7px;
    height: 209px;
    border-color: #27c2ffc7;
    -webkit-box-shadow: 2px 2px 13px 5px #27c2ffc7;
    box-shadow: 2px 2px 13px 5px rgba(39,194,255,0.78);
`;

const mapStateToProps = (state) => ({
  weatherForcast: get(["forcast", "weatherForcast"], state),
  isLoading: get(['forcst', 'isLoading'], state),
});

export default connect(mapStateToProps)(WeeklyForcast);