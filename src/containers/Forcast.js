import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { get } from "lodash/fp";
import { Typography } from "@material-ui/core";

import * as weatherActions from "../actions/weather";
import { DAY_TIME, UNIT_TYPE } from "../constants/titles";

import Flexbox from "../components/common/Flexbox";
import SwitchLabels from "../components/common/SwitchLabels";
import WeeklyForcast from "./WeeklyForcast";

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
  return (
    <Flexbox flexDirection="column">
      <Flexbox>
        <Typography>{cityName}</Typography>
        <SwitchLabels
          checkedLabel={DAY_TIME.DAY}
          uncheckedLabel={DAY_TIME.NIGHT}
          afterChange={setDayTime}
        />
      </Flexbox>
      <Typography>{description}</Typography>
      <WeeklyForcast dayTime={dayTime} />
    </Flexbox>
  );
};

const mapStateToProps = (state) => ({
  cityName: get(["forcast", "cityName"], state),
  isLoading: get(["forcast", "isLoading"], state),
  description: get(["forcast", "description"], state),
  unitType: get(["config", 'unitType'], state),
});

export default connect(mapStateToProps, {
  setInitialForcast: weatherActions.setInitialForcast,
})(Forcast);
