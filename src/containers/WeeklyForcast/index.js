import React from "react";
import { connect } from "react-redux";

import { get } from "lodash/fp";
import { Typography, Tooltip } from "@material-ui/core";

import Icon from "../../components/Icon";
import { WeatherItemContainer, Container } from "./styled-components";

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
        <Tooltip title={description}>
          <Typography className="description">{description}</Typography>
        </Tooltip>
        <Typography>{`${minTemperature} / ${maxTemperature}`}</Typography>
      </WeatherItemContainer>
    );
  };

  return <Container>{weatherForcast.map(mapWeather)}</Container>;
};

const mapStateToProps = (state) => ({
  weatherForcast: get(["forcast", "weatherForcast"], state),
});

export default connect(mapStateToProps)(WeeklyForcast);
