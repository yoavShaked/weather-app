import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import moment from "moment";
import { get } from "lodash/fp";
import { Typography, Tooltip } from "@material-ui/core";

import { DAY_TIME, UNIT_TYPE } from "../../constants/titles";
import * as weatherActions from "../../actions/weather";

import SwitchLabels from "../../components/SwitchLabels";
import ForcastSkelaton from "../../components/ForcastSkelaton";

import ErrorHandler from "../ErrorHandle";
import WeeklyForcast from "../WeeklyForcast";
import FavoriteAction from "../FavoriteAction";

import {
  Container,
  ActionsContainer,
} from "./styled-components";

const Forcast = ({
  setInitialForcast,
  cityName,
  description,
  isLoading,
  unitType,
  fetchForcast,
}) => {
  const [dayTime, setDayTime] = useState(DAY_TIME.DAY);
  useEffect(() => {
    console.log('fetc'. fetchForcast);
    if (!fetchForcast) {
      setInitialForcast({
        cityName: "Tel Aviv",
        metric: unitType === UNIT_TYPE.CELSIUS,
      });
    }
  }, []);

  if (isLoading) return <ForcastSkelaton />;

  const currentFullTime = `${moment().format("dddd")} ${moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  )}`;

  return (
    <ErrorHandler reducerName="forcast">
      <Container flexDirection="column">
        <Tooltip title={cityName}>
        <Typography className='title'>{cityName}</Typography>
        </Tooltip>
        <Tooltip title={currentFullTime}>
        <Typography className='time'>{currentFullTime}</Typography>
        </Tooltip>
        <Tooltip title={description}>
        <Typography className='description'>{description}</Typography>
        </Tooltip>
        <ActionsContainer>
          <SwitchLabels
            checkedLabel={DAY_TIME.DAY}
            uncheckedLabel={DAY_TIME.NIGHT}
            afterChange={setDayTime}
          />
          <FavoriteAction />
        </ActionsContainer>
        <WeeklyForcast dayTime={dayTime} />
      </Container>
    </ErrorHandler>
  );
};

const mapStateToProps = (state) => ({
  cityName: get(["forcast", "cityName"], state),
  isLoading: get(["forcast", "isLoading"], state),
  description: get(["forcast", "description"], state),
  fetchForcast: get(["forcast", "fetchForcast"], state),
  unitType: get(["config", "unitType"], state),
});

export default connect(mapStateToProps, {
  setInitialForcast: weatherActions.setInitialForcast,
})(Forcast);
