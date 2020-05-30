import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { get } from "lodash/fp";
import { Typography } from "@material-ui/core";

import * as weatherActions from "../../actions/weather";
import { DAY_TIME } from "../../constants/titles";

import Flexbox from "./Flexbox";
import SwitchLabels from "./SwitchLabels";
import WeeklyForcast from "./WeeklyForcast";

const Forcast = ({ setInitialForcast, cityName, description, isLoading }) => {
  const [dayTime, setDayTime] = useState(DAY_TIME.DAY);
  useEffect(() => {
    setInitialForcast({ cityName: "Tel Aviv" });
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
});

export default connect(mapStateToProps, {
  setInitialForcast: weatherActions.setInitialForcast,
})(Forcast);
