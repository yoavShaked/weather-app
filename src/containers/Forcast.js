import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import moment from 'moment';
import { get } from "lodash/fp";
import { Typography } from "@material-ui/core";
import styled from 'styled-components';
import * as weatherActions from "../actions/weather";
import { DAY_TIME, UNIT_TYPE } from "../constants/titles";

import Flexbox from "../components/common/Flexbox";
import SwitchLabels from "../components/common/SwitchLabels";
import WeeklyForcast from "./WeeklyForcast";
import FavoriteAction from './FavoriteAction';

const Forcast = ({
  setInitialForcast,
  cityName,
  description,
  isLoading,
  unitType,
}) => {
  const [dayTime, setDayTime] = useState(DAY_TIME.DAY);
  useEffect(() => {
    setInitialForcast({
      cityName: "Tel Aviv",
      metric: unitType === UNIT_TYPE.CELSIUS,
    });
  }, []);

  if (isLoading) return <div>Loading</div>;

  const currentFullTime = `${moment().format('dddd')} ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;

  return (
    <Container flexDirection="column">
      <Typography>{cityName}</Typography>
      <Typography>{currentFullTime}</Typography>
      <Typography>{description}</Typography>
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
  );
};

const Container = styled(Flexbox)`
  width: 800px;
  margin: 40px auto auto auto;
  .MuiTypography-body1 {
    margin: 0 auto;
  }
`;

const ActionsContainer = styled(Flexbox)`
  justify-content: space-around;
  margin: 30px 0;
`;

const Top = styled(Flexbox)`
    width: inherit;
    justify-content: space-between;
`;

const TopRight = styled(Flexbox)`
  width: 210px;
  align-items: center;
  justify-content: space-between;
`;

const mapStateToProps = (state) => ({
  cityName: get(["forcast", "cityName"], state),
  isLoading: get(["forcast", "isLoading"], state),
  description: get(["forcast", "description"], state),
  unitType: get(["config", 'unitType'], state),
});

export default connect(mapStateToProps, {
  setInitialForcast: weatherActions.setInitialForcast,
})(Forcast);
